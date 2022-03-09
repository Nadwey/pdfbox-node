export = Matrix;
declare class Matrix extends JavaClass {
    /**
     * Creates new Matrix object
     *
     * @returns {Matrix}
     */
    static create(): Matrix;
    /**
     * Produces a copy of the first matrix, with the second matrix concatenated.
     *
     * @param {Matrix} a The matrix to copy.
     * @param {Matrix} b The matrix to concatenate.
     * @returns {Matrix}
     */
    static concatenateCopy(a: Matrix, b: Matrix): Matrix;
    /**
     * Convenience method to create a scaled instance.
     *
     * @param {Number} sx The xscale operator.
     * @param {Number} sy The yscale operator.
     * @returns {Matrix} A new matrix with just the x/y scaling
     */
    static getScaleInstance(sx: number, sy: number): Matrix;
    /**
     * Convenience method to create a translating instance.
     *
     * @param {Number} tx The x translating operator.
     * @param {Number} ty The y translating operator.
     * @returns {Matrix} A new matrix with just the x/y translating.
     */
    static getTranslateInstance(tx: number, ty: number): Matrix;
    /**
     * Convenience method to create a rotated instance.
     *
     * @param {Number} theta The angle of rotation measured in radians
     * @param {Number} tx The x translation.
     * @param {Number} ty The y translation.
     * @returns {Matrix} A new matrix with the rotation and the x/y translating.
     */
    static getRotateInstance(theta: number, tx: number, ty: number): Matrix;
    /**
     * Concatenates (premultiplies) the given matrix to this matrix.
     *
     * @param {Matrix} matrix The matrix to concatenate.
     */
    concatenate(matrix: Matrix): void;
    /**
     * Clones this object.
     * @returns {Matrix} cloned matrix as an object.
     */
    clone(): Matrix;
    /**
     * This will get a matrix value at some point.
     *
     * @param {Number} row The row to get the value from.
     * @param {Number} column The column to get the value from.
     * @returns {Number} The value at the row/column position.
     */
    getValue(row: number, column: number): number;
    /**
     * Return a single dimension array of all values in the matrix.
     * @returns {Float32Array[]}
     */
    getValues(): Float32Array[];
    /**
     * Returns the x-scaling factor of this matrix. This is calculated from the scale and shear.
     * @returns {Number}
     */
    getScalingFactorX(): number;
    /**
     * Returns the y-scaling factor of this matrix. This is calculated from the scale and shear.
     * @returns {Number}
     */
    getScalingFactorY(): number;
    /**
     * Returns the x-scaling element of this matrix.
     * @returns {Number}
     */
    getScaleX(): number;
    /**
     * Returns the y-shear element of this matrix.
     * @returns {Number}
     */
    getShearY(): number;
    /**
     * Returns the x-shear element of this matrix.
     * @returns {Number}
     */
    getShearX(): number;
    /**
     * Returns the y-scaling element of this matrix.
     * @returns {Number}
     */
    getScaleY(): number;
    /**
     * Returns the x-translation element of this matrix.
     * @returns {Number}
     */
    getTranslateX(): number;
    /**
     * Returns the y-translation element of this matrix.
     * @returns {Number}
     */
    getTranslateY(): number;
    /**
     *
     * @returns {Number}
     */
    hashCode(): number;
    /**
     * This will take the current matrix and multiply it with a matrix that is passed in.
     *
     * @param {Matrix} b The matrix to multiply by.
     * @returns {Matrix} The result of the two multiplied matrices.
     */
    multiply(b: Matrix): Matrix;
    /**
     * This method multiplies this Matrix with the specified other Matrix, storing the product in the specified result Matrix. By reusing Matrix instances like this, multiplication chains can be executed without having to create many temporary Matrix objects.
     * It is allowed to have (other == this) or (result == this) or indeed (other == result) but if this is done, the backing float[] matrix values may be copied in order to ensure a correct product.
     *
     * @param {Matrix} other the second operand Matrix in the multiplication
     * @param {Matrix} result the Matrix instance into which the result should be stored. If result is null, a new Matrix instance is created.
     * @returns {Matrix} the product of the two matrices.
     */
    multiplyOther(other: Matrix, result: Matrix): Matrix;
    /**
     * Rotares this matrix by the given factors.
     *
     * @param {Number} theta The angle of rotation measured in radians
     */
    rotate(theta: number): void;
    /**
     * This will set a value at a position.
     *
     * @param {Number} row The row to set the value at.
     * @param {Number} column the column to set the value at.
     * @param {Number} value The value to set at the position.
     */
    setValue(row: number, column: number, value: number): void;
    /**
     * Scales this matrix by the given factors.
     *
     * @param {Number} sx x-scale
     * @param {Number} sy y-scale
     */
    scale(sx: number, sy: number): void;
    /**
     * Translates this matrix by the given vector.
     *
     * @param {Vector} vector 2D vector
     */
    translate(vector: Vector): void;
    /**
     * Transforms the given point by this matrix.
     *
     * @param {Vector} vector 2D vector
     * @returns {Vector}
     */
    transform(vector: Vector): Vector;
}
import JavaClass = require("./javaClass");
import Vector = require("./Vector");
