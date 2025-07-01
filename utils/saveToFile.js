/ File: /utils/saveToFile.js (optional)
// Use if you'd like to abstract saving logic
import fs from 'fs';
import path from 'path';

export function saveToJsonFile(fileName, data) {
  const filePath = path.join(process.cwd(), 'public', 'data', fileName);
  const fileData = fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath)) : [];
  fileData.push(data);
  fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2));
}
