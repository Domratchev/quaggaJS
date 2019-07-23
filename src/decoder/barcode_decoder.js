import Bresenham from './bresenham';
import { ImageDebug } from '../common/image_debug';
import { Code128Reader } from '../reader/code_128_reader';
import { Code39Reader } from '../reader/code_39_reader';
import { Code39VINReader } from '../reader/code_39_vin_reader';
import { CodabarReader } from '../reader/codabar_reader';
import { EANReader } from '../reader/ean_reader';
import { EAN8Reader } from '../reader/ean_8_reader';
import { EAN2Reader } from '../reader/ean_2_reader';
import { EAN5Reader } from '../reader/ean_5_reader';
import { UPCReader } from '../reader/upc_reader';
import { UPCEReader } from '../reader/upc_e_reader';
import { I2of5Reader } from '../reader/i2of5_reader';
import { TwoOfFiveReader } from '../reader/2of5_reader';
import { Code93Reader } from '../reader/code_93_reader';

const READERS = {
    code_128_reader: Code128Reader,
    ean_reader: EANReader,
    ean_5_reader: EAN5Reader,
    ean_2_reader: EAN2Reader,
    ean_8_reader: EAN8Reader,
    code_39_reader: Code39Reader,
    code_39_vin_reader: Code39VINReader,
    codabar_reader: CodabarReader,
    upc_reader: UPCReader,
    upc_e_reader: UPCEReader,
    i2of5_reader: I2of5Reader,
    '2of5_reader': TwoOfFiveReader,
    code_93_reader: Code93Reader
};

export class BarcodeDecoder {
    constructor(config, inputImageWrapper) {
        this._config = config;
        this._inputImageWrapper = inputImageWrapper;
        this._canvas = {
            ctx: {
                frequency: null,
                pattern: null,
                overlay: null
            },
            dom: {
                frequency: null,
                pattern: null,
                overlay: null
            }
        };
        this._barcodeReaders = [];

        this._initCanvas();
        this._initReaders();
        this._initConfig();
    }

    _initCanvas() {
        if (process.env.NODE_ENV !== 'production' && typeof document !== 'undefined') {
            const debugDiv = document.querySelector('#debug.detection');
            this._canvas.dom.frequency = document.querySelector('canvas.frequency');
            if (!this._canvas.dom.frequency) {
                this._canvas.dom.frequency = document.createElement('canvas');
                this._canvas.dom.frequency.className = 'frequency';
                if (debugDiv) {
                    debugDiv.appendChild(this._canvas.dom.frequency);
                }
            }
            this._canvas.ctx.frequency = this._canvas.dom.frequency.getContext('2d');

            this._canvas.dom.pattern = document.querySelector('canvas.patternBuffer');
            if (!this._canvas.dom.pattern) {
                this._canvas.dom.pattern = document.createElement('canvas');
                this._canvas.dom.pattern.className = 'patternBuffer';
                if (debugDiv) {
                    debugDiv.appendChild(this._canvas.dom.pattern);
                }
            }
            this._canvas.ctx.pattern = this._canvas.dom.pattern.getContext('2d');

            this._canvas.dom.overlay = document.querySelector('canvas.drawingBuffer');
            if (this._canvas.dom.overlay) {
                this._canvas.ctx.overlay = this._canvas.dom.overlay.getContext('2d');
            }
        }
    }

    _initReaders() {
        this._config.readers.forEach(readerConfig => {
            let reader;
            let configuration = {};
            let supplements = [];

            if (typeof readerConfig === 'object') {
                reader = readerConfig.format;
                configuration = readerConfig.config || {};
            } else if (typeof readerConfig === 'string') {
                reader = readerConfig;
            }

            if (process.env.NODE_ENV !== 'production') {
                console.log('Before registering reader:', reader);
            }

            if (configuration.supplements) {
                supplements = configuration.supplements.map(supplement => new READERS[supplement]());
            }

            this._barcodeReaders.push(new READERS[reader](configuration, supplements));
        });

        if (process.env.NODE_ENV !== 'production') {
            console.log('Registered Readers:',
                ...this._barcodeReaders.map(({ config, FORMAT }) => JSON.stringify({ config, FORMAT })));
        }
    }

    _initConfig() {
        if (process.env.NODE_ENV !== 'production' && this._config.debug && typeof document !== 'undefined') {
            this._canvas.dom.frequency.style.display = this._config.debug.showFrequency ? 'block' : 'none';
            this._canvas.dom.pattern.style.display = this._config.debug.showPattern ? 'block' : 'none';
        }
    }

    /**
     * extend the line on both ends
     * @param {Array} line
     * @param {Number} angle
     */
    _getExtendedLine(line, angle) {
        function extendLine(amount) {
            const extension = {
                y: amount * Math.sin(angle),
                x: amount * Math.cos(angle)
            };

            line[0].y -= extension.y;
            line[0].x -= extension.x;
            line[1].y += extension.y;
            line[1].x += extension.x;
        }

        const lineLength = Math.sqrt((line[1].y - line[0].y) ** 2 + (line[1].x - line[0].x) ** 2);
        let extensionLength = lineLength * 0.1 | 0;

        extendLine(extensionLength);

        // check if inside image
        while (extensionLength > 1 && (!this._inputImageWrapper.inImageWithBorder(line[0], 0)
            || !this._inputImageWrapper.inImageWithBorder(line[1], 0))) {
            extensionLength >>= 1;
            extendLine(-extensionLength);
        }

        return line;
    }

    _getLine(box) {
        return [{
            x: (box[1].x + box[0].x) / 2,
            y: (box[1].y + box[0].y) / 2
        }, {
            x: (box[3].x + box[2].x) / 2,
            y: (box[3].y + box[2].y) / 2
        }];
    }

    _tryDecode(line) {
        const barcodeLine = Bresenham.getBarcodeLine(this._inputImageWrapper, line[0], line[1]);

        if (process.env.NODE_ENV !== 'production' && this._config.debug && this._config.debug.showFrequency) {
            ImageDebug.drawPath(line, { x: 'x', y: 'y' }, this._canvas.ctx.overlay, { color: 'red', lineWidth: 3 });
            Bresenham.debug.printFrequency(barcodeLine.line, this._canvas.dom.frequency);
        }

        Bresenham.toBinaryLine(barcodeLine);

        if (process.env.NODE_ENV !== 'production' && this._config.debug && this._config.debug.showPattern) {
            Bresenham.debug.printPattern(barcodeLine.line, this._canvas.dom.pattern);
        }

        for (let i = 0; i < this._barcodeReaders.length; i++) {
            const codeResult = this._barcodeReaders[i].decodePattern(barcodeLine.line);
            if (codeResult) {
                return {
                    codeResult,
                    barcodeLine
                };
            }
        }

        return null;
    }

    /**
     * This method slices the given area apart and tries to detect a barcode-pattern for each slice.
     * It returns the decoded barcode, or null if nothing was found
     * @param {Array} box
     * @param {Array} line
     * @param {Number} lineAngle
     */
    _tryDecodeBruteForce(box, line, lineAngle) {
        const sideLength = Math.sqrt((box[1].x - box[0].x) ** 2 + (box[1].y - box[0].y) ** 2);
        const slices = 16;
        const xdir = Math.sin(lineAngle);
        const ydir = Math.cos(lineAngle);

        for (let i = 1; i < slices; i++) {
            // move line perpendicular to angle
            const dir = sideLength / slices * i * (i % 2 === 0 ? -1 : 1);
            line[0].y += dir * xdir;
            line[0].x -= dir * ydir;
            line[1].y += dir * xdir;
            line[1].x -= dir * ydir;

            const result = this._tryDecode(line);
            if (result) {
                return result;
            }
        }

        return null;
    }

    /**
     * With the help of the configured readers this function tries to detect
     * a valid barcode pattern within the given area.
     * @param {Object} box The area to search in
     * @returns {Object} the result {codeResult, line, angle, pattern, threshold}
     */
    decodeFromBoundingBox(box) {
        const context = this._canvas.ctx.overlay;
        const debug = this._config.debug;

        if (process.env.NODE_ENV !== 'production' && debug && debug.drawBoundingBox && context) {
            ImageDebug.drawPath(box, { x: 'x', y: 'y' }, context, { color: 'blue', lineWidth: 2 });
        }

        let line = this._getLine(box);

        if (line === null) {
            return null;
        }

        const angle = Math.atan2(line[1].y - line[0].y, line[1].x - line[0].x);
        line = this._getExtendedLine(line, angle);

        let result = this._tryDecode(line);
        if (result === null) {
            result = this._tryDecodeBruteForce(box, line, angle);
        }

        if (result === null) {
            return null;
        }

        if (process.env.NODE_ENV !== 'production' && debug && debug.drawScanline && context) {
            ImageDebug.drawPath(line, { x: 'x', y: 'y' }, context, { color: 'red', lineWidth: 3 });
        }

        return {
            codeResult: result.codeResult,
            line,
            angle,
            pattern: result.barcodeLine.line,
            threshold: result.barcodeLine.threshold
        };
    }

    decodeFromBoundingBoxes(boxes) {
        const barcodes = [];
        const multiple = this._config.multiple;

        for (let i = 0; i < boxes.length; i++) {
            const box = boxes[i];
            const result = this.decodeFromBoundingBox(box) || {};
            result.box = box;

            if (multiple) {
                barcodes.push(result);
            } else if (result.codeResult) {
                return result;
            }
        }

        if (multiple) {
            return {
                barcodes
            };
        }

        return null;
    }

    setReaders(readers) {
        this._config.readers = readers;
        this._barcodeReaders.length = 0;
        this._initReaders();
    }
}
