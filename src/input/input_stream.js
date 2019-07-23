import { ImageLoader } from './image_loader';

export class InputStream {
    static createVideoStream(video) {
        const that = {};
        let _config = null;
        const _eventNames = ['canrecord', 'ended'];
        const _eventHandlers = {};
        let _calculatedWidth;
        let _calculatedHeight;
        let _topRight = { x: 0, y: 0 };
        let _canvasWidth = 0;
        let _canvasHeight = 0;

        function initSize() {
            const width = video.videoWidth;
            const height = video.videoHeight;

            _canvasWidth = _calculatedWidth =
                _config.size ? width > height ? _config.size : width * _config.size / height | 0 : width;
            _canvasHeight = _calculatedHeight =
                _config.size ? width > height ? height * _config.size / width | 0 : _config.size : height;
        }

        that.getRealWidth = function () {
            return video.videoWidth;
        };

        that.getRealHeight = function () {
            return video.videoHeight;
        };

        that.getWidth = function () {
            return _calculatedWidth;
        };

        that.getHeight = function () {
            return _calculatedHeight;
        };

        that.setWidth = function (width) {
            _calculatedWidth = width;
        };

        that.setHeight = function (height) {
            _calculatedHeight = height;
        };

        that.setInputStream = function (config) {
            _config = config;
            video.src = (typeof config.src !== 'undefined') ? config.src : '';
        };

        that.ended = function () {
            return video.ended;
        };

        that.getConfig = function () {
            return _config;
        };

        that.setAttribute = function (name, value) {
            video.setAttribute(name, value);
        };

        that.pause = function () {
            video.pause();
        };

        that.play = function () {
            video.play();
        };

        that.setCurrentTime = function (time) {
            if (_config.type !== 'LiveStream') {
                video.currentTime = time;
            }
        };

        that.addEventListener = function (event, f, bool) {
            if (_eventNames.indexOf(event) !== -1) {
                if (!_eventHandlers[event]) {
                    _eventHandlers[event] = [];
                }
                _eventHandlers[event].push(f);
            } else {
                video.addEventListener(event, f, bool);
            }
        };

        that.clearEventHandlers = function () {
            _eventNames.forEach(eventName => {
                const handlers = _eventHandlers[eventName];
                if (handlers && handlers.length > 0) {
                    handlers.forEach(handler => video.removeEventListener(eventName, handler));
                }
            });
        };

        that.trigger = function (eventName, args) {
            const handlers = _eventHandlers[eventName];

            if (eventName === 'canrecord') {
                initSize();
            }
            if (handlers && handlers.length > 0) {
                for (let j = 0; j < handlers.length; j++) {
                    handlers[j].apply(that, args);
                }
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

        that.getCanvasWidth = function () {
            return _canvasWidth;
        };

        that.getCanvasHeight = function () {
            return _canvasHeight;
        };

        that.getFrame = function () {
            return video;
        };

        return that;
    }

    static createLiveStream(video) {
        video.setAttribute('autoplay', true);
        const that = InputStream.createVideoStream(video);

        that.ended = function () {
            return false;
        };

        return that;
    }

    static createImageStream() {
        const that = {};
        let _config = null;
        let width = 0;
        let height = 0;
        let frameIndex = 0;
        let paused = true;
        let loaded = false;
        let _images = null;
        let size = 0;
        let offset = 1;
        let baseUrl = null;
        let ended = false;
        let _calculatedWidth;
        let _calculatedHeight;
        const _eventNames = ['canrecord', 'ended'];
        const _eventHandlers = {};
        let _topRight = { x: 0, y: 0 };
        let _canvasWidth = 0;
        let _canvasHeight = 0;

        function loadImages() {
            loaded = false;
            ImageLoader.load(baseUrl, images => {
                _images = images;

                switch (images[0].tags && images[0].tags.orientation) {
                    case 6:
                    case 8: {
                        width = images[0].image.height;
                        height = images[0].image.width;
                        break;
                    }
                    default: {
                        width = images[0].image.width;
                        height = images[0].image.height;
                    }
                }

                _canvasWidth = _calculatedWidth =
                    _config.size ? width > height ? _config.size : width * _config.size / height | 0 : width;
                _canvasHeight = _calculatedHeight =
                    _config.size ? width > height ? height * _config.size / width | 0 : _config.size : height;
                loaded = true;
                frameIndex = 0;
                setTimeout(() => publishEvent('canrecord', []), 0);
            }, offset, size, _config.sequence);
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
            return _calculatedWidth;
        };

        that.getHeight = function () {
            return _calculatedHeight;
        };

        that.setWidth = function (newWidth) {
            _calculatedWidth = newWidth;
        };

        that.setHeight = function (newHeight) {
            _calculatedHeight = newHeight;
        };

        that.getRealWidth = function () {
            return width;
        };

        that.getRealHeight = function () {
            return height;
        };

        that.setInputStream = function (config) {
            _config = config;
            if (config.sequence === false) {
                baseUrl = config.src;
                size = 1;
            } else {
                baseUrl = config.src;
                size = config.length;
            }
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
            paused = true;
        };

        that.play = function () {
            paused = false;
        };

        that.setCurrentTime = function (time) {
            frameIndex = time;
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

        that.setCanvasSize = function (w, h) {
            _canvasWidth = w;
            _canvasHeight = h;
        };

        that.getCanvasWidth = function () {
            return _canvasWidth;
        };

        that.getCanvasHeight = function () {
            return _canvasHeight;
        };

        that.getFrame = function () {
            let frame;

            if (!loaded) {
                return null;
            }
            if (!paused) {
                frame = _images[frameIndex];
                if (frameIndex < (size - 1)) {
                    frameIndex++;
                } else {
                    setTimeout(() => {
                        ended = true;
                        publishEvent('ended', []);
                    }, 0);
                }
            }
            return frame;
        };

        return that;
    }
}
