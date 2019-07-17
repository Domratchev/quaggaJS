import { EANReader } from './ean_reader';

export class EAN2Reader extends EANReader {
    constructor(config, supplements) {
        super(config, supplements);

        this._format = 'ean_2';
    }

    decode(row, start) {
        const end = row.length;
        const result = [];
        const decodedCodes = [];
        let offset = start;
        let codeFrequency = 0;
        let code;

        this._row = row;

        for (let i = 0; i < 2 && offset < end; i++) {
            code = this._decodeCode(offset);
            if (!code) {
                return null;
            }
            decodedCodes.push(code);
            result.push(code.code % 10);
            if (code.code >= this.CODE_G_START) {
                codeFrequency |= 1 << (1 - i);
            }
            if (i !== 1) {
                offset = this._nextSet(this._row, code.end);
                offset = this._nextUnset(this._row, offset);
            }
        }

        if (result.length !== 2 || (parseInt(result.join('')) % 4) !== codeFrequency) {
            return null;
        }

        return {
            code: result.join(''),
            decodedCodes,
            end: code.end
        };
    }
}
