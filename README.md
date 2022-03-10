# PDFBox Node

Use PDFBox from Node.js

The library is based on https://github.com/pedro-lucas/node-pdfbox

## Installing

```
npm i https://github.com/Nadwey/pdfbox-node.git
```

## Status

-   Super pre-alpha

## Examples

### Write text

```js
const { Close, PDDocument, PDPage, PDPageContentStream, PDType1Font } = require("@nadwey/pdfbox-node");
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

Close();
process.exit();
```
