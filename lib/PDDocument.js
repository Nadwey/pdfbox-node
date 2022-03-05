const JavaClass = require("./javaClass");
const PDPageTree = require("./PDPageTree");
const java = require("./javaInit").getJavaInstance();
const javaImports = require("./javaImports");
const PDDocumentInformation = require("./PDDocumentInformation");
const PDPage = require("./PDPage");

class PDDocument extends JavaClass {
    /**
     * Creates new PDF document
     *
     * @returns {PDDocument}
     */
    static create() {
        return new PDDocument(new javaImports.PDDocument());
    }

    /**
     * Loads PDF from byte array - WARNING: SLOW, MEMORY CONSUMING, use loadFromFile
     * @param {Uint8Array} bytes PDF bytes
     * @param {?String} password PDF password
     *
     * @returns {PDDocument} PDF Document
     *
     */
    static loadFromBytes(bytes, password) {
        const javaBytes = java.newArray("byte", Array.from(bytes));
        if (typeof password !== "undefined")
            return new PDDocument(javaImports.PDDocument.loadSync(javaBytes, password));
        return new PDDocument(javaImports.PDDocument.loadSync(javaBytes));
    }

    /**
     * Loads PDF from path
     * @param {String} path Path to PDF to load
     * @param {?String} password PDF password
     *
     * @returns {PDDocument} PDF Document
     */
    static loadFromFile(path, password) {
        const file = new javaImports.File(path);
        if (typeof password !== "undefined")
            return new PDDocument(javaImports.PDDocument.loadSync(file, password));
        return new PDDocument(javaImports.PDDocument.loadSync(file));
    }

    /**
     * This will add a page to the document.
     *
     * @param {PDPage} page The page to add to the document.
     */
    addPage(page) {
        this.javaClass.addPageSync(page.javaClass);
    }

    /**
     * This will close the underlying COSDocument object.
     */
    close() {
        this.javaClass.closeSync();
    }
    
    /**
     * 
     * @returns {JavaClass}
     */
    getDocument() {
        return this.javaClass;
    }

    /**
     * This will get the document info dictionary.
     * 
     * @returns {PDDocumentInformation}
     */
    getDocumentInformation() {
        return new PDDocumentInformation(this.javaClass.getDocumentInformationSync());
    }

    /**
     * Returns amount of pages
     *
     * @returns {Number}
     */
    getNumberOfPages() {
        return this.javaClass.getNumberOfPagesSync();
    }

    /**
     * Returns the page at the given 0-based index.
     * This method is too slow to get all the pages from a large PDF document (1000 pages or more). For such documents, use the iterator of getPages() instead.
     * 
     * @param {Number} pageIndex the 0-based page index
     * @returns {PDPage} the page at the given index.
     */
    getPage(pageIndex) {
        return new PDPage(this.javaClass.getPageSync(pageIndex));
    }

    /**
     * Returns the page tree.
     * 
     * @returns {PDPageTree} the page tree
     */
    getPages() {
        return new PDPageTree(this.javaClass.getPagesSync());
    }

    /**
     * This will import and copy the contents from another location.
     *
     * @param {PDPage} page The page to import.
     * @returns {PDPage} The page that was imported.
     */
    importPage(page) {
        return new PDPage(this.javaClass.importPageSync(page.javaClass));
    }

    /**
     * This will tell if this document is encrypted or not.
     *
     * @returns {Boolean}
     */
    isEncrypted() {
        return this.javaClass.isEncryptedSync();
    }

    /**
     * Remove the page from the document.
     *
     * @constructor
     * @param {(Number|PDPage)} page Page to remove.
     *
     */
    removePage(page) {
        if (typeof page === "number") this.javaClass.removePageSync(page);
        else if (page instanceof PDPage) this.javaClass.removePageSync(page.javaClass);
        else throw "Invalid type";
    }

    /**
     * Save the document to a file.
     * 
     * @param {String} filename The file to save as.
     */
    saveToPath(filename) {
        this.javaClass.saveSync(filename);
    }

    /**
     * This will set the document information for this document.
     * 
     * @param {PDDocumentInformation} info The updated document information.
     */
    setDocumentInformation(info) {
        this.javaClass.setDocumentInformationSync(info.javaClass);
    }
}

module.exports = PDDocument;
