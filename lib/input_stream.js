const getPixels = require('get-pixels');

export class InputStream {
    static createImageStream() {
        const that = {};
        let _config = null;

        let imageWidth = 0;
        let imageHeight = 0;
        let loaded = false;
        let frame = null;
        let baseUrl;
        let ended = false;
        let calculatedWidth;
        let calculatedHeight;
        const _eventNames = ['canrecord', 'ended'];
        let _eventHandlers = {};
        let _topRight = { x: 0, y: 0 };
        let _canvasWidth = 0;
        let _canvasHeight = 0;

        function loadImages() {
            loaded = false;
            getPixels(baseUrl, _config.mime, function (err, pixels) {
                if (err) {
                    console.log(err);
                    process.exit(1);
                }

                loaded = true;
                console.log(pixels.shape);
                frame = pixels;
                imageWidth = pixels.shape[0] | 0;
                imageHeight = pixels.shape[1] | 0;
                calculatedWidth = _config.size ?
                    imageWidth > imageHeight ? _config.size : imageWidth * _config.size / imageHeight | 0 : imageWidth;
                calculatedHeight = _config.size ?
                    imageWidth > imageHeight ? imageHeight * _config.size / imageWidth | 0 : _config.size : imageHeight;

                _canvasWidth = calculatedWidth;
                _canvasHeight = calculatedHeight;

                setTimeout(function () {
                    publishEvent('canrecord', []);
                }, 0);
            });
        }

        function publishEvent(eventName, args) {
            const handlers = _eventHandlers[eventName];

            if (handlers && handlers.length > 0) {
                for (let j = 0; j < handlers.length; j++) {
                    handlers[j].apply(that, args);
                }
            }
        }

        that.trigger = publishEvent;

        that.getWidth = function () {
            return calculatedWidth;
        };

        that.getHeight = function () {
            return calculatedHeight;
        };

        that.setWidth = function (width) {
            calculatedWidth = width;
        };

        that.setHeight = function (height) {
            calculatedHeight = height;
        };

        that.getRealWidth = function () {
            return imageWidth;
        };

        that.getRealHeight = function () {
            return imageHeight;
        };

        that.setInputStream = function (stream) {
            _config = stream;
            baseUrl = _config.src;
            loadImages();
        };

        that.ended = function () {
            return ended;
        };

        that.setAttribute = function () { };

        that.getConfig = function () {
            return _config;
        };

        that.pause = function () {
        };

        that.play = function () {
        };

        // eslint-disable-next-line no-unused-vars
        that.setCurrentTime = function (_time) {
        };

        that.addEventListener = function (event, f) {
            if (_eventNames.indexOf(event) !== -1) {
                if (!_eventHandlers[event]) {
                    _eventHandlers[event] = [];
                }
                _eventHandlers[event].push(f);
            }
        };

        that.setTopRight = function (topRight) {
            _topRight.x = topRight.x;
            _topRight.y = topRight.y;
        };

        that.getTopRight = function () {
            return _topRight;
        };

        that.setCanvasSize = function (width, height) {
            _canvasWidth = width;
            _canvasHeight = height;
        };

        that.getCanvasHeight = function () {
            return _canvasHeight;
        };

        that.getCanvasWidth = function () {
            return _canvasWidth;
        };

        that.getFrame = function () {
            if (!loaded) {
                return null;
            }
            return frame;
        };

        return that;
    }
}