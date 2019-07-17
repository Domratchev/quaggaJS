const QUATER_CIRCLE = Math.PI / 2;

export class FrameGrabber {
    constructor(inputStream, canvas) {
        this._inputStream = inputStream;
        this._streamConfig = inputStream.getConfig();
        this._canvasWidth = inputStream.getCanvasWidth();
        this._canvasHeight = inputStream.getCanvasHeight();
        this._width = inputStream.getWidth();
        this._height = inputStream.getHeight();
        const topRight = inputStream.getTopRight();
        this._sx = topRight.x;
        this._sy = topRight.y;
        this._canvas = canvas || document.createElement('canvas');
        this._canvas.width = this._canvasWidth;
        this._canvas.height = this._canvasHeight;
        this._ctx = this._canvas.getContext('2d');
        this._data = new Uint8Array(this._width * this._height);

        if (ENV.development) {
            console.log('FrameGrabber', JSON.stringify({
                size: {
                    x: this._width,
                    y: this._height
                },
                topRight,
                videoSize: {
                    x: inputStream.getRealWidth(),
                    y: inputStream.getRealHeight()
                },
                canvasSize: {
                    x: this._canvasWidth,
                    y: this._canvasHeight
                }
            }));
        }
    }

    /**
     * Uses the given array as frame-buffer
     */
    attachData(data) {
        this._data = data;
    }

    /**
     * Fetches a frame from the input-stream and puts into the frame-buffer.
     * The image-data is converted to gray-scale and then half-sampled if configured.
     */
    grab() {
        const doHalfSample = this._streamConfig.halfSample;
        const frame = this._inputStream.getFrame();
        let drawable = frame;
        let drawAngle = 0;

        if (drawable) {
            this._adjustCanvasSize();

            if (this._streamConfig.type === 'ImageStream') {
                drawable = frame.image;

                if (frame.tags) {
                    switch (frame.tags.orientation) {
                        case 6: {
                            drawAngle = QUATER_CIRCLE;
                            break;
                        }
                        case 8: {
                            drawAngle = -QUATER_CIRCLE;
                            break;
                        }
                    }
                }
            }

            if (drawAngle !== 0) {
                this._ctx.translate(this._canvasWidth / 2, this._canvasHeight / 2);
                this._ctx.rotate(drawAngle);
                this._ctx.drawImage(drawable, -this._canvasHeight / 2, -this._canvasWidth / 2, this._canvasHeight, this._canvasWidth);
                this._ctx.rotate(-drawAngle);
                this._ctx.translate(-this._canvasWidth / 2, -this._canvasHeight / 2);
            } else {
                this._ctx.drawImage(drawable, 0, 0, this._canvasWidth, this._canvasHeight);
            }

            const ctxData = this._ctx.getImageData(this._sx, this._sy, this._width, this._height).data;
            if (doHalfSample) {
                this._grayAndHalfSampleFromCanvasData(ctxData);
            } else {
                this._computeGray(ctxData);
            }

            return true;
        } else {
            return false;
        }
    }

    _adjustCanvasSize() {
        if (this._canvas.width !== this._canvasWidth) {
            if (ENV.development) {
                console.log('WARNING: canvas-size needs to be adjusted');
            }
            this._canvas.width = this._canvasWidth;
        }
        if (this._canvas.height !== this._canvasHeight) {
            if (ENV.development) {
                console.log('WARNING: canvas-size needs to be adjusted');
            }
            this._canvas.height = this._canvasHeight;
        }
    }

    _grayAndHalfSampleFromCanvasData(imageData) {
        const endIdx = Math.floor(imageData.length / 4);
        const outWidth = this._width / 2;
        let topRowIdx = 0;
        let bottomRowIdx = this._width;
        let outImgIdx = 0;

        while (bottomRowIdx < endIdx) {
            for (let i = 0; i < outWidth; i++) {
                this._data[outImgIdx] = (
                    (0.299 * imageData[topRowIdx * 4 + 0] +
                        0.587 * imageData[topRowIdx * 4 + 1] +
                        0.114 * imageData[topRowIdx * 4 + 2]) +
                    (0.299 * imageData[(topRowIdx + 1) * 4 + 0] +
                        0.587 * imageData[(topRowIdx + 1) * 4 + 1] +
                        0.114 * imageData[(topRowIdx + 1) * 4 + 2]) +
                    (0.299 * imageData[(bottomRowIdx) * 4 + 0] +
                        0.587 * imageData[(bottomRowIdx) * 4 + 1] +
                        0.114 * imageData[(bottomRowIdx) * 4 + 2]) +
                    (0.299 * imageData[(bottomRowIdx + 1) * 4 + 0] +
                        0.587 * imageData[(bottomRowIdx + 1) * 4 + 1] +
                        0.114 * imageData[(bottomRowIdx + 1) * 4 + 2])) / 4;
                outImgIdx++;
                topRowIdx += 2;
                bottomRowIdx += 2;
            }
            topRowIdx += this._width;
            bottomRowIdx += this._width;
        }
    }

    _computeGray(imageData) {
        const endIdx = Math.floor(imageData.length / 4);

        if (this._streamConfig && this._streamConfig.singleChannel) {
            for (let i = 0; i < endIdx; i++) {
                this._data[i] = imageData[i * 4 + 0];
            }
        } else {
            for (let i = 0; i < endIdx; i++) {
                this._data[i] = 0.299 * imageData[i * 4 + 0] + 0.587 * imageData[i * 4 + 1] + 0.114 * imageData[i * 4 + 2];
            }
        }
    }
}
