export = Color;
/**
 * @todo - low priority
 */
declare class Color extends JavaClass {
    /**
     * Creates an opaque sRGB color with the specified red, green, and blue values in the range (0.0 - 1.0).
     *
     * @param {Number} r red
     * @param {Number} g green
     * @param {Number} b blue
     * @returns {Color}
     */
    static createRGB(r: number, g: number, b: number): Color;
    /**
     * Creates an sRGB color with the specified red, green, blue, and alpha values in the range (0.0 - 1.0).
     *
     * @param {Number} r red
     * @param {Number} g green
     * @param {Number} b blue
     * @param {Number} a alpha
     * @returns {Color}
     */
    static createRGBA(r: number, g: number, b: number, a: number): Color;
}
import JavaClass = require("./javaClass");
