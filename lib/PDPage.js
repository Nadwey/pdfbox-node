const JavaClass = require("./javaClass");
const java = require("./javaInit").getJavaInstance();
const javaImports = require("./javaImports");
const PDRectangle = require("./PDRectangle");

class PDPage extends JavaClass {
    /**
     * Creates new PDF page
     *
     * @param {?PDRectangle} mediaBox The MediaBox of the page.
     * @returns {PDPage}
     */
    static create(mediaBox) {
        if (typeof mediaBox !== "undefined") return new PDPage(new javaImports.PDPage(mediaBox.javaClass));
        return new PDPage(new javaImports.PDPage());
    }
}

module.exports = PDPage;
