export const DIRECTION = {
    FORWARD: 1,
    REVERSE: -1
};

export class BarcodeReader {
    static get Exception() {
        return {
            StartNotFoundException: 'Start-Info was not found!',
            CodeNotFoundException: 'Code could not be found!',
            PatternNotFoundException: 'Pattern could not be found!'
        };
    }

    get SINGLE_CODE_ERROR() {
        return this._singleCodeError;
    }

    get AVERAGE_CODE_ERROR() {
        return this._averageCodeError;
    }

    get FORMAT() {
        return this._format;
    }

    constructor(config, supplements) {
        this._format = 'unknown';
        this._row = [];
        this.config = config || {};
        this.supplements = supplements;
    }

    _nextUnset(line, start) {
        for (let i = start || 0; i < line.length; i++) {
            if (!line[i]) {
                return i;
            }
        }
        return line.length;
    }

    _matchPattern(counter, code, maxSingleError) {
        let error = 0;
        let sum = 0;
        let modulo = 0;

        maxSingleError = maxSingleError || this.SINGLE_CODE_ERROR || 1;

        for (let i = 0; i < counter.length; i++) {
            sum += counter[i];
            modulo += code[i];
        }

        if (sum < modulo) {
            return Number.MAX_VALUE;
        }

        const barWidth = sum / modulo;
        maxSingleError *= barWidth;

        for (let i = 0; i < counter.length; i++) {
            const count = counter[i];
            const scaled = code[i] * barWidth;
            const singleError = Math.abs(count - scaled) / scaled;

            if (singleError > maxSingleError) {
                return Number.MAX_VALUE;
            }

            error += singleError;
        }

        return error / modulo;
    }

    _nextSet(line, offset) {
        for (let i = offset || 0; i < line.length; i++) {
            if (line[i]) {
                return i;
            }
        }
        return line.length;
    }

    _correctBars(counter, correction, indices) {
        let length = indices.length;
        let tmp = 0;

        while (length--) {
            tmp = counter[indices[length]] * (1 - ((1 - correction) / 2));
            if (tmp > 1) {
                counter[indices[length]] = tmp;
            }
        }
    }

    decodePattern(pattern) {
        this._row = pattern;
        let result = this._decode();

        if (result === null) {
            this._row.reverse();
            result = this._decode();
            if (result) {
                result.direction = DIRECTION.REVERSE;
                result.start = this._row.length - result.start;
                result.end = this._row.length - result.end;
            }
        } else {
            result.direction = DIRECTION.FORWARD;
        }

        if (result) {
            result.format = this.FORMAT;
        }

        return result;
    }

    _matchRange(start, end, value) {
        for (let i = start < 0 ? 0 : start; i < end; i++) {
            if (this._row[i] !== value) {
                return false;
            }
        }
        return true;
    }

    _fillCounters(offset, end, isWhite) {
        const counters = [];
        let counterPos = 0;

        isWhite = (typeof isWhite !== 'undefined') ? isWhite : true;
        offset = (typeof offset !== 'undefined') ? offset : this._nextUnset(this._row);
        end = end || this._row.length;
        counters[counterPos] = 0;

        for (let i = offset; i < end; i++) {
            if (this._row[i] ^ isWhite) {
                counters[counterPos]++;
            } else {
                counterPos++;
                counters[counterPos] = 1;
                isWhite = !isWhite;
            }
        }

        return counters;
    }

    _toCounters(start, counter) {
        const numCounters = counter.length;
        const end = this._row.length;
        let isWhite = !this._row[start];
        let counterPos = 0;

        counter.fill(0);

        for (let i = start; i < end; i++) {
            if (this._row[i] ^ isWhite) {
                counter[counterPos]++;
            } else {
                counterPos++;
                if (counterPos === numCounters) {
                    break;
                } else {
                    counter[counterPos] = 1;
                    isWhite = !isWhite;
                }
            }
        }

        return counter;
    }
}
