import { EANReader } from './ean_reader';

export class EAN5Reader extends EANReader {
    get CHECK_DIGIT_ENCODINGS() {
        return [24, 20, 18, 17, 12, 6, 3, 10, 9, 5];
    }

    constructor(config, supplements) {
        super(config, supplements);

        this._format = 'ean_5';
    }

    decode(row, start) {
        const end = row.length;
        const result = [];
        const decodedCodes = [];
        let codeFrequency = 0;
        let offset = start;
        let code;

        this._row = row;

        for (let i = 0; i < 5 && offset < end; i++) {
            code = this._decodeCode(offset);
            if (!code) {
                return null;
            }
            decodedCodes.push(code);
            result.push(code.code % 10);
            if (code.code >= this.CODE_G_START) {
                codeFrequency |= 1 << (4 - i);
            }
            if (i !== 4) {
                offset = this._nextSet(this._row, code.end);
                offset = this._nextUnset(this._row, offset);
            }
        }

        if (result.length !== 5) {
            return null;
        }

        if (this._extensionChecksum(result) !== this._determineCheckDigit(codeFrequency)) {
            return null;
        }

        return {
            code: result.join(''),
            decodedCodes,
            end: code.end
        };
    }

    _determineCheckDigit(codeFrequency) {
        for (let i = 0; i < 10; i++) {
            if (codeFrequency === this.CHECK_DIGIT_ENCODINGS[i]) {
                return i;
            }
        }
        return null;
    }


    _extensionChecksum(result) {
        let length = result.length;
        let sum = 0;

        for (let i = length - 2; i >= 0; i -= 2) {
            sum += result[i];
        }
        sum *= 3;
        for (let i = length - 1; i >= 0; i -= 2) {
            sum += result[i];
        }
        sum *= 3;

        return sum % 10;
    }
}
