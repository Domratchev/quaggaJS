import { ImageDebug } from '../common/image_debug';

export class ResultCollector {
    constructor(config) {
        this._config = config;
        this._canvas = document.createElement('canvas');
        this._context = this._canvas.getContext('2d');
        this._results = [];
        this._capacity = config.capacity || 20;
        this._capture = config.capture === true;
    }

    _contains(codeResult, list) {
        return !!list && list.some(item => {
            return Object.keys(item).every(key => item[key] === codeResult[key]);
        });
    }

    _passesFilter(codeResult, filter) {
        if (typeof filter === 'function') {
            return filter(codeResult);
        }
        return true;
    }

    _matchesConstraints(codeResult) {
        return codeResult
            && this._capacity
            && !this._contains(codeResult, this._config.blacklist)
            && this._passesFilter(codeResult, this._config.filter);
    }

    addResult(data, imageWidth, imageHeight, codeResult) {
        if (this._matchesConstraints(codeResult)) {
            const result = {};

            this._capacity--;
            result.codeResult = codeResult;

            if (this._capture) {
                this._canvas.width = imageWidth;
                this._canvas.height = imageHeight;
                ImageDebug.drawImage(data, imageWidth, imageHeight, this._context);
                result.frame = this._canvas.toDataURL();
            }

            this._results.push(result);
        }
    }

    getResults() {
        return this._results;
    }
}
