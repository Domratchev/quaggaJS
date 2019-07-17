/**
 * @borrows http://www.codeproject.com/Tips/407172/Connected-Component-Labeling-and-Vectorization
 */

export const SearchDirections = [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]];

export class Tracer {
    constructor(imageWrapper, labelWrapper) {
        this.imageData = imageWrapper.data;
        this.labelData = labelWrapper.data;
        this.width = imageWrapper.size.x;
    }

    trace(current, color, label, edgeLabel) {
        for (let i = 0; i < 7; i++) {
            const y = current.cy + SearchDirections[current.dir][0];
            const x = current.cx + SearchDirections[current.dir][1];
            const pos = y * this.width + x;

            if ((this.imageData[pos] === color) && ((this.labelData[pos] === 0) || (this.labelData[pos] === label))) {
                this.labelData[pos] = label;
                current.cy = y;
                current.cx = x;

                return true;
            } else {
                if (this.labelData[pos] === 0) {
                    this.labelData[pos] = edgeLabel;
                }
                current.dir = (current.dir + 1) % 8;
            }
        }
        return false;
    }

    contourTracing(sy, sx, label, color, edgeLabel) {
        let Fv = null;
        const current = {
            cx: sx,
            cy: sy,
            dir: 0
        };

        if (this.trace(current, color, label, edgeLabel)) {
            Fv = {
                x: sx,
                y: sy,
                dir: current.dir,
                next: null,
                prev: null
            };
            let Cv = Fv;
            let ldir = current.dir;
            let P = {
                x: current.cx,
                y: current.cy,
                dir: 0,
                next: null,
                prev: Cv
            };
            Cv.next = P;
            Cv = P;

            do {
                current.dir = (current.dir + 6) % 8;
                this.trace(current, color, label, edgeLabel);
                if (ldir !== current.dir) {
                    Cv.dir = current.dir;
                    P = {
                        x: current.cx,
                        y: current.cy,
                        dir: 0,
                        next: null,
                        prev: Cv
                    };
                    Cv.next = P;
                    Cv = P;
                } else {
                    Cv.dir = ldir;
                    Cv.x = current.cx;
                    Cv.y = current.cy;
                }
                ldir = current.dir;
            } while (current.cx !== sx || current.cy !== sy);
            Fv.prev = Cv.prev;
            Cv.prev.next = Fv;
        }
        return Fv;
    }
}
