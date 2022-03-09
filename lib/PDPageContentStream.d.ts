export = PDPageContentStream;
declare class PDPageContentStream extends JavaClass {
    /**
     * Create a new PDPage content stream. This constructor overwrites all existing content streams of this page.
     *
     * @param {PDDocument} document The document the page is part of.
     * @param {PDPage} sourcePage The page to write the contents to.
     * @returns {PDPageContentStream}
     */
    static create(document: PDDocument, sourcePage: PDPage): PDPageContentStream;
    /**
     * Add a rectangle to the current path.
     *
     * @param {Number} x The lower left x coordinate.
     * @param {Number} y The lower left y coordinate.
     * @param {Number} width The width of the rectangle.
     * @param {Number} height The height of the rectangle.
     */
    addRect(x: number, y: number, width: number, height: number): void;
    /**
     * Write a comment line.
     *
     * @param {String} comment the comment to be added to the content stream.
     */
    addComment(comment: string): void;
    /**
     * Begin some text operations.
     */
    beginText(): void;
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
    curveTo(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;
    /**
     * Append a cubic Bézier curve to the current path. The curve extends from the current point to the point (x3, y3), using (x1, y1) and (x3, y3) as the Bézier control points.
     *
     * @param {Number} x1 x coordinate of the point 1
     * @param {Number} y1 y coordinate of the point 1
     * @param {Number} x3 x coordinate of the point 3
     * @param {Number} y3 y coordinate of the point 3
     */
    curveTo1(x1: number, y1: number, x3: number, y3: number): void;
    /**
     * Append a cubic Bézier curve to the current path. The curve extends from the current point to the point (x3, y3), using the current point and (x2, y2) as the Bézier control points.
     *
     * @param {Number} x2 x coordinate of the point 2
     * @param {Number} y2 y coordinate of the point 2
     * @param {Number} x3 x coordinate of the point 3
     * @param {Number} y3 y coordinate of the point 3
     */
    curveTo2(x2: number, y2: number, x3: number, y3: number): void;
    /**
     * Close and stroke the path.
     */
    closeAndStroke(): void;
    /**
     * Close, fill, and then stroke the path, using the nonzero winding number rule to determine the region to fill. This shall have the same effect as the sequence closePath() and then fillAndStroke().
     */
    closeAndFillAndStroke(): void;
    /**
     * Close, fill, and then stroke the path, using the even-odd rule to determine the region to fill. This shall have the same effect as the sequence closePath() and then fillAndStrokeEvenOdd().
     */
    closeAndFillAndStrokeEvenOdd(): void;
    /**
     * Closes the current subpath.
     */
    closePath(): void;
    /**
     * Intersects the current clipping path with the current path, using the nonzero rule.
     */
    clip(): void;
    /**
     * Intersects the current clipping path with the current path, using the even-odd rule.
     */
    clipEvenOdd(): void;
    /**
     * Close the content stream. This must be called when you are done with this object.
     */
    close(): void;
    /**
     * End some text operations.
     */
    endText(): void;
    /**
     * End a marked content sequence.
     */
    endMarkedContent(): void;
    /**
     * Fills the path using the nonzero winding number rule.
     */
    fill(): void;
    /**
     * Fills the path using the even-odd winding rule.
     */
    fillEvenOdd(): void;
    /**
     * Fill and then stroke the path, using the nonzero winding number rule to determine the region to fill. This shall produce the same result as constructing two identical path objects, painting the first with fill() and the second with stroke().
     */
    fillAndStroke(): void;
    /**
     * Fill and then stroke the path, using the even-odd rule to determine the region to fill. This shall produce the same result as constructing two identical path objects, painting the first with fillEvenOdd() and the second with stroke().
     */
    fillAndStrokeEvenOdd(): void;
    /**
     * Draw a line from the current position to the given coordinates.
     *
     * @param {Number} x The x coordinate.
     * @param {Number} y The y coordinate.
     */
    lineTo(x: number, y: number): void;
    /**
     * Move the current position to the given coordinates.
     *
     * @param {Number} x The x coordinate.
     * @param {Number} y The y coordinate.
     */
    moveTo(x: number, y: number): void;
    /**
     * Move to the start of the next line of text. Requires the leading (see setLeading(double)) to have been set.
     */
    newLine(): void;
    /**
     * The Td operator. Move to the start of the next line, offset from the start of the current line by (tx, ty).
     *
     * @param {Number} tx The x translation.
     * @param {Number} ty The y translation.
     */
    newLineAtOffset(tx: number, ty: number): void;
    /**
     * Q operator. Restores the current graphics state.
     */
    restoreGraphicsState(): void;
    /**
     * Set the font and font size to draw text with.
     *
     * @param {any} font The font to use.
     * @param {Number} fontSize The font size to draw the text.
     */
    setFont(font: any, fontSize: number): void;
    /**
     * Shows the given text at the location specified by the current text matrix.
     *
     * @param {String} text The Unicode text to show.
     */
    showText(text: string): void;
    /**
     * Outputs a string using the correct encoding and subsetting as required.
     *
     * @param {String} text The Unicode text to show.
     */
    showTextInternal(text: string): void;
    /**
     * Sets the text leading.
     *
     * @param {Number} leading The leading in unscaled text units.
     */
    setLeading(leading: number): void;
    /**
     * The Tm operator. Sets the text matrix to the given values. A current text matrix will be replaced with the new one.
     *
     * @param {Matrix} matrix the transformation matrix
     */
    setTextMatrix(matrix: Matrix): void;
    /**
     * q operator. Saves the current graphics state.
     */
    saveGraphicsState(): void;
    /**
     * Set the stroking color using an AWT color. Conversion uses the default sRGB color space.
     *
     * @param {Color} color The color to set.
     */
    setStrokingColor(color: Color): void;
    /**
     * Set the stroking color in the DeviceRGB color space. Range is 0..255.
     *
     * @param {Number} r The red value
     * @param {Number} g The green value.
     * @param {Number} b The blue value.
     */
    setStrokingColorRGB(r: number, g: number, b: number): void;
    /**
     * Set the stroking color in the DeviceCMYK color space. Range is 0..1
     *
     * @param {Number} c The cyan value.
     * @param {Number} m The magenta value.
     * @param {Number} y The yellow value.
     * @param {Number} k The black value.
     */
    setStrokingColorCMYK(c: number, m: number, y: number, k: number): void;
    /**
     * Set the stroking color in the DeviceGray color space. Range is 0..1.
     *
     * @param {Number} g The gray value.
     */
    setStrokingColorG(g: number): void;
    /**
     * Set the non-stroking color using an AWT color. Conversion uses the default sRGB color space.
     *
     * @param {Color} color The color to set.
     */
    setNonStrokingColor(color: Color): void;
    /**
     * Set the non-stroking color in the DeviceRGB color space. Range is 0..255.
     *
     * @param {Number} r The red value.
     * @param {Number} g The green value.
     * @param {Number} b The blue value.
     */
    setNonStrokingColorRGB(r: number, g: number, b: number): void;
    /**
     * Set the non-stroking color in the DeviceCMYK color space. Range is 0..1.
     *
     * @param {Number} c The cyan value.
     * @param {Number} m The magenta value.
     * @param {Number} y The yellow value.
     * @param {Number} k The black value.
     */
    setNonStrokingColorCMYK(c: number, m: number, y: number, k: number): void;
    /**
     * Set the non-stroking color in the DeviceGray color space. Range is 0..1.
     *
     * @param {Number} g The gray value.
     */
    setNonStrokingColorG(g: number): void;
    /**
     * Stroke the path.
     */
    stroke(): void;
    /**
     * Set line width to the given value.
     *
     * @param {Number} lineWidth The width which is used for drawing.
     */
    setLineWidth(lineWidth: number): void;
    /**
     * Set the line join style.
     *
     * @param {Number} lineJoinStyle 0 for miter join, 1 for round join, and 2 for bevel join.
     */
    setLineJoinStyle(lineJoinStyle: number): void;
    /**
     * Set the line cap style.
     *
     * @param {Number} lineCapStyle 0 for butt cap, 1 for round cap, and 2 for projecting square cap.
     */
    setLineCapStyle(lineCapStyle: number): void;
    /**
     * Set the line dash pattern.
     *
     * @param {Number[]} pattern The pattern array
     * @param {Number} phase The phase of the pattern
     */
    setLineDashPattern(pattern: number[], phase: number): void;
    /**
     * Set the miter limit.
     *
     * @param {Number} miterLimit the new miter limit.
     */
    setMiterLimit(miterLimit: number): void;
    /**
     * Set the character spacing. The value shall be added to the horizontal or vertical component of the glyph's displacement, depending on the writing mode.
     *
     * @param {Number} spacing character spacing
     */
    setCharacterSpacing(spacing: number): void;
    /**
     * Set the word spacing. The value shall be added to the horizontal or vertical component of the ASCII SPACE character, depending on the writing mode.
     * This will have an effect only with Type1 and TrueType fonts, not with Type0 fonts. The PDF specification tells why: "Word spacing shall be applied to every occurrence of the single-byte character code 32 in a string when using a simple font or a composite font that defines code 32 as a single-byte code. It shall not apply to occurrences of the byte value 32 in multiple-byte codes."
     *
     * @param {Number} spacing word spacing
     */
    setWordSpacing(spacing: number): void;
    /**
     * Set the horizontal scaling to scale / 100.
     *
     * @param {Number} scale number specifying the percentage of the normal width. Default value: 100 (normal width).
     */
    setHorizontalScaling(scale: number): void;
    /**
     * The cm operator. Concatenates the given matrix with the CTM.
     *
     * @param {Matrix} matrix the transformation matrix
     */
    transform(matrix: Matrix): void;
    /**
     * Writes a real number to the content stream.
     *
     * @param {Number} real the float value to be added to the content stream.
     */
    writeOperand(real: number): void;
}
import JavaClass = require("./javaClass");
import Matrix = require("./Matrix");
import Color = require("./Color");
import PDDocument = require("./PDDocument");
import PDPage = require("./PDPage");
