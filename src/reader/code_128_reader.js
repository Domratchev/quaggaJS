import { BarcodeReader } from './barcode_reader';

const CODE_SHIFT = 98;
const CODE_C = 99;
const CODE_B = 100;
const CODE_A = 101;
const START_CODE_A = 103;
const START_CODE_B = 104;
const START_CODE_C = 105;
const STOP_CODE = 106;
const CODE_PATTERN = [
    [2, 1, 2, 2, 2, 2],
    [2, 2, 2, 1, 2, 2],
    [2, 2, 2, 2, 2, 1],
    [1, 2, 1, 2, 2, 3],
    [1, 2, 1, 3, 2, 2],
    [1, 3, 1, 2, 2, 2],
    [1, 2, 2, 2, 1, 3],
    [1, 2, 2, 3, 1, 2],
    [1, 3, 2, 2, 1, 2],
    [2, 2, 1, 2, 1, 3],
    [2, 2, 1, 3, 1, 2],
    [2, 3, 1, 2, 1, 2],
    [1, 1, 2, 2, 3, 2],
    [1, 2, 2, 1, 3, 2],
    [1, 2, 2, 2, 3, 1],
    [1, 1, 3, 2, 2, 2],
    [1, 2, 3, 1, 2, 2],
    [1, 2, 3, 2, 2, 1],
    [2, 2, 3, 2, 1, 1],
    [2, 2, 1, 1, 3, 2],
    [2, 2, 1, 2, 3, 1],
    [2, 1, 3, 2, 1, 2],
    [2, 2, 3, 1, 1, 2],
    [3, 1, 2, 1, 3, 1],
    [3, 1, 1, 2, 2, 2],
    [3, 2, 1, 1, 2, 2],
    [3, 2, 1, 2, 2, 1],
    [3, 1, 2, 2, 1, 2],
    [3, 2, 2, 1, 1, 2],
    [3, 2, 2, 2, 1, 1],
    [2, 1, 2, 1, 2, 3],
    [2, 1, 2, 3, 2, 1],
    [2, 3, 2, 1, 2, 1],
    [1, 1, 1, 3, 2, 3],
    [1, 3, 1, 1, 2, 3],
    [1, 3, 1, 3, 2, 1],
    [1, 1, 2, 3, 1, 3],
    [1, 3, 2, 1, 1, 3],
    [1, 3, 2, 3, 1, 1],
    [2, 1, 1, 3, 1, 3],
    [2, 3, 1, 1, 1, 3],
    [2, 3, 1, 3, 1, 1],
    [1, 1, 2, 1, 3, 3],
    [1, 1, 2, 3, 3, 1],
    [1, 3, 2, 1, 3, 1],
    [1, 1, 3, 1, 2, 3],
    [1, 1, 3, 3, 2, 1],
    [1, 3, 3, 1, 2, 1],
    [3, 1, 3, 1, 2, 1],
    [2, 1, 1, 3, 3, 1],
    [2, 3, 1, 1, 3, 1],
    [2, 1, 3, 1, 1, 3],
    [2, 1, 3, 3, 1, 1],
    [2, 1, 3, 1, 3, 1],
    [3, 1, 1, 1, 2, 3],
    [3, 1, 1, 3, 2, 1],
    [3, 3, 1, 1, 2, 1],
    [3, 1, 2, 1, 1, 3],
    [3, 1, 2, 3, 1, 1],
    [3, 3, 2, 1, 1, 1],
    [3, 1, 4, 1, 1, 1],
    [2, 2, 1, 4, 1, 1],
    [4, 3, 1, 1, 1, 1],
    [1, 1, 1, 2, 2, 4],
    [1, 1, 1, 4, 2, 2],
    [1, 2, 1, 1, 2, 4],
    [1, 2, 1, 4, 2, 1],
    [1, 4, 1, 1, 2, 2],
    [1, 4, 1, 2, 2, 1],
    [1, 1, 2, 2, 1, 4],
    [1, 1, 2, 4, 1, 2],
    [1, 2, 2, 1, 1, 4],
    [1, 2, 2, 4, 1, 1],
    [1, 4, 2, 1, 1, 2],
    [1, 4, 2, 2, 1, 1],
    [2, 4, 1, 2, 1, 1],
    [2, 2, 1, 1, 1, 4],
    [4, 1, 3, 1, 1, 1],
    [2, 4, 1, 1, 1, 2],
    [1, 3, 4, 1, 1, 1],
    [1, 1, 1, 2, 4, 2],
    [1, 2, 1, 1, 4, 2],
    [1, 2, 1, 2, 4, 1],
    [1, 1, 4, 2, 1, 2],
    [1, 2, 4, 1, 1, 2],
    [1, 2, 4, 2, 1, 1],
    [4, 1, 1, 2, 1, 2],
    [4, 2, 1, 1, 1, 2],
    [4, 2, 1, 2, 1, 1],
    [2, 1, 2, 1, 4, 1],
    [2, 1, 4, 1, 2, 1],
    [4, 1, 2, 1, 2, 1],
    [1, 1, 1, 1, 4, 3],
    [1, 1, 1, 3, 4, 1],
    [1, 3, 1, 1, 4, 1],
    [1, 1, 4, 1, 1, 3],
    [1, 1, 4, 3, 1, 1],
    [4, 1, 1, 1, 1, 3],
    [4, 1, 1, 3, 1, 1],
    [1, 1, 3, 1, 4, 1],
    [1, 1, 4, 1, 3, 1],
    [3, 1, 1, 1, 4, 1],
    [4, 1, 1, 1, 3, 1],
    [2, 1, 1, 4, 1, 2],
    [2, 1, 1, 2, 1, 4],
    [2, 1, 1, 2, 3, 2],
    [2, 3, 3, 1, 1, 1, 2]
];
const MODULE_INDICES = { bar: [0, 2, 4], space: [1, 3, 5] };

export class Code128Reader extends BarcodeReader {
    constructor() {
        super();

        this._format = 'code_128';
        this._singleCodeError = 0.64;
        this._averageCodeError = 0.30;
    }

    _decodeCode(start, correction) {
        const counter = [0, 0, 0, 0, 0, 0];
        const offset = start;
        const bestMatch = {
            error: Number.MAX_VALUE,
            code: -1,
            start: start,
            end: start,
            correction: {
                bar: 1,
                space: 1
            }
        };
        const epsilon = this.AVERAGE_CODE_ERROR;
        let isWhite = !this._row[offset];
        let counterPos = 0;

        for (let i = offset; i < this._row.length; i++) {
            if (this._row[i] ^ isWhite) {
                counter[counterPos]++;
            } else {
                if (counterPos === counter.length - 1) {
                    if (correction) {
                        this._correct(counter, correction);
                    }
                    for (let code = 0; code < CODE_PATTERN.length; code++) {
                        const error = this._matchPattern(counter, CODE_PATTERN[code]);
                        if (error < bestMatch.error) {
                            bestMatch.code = code;
                            bestMatch.error = error;
                        }
                    }
                    bestMatch.end = i;
                    if (bestMatch.code === -1 || bestMatch.error > epsilon) {
                        return null;
                    }
                    if (CODE_PATTERN[bestMatch.code]) {
                        bestMatch.correction.bar = this.calculateCorrection(CODE_PATTERN[bestMatch.code], counter,
                            MODULE_INDICES.bar);
                        bestMatch.correction.space = this.calculateCorrection(CODE_PATTERN[bestMatch.code], counter,
                            MODULE_INDICES.space);
                    }
                    return bestMatch;
                } else {
                    counterPos++;
                }
                counter[counterPos] = 1;
                isWhite = !isWhite;
            }
        }
        return null;
    }

    _correct(counter, correction) {
        this._correctBars(counter, correction.bar, MODULE_INDICES.bar);
        this._correctBars(counter, correction.space, MODULE_INDICES.space);
    }

    _findStart() {
        const counter = [0, 0, 0, 0, 0, 0];
        const offset = this._nextSet(this._row);
        const bestMatch = {
            error: Number.MAX_VALUE,
            code: -1,
            start: 0,
            end: 0,
            correction: {
                bar: 1,
                space: 1
            }
        };
        const epsilon = this.AVERAGE_CODE_ERROR;
        let isWhite = false;
        let counterPos = 0;
        let sum;

        for (let i = offset; i < this._row.length; i++) {
            if (this._row[i] ^ isWhite) {
                counter[counterPos]++;
            } else {
                if (counterPos === counter.length - 1) {
                    sum = 0;
                    for (let j = 0; j < counter.length; j++) {
                        sum += counter[j];
                    }
                    for (let code = START_CODE_A; code <= START_CODE_C; code++) {
                        const error = this._matchPattern(counter, CODE_PATTERN[code]);
                        if (error < bestMatch.error) {
                            bestMatch.code = code;
                            bestMatch.error = error;
                        }
                    }
                    if (bestMatch.error < epsilon) {
                        bestMatch.start = i - sum;
                        bestMatch.end = i;
                        bestMatch.correction.bar = this.calculateCorrection(CODE_PATTERN[bestMatch.code], counter,
                            MODULE_INDICES.bar);
                        bestMatch.correction.space = this.calculateCorrection(CODE_PATTERN[bestMatch.code], counter,
                            MODULE_INDICES.space);
                        return bestMatch;
                    }

                    for (let j = 0; j < 4; j++) {
                        counter[j] = counter[j + 2];
                    }
                    counter[4] = 0;
                    counter[5] = 0;
                    counterPos--;
                } else {
                    counterPos++;
                }
                counter[counterPos] = 1;
                isWhite = !isWhite;
            }
        }
        return null;
    }

    _decode() {
        const result = [];
        const startInfo = this._findStart();
        let code = null;
        let done = false;
        let multiplier = 0;
        let checksum = 0;
        let codeset;
        let rawResult = [];
        let decodedCodes = [];
        let shiftNext = false;
        let unshift;
        let removeLastCharacter = true;

        if (startInfo === null) {
            return null;
        }
        code = {
            code: startInfo.code,
            start: startInfo.start,
            end: startInfo.end,
            correction: {
                bar: startInfo.correction.bar,
                space: startInfo.correction.space
            }
        };
        decodedCodes.push(code);
        checksum = code.code;

        switch (code.code) {
            case START_CODE_A:
                codeset = CODE_A;
                break;
            case START_CODE_B:
                codeset = CODE_B;
                break;
            case START_CODE_C:
                codeset = CODE_C;
                break;
            default:
                return null;
        }

        while (!done) {
            unshift = shiftNext;
            shiftNext = false;
            code = this._decodeCode(code.end, code.correction);
            if (code !== null) {
                if (code.code !== STOP_CODE) {
                    removeLastCharacter = true;
                }

                if (code.code !== STOP_CODE) {
                    rawResult.push(code.code);
                    multiplier++;
                    checksum += multiplier * code.code;
                }
                decodedCodes.push(code);

                switch (codeset) {
                    case CODE_A: {
                        if (code.code < 64) {
                            result.push(String.fromCharCode(32 + code.code));
                        } else if (code.code < 96) {
                            result.push(String.fromCharCode(code.code - 64));
                        } else {
                            if (code.code !== STOP_CODE) {
                                removeLastCharacter = false;
                            }
                            switch (code.code) {
                                case CODE_SHIFT:
                                    shiftNext = true;
                                    codeset = CODE_B;
                                    break;
                                case CODE_B:
                                    codeset = CODE_B;
                                    break;
                                case CODE_C:
                                    codeset = CODE_C;
                                    break;
                                case STOP_CODE:
                                    done = true;
                                    break;
                            }
                        }
                        break;
                    }
                    case CODE_B: {
                        if (code.code < 96) {
                            result.push(String.fromCharCode(32 + code.code));
                        } else {
                            if (code.code !== STOP_CODE) {
                                removeLastCharacter = false;
                            }
                            switch (code.code) {
                                case CODE_SHIFT:
                                    shiftNext = true;
                                    codeset = CODE_A;
                                    break;
                                case CODE_A:
                                    codeset = CODE_A;
                                    break;
                                case CODE_C:
                                    codeset = CODE_C;
                                    break;
                                case STOP_CODE:
                                    done = true;
                                    break;
                            }
                        }
                        break;
                    }
                    case CODE_C: {
                        if (code.code < 100) {
                            result.push(code.code < 10 ? '0' + code.code : code.code);
                        } else {
                            if (code.code !== STOP_CODE) {
                                removeLastCharacter = false;
                            }
                            switch (code.code) {
                                case CODE_A:
                                    codeset = CODE_A;
                                    break;
                                case CODE_B:
                                    codeset = CODE_B;
                                    break;
                                case STOP_CODE:
                                    done = true;
                                    break;
                            }
                        }
                        break;
                    }
                }
            } else {
                done = true;
            }
            if (unshift) {
                codeset = codeset === CODE_A ? CODE_B : CODE_A;
            }
        }

        if (code === null) {
            return null;
        }

        code.end = this._nextUnset(this._row, code.end);
        if (!this._verifyTrailingWhitespace(code)) {
            return null;
        }

        checksum -= multiplier * rawResult[rawResult.length - 1];
        if (checksum % 103 !== rawResult[rawResult.length - 1]) {
            return null;
        }

        if (!result.length) {
            return null;
        }

        // remove last code from result (checksum)
        if (removeLastCharacter) {
            result.splice(result.length - 1, 1);
        }

        return {
            code: result.join(''),
            start: startInfo.start,
            end: code.end,
            codeset,
            startInfo,
            decodedCodes,
            endInfo: code
        };
    }

    _verifyTrailingWhitespace(endInfo) {
        let trailingWhitespaceEnd = endInfo.end + ((endInfo.end - endInfo.start) / 2);
        if (trailingWhitespaceEnd < this._row.length) {
            if (this._matchRange(endInfo.end, trailingWhitespaceEnd, 0)) {
                return endInfo;
            }
        }
        return null;
    }

    calculateCorrection(expected, normalized, indices) {
        let sumNormalized = 0;
        let sumExpected = 0;

        for (let length = indices.length; length--;) {
            sumExpected += expected[indices[length]];
            sumNormalized += normalized[indices[length]];
        }

        return sumExpected / sumNormalized;
    }
}
