import './common/typedefs';
import { ResultCollector } from './analytics/result_collector';
import Events from './common/events';
import { ImageDebug } from './common/image_debug';
import { ImageWrapper } from './common/image_wrapper';
import { merge } from './common/merge';
import Config from './config/config';
import { BarcodeDecoder } from './decoder/barcode_decoder';
import CameraAccess from './input/camera_access';
import BarcodeLocator from './locator/barcode_locator';
import { FrameGrabber } from 'Input/frame_grabber';
import { InputStream } from 'Input/input_stream';

let _inputStream;
let _framegrabber;
let _stopped;
const _canvasContainer = {
    ctx: {
        image: null,
        overlay: null
    },
    dom: {
        image: null,
        overlay: null
    }
};
let _inputImageWrapper;
let _boxSize;
let _decoder;
let _workerPool = [];
let _onUIThread = true;
let _resultCollector;
let _config = {};

function initializeData(imageWrapper) {
    initBuffers(imageWrapper);
    _decoder = new BarcodeDecoder(_config.decoder, _inputImageWrapper);
}

function initInputStream(callback) {
    let video;
    if (_config.inputStream.type === 'VideoStream') {
        video = document.createElement('video');
        _inputStream = InputStream.createVideoStream(video);
    } else if (_config.inputStream.type === 'ImageStream') {
        _inputStream = InputStream.createImageStream();
    } else if (_config.inputStream.type === 'LiveStream') {
        const viewport = getViewPort();
        if (viewport) {
            video = viewport.querySelector('video');
            if (!video) {
                video = document.createElement('video');
                viewport.appendChild(video);
            }
        }
        _inputStream = InputStream.createLiveStream(video);
        CameraAccess.request(video, _config.inputStream.constraints)
            .then(() => _inputStream.trigger('canrecord'), err => callback(err));
    }

    _inputStream.setAttribute('preload', 'auto');
    _inputStream.setInputStream(_config.inputStream);
    _inputStream.addEventListener('canrecord', canRecord.bind(undefined, callback));
}

function getViewPort() {
    const target = _config.inputStream.target;
    // Check if target is already a DOM element
    if (target && target.nodeName && target.nodeType === 1) {
        return target;
    } else {
        // Use '#interactive.viewport' as a fallback selector (backwards compatibility)
        const selector = typeof target === 'string' ? target : '#interactive.viewport';
        return document.querySelector(selector);
    }
}

function canRecord(cb) {
    BarcodeLocator.checkImageConstraints(_inputStream, _config.locator);
    initCanvas(_config);
    _framegrabber = new FrameGrabber(_inputStream, _canvasContainer.dom.image);

    adjustWorkerPool(_config.numOfWorkers, function () {
        if (_config.numOfWorkers === 0) {
            initializeData();
        }
        ready(cb);
    });
}

function ready(cb) {
    _inputStream.play();
    cb();
}

function initCanvas() {
    if (typeof document !== 'undefined') {
        const $viewport = getViewPort();
        _canvasContainer.dom.image = document.querySelector('canvas.imgBuffer');
        if (!_canvasContainer.dom.image) {
            _canvasContainer.dom.image = document.createElement('canvas');
            _canvasContainer.dom.image.className = 'imgBuffer';
            if ($viewport && _config.inputStream.type === 'ImageStream') {
                $viewport.appendChild(_canvasContainer.dom.image);
            }
        }
        _canvasContainer.ctx.image = _canvasContainer.dom.image.getContext('2d');
        _canvasContainer.dom.image.width = _inputStream.getCanvasWidth();
        _canvasContainer.dom.image.height = _inputStream.getCanvasHeight();

        _canvasContainer.dom.overlay = document.querySelector('canvas.drawingBuffer');
        if (!_canvasContainer.dom.overlay) {
            _canvasContainer.dom.overlay = document.createElement('canvas');
            _canvasContainer.dom.overlay.className = 'drawingBuffer';
            if ($viewport) {
                $viewport.appendChild(_canvasContainer.dom.overlay);
            }
            const clearFix = document.createElement('br');
            clearFix.setAttribute('clear', 'all');
            if ($viewport) {
                $viewport.appendChild(clearFix);
            }
        }
        _canvasContainer.ctx.overlay = _canvasContainer.dom.overlay.getContext('2d');
        _canvasContainer.dom.overlay.width = _inputStream.getCanvasWidth();
        _canvasContainer.dom.overlay.height = _inputStream.getCanvasHeight();
    }
}

function initBuffers(imageWrapper) {
    if (imageWrapper) {
        _inputImageWrapper = imageWrapper;
    } else {
        _inputImageWrapper = new ImageWrapper({
            x: _inputStream.getWidth(),
            y: _inputStream.getHeight()
        });
    }

    if (ENV.development) {
        console.log(_inputImageWrapper.size);
    }
    _boxSize = [
        { x: 0, y: 0 },
        { x: 0, y: _inputImageWrapper.size.y },
        { x: _inputImageWrapper.size.x, y: _inputImageWrapper.size.y },
        { x: _inputImageWrapper.size.x, y: 0 }
    ];
    BarcodeLocator.init(_inputImageWrapper, _config.locator);
}

function getBoundingBoxes() {
    if (_config.locate) {
        return BarcodeLocator.locate();
    } else {
        return [[
            _boxSize[0],
            _boxSize[1],
            _boxSize[2],
            _boxSize[3]
        ]];
    }
}

function transform(polygon, offset) {
    polygon.forEach(vertex => {
        vertex.x += offset.x;
        vertex.y += offset.y;
    });
}

function transformResult(result, offset) {
    if (result.barcodes) {
        result.barcodes.forEach(barcode => transformResult(barcode, offset));
    }

    if (result.line) {
        transform(result.line, offset);
    }

    if (result.box) {
        transform(result.box, offset);
    }

    if (result.boxes) {
        result.boxes.forEach(box => transform(box, offset));
    }
}

function addResult(result, imageData, canvasWidth, canvasHeight) {
    if (!imageData || !_resultCollector) {
        return;
    }

    if (result.barcodes) {
        result.barcodes.filter(barcode => barcode.codeResult).forEach(barcode => addResult(barcode, imageData, canvasWidth, canvasHeight));
    } else if (result.codeResult) {
        _resultCollector.addResult(imageData, canvasWidth, canvasHeight, result.codeResult);
    }
}

function hasCodeResult(result) {
    return result && (!!result.codeResult || result.barcodes && result.barcodes.some(barcode => barcode.codeResult));
}

function publishResult(result, imageData) {
    let resultToPublish = result;

    if (result && _onUIThread) {
        const offset = _inputStream.getTopRight();

        if (offset.x !== 0 || offset.y !== 0) {
            transformResult(result, offset);
        }

        addResult(result, imageData, _inputStream.getCanvasWidth(), _inputStream.getCanvasHeight());
        resultToPublish = result.barcodes || result;
    }

    Events.publish('processed', resultToPublish);
    if (hasCodeResult(result)) {
        Events.publish('detected', resultToPublish);
    }
}

function locateAndDecode() {
    const boxes = getBoundingBoxes();

    if (boxes) {
        const result = _decoder.decodeFromBoundingBoxes(boxes) || {};
        result.boxes = boxes;
        publishResult(result, _inputImageWrapper.data);
    } else {
        publishResult();
    }
}

function update() {
    let availableWorker;

    if (_onUIThread) {
        if (_workerPool.length > 0) {
            availableWorker = _workerPool.find(workerThread => !workerThread.busy);
            if (availableWorker) {
                _framegrabber.attachData(availableWorker.imageData);
            } else {
                return; // all workers are busy
            }
        } else {
            _framegrabber.attachData(_inputImageWrapper.data);
        }
        if (_framegrabber.grab()) {
            if (availableWorker) {
                availableWorker.busy = true;
                availableWorker.worker.postMessage({
                    cmd: 'process',
                    imageData: availableWorker.imageData
                }, [availableWorker.imageData.buffer]);
            } else {
                locateAndDecode();
            }
        }
    } else {
        locateAndDecode();
    }
}

function startContinuousUpdate() {
    const delay = 1000 / (_config.frequency || 60);
    let next = null;

    _stopped = false;
    (function frame(timestamp) {
        next = next || timestamp;
        if (!_stopped) {
            if (timestamp >= next) {
                next += delay;
                update();
            }
            window.requestAnimationFrame(frame);
        }
    }(performance.now()));
}

function start() {
    if (_onUIThread && _config.inputStream.type === 'LiveStream') {
        startContinuousUpdate();
    } else {
        update();
    }
}

function initWorker(cb) {
    const blobURL = generateWorkerBlob();
    const workerThread = {
        worker: new Worker(blobURL),
        imageData: new Uint8Array(_inputStream.getWidth() * _inputStream.getHeight()),
        busy: true
    };

    workerThread.worker.onmessage = ev => {
        if (ev.data.event === 'initialized') {
            URL.revokeObjectURL(blobURL);
            workerThread.busy = false;
            workerThread.imageData = new Uint8Array(ev.data.imageData);
            if (ENV.development) {
                console.log('Worker initialized');
            }
            return cb(workerThread);
        } else if (ev.data.event === 'processed') {
            workerThread.imageData = new Uint8Array(ev.data.imageData);
            workerThread.busy = false;
            publishResult(ev.data.result, workerThread.imageData);
        } else if (ev.data.event === 'error') {
            if (ENV.development) {
                console.log('Worker error:', ev.data.message);
            }
        }
    };

    workerThread.worker.postMessage({
        cmd: 'init',
        size: { x: _inputStream.getWidth(), y: _inputStream.getHeight() },
        imageData: workerThread.imageData,
        config: configForWorker(_config)
    }, [workerThread.imageData.buffer]);
}

function configForWorker(config) {
    return merge(config, { inputStream: { target: null } });
}

function workerInterface(factory) {
    let Quagga;
    /* eslint-disable no-undef*/
    if (factory) {
        Quagga = factory().default;
        if (!Quagga) {
            self.postMessage({ 'event': 'error', message: 'Quagga could not be created' });
            return;
        }
    }
    let imageWrapper;

    self.onmessage = function (e) {
        if (e.data.cmd === 'init') {
            const config = e.data.config;
            config.numOfWorkers = 0;
            imageWrapper = new Quagga.ImageWrapper({
                x: e.data.size.x,
                y: e.data.size.y
            }, new Uint8Array(e.data.imageData));
            Quagga.init(config, ready, imageWrapper);
            Quagga.onProcessed(onProcessed);
        } else if (e.data.cmd === 'process') {
            imageWrapper.data = new Uint8Array(e.data.imageData);
            Quagga.start();
        } else if (e.data.cmd === 'setReaders') {
            Quagga.setReaders(e.data.readers);
        }
    };

    function onProcessed(result) {
        self.postMessage({
            'event': 'processed',
            imageData: imageWrapper.data,
            result: result
        }, [imageWrapper.data.buffer]);
    }

    function ready() { // eslint-disable-line
        self.postMessage({ 'event': 'initialized', imageData: imageWrapper.data }, [imageWrapper.data.buffer]);
    }

    /* eslint-enable */
}

function generateWorkerBlob() {
    let factorySource;

    /* jshint ignore:start */
    if (typeof __factorySource__ !== 'undefined') {
        factorySource = __factorySource__; // eslint-disable-line no-undef
    }
    /* jshint ignore:end */

    const blob = new Blob(['(' + workerInterface.toString() + ')(' + factorySource + ');'],
        { type: 'text/javascript' });

    return window.URL.createObjectURL(blob);
}

function setReaders(readers) {
    if (_decoder) {
        _decoder.setReaders(readers);
    } else if (_onUIThread && _workerPool.length > 0) {
        _workerPool.forEach(workerThread => workerThread.worker.postMessage({ cmd: 'setReaders', readers: readers }));
    }
}

function adjustWorkerPool(capacity, cb) {
    const increaseBy = capacity - _workerPool.length;
    if (increaseBy === 0) {
        return cb && cb();
    }
    if (increaseBy < 0) {
        const workersToTerminate = _workerPool.slice(increaseBy);
        workersToTerminate.forEach(function (workerThread) {
            workerThread.worker.terminate();
            if (ENV.development) {
                console.log('Worker terminated!');
            }
        });
        _workerPool = _workerPool.slice(0, increaseBy);
        return cb && cb();
    } else {
        for (let i = 0; i < increaseBy; i++) {
            initWorker(workerInitialized);
        }

        function workerInitialized(workerThread) {
            _workerPool.push(workerThread);
            if (_workerPool.length >= capacity) {
                cb && cb();
            }
        }
    }
}

export default {
    init: function (config, cb, imageWrapper) {
        _config = merge(Config, config);
        if (imageWrapper) {
            _onUIThread = false;
            initializeData(imageWrapper);
            return cb();
        } else {
            initInputStream(cb);
        }
    },
    start: function () {
        start();
    },
    stop: function () {
        _stopped = true;
        adjustWorkerPool(0);
        if (_config.inputStream.type === 'LiveStream') {
            CameraAccess.release();
            _inputStream.clearEventHandlers();
        }
    },
    pause: function () {
        _stopped = true;
    },
    onDetected: function (callback) {
        Events.subscribe('detected', callback);
    },
    offDetected: function (callback) {
        Events.unsubscribe('detected', callback);
    },
    onProcessed: function (callback) {
        Events.subscribe('processed', callback);
    },
    offProcessed: function (callback) {
        Events.unsubscribe('processed', callback);
    },
    setReaders: function (readers) {
        setReaders(readers);
    },
    registerResultCollector: (resultCollector) => {
        if (resultCollector && typeof resultCollector.addResult === 'function') {
            _resultCollector = resultCollector;
        }
    },
    canvas: _canvasContainer,
    decodeSingle: function (config, resultCallback) {
        config = merge({
            inputStream: {
                type: 'ImageStream',
                sequence: false,
                size: 800,
                src: config.src
            },
            numOfWorkers: (ENV.development && config.debug) ? 0 : 1,
            locator: {
                halfSample: false
            }
        }, config);

        this.init(config, () => {
            Events.once('processed', result => {
                this.stop();
                resultCallback.call(null, result);
            }, true);
            start();
        });
    },
    ImageWrapper,
    ImageDebug,
    ResultCollector,
    CameraAccess
};
