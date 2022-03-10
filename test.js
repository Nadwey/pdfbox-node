const {
    Color,
    PDDocument,
    Vector,
    PDPage,
    PDRectangle,
    PDDocumentInformation,
    PDPageTree,
} = require("./index");

describe("PDDocument", () => {
    test("create", () => {
        expect(PDDocument.create()).toBeInstanceOf(PDDocument);
    });

    test("addPage", () => {
        let doc = PDDocument.create();
        let page = PDPage.create(PDRectangle.LETTER);
        expect(page).toBeInstanceOf(PDPage);
        expect(doc.getNumberOfPages()).toBe(0);
        doc.addPage(page);
        expect(doc.getNumberOfPages()).toBe(1);
    });

    test("getDocumentInformation", () => {
        let doc = PDDocument.create();
        expect(doc.getDocumentInformation()).toBeInstanceOf(PDDocumentInformation);
    });

    test("getNumberOfPages", () => {
        let doc = PDDocument.create();
        expect(doc.getNumberOfPages()).toBe(0);
        doc.addPage(PDPage.create(PDRectangle.LETTER));
        expect(doc.getNumberOfPages()).toBe(1);
    });

    test("getPage", () => {
        let doc = PDDocument.create();
        let page = PDPage.create(PDRectangle.LETTER);
        doc.addPage(page);
        expect(doc.getPage(0)).toBeInstanceOf(PDPage);
        expect(() => {
            doc.getPage(1);
        }).toThrow();
    });

    test("getPages", () => {
        let doc = PDDocument.create();
        expect(doc.getPages()).toBeInstanceOf(PDPageTree);
    });

    test("importPage - TODO", () => {
        let docIn = PDDocument.create();
        docIn.addPage(PDPage.create(PDRectangle.LEGAL));

        let docOut = PDDocument.create();
        let importedPage = docOut.importPage(docIn.getPage(0));
        docIn.removePage(0);
        // TODO, better checking
        expect(importedPage).toBeInstanceOf(PDPage);
        expect(() => {
            docIn.getPage(0);
        }).toThrow();
    });

    test("isEncrypted - TODO", () => {
        expect(true).toBe(true);
    });

    test("removePage", () => {
        let doc = PDDocument.create();

        expect(() => {
            doc.removePage(0);
        }).toThrow();
        doc.addPage(PDPage.create());
        expect(() => {
            doc.removePage(0);
        }).not.toThrow();
        expect(() => {
            doc.removePage(0);
        }).toThrow();
    });

    test('saveToPath', () => {
        let working = this;
        expect(this).toBe(working);
    });

    test('setDocumentInformation', () => { 
        let doc = PDDocument.create();
        let info = PDDocumentInformation.create();
        info.setAuthor("testing123");
        doc.setDocumentInformation(info);
        expect(doc.getDocumentInformation().getAuthor()).toBe("testing123");
    });
});

describe("Vector", () => {
    const X = 5;
    const Y = 8;
    const MULT = 2;
    let vector = Vector.create(X, Y);

    test("getX", () => {
        expect(vector.getX()).toBe(X);
    });

    test("getY", () => {
        expect(vector.getY()).toBe(Y);
    });

    test("scale", () => {
        const result = vector.scale(MULT);

        expect(result).toBeInstanceOf(Vector);
        expect(result.getX()).toBe(X * MULT);
        expect(result.getY()).toBe(Y * MULT);
    });

    test("getXAsync", async () => {
        expect(await vector.getXAsync()).toBe(X);
    });

    test("getYAsync", async () => {
        expect(await vector.getYAsync()).toBe(Y);
    });

    test("scaleAsync", async () => {
        const result = await vector.scaleAsync(MULT);

        expect(result).toBeInstanceOf(Vector);
        expect(result.getX()).toBe(X * MULT);
        expect(result.getY()).toBe(Y * MULT);
    });
});
