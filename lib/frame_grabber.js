const ndarray = require('ndarray');
const interp2D = require('ndarray-linear-interpolate').d2;

export class FrameGrabber {
    constructor(inputStream) {
        this._inputStream = inputStream;
        this._streamConfig = inputStream.getConfig();
        this._videoHeight = inputStream.getRealHeight();
        this._videoWidth = inputStream.getRealWidth();
        this._canvasHeight = inputStream.getCanvasHeight();
        this._canvasWidth = inputStream.getCanvasWidth();
        this._width = inputStream.getWidth();
        this._height = inputStream.getHeight();
        this._topRight = inputStream.getTopRight();
        this._data = new Uint8Array(this._width * this._height);
        this._grayData = new Uint8Array(this._videoWidth * this._videoHeight);
        this._canvasData = new Uint8Array(this._canvasWidth * this._canvasHeight);
        this._grayImageArray = ndarray(this._grayData, [this._videoHeight, this._videoWidth]).transpose(1, 0);
        this._canvasImageArray = ndarray(this._canvasData, [this._canvasHeight, this._canvasWidth]).transpose(1, 0);
        this._targetImageArray = this._canvasImageArray
            .hi(this._topRight.x + this._width, this._topRight.y + this._height).lo(this._topRight.x, this._topRight.y);
        this._stepSizeX = this._videoWidth / this._canvasWidth;
        this._stepSizeY = this._videoHeight / this._canvasHeight;

        console.log('FrameGrabber', JSON.stringify({
            videoSize: this._grayImageArray.shape,
            canvasSize: this._canvasImageArray.shape,
            stepSize: [this._stepSizeX, this._stepSizeY],
            size: this._targetImageArray.shape,
            topRight: this._topRight
        }));
    }

    /**
     * Uses the given array as frame-buffer
     */
    attachData(data) {
        this._data = data;
    }

    /**
     * Returns the used frame-buffer
     */
    getData() {
        return this._data;
    }

    /**
     * Fetches a frame from the input-stream and puts into the frame-buffer.
     * The image-data is converted to gray-scale and then half-sampled if configured.
     */
    grab() {
        const frame = this._inputStream.getFrame();

        if (frame) {
            this.scaleAndCrop(frame);
            return true;
        } else {
            return false;
        }
    }

    scaleAndCrop(frame) {
        // 1. compute full-sized gray image
        this._computeGray(frame.data);

        // 2. interpolate
        for (let y = 0; y < this._canvasHeight; y++) {
            for (let x = 0; x < this._canvasWidth; x++) {
                this._canvasImageArray
                    .set(x, y, (interp2D(this._grayImageArray, x * this._stepSizeX, y * this._stepSizeY)) | 0);
            }
        }

        // targetImageArray must be equal to targetSize
        if (this._targetImageArray.shape[0] !== this._width || this._targetImageArray.shape[1] !== this._height) {
            throw new Error('Shapes do not match!');
        }

        // 3. crop
        for (let y = 0; y < this._height; y++) {
            for (let x = 0; x < this._width; x++) {
                this._data[y * this._width + x] = this._targetImageArray.get(x, y);
            }
        }
    }

    getHeight() {
        return this._height;
    }

    getWidth() {
        return this._width;
    }

    _computeGray(imageData) {
        const endIdx = Math.floor(imageData.length / 4);

        if (this._streamConfig && this._streamConfig.singleChannel) {
            for (let i = 0; i < endIdx; i++) {
                this._grayData[i] = imageData[i * 4 + 0];
            }
        } else {
            for (let i = 0; i < endIdx; i++) {
                this._grayData[i] = 0.299 * imageData[i * 4 + 0] + 0.587 * imageData[i * 4 + 1] + 0.114 * imageData[i * 4 + 2];
            }
        }
    }
}
