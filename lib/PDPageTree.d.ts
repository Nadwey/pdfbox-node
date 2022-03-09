export = PDPageTree;
declare class PDPageTree extends JavaClass {
    /**
     * Creates new PDPageTree object
     *
     * @returns {PDPageTree}
     */
    static create(): PDPageTree;
    /**
     * Adds the given page to this page tree.
     *
     * @param {PDPage} page The page to add.
     */
    add(page: PDPage): void;
    /**
     * Returns the page at the given index.
     *
     * @param {Number} index zero-based index
     * @returns {PDPage} the page at the given index.
     */
    get(index: number): PDPage;
    /**
     * Returns the number of leaf nodes (page objects) that are descendants of this root within the page tree.
     *
     * @returns {Number} the number of leaf nodes.
     */
    getCount(): number;
    /**
     * Returns the index of the given page, or -1 if it does not exist.
     *
     * @param {PDPage} page The page to search for.
     * @returns {Number} the zero-based index of the given page, or -1 if the page is not found.
     */
    indexOf(page: PDPage): number;
    /**
     * Insert a page after another page within a page tree.
     *
     * @param {PDPage} newPage the page to be inserted.
     * @param {PDPage} prevPage the page that is to be before the new page.
     */
    insertAfter(newPage: PDPage, prevPage: PDPage): void;
    /**
     * Insert a page before another page within a page tree.
     *
     * @param {PDPage} newPage the page to be inserted.
     * @param {PDPage} nextPage the page that is to be after the new page.
     */
    insertBefore(newPage: PDPage, nextPage: PDPage): void;
    /**
     * @todo
     */
    iterator(): void;
    /**
     * Removes page from the page tree.
     *
     * @param {(PDPage|Number)} page The page to remove.
     */
    remove(page: (PDPage | number)): void;
}
import JavaClass = require("./javaClass");
import PDPage = require("./PDPage");
