const JavaClass = require("./javaClass");
const java = require("./javaInit").getJavaInstance();
const javaImports = require("./javaImports");

class Vector extends JavaClass {
    /**
     * Creates new Vector object
     *
     * @param {Number} x
     * @param {Number} y
     * @returns {Vector}
     */
    static create(x, y) {
        return new Vector(new javaImports.Vector(x, y));
    }

    /**
     * Returns the x magnitude.
     * @returns {Number}
     */
    getX() {
        this.javaClass.getXSync();
    }

    /**
     * Returns the y magnitude.
     * @returns {Number}
     */
    getY() {
        this.javaClass.getYSync();
    }

    /**
     * Returns a new vector scaled by both x and y.
     *
     * @param {Number} sxy x and y scale
     * @returns {Vector}
     */
    scale(sxy) {
        return new Vector(this.javaClass.scaleSync(sxy));
    }
}

module.exports = Vector;
