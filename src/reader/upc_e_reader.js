import { EANReader } from './ean_reader';

export class UPCEReader extends EANReader {
    get CODE_FREQUENCY() {
        return [[56, 52, 50, 49, 44, 38, 35, 42, 41, 37], [7, 11, 13, 14, 19, 25, 28, 21, 22, 26]];
    }

    get STOP_PATTERN() {
        return [1 / 6 * 7, 1 / 6 * 7, 1 / 6 * 7, 1 / 6 * 7, 1 / 6 * 7, 1 / 6 * 7];
    }

    constructor(config, supplements) {
        super(config, supplements);

        this._format = 'upc_e';
    }

    _decodePayload(code, result, decodedCodes) {
        let codeFrequency = 0x0;

        for (let i = 0; i < 6; i++) {
            code = this._decodeCode(code.end);
            if (!code) {
                return null;
            }
            if (code.code >= this.CODE_G_START) {
                code.code = code.code - this.CODE_G_START;
                codeFrequency |= 1 << (5 - i);
            }
            result.push(code.code);
            decodedCodes.push(code);
        }

        if (!this._determineParity(codeFrequency, result)) {
            return null;
        }

        return code;
    }

    _determineParity(codeFrequency, result) {
        for (let nrSystem = 0; nrSystem < this.CODE_FREQUENCY.length; nrSystem++) {
            for (let i = 0; i < this.CODE_FREQUENCY[nrSystem].length; i++) {
                if (codeFrequency === this.CODE_FREQUENCY[nrSystem][i]) {
                    result.unshift(nrSystem);
                    result.push(i);
                    return true;
                }
            }
        }
        return false;
    }

    _convertToUPCA(result) {
        const lastDigit = result[result.length - 2];
        let upca = [result[0]];

        if (lastDigit <= 2) {
            upca = upca.concat(result.slice(1, 3)).concat([lastDigit, 0, 0, 0, 0]).concat(result.slice(3, 6));
        } else if (lastDigit === 3) {
            upca = upca.concat(result.slice(1, 4)).concat([0, 0, 0, 0, 0]).concat(result.slice(4, 6));
        } else if (lastDigit === 4) {
            upca = upca.concat(result.slice(1, 5)).concat([0, 0, 0, 0, 0, result[5]]);
        } else {
            upca = upca.concat(result.slice(1, 6)).concat([0, 0, 0, 0, lastDigit]);
        }

        upca.push(result[result.length - 1]);
        return upca;
    }

    _checksum(result) {
        return super._checksum(this._convertToUPCA(result));
    }

    _findEnd(offset, isWhite) {
        isWhite = true;
        return super._findEnd(offset, isWhite);
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
}