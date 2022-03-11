const JavaClass = require("./javaClass");
const java = require("./javaInit").getJavaInstance();
const javaImports = require("./javaImports");

/**
 *
 * @param {Date} date
 */
const DateToJavaCalendar = (date) => {
    let javaDate = new javaImports.Date(BigInt(date.getTime()));
    let calendar = javaImports.Calendar.getInstanceSync();
    calendar.setTimeSync(javaDate);
    return calendar;
};

class PDDocumentInformation extends JavaClass {
    /**
     * Creates new PDDocumentInformation object
     *
     * @returns {PDDocumentInformation}
     */
    static create() {
        return new PDDocumentInformation(new javaImports.PDDocumentInformation());
    }

    /**
     * This will get the author of the document.
     *
     * @returns {String} The author of the document.
     */
    getAuthor() {
        return this.javaClass.getAuthorSync();
    }

    /**
     * This will get the author of the document.
     *
     * @returns {Promise<String>} The author of the document.
     */
    async getAuthorAsync() {
        return this.javaClass.getAuthor();
    }

    /**
     * This will get the creation date of the document. This will return null if no creation date exists.
     *
     * @returns {Date} The creation date of the document.
     */
    getCreationDate() {
        const creationDate = this.javaClass.getCreationDateSync();
        if (creationDate == null) return null;
        return new Date(Number(creationDate.getTimeSync().getTimeSync()));
    }

    /**
     * This will get the creation date of the document. This will return null if no creation date exists.
     *
     * @returns {Promise<Date>} The creation date of the document.
     */
    async getCreationDateAsync() {
        const creationDate = await this.javaClass.getCreationDate();
        if (creationDate == null) return null;
        return new Date(Number(await (await creationDate.getTime()).getTime()));
    }

    /**
     * This will get the creator of the document.
     *
     * @returns {String} The creator of the document.
     */
    getCreator() {
        return this.javaClass.getCreatorSync();
    }

    /**
     * This will get the creator of the document.
     *
     * @returns {Promise<String>} The creator of the document.
     */
    async getCreatorAsync() {
        return this.javaClass.getCreator();
    }

    /**
     * This will get the value of a custom metadata information field for the document.
     *
     * @param {String} fieldName Name of custom metadata field from pdf document.
     * @returns {String} String Value of metadata field
     */
    getCustomMetadataValue(fieldName) {
        return this.javaClass.getCustomMetadataValueSync(fieldName);
    }

    /**
     * This will get the value of a custom metadata information field for the document.
     *
     * @param {String} fieldName Name of custom metadata field from pdf document.
     * @returns {Promise<String>} String Value of metadata field
     */
    async getCustomMetadataValueAsync(fieldName) {
        return this.javaClass.getCustomMetadataValue(fieldName);
    }

    /**
     * This will get the keywords of the document. This will return null if no keywords exists.
     *
     * @returns {String} The keywords of the document.
     */
    getKeywords() {
        return this.javaClass.getKeywordsSync();
    }

    /**
     * This will get the keywords of the document. This will return null if no keywords exists.
     *
     * @returns {Promise<String>} The keywords of the document.
     */
    async getKeywordsAsync() {
        return this.javaClass.getKeywords();
    }

    /**
     * This will get the modification date of the document. This will return null if no modification date exists.
     *
     * @returns {Date} The modification date of the document.
     */
    getModificationDate() {
        const modificationDate = this.javaClass.getModificationDateSync();
        if (modificationDate == null) return null;
        return new Date(Number(modificationDate.getTimeSync().getTimeSync()));
    }

    /**
     * This will get the modification date of the document. This will return null if no modification date exists.
     *
     * @returns {Promise<Date>} The modification date of the document.
     */
    async getModificationDateAsync() {
        const modificationDate = await this.javaClass.getModificationDate();
        if (modificationDate == null) return null;
        return new Date(Number(await (await modificationDate.getTime()).getTime()));
    }

    /**
     * This will get the producer of the document. This will return null if no producer exists.
     *
     * @returns {String} The producer of the document.
     */
    getProducer() {
        return this.javaClass.getProducerSync();
    }

    /**
     * This will get the producer of the document. This will return null if no producer exists.
     *
     * @returns {Promise<String>} The producer of the document.
     */
    async getProducerAsync() {
        return this.javaClass.getProducer();
    }

    /**
     * This will get the subject of the document. This will return null if no subject exists.
     *
     * @returns {String} The subject of the document.
     */
    getSubject() {
        return this.javaClass.getSubjectSync();
    }

    /**
     * This will get the subject of the document. This will return null if no subject exists.
     *
     * @returns {Promise<String>} The subject of the document.
     */
    async getSubjectAsync() {
        return this.javaClass.getSubject();
    }

    /**
     * This will get the title of the document. This will return null if no title exists.
     *
     * @returns {String} The title of the document.
     */
    getTitle() {
        return this.javaClass.getTitleSync();
    }

    /**
     * This will get the title of the document. This will return null if no title exists.
     *
     * @returns {Promise<String>} The title of the document.
     */
    async getTitleAsync() {
        return this.javaClass.getTitle();
    }

    /**
     * This will get the trapped value for the document. This will return null if one is not found.
     *
     * @returns {String} The trapped value for the document.
     */
    getTrapped() {
        return this.javaClass.getTrappedSync();
    }

    /**
     * This will get the trapped value for the document. This will return null if one is not found.
     *
     * @returns {Promise<String>} The trapped value for the document.
     */
    async getTrappedAsync() {
        return this.javaClass.getTrapped();
    }

    /**
     * This will set the author of the document.
     *
     * @param {String} author The new author for the document.
     */
    setAuthor(author) {
        this.javaClass.setAuthorSync(author);
    }

    /**
     * This will set the author of the document.
     *
     * @param {String} author The new author for the document.
     * @returns {Promise}
     */
    async setAuthorAsync(author) {
        return this.javaClass.setAuthor(author);
    }

    /**
     * This will set the creation date of the document.
     *
     * @param {Date} date The new creation date for the document.
     */
    setCreationDate(date) {
        this.javaClass.setCreationDateSync(DateToJavaCalendar(date));
    }

    /**
     * This will set the creation date of the document.
     *
     * @param {Date} date The new creation date for the document.
     * @returns {Promise}
     */
    async setCreationDateAsync(date) {
        return this.javaClass.setCreationDate(DateToJavaCalendar(date));
    }

    /**
     * This will set the creator of the document.
     *
     * @param {String} creator The new creator for the document.
     */
    setCreator(creator) {
        this.javaClass.setCreatorSync(creator);
    }

    /**
     * This will set the creator of the document.
     *
     * @param {String} creator The new creator for the document.
     * @returns {Promise}
     */
    async setCreatorAsync(creator) {
        return this.javaClass.setCreator(creator);
    }

    /**
     * Set the custom metadata value.
     *
     * @param {String} fieldName The name of the custom metadata field.
     * @param {String} fieldValue The value to the custom metadata field.
     */
    setCustomMetadataValue(fieldName, fieldValue) {
        this.javaClass.setCustomMetadataValueSync(fieldName, fieldValue);
    }

    /**
     * Set the custom metadata value.
     *
     * @param {String} fieldName The name of the custom metadata field.
     * @param {String} fieldValue The value to the custom metadata field.
     * @returns {Promise}
     */
    async setCustomMetadataValueAsync(fieldName, fieldValue) {
        return this.javaClass.setCustomMetadataValue(fieldName, fieldValue);
    }

    /**
     * This will set the keywords of the document.
     *
     * @param {String} keywords The new keywords for the document.
     */
    setKeywords(keywords) {
        this.javaClass.setKeywordsSync(keywords);
    }

    /**
     * This will set the keywords of the document.
     *
     * @param {String} keywords The new keywords for the document.
     * @returns {Promise}
     */
    async setKeywordsAsync(keywords) {
        return this.javaClass.setKeywords(keywords);
    }

    /**
     * This will set the modification date of the document.
     *
     * @param {Date} date The new modification date for the document.
     */
    setModificationDate(date) {
        this.javaClass.setModificationDateSync(DateToJavaCalendar(date));
    }

    /**
     * This will set the modification date of the document.
     *
     * @param {Date} date The new modification date for the document.
     * @returns {Promise}
     */
    async setModificationDateAsync(date) {
        return this.javaClass.setModificationDate(DateToJavaCalendar(date));
    }

    /**
     * This will set the producer of the document.
     *
     * @param {String} producer The new producer for the document.
     */
    setProducer(producer) {
        this.javaClass.setProducerSync(producer);
    }

    /**
     * This will set the producer of the document.
     *
     * @param {String} producer The new producer for the document.
     * @returns {Promise}
     */
    async setProducerAsync(producer) {
        return this.javaClass.setProducer(producer);
    }

    /**
     * This will set the subject of the document.
     *
     * @param {String} subject The new subject for the document.
     */
    setSubject(subject) {
        this.javaClass.setSubjectSync(subject);
    }

    /**
     * This will set the subject of the document.
     *
     * @param {String} subject The new subject for the document.
     * @returns {Promise}
     */
    async setSubjectAsync(subject) {
        return this.javaClass.setSubject(subject);
    }

    /**
     * This will set the title of the document.
     *
     * @param {String} title The new title for the document.
     */
    setTitle(title) {
        this.javaClass.setTitleSync(title);
    }

    /**
     * This will set the title of the document.
     *
     * @param {String} title The new title for the document.
     * @returns {Promise}
     */
    async setTitleAsync(title) {
        return this.javaClass.setTitle(title);
    }

    /**
     * This will set the trapped of the document. This will be 'True', 'False', or 'Unknown'.
     *
     * @param {String} value The new trapped value for the document.
     */
    setTrapped(value) {
        this.javaClass.setTrappedSync(value);
    }

    /**
     * This will set the trapped of the document. This will be 'True', 'False', or 'Unknown'.
     *
     * @param {String} value The new trapped value for the document.
     * @returns {Promise}
     */
    async setTrappedAsync(value) {
        return this.javaClass.setTrapped(value);
    }
}

module.exports = PDDocumentInformation;
