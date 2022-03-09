export = Vector;
declare class Vector extends JavaClass {
    /**
     * Creates new Vector object
     *
     * @param {Number} x
     * @param {Number} y
     * @returns {Vector}
     */
    static create(x: number, y: number): Vector;
    /**
     * Returns the x magnitude.
     * @returns {Number}
     */
    getX(): number;
    /**
     * Returns the y magnitude.
     * @returns {Number}
     */
    getY(): number;
    /**
     * Returns a new vector scaled by both x and y.
     *
     * @param {Number} sxy x and y scale
     * @returns {Vector}
     */
    scale(sxy: number): Vector;
}
import JavaClass = require("./javaClass");
