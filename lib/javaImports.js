const java = require("./javaInit").getJavaInstance();

module.exports = {
    Calendar: java.import("java.util.Calendar"),
    Color: java.import("java.awt.Color"),
    File: java.import("java.io.File"),
    Date: java.import("java.util.Date"),
    Matrix: java.import("org.apache.pdfbox.util.Matrix"),
    PDDocument: java.import("org.apache.pdfbox.pdmodel.PDDocument"),
    PDDocumentInformation: java.import("org.apache.pdfbox.pdmodel.PDDocumentInformation"),
    PDPage: java.import("org.apache.pdfbox.pdmodel.PDPage"),
    PDPageContentStream: java.import("org.apache.pdfbox.pdmodel.PDPageContentStream"),
    PDPageTree: java.import("org.apache.pdfbox.pdmodel.PDPageTree"),
    PDType1Font: java.import("org.apache.pdfbox.pdmodel.font.PDType1Font"),
    Vector: java.import("org.apache.pdfbox.util.Vector"),
};