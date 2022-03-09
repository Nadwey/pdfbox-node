export = PDDocument;
declare class PDDocument extends JavaClass {
    /**
     * Creates new PDF document
     *
     * @returns {PDDocument}
     */
    static create(): PDDocument;
    /**
     * Loads PDF from byte array - WARNING: SLOW, MEMORY CONSUMING, use loadFromFile
     * @param {Uint8Array} bytes PDF bytes
     * @param {?String} password PDF password
     *
     * @returns {PDDocument} PDF Document
     *
     */
    static loadFromBytes(bytes: Uint8Array, password: string | null): PDDocument;
    /**
     * Loads PDF from path
     * @param {String} path Path to PDF to load
     * @param {?String} password PDF password
     *
     * @returns {PDDocument} PDF Document
     */
    static loadFromPath(path: string, password: string | null): PDDocument;
    /**
     * This will add a page to the document.
     *
     * @param {PDPage} page The page to add to the document.
     */
    addPage(page: PDPage): void;
    /**
     * This will close the underlying COSDocument object.
     */
    close(): void;
    /**
     *
     * @returns {JavaClass}
     */
    getDocument(): JavaClass;
    /**
     * This will get the document info dictionary.
     *
     * @returns {PDDocumentInformation}
     */
    getDocumentInformation(): PDDocumentInformation;
    /**
     * Returns amount of pages
     *
     * @returns {Number}
     */
    getNumberOfPages(): number;
    /**
     * Returns the page at the given 0-based index.
     * This method is too slow to get all the pages from a large PDF document (1000 pages or more). For such documents, use the iterator of getPages() instead.
     *
     * @param {Number} pageIndex the 0-based page index
     * @returns {PDPage} the page at the given index.
     */
    getPage(pageIndex: number): PDPage;
    /**
     * Returns the page tree.
     *
     * @returns {PDPageTree} the page tree
     */
    getPages(): PDPageTree;
    /**
     * This will import and copy the contents from another location.
     *
     * @param {PDPage} page The page to import.
     * @returns {PDPage} The page that was imported.
     */
    importPage(page: PDPage): PDPage;
    /**
     * This will tell if this document is encrypted or not.
     *
     * @returns {Boolean}
     */
    isEncrypted(): boolean;
    /**
     * Remove the page from the document.
     *
     * @constructor
     * @param {(Number|PDPage)} page Page to remove.
     *
     */
    removePage(page: (number | PDPage)): void;
    /**
     * Save the document to a file.
     *
     * @param {String} filename The file to save as.
     */
    saveToPath(filename: string): void;
    /**
     * This will set the document information for this document.
     *
     * @param {PDDocumentInformation} info The updated document information.
     */
    setDocumentInformation(info: PDDocumentInformation): void;
}
import JavaClass = require("./javaClass");
import PDPage = require("./PDPage");
import PDDocumentInformation = require("./PDDocumentInformation");
import PDPageTree = require("./PDPageTree");
