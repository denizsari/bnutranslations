// Bu script, belirtilen .docx dosyasındaki metni okuyup bir JSON dosyasına aktarır.
// Gerekli paketler: mammoth, fs
// Kurulum: npm install mammoth fs

const mammoth = require("mammoth");
const fs = require("fs");
const path = require("path");

// .docx dosya adını buraya yazın
const docxFile = "Yeni Microsoft Word Belgesi.docx";
const outputJson = "src/content/docx-content.json";

async function extractDocxText() {
    try {
        const { value } = await mammoth.extractRawText({ path: docxFile });
        const text = value.trim();
        const data = { file: docxFile, text };
        fs.writeFileSync(outputJson, JSON.stringify(data, null, 2), "utf-8");
        console.log(`Metin başarıyla '${outputJson}' dosyasına aktarıldı.`);
    } catch (err) {
        console.error("Hata:", err);
    }
}

extractDocxText();
