import { EANReader } from './ean_reader';

export class UPCReader extends EANReader {
    constructor(config, supplements) {
        super(config, supplements);

        this._format = 'upc_a';
    }

    _decode() {
        const result = super._decode();

        if (result && result.code && result.code.length === 13 && result.code.charAt(0) === '0') {
            result.code = result.code.substring(1);
            return result;
        }

        return null;
    }
}