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
        return this.javaClass.getXSync();
    }

    /**
     * Returns the x magnitude.
     * @returns {Promise<Number>}
     */
    getXAsync() {
        return this.javaClass.getX();
    }

    /**
     * Returns the y magnitude.
     * @returns {Number}
     */
    getY() {
        return this.javaClass.getYSync();
    }

    /**
     * Returns the x magnitude.
     * @returns {Promise<Number>}
     */
    getYAsync() {
        return this.javaClass.getY();
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

    /**
     * Returns a new vector scaled by both x and y.
     *
     * @param {Number} sxy x and y scale
     * @returns {Promise<Vector>}
     */
    scaleAsync(sxy) {
        return new Promise(async(resolve, reject) => {
            resolve(new Vector(await this.javaClass.scale(sxy)));
        });
    }
}

module.exports = Vector;
