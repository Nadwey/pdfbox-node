const JavaClass = require("./javaClass");
const PDDocumentInformation = require("./PDDocumentInformation");
const java = require("./javaInit").getJavaInstance();
const javaImports = require("./javaImports");
const PDDocument = require("./PDDocument");
const MemoryUsageSetting = require("./MemoryUsageSetting");

class PDFMergerUtility extends JavaClass {
    /**
     * Instantiate a new PDFMergerUtility.
     *
     * @returns {PDFMergerUtility}
     */
    static create() {
        return new PDFMergerUtility(new javaImports.PDFMergerUtility());
    }

    /**
     * Add a source file to the list of files to merge.
     *
     * @param {String} source Full path and file name of source document.
     */
    addSource(source) {
        this.javaClass.addSourceSync(source);
    }

    /**
     * Add a source file to the list of files to merge.
     *
     * @param {String} source Full path and file name of source document.
     */
    async addSourceAsync(source) {
        await this.javaClass.addSource(source);
    }

    /**
     * append all pages from source to destination.
     *
     * @param {PDDocument} destination the document to receive the pages
     * @param {PDDocument} source the document originating the new pages
     */
    appendDocument(destination, source) {
        this.javaClass.appendDocumentSync(destination.javaClass, source.javaClass);
    }

    /**
     * append all pages from source to destination.
     *
     * @param {PDDocument} destination the document to receive the pages
     * @param {PDDocument} source the document originating the new pages
     */
    async appendDocumentAsync(destination, source) {
        await this.javaClass.appendDocument(destination.javaClass, source.javaClass);
    }

    /**
     * Get the destination document information that is to be set in mergeDocuments(org.apache.pdfbox.io.MemoryUsageSetting). The default is null, which means that it is ignored.
     *
     * @returns {PDDocumentInformation} The destination document information.
     */
    getDestinationDocumentInformation() {
        const info = this.javaClass.getDestinationDocumentInformationSync();
        if (!info) return null;
        return new PDDocumentInformation(info);
    }

    /**
     * Get the destination document information that is to be set in mergeDocuments(org.apache.pdfbox.io.MemoryUsageSetting). The default is null, which means that it is ignored.
     *
     * @returns {Promise<PDDocumentInformation>} The destination document information.
     */
    async getDestinationDocumentInformationAsync() {
        const info = await this.javaClass.getDestinationDocumentInformation();
        if (!info) return null;
        return new PDDocumentInformation(info);
    }

    /**
     * Get the name of the destination file.
     * 
     * @returns {String} Returns the destination.
     */
    getDestinationFileName() {
        return this.javaClass.getDestinationFileNameSync();
    }

    /**
     * Get the name of the destination file.
     * 
     * @returns {Promise<String>} Returns the destination.
     */
    async getDestinationFileNameAsync() {
        return await this.javaClass.getDestinationFileName();
    }

    /**
     * Indicates if acroform errors are ignored or not.
     * 
     * @returns {Boolean} true if acroform errors are ignored
     */
    isIgnoreAcroFormErrors() {
        return this.javaClass.isIgnoreAcroFormErrorsSync();
    }

    /**
     * Indicates if acroform errors are ignored or not.
     * 
     * @returns {Promise<Boolean>} true if acroform errors are ignored
     */
    async isIgnoreAcroFormErrorsAsync() {
        return await this.javaClass.isIgnoreAcroFormErrors();
    }

    /**
     * Merge the list of source documents, saving the result in the destination file.
     * 
     * @param {MemoryUsageSetting} memUsageSetting defines how memory is used for buffering PDF streams; in case of null unrestricted main memory is used
     */
    mergeDocuments(memUsageSetting) {
        this.javaClass.mergeDocumentsSync(memUsageSetting.javaClass);
    }

    /**
     * Merge the list of source documents, saving the result in the destination file.
     * 
     * @param {MemoryUsageSetting} memUsageSetting defines how memory is used for buffering PDF streams; in case of null unrestricted main memory is used
     */
    async mergeDocuments(memUsageSetting) {
        await this.javaClass.mergeDocuments(memUsageSetting.javaClass);
    }

    /**
     * Set the destination document information that is to be set in mergeDocuments(org.apache.pdfbox.io.MemoryUsageSetting). The default is null, which means that it is ignored.
     * 
     * @param {PDDocumentInformation} info The destination document information.
     */
    setDestinationDocumentInformation(info) {
        this.javaClass.setDestinationDocumentInformationSync(info.javaClass);
    }

    /**
     * Set the destination document information that is to be set in mergeDocuments(org.apache.pdfbox.io.MemoryUsageSetting). The default is null, which means that it is ignored.
     * 
     * @param {PDDocumentInformation} info The destination document information.
     */
    async setDestinationDocumentInformationAsync(info) {
        await this.javaClass.setDestinationDocumentInformation(info.javaClass);
    }

    /**
     * Set the name of the destination file.
     * 
     * @param {String} destination The destination to set.
     */
    setDestinationFileName(destination) {
        this.javaClass.setDestinationFileNameSync(destination);
    }

    /**
     * Set the name of the destination file.
     * 
     * @param {String} destination The destination to set.
     */
    async setDestinationFileNameAsync(destination) {
        await this.javaClass.setDestinationFileName(destination);
    }

    /**
     * Set to true to ignore acroform errors.
     * 
     * @param {Boolean} ignoreAcroFormErrorsValue true if acroform errors should be ignored
     */
    setIgnoreAcroFormErrors(ignoreAcroFormErrorsValue) {
        this.javaClass.setIgnoreAcroFormErrorsSync(ignoreAcroFormErrorsValue);
    }

    /**
     * Set to true to ignore acroform errors.
     * 
     * @param {Boolean} ignoreAcroFormErrorsValue true if acroform errors should be ignored
     */
    async setIgnoreAcroFormErrorsAsync(ignoreAcroFormErrorsValue) {
        await this.javaClass.setIgnoreAcroFormErrors(ignoreAcroFormErrorsValue);
    }
}

module.exports = PDFMergerUtility;
