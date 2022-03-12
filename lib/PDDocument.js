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
     * Loads PDF from path
     * @param {String} path Path to PDF to load
     * @param {?String} password PDF password
     *
     * @returns {PDDocument} PDF Document
     */
    static loadFromPath(path, password) {
        const file = new javaImports.File(path);
        if (typeof password !== "undefined")
            return new PDDocument(javaImports.PDDocument.loadSync(file, password));
        return new PDDocument(javaImports.PDDocument.loadSync(file));
    }

    /**
     * Loads PDF from path
     * @param {String} path Path to PDF to load
     * @param {?String} password PDF password
     *
     * @returns {Promise<PDDocument>} PDF Document
     */
    static async loadFromPathAsync(path, password) {
        const file = new javaImports.File(path);
        if (typeof password !== "undefined")
            return new PDDocument(await javaImports.PDDocument.load(file, password));
        return new PDDocument(await javaImports.PDDocument.load(file));
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
     * This will add a page to the document.
     *
     * @param {PDPage} page The page to add to the document.
     */
    async addPageAsync(page) {
        await this.javaClass.addPage(page.javaClass);
    }

    /**
     * This will close the underlying COSDocument object.
     */
    close() {
        this.javaClass.closeSync();
    }

    /**
     * This will close the underlying COSDocument object.
     */
    async close() {
        await this.javaClass.close();
    }

    /**
     *
     * @returns {any}
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
     * This will get the document info dictionary.
     *
     * @returns {Promise<PDDocumentInformation>}
     */
    async getDocumentInformationAsync() {
        return new PDDocumentInformation(await this.javaClass.getDocumentInformation());
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
     * Returns amount of pages
     *
     * @returns {Promise<Number>}
     */
    async getNumberOfPagesAsync() {
        return await this.javaClass.getNumberOfPages();
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
     * Returns the page at the given 0-based index.
     * This method is too slow to get all the pages from a large PDF document (1000 pages or more). For such documents, use the iterator of getPages() instead.
     *
     * @param {Number} pageIndex the 0-based page index
     * @returns {Promise<PDPage>} the page at the given index.
     */
    async getPageAsync(pageIndex) {
        return new PDPage(await this.javaClass.getPage(pageIndex));
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
     * Returns the page tree.
     *
     * @returns {Promise<PDPageTree>} the page tree
     */
    async getPagesAsync() {
        return new PDPageTree(await this.javaClass.getPages());
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
     * This will import and copy the contents from another location.
     *
     * @param {PDPage} page The page to import.
     * @returns {Promise<PDPage>} The page that was imported.
     */
    async importPageAsync(page) {
        return new PDPage(await this.javaClass.importPage(page.javaClass));
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
     * This will tell if this document is encrypted or not.
     *
     * @returns {Promise<Boolean>}
     */
    async isEncryptedAsync() {
        return await this.javaClass.isEncrypted();
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
     * Remove the page from the document.
     *
     * @constructor
     * @param {(Number|PDPage)} page Page to remove.
     *
     */
    async removePageAsync(page) {
        if (typeof page === "number") await this.javaClass.removePage(page);
        else if (page instanceof PDPage) await this.javaClass.removePage(page.javaClass);
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
     * Save the document to a file.
     *
     * @param {String} filename The file to save as.
     */
    async saveToPathAsync(filename) {
        await this.javaClass.save(filename);
    }

    /**
     * This will set the document information for this document.
     *
     * @param {PDDocumentInformation} info The updated document information.
     */
    setDocumentInformation(info) {
        this.javaClass.setDocumentInformationSync(info.javaClass);
    }

    /**
     * This will set the document information for this document.
     *
     * @param {PDDocumentInformation} info The updated document information.
     */
    async setDocumentInformationAsync(info) {
        await this.javaClass.setDocumentInformation(info.javaClass);
    }
}

module.exports = PDDocument;
