// File: /pages/index.js
import Link from 'next/link';

export default function Home() {
  const subjects = ['html', 'css', 'js', 'python'];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">UnstopComputer Quiz System</h1>
      <ul className="space-y-2">
        {subjects.map((subj) => (
          <li key={subj}>
            <Link href={`/quiz/${subj}`} className="text-blue-500 underline">
              Take {subj.toUpperCase()} Quiz
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Link href="/quiz/verify" className="text-green-600 underline">
          Verify Certificate
        </Link>
      </div>
    </div>
  );
}