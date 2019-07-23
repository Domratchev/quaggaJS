import { BarcodeReader } from './barcode_reader';

const ALPHABETH_STRING = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%abcd*';
const ALPHABET = [...ALPHABETH_STRING].map(char => char.charCodeAt(0));
const CHARACTER_ENCODINGS = [
    0x114, 0x148, 0x144, 0x142, 0x128, 0x124, 0x122, 0x150, 0x112, 0x10A,
    0x1A8, 0x1A4, 0x1A2, 0x194, 0x192, 0x18A, 0x168, 0x164, 0x162, 0x134,
    0x11A, 0x158, 0x14C, 0x146, 0x12C, 0x116, 0x1B4, 0x1B2, 0x1AC, 0x1A6,
    0x196, 0x19A, 0x16C, 0x166, 0x136, 0x13A, 0x12E, 0x1D4, 0x1D2, 0x1CA,
    0x16E, 0x176, 0x1AE, 0x126, 0x1DA, 0x1D6, 0x132, 0x15E
];
const ASTERISK = 0x15E;

export class Code93Reader extends BarcodeReader {
    constructor() {
        super();

        this._format = 'code_93';
    }

    _decode() {
        const start = this._findStart();

        if (!start) {
            return null;
        }

        let result = [];
        let counters = [0, 0, 0, 0, 0, 0];
        let decodedChar;
        let lastStart;
        let nextStart = this._nextSet(this._row, start.end);

        do {
            counters = this._toCounters(nextStart, counters);
            const pattern = this._toPattern(counters);
            if (pattern < 0) {
                return null;
            }
            decodedChar = this._patternToChar(pattern);
            if (decodedChar < 0) {
                return null;
            }
            result.push(decodedChar);
            lastStart = nextStart;
            nextStart += counters.reduce((sum, item) => sum + item, 0);
            nextStart = this._nextSet(this._row, nextStart);
        } while (decodedChar !== '*');
        result.pop();

        if (!result.length) {
            return null;
        }

        if (!this._verifyEnd(lastStart, nextStart, counters)) {
            return null;
        }

        if (!this._verifyChecksums(result)) {
            return null;
        }

        result = result.slice(0, result.length - 2);
        if ((result = this._decodeExtended(result)) === null) {
            return null;
        }

        return {
            code: result.join(''),
            start: start.start,
            end: nextStart,
            startInfo: start,
            decodedCodes: result
        };
    }

    _verifyEnd(lastStart, nextStart) {
        if (lastStart === nextStart || !this._row[nextStart]) {
            return false;
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

    _toPattern(counters) {
        const numCounters = counters.length;
        let pattern = 0;
        let sum = 0;
        for (let i = 0; i < numCounters; i++) {
            sum += counters[i];
        }

        for (let i = 0; i < numCounters; i++) {
            let normalized = Math.round(counters[i] * 9 / sum);
            if (normalized < 1 || normalized > 4) {
                return -1;
            }
            if ((i & 1) === 0) {
                for (let j = 0; j < normalized; j++) {
                    pattern = (pattern << 1) | 1;
                }
            } else {
                pattern <<= normalized;
            }
        }

        return pattern;
    }

    _findStart() {
        const counter = [0, 0, 0, 0, 0, 0];
        const offset = this._nextSet(this._row);
        let patternStart = offset;
        let counterPos = 0;
        let isWhite = false;
        let whiteSpaceMustStart;

        for (let i = offset; i < this._row.length; i++) {
            if (this._row[i] ^ isWhite) {
                counter[counterPos]++;
            } else {
                if (counterPos === counter.length - 1) {
                    // find start pattern
                    if (this._toPattern(counter) === ASTERISK) {
                        whiteSpaceMustStart = Math.max(0, patternStart - ((i - patternStart) / 4)) | 0;
                        if (this._matchRange(whiteSpaceMustStart, patternStart, 0)) {
                            return {
                                start: patternStart,
                                end: i
                            };
                        }
                    }

                    patternStart += counter[0] + counter[1];
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

    _decodeExtended(charArray) {
        const length = charArray.length;
        const result = [];
        for (let i = 0; i < length; i++) {
            const char = charArray[i];
            if (char >= 'a' && char <= 'd') {
                if (i > (length - 2)) {
                    return null;
                }
                const nextChar = charArray[++i];
                const nextCharCode = nextChar.charCodeAt(0);
                let decodedChar;
                switch (char) {
                    case 'a': {
                        if (nextChar >= 'A' && nextChar <= 'Z') {
                            decodedChar = String.fromCharCode(nextCharCode - 64);
                        } else {
                            return null;
                        }
                        break;
                    }
                    case 'b': {
                        if (nextChar >= 'A' && nextChar <= 'E') {
                            decodedChar = String.fromCharCode(nextCharCode - 38);
                        } else if (nextChar >= 'F' && nextChar <= 'J') {
                            decodedChar = String.fromCharCode(nextCharCode - 11);
                        } else if (nextChar >= 'K' && nextChar <= 'O') {
                            decodedChar = String.fromCharCode(nextCharCode + 16);
                        } else if (nextChar >= 'P' && nextChar <= 'S') {
                            decodedChar = String.fromCharCode(nextCharCode + 43);
                        } else if (nextChar >= 'T' && nextChar <= 'Z') {
                            decodedChar = String.fromCharCode(127);
                        } else {
                            return null;
                        }
                        break;
                    }
                    case 'c': {
                        if (nextChar >= 'A' && nextChar <= 'O') {
                            decodedChar = String.fromCharCode(nextCharCode - 32);
                        } else if (nextChar === 'Z') {
                            decodedChar = ':';
                        } else {
                            return null;
                        }
                        break;
                    }
                    case 'd': {
                        if (nextChar >= 'A' && nextChar <= 'Z') {
                            decodedChar = String.fromCharCode(nextCharCode + 32);
                        } else {
                            return null;
                        }
                        break;
                    }
                }
                result.push(decodedChar);
            } else {
                result.push(char);
            }
        }
        return result;
    }

    _verifyChecksums(charArray) {
        return this._matchCheckChar(charArray, charArray.length - 2, 20)
            && this._matchCheckChar(charArray, charArray.length - 1, 15);
    }

    _matchCheckChar(charArray, index, maxWeight) {
        const arrayToCheck = charArray.slice(0, index);
        const length = arrayToCheck.length;
        const weightedSums = arrayToCheck.reduce((sum, char, i) => {
            const weight = (((i * -1) + (length - 1)) % maxWeight) + 1;
            const value = ALPHABET.indexOf(char.charCodeAt(0));
            return sum + (weight * value);
        }, 0);

        const checkChar = ALPHABET[(weightedSums % 47)];
        return checkChar === charArray[index].charCodeAt(0);
    }
}
