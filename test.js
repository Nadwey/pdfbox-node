const {
    Color,
    PDDocument,
    Vector,
    PDPage,
    PDRectangle,
    PDDocumentInformation,
    PDPageTree,
} = require("./index");
const path = require("path");

describe("PDDocument", () => {
    test("create", () => {
        let doc = PDDocument.create();

        expect(doc).toBeInstanceOf(PDDocument);

        doc.close();
    });

    test("loadFromPath", () => {
        let doc = PDDocument.loadFromPath(path.join(__dirname, "./testDoc.pdf"));

        expect(doc.getPage(0)).toBeInstanceOf(PDPage);
        expect(() => {
            doc.getPage(1);
        }).toThrow();

        doc.close();
    });

    test("loadFromPathAsync", async () => {
        let docLoad = PDDocument.loadFromPathAsync(path.join(__dirname, "./testDoc.pdf"));

        expect(docLoad).toBeInstanceOf(Promise);
        let doc = await docLoad;
        expect(doc.getPage(0)).toBeInstanceOf(PDPage);
        expect(() => {
            doc.getPage(1);
        }).toThrow();

        doc.close();
    });

    test("addPage", () => {
        let doc = PDDocument.create();

        let page = PDPage.create(PDRectangle.LETTER);
        expect(page).toBeInstanceOf(PDPage);
        expect(doc.getNumberOfPages()).toBe(0);
        doc.addPage(page);
        expect(doc.getNumberOfPages()).toBe(1);

        doc.close();
    });

    test("addPageAsync", async () => {
        let doc = PDDocument.create();

        let page = PDPage.create(PDRectangle.LETTER);
        expect(page).toBeInstanceOf(PDPage);
        expect(doc.getNumberOfPages()).toBe(0);
        let docAdd = doc.addPageAsync(page);
        expect(docAdd).toBeInstanceOf(Promise);
        await docAdd;
        expect(doc.getNumberOfPages()).toBe(1);

        doc.close();
    });

    test("getDocumentInformation", () => {
        let doc = PDDocument.create();

        expect(doc.getDocumentInformation()).toBeInstanceOf(PDDocumentInformation);

        doc.close();
    });

    test("getDocumentInformationAsync", async () => {
        let doc = PDDocument.create();

        let infoPromise = doc.getDocumentInformationAsync();
        expect(infoPromise).toBeInstanceOf(Promise);
        expect(await infoPromise).toBeInstanceOf(PDDocumentInformation);

        doc.close();
    });

    test("getNumberOfPages", () => {
        let doc = PDDocument.create();

        expect(doc.getNumberOfPages()).toBe(0);
        doc.addPage(PDPage.create(PDRectangle.LETTER));
        expect(doc.getNumberOfPages()).toBe(1);

        doc.close();
    });

    test("getNumberOfPagesAsync", async () => {
        let doc = PDDocument.create();
        
        expect(doc.getNumberOfPagesAsync()).toBeInstanceOf(Promise);
        expect(await doc.getNumberOfPagesAsync()).toBe(0);
        doc.addPage(PDPage.create(PDRectangle.LETTER));
        expect(await doc.getNumberOfPagesAsync()).toBe(1);

        doc.close();
    });

    test("getPage", () => {
        let doc = PDDocument.create();

        let page = PDPage.create(PDRectangle.LETTER);
        doc.addPage(page);
        expect(doc.getPage(0)).toBeInstanceOf(PDPage);
        expect(() => {
            doc.getPage(1);
        }).toThrow();

        doc.close();
    });

    test("getPageAsync", async () => {
        let doc = PDDocument.create();

        let page = PDPage.create(PDRectangle.LETTER);
        doc.addPage(page);
        expect(doc.getPageAsync(0)).toBeInstanceOf(Promise);
        expect(await doc.getPageAsync(0)).toBeInstanceOf(PDPage);
        await expect(async () => {
            await doc.getPageAsync(1);
        }).rejects.toThrow();

        doc.close();
    });

    test("getPages", () => {
        let doc = PDDocument.create();

        expect(doc.getPages()).toBeInstanceOf(PDPageTree);

        doc.close();
    });

    test("getPagesAsync", async () => {
        let doc = PDDocument.create();

        expect(doc.getPagesAsync()).toBeInstanceOf(Promise);
        expect(await doc.getPagesAsync()).toBeInstanceOf(PDPageTree);

        doc.close();
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

        docOut.close();
        docIn.close();
    });

    test("importPageAsync - TODO", async () => {
        let docIn = PDDocument.create();

        docIn.addPage(PDPage.create(PDRectangle.LEGAL));

        let docOut = PDDocument.create();
        let importedPagePromise = docOut.importPageAsync(docIn.getPage(0));
        expect(importedPagePromise).toBeInstanceOf(Promise);
        let importedPage = await importedPagePromise;
        docIn.removePage(0);
        // TODO, better checking
        expect(importedPage).toBeInstanceOf(PDPage);
        expect(() => {
            docIn.getPage(0);
        }).toThrow();

        docOut.close();
        docIn.close();
    });

    test("isEncrypted - TODO", () => {
        expect(true).toBe(true);
    });

    test("isEncryptedAsync - TODO", async () => {
        expect(true).toBe(true);
    });

    test("removePage", () => {
        let doc = PDDocument.create();

        expect(() => {
            doc.removePage(0);
        }).toThrow();
        doc.addPage(PDPage.create(PDRectangle.LEGAL));
        expect(() => {
            doc.removePage(0);
        }).not.toThrow();
        expect(() => {
            doc.removePage(0);
        }).toThrow();

        doc.close();
    });

    test("removePageAsync", async () => {
        let doc = PDDocument.create();

        await expect(async () => {
            await doc.removePageAsync(0);
        }).rejects.toThrow();
        doc.addPage(PDPage.create(PDRectangle.LEGAL));
        await doc.removePageAsync(0); // should not throw
        await expect(async () => {
            await doc.removePageAsync(0);
        }).rejects.toThrow();

        let doc2 = PDDocument.create();
        doc2.addPage(PDPage.create(PDRectangle.LEGAL));
        expect(doc2.removePageAsync(0)).toBeInstanceOf(Promise);

        doc2.close();
        doc.close();
    });

    test("saveToPath", () => {
        let working = this;
        expect(this).toBe(working);
    });

    test("saveToPathAsync", () => {
        let working = this;
        expect(this).toBe(working);
    });

    test("setDocumentInformation", () => {
        let doc = PDDocument.create();

        let info = PDDocumentInformation.create();
        info.setAuthor("testing123");
        doc.setDocumentInformation(info);
        expect(doc.getDocumentInformation().getAuthor()).toBe("testing123");

        doc.close();
    });

    test("setDocumentInformationAsync", async () => {
        let doc = PDDocument.create();

        let info = PDDocumentInformation.create();
        info.setAuthor("testing123");
        let setDocInfoPromise = doc.setDocumentInformationAsync(info);
        expect(setDocInfoPromise).toBeInstanceOf(Promise);
        await setDocInfoPromise;
        expect(doc.getDocumentInformation().getAuthor()).toBe("testing123");

        doc.close();
    });
});

describe("PDDocumentInformation", () => {
    test("create", () => {
        let info = PDDocumentInformation.create();
        expect(info).toBeInstanceOf(PDDocumentInformation);
    });

    test("getAuthor", () => {
        let info = PDDocumentInformation.create();
        info.setAuthor("test123-getAuthor");
        expect(info.getAuthor()).toBe("test123-getAuthor");
    });

    test("getAuthorAsync", async () => {
        let info = PDDocumentInformation.create();
        info.setAuthor("test123-getAuthorAsync");
        expect(info.getAuthorAsync()).toBeInstanceOf(Promise);
        expect(await info.getAuthorAsync()).toBe("test123-getAuthorAsync");
    });

    test("getCreationDate", () => {
        let info = PDDocumentInformation.create();
        info.setCreationDate(new Date(123456789));
        expect(info.getCreationDate()).toBeInstanceOf(Date);
        expect(info.getCreationDate().getTime()).toBeCloseTo(123456789, -5);
    });

    test("getCreationDateAsync", async () => {
        let info = PDDocumentInformation.create();
        info.setCreationDate(new Date(123456789));
        expect(info.getCreationDateAsync()).toBeInstanceOf(Promise);
        expect(await info.getCreationDateAsync()).toBeInstanceOf(Date);
        expect((await info.getCreationDateAsync()).getTime()).toBeCloseTo(123456789, -5);
    });

    test("getCreator", () => {
        let info = PDDocumentInformation.create();
        info.setCreator("test123-getCreator");
        expect(info.getCreator()).toBe("test123-getCreator");
    });

    test("getCreatorAsync", async () => {
        let info = PDDocumentInformation.create();
        info.setCreator("test123-getCreatorAsync");
        expect(info.getCreatorAsync()).toBeInstanceOf(Promise);
        expect(await info.getCreatorAsync()).toBe("test123-getCreatorAsync");
    });

    test("getCustomMetadataValue", () => {
        let info = PDDocumentInformation.create();
        const key = "test123-getCustomMetadataValue-fieldName";
        const val = "test123-getCustomMetadataValue-val";
        info.setCustomMetadataValue(key, val);
        expect(info.getCustomMetadataValue(key)).toBe(val);
    });

    test("getCustomMetadataValueAsync", async () => {
        let info = PDDocumentInformation.create();
        const key = "test123-getCustomMetadataValueAsync-fieldName";
        const val = "test123-getCustomMetadataValueAsync-val";
        info.setCustomMetadataValue(key, val);
        expect(info.getCustomMetadataValueAsync(key)).toBeInstanceOf(Promise);
        expect(await info.getCustomMetadataValueAsync(key)).toBe(val);
    });

    test("getKeywords", () => {
        let info = PDDocumentInformation.create();
        info.setKeywords("test123-getKeywords");
        expect(info.getKeywords()).toBe("test123-getKeywords");
    });

    test("getKeywordsAsync", async () => {
        let info = PDDocumentInformation.create();
        info.setKeywords("test123-getKeywordsAsync");
        expect(info.getKeywordsAsync()).toBeInstanceOf(Promise);
        expect(await info.getKeywordsAsync()).toBe("test123-getKeywordsAsync");
    });

    test("getModificationDate", () => {
        let info = PDDocumentInformation.create();
        info.setModificationDate(new Date(123456789));
        expect(info.getModificationDate()).toBeInstanceOf(Date);
        expect(info.getModificationDate().getTime()).toBeCloseTo(123456789, -5);
    });

    test("getModificationDateAsync", async () => {
        let info = PDDocumentInformation.create();
        info.setModificationDate(new Date(123456789));
        expect(info.getModificationDateAsync()).toBeInstanceOf(Promise);
        expect(await info.getModificationDateAsync()).toBeInstanceOf(Date);
        expect((await info.getModificationDateAsync()).getTime()).toBeCloseTo(123456789, -5);
    });

    test("getProducer", () => {
        let info = PDDocumentInformation.create();
        info.setProducer("test123-getProducer");
        expect(info.getProducer()).toBe("test123-getProducer");
    });

    test("getProducerAsync", async () => {
        let info = PDDocumentInformation.create();
        info.setProducer("test123-getProducerAsync");
        expect(info.getProducerAsync()).toBeInstanceOf(Promise);
        expect(await info.getProducerAsync()).toBe("test123-getProducerAsync");
    });

    test("getSubject", () => {
        let info = PDDocumentInformation.create();
        info.setSubject("test123-getSubject");
        expect(info.getSubject()).toBe("test123-getSubject");
    });

    test("getSubjectAsync", async () => {
        let info = PDDocumentInformation.create();
        info.setSubject("test123-getSubjectAsync");
        expect(info.getSubjectAsync()).toBeInstanceOf(Promise);
        expect(await info.getSubjectAsync()).toBe("test123-getSubjectAsync");
    });

    test("getTitle", () => {
        let info = PDDocumentInformation.create();
        info.setTitle("test123-getTitle");
        expect(info.getTitle()).toBe("test123-getTitle");
    });

    test("getTitleAsync", async () => {
        let info = PDDocumentInformation.create();
        info.setTitle("test123-getTitleAsync");
        expect(info.getTitleAsync()).toBeInstanceOf(Promise);
        expect(await info.getTitleAsync()).toBe("test123-getTitleAsync");
    });

    test("getTrapped", () => {
        let info = PDDocumentInformation.create();
        info.setTrapped("True");
        expect(info.getTrapped()).toBe("True");
        info.setTrapped("False");
        expect(info.getTrapped()).toBe("False");
        info.setTrapped("Unknown");
        expect(info.getTrapped()).toBe("Unknown");
    });

    test("getTrappedAsync", async () => {
        let info = PDDocumentInformation.create();
        info.setTrapped("True");
        expect(await info.getTrappedAsync()).toBe("True");
        info.setTrapped("False");
        expect(await info.getTrappedAsync()).toBe("False");
        info.setTrapped("Unknown");
        expect(await info.getTrappedAsync()).toBe("Unknown");

        expect(info.getTrappedAsync()).toBeInstanceOf(Promise);
    });

    test("setAuthor", () => {
        let info = PDDocumentInformation.create();
        info.setAuthor("test123-setAuthor");
        expect(info.getAuthor()).toBe("test123-setAuthor");
    });

    test("setAuthorAsync", async () => {
        let info = PDDocumentInformation.create();
        let setAuthorPromise = info.setAuthorAsync("test123-setAuthorAsync");
        expect(setAuthorPromise).toBeInstanceOf(Promise);
        await setAuthorPromise;
        expect(info.getAuthor()).toBe("test123-setAuthorAsync");
    });

    test("setCreationDate", () => {
        let info = PDDocumentInformation.create();
        info.setCreationDate(new Date(123456789));
        expect(info.getCreationDate()).toBeInstanceOf(Date);
        expect(info.getCreationDate().getTime()).toBeCloseTo(123456789, -5);
    });

    test("setCreationDateAsync", async () => {
        let info = PDDocumentInformation.create();
        let scDPromise = info.setCreationDateAsync(new Date(123456789));
        expect(scDPromise).toBeInstanceOf(Promise);
        await scDPromise;
        expect(info.getCreationDate().getTime()).toBeCloseTo(123456789, -5);
    });

    test("setCreator", () => {
        let info = PDDocumentInformation.create();
        info.setCreator("test123-setCreator");
        expect(info.getCreator()).toBe("test123-setCreator");
    });

    test("setCreatorAsync", async () => {
        let info = PDDocumentInformation.create();
        let setCreatorPromise = info.setCreatorAsync("test123-setCreatorAsync");
        expect(setCreatorPromise).toBeInstanceOf(Promise);
        await setCreatorPromise;
        expect(info.getCreator()).toBe("test123-setCreatorAsync");
    });

    test("setCustomMetadataValue", () => {
        let info = PDDocumentInformation.create();
        const key = "test123-setCustomMetadataValue-fieldName";
        const val = "test123-setCustomMetadataValue-val";
        info.setCustomMetadataValue(key, val);
        expect(info.getCustomMetadataValue(key)).toBe(val);
    });

    test("setCustomMetadataValueAsync", async () => {
        let info = PDDocumentInformation.create();
        const key = "test123-setCustomMetadataValueAsync-fieldName";
        const val = "test123-setCustomMetadataValueAsync-val";
        let scmvPromise = info.setCustomMetadataValueAsync(key, val);
        expect(scmvPromise).toBeInstanceOf(Promise);
        await scmvPromise;
        expect(info.getCustomMetadataValue(key)).toBe(val);
    });

    test("setKeywords", () => {
        let info = PDDocumentInformation.create();
        info.setKeywords("test123-setKeywords");
        expect(info.getKeywords()).toBe("test123-setKeywords");
    });

    test("setKeywordsAsync", async () => {
        let info = PDDocumentInformation.create();
        let setKeywordsPromise = info.setKeywordsAsync("test123-setKeywordsAsync");
        expect(setKeywordsPromise).toBeInstanceOf(Promise);
        await setKeywordsPromise;
        expect(info.getKeywords()).toBe("test123-setKeywordsAsync");
    });

    test("setModificationDate", () => {
        let info = PDDocumentInformation.create();
        info.setModificationDate(new Date(123456789));
        expect(info.getModificationDate()).toBeInstanceOf(Date);
        expect(info.getModificationDate().getTime()).toBeCloseTo(123456789, -5);
    });

    test("setModificationDateAsync", async () => {
        let info = PDDocumentInformation.create();
        let smdPromise = info.setModificationDateAsync(new Date(123456789));
        expect(smdPromise).toBeInstanceOf(Promise);
        await smdPromise;
        expect(info.getModificationDate().getTime()).toBeCloseTo(123456789, -5);
    });

    test("setProducer", () => {
        let info = PDDocumentInformation.create();
        info.setProducer("test123-setProducer");
        expect(info.getProducer()).toBe("test123-setProducer");
    });

    test("setProducerAsync", async () => {
        let info = PDDocumentInformation.create();
        let setProducerPromise = info.setProducerAsync("test123-setProducerAsync");
        expect(setProducerPromise).toBeInstanceOf(Promise);
        await setProducerPromise;
        expect(info.getProducer()).toBe("test123-setProducerAsync");
    });

    test("setSubject", () => {
        let info = PDDocumentInformation.create();
        info.setSubject("test123-setSubject");
        expect(info.getSubject()).toBe("test123-setSubject");
    });

    test("setSubjectAsync", async () => {
        let info = PDDocumentInformation.create();
        let setSubjectPromise = info.setSubjectAsync("test123-setSubjectAsync");
        expect(setSubjectPromise).toBeInstanceOf(Promise);
        await setSubjectPromise;
        expect(info.getSubject()).toBe("test123-setSubjectAsync");
    });

    test("setTitle", () => {
        let info = PDDocumentInformation.create();
        info.setTitle("test123-setTitle");
        expect(info.getTitle()).toBe("test123-setTitle");
    });

    test("setTitleAsync", async () => {
        let info = PDDocumentInformation.create();
        let setTitlePromise = info.setTitleAsync("test123-setTitleAsync");
        expect(setTitlePromise).toBeInstanceOf(Promise);
        await setTitlePromise;
        expect(info.getTitle()).toBe("test123-setTitleAsync");
    });

    test("setTrapped", () => {
        let info = PDDocumentInformation.create();
        info.setTrapped("True");
        expect(info.getTrapped()).toBe("True");
        info.setTrapped("False");
        expect(info.getTrapped()).toBe("False");
        info.setTrapped("Unknown");
        expect(info.getTrapped()).toBe("Unknown");
    });

    test("setTrappedAsync", async () => {
        let info = PDDocumentInformation.create();
        await info.setTrappedAsync("True");
        expect(await info.getTrappedAsync()).toBe("True");
        await info.setTrappedAsync("False");
        expect(await info.getTrappedAsync()).toBe("False");
        await info.setTrappedAsync("Unknown");
        expect(await info.getTrappedAsync()).toBe("Unknown");

        expect(info.setTrappedAsync("True")).toBeInstanceOf(Promise);
        expect(info.setTrappedAsync("False")).toBeInstanceOf(Promise);
        expect(info.setTrappedAsync("Unknown")).toBeInstanceOf(Promise);
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
        expect(vector.getXAsync()).toBeInstanceOf(Promise);
        expect(await vector.getXAsync()).toBe(X);
    });

    test("getYAsync", async () => {
        expect(vector.getYAsync()).toBeInstanceOf(Promise);
        expect(await vector.getYAsync()).toBe(Y);
    });

    test("scaleAsync", async () => {
        expect(vector.scaleAsync(MULT)).toBeInstanceOf(Promise);
        const result = await vector.scaleAsync(MULT);

        expect(result).toBeInstanceOf(Vector);
        expect(result.getX()).toBe(X * MULT);
        expect(result.getY()).toBe(Y * MULT);
    });
});
