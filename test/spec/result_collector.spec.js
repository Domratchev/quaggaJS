import { ResultCollector } from '../../src/analytics/result_collector';
import { ImageDebug } from '../../src/common/image_debug';

describe('resultCollector', () => {
    let imageWidth;
    let imageHeight;
    let config;

    beforeEach(() => {
        imageWidth = 320;
        imageHeight = 240;
        config = {
            capture: true,
            capacity: 20,
            blacklist: [{ code: '3574660239843', format: 'ean_13' }],
            filter: () => {
                return true;
            }
        };
        const canvasMock = {
            getContext: () => {
                return {};
            },
            toDataURL: sinon.spy(),
            width: 0,
            height: 0
        };
        sinon.stub(document, 'createElement').callsFake(type => {
            if (type === 'canvas') {
                return canvasMock;
            }
            return null;
        });
    });

    afterEach(() => {
        document.createElement.restore();
    });

    describe('constructor', () => {
        it('should return a new collector', () => {
            const collector = new ResultCollector(config);
            expect(document.createElement.calledOnce).to.equal(true);
            expect(document.createElement.getCall(0).args[0]).to.equal('canvas');
        });
    });

    describe('addResult', () => {
        beforeEach(() => {
            sinon.stub(ImageDebug, 'drawImage').callsFake(() => { });
        });

        afterEach(() => {
            ImageDebug.drawImage.restore();
        });

        it('should not add result if capacity is full', () => {
            config.capacity = 1;
            const collector = new ResultCollector(config);
            collector.addResult([], imageWidth, imageHeight, {});
            collector.addResult([], imageWidth, imageHeight, {});
            collector.addResult([], imageWidth, imageHeight, {});
            expect(collector.getResults()).to.have.length(1);
        });

        it('should only add results which match constraints', () => {
            const collector = new ResultCollector(config);

            collector.addResult([], imageWidth, imageHeight, {
                code: '423423443',
                format: 'ean_13'
            });
            collector.addResult([], imageWidth, imageHeight, {
                code: '3574660239843',
                format: 'ean_13'
            });
            collector.addResult([], imageWidth, imageHeight, {
                code: '3574660239843',
                format: 'code_128'
            });

            const results = collector.getResults();
            expect(results).to.have.length(2);

            results.forEach(result => {
                expect(result).not.to.deep.equal(config.blacklist[0]);
            });
        });

        it('should add result if no filter is set', () => {
            delete config.filter;
            const collector = new ResultCollector(config);

            collector.addResult([], imageWidth, imageHeight, {
                code: '423423443',
                format: 'ean_13'
            });
            expect(collector.getResults()).to.have.length(1);
        });

        it('should not add results if filter returns false', () => {
            config.filter = () => false;
            const collector = new ResultCollector(config);

            collector.addResult([], imageWidth, imageHeight, {
                code: '423423443',
                format: 'ean_13'
            });
            expect(collector.getResults()).to.have.length(0);
        });

        it('should add result if no blacklist is set', () => {
            delete config.blacklist;
            const collector = new ResultCollector(config);

            collector.addResult([], imageWidth, imageHeight, {
                code: '3574660239843',
                format: 'ean_13'
            });
            expect(collector.getResults()).to.have.length(1);
        });
    });
});
