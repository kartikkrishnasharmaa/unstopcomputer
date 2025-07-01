// File: /pages/quiz/verify.js
import { useState } from 'react';

export default function VerifyPage() {
  const [certId, setCertId] = useState('');
  const [data, setData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const handleVerify = async () => {
    const res = await fetch('/data/certificate.json');
    const all = await res.json();
    const match = all.find((c) => c.certId === certId);

    if (match) {
      setData(match);
      setNotFound(false);
    } else {
      setNotFound(true);
      setData(null);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Verify Certificate</h1>
      <input
        type="text"
        placeholder="Enter Certificate ID"
        value={certId}
        onChange={(e) => setCertId(e.target.value)}
        className="border p-2 w-full"
      />
      <button
        onClick={handleVerify}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Verify
      </button>

      {data && (
        <div className="mt-4 p-4 border rounded bg-green-50">
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Subject:</strong> {data.subject}</p>
          <p><strong>Score:</strong> {data.score}%</p>
          <p><strong>Issued Date:</strong> {new Date(data.date).toLocaleDateString()}</p>
          <p><strong>Certificate ID:</strong> {data.certId}</p>
        </div>
      )}

      {notFound && <p className="mt-4 text-red-600">Certificate not found!</p>}
    </div>
  );
}
