import { BarcodeReader } from './barcode_reader';

const N = 1;
const W = 3;
const START_PATTERN = [W, N, W, N, N, N];
const STOP_PATTERN = [W, N, N, N, W];
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
const startPatternLength = START_PATTERN.reduce((sum, val) => sum + val, 0);

export class TwoOfFiveReader extends BarcodeReader {
    constructor(config) {
        super(config);

        this._barSpaceRatio = [1, 1];
        this._format = '2of5';
        this._singleCodeError = 0.78;
        this._averageCodeError = 0.30;
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
        let narrowBarWidth = 1;
        let startInfo;

        while (!startInfo) {
            startInfo = this._findPattern(START_PATTERN, offset, false, true);
            if (!startInfo) {
                return null;
            }
            narrowBarWidth = Math.floor((startInfo.end - startInfo.start) / startPatternLength);
            const leadingWhitespaceStart = startInfo.start - narrowBarWidth * 5;
            if (leadingWhitespaceStart >= 0) {
                if (this._matchRange(leadingWhitespaceStart, startInfo.start, 0)) {
                    return startInfo;
                }
            }
            offset = startInfo.end;
            startInfo = null;
        }
    }

    _verifyTrailingWhitespace(endInfo) {
        const trailingWhitespaceEnd = endInfo.end + ((endInfo.end - endInfo.start) / 2);
        if (trailingWhitespaceEnd < this._row.length) {
            if (this._matchRange(endInfo.end, trailingWhitespaceEnd, 0)) {
                return endInfo;
            }
        }
        return null;
    }

    _findEnd() {
        this._row.reverse();

        const offset = this._nextSet(this._row);
        const endInfo = this._findPattern(STOP_PATTERN, offset, false, true);

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

        if (bestMatch.error < this.AVERAGE_CODE_ERROR) {
            return bestMatch;
        }
    }

    _decodePayload(counters, result, decodedCodes) {
        const counterLength = counters.length;
        const counter = [0, 0, 0, 0, 0];
        let pos = 0;
        let code;

        while (pos < counterLength) {
            for (let i = 0; i < 5; i++) {
                counter[i] = counters[pos] * this._barSpaceRatio[0];
                pos += 2;
            }

            code = this._decodeCode(counter);

            if (!code) {
                return null;
            }

            result.push(code.code + '');
            decodedCodes.push(code);
        }

        return code;
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

        const counters = this._fillCounters(startInfo.end, endInfo.start, false);

        if (counters.length % 10 !== 0) {
            return null;
        }

        const result = [];
        const decodedCodes = [];

        decodedCodes.push(startInfo);

        const code = this._decodePayload(counters, result, decodedCodes);

        if (!code || result.length < 5) {
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
