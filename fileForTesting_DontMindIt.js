const { PDDocument, PDPage, PDPageContentStream, PDType1Font } = require("./index");
const fs = require("fs");

let doc = PDDocument.create();
let page = PDPage.create();
doc.addPage(page);

let contentStream = PDPageContentStream.create(doc, page);
contentStream.setFont(PDType1Font.HELVETICA, 40);
contentStream.beginText();
contentStream.newLineAtOffset(190, 400);
contentStream.showText("pdfbox-node");
contentStream.endText();
contentStream.close();

doc.saveToPath("./doc.pdf");
doc.close();

process.exit();