import { hsv2rgb } from '../common/cv_utils';

/**
 * Represents a basic image combining the data and size.
 * In addition, some methods for manipulation are contained.
 */
export class ImageWrapper {
    /**
     * @param size {x,y} The size of the image in pixel
     * @param data {Array} If given, a flat array containing the pixel data
     * @param ArrayType {Type} If given, the desired DataType of the Array (may be typed/non-typed)
     * @param initialize {Boolean} Indicating if the array should be initialized on creation.
     */
    constructor(size, data, ArrayType, initialize) {
        if (!data) {
            this.data = new (ArrayType || Uint8Array)(size.x * size.y);

            if (initialize) {
                this.data.fill(0);
            }
        } else {
            this.data = data;
        }

        this.size = size;
    }

    /**
     * tests if a position is within the image with a given offset
     * @param imgRef {x, y} The location to test
     * @param border Number the padding value in pixel
     * @returns {Boolean} true if location inside the image's border, false otherwise
     * @see cvd/image.h
     */
    inImageWithBorder(imgRef, border) {
        return (imgRef.x >= border)
            && (imgRef.y >= border)
            && (imgRef.x < (this.size.x - border))
            && (imgRef.y < (this.size.y - border));
    }

    /**
     * Creates an {ImageWrapper) and copies the needed underlying image-data area
     * @param imageWrapper {ImageWrapper} The target {ImageWrapper} where the data should be copied
     * @param fromX {Number} The horizontal position where to copy from
     * @param fromY {Number} The vertical position where to copy from
    */
    subImageAsCopy(imageWrapper, fromX, fromY) {
        const sizeY = imageWrapper.size.y;
        const sizeX = imageWrapper.size.x;

        for (let x = 0; x < sizeX; x++) {
            for (let y = 0; y < sizeY; y++) {
                imageWrapper.data[y * sizeX + x] = this.data[(fromY + y) * this.size.x + fromX + x];
            }
        }
    }

    /**
     * Retrieves a given pixel position from the image
     * @param x {Number} The x-position
     * @param y {Number} The y-position
     * @returns {Number} The grayscale value at the pixel-position
     */
    get(x, y) {
        return this.data[y * this.size.x + x];
    }

    /**
     * Sets a given pixel position in the image
     * @param x {Number} The x-position
     * @param y {Number} The y-position
     * @param value {Number} The grayscale value to set
     * @returns {ImageWrapper} The Image itself (for possible chaining)
     */
    set(x, y, value) {
        this.data[y * this.size.x + x] = value;
        return this;
    }

    /**
     * Sets the border of the image (1 pixel) to zero
     */
    zeroBorder() {
        const width = this.size.x;
        const height = this.size.y;
        const data = this.data;

        for (let i = 0; i < width; i++) {
            data[i] = data[(height - 1) * width + i] = 0;
        }

        for (let i = 1; i < height - 1; i++) {
            data[i * width] = data[i * width + (width - 1)] = 0;
        }
    }

    /**
     * Inverts a binary image in place
     */
    invert() {
        const data = this.data;

        for (let i = data.length; i--;) {
            data[i] = data[i] ? 0 : 1;
        }
    }

    moments(labelCount) {
        const height = this.size.y;
        const width = this.size.x;
        const labelSum = [];
        const result = [];

        if (labelCount <= 0) {
            return result;
        }

        for (let i = 0; i < labelCount; i++) {
            labelSum[i] = {
                m00: 0,
                m01: 0,
                m10: 0,
                m11: 0,
                m02: 0,
                m20: 0,
                theta: 0,
                rad: 0
            };
        }

        for (let y = 0; y < height; y++) {
            const ysq = y * y;
            for (let x = 0; x < width; x++) {
                const val = this.data[y * width + x];
                if (val > 0) {
                    const label = labelSum[val - 1];
                    label.m00 += 1;
                    label.m01 += y;
                    label.m10 += x;
                    label.m11 += x * y;
                    label.m02 += ysq;
                    label.m20 += x * x;
                }
            }
        }

        const PI = Math.PI;
        const PI_4 = PI / 4;

        for (let i = 0; i < labelCount; i++) {
            const label = labelSum[i];
            if (!isNaN(label.m00) && label.m00 !== 0) {
                const x_ = label.m10 / label.m00;
                const y_ = label.m01 / label.m00;
                const mu11 = label.m11 / label.m00 - x_ * y_;
                const mu02 = label.m02 / label.m00 - y_ * y_;
                const mu20 = label.m20 / label.m00 - x_ * x_;
                const tmp = 0.5 * Math.atan((mu02 - mu20) / (2 * mu11)) + (mu11 >= 0 ? PI_4 : -PI_4) + PI;
                label.theta = (tmp * 180 / PI + 90) % 180 - 90;
                if (label.theta < 0) {
                    label.theta += 180;
                }
                label.rad = tmp > PI ? tmp - PI : tmp;
                label.x = Math.cos(tmp);
                label.y = Math.sin(tmp);
                result.push(label);
            }
        }

        return result;
    }

    /**
     * Displays the {ImageWrapper} in a given canvas
     * @param canvas {Canvas} The canvas element to write to
     * @param scale {Number} Scale which is applied to each pixel-value
     */
    show(canvas, scale) {
        const height = this.size.y;
        const width = this.size.x;
        const context = canvas.getContext('2d');
        canvas.height = height;
        canvas.width = width;
        const frame = context.getImageData(0, 0, width, height);
        const data = frame.data;
        let current = 0;

        if (!scale) {
            scale = 1.0;
        }

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const pixel = y * width + x;
                current = this.get(x, y) * scale;
                data[pixel * 4 + 0] = current;
                data[pixel * 4 + 1] = current;
                data[pixel * 4 + 2] = current;
                data[pixel * 4 + 3] = 255;
            }
        }

        //frame.data = data;
        context.putImageData(frame, 0, 0);
    }

    /**
     * Displays the part of the image in a given canvas
     * @param canvas {Canvas} The canvas element to write to
     * @param scale {Number} Scale which is applied to each pixel-value
     * @param fromX {Number} The horizontal position where to overlay from
     * @param fromY {Number} The vertical position where to overlay from
     */
    overlay(canvas, scale, fromX, fromY) {
        const hsv = [0, 1, 1];
        const whiteRgb = [255, 255, 255];
        const blackRgb = [0, 0, 0];
        const context = canvas.getContext('2d');
        const frame = context.getImageData(fromX, fromY, this.size.x, this.size.y);
        const data = frame.data;

        if (!scale || scale < 0 || scale > 360) {
            scale = 360;
        }

        for (let length = this.data.length; length--;) {
            hsv[0] = this.data[length] * scale;
            const rgb = hsv[0] <= 0 ? whiteRgb : hsv[0] >= 360 ? blackRgb : hsv2rgb(hsv);
            data[length * 4 + 0] = rgb[0];
            data[length * 4 + 1] = rgb[1];
            data[length * 4 + 2] = rgb[2];
            data[length * 4 + 3] = 255;
        }

        context.putImageData(frame, fromX, fromY);
    }
}
