import './common/typedefs';
import { ResultCollector } from './analytics/result_collector';
import Events from './common/events';
import { ImageDebug } from './common/image_debug';
import { ImageWrapper } from './common/image_wrapper';
import { merge } from './common/merge';
import { config } from './config/config';
import { BarcodeDecoder } from './decoder/barcode_decoder';
import CameraAccess from './input/camera_access';
import { FrameGrabber } from './input/frame_grabber';
import { InputStream } from './input/input_stream';
import BarcodeLocator from './locator/barcode_locator.2';

export interface WorkerThread {
    worker: Worker;
    imageData: Uint8Array;
    busy: boolean;
}

export class Quagga {
    private _inputStream: InputStream;
    private _frameGrabber: FrameGrabber;
    private _stopped: boolean;
    private readonly _canvasContainer = {
        ctx: {
            image: null,
            overlay: null
        },
        dom: {
            image: null,
            overlay: null
        }
    };
    private _inputImageWrapper;
    private _boxSize;
    private _decoder: BarcodeDecoder;
    private _workerPool = [];
    private _onUIThread = true;
    private _resultCollector: ResultCollector;
    private _config = {};

    private _initializeData(imageWrapper: ImageWrapper): void {
        this._initBuffers(imageWrapper);
        this._decoder = new BarcodeDecoder(this._config.decoder, this._inputImageWrapper);
    }

    private _initInputStream(callback: (err?: any) => void): void {
        let video: HTMLVideoElement;
        if (this._config.inputStream.type === 'VideoStream') {
            video = document.createElement('video');
            this._inputStream = InputStream.createVideoStream(video);
        } else if (this._config.inputStream.type === 'ImageStream') {
            this._inputStream = InputStream.createImageStream();
        } else if (this._config.inputStream.type === 'LiveStream') {
            const viewport = this._getViewPort();
            if (viewport) {
                video = viewport.querySelector('video');
                if (!video) {
                    video = document.createElement('video');
                    viewport.appendChild(video);
                }
            }
            this._inputStream = InputStream.createLiveStream(video);
            CameraAccess.request(video, this._config.inputStream.constraints)
                .then(() => this._inputStream.trigger('canrecord'), err => callback(err));
        }

        this._inputStream.setAttribute('preload', 'auto');
        this._inputStream.setInputStream(this._config.inputStream);
        this._inputStream.addEventListener('canrecord', this._canRecord.bind(undefined, callback));
    }

    private _getViewPort(): Element {
        const target = this._config.inputStream.target;
        // Check if target is already a DOM element
        if (target && target.nodeName && target.nodeType === 1) {
            return target;
        } else {
            // Use '#interactive.viewport' as a fallback selector (backwards compatibility)
            const selector = typeof target === 'string' ? target : '#interactive.viewport';
            return document.querySelector(selector);
        }
    }

    private _canRecord(cb: () => void): void {
        BarcodeLocator.checkImageConstraints(this._inputStream, this._config.locator);
        this._initCanvas(this._config);
        this._frameGrabber = new FrameGrabber(this._inputStream, this._canvasContainer.dom.image);

        this._adjustWorkerPool(this._config.numOfWorkers, function () {
            if (this._config.numOfWorkers === 0) {
                this._initializeData();
            }
            this._ready(cb);
        });
    }

    private _ready(cb): void {
        this._inputStream.play();
        cb();
    }

    private _initCanvas(): void {
        if (typeof document !== 'undefined') {
            const viewport = this._getViewPort();
            this._canvasContainer.dom.image = document.querySelector('canvas.imgBuffer');
            if (!this._canvasContainer.dom.image) {
                this._canvasContainer.dom.image = document.createElement('canvas');
                this._canvasContainer.dom.image.className = 'imgBuffer';
                if (viewport && this._config.inputStream.type === 'ImageStream') {
                    viewport.appendChild(this._canvasContainer.dom.image);
                }
            }
            this._canvasContainer.ctx.image = this._canvasContainer.dom.image.getContext('2d');
            this._canvasContainer.dom.image.width = this._inputStream.getCanvasWidth();
            this._canvasContainer.dom.image.height = this._inputStream.getCanvasHeight();

            this._canvasContainer.dom.overlay = document.querySelector('canvas.drawingBuffer');
            if (!this._canvasContainer.dom.overlay) {
                this._canvasContainer.dom.overlay = document.createElement('canvas');
                this._canvasContainer.dom.overlay.className = 'drawingBuffer';
                if (viewport) {
                    viewport.appendChild(this._canvasContainer.dom.overlay);
                }
                const clearFix = document.createElement('br');
                clearFix.setAttribute('clear', 'all');
                if (viewport) {
                    viewport.appendChild(clearFix);
                }
            }
            this._canvasContainer.ctx.overlay = this._canvasContainer.dom.overlay.getContext('2d');
            this._canvasContainer.dom.overlay.width = this._inputStream.getCanvasWidth();
            this._canvasContainer.dom.overlay.height = this._inputStream.getCanvasHeight();
        }
    }

    private _initBuffers(imageWrapper: ImageWrapper): void {
        if (imageWrapper) {
            this._inputImageWrapper = imageWrapper;
        } else {
            this._inputImageWrapper = new ImageWrapper({
                x: this._inputStream.getWidth(),
                y: this._inputStream.getHeight()
            });
        }

        if (process.env.NODE_ENV !== 'production') {
            console.log(this._inputImageWrapper.size);
        }
        this._boxSize = [
            { x: 0, y: 0 },
            { x: 0, y: this._inputImageWrapper.size.y },
            { x: this._inputImageWrapper.size.x, y: this._inputImageWrapper.size.y },
            { x: this._inputImageWrapper.size.x, y: 0 }
        ];
        BarcodeLocator.init(this._inputImageWrapper, this._config.locator);
    }

    private _getBoundingBoxes() {
        if (this._config.locate) {
            return BarcodeLocator.locate();
        } else {
            return [[
                this._boxSize[0],
                this._boxSize[1],
                this._boxSize[2],
                this._boxSize[3]
            ]];
        }
    }

    private _transform(polygon, offset): void {
        polygon.forEach(vertex => {
            vertex.x += offset.x;
            vertex.y += offset.y;
        })
    }

    private _transformResult(result, offset): void {
        if (result.barcodes) {
            result.barcodes.forEach(barcode => this._transformResult(barcode, offset));
        }

        if (result.line) {
            this._transform(result.line, offset);
        }

        if (result.box) {
            this._transform(result.box, offset);
        }

        if (result.boxes) {
            result.boxes.forEach(box => this._transform(box, offset));
        }
    }

    private _addResult(result, imageData, canvasWidth, canvasHeight): void {
        if (!imageData || !this._resultCollector) {
            return;
        }

        if (result.barcodes) {
            result.barcodes
                .filter(barcode => barcode.codeResult)
                .forEach(barcode => this._addResult(barcode, imageData, canvasWidth, canvasHeight));
        } else if (result.codeResult) {
            this._resultCollector.addResult(imageData, canvasWidth, canvasHeight, result.codeResult);
        }
    }

    private _hasCodeResult(result) {
        return result && (!!result.codeResult || result.barcodes && result.barcodes.some(barcode => barcode.codeResult));
    }

    private _publishResult(result, imageData) {
        let resultToPublish = result;

        if (result && this._onUIThread) {
            const offset = this._inputStream.getTopRight();

            if (offset.x !== 0 || offset.y !== 0) {
                this._transformResult(result, offset);
            }

            this._addResult(result, imageData, this._inputStream.getCanvasWidth(), this._inputStream.getCanvasHeight());
            resultToPublish = result.barcodes || result;
        }

        Events.publish('processed', resultToPublish);
        if (this._hasCodeResult(result)) {
            Events.publish('detected', resultToPublish);
        }
    }

    private _locateAndDecode(): void {
        const boxes = this._getBoundingBoxes();

        if (boxes) {
            const result = this._decoder.decodeFromBoundingBoxes(boxes) || {};
            result.boxes = boxes;
            this._publishResult(result, this._inputImageWrapper.data);
        } else {
            this._publishResult();
        }
    }

    private _update(): void {
        let availableWorker;

        if (this._onUIThread) {
            if (this._workerPool.length > 0) {
                availableWorker = this._workerPool.find(workerThread => !workerThread.busy);
                if (availableWorker) {
                    this._frameGrabber.attachData(availableWorker.imageData);
                } else {
                    return; // all workers are busy
                }
            } else {
                this._frameGrabber.attachData(this._inputImageWrapper.data);
            }
            if (this._frameGrabber.grab()) {
                if (availableWorker) {
                    availableWorker.busy = true;
                    availableWorker.worker.postMessage({
                        cmd: 'process',
                        imageData: availableWorker.imageData
                    }, [availableWorker.imageData.buffer]);
                } else {
                    this._locateAndDecode();
                }
            }
        } else {
            this._locateAndDecode();
        }
    }

    private _startContinuousUpdate(): void {
        const delay = 1000 / (this._config.frequency || 60);
        let next = null;

        this._stopped = false;
        (function frame(timestamp) {
            next = next || timestamp;
            if (!this._stopped) {
                if (timestamp >= next) {
                    next += delay;
                    this._update();
                }
                window.requestAnimationFrame(frame);
            }
        }(performance.now()));
    }

    private _initWorker(cb: (workerThread: WorkerThread) => void): void {
        const blobURL = this._generateWorkerBlob();
        const workerThread = {
            worker: new Worker(blobURL),
            imageData: new Uint8Array(this._inputStream.getWidth() * this._inputStream.getHeight()),
            busy: true
        };

        workerThread.worker.onmessage = (ev) => {
            if (ev.data.event === 'initialized') {
                URL.revokeObjectURL(blobURL);
                workerThread.busy = false;
                workerThread.imageData = new Uint8Array(ev.data.imageData);
                if (process.env.NODE_ENV !== 'production') {
                    console.log('Worker initialized');
                }
                cb(workerThread);
            } else if (ev.data.event === 'processed') {
                workerThread.imageData = new Uint8Array(ev.data.imageData);
                workerThread.busy = false;
                this._publishResult(ev.data.result, workerThread.imageData);
            } else if (ev.data.event === 'error') {
                if (process.env.NODE_ENV !== 'production') {
                    console.log('Worker error:', ev.data.message);
                }
            }
        };

        workerThread.worker.postMessage({
            cmd: 'init',
            size: { x: this._inputStream.getWidth(), y: this._inputStream.getHeight() },
            imageData: workerThread.imageData,
            config: this._configForWorker(this._config)
        }, [workerThread.imageData.buffer]);
    }

    private _configForWorker(_config) {
        return merge(_config, { inputStream: { target: null } });
    }

    private _workerInterface(factory) {
        /* eslint-disable no-undef*/
        if (factory) {
            const quagga = factory().default;
            if (!Quagga) {
                self.postMessage({ 'event': 'error', message: 'Quagga could not be created' });
                return;
            }
        }
        let imageWrapper;

        self.onmessage = function (e) {
            if (e.data.cmd === 'init') {
                const _config = e.data.config;
                _config.numOfWorkers = 0;
                imageWrapper = new ImageWrapper({
                    x: e.data.size.x,
                    y: e.data.size.y
                }, new Uint8Array(e.data.imageData));
                quagga = new Quagga(_config, ready, imageWrapper);
                quagga.onProcessed(onProcessed);
            } else if (e.data.cmd === 'process') {
                imageWrapper.data = new Uint8Array(e.data.imageData);
                quagga.start();
            } else if (e.data.cmd === 'setReaders') {
                quagga.setReaders(e.data.readers);
            }
        };

        function onProcessed(result): void {
            self.postMessage({
                'event': 'processed',
                imageData: imageWrapper.data,
                result: result
            }, [imageWrapper.data.buffer]);
        }

        function ready(): void { // eslint-disable-line
            self.postMessage({ 'event': 'initialized', imageData: imageWrapper.data }, [imageWrapper.data.buffer]);
        }

        /* eslint-enable */
    }

    private _generateWorkerBlob() {
        let factorySource;

        /* jshint ignore:start */
        if (typeof __factorySource__ !== 'undefined') {
            factorySource = __factorySource__; // eslint-disable-line no-undef
        }
        /* jshint ignore:end */

        const blob = new Blob(['(' + this._workerInterface.toString() + ')(' + factorySource + ');'],
            { type: 'text/javascript' });

        return window.URL.createObjectURL(blob);
    }

    private _adjustWorkerPool(capacity: number, cb?: Function) {
        const increaseBy = capacity - this._workerPool.length;
        if (increaseBy === 0) {
            return cb && cb();
        }
        if (increaseBy < 0) {
            const workersToTerminate = this._workerPool.slice(increaseBy);
            workersToTerminate.forEach(({ worker }) => {
                worker.terminate();
                if (process.env.NODE_ENV !== 'production') {
                    console.log('Worker terminated!');
                }
            });
            this._workerPool = this._workerPool.slice(0, increaseBy);
            return cb && cb();
        } else {
            for (let i = 0; i < increaseBy; i++) {
                this._initWorker(workerInitialized);
            }
        }

        function workerInitialized(workerThread: WorkerThread): void {
            this._workerPool.push(workerThread);
            if (this._workerPool.length >= capacity && cb) {
                cb();
            }
        }
    }

    constructor(_config, cb: () => void, imageWrapper: ImageWrapper) {
        this._config = merge(config, _config);
        if (imageWrapper) {
            this._onUIThread = false;
            this._initializeData(imageWrapper);
            cb();
        } else {
            this._initInputStream(cb);
        }
    }

    start(): void {
        if (this._onUIThread && this._config.inputStream.type === 'LiveStream') {
            this._startContinuousUpdate();
        } else {
            this._update();
        }
    }

    stop(): void {
        this._stopped = true;
        this._adjustWorkerPool(0);
        if (this._config.inputStream.type === 'LiveStream') {
            CameraAccess.release();
            this._inputStream.clearEventHandlers();
        }
    }

    pause(): void {
        this._stopped = true;
    }

    onDetected(callback: Function): void {
        Events.subscribe('detected', callback);
    }

    offDetected(callback: Function): void {
        Events.unsubscribe('detected', callback);
    }

    onProcessed(callback: Function): void {
        Events.subscribe('processed', callback);
    }
    offProcessed(callback: Function): void {
        Events.unsubscribe('processed', callback);
    }

    setReaders(readers): void {
        if (this._decoder) {
            this._decoder.setReaders(readers);
        } else if (this._onUIThread && this._workerPool.length > 0) {
            this._workerPool.forEach(({ worker }) => worker.postMessage({ cmd: 'setReaders', readers }));
        }
    }

    registerResultCollector(resultCollector: ResultCollector): void {
        if (resultCollector && typeof resultCollector.addResult === 'function') {
            this._resultCollector = resultCollector;
        }
    }

    get canvas() {
        return this._canvasContainer;
    }

    decodeSingle(_config, resultCallback): void {
        _config = merge({
            inputStream: {
                type: 'ImageStream',
                sequence: false,
                size: 800,
                src: _config.src
            },
            numOfWorkers: (process.env.NODE_ENV !== 'production' && _config.debug) ? 0 : 1,
            locator: {
                halfSample: false
            }
        }, _config);
        this.init(_config, () => {
            Events.once('processed', (result) => {
                this.stop();
                resultCallback.call(null, result);
            }, true);
            this.start();
        });
    }

    ImageWrapper: ImageWrapper;
    ImageDebug: ImageDebug;
    ResultCollector: ResultCollector;
    CameraAccess: CameraAccess;
};
