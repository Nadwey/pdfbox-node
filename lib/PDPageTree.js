const JavaClass = require("./javaClass");
const java = require("./javaInit").getJavaInstance();
const javaImports = require("./javaImports");
const PDPage = require("./PDPage");

class PDPageTree extends JavaClass {
    /**
     * Creates new PDPageTree object
     *
     * @returns {PDPageTree}
     */
    static create() {
        return new PDPageTree(new javaImports.PDPageTree());
    }

    /**
     * Adds the given page to this page tree.
     *
     * @param {PDPage} page The page to add.
     */
    add(page) {
        this.javaClass.addSync(page.javaClass);
    }

    /**
     * Returns the page at the given index.
     *
     * @param {Number} index zero-based index
     * @returns {PDPage} the page at the given index.
     */
    get(index) {
        return new PDPage(this.javaClass.getSync(index));
    }

    /**
     * Returns the number of leaf nodes (page objects) that are descendants of this root within the page tree.
     *
     * @returns {Number} the number of leaf nodes.
     */
    getCount() {
        return this.javaClass.getCountSync();
    }

    /**
     * Returns the index of the given page, or -1 if it does not exist.
     *
     * @param {PDPage} page The page to search for.
     * @returns {Number} the zero-based index of the given page, or -1 if the page is not found.
     */
    indexOf(page) {
        return this.javaClass.indexOfSync(page.javaClass);
    }

    /**
     * Insert a page after another page within a page tree.
     *
     * @param {PDPage} newPage the page to be inserted.
     * @param {PDPage} prevPage the page that is to be before the new page.
     */
    insertAfter(newPage, prevPage) {
        this.javaClass.insertAfterSync(newPage.javaClass, prevPage.javaClass);
    }

    /**
     * Insert a page before another page within a page tree.
     *
     * @param {PDPage} newPage the page to be inserted.
     * @param {PDPage} nextPage the page that is to be after the new page.
     */
    insertBefore(newPage, nextPage) {
        this.javaClass.insertBeforeSync(newPage.javaClass, nextPage.javaClass);
    }

    /**
     * @todo
     */
    iterator() {
        throw "Not implemented";
    }

    /**
     * Removes page from the page tree.
     * 
     * @param {(PDPage|Number)} page The page to remove.
     */
    remove(page) {
        if (typeof page === "number") this.javaClass.removeSync(page);
        else if (page instanceof PDPage) this.javaClass.removeSync(page.javaClass);
        else throw "Invalid type";
    }
}

module.exports = PDPageTree;
