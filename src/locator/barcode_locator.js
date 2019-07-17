import { Cluster } from '../common/cluster';
import { calculatePatchSize, computeImageArea, halfSample, hsv2rgb, otsuThreshold } from '../common/cv_utils';
import { ImageDebug } from '../common/image_debug';
import { ImageWrapper } from '../common/image_wrapper';
import { Rasterizer } from './rasterizer';
import skeletonizer from './skeletonizer';
import { SearchDirections } from './tracer';

let _config;
let _currentImageWrapper;
let _skelImageWrapper;
let _subImageWrapper;
let _labelImageWrapper;
let _patchGrid;
let _patchLabelGrid;
let _imageToPatchGrid;
let _binaryImageWrapper;
let _patchSize;
let _canvasContainer = {
    ctx: {
        binary: null
    },
    dom: {
        binary: null
    }
};
let _numPatches = { x: 0, y: 0 };
let _inputImageWrapper;
let _skeletonizer;

function initBuffers() {
    if (_config.halfSample) {
        _currentImageWrapper = new ImageWrapper({
            x: _inputImageWrapper.size.x / 2 | 0,
            y: _inputImageWrapper.size.y / 2 | 0
        });
    } else {
        _currentImageWrapper = _inputImageWrapper;
    }

    _patchSize = calculatePatchSize(_config.patchSize, _currentImageWrapper.size);

    _numPatches.x = _currentImageWrapper.size.x / _patchSize.x | 0;
    _numPatches.y = _currentImageWrapper.size.y / _patchSize.y | 0;

    _binaryImageWrapper = new ImageWrapper(_currentImageWrapper.size, undefined, Uint8Array, false);

    _labelImageWrapper = new ImageWrapper(_patchSize, undefined, Array, true);

    const skeletonImageData = new ArrayBuffer(64 * 1024);
    _subImageWrapper = new ImageWrapper(_patchSize, new Uint8Array(skeletonImageData, 0, _patchSize.x * _patchSize.y));
    _skelImageWrapper = new ImageWrapper(_patchSize,
        new Uint8Array(skeletonImageData, _patchSize.x * _patchSize.y * 3, _patchSize.x * _patchSize.y),
        undefined, true);
    _skeletonizer = skeletonizer(
        (typeof window !== 'undefined') ? window : (typeof self !== 'undefined') ? self : global,
        { size: _patchSize.x },
        skeletonImageData
    );

    _imageToPatchGrid = new ImageWrapper({
        x: (_currentImageWrapper.size.x / _subImageWrapper.size.x) | 0,
        y: (_currentImageWrapper.size.y / _subImageWrapper.size.y) | 0
    }, undefined, Array, true);
    _patchGrid = new ImageWrapper(_imageToPatchGrid.size, undefined, undefined, true);
    _patchLabelGrid = new ImageWrapper(_imageToPatchGrid.size, undefined, Int32Array, true);
}

function initCanvas() {
    if (_config.useWorker || typeof document === 'undefined') {
        return;
    }
    _canvasContainer.dom.binary = document.createElement('canvas');
    _canvasContainer.dom.binary.className = 'binaryBuffer';
    if (_config.debug && _config.debug.showCanvas) {
        document.querySelector('#debug').appendChild(_canvasContainer.dom.binary);
    }
    _canvasContainer.ctx.binary = _canvasContainer.dom.binary.getContext('2d');
    _canvasContainer.dom.binary.width = _binaryImageWrapper.size.x;
    _canvasContainer.dom.binary.height = _binaryImageWrapper.size.y;
}

/**
 * Creates a bounding box which encloses all the given patches
 * @returns The minimal bounding box
 */
function boxFromPatches(patches) {
    let averageRad = patches.reduce((sum, patch) => {
        if (_config.debug && _config.debug.showPatches) {
            // draw all patches which are to be taken into consideration
            ImageDebug.drawRect(patch.pos, _subImageWrapper.size, _canvasContainer.ctx.binary, { color: 'red' });
        }

        return sum + patch.rad;
    }, 0) / patches.length;

    averageRad = (averageRad * 180 / Math.PI + 90) % 180 - 90;
    if (averageRad < 0) {
        averageRad += 180;
    }
    averageRad = (180 - averageRad) * Math.PI / 180;

    const cos = Math.cos(averageRad);
    const sin = Math.sin(averageRad);
    const matrix = Float32Array.from([cos, sin, -sin, cos]);
    const context = _canvasContainer.ctx.binary;

    // iterate over patches and rotate by angle
    patches.forEach(patch => {
        for (let j = 0; j < 4; j++) {
            patch.box[j] = transformWithMatrix(patch.box[j], matrix);
        }

        if (_config.debug && _config.debug.boxFromPatches.showTransformed) {
            ImageDebug.drawPath(patch.box, { x: 'x', y: 'y' }, context, { color: '#99ff00', lineWidth: 2 });
        }
    });

    let minX = _binaryImageWrapper.size.x;
    let minY = _binaryImageWrapper.size.y;
    let maxX = -minX;
    let maxY = -minY;

    // find bounding box
    patches.forEach(patch => {
        patch.box.forEach(vertex => {
            if (vertex.x < minX) {
                minX = vertex.x;
            }
            if (vertex.x > maxX) {
                maxX = vertex.x;
            }
            if (vertex.y < minY) {
                minY = vertex.y;
            }
            if (vertex.y > maxY) {
                maxY = vertex.y;
            }
        });
    });

    const box = [{ x: minX, y: minY }, { x: maxX, y: minY }, { x: maxX, y: maxY }, { x: minX, y: maxY }];

    if (_config.debug && _config.debug.boxFromPatches.showTransformedBox) {
        ImageDebug.drawPath(box, { x: 'x', y: 'y' }, context, { color: '#ff0000', lineWidth: 2 });
    }

    // reverse rotation
    const inverseMatrix = invert(matrix);
    for (let j = 0; j < 4; j++) {
        box[j] = transformWithMatrix(box[j], inverseMatrix);
    }

    if (_config.debug && _config.debug.boxFromPatches.showBB) {
        ImageDebug.drawPath(box, { x: 'x', y: 'y' }, context, { color: '#ff0000', lineWidth: 2 });
    }

    if (_config.halfSample) {
        // scale
        box.forEach(vertex => {
            vertex.x *= 2;
            vertex.y *= 2;
        });
    }

    return box;
}

/**
 * Invert matrix
 * @param matrix the matrix to invert
 * @returns the inverted matrix
 */
function invert(matrix) {
    const a0 = matrix[0];
    const a1 = matrix[1];
    const a2 = matrix[2];
    const a3 = matrix[3];
    const determinant = a0 * a3 - a2 * a1;

    if (!determinant) {
        return null;
    }

    return Float32Array.from([a3 / determinant, -a1 / determinant, -a2 / determinant, a0 / determinant]);
}

/**
 * Transforms the vector with a matrix
 * @param { x, y } vector to transform
 * @param matric matrix to transform with
 * @returns the transformed vector
 */
function transformWithMatrix({ x, y }, matrix) {
    return {
        x: matrix[0] * x + matrix[2] * y,
        y: matrix[1] * x + matrix[3] * y
    };
}

/**
 * Creates a binary image of the current image
 */
function binarizeImage() {
    otsuThreshold(_currentImageWrapper, _binaryImageWrapper);
    _binaryImageWrapper.zeroBorder();

    if (_config.debug && _config.debug.showCanvas) {
        _binaryImageWrapper.show(_canvasContainer.dom.binary, 255);
    }
}

/**
 * Iterate over the entire image
 * extract patches
 */
function findPatches() {
    const context = _canvasContainer.ctx.binary;
    let patchesFound = [];

    for (let i = 0; i < _numPatches.x; i++) {
        for (let j = 0; j < _numPatches.y; j++) {
            const x = _subImageWrapper.size.x * i;
            const y = _subImageWrapper.size.y * j;

            // seperate parts
            skeletonize(x, y);

            // Rasterize, find individual bars
            _skelImageWrapper.zeroBorder();
            _labelImageWrapper.data.fill(0);
            const rasterizer = new Rasterizer(_skelImageWrapper, _labelImageWrapper);
            const rasterResult = rasterizer.rasterize(0);

            if (_config.debug && _config.debug.showLabels) {
                _labelImageWrapper.overlay(_canvasContainer.dom.binary, Math.floor(360 / rasterResult.count), x, y);
            }

            // calculate moments from the skeletonized patch
            const moments = _labelImageWrapper.moments(rasterResult.count);

            // extract eligible patches
            const patch = describePatch(moments, j * _numPatches.x + i, x, y);
            if (patch) {
                patchesFound.push(patch);

                if (_config.debug && _config.debug.showFoundPatches) {
                    ImageDebug.drawRect(patch.pos, _subImageWrapper.size, context, { color: '#99ff00', lineWidth: 2 });
                }
            }
        }
    }

    return patchesFound;
}

/**
 * Finds those connected areas which contain at least 6 patches
 * and returns them ordered DESC by the number of contained patches
 * @param maxLabel
 */
function findBiggestConnectedAreas(maxLabel) {
    let labelHist = [];

    for (let i = 0; i < maxLabel; i++) {
        labelHist.push(0);
    }

    let i = _patchLabelGrid.data.length;
    while (i--) {
        if (_patchLabelGrid.data[i] > 0) {
            labelHist[_patchLabelGrid.data[i] - 1]++;
        }
    }

    labelHist = labelHist.map((val, index) => {
        return {
            val,
            label: index + 1
        };
    });

    labelHist.sort((a, b) => b.val - a.val);

    // extract top areas with at least 6 patches present
    const topLabels = labelHist.filter(el => el.val >= 5);

    return topLabels;
}

/**
 *
 */
function findBoxes(topLabels, maxLabel) {
    const boxes = [];
    const hsv = [0, 1, 1];
    const rgb = [0, 0, 0];

    for (let i = 0; i < topLabels.length; i++) {
        const patches = [];

        for (let sum = _patchLabelGrid.data.length; sum--;) {
            if (_patchLabelGrid.data[sum] === topLabels[i].label) {
                const patch = _imageToPatchGrid.data[sum];
                patches.push(patch);
            }
        }

        const box = boxFromPatches(patches);

        if (box) {
            boxes.push(box);

            // draw patch-labels if requested
            if (_config.debug && _config.debug.showRemainingPatchLabels) {
                hsv[0] = (topLabels[i].label / (maxLabel + 1)) * 360;
                hsv2rgb(hsv, rgb);

                const context = _canvasContainer.ctx.binary;
                const style = {
                    color: 'rgb(' + rgb.join(',') + ')',
                    lineWidth: 2
                };

                patches.forEach(patch => ImageDebug.drawRect(patch.pos, _subImageWrapper.size, context, style));
            }
        }
    }

    return boxes;
}

function clusterize(points, threshold, property = 'rad') {
    const clusters = [];

    points.forEach((value, index) => {
        const point = {
            rad: value[property],
            point: value,
            id: index
        };
        const matchingCluster = clusters.find(cluster => cluster.fits(point));

        if (matchingCluster) {
            matchingCluster.add(point);
        } else {
            clusters.push(new Cluster(threshold, point));
        }
    });

    return clusters;
};

/**
 * Find similar moments (via cluster)
 * @param moments
 */
function similarMoments(moments) {
    const clusters = clusterize(moments, 0.90);
    const topCluster = clusters.reduce((top, item) => {
        const count = item.points.length;
        return count > top.count ? { item, count } : top;
    }, { item: { points: [] }, count: 0 });
    const result = topCluster.item.points.map(point => point.point);

    return result;
}

function skeletonize(x, y) {
    _binaryImageWrapper.subImageAsCopy(_subImageWrapper, x, y);
    _skeletonizer.skeletonize();

    // Show skeleton if requested
    if (_config.debug && _config.debug.showSkeleton) {
        _skelImageWrapper.overlay(_canvasContainer.dom.binary, 360, x, y);
    }
}

/**
 * Extracts and describes those patches which seem to contain a barcode pattern
 * @param {Array} moments
 * @param {Number} index
 * @param {Number} x
 * @param {Number} y
 * @returns {Array} list of patches
 */
function describePatch(moments, index, x, y) {
    if (moments.length > 1) {
        const minComponentWeight = Math.ceil(_patchSize.x / 3);
        // only collect moments which area covers at least minComponentWeight pixels
        const eligibleMoments = moments.filter(moment => moment.m00 > minComponentWeight);

        // if at least 2 moments are found which have at least minComponentWeights covered
        if (eligibleMoments.length > 1) {
            const matchingMoments = similarMoments(eligibleMoments);
            const length = matchingMoments.length;

            // Only two of the moments are allowed not to fit into the equation
            if (length > 1 && length >= (eligibleMoments.length / 4) * 3 && length > moments.length / 4) {
                // determine the similarity of the moments
                const rad = matchingMoments.reduce((sum, moment) => sum + moment.rad, 0) / length;

                return {
                    index,
                    pos: { x, y },
                    box: [
                        { x, y },
                        { x: x + _subImageWrapper.size.x, y },
                        { x: x + _subImageWrapper.size.x, y: y + _subImageWrapper.size.y },
                        { x, y: y + _subImageWrapper.size.y }
                    ],
                    moments: matchingMoments,
                    rad,
                    x: Math.cos(rad),
                    y: Math.sin(rad)
                };
            }
        }
    }

    return null;
}

/**
 * finds patches which are connected and share the same orientation
 * @param patchesFound
 */
function rasterizeAngularSimilarity(patchesFound) {
    const threshold = 0.95;
    let label = 0;
    const hsv = [0, 1, 1];
    const rgb = [0, 0, 0];

    function notYetProcessed() {
        for (let i = 0; i < _patchLabelGrid.data.length; i++) {
            if (_patchLabelGrid.data[i] === 0 && _patchGrid.data[i] === 1) {
                return i;
            }
        }
        return _patchLabelGrid.data.length;
    }

    function trace(currentIndex) {
        const current = {
            x: currentIndex % _patchLabelGrid.size.x,
            y: (currentIndex / _patchLabelGrid.size.x) | 0
        };

        if (currentIndex < _patchLabelGrid.data.length) {
            const currentPatch = _imageToPatchGrid.data[currentIndex];
            // assign label
            _patchLabelGrid.data[currentIndex] = label;

            SearchDirections.forEach(direction => {
                const y = current.y + direction[0];
                const x = current.x + direction[1];
                const index = y * _patchLabelGrid.size.x + x;

                // continue if patch empty
                if (_patchGrid.data[index] === 0) {
                    _patchLabelGrid.data[index] = Number.MAX_VALUE;
                } else if (_patchLabelGrid.data[index] === 0) {
                    const patch = _imageToPatchGrid.data[index];
                    const similarity = Math.abs(patch.x * currentPatch.x + patch.y * currentPatch.y);
                    if (similarity > threshold) {
                        trace(index);
                    }
                }
            });
        }
    }

    // prepare for finding the right patches
    _patchGrid.data.fill(0);
    _patchLabelGrid.data.fill(0);
    _imageToPatchGrid.data.fill(null);

    patchesFound.forEach(patch => {
        _imageToPatchGrid.data[patch.index] = patch;
        _patchGrid.data[patch.index] = 1;
    });

    // rasterize the patches found to determine area
    _patchGrid.zeroBorder();

    let currentIndex = 0;
    while ((currentIndex = notYetProcessed()) < _patchLabelGrid.data.length) {
        label++;
        trace(currentIndex);
    }

    // draw patch-labels if requested
    if (_config.debug && _config.debug.showPatchLabels) {
        const context = _canvasContainer.ctx.binary;

        for (let j = 0; j < _patchLabelGrid.data.length; j++) {
            if (_patchLabelGrid.data[j] > 0 && _patchLabelGrid.data[j] <= label) {
                const patch = _imageToPatchGrid.data[j];
                hsv[0] = (_patchLabelGrid.data[j] / (label + 1)) * 360;
                hsv2rgb(hsv, rgb);
                const color = 'rgb(' + rgb.join(',') + ')';
                ImageDebug.drawRect(patch.pos, _subImageWrapper.size, context, { color, lineWidth: 2 });
            }
        }
    }

    return label;
}

export default {
    init: (inputImageWrapper, config) => {
        _config = config;
        _inputImageWrapper = inputImageWrapper;

        initBuffers();
        initCanvas();
    },

    locate: () => {
        if (_config.halfSample) {
            halfSample(_inputImageWrapper, _currentImageWrapper);
        }

        binarizeImage();
        const patchesFound = findPatches();
        // return unless 5% or more patches are found
        if (patchesFound.length < _numPatches.x * _numPatches.y * 0.05) {
            return null;
        }

        // rasterize area by comparing angular similarity;
        const maxLabel = rasterizeAngularSimilarity(patchesFound);
        if (maxLabel < 1) {
            return null;
        }

        // search for area with the most patches (biggest connected area)
        const topLabels = findBiggestConnectedAreas(maxLabel);
        if (topLabels.length === 0) {
            return null;
        }

        const boxes = findBoxes(topLabels, maxLabel);
        return boxes;
    },

    checkImageConstraints: (inputStream, config) => {
        let width = inputStream.getWidth();
        let height = inputStream.getHeight();
        const sample = config.halfSample ? 0.5 : 1;

        // calculate width and height based on area
        if (inputStream.getConfig().area) {
            const area = computeImageArea(width, height, inputStream.getConfig().area);
            inputStream.setTopRight({ x: area.sx, y: area.sy });
            inputStream.setCanvasSize(width, height);
            width = area.sw;
            height = area.sh;
        }

        const size = {
            x: Math.floor(width * sample),
            y: Math.floor(height * sample)
        };

        const patchSize = calculatePatchSize(config.patchSize, size);
        if (ENV.development) {
            console.log('Patch-Size:', JSON.stringify(patchSize));
        }

        inputStream.setWidth(Math.floor(Math.floor(size.x / patchSize.x) * (1 / sample) * patchSize.x));
        inputStream.setHeight(Math.floor(Math.floor(size.y / patchSize.y) * (1 / sample) * patchSize.y));

        if ((inputStream.getWidth() % patchSize.x) === 0 && (inputStream.getHeight() % patchSize.y) === 0) {
            return true;
        }

        throw new Error(`Image dimensions do not comply with the current settings: width (${width}) and height (${height}) must be a multiple of ${patchSize.x}`);
    }
};
