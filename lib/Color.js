const JavaClass = require("./javaClass");
const java = require("./javaInit").getJavaInstance();
const javaImports = require("./javaImports");

/**
 * @todo - low priority
 */
class Color extends JavaClass {
    /**
     * Creates an opaque sRGB color with the specified red, green, and blue values in the range (0.0 - 1.0).
     *
     * @param {Number} r red
     * @param {Number} g green
     * @param {Number} b blue
     * @returns {Color}
     */
    static createRGB(r, g, b) {
        return new Color(new javaImports.Color(r, g, b));
    }

    /**
     * Creates an sRGB color with the specified red, green, blue, and alpha values in the range (0.0 - 1.0).
     *
     * @param {Number} r red
     * @param {Number} g green
     * @param {Number} b blue
     * @param {Number} a alpha
     * @returns {Color}
     */
    static createRGBA(r, g, b, a) {
        return new Color(new javaImports.Color(r, g, b, a));
    }
}

module.exports = Color;
