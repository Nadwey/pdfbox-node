export = PDRectangle;
declare class PDRectangle extends JavaClass {
    /**
     * Constructor. (you don't need to pass the width and height)
     *
     * @param {?Number} width The width of the rectangle.
     * @param {?Number} height The height of the rectangle.
     * @returns {PDRectangle}
     */
    static create(width: number | null, height: number | null): PDRectangle;
    /**
     * Constructor.
     *
     * @param {Number} x the x coordinate of the rectangle
     * @param {Number} y the y coordinate of the rectangle
     * @param {Number} width The width of the rectangle.
     * @param {Number} height The height of the rectangle.
     * @returns {PDRectangle}
     */
    static createXYWH(x: number, y: number, width: number, height: number): PDRectangle;
    /**
     * Method to determine if the x/y point is inside this rectangle.
     *
     * @param {Number} x The x-coordinate to test.
     * @param {Number} y The y-coordinate to test.
     * @returns {boolean} True if the point is inside this rectangle.
     */
    contains(x: number, y: number): boolean;
    /**
     * This will create a translated rectangle based off of this rectangle, such that the new rectangle retains the same dimensions(height/width), but the lower left x,y values are zero.
     * 100, 100, 400, 400 (llx, lly, urx, ury )
     * will be translated to 0,0,300,300
     * @returns {PDRectangle} A new rectangle that has been translated back to the origin.
     */
    createRetranslatedRectangle(): PDRectangle;
    /**
     * This will get the lower left x coordinate.
     * @returns {Number} The lower left x.
     */
    getLowerLeftX(): number;
    /**
     * This will get the lower left y coordinate.
     * @returns {Number} The lower left y.
     */
    getLowerLeftY(): number;
    /**
     * This will get the upper right x coordinate.
     * @returns {Number} The upper right x.
     */
    getUpperRightX(): number;
    /**
     * This will get the upper right y coordinate.
     * @returns {Number} The upper right y.
     */
    getUpperRightY(): number;
    /**
     * This will get the width of this rectangle as calculated by upperRightX - lowerLeftX.
     * @returns {Number}
     */
    getWidth(): number;
    /**
     * This will get the height of this rectangle as calculated by upperRightY - lowerLeftY.
     * @returns {Number}
     */
    getHeight(): number;
    /**
     * This will set the lower left x coordinate.
     *
     * @param {Number} value The lower left x.
     */
    setLowerLeftX(value: number): void;
    /**
     * This will set the lower left y coordinate.
     *
     * @param {Number} value The lower left y.
     */
    setLowerLeftY(value: number): void;
    /**
     * This will set the upper right x coordinate.
     *
     * @param {Number} value The upper right x .
     */
    setUpperRightX(value: number): void;
    /**
     * This will set the upper right y coordinate.
     *
     * @param {Number} value The upper right y.
     */
    setUpperRightY(value: number): void;
}
declare namespace PDRectangle {
    export { A0, A1, A2, A3, A4, A5, A6, LEGAL, LETTER };
}
import JavaClass = require("./javaClass");
declare var A0: any;
declare var A1: any;
declare var A2: any;
declare var A3: any;
declare var A4: any;
declare var A5: any;
declare var A6: any;
declare var LEGAL: any;
declare var LETTER: any;
