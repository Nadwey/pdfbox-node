const JavaClass = require("./javaClass");
const java = require("./javaInit").getJavaInstance();
const javaImports = require("./javaImports");

class PDPage extends JavaClass {
    /**
     * Creates new PDF page
     * 
     * @returns {PDPage}
     */
    static create() {
        return new PDPage(new javaImports.PDPage());
    }
}

module.exports = PDPage;
