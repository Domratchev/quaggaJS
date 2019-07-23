import { getUserMedia, enumerateDevices } from '../common/media-devices';

let _stream;

function waitForVideo({ videoWidth, videoHeight }) {
    return new Promise((resolve, reject) => {
        let attempts = 10;

        function checkVideo() {
            if (attempts > 0) {
                if (videoWidth > 10 && videoHeight > 10) {
                    if (process.env.NODE_ENV !== 'production') {
                        console.log(`${videoWidth}px x ${videoHeight}px`);
                    }
                    resolve();
                } else {
                    window.setTimeout(checkVideo, 500);
                }
            } else {
                reject('Unable to play video stream. Is webcam working?');
            }
            attempts--;
        }
        checkVideo();
    });
}

/**
 * Tries to attach the camera-stream to a given video-element
 * and calls the callback function when the content is ready
 * @param {Object} constraints
 * @param {Object} video
 */
function initCamera(video, constraints) {
    return getUserMedia(constraints)
        .then(stream => {
            return new Promise(resolve => {
                _stream = stream;
                video.setAttribute('autoplay', true);
                video.setAttribute('muted', true);
                video.setAttribute('playsinline', true);
                video.srcObject = stream;
                video.addEventListener('loadedmetadata', () => {
                    video.play();
                    resolve();
                });
            });
        })
        .then(waitForVideo.bind(null, video));
}

function deprecatedConstraints(videoConstraints) {
    let { width, height, facingMode, aspectRatio, deviceId } = videoConstraints;

    if (typeof videoConstraints.minAspectRatio !== 'undefined' && videoConstraints.minAspectRatio > 0) {
        aspectRatio = videoConstraints.minAspectRatio;
        console.log(`WARNING: Constraint 'minAspectRatio' is deprecated; Use 'aspectRatio' instead`);
    }

    if (typeof videoConstraints.facing !== 'undefined') {
        facingMode = videoConstraints.facing;
        console.log(`WARNING: Constraint 'facing' is deprecated. Use 'facingMode' instead'`);
    }

    return { width, height, facingMode, aspectRatio, deviceId };
}

export function pickConstraints(videoConstraints) {
    const normalizedConstraints = {
        audio: false,
        video: deprecatedConstraints(videoConstraints)
    };

    if (normalizedConstraints.video.deviceId && normalizedConstraints.video.facingMode) {
        delete normalizedConstraints.video.facingMode;
    }

    return Promise.resolve(normalizedConstraints);
}

function enumerateVideoDevices() {
    return enumerateDevices().then(devices => devices.filter(({ kind }) => kind === 'videoinput'));
}

function getActiveTrack() {
    const tracks = _stream && _stream.getVideoTracks();
    if (tracks && tracks.length) {
        return tracks[0];
    }

    return null;
}

export default {
    request: function (video, videoConstraints) {
        return pickConstraints(videoConstraints).then(initCamera.bind(null, video));
    },
    release: function () {
        const tracks = _stream && _stream.getVideoTracks();
        if (tracks && tracks.length) {
            tracks[0].stop();
        }
        _stream = null;
    },
    enumerateVideoDevices,
    getActiveStreamLabel: function () {
        const track = getActiveTrack();
        return track ? track.label : '';
    },
    getActiveTrack
};
