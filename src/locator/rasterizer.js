/**
 * @borrows http://www.codeproject.com/Tips/407172/Connected-Component-Labeling-and-Vectorization
 */

import { Tracer } from './tracer';

const DIR = {
    OUTSIDE_EDGE: -32767,
    INSIDE_EDGE: -32766
};

const CONTOUR_DIR = {
    CW_DIR: 0,
    CCW_DIR: 1,
    UNKNOWN_DIR: 2
};

export class Rasterizer {
    constructor(imageWrapper, labelWrapper) {
        this.imageData = imageWrapper.data;
        this.labelData = labelWrapper.data;
        this.width = imageWrapper.size.x;
        this.height = imageWrapper.size.y;
        this.tracer = new Tracer(imageWrapper, labelWrapper);
    }

    rasterize(depthLabel) {
        const colorMap = [];

        for (let i = 0; i < 400; i++) {
            colorMap[i] = 0;
        }

        colorMap[0] = this.imageData[0];

        let cc = null;
        let sc;
        let connectedCount = 0;

        for (let cy = 1; cy < this.height - 1; cy++) {
            let labelIndex = 0;
            let bc = colorMap[0];

            for (let cx = 1; cx < this.width - 1; cx++) {
                const pos = cy * this.width + cx;

                if (this.labelData[pos] === 0) {
                    const color = this.imageData[pos];
                    if (color !== bc) {
                        if (labelIndex === 0) {
                            const lc = connectedCount + 1;
                            colorMap[lc] = color;
                            bc = color;
                            const vertex = this.tracer.contourTracing(cy, cx, lc, color, DIR.OUTSIDE_EDGE);
                            if (vertex !== null) {
                                connectedCount++;
                                labelIndex = lc;
                                const p = {
                                    dir: CONTOUR_DIR.CW_DIR,
                                    index: labelIndex,
                                    firstVertex: vertex,
                                    nextPeer: cc,
                                    insideContours: null
                                };
                                if (cc !== null) {
                                    cc.previousPeer = p;
                                }
                                cc = p;
                            }
                        } else {
                            const vertex = this.tracer.contourTracing(cy, cx, DIR.INSIDE_EDGE, color, labelIndex);
                            if (vertex !== null) {
                                const p = {
                                    dir: depthLabel === 0 ? CONTOUR_DIR.CCW_DIR : CONTOUR_DIR.CW_DIR,
                                    firstVertex: vertex,
                                    index: depthLabel,
                                    insideContours: null
                                };
                                sc = cc;
                                while ((sc !== null) && sc.index !== labelIndex) {
                                    sc = sc.nextPeer;
                                }
                                if (sc !== null) {
                                    p.nextPeer = sc.insideContours;
                                    if (sc.insideContours !== null) {
                                        sc.insideContours.previousPeer = p;
                                    }
                                    sc.insideContours = p;
                                }
                            }
                        }
                    } else {
                        this.labelData[pos] = labelIndex;
                    }
                } else if (this.labelData[pos] === DIR.INSIDE_EDGE) {
                    labelIndex = 0;
                    bc = this.imageData[pos];
                } else if (this.labelData[pos] === DIR.OUTSIDE_EDGE) {
                    labelIndex = 0;
                    bc = colorMap[0];
                } else {
                    labelIndex = this.labelData[pos];
                    bc = colorMap[labelIndex];
                }
            }
        }
        sc = cc;
        while (sc !== null) {
            sc.index = depthLabel;
            sc = sc.nextPeer;
        }
        return {
            cc,
            count: connectedCount
        };
    }

    drawContour(canvas, firstContour) {
        const ctx = canvas.getContext('2d');

        ctx.strokeStyle = 'red';
        ctx.fillStyle = 'red';
        ctx.lineWidth = 1;

        let pq = firstContour;
        let iq = pq && pq.insideContours;

        while (pq !== null) {
            let q = iq || pq;

            if (iq !== null) {
                iq = iq.nextPeer;
            } else {
                pq = pq.nextPeer;
                iq = pq && pq.insideContours;
            }

            switch (q.dir) {
                case CONTOUR_DIR.CW_DIR: {
                    ctx.strokeStyle = 'red';
                    break;
                }
                case CONTOUR_DIR.CCW_DIR: {
                    ctx.strokeStyle = 'blue';
                    break;
                }
                case CONTOUR_DIR.UNKNOWN_DIR: {
                    ctx.strokeStyle = 'green';
                    break;
                }
            }

            let p = q.firstVertex;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);

            do {
                p = p.next;
                ctx.lineTo(p.x, p.y);
            } while (p !== q.firstVertex);

            ctx.stroke();
        }
    }
}
