// File: /pages/quiz/[subject].js
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function QuizPage() {
  const router = useRouter();
  const { subject } = router.query;
  const [questions, setQuestions] = useState([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [userName, setUserName] = useState("");
  const [timer, setTimer] = useState(1200);

  useEffect(() => {
    if (subject) {
      fetch(`/data/${subject}Quiz.json`)
        .then((res) => res.json())
        .then((data) => {
          const random20 = data.sort(() => 0.5 - Math.random()).slice(0, 20);
          setQuestions(random20);
        });
    }
  }, [subject]);

  useEffect(() => {
    if (timer <= 0) handleSubmit();
    const interval = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleAnswer = (opt) => {
    if (opt === questions[currentQ].answer) setScore(score + 1);
    if (currentQ + 1 < 20) setCurrentQ(currentQ + 1);
    else handleSubmit();
  };

  const handleSubmit = () => {
    const percentage = (score / 20) * 100;
    if (userName) {
      router.push(`/quiz/certificate?name=${encodeURIComponent(userName)}&subject=${subject}&score=${percentage}`);
    } else {
      alert("Enter your name first");
    }
  };

  if (!subject) return <div>Loading...</div>;

  return (
    <div className="p-6">
      {!userName ? (
        <div>
          <h2>Enter Your Name to Start {subject} Quiz</h2>
          <input
            type="text"
            placeholder="Your Name"
            className="border p-2"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      ) : (
        <div>
          <h2 className="mb-4">Time Left: {Math.floor(timer / 60)}:{("0" + (timer % 60)).slice(-2)}</h2>
          {questions.length > 0 && currentQ < 20 ? (
            <div>
              <h3 className="mb-2">Q{currentQ + 1}: {questions[currentQ].question}</h3>
              {questions[currentQ].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(opt)}
                  className="block border px-4 py-2 my-1 rounded hover:bg-blue-200"
                >
                  {opt}
                </button>
              ))}
            </div>
          ) : (
            <button onClick={handleSubmit} className="mt-4 bg-green-600 text-white px-4 py-2 rounded">
              Submit Quiz
            </button>
          )}
        </div>
      )}
    </div>
  );
}
