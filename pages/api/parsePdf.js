// File: pages/api/parsePdf.js
import pdfParse from 'pdf-parse';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();  // Method Not Allowed
  }

  const data = new Uint8Array(Buffer.from(req.body.file, 'base64'));
  const pdfData = await pdfParse(data);
  res.status(200).json({ text: pdfData.text });
}