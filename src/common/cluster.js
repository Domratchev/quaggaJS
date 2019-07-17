/**
 * Creates a cluster for grouping similar orientations of datapoints
 */
export class Cluster {
    constructor(threshold, point) {
        this._threshold = threshold;
        this._points = [];
        this._center = {
            rad: 0,
            x: 0,
            y: 0
        };
        this._pointMap = {};

        if (point) {
            this.add(point);
        }
    }

    add(point) {
        if (!this._pointMap[point.id]) {
            this._pointMap[point.id] = point;
            this._points.push(point);

            // Update center
            this._center.rad = this._points.reduce((sum, p) => sum + p.rad, 0) / this._points.length;
            this._center.x = Math.cos(this._center.rad);
            this._center.y = Math.sin(this._center.rad);
        }
    }

    fits(point) {
        // check cosine similarity to center-angle
        const similarity = Math.abs(point.point.x * this._center.x + point.point.y * this._center.y);
        return similarity > this._threshold;
    }

    get points() {
        return this._points;
    }
}
