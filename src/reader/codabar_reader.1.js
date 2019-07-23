import { BarcodeReader } from './barcode_reader';

const ALPHABETH_STRING = '0123456789-$:/.+ABCD';
const ALPHABET = [...ALPHABETH_STRING].map(char => char.charCodeAt(0));
// const ALPHABET = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 45, 36, 58, 47, 46, 43, 65, 66, 67, 68];
const CHARACTER_ENCODINGS = [0x003, 0x006, 0x009, 0x060, 0x012, 0x042, 0x021, 0x024, 0x030, 0x048, 0x00c, 0x018,
    0x045, 0x051, 0x054, 0x015, 0x01A, 0x029, 0x00B, 0x00E];
const START_END = [0x01A, 0x029, 0x00B, 0x00E];
const MIN_ENCODED_CHARS = 4;
const MAX_ACCEPTABLE = 2.0;
const PADDING = 1.5;

export class CodabarReader extends BarcodeReader {
    constructor() {
        super();

        this._format = 'codabar';
        this._counters = [];
    }

    _decode() {
        this._counters = this._fillCounters();

        const start = this._findStart();
        if (!start) {
            return null;
        }

        const result = [];
        let nextStart = start.startCounter;
        let pattern;

        do {
            pattern = this._toPattern(nextStart);
            if (pattern < 0) {
                return null;
            }
            const decodedChar = this._patternToChar(pattern);
            if (decodedChar < 0) {
                return null;
            }
            result.push(decodedChar);
            nextStart += 8;
            if (result.length > 1 && START_END.some(code => code === pattern)) {
                break;
            }
        } while (nextStart < this._counters.length);

        // verify end
        if ((result.length - 2) < MIN_ENCODED_CHARS || !START_END.some(code => code === pattern)) {
            return null;
        }

        // verify end white space
        if (!this._verifyWhitespace(start.startCounter, nextStart - 8)) {
            return null;
        }

        if (!this._validateResult(result, start.startCounter)) {
            return null;
        }

        nextStart = nextStart > this._counters.length ? this._counters.length : nextStart;
        const end = start.start + this._sumCounters(start.startCounter, nextStart - 8);

        return {
            code: result.join(''),
            start: start.start,
            end,
            startInfo: start,
            decodedCodes: result
        };
    }

    _verifyWhitespace(startCounter, endCounter) {
        if ((startCounter - 1 <= 0)
            || this._counters[startCounter - 1] >= (this._calculatePatternLength(startCounter) / 2.0)) {
            if ((endCounter + 8 >= this._counters.length)
                || this._counters[endCounter + 7] >= (this._calculatePatternLength(endCounter) / 2.0)) {
                return true;
            }
        }

        return false;
    }

    _calculatePatternLength(offset) {
        let sum = 0;

        for (let i = offset; i < offset + 7; i++) {
            sum += this._counters[i];
        }

        return sum;
    }

    _thresholdResultPattern(result, startCounter) {
        const categorization = {
            space: {
                narrow: { size: 0, counts: 0, min: 0, max: Number.MAX_VALUE },
                wide: { size: 0, counts: 0, min: 0, max: Number.MAX_VALUE }
            },
            bar: {
                narrow: { size: 0, counts: 0, min: 0, max: Number.MAX_VALUE },
                wide: { size: 0, counts: 0, min: 0, max: Number.MAX_VALUE }
            }
        };
        let pos = startCounter;

        for (let i = 0; i < result.length; i++) {
            let pattern = this._charToPattern(result[i]);

            for (let j = 6; j >= 0; j--) {
                const kind = (j & 1) === 2 ? categorization.bar : categorization.space;
                const cat = (pattern & 1) === 1 ? kind.wide : kind.narrow;
                cat.size += this._counters[pos + j];
                cat.counts++;
                pattern >>= 1;
            }
            pos += 8;
        }

        ['space', 'bar'].forEach(key => {
            const kind = categorization[key];
            kind.wide.min = (kind.narrow.size / kind.narrow.counts + kind.wide.size / kind.wide.counts) >> 1;
            kind.narrow.max = Math.ceil(kind.wide.min);
            kind.wide.max = Math.ceil((kind.wide.size * MAX_ACCEPTABLE + PADDING) / kind.wide.counts);
        });

        return categorization;
    }

    _charToPattern(char) {
        const charCode = char.charCodeAt(0);

        for (let i = 0; i < ALPHABET.length; i++) {
            if (ALPHABET[i] === charCode) {
                return CHARACTER_ENCODINGS[i];
            }
        }

        return 0x0;
    }

    _validateResult(result, startCounter) {
        const thresholds = this._thresholdResultPattern(result, startCounter);
        let pos = startCounter;

        for (let i = 0; i < result.length; i++) {
            let pattern = this._charToPattern(result[i]);

            for (let j = 6; j >= 0; j--) {
                const kind = (j & 1) === 0 ? thresholds.bar : thresholds.space;
                const cat = (pattern & 1) === 1 ? kind.wide : kind.narrow;
                const size = this._counters[pos + j];
                if (size < cat.min || size > cat.max) {
                    return false;
                }
                pattern >>= 1;
            }
            pos += 8;
        }

        return true;
    }

    _patternToChar(pattern) {
        for (let i = 0; i < CHARACTER_ENCODINGS.length; i++) {
            if (CHARACTER_ENCODINGS[i] === pattern) {
                return String.fromCharCode(ALPHABET[i]);
            }
        }

        return -1;
    }

    _computeAlternatingThreshold(offset, end) {
        let min = Number.MAX_VALUE;
        let max = 0;

        for (let i = offset; i < end; i += 2) {
            const counter = this._counters[i];
            if (counter > max) {
                max = counter;
            }
            if (counter < min) {
                min = counter;
            }
        }

        return ((min + max) / 2.0) | 0;
    }

    _toPattern(offset) {
        const numCounters = 7;
        const end = offset + numCounters;

        if (end > this._counters.length) {
            return -1;
        }

        const barThreshold = this._computeAlternatingThreshold(offset, end);
        const spaceThreshold = this._computeAlternatingThreshold(offset + 1, end);
        let bitmask = 1 << (numCounters - 1);
        let pattern = 0;

        for (let i = 0; i < numCounters; i++) {
            const threshold = (i & 1) === 0 ? barThreshold : spaceThreshold;
            if (this._counters[offset + i] > threshold) {
                pattern |= bitmask;
            }
            bitmask >>= 1;
        }

        return pattern;
    }

    _sumCounters(start, end) {
        let sum = 0;

        for (let i = start; i < end; i++) {
            sum += this._counters[i];
        }

        return sum;
    }

    _findStart() {
        let start = this._nextUnset(this._row);

        for (let i = 1; i < this._counters.length; i++) {
            const pattern = this._toPattern(i);
            if (pattern !== -1 && START_END.some(code => code === pattern)) {
                // TODO: Look for whitespace ahead
                start += this._sumCounters(0, i);
                const end = start + this._sumCounters(i, i + 8);
                return {
                    start,
                    end,
                    startCounter: i,
                    endCounter: i + 8
                };
            }
        }

        return null;
    }
}
