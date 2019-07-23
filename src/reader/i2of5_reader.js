import { merge } from '../common/merge';
import { BarcodeReader } from './barcode_reader';

const N = 1;
const W = 3;
const START_PATTERN = [N, N, N, N];
const STOP_PATTERN = [N, N, W];
const CODE_PATTERN = [
    [N, N, W, W, N],
    [W, N, N, N, W],
    [N, W, N, N, W],
    [W, W, N, N, N],
    [N, N, W, N, W],
    [W, N, W, N, N],
    [N, W, W, N, N],
    [N, N, N, W, W],
    [W, N, N, W, N],
    [N, W, N, W, N]
];
const MAX_CORRECTION_FACTOR = 5;

export class I2of5Reader extends BarcodeReader {
    constructor(config) {
        super(merge({
            normalizeBarSpaceWidth: false // Normalize the width difference between bars and spaces
        }, config));

        this._format = 'i2of5';
        this._barSpaceRatio = [1, 1];

        if (this.config.normalizeBarSpaceWidth) {
            this._singleCodeError = 0.38;
            this._averageCodeError = 0.09;
        } else {
            this._singleCodeError = 0.78;
            this._averageCodeError = 0.38;
        }
    }

    _matchPattern(counter, code) {
        if (this.config.normalizeBarSpaceWidth) {
            const counterSum = [0, 0];
            const codeSum = [0, 0];
            const correction = [0, 0];
            const correctionRatio = MAX_CORRECTION_FACTOR;
            const correctionRatioInverse = 1 / correctionRatio;

            for (let i = 0; i < counter.length; i++) {
                counterSum[i % 2] += counter[i];
                codeSum[i % 2] += code[i];
            }

            correction[0] = codeSum[0] / counterSum[0];
            correction[1] = codeSum[1] / counterSum[1];

            correction[0] = Math.max(Math.min(correction[0], correctionRatio), correctionRatioInverse);
            correction[1] = Math.max(Math.min(correction[1], correctionRatio), correctionRatioInverse);
            this._barSpaceRatio = correction;

            for (let i = 0; i < counter.length; i++) {
                counter[i] *= this._barSpaceRatio[i % 2];
            }
        }

        return super._matchPattern(counter, code);
    }

    _findPattern(pattern, offset, isWhite, tryHarder) {
        const counter = [];
        const bestMatch = {
            error: Number.MAX_VALUE,
            code: -1,
            start: 0,
            end: 0
        };
        const epsilon = this.AVERAGE_CODE_ERROR;
        let counterPos = 0;

        isWhite = isWhite || false;
        tryHarder = tryHarder || false;

        if (!offset) {
            offset = this._nextSet(this._row);
        }

        for (let i = 0; i < pattern.length; i++) {
            counter[i] = 0;
        }

        for (let i = offset; i < this._row.length; i++) {
            if (this._row[i] ^ isWhite) {
                counter[counterPos]++;
            } else {
                if (counterPos === counter.length - 1) {
                    let sum = 0;
                    for (let j = 0; j < counter.length; j++) {
                        sum += counter[j];
                    }
                    const error = this._matchPattern(counter, pattern);
                    if (error < epsilon) {
                        bestMatch.error = error;
                        bestMatch.start = i - sum;
                        bestMatch.end = i;
                        return bestMatch;
                    }
                    if (tryHarder) {
                        for (let j = 0; j < counter.length - 2; j++) {
                            counter[j] = counter[j + 2];
                        }
                        counter[counter.length - 2] = 0;
                        counter[counter.length - 1] = 0;
                        counterPos--;
                    } else {
                        return null;
                    }
                } else {
                    counterPos++;
                }
                counter[counterPos] = 1;
                isWhite = !isWhite;
            }
        }
        return null;
    }

    _findStart() {
        let offset = this._nextSet(this._row);
        let startInfo;

        while (!startInfo) {
            startInfo = this._findPattern(START_PATTERN, offset, false, true);
            if (!startInfo) {
                return null;
            }

            const narrowBarWidth = (startInfo.end - startInfo.start) >> 2;
            const leadingWhitespaceStart = startInfo.start - narrowBarWidth * 10;

            if (leadingWhitespaceStart >= 0) {
                if (this._matchRange(leadingWhitespaceStart, startInfo.start, 0)) {
                    return startInfo;
                }
            }

            offset = startInfo.end;
            startInfo = null;
        }

        return null;
    }

    _verifyTrailingWhitespace(endInfo) {
        const trailingWhitespaceEnd = endInfo.end + (endInfo.end - endInfo.start) / 2;

        if (trailingWhitespaceEnd < this._row.length) {
            if (this._matchRange(endInfo.end, trailingWhitespaceEnd, 0)) {
                return endInfo;
            }
        }

        return null;
    }

    _findEnd() {
        this._row.reverse();
        const endInfo = this._findPattern(STOP_PATTERN);
        this._row.reverse();

        if (endInfo === null) {
            return null;
        }

        // reverse numbers
        const tmp = endInfo.start;
        endInfo.start = this._row.length - endInfo.end;
        endInfo.end = this._row.length - tmp;

        return endInfo !== null ? this._verifyTrailingWhitespace(endInfo) : null;
    }

    _decodePair(counterPair) {
        const codes = [];

        for (let i = 0; i < counterPair.length; i++) {
            const code = this._decodeCode(counterPair[i]);

            if (!code) {
                return null;
            }

            codes.push(code);
        }

        return codes;
    }

    _decodeCode(counter) {
        const bestMatch = {
            error: Number.MAX_VALUE,
            code: -1,
            start: 0,
            end: 0
        };

        for (let code = 0; code < CODE_PATTERN.length; code++) {
            const error = this._matchPattern(counter, CODE_PATTERN[code]);
            if (error < bestMatch.error) {
                bestMatch.code = code;
                bestMatch.error = error;
            }
        }

        return bestMatch.error < this.AVERAGE_CODE_ERROR ? bestMatch : null;
    }

    _decodePayload(counters, result, decodedCodes) {
        const counterLength = counters.length;
        const counterPair = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0]];
        let pos = 0;
        let codes;

        while (pos < counterLength) {
            for (let i = 0; i < 5; i++) {
                counterPair[0][i] = counters[pos] * this._barSpaceRatio[0];
                counterPair[1][i] = counters[pos + 1] * this._barSpaceRatio[1];
                pos += 2;
            }

            codes = this._decodePair(counterPair);

            if (!codes) {
                return null;
            }

            for (let i = 0; i < codes.length; i++) {
                result.push(codes[i].code + '');
                decodedCodes.push(codes[i]);
            }
        }

        return codes;
    }

    _decode() {
        const startInfo = this._findStart();

        if (!startInfo) {
            return null;
        }

        const endInfo = this._findEnd();

        if (!endInfo) {
            return null;
        }

        const decodedCodes = [];
        decodedCodes.push(startInfo);

        const counters = this._fillCounters(startInfo.end, endInfo.start, false);

        if (counters.length % 10 !== 0) {
            return null;
        }

        const result = [];
        const code = this._decodePayload(counters, result, decodedCodes);

        if (!code || result.length % 2 !== 0 || result.length < 6) {
            return null;
        }

        decodedCodes.push(endInfo);

        return {
            code: result.join(''),
            start: startInfo.start,
            end: endInfo.end,
            startInfo,
            decodedCodes
        };
    }
}
