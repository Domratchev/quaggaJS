import { config } from '../../src/config/config';
import BarcodeLocator from '../../src/locator/barcode_locator';

describe('checkImageConstraints', () => {
    let _config;
    let inputStream;
    let imageSize;
    let streamConfig = {};

    beforeEach(() => {
        imageSize = {
            x: 640,
            y: 480
        };
        _config = { ...config };
        inputStream = {
            getWidth: () => imageSize.x,
            getHeight: () => imageSize.y,
            setWidth: () => { },
            setHeight: () => { },
            setTopRight: () => { },
            setCanvasSize: () => { },
            getConfig: () => streamConfig
        };
        sinon.stub(inputStream, 'setWidth').callsFake((width) => {
            imageSize.x = width;
        });
        sinon.stub(inputStream, 'setHeight').callsFake((height) => {
            imageSize.y = height;
        });
        sinon.stub(inputStream, 'setTopRight');
        sinon.stub(inputStream, 'setCanvasSize');
    });

    afterEach(() => {
        inputStream.setWidth.restore();
        inputStream.setHeight.restore();
    });

    it('should not adjust the image size if not needed', () => {
        const expected = { x: imageSize.x, y: imageSize.y };
        BarcodeLocator.checkImageConstraints(inputStream, _config.locator);
        expect(inputStream.getWidth()).to.equal(expected.x);
        expect(inputStream.getHeight()).to.equal(expected.y);
    });

    it('should adjust the image size', () => {
        const expected = { x: imageSize.x, y: imageSize.y };

        _config.locator.halfSample = true;
        imageSize.y += 1;
        BarcodeLocator.checkImageConstraints(inputStream, _config.locator);
        expect(inputStream.getWidth()).to.equal(expected.x);
        expect(inputStream.getHeight()).to.equal(expected.y);
    });

    it('should adjust the image size', () => {
        const expected = { x: imageSize.x, y: imageSize.y };

        imageSize.y += 1;
        _config.locator.halfSample = false;
        BarcodeLocator.checkImageConstraints(inputStream, _config.locator);
        expect(inputStream.getHeight()).to.equal(expected.y);
        expect(inputStream.getWidth()).to.equal(expected.x);
    });

    it('should take the defined area into account', () => {
        const expectedSize = {
            x: 420,
            y: 315
        };
        const expectedTopRight = {
            x: 115,
            y: 52
        };
        const expectedCanvasSize = [640, 480];

        streamConfig.area = {
            top: '11%',
            right: '15%',
            bottom: '20%',
            left: '18%'
        };

        _config.locator.halfSample = false;
        BarcodeLocator.checkImageConstraints(inputStream, _config.locator);
        expect(inputStream.getHeight()).to.equal(expectedSize.y);
        expect(inputStream.getWidth()).to.equal(expectedSize.x);
        expect(inputStream.setTopRight.getCall(0).args[0]).to.deep.equal(expectedTopRight);
        expect(inputStream.setCanvasSize.getCall(0).args).to.deep.equal(expectedCanvasSize);
    });

    it('should return the original size if set to full image', () => {
        const expectedSize = {
            x: 640,
            y: 480
        };
        const expectedTopRight = {
            x: 0,
            y: 0
        };
        const expectedCanvasSize = [640, 480];

        streamConfig.area = {
            top: '0%',
            right: '0%',
            bottom: '0%',
            left: '0%'
        };

        _config.locator.halfSample = false;
        BarcodeLocator.checkImageConstraints(inputStream, _config.locator);
        expect(inputStream.getHeight()).to.equal(expectedSize.y);
        expect(inputStream.getWidth()).to.equal(expectedSize.x);
        expect(inputStream.setTopRight.getCall(0).args[0]).to.deep.equal(expectedTopRight);
        expect(inputStream.setCanvasSize.getCall(0).args).to.deep.equal(expectedCanvasSize);
    });
});
