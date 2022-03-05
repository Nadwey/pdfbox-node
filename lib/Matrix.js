const JavaClass = require("./javaClass");
const java = require("./javaInit").getJavaInstance();
const javaImports = require("./javaImports");
const Vector = require("./Vector");

class Matrix extends JavaClass {
    /**
     * Creates new Matrix object
     *
     * @returns {Matrix}
     */
    static create() {
        return new Matrix(new javaImports.Matrix());
    }

    // /**
    //  * Convenience method to be used when creating a matrix from unverified data. If the parameter is a COSArray with at least six numbers, a Matrix object is created from the first six numbers and returned. If not, then the identity Matrix is returned.
    //  *
    //  * @param {COSBase} base a COS object, preferably a COSArray with six numbers.
    //  * @returns {Matrix} a Matrix object.
    //  */
    // static createMatrix(base) {
    //     throw "not implemented";
    // }

    // /**
    //  * Create an affine transform from this matrix's values.
    //  * @returns {AffineTransform} 
    //  */
    // createAffineTransform() {
    //     throw "not implemented";
    // }

    /**
     * Concatenates (premultiplies) the given matrix to this matrix.
     *
     * @param {Matrix} matrix The matrix to concatenate.
     */
    concatenate(matrix) {
        this.javaClass.concatenateSync(matrix.javaClass);
    }

    /**
     * Produces a copy of the first matrix, with the second matrix concatenated.
     *
     * @param {Matrix} a The matrix to copy.
     * @param {Matrix} b The matrix to concatenate.
     * @returns {Matrix} 
     */
    static concatenateCopy(a, b) {
        return new Matrix(javaImports.Matrix.concatenateCopySync(a.javaClass, b.javaClass));
    }

    /**
     * Clones this object.
     * @returns {Matrix} cloned matrix as an object.
     */
    clone() {
        return new Matrix(this.javaClass.cloneSync());
    }

    /**
     * This will get a matrix value at some point.
     *
     * @param {Number} row The row to get the value from.
     * @param {Number} column The column to get the value from.
     * @returns {Number} The value at the row/column position.
     */
    getValue(row, column) {
        return this.javaClass.getValueSync(row, column);
    }

    /**
     * Return a single dimension array of all values in the matrix.
     * @returns {Float32Array[]} 
     */
    getValues() {
        return this.javaClass.getValuesSync();
    }

    /**
     * Convenience method to create a scaled instance.
     *
     * @param {Number} sx The xscale operator.
     * @param {Number} sy The yscale operator.
     * @returns {Matrix} A new matrix with just the x/y scaling
     */
    static getScaleInstance(sx, sy) {
        return new Matrix(javaImports.Matrix.getScaleInstanceSync(java.newFloat(sx), java.newFloat(sy)));
    }

    /**
     * Convenience method to create a translating instance.
     *
     * @param {Number} tx The x translating operator.
     * @param {Number} ty The y translating operator.
     * @returns {Matrix} A new matrix with just the x/y translating.
     */
    static getTranslateInstance(tx, ty) {
        return new Matrix(javaImports.Matrix.getTranslateInstanceSync(java.newFloat(tx), java.newFloat(ty)));
    }

    /**
     * Convenience method to create a rotated instance.
     *
     * @param {Number} theta The angle of rotation measured in radians
     * @param {Number} tx The x translation.
     * @param {Number} ty The y translation.
     * @returns {Matrix} A new matrix with the rotation and the x/y translating.
     */
    static getRotateInstance(theta, tx, ty) {
        return new Matrix(javaImports.Matrix.getRotateInstance(java.newDouble(theta), java.newFloat(tx), java.newFloat(ty)));
    }

    /**
     * Returns the x-scaling factor of this matrix. This is calculated from the scale and shear.
     * @returns {Number} 
     */
    getScalingFactorX() {
        return this.javaClass.getScalingFactorXSync();
    }

    /**
     * Returns the y-scaling factor of this matrix. This is calculated from the scale and shear.
     * @returns {Number} 
     */
    getScalingFactorY() {
        return this.javaClass.getScalingFactorYSync();
    }

    /**
     * Returns the x-scaling element of this matrix.
     * @returns {Number} 
     */
    getScaleX() {
        return this.javaClass.getScaleXSync();
        }

    /**
     * Returns the y-shear element of this matrix.
     * @returns {Number}
     */
    getShearY() {
        return this.javaClass.getShearYSync();
    }

    /**
     * Returns the x-shear element of this matrix.
     * @returns {Number}
     */
    getShearX() {
        return this.javaClass.getShearXSync();
    }

    /**
     * Returns the y-scaling element of this matrix.
     * @returns {Number} 
     */
    getScaleY() {
        return this.javaClass.getScaleYSync();
    }

    /**
     * Returns the x-translation element of this matrix.
     * @returns {Number}
     */
    getTranslateX() {
        return this.javaClass.getTranslateXSync();
    }

    /**
     * Returns the y-translation element of this matrix.
     * @returns {Number}
     */
    getTranslateY() {
        return this.javaClass.getTranslateYSync();
    }

    /**
     * 
     * @returns {Number} 
     */
    hashCode() {
        return this.javaClass.hashCodeSync();
    }

    /**
     * This will take the current matrix and multiply it with a matrix that is passed in.
     *
     * @param {Matrix} b The matrix to multiply by.
     * @returns {Matrix} The result of the two multiplied matrices.
     */
    multiply(b) {
        return new Matrix(this.javaClass.multiplySync(b.javaClass));
    }

    /**
     * This method multiplies this Matrix with the specified other Matrix, storing the product in the specified result Matrix. By reusing Matrix instances like this, multiplication chains can be executed without having to create many temporary Matrix objects.
     * It is allowed to have (other == this) or (result == this) or indeed (other == result) but if this is done, the backing float[] matrix values may be copied in order to ensure a correct product.
     *
     * @param {Matrix} other the second operand Matrix in the multiplication
     * @param {Matrix} result the Matrix instance into which the result should be stored. If result is null, a new Matrix instance is created.
     * @returns {Matrix} the product of the two matrices.
     */
    multiplyOther(other, result) {
        return new Matrix(this.javaClass.multiplySync(other.javaClass, result.javaClass));
    }

    /**
     * Rotares this matrix by the given factors.
     *
     * @param {Number} theta The angle of rotation measured in radians
     */
    rotate(theta) {
        this.javaClass.rotateSync(java.newDouble(theta));
    }

    /**
     * This will set a value at a position.java.newFloat
     *
     * @param {Number} row The row to set the value at.
     * @param {Number} column the column to set the value at.
     * @param {Number} value The value to set at the position.
     */
    setValue(row, column, value) {
        this.javaClass.setValueSync(row, column, java.newFloat(value));
    }

    /**
     * Scales this matrix by the given factors.
     *
     * @param {Number} sx x-scale
     * @param {Number} sy y-scale
     */
    scale(sx, sy) {
        this.javaClass.scaleSync(java.newFloat(sx), java.newFloat(sy));
    }

    /**
     * Translates this matrix by the given vector.
     *
     * @param {Vector} vector 2D vector
     */
    translate(vector) {
        this.javaClass.translateSync(vector.javaClass);
    }

    /**
     * Translates this matrix by the given ammount.
     *
     * @param {Number} tx x-translation
     * @param {Number} ty y-translation
     */
    translate(tx, ty) {
        this.javaClass.translateSync(java.newFloat(tx), java.newFloat(ty));
    }

    /**
     * Transforms the given point by this matrix.
     *
     * @param {Vector} vector 2D vector
     * @returns {Vector} 
     */
    transform(vector) {
        return new Vector(this.javaClass.transformSync(vector.javaClass));
    }
}

module.exports = Matrix;
