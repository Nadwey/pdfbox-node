const JavaClass = require("./javaClass");
const java = require("./javaInit").getJavaInstance();
const javaImports = require("./javaImports");
const Matrix = require("./Matrix");

class PDRectangle extends JavaClass {
    /**
     * Constructor. (you don't need to pass the width and height)
     *
     * @param {?Number} width The width of the rectangle.
     * @param {?Number} height The height of the rectangle.
     * @returns {PDRectangle}
     */
    static create(width, height) {
        if (typeof width !== "undefined" && typeof height !== "undefined")
            return new PDRectangle(new javaImports.PDRectangle(width, height));
        return new PDRectangle(new javaImports.PDRectangle());
    }

    /**
     * Constructor.
     *
     * @param {Number} x the x coordinate of the rectangle
     * @param {Number} y the y coordinate of the rectangle
     * @param {Number} width The width of the rectangle.
     * @param {Number} height The height of the rectangle.
     * @returns {PDRectangle}
     */
    static createXYWH(x, y, width, height) {
        return new PDRectangle(new javaImports.PDRectangle(x, y, width, height));
    }

    /**
     * Method to determine if the x/y point is inside this rectangle.
     *
     * @param {Number} x The x-coordinate to test.
     * @param {Number} y The y-coordinate to test.
     * @returns {boolean} True if the point is inside this rectangle.
     */
    contains(x, y) {
        return this.javaClass.containsSync(x, y);
    }

    /**
     * This will create a translated rectangle based off of this rectangle, such that the new rectangle retains the same dimensions(height/width), but the lower left x,y values are zero.
     * 100, 100, 400, 400 (llx, lly, urx, ury )
     * will be translated to 0,0,300,300
     * @returns {PDRectangle} A new rectangle that has been translated back to the origin.
     */
    createRetranslatedRectangle() {
        return new PDRectangle(this.javaClass.createRetranslatedRectangleSync());
    }

    /**
     * This will get the lower left x coordinate.
     * @returns {Number} The lower left x.
     */
    getLowerLeftX() {
        return this.javaClass.getLowerLeftXSync();
    }

    /**
     * This will get the lower left y coordinate.
     * @returns {Number} The lower left y.
     */
    getLowerLeftY() {
        return this.javaClass.getLowerLeftYSync();
    }

    /**
     * This will get the upper right x coordinate.
     * @returns {Number} The upper right x.
     */
    getUpperRightX() {
        return this.javaClass.getUpperRightXSync();
    }

    /**
     * This will get the upper right y coordinate.
     * @returns {Number} The upper right y.
     */
    getUpperRightY() {
        return this.javaClass.getUpperRightYSync();
    }

    /**
     * This will get the width of this rectangle as calculated by upperRightX - lowerLeftX.
     * @returns {Number}
     */
    getWidth() {
        return this.javaClass.getWidthSync();
    }

    /**
     * This will get the height of this rectangle as calculated by upperRightY - lowerLeftY.
     * @returns {Number}
     */
    getHeight() {
        return this.javaClass.getHeightSync();
    }

    /**
     * This will set the lower left x coordinate.
     *
     * @param {Number} value The lower left x.
     */
    setLowerLeftX(value) {
        this.javaClass.setLowerLeftXSync(value);
    }

    /**
     * This will set the lower left y coordinate.
     *
     * @param {Number} value The lower left y.
     */
    setLowerLeftY(value) {
        this.javaClass.setLowerLeftYSync(value);
    }

    /**
     * This will set the upper right x coordinate.
     *
     * @param {Number} value The upper right x .
     */
    setUpperRightX(value) {
        this.javaClass.setUpperRightXSync(value);
    }

    /**
     * This will set the upper right y coordinate.
     *
     * @param {Number} value The upper right y.
     */
    setUpperRightY(value) {
        this.javaClass.setUpperRightYSync(value);
    }
}

module.exports = PDRectangle;
module.exports.A0 = new PDRectangle(javaImports.PDRectangle.A0);
module.exports.A1 = new PDRectangle(javaImports.PDRectangle.A1);
module.exports.A2 = new PDRectangle(javaImports.PDRectangle.A2);
module.exports.A3 = new PDRectangle(javaImports.PDRectangle.A3);
module.exports.A4 = new PDRectangle(javaImports.PDRectangle.A4);
module.exports.A5 = new PDRectangle(javaImports.PDRectangle.A5);
module.exports.A6 = new PDRectangle(javaImports.PDRectangle.A6);
module.exports.LEGAL = new PDRectangle(javaImports.PDRectangle.LEGAL);
module.exports.LETTER = new PDRectangle(javaImports.PDRectangle.LETTER);
