import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { generateCertificateId } from '../../utils/generateCertificateId';
import jsPDF from 'jspdf';

export default function Certificate() {
  const router = useRouter();
  const { name, subject, score } = router.query;
  const [certId, setCertId] = useState('');
  const [showButton, setShowButton] = useState(true);
  const [certificateGenerated, setCertificateGenerated] = useState(false);

  useEffect(() => {
    if (name && subject && score >= 70) {
      const id = generateCertificateId(name, subject);
      setCertId(id);
    }
  }, [name, subject, score]);

  const generatePDF = async () => {
    try {
      const doc = new jsPDF('landscape', 'pt', 'a4');
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();

      // Color scheme
      const bgColor = '#f8f9fa';
      const primaryColor = '#2c3e50';
      const accentColor = '#3498db';
      const goldColor = '#e6c229';
      const secondaryColor = '#7f8c8d';
      
      // Set background
      doc.setFillColor(bgColor);
      doc.rect(0, 0, pageWidth, pageHeight, 'F');

      // Add decorative border
      doc.setDrawColor(accentColor);
      doc.setLineWidth(15);
      doc.rect(15, 15, pageWidth - 30, pageHeight - 30);

      // Add certificate header
      doc.setFillColor(primaryColor);
      doc.rect(0, 0, pageWidth, 100, 'F');

      // Add certificate title
      doc.setFontSize(36);
      doc.setTextColor('#ffffff');
      doc.setFont('helvetica', 'bold');
      doc.text("CERTIFICATE OF EXCELLENCE", pageWidth / 2, 70, { align: "center" });

      // Add decorative elements (simpler version)
      doc.setFillColor(goldColor);
      doc.roundedRect(50, 130, pageWidth - 100, 300, 10, 10, 'S');
      doc.setLineWidth(2);
      doc.setDrawColor(goldColor);

      // Add main content
      doc.setFontSize(18);
      doc.setTextColor(secondaryColor);
      doc.setFont('helvetica', 'normal');
      doc.text("This certificate is proudly presented to", pageWidth / 2, 180, { align: "center" });

      // Add recipient name
      doc.setFontSize(32);
      doc.setTextColor(primaryColor);
      doc.setFont('helvetica', 'bold');
      doc.text(name || "Participant", pageWidth / 2, 230, { align: "center" });

      // Add achievement text
      doc.setFontSize(18);
      doc.setTextColor(secondaryColor);
      doc.setFont('helvetica', 'normal');
      doc.text("for outstanding performance in", pageWidth / 2, 270, { align: "center" });

      // Add course name
      doc.setFontSize(28);
      doc.setTextColor(accentColor);
      doc.setFont('helvetica', 'bold');
      const formattedSubject = subject ? subject.toUpperCase() : "CODING";
      doc.text(formattedSubject, pageWidth / 2, 310, { align: "center" });

      // Add score and details
      doc.setFontSize(16);
      doc.setTextColor(primaryColor);
      doc.text(`Achieving a remarkable score of ${score}%`, pageWidth / 2, 350, { align: "center" });

      // Add certificate ID (more prominent)
      doc.setFontSize(14);
      doc.setTextColor(secondaryColor);
      doc.text(`Certificate ID: ${certId}`, pageWidth / 2, 380, { align: "center" });

      // Add date
      const today = new Date();
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const date = today.toLocaleDateString('en-US', options);
      doc.text(`Issued on: ${date}`, pageWidth / 2, 410, { align: "center" });

      // Add creative text in center
      doc.setFontSize(16);
      doc.setTextColor(accentColor);
      doc.setFont('helvetica', 'italic');
      doc.text("Demonstrating exceptional skills and dedication", pageWidth / 2, 450, { align: "center" });

      // Add single signature line
      doc.setDrawColor('#95a5a6');
      doc.setLineWidth(1);
      doc.line(pageWidth / 2 - 100, pageHeight - 100, pageWidth / 2 + 100, pageHeight - 100);
      
      doc.setFontSize(12);
      doc.setTextColor(secondaryColor);
      doc.text("Authorized Signatory", pageWidth / 2, pageHeight - 80, { align: "center" });

      // Save PDF
      doc.save(`${name || 'participant'}-${formattedSubject}-Certificate.pdf`);

      // Save to JSON (API Call)
      const payload = {
        name,
        subject,
        score,
        certId,
        date: new Date().toISOString(),
      };

      await fetch('/api/save-certificate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      setCertificateGenerated(true);
    } catch (error) {
      console.error("Error generating certificate:", error);
    }
  };

  if (score < 70) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Score: {score}%</h2>
          <p className="text-gray-700 mb-6">You need at least 70% to earn a certificate.</p>
          <button
            onClick={() => router.back()}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Retry Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl w-full text-center border-t-8 border-blue-600">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">Congratulations {name}!</h1>
        
        <div className="mb-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-lg text-gray-700">You have successfully passed the</p>
          <h2 className="text-2xl font-bold text-blue-600 my-2">
            {subject ? subject.toUpperCase() : "CODING"} ASSESSMENT
          </h2>
          <p className="text-lg text-gray-700">
            with an excellent score of <span className="font-bold text-green-600">{score}%</span>
          </p>
        </div>
        
        <div className="mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
          <p className="text-sm text-gray-500">Your Certificate ID</p>
          <p className="text-lg font-mono font-bold text-gray-800 tracking-wider">{certId}</p>
        </div>

        {showButton && (
          <button
            onClick={() => { generatePDF(); setShowButton(false); }}
            className="mt-4 px-8 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-md"
          >
            Download Your Certificate
          </button>
        )}

        {certificateGenerated && (
          <div className="mt-6 p-3 bg-green-100 text-green-800 rounded-lg flex items-center justify-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-2" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                clipRule="evenodd" 
              />
            </svg>
            Certificate downloaded successfully!
          </div>
        )}
      </div>
    </div>
  );
}