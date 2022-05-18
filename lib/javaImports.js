const java = require("./javaInit").getJavaInstance();

module.exports = {
    Byte: java.importClass("java.lang.Byte"),
    Calendar: java.importClass("java.util.Calendar"),
    Color: java.importClass("java.awt.Color"),
    File: java.importClass("java.io.File"),
    Date: java.importClass("java.util.Date"),
    Matrix: java.importClass("org.apache.pdfbox.util.Matrix"),
    MemoryUsageSetting: java.importClass("org.apache.pdfbox.io.MemoryUsageSetting"),
    PDDocument: java.importClass("org.apache.pdfbox.pdmodel.PDDocument"),
    PDDocumentInformation: java.importClass("org.apache.pdfbox.pdmodel.PDDocumentInformation"),
    PDFMergerUtility: java.importClass("org.apache.pdfbox.multipdf.PDFMergerUtility"),
    PDPage: java.importClass("org.apache.pdfbox.pdmodel.PDPage"),
    PDPageContentStream: java.importClass("org.apache.pdfbox.pdmodel.PDPageContentStream"),
    PDPageTree: java.importClass("org.apache.pdfbox.pdmodel.PDPageTree"),
    PDRectangle: java.importClass("org.apache.pdfbox.pdmodel.common.PDRectangle"),
    PDType1Font: java.importClass("org.apache.pdfbox.pdmodel.font.PDType1Font"),
    Vector: java.importClass("org.apache.pdfbox.util.Vector"),

    Short: java.importClass("java.lang.Short"),
    Long: java.importClass("java.lang.Long"),
    Float: java.importClass("java.lang.Float"),
    Double: java.importClass("java.lang.Double"),
    Boolean: java.importClass("java.lang.Boolean"),
    Char: java.importClass("java.lang.Character"),
};