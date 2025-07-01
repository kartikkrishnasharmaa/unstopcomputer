// File: /pages/api/save-certificate.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const certPath = path.join(process.cwd(), 'public', 'data', 'certificate.json');
    const newCert = req.body;

    let existing = [];
    if (fs.existsSync(certPath)) {
      const fileData = fs.readFileSync(certPath);
      existing = JSON.parse(fileData);
    }

    existing.push(newCert);
    fs.writeFileSync(certPath, JSON.stringify(existing, null, 2));

    res.status(200).json({ message: 'Certificate saved' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
