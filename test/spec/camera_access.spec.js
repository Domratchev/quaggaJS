import CameraAccess, { pickConstraints } from '../../src/input/camera_access';

describe('camera_access', () => {
    let originalURL;
    let originalMediaStreamTrack;
    let video;
    let _stream;
    let _constraints;
    let _supported = true;

    beforeEach(() => {
        const tracks = [{
            stop: () => { }
        }];

        originalURL = window.URL;
        originalMediaStreamTrack = window.MediaStreamTrack;
        window.MediaStreamTrack = {};
        window.URL = {
            createObjectURL(stream1) {
                return stream1;
            }
        };

        _stream = {
            getVideoTracks: function () {
                return tracks;
            }
        };

        sinon.stub(navigator.mediaDevices, 'getUserMedia').callsFake(constraints => {
            _constraints = constraints;
            if (_supported) {
                return Promise.resolve(_stream);
            }
            return Promise.reject(new Error('das'));
        });

        sinon.spy(tracks[0], 'stop');

        video = {
            srcObject: null,
            addEventListener: () => { },
            removeEventListener: () => { },
            setAttribute: sinon.spy(),
            play: () => { },
            videoWidth: 320,
            videoHeight: 480
        };
        sinon.stub(video, 'addEventListener').callsFake((_event, cb) => {
            cb();
        });
        sinon.stub(video, 'play');
    });

    afterEach(() => {
        window.URL = originalURL;
        window.MediaStreamTrack = originalMediaStreamTrack;

        sinon.restore();
    });

    describe('success', () => {
        describe('request', () => {
            it('should request the camera', done => {
                CameraAccess.request(video, {})
                    .then(() => {
                        expect(video.srcObject).to.deep.equal(_stream);
                        done();
                    });
            });

            it('should allow deprecated constraints to be used', done => {
                CameraAccess.request(video, {
                    width: 320,
                    height: 240,
                    facing: 'user',
                    minAspectRatio: 2,
                    maxAspectRatio: 100
                })
                    .then(() => {
                        expect(_constraints.video.width).to.equal(320);
                        expect(_constraints.video.height).to.equal(240);
                        expect(_constraints.video.facingMode).to.equal('user');
                        expect(_constraints.video.aspectRatio).to.equal(2);
                        expect(_constraints.video.facing).to.equal(undefined);
                        expect(_constraints.video.minAspectRatio).to.equal(undefined);
                        expect(_constraints.video.maxAspectRatio).to.equal(undefined);
                        done();
                    });
            });
        });

        describe('release', () => {
            it('should release the camera', done => {
                CameraAccess.request(video, {})
                    .then(() => {
                        expect(video.srcObject).to.deep.equal(_stream);
                        CameraAccess.release();
                        expect(video.srcObject.getVideoTracks()).to.have.length(1);
                        expect(video.srcObject.getVideoTracks()[0].stop.calledOnce).to.equal(true);
                        done();
                    });
            });
        });
    });

    describe('failure', () => {
        beforeEach(() => {
            _supported = false;
        });

        afterEach(() => {
            _supported = true;
        });

        describe('permission denied', () => {
            it('should throw if getUserMedia not available', done => {
                CameraAccess.request(video, {})
                    .catch(err => {
                        expect(err).not.to.equal(undefined);
                        done();
                    });
            });
        });

        describe('not available', () => {
            it('should throw if getUserMedia not available', done => {
                CameraAccess.request(video, {})
                    .catch(err => {
                        expect(err).not.to.equal(undefined);
                        done();
                    });
            });
        });

        describe('pickConstraints', () => {
            it('should return the given constraints if no facingMode is defined', done => {
                const givenConstraints = { width: 180 };
                pickConstraints(givenConstraints).then(actualConstraints => {
                    Object.keys(actualConstraints.video)
                        .forEach(key => (actualConstraints.video[key] === undefined) && delete actualConstraints.video[key]);

                    expect(actualConstraints.video).to.deep.equal(givenConstraints);
                    done();
                })
                    .catch(err => {
                        expect(err).to.equal(null);
                        console.log(err);
                        done();
                    });
            });

            it('should return the given constraints if deviceId is defined', done => {
                const givenConstraints = { width: 180, deviceId: '4343' };
                pickConstraints(givenConstraints).then(actualConstraints => {
                    Object.keys(actualConstraints.video)
                        .forEach(key => (actualConstraints.video[key] === undefined) && delete actualConstraints.video[key]);

                    expect(actualConstraints.video).to.deep.equal(givenConstraints);
                    done();
                })
                    .catch(err => {
                        expect(err).to.equal(null);
                        console.log(err);
                        done();
                    });
            });
        });
    });
});
