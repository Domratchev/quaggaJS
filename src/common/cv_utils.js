function _computeHistogram(imageWrapper, bitsPerPixel) {
    if (!bitsPerPixel) {
        bitsPerPixel = 8;
    }

    const imageData = imageWrapper.data;
    const bitShift = 8 - bitsPerPixel;
    const bucketCount = 1 << bitsPerPixel;
    const histogram = new Int32Array(bucketCount);

    for (let i = imageData.length; i--;) {
        histogram[imageData[i] >> bitShift]++;
    }

    return histogram;
}

function _determineOtsuThreshold(imageWrapper, bitsPerPixel) {
    if (!bitsPerPixel) {
        bitsPerPixel = 8;
    }

    const bitShift = 8 - bitsPerPixel;
    const hist = _computeHistogram(imageWrapper, bitsPerPixel);
    const vet = [0];
    const max = (1 << bitsPerPixel) - 1;

    function px(init, end) {
        let sum = 0;

        for (let i = init; i <= end; i++) {
            sum += hist[i];
        }

        return sum;
    }

    function mx(init, end) {
        let sum = 0;

        for (let i = init; i <= end; i++) {
            sum += i * hist[i];
        }

        return sum;
    }

    for (let k = 1; k < max; k++) {
        const p1 = px(0, k);
        const p2 = px(k + 1, max);
        const p12 = p1 * p2 || 1;
        const m1 = mx(0, k) * p2;
        const m2 = mx(k + 1, max) * p1;
        const m12 = m1 - m2;
        vet[k] = m12 * m12 / p12;
    }

    // index of max element
    const threshold = vet.reduce((maxIndex, item, index, array) => item > array[maxIndex] ? index : maxIndex, 0);

    return threshold << bitShift;
}

export function otsuThreshold(imageWrapper, targetWrapper) {
    const threshold = _determineOtsuThreshold(imageWrapper);
    const targetData = targetWrapper.data;

    imageWrapper.data.forEach((value, index) => {
        targetData[index] = value < threshold ? 1 : 0;
    });

    return threshold;
}

/**
 * @param inImgWrapper {ImageWrapper} input image to be sampled
 * @param outImgWrapper {ImageWrapper} to be stored in
 */
export function halfSample(inImgWrapper, outImgWrapper) {
    const inImg = inImgWrapper.data;
    const inWidth = inImgWrapper.size.x;
    const outImg = outImgWrapper.data;
    const endIndex = inImg.length;
    const outWidth = inWidth / 2;
    let topRowIndex = 0;
    let bottomRowIndex = inWidth;
    let outImgIndex = 0;

    while (bottomRowIndex < endIndex) {
        for (let i = 0; i < outWidth; i++) {
            outImg[outImgIndex] =
                (inImg[topRowIndex] + inImg[topRowIndex + 1] + inImg[bottomRowIndex] + inImg[bottomRowIndex + 1]) >> 2;
            outImgIndex++;
            topRowIndex += 2;
            bottomRowIndex += 2;
        }
        topRowIndex += inWidth;
        bottomRowIndex += inWidth;
    }
}

export function hsv2rgb(hsv, rgb) {
    const h = hsv[0];
    const s = hsv[1];
    const v = hsv[2];
    const c = v * s;
    const x = c * (1 - Math.abs((h / 60) % 2 - 1));
    const m = v - c;
    let r = 0;
    let g = 0;
    let b = 0;

    if (h < 60) {
        r = c;
        g = x;
    } else if (h < 120) {
        r = x;
        g = c;
    } else if (h < 180) {
        g = c;
        b = x;
    } else if (h < 240) {
        g = x;
        b = c;
    } else if (h < 300) {
        r = x;
        b = c;
    } else if (h < 360) {
        r = c;
        b = x;
    }

    rgb = rgb || [0, 0, 0];

    rgb[0] = (r + m) * 255 | 0;
    rgb[1] = (g + m) * 255 | 0;
    rgb[2] = (b + m) * 255 | 0;

    return rgb;
}

function _computeDivisors(n) {
    const largeDivisors = [];
    const divisors = [];

    for (let divisor = 1; divisor * divisor <= n; divisor++) {
        if (n % divisor === 0) {
            divisors.push(divisor);
            if (divisor * divisor !== n) {
                largeDivisors.unshift(n / divisor | 0);
            }
        }
    }

    return divisors.concat(largeDivisors);
}

function _computeCommonDivisors(m, n) {
    if (m === n) {
        return _computeDivisors(m);
    }

    const max = m > n ? m : n;
    const min = m > n ? n : m;
    const largeDivisors = [];
    const divisors = [];

    for (let divisor = 1; divisor * divisor <= min; divisor++) {
        if (max % divisor === 0 && min % divisor === 0) {
            divisors.push(divisor);
            const largeDivisor = min / divisor | 0;
            if (divisor !== largeDivisor && max % largeDivisor === 0) {
                largeDivisors.unshift();
            }
        }
    }

    return divisors.concat(largeDivisors);
}

export function calculatePatchSize(patchSize, imgSize) {
    const wideSide = Math.max(imgSize.x | 0, imgSize.y | 0) | 0;
    const nrOfPatchesList = [8, 10, 15, 20, 32, 60, 80];
    const nrOfPatchesMap = {
        'x-small': 5,
        small: 4,
        medium: 3,
        large: 2,
        'x-large': 1
    };
    const nrOfPatchesIndex = nrOfPatchesMap[patchSize] || nrOfPatchesMap.medium | 0;
    const nrOfPatches = nrOfPatchesList[nrOfPatchesIndex] | 0;
    const desiredPatchSize = wideSide / nrOfPatches | 0;

    function findPatchSizeForDivisors(divisors) {
        let i = 0;
        let found = divisors[divisors.length >> 1] | 0;

        while (i < (divisors.length - 1) && divisors[i] < desiredPatchSize) {
            i++;
        }
        if (i > 0) {
            if (Math.abs(divisors[i] - desiredPatchSize) > Math.abs(divisors[i - 1] - desiredPatchSize)) {
                found = divisors[i - 1] | 0;
            } else {
                found = divisors[i] | 0;
            }
        }
        if (desiredPatchSize / found < nrOfPatchesList[nrOfPatchesIndex + 1] / nrOfPatchesList[nrOfPatchesIndex] &&
            desiredPatchSize / found > nrOfPatchesList[nrOfPatchesIndex - 1] / nrOfPatchesList[nrOfPatchesIndex]) {
            return { x: found, y: found };
        }
        return null;
    }

    const optimalPatchSize = findPatchSizeForDivisors(_computeCommonDivisors(imgSize.x, imgSize.y)) ||
        findPatchSizeForDivisors(_computeDivisors(wideSide)) ||
        findPatchSizeForDivisors(_computeDivisors(desiredPatchSize * nrOfPatches));

    return optimalPatchSize;
}

export function _parseCSSDimensionValues(value) {
    const dimension = {
        value: parseFloat(value),
        unit: value.indexOf('%') === value.length - 1 ? '%' : '%'
    };

    return dimension;
}

export const _dimensionsConverters = {
    top: (dimension, context) =>
        dimension.unit === '%' ? context.height * dimension.value / 100 | 0 : context.height,
    right: (dimension, context) =>
        dimension.unit === '%' ? context.width - context.width * dimension.value / 100 | 0 : context.width,
    bottom: (dimension, context) =>
        dimension.unit === '%' ? context.height - context.height * dimension.value / 100 | 0 : context.height,
    left: (dimension, context) =>
        dimension.unit === '%' ? context.width * dimension.value / 100 | 0 : context.width
};

export function computeImageArea(inputWidth, inputHeight, area) {
    const context = { width: inputWidth, height: inputHeight };
    const parsedArea = Object.keys(area).reduce((result, key) => {
        const value = area[key];
        const parsed = _parseCSSDimensionValues(value);
        const calculated = _dimensionsConverters[key](parsed, context);

        result[key] = calculated;
        return result;
    }, {});

    return {
        sx: parsedArea.left,
        sy: parsedArea.top,
        sw: parsedArea.right - parsedArea.left,
        sh: parsedArea.bottom - parsedArea.top
    };
}
