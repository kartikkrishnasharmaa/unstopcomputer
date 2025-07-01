// File: /utils/generateCertificateId.js
export function generateCertificateId(name, subject) {
  const timestamp = Date.now().toString(36);
  const namePart = name.replace(/\s+/g, '').toLowerCase().slice(0, 3);
  const subjectPart = subject.toLowerCase().slice(0, 3);
  return `${subjectPart}-${namePart}-${timestamp}`;
}