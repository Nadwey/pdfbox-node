const {
    PDDocument,
    PDPage,
    PDPageContentStream,
    PDType1Font,
    Color,
    PDRectangle,
} = require("./index");
const fs = require("fs");
const { end } = require("./lib/javaInit");

// let doc = PDDocument.loadFromPath("./doc.pdf");
// let info = doc.getDocumentInformation();
// console.log(info.getCreationDate());

// info.setCreationDate(new Date(16453));

// doc.saveToPath("./doc.pdf");
// doc.close();

let doc = PDDocument.create();
let rect = PDRectangle.create(1080, 256 * 50);
let page = PDPage.create(rect);
doc.addPage(page);

let contentStream = PDPageContentStream.create(doc, page);
contentStream.setFont(PDType1Font.HELVETICA, 40);

for (let i = 0; i < 255; i++) {
    let color = Color.createRGB((255 - i) / 255, i / 255, 40 / 255);
    contentStream.setNonStrokingColor(color);
    contentStream.beginText();
    contentStream.newLineAtOffset(Math.sin(i / 10) * 100 + 190, i * 50 + 20);
    contentStream.showText("pdfbox-node");
    contentStream.endText();
}

contentStream.close();

doc.saveToPath("./doc.pdf");
doc.close();

end();
process.exit();
