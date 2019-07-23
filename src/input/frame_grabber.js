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
        this._context = this._canvas.getContext('2d');
        this._data = new Uint8Array(this._width * this._height);

        if (process.env.NODE_ENV !== 'production') {
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
                const halfWidth = this._canvasWidth >> 1;
                const halfHeight = this._canvasHeight >> 1;
                this._context.translate(halfWidth, halfHeight);
                this._context.rotate(drawAngle);
                this._context.drawImage(drawable, -halfHeight, -halfWidth, this._canvasHeight, this._canvasWidth);
                this._context.rotate(-drawAngle);
                this._context.translate(-halfWidth, -halfHeight);
            } else {
                this._context.drawImage(drawable, 0, 0, this._canvasWidth, this._canvasHeight);
            }

            const imageData = this._context.getImageData(this._sx, this._sy, this._width, this._height).data;
            if (doHalfSample) {
                this._grayAndHalfSampleFromCanvasData(imageData);
            } else {
                this._computeGray(imageData);
            }

            return true;
        } else {
            return false;
        }
    }

    _adjustCanvasSize() {
        if (this._canvas.width !== this._canvasWidth) {
            if (process.env.NODE_ENV !== 'production') {
                console.log('WARNING: canvas-size needs to be adjusted');
            }
            this._canvas.width = this._canvasWidth;
        }
        if (this._canvas.height !== this._canvasHeight) {
            if (process.env.NODE_ENV !== 'production') {
                console.log('WARNING: canvas-size needs to be adjusted');
            }
            this._canvas.height = this._canvasHeight;
        }
    }

    _grayAndHalfSampleFromCanvasData(imageData) {
        const endIndex = imageData.length >> 2;
        const outWidth = this._width >> 1;
        let topRowIndex = 0;
        let bottomRowIndex = this._width;
        let outImageIndex = 0;

        while (bottomRowIndex < endIndex) {
            for (let i = 0; i < outWidth; i++) {
                const top4 = topRowIndex << 2;
                const bottom4 = bottomRowIndex << 2;
                this._data[outImageIndex] = (
                    (0.299 * imageData[top4 + 0] + 0.587 * imageData[top4 + 1] + 0.114 * imageData[top4 + 2]) +
                    (0.299 * imageData[top4 + 4] + 0.587 * imageData[top4 + 5] + 0.114 * imageData[top4 + 6]) +
                    (0.299 * imageData[bottom4 + 0] + 0.587 * imageData[bottom4 + 1] + 0.114 * imageData[bottom4 + 2]) +
                    (0.299 * imageData[bottom4 + 4] + 0.587 * imageData[bottom4 + 5] + 0.114 * imageData[bottom4 + 6])
                ) / 4;
                outImageIndex++;
                topRowIndex += 2;
                bottomRowIndex += 2;
            }
            topRowIndex += this._width;
            bottomRowIndex += this._width;
        }
    }

    _computeGray(imageData) {
        const imageDataLength = imageData.length;

        if (this._streamConfig && this._streamConfig.singleChannel) {
            for (let i = 0, j = 0; i < imageDataLength; i += 4, j++) {
                this._data[j] = imageData[i];
            }
        } else {
            for (let i = 0, j = 0; i < imageDataLength; i += 4, j++) {
                this._data[j] = 0.299 * imageData[i] + 0.587 * imageData[i + 1] + 0.114 * imageData[i + 2];
            }
        }
    }
}
