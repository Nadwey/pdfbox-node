export = PDDocumentInformation;
declare class PDDocumentInformation extends JavaClass {
    /**
     * Creates new PDDocumentInformation object
     *
     * @returns {PDDocumentInformation}
     */
    static create(): PDDocumentInformation;
    /**
     * This will get the author of the document.
     *
     * @returns {String} The author of the document.
     */
    getAuthor(): string;
    /**
     * This will get the creation date of the document. This will return null if no creation date exists.
     *
     * @returns {Date} The creation date of the document.
     */
    getCreationDate(): Date;
    /**
     * This will get the creator of the document.
     *
     * @returns {String} The creator of the document.
     */
    getCreator(): string;
    /**
     * This will get the value of a custom metadata information field for the document.
     *
     * @param {String} fieldName Name of custom metadata field from pdf document.
     * @returns {String} String Value of metadata field
     */
    getCustomMetadataValue(fieldName: string): string;
    /**
     * This will get the keywords of the document. This will return null if no keywords exists.
     *
     * @returns {String} The keywords of the document.
     */
    getKeywords(): string;
    /**
     * This will get the modification date of the document. This will return null if no modification date exists.
     *
     * @returns {Date} The modification date of the document.
     */
    getModificationDate(): Date;
    /**
     * This will get the producer of the document. This will return null if no producer exists.
     *
     * @returns {String} The producer of the document.
     */
    getProducer(): string;
    /**
     * This will get the subject of the document. This will return null if no subject exists.
     *
     * @returns {String} The subject of the document.
     */
    getSubject(): string;
    /**
     * This will get the title of the document. This will return null if no title exists.
     *
     * @returns {String} The title of the document.
     */
    getTitle(): string;
    /**
     * This will get the trapped value for the document. This will return null if one is not found.
     *
     * @returns {String} The trapped value for the document.
     */
    getTrapped(): string;
    /**
     * This will set the author of the document.
     *
     * @param {String} author The new author for the document.
     */
    setAuthor(author: string): void;
    /**
     * This will set the creation date of the document.
     *
     * @param {Date} date The new creation date for the document.
     */
    setCreationDate(date: Date): void;
    /**
     * This will set the creator of the document.
     *
     * @param {String} creator The new creator for the document.
     */
    setCreator(creator: string): void;
    /**
     * Set the custom metadata value.
     *
     * @param {String} fieldName The name of the custom metadata field.
     * @param {String} fieldValue The value to the custom metadata field.
     */
    setCustomMetadataValue(fieldName: string, fieldValue: string): void;
    /**
     * This will set the keywords of the document.
     *
     * @param {String} keywords The new keywords for the document.
     */
    setKeywords(keywords: string): void;
    /**
     * This will set the modification date of the document.
     *
     * @param {Date} date The new modification date for the document.
     */
    setModificationDate(date: Date): void;
    /**
     * This will set the producer of the document.
     *
     * @param {String} producer The new producer for the document.
     */
    setProducer(producer: string): void;
    /**
     * This will set the subject of the document.
     *
     * @param {String} subject The new subject for the document.
     */
    setSubject(subject: string): void;
    /**
     * This will set the title of the document.
     *
     * @param {String} title The new title for the document.
     */
    setTitle(title: string): void;
    /**
     * This will set the trapped of the document. This will be 'True', 'False', or 'Unknown'.
     *
     * @param {String} value The new trapped value for the document.
     */
    setTrapped(value: string): void;
}
import JavaClass = require("./javaClass");
