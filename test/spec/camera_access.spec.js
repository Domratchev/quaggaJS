import CameraAccess, { pickConstraints } from '../../src/input/camera_access';
import { setStream, getConstraints, setSupported } from 'Common/media-devices';

describe('camera_access', () => {
    let originalURL;
    let originalMediaStreamTrack;
    let video;
    let stream;

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

        stream = {
            getVideoTracks: function () {
                return tracks;
            }
        };
        setStream(stream);
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
    });

    describe('success', () => {
        describe('request', () => {
            it('should request the camera', done => {
                CameraAccess.request(video, {})
                    .then(() => {
                        expect(video.srcObject).to.deep.equal(stream);
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
                        const constraints = getConstraints();
                        expect(constraints.video.width).to.equal(320);
                        expect(constraints.video.height).to.equal(240);
                        expect(constraints.video.facingMode).to.equal('user');
                        expect(constraints.video.aspectRatio).to.equal(2);
                        expect(constraints.video.facing).to.equal(undefined);
                        expect(constraints.video.minAspectRatio).to.equal(undefined);
                        expect(constraints.video.maxAspectRatio).to.equal(undefined);
                        done();
                    });
            });
        });

        describe('release', () => {
            it('should release the camera', done => {
                CameraAccess.request(video, {})
                    .then(() => {
                        expect(video.srcObject).to.deep.equal(stream);
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
            setSupported(false);
        });

        afterEach(() => {
            setSupported(true);
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
