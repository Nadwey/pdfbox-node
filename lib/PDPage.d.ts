export = PDPage;
declare class PDPage extends JavaClass {
    /**
     * Creates new PDF page
     *
     * @param {?PDRectangle} mediaBox The MediaBox of the page.
     * @returns {PDPage}
     */
    static create(mediaBox: PDRectangle | null): PDPage;
}
import JavaClass = require("./javaClass");
import PDRectangle = require("./PDRectangle");
