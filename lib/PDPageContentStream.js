const Color = require("./Color");
const JavaClass = require("./javaClass");
const java = require("./javaInit").getJavaInstance();
const javaImports = require("./javaImports");
const Matrix = require("./Matrix");
const PDDocument = require("./PDDocument");
const PDPage = require("./PDPage");

class PDPageContentStream extends JavaClass {
    /**
     * Create a new PDPage content stream. This constructor overwrites all existing content streams of this page.
     *
     * @param {PDDocument} document The document the page is part of.
     * @param {PDPage} sourcePage The page to write the contents to.
     * @returns {PDPageContentStream}
     */
    static create(document, sourcePage) {
        return new PDPageContentStream(
            new javaImports.PDPageContentStream(document.javaClass, sourcePage.javaClass)
        );
    }

    /**
     * Add a rectangle to the current path.
     *
     * @param {Number} x The lower left x coordinate.
     * @param {Number} y The lower left y coordinate.
     * @param {Number} width The width of the rectangle.
     * @param {Number} height The height of the rectangle.
     */
    addRect(x, y, width, height) {
        this.javaClass.addRectSync(x, y, width, height);
    }

    /**
     * Write a comment line.
     *
     * @param {String} comment the comment to be added to the content stream.
     */
    addComment(comment) {
        this.javaClass.addCommentSync(comment);
    }

    /**
     * Begin some text operations.
     */
    beginText() {
        this.javaClass.beginTextSync();
    }

    // /**
    //  * Begin a marked content sequence.
    //  *
    //  * @param {COSName} tag the tag
    //  */
    // beginMarkedContent(tag) {
    //     throw "not implemented";
    // }

    // /**
    //  * Begin a marked content sequence with a reference to an entry in the page resources' Properties dictionary.
    //  *
    //  * @param {COSName} tag the tag
    //  * @param {PDPropertyList} propertyList property list
    //  */
    // beginMarkedContent(tag, propertyList) {
    //     throw "not implemented";
    // }

    /**
     * Append a cubic Bézier curve to the current path. The curve extends from the current point to the point (x3, y3), using (x1, y1) and (x2, y2) as the Bézier control points.
     *
     * @param {Number} x1 x coordinate of the point 1
     * @param {Number} y1 y coordinate of the point 1
     * @param {Number} x2 x coordinate of the point 2
     * @param {Number} y2 y coordinate of the point 2
     * @param {Number} x3 x coordinate of the point 3
     * @param {Number} y3 y coordinate of the point 3
     */
    curveTo(x1, y1, x2, y2, x3, y3) {
        this.javaClass.curveToSync(x1, y1, x2, y2, x3, y3);
    }

    /**
     * Append a cubic Bézier curve to the current path. The curve extends from the current point to the point (x3, y3), using (x1, y1) and (x3, y3) as the Bézier control points.
     *
     * @param {Number} x1 x coordinate of the point 1
     * @param {Number} y1 y coordinate of the point 1
     * @param {Number} x3 x coordinate of the point 3
     * @param {Number} y3 y coordinate of the point 3
     */
    curveTo1(x1, y1, x3, y3) {
        this.javaClass.curveTo1Sync(x1, y1, x3, y3);
    }

    /**
     * Append a cubic Bézier curve to the current path. The curve extends from the current point to the point (x3, y3), using the current point and (x2, y2) as the Bézier control points.
     *
     * @param {Number} x2 x coordinate of the point 2
     * @param {Number} y2 y coordinate of the point 2
     * @param {Number} x3 x coordinate of the point 3
     * @param {Number} y3 y coordinate of the point 3
     */
    curveTo2(x2, y2, x3, y3) {
        this.javaClass.curveTo2Sync(x2, y2, x3, y3);
    }

    /**
     * Close and stroke the path.
     */
    closeAndStroke() {
        this.javaClass.closeAndStrokeSync();
    }

    /**
     * Close, fill, and then stroke the path, using the nonzero winding number rule to determine the region to fill. This shall have the same effect as the sequence closePath() and then fillAndStroke().
     */
    closeAndFillAndStroke() {
        this.javaClass.closeAndFillAndStrokeSync();
    }

    /**
     * Close, fill, and then stroke the path, using the even-odd rule to determine the region to fill. This shall have the same effect as the sequence closePath() and then fillAndStrokeEvenOdd().
     */
    closeAndFillAndStrokeEvenOdd() {
        this.javaClass.closeAndFillAndStrokeEvenOddSync();
    }

    /**
     * Closes the current subpath.
     */
    closePath() {
        this.javaClass.closePathSync();
    }

    /**
     * Intersects the current clipping path with the current path, using the nonzero rule.
     */
    clip() {
        this.javaClass.clipSync();
    }

    /**
     * Intersects the current clipping path with the current path, using the even-odd rule.
     */
    clipEvenOdd() {
        this.javaClass.clipEvenOddSync();
    }

    /**
     * Close the content stream. This must be called when you are done with this object.
     */
    close() {
        this.javaClass.closeSync();
    }

    // /**
    //  * Draw an image at the x,y coordinates, with the default size of the image.
    //  *
    //  * @param {PDImageXObject} image The image to draw.
    //  * @param {Number} x The x-coordinate to draw the image.
    //  * @param {Number} y The y-coordinate to draw the image.
    //  */
    // drawImage(image, x, y) {
    //     throw "not implemented";
    // }

    // /**
    //  * Draw an image at the x,y coordinates, with the given size.
    //  *
    //  * @param {PDImageXObject} image The image to draw.
    //  * @param {Number} x The x-coordinate to draw the image.
    //  * @param {Number} y The y-coordinate to draw the image.
    //  * @param {Number} width The width to draw the image.
    //  * @param {Number} height The height to draw the image.
    //  */
    // drawImage(image, x, y, width, height) {
    //     throw "not implemented";
    // }

    // /**
    //  * Draw an image at the origin with the given transformation matrix.
    //  *
    //  * @param {PDImageXObject} image The image to draw.
    //  * @param {Matrix} matrix The transformation matrix to apply to the image.
    //  */
    // drawImage(image, matrix) {
    //     throw "not implemented";
    // }

    // /**
    //  * Draw an inline image at the x,y coordinates, with the default size of the image.
    //  *
    //  * @param {PDInlineImage} inlineImage The inline image to draw.
    //  * @param {Number} x The x-coordinate to draw the inline image.
    //  * @param {Number} y The y-coordinate to draw the inline image.
    //  */
    // drawImage(inlineImage, x, y) {
    //     throw "not implemented";
    // }

    // /**
    //  * Draw an inline image at the x,y coordinates and a certain width and height.
    //  *
    //  * @param {PDInlineImage} inlineImage The inline image to draw.
    //  * @param {Number} x The x-coordinate to draw the inline image.
    //  * @param {Number} y The y-coordinate to draw the inline image.
    //  * @param {Number} width The width of the inline image to draw.
    //  * @param {Number} height The height of the inline image to draw.
    //  */
    // drawImage(inlineImage, x, y, width, height) {
    //     throw "not implemented";
    // }

    // /**
    //  * Draws the given Form XObject at the current location.
    //  *
    //  * @param {PDFormXObject} form Form XObject
    //  */
    // drawForm(form) {
    //     throw "not implemented";
    // }

    /**
     * End some text operations.
     */
    endText() {
        this.javaClass.endTextSync();
    }

    /**
     * End a marked content sequence.
     */
    endMarkedContent() {
        this.javaClass.endMarkedContentSync();
    }

    /**
     * Fills the path using the nonzero winding number rule.
     */
    fill() {
        this.javaClass.fillSync();
    }

    /**
     * Fills the path using the even-odd winding rule.
     */
    fillEvenOdd() {
        this.javaClass.fillEvenOddSync();
    }

    /**
     * Fill and then stroke the path, using the nonzero winding number rule to determine the region to fill. This shall produce the same result as constructing two identical path objects, painting the first with fill() and the second with stroke().
     */
    fillAndStroke() {
        this.javaClass.fillAndStrokeSync();
    }

    /**
     * Fill and then stroke the path, using the even-odd rule to determine the region to fill. This shall produce the same result as constructing two identical path objects, painting the first with fillEvenOdd() and the second with stroke().
     */
    fillAndStrokeEvenOdd() {
        this.javaClass.fillAndStrokeEvenOddSync();
    }

    /**
     * Draw a line from the current position to the given coordinates.
     *
     * @param {Number} x The x coordinate.
     * @param {Number} y The y coordinate.
     */
    lineTo(x, y) {
        this.javaClass.lineToSync(x, y);
    }

    /**
     * Move the current position to the given coordinates.
     *
     * @param {Number} x The x coordinate.
     * @param {Number} y The y coordinate.
     */
    moveTo(x, y) {
        this.javaClass.moveToSync(x, y);
    }

    /**
     * Move to the start of the next line of text. Requires the leading (see setLeading(double)) to have been set.
     */
    newLine() {
        this.javaClass.newLineSync();
    }

    /**
     * The Td operator. Move to the start of the next line, offset from the start of the current line by (tx, ty).
     *
     * @param {Number} tx The x translation.
     * @param {Number} ty The y translation.
     */
    newLineAtOffset(tx, ty) {
        this.javaClass.newLineAtOffsetSync(tx, ty);
    }

    /**
     * Q operator. Restores the current graphics state.
     */
    restoreGraphicsState() {
        this.javaClass.restoreGraphicsStateSync();
    }

    /**
     * Set the font and font size to draw text with.
     *
     * @param {PDFont} font The font to use.
     * @param {Number} fontSize The font size to draw the text.
     */
    setFont(font, fontSize) {
        this.javaClass.setFontSync(font, fontSize);
    }

    // /**
    //  * Shows the given text at the location specified by the current text matrix with the given interspersed positioning. This allows the user to efficiently position each glyph or sequence of glyphs.
    //  *
    //  * @param {Object[]} textWithPositioningArray An array consisting of String and Float types. Each String is output to the page using the current text matrix. Using the default coordinate system, each interspersed number adjusts the current text matrix by translating to the left or down for horizontal and vertical text respectively. The number is expressed in thousands of a text space unit, and may be negative.
    //  */
    // showTextWithPositioning(textWithPositioningArray) {
    //     throw "not implemented";
    // }

    /**
     * Shows the given text at the location specified by the current text matrix.
     *
     * @param {String} text The Unicode text to show.
     */
    showText(text) {
        this.javaClass.showTextSync(text);
    }

    /**
     * Outputs a string using the correct encoding and subsetting as required.
     *
     * @param {String} text The Unicode text to show.
     */
    showTextInternal(text) {
        this.javaClass.showTextInternalSync(text);
    }

    /**
     * Sets the text leading.
     *
     * @param {Number} leading The leading in unscaled text units.
     */
    setLeading(leading) {
        this.javaClass.setLeadingSync(leading);
    }

    /**
     * The Tm operator. Sets the text matrix to the given values. A current text matrix will be replaced with the new one.
     *
     * @param {Matrix} matrix the transformation matrix
     */
    setTextMatrix(matrix) {
        this.javaClass.setTextMatrixSync(matrix.javaClass);
    }

    /**
     * q operator. Saves the current graphics state.
     */
    saveGraphicsState() {
        this.javaClass.saveGraphicsStateSync();
    }

    /**
     * Set the stroking color using an AWT color. Conversion uses the default sRGB color space.
     *
     * @param {Color} color The color to set.
     */
    setStrokingColor(color) {
        this.javaClass.setStrokingColorSync(color.javaClass);
    }

    /**
     * Set the stroking color in the DeviceRGB color space. Range is 0..255.
     *
     * @param {Number} r The red value
     * @param {Number} g The green value.
     * @param {Number} b The blue value.
     */
    setStrokingColorRGB(r, g, b) {
        this.javaClass.setStrokingColorSync(r, g, b);
    }

    /**
     * Set the stroking color in the DeviceCMYK color space. Range is 0..1
     *
     * @param {Number} c The cyan value.
     * @param {Number} m The magenta value.
     * @param {Number} y The yellow value.
     * @param {Number} k The black value.
     */
    setStrokingColorCMYK(c, m, y, k) {
        this.javaClass.setStrokingColorSync(c, m, y, k);
    }

    /**
     * Set the stroking color in the DeviceGray color space. Range is 0..1.
     *
     * @param {Number} g The gray value.
     */
    setStrokingColorG(g) {
        this.javaClass.setStrokingColorSync(g);
    }

    /**
     * Set the non-stroking color using an AWT color. Conversion uses the default sRGB color space.
     *
     * @param {Color} color The color to set.
     */
    setNonStrokingColor(color) {
        this.javaClass.setNonStrokingColorSync(color.javaClass);
    }

    /**
     * Set the non-stroking color in the DeviceRGB color space. Range is 0..255.
     *
     * @param {Number} r The red value.
     * @param {Number} g The green value.
     * @param {Number} b The blue value.
     */
    setNonStrokingColorRGB(r, g, b) {
        this.javaClass.setNonStrokingColorSync(r, g, b);
    }

    /**
     * Set the non-stroking color in the DeviceCMYK color space. Range is 0..1.
     *
     * @param {Number} c The cyan value.
     * @param {Number} m The magenta value.
     * @param {Number} y The yellow value.
     * @param {Number} k The black value.
     */
    setNonStrokingColorCMYK(c, m, y, k) {
        this.javaClass.setNonStrokingColorSync(c, m, y, k);
    }

    /**
     * Set the non-stroking color in the DeviceGray color space. Range is 0..1.
     *
     * @param {Number} g The gray value.
     */
    setNonStrokingColorG(g) {
        this.javaClass.setNonStrokingColorSync(g);
    }

    /**
     * Stroke the path.
     */
    stroke() {
        this.javaClass.strokeSync();
    }

    // /**
    //  * Fills the clipping area with the given shading.
    //  *
    //  * @param {PDShading} shading Shading resource
    //  */
    // shadingFill(shading) {
    //     throw "not implemented";
    // }

    /**
     * Set line width to the given value.
     *
     * @param {Number} lineWidth The width which is used for drawing.
     */
    setLineWidth(lineWidth) {
        this.javaClass.setLineWidthSync(lineWidth);
    }

    /**
     * Set the line join style.
     *
     * @param {Number} lineJoinStyle 0 for miter join, 1 for round join, and 2 for bevel join.
     */
    setLineJoinStyle(lineJoinStyle) {
        this.javaClass.setLineJoinStyleSync(lineJoinStyle);
    }

    /**
     * Set the line cap style.
     *
     * @param {Number} lineCapStyle 0 for butt cap, 1 for round cap, and 2 for projecting square cap.
     */
    setLineCapStyle(lineCapStyle) {
        this.javaClass.setLineCapStyleSync(lineCapStyle);
    }

    /**
     * Set the line dash pattern.
     *
     * @param {float[]} pattern The pattern array
     * @param {Number} phase The phase of the pattern
     */
    setLineDashPattern(pattern, phase) {
        this.javaClass.setLineDashPatternSync(pattern, phase);
    }

    /**
     * Set the miter limit.
     *
     * @param {Number} miterLimit the new miter limit.
     */
    setMiterLimit(miterLimit) {
        this.javaClass.setMiterLimitSync(miterLimit);
    }

    // /**
    //  * Set an extended graphics state.
    //  *
    //  * @param {PDExtendedGraphicsState} state The extended graphics state.
    //  */
    // setGraphicsStateParameters(state) {
    //     throw "not implemented";
    // }

    // /**
    //  * Set the text rendering mode. This determines whether showing text shall cause glyph outlines to be stroked, filled, used as a clipping boundary, or some combination of the three.
    //  *
    //  * @param {RenderingMode} rm The text rendering mode.
    //  */
    // setRenderingMode(rm) {
    //     throw "not implemented";
    // }

    /**
     * Set the character spacing. The value shall be added to the horizontal or vertical component of the glyph's displacement, depending on the writing mode.
     *
     * @param {Number} spacing character spacing
     */
    setCharacterSpacing(spacing) {
        this.javaClass.setCharacterSpacingSync(spacing);
    }

    /**
     * Set the word spacing. The value shall be added to the horizontal or vertical component of the ASCII SPACE character, depending on the writing mode.
     * This will have an effect only with Type1 and TrueType fonts, not with Type0 fonts. The PDF specification tells why: "Word spacing shall be applied to every occurrence of the single-byte character code 32 in a string when using a simple font or a composite font that defines code 32 as a single-byte code. It shall not apply to occurrences of the byte value 32 in multiple-byte codes."
     *
     * @param {Number} spacing word spacing
     */
    setWordSpacing(spacing) {
        this.javaClass.setWordSpacingSync(spacing);
    }

    /**
     * Set the horizontal scaling to scale / 100.
     *
     * @param {Number} scale number specifying the percentage of the normal width. Default value: 100 (normal width).
     */
    setHorizontalScaling(scale) {
        this.javaClass.setHorizontalScalingSync(scale);
    }

    /**
     * The cm operator. Concatenates the given matrix with the CTM.
     *
     * @param {Matrix} matrix the transformation matrix
     */
    transform(matrix) {
        this.javaClass.transformSync(matrix.javaClass);
    }

    /**
     * Writes a real number to the content stream.
     *
     * @param {Number} real the float value to be added to the content stream.
     */
    writeOperand(real) {
        this.javaClass.writeOperandSync(real);
    }
}

module.exports = PDPageContentStream;
