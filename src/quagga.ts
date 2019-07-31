import _polyfills from './common/polyfills';
import { ResultCollector } from './analytics/result-collector';
import { Box } from './common/box';
import { EventCallback, Events, EventSubscription } from './common/events';
import { ImageDebug } from './common/image-debug';
import { ImageWrapper } from './common/image-wrapper';
import { merge } from './common/merge';
import { Point } from './common/point';
import { config, QuaggaConfig } from './config/config';
import { BarcodeDecoder, QuaggaBarcode } from './decoder/barcode-decoder';
import { CameraAccess } from './input/camera-access';
import { FrameGrabber } from './input/frame-grabber';
import { ImageStream } from './input/image-stream';
import { InputStream } from './input/input-stream';
import { LiveStream } from './input/live-stream';
import { VideoStream } from './input/video-stream';
import { checkImageConstraints } from './input/input-stream-utils';
import { BarcodeLocator } from './locator/barcode-locator';
import { BarcodeReaderDeclaration } from './reader/barcode-reader';

export interface WorkerThread {
    worker: Worker;
    imageData: Uint8Array;
    busy: boolean;
}

export interface QuaggaCanvasContainer {
    ctx: {
        image: CanvasRenderingContext2D,
        overlay: CanvasRenderingContext2D
    },
    dom: {
        image: HTMLCanvasElement,
        overlay: HTMLCanvasElement
    }
}

let __factorySource__: string;

export class Quagga {
    private _inputStream: InputStream;
    private _frameGrabber: FrameGrabber;
    private _stopped: boolean;
    private readonly _canvasContainer: QuaggaCanvasContainer;
    private _inputImageWrapper: ImageWrapper;
    private _locator: BarcodeLocator;
    private _boxSize: Box;
    private _decoder: BarcodeDecoder;
    private _workerPool: Array<WorkerThread>;
    private _onUIThread: boolean;
    private _resultCollector: ResultCollector;
    private _config: QuaggaConfig;

    static decodeSingle(_config: QuaggaConfig, resultCallback: (_: QuaggaBarcode) => void): void {
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

        const quagga = new Quagga(_config, () => {
            Events.once('processed', (result: QuaggaBarcode) => {
                quagga.stop();
                resultCallback.call(null, result);
            }, true);
            quagga.start();
        });
    }

    constructor(_config: QuaggaConfig, cb: () => void, imageWrapper?: ImageWrapper) {
        this._onUIThread = true;
        this._canvasContainer = {
            ctx: {
                image: null,
                overlay: null
            },
            dom: {
                image: null,
                overlay: null
            }
        };
        this._workerPool = new Array<WorkerThread>();
        this._config = merge(config, _config);
        if (imageWrapper) {
            this._onUIThread = false;
            this._initializeData(imageWrapper);
            cb();
        } else {
            this._initInputStream(cb);
        }
    }

    get canvas(): QuaggaCanvasContainer {
        return this._canvasContainer;
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

    onDetected(callback: EventSubscription | EventCallback): void {
        Events.subscribe('detected', callback);
    }

    offDetected(callback: EventCallback): void {
        Events.unsubscribe('detected', callback);
    }

    onProcessed(callback: EventSubscription | EventCallback): void {
        Events.subscribe('processed', callback);
    }

    offProcessed(callback: EventCallback): void {
        Events.unsubscribe('processed', callback);
    }

    setReaders(readers: Array<BarcodeReaderDeclaration>): void {
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

    CameraAccess: CameraAccess;
    ImageDebug: ImageDebug;
    ImageWrapper: ImageWrapper;
    ResultCollector: ResultCollector;

    private _initializeData(imageWrapper?: ImageWrapper): void {
        this._initBuffers(imageWrapper);
        this._decoder = new BarcodeDecoder(this._config.decoder, this._inputImageWrapper);
    }

    private _initInputStream(callback: (err?: any) => void): void {
        let video: HTMLVideoElement;
        if (this._config.inputStream.type === 'VideoStream') {
            video = document.createElement('video');
            this._inputStream = new VideoStream(video);
        } else if (this._config.inputStream.type === 'ImageStream') {
            this._inputStream = new ImageStream();
        } else if (this._config.inputStream.type === 'LiveStream') {
            const viewport = this._getViewPort();
            if (viewport) {
                video = viewport.querySelector('video');
                if (!video) {
                    video = document.createElement('video');
                    viewport.appendChild(video);
                }
            }
            this._inputStream = new LiveStream(video);
            CameraAccess.request(video, this._config.inputStream.constraints)
                .then(() => this._inputStream.trigger('canrecord'), err => callback(err));
        }

        this._inputStream.setAttribute('preload', 'auto');
        this._inputStream.config = this._config.inputStream;
        this._inputStream.addEventListener('canrecord', this._canRecord.bind(this, callback));
    }

    private _getViewPort(): HTMLElement {
        const target = this._config.inputStream.target;
        // Check if target is already a DOM element
        if (target instanceof HTMLElement) {
            return target;
        } else {
            // Use '#interactive.viewport' as a fallback selector (backwards compatibility)
            const selector = typeof target === 'string' ? target : '#interactive.viewport';
            return document.querySelector(selector);
        }
    }

    private _canRecord(cb: () => void): void {
        checkImageConstraints(this._inputStream, this._config.locator);
        this._initCanvas();
        this._frameGrabber = new FrameGrabber(this._inputStream, this._canvasContainer.dom.image);

        this._adjustWorkerPool(this._config.numOfWorkers, () => {
            if (this._config.numOfWorkers === 0) {
                this._initializeData();
            }

            this._inputStream.play();
            cb();
        });
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
            this._canvasContainer.dom.image.width = this._inputStream.canvasWidth;
            this._canvasContainer.dom.image.height = this._inputStream.canvasHeight;

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
            this._canvasContainer.dom.overlay.width = this._inputStream.canvasWidth;
            this._canvasContainer.dom.overlay.height = this._inputStream.canvasHeight;
        }
    }

    private _initBuffers(imageWrapper?: ImageWrapper): void {
        if (imageWrapper) {
            this._inputImageWrapper = imageWrapper;
        } else {
            this._inputImageWrapper = new ImageWrapper({
                x: this._inputStream.width,
                y: this._inputStream.height
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
        this._locator = new BarcodeLocator(this._inputImageWrapper, this._config.locator);
    }

    private _getBoundingBoxes(): Array<Box> {
        if (this._config.locate) {
            return this._locator.locate();
        } else {
            return [[
                this._boxSize[0],
                this._boxSize[1],
                this._boxSize[2],
                this._boxSize[3]
            ]];
        }
    }

    private _transform(polygon: ReadonlyArray<Point>, offset: Point): void {
        polygon.forEach(vertex => {
            vertex.x += offset.x;
            vertex.y += offset.y;
        })
    }

    private _transformResult(result: QuaggaBarcode, offset: Point): void {
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

    private _addResult(result: QuaggaBarcode, imageData: Uint8Array, canvasWidth: number, canvasHeight: number): void {
        if (imageData && this._resultCollector) {
            if (result.barcodes) {
                result.barcodes.forEach(({ codeResult }) => {
                    if (codeResult) {
                        this._resultCollector.addResult(imageData, canvasWidth, canvasHeight, codeResult)
                    }
                });
            } else if (result.codeResult) {
                this._resultCollector.addResult(imageData, canvasWidth, canvasHeight, result.codeResult);
            }
        }
    }

    private _hasCodeResult(result: QuaggaBarcode): boolean {
        return result && (!!result.codeResult || result.barcodes && result.barcodes.some(barcode => !!barcode.codeResult));
    }

    private _publishResult(result?: QuaggaBarcode, imageData?: Uint8Array): void {
        let resultToPublish: QuaggaBarcode | Array<QuaggaBarcode> = result;

        if (result && this._onUIThread) {
            const offset = this._inputStream.topLeft;

            if (offset.x !== 0 || offset.y !== 0) {
                this._transformResult(result, offset);
            }

            this._addResult(result, imageData, this._inputStream.canvasWidth, this._inputStream.canvasHeight);
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
        const that = this;
        let next = null;
        this._stopped = false;

        (function frame(timestamp): void {
            next = next || timestamp;
            if (!that._stopped) {
                if (timestamp >= next) {
                    next += delay;
                    that._update();
                }
                window.requestAnimationFrame(frame);
            }
        }(performance.now()));
    }

    private _initWorker(cb: (workerThread: WorkerThread) => void): void {
        const blobURL = this._generateWorkerBlob();
        const workerThread = {
            worker: new Worker(blobURL),
            imageData: new Uint8Array(this._inputStream.width * this._inputStream.height),
            busy: true
        };

        workerThread.worker.onmessage = ({ data }) => {
            if (data.event === 'initialized') {
                URL.revokeObjectURL(blobURL);
                workerThread.busy = false;
                workerThread.imageData = new Uint8Array(data.imageData);
                if (process.env.NODE_ENV !== 'production') {
                    console.log('Worker initialized');
                }
                cb(workerThread);
            } else if (data.event === 'processed') {
                workerThread.busy = false;
                workerThread.imageData = new Uint8Array(data.imageData);
                this._publishResult(data.result, workerThread.imageData);
            } else if (data.event === 'error') {
                if (process.env.NODE_ENV !== 'production') {
                    console.log('Worker error:', data.message);
                }
            }
        };

        workerThread.worker.postMessage({
            cmd: 'init',
            size: { x: this._inputStream.width, y: this._inputStream.height },
            imageData: workerThread.imageData,
            config: merge(this._config, { inputStream: { target: null } })
        }, [workerThread.imageData.buffer]);
    }

    private _workerInterface(factory: Function): void {
        const origin = '*';
        let quagga: Quagga;
        let imageWrapper: ImageWrapper;

        if (factory) {
            quagga = factory().default;
            if (!quagga) {
                self.postMessage({ event: 'error', message: 'Quagga could not be created' }, origin);
                return;
            }
        }

        self.onmessage = ({ data }) => {
            if (data.cmd === 'init') {
                const _config: QuaggaConfig = data.config;
                _config.numOfWorkers = 0;
                imageWrapper = new ImageWrapper({ x: data.size.x, y: data.size.y }, new Uint8Array(data.imageData));
                quagga = new Quagga(_config, () => self.postMessage(
                    { event: 'initialized', imageData: imageWrapper.data }, origin, [imageWrapper.data.buffer]),
                    imageWrapper
                );
                quagga.onProcessed((result: QuaggaBarcode) => self.postMessage(
                    { event: 'processed', imageData: imageWrapper.data, result }, origin, [imageWrapper.data.buffer]
                ));
            } else if (data.cmd === 'process') {
                imageWrapper.data = new Uint8Array(data.imageData);
                quagga.start();
            } else if (data.cmd === 'setReaders') {
                quagga.setReaders(data.readers);
            }
        };
    }

    private _generateWorkerBlob(): string {
        const blob = new Blob([`(${this._workerInterface.toString()})(${__factorySource__ || ''});`],
            { type: 'text/javascript' });

        return window.URL.createObjectURL(blob);
    }

    private _adjustWorkerPool(capacity: number, cb?: () => void): void {
        const increaseBy = capacity - this._workerPool.length;
        if (increaseBy === 0) {
            return cb && cb();
        }
        if (increaseBy < 0) {
            this._workerPool.slice(increaseBy).forEach(({ worker }) => {
                worker.terminate();
                if (process.env.NODE_ENV !== 'production') {
                    console.log('Worker terminated!');
                }
            });
            this._workerPool = this._workerPool.slice(0, increaseBy);
            return cb && cb();
        } else {
            for (let i = 0; i < increaseBy; i++) {
                this._initWorker(workerThread => {
                    this._workerPool.push(workerThread);
                    if (this._workerPool.length >= capacity && cb) {
                        cb();
                    }
                });
            }
        }
    }
};
