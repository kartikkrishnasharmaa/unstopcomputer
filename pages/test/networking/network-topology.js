// pages/index.js
import React, { useState } from "react";
import Head from "next/head";

const questions = [
  {
    question:
      "What type of network topology connects all devices to a single central hub?",
    options: [
      "Star topology",
      "Bus topology",
      "Ring topology",
      "Mesh topology",
    ],
    correctAnswer: "Star topology",
  },
  {
    question:
      "In which network topology does each device have a point-to-point connection with every other device?",
    options: [
      "Mesh topology",
      "Star topology",
      "Ring topology",
      "Bus topology",
    ],
    correctAnswer: "Mesh topology",
  },
  {
    question:
      "Which network topology forms a closed loop where each device is connected to exactly two other devices?",
    options: [
      "Ring topology",
      "Mesh topology",
      "Star topology",
      "Bus topology",
    ],
    correctAnswer: "Ring topology",
  },
  {
    question:
      "In which network topology are all devices connected to a common backbone cable?",
    options: [
      "Bus topology",
      "Mesh topology",
      "Ring topology",
      "Star topology",
    ],
    correctAnswer: "Bus topology",
  },
  {
    question:
      "Which network topology provides redundancy and fault tolerance due to multiple paths between devices?",
    options: [
      "Mesh topology",
      "Star topology",
      "Ring topology",
      "Bus topology",
    ],
    correctAnswer: "Mesh topology",
  },
  {
    question:
      "In which network topology does a failure of one device not affect the rest of the network?",
    options: [
      "Star topology",
      "Ring topology",
      "Mesh topology",
      "Bus topology",
    ],
    correctAnswer: "Star topology",
  },
  {
    question:
      "Which network topology requires a termination at both ends of the main cable?",
    options: [
      "Bus topology",
      "Ring topology",
      "Mesh topology",
      "Star topology",
    ],
    correctAnswer: "Bus topology",
  },
  {
    question:
      "What type of network topology resembles a web or a spider's web?",
    options: [
      "Mesh topology",
      "Star topology",
      "Ring topology",
      "Bus topology",
    ],
    correctAnswer: "Mesh topology",
  },
  {
    question:
      "Which network topology is best suited for small to medium-sized networks?",
    options: [
      "Star topology",
      "Ring topology",
      "Mesh topology",
      "Bus topology",
    ],
    correctAnswer: "Star topology",
  },
  {
    question:
      "In which network topology does the failure of a single device disrupt the entire network?",
    options: [
      "Bus topology",
      "Star topology",
      "Ring topology",
      "Mesh topology",
    ],
    correctAnswer: "Bus topology",
  },
  {
    question:
      "Which network topology offers high scalability and ease of adding or removing devices?",
    options: [
      "Star topology",
      "Ring topology",
      "Bus topology",
      "Mesh topology",
    ],
    correctAnswer: "Star topology",
  },
  {
    question: "What network topology is commonly used in Ethernet networks?",
    options: [
      "Bus topology",
      "Ring topology",
      "Star topology",
      "Mesh topology",
    ],
    correctAnswer: "Star topology",
  },
  {
    question:
      "Which network topology provides the highest level of privacy and security?",
    options: [
      "Mesh topology",
      "Ring topology",
      "Bus topology",
      "Star topology",
    ],
    correctAnswer: "Mesh topology",
  },
  {
    question:
      "In which network topology does each device receive data simultaneously from one transmitting device?",
    options: [
      "Bus topology",
      "Ring topology",
      "Star topology",
      "Mesh topology",
    ],
    correctAnswer: "Star topology",
  },
  {
    question:
      "Which network topology requires a central point of control and management?",
    options: [
      "Mesh topology",
      "Ring topology",
      "Bus topology",
      "Star topology",
    ],
    correctAnswer: "Star topology",
  },
  {
    question:
      "Which network topology is characterized by a hierarchical structure with multiple levels of interconnected switches or routers?",
    options: [
      "Hierarchical topology",
      "Mesh topology",
      "Ring topology",
      "Star topology",
    ],
    correctAnswer: "Hierarchical topology",
  },
  {
    question:
      "In which network topology is there a single, central device that controls all communication flow?",
    options: [
      "Centralized topology",
      "Mesh topology",
      "Ring topology",
      "Bus topology",
    ],
    correctAnswer: "Centralized topology",
  },
  {
    question:
      "Which network topology offers the highest level of fault tolerance?",
    options: [
      "Mesh topology",
      "Star topology",
      "Ring topology",
      "Bus topology",
    ],
    correctAnswer: "Mesh topology",
  },
  {
    question:
      "In which network topology is the performance impacted if the central hub fails?",
    options: [
      "Star topology",
      "Mesh topology",
      "Ring topology",
      "Bus topology",
    ],
    correctAnswer: "Star topology",
  },
  {
    question:
      "Which network topology is commonly used in wireless networks where devices communicate directly with each other?",
    options: [
      "Ad-hoc topology",
      "Mesh topology",
      "Star topology",
      "Ring topology",
    ],
    correctAnswer: "Ad-hoc topology",
  },
  {
    question:
      "What network topology is often used in token ring networks where data flows in a circular manner?",
    options: [
      "Ring topology",
      "Mesh topology",
      "Star topology",
      "Bus topology",
    ],
    correctAnswer: "Ring topology",
  },
  {
    question:
      "Which network topology provides easy fault isolation due to its point-to-point connections?",
    options: [
      "Mesh topology",
      "Star topology",
      "Ring topology",
      "Bus topology",
    ],
    correctAnswer: "Mesh topology",
  },
  {
    question:
      "In which network topology is the total length of the cable an important consideration?",
    options: [
      "Bus topology",
      "Mesh topology",
      "Star topology",
      "Ring topology",
    ],
    correctAnswer: "Bus topology",
  },
  {
    question:
      "What network topology is suitable for networks where devices are located in a linear fashion?",
    options: [
      "Bus topology",
      "Ring topology",
      "Mesh topology",
      "Star topology",
    ],
    correctAnswer: "Bus topology",
  },
  {
    question:
      "Which network topology offers the easiest scalability with the addition of new devices?",
    options: [
      "Star topology",
      "Ring topology",
      "Bus topology",
      "Mesh topology",
    ],
    correctAnswer: "Star topology",
  },

  // Add more questions here...
];

const IndexPage = () => {
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);

  const handleSubmit = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((question, index) => {
      if (question.correctAnswer === answers[index]) {
        score += 1;
      }
    });
    return score;
  };

  const handleShowResults = () => {
    if (answers.length === questions.length && !answers.includes(undefined)) {
      setShowResults(true);
    } else {
      // Handle case where not all questions are answered
      alert("Please answer all questions before submitting.");
    }
  };

  const handleCloseResults = () => {
    setShowResults(false);
    setShowAnswers(false);
  };

  const handleSeeResult = () => {
    setShowAnswers(true);
  };

  const handleResetTest = () => {
    setAnswers([]);
    setShowResults(false);
    setShowAnswers(false);
  };
  return (
    <>
      <Head>
        <title>Network Toplogy Test | Unstop Computer</title>
        <meta
          name="description"
          content="This privacy policy explains how we use and protect any information that you provide when you use this website."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta
          name="Keywords"
          content="HTML,Unstop Computer.in,UnstopComputers, Unstop Computer, UnstopComputers.in Python, CSS, SQL, JavaScript, How to, PHP, Java, C, C++, C#, jQuery, Bootstrap, Colors, XML, MySQL, Icons, Node.js, React, Vue, Graphics, Angular, R, AI, Git, Data Science, Code Game, Tutorials, Programming, Web Development, Training, Learning, Quiz, Exercises, Courses, Lessons, References, Examples, Learn to code, Source code, Demos, Tips, Website"
        />
        <link
          rel="canonical"
          href="https://unstopcomputer.tech/test/networking/network-topology"
        />
        <meta
          property="og:image"
          content="https://unstopcomputer.tech/Images/logo.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="150" />
        <meta property="og:image:height" content="150" />
        <meta property="og:title" content="Privacy Policy | Unstop Computer" />
        <meta
          property="og:description"
          content="This privacy policy explains how we use and protect any information that you provide when you use this website."
        />
      </Head>
      <div className="box-border h-full w-auto p-3 m-3 border-4 shadow-xl shadow-cyan-600 hover:shadow-indigo-700">
        <h1 className="title-font sm:text-4xl text-center text-3xl mb-10 font-medium text-blue-700">
          Network Topology Test
        </h1>
        {questions.map((question, index) => (
          <div key={index} className="border p-4 rounded-md mb-4">
            <h4 className="font-semibold text-xl mb-2">
              Q.{index + 1} {question.question}
            </h4>
            <div className="flex flex-col ml-2 space-y-4">
              {question.options.map((option, optionIndex) => (
                <label
                  key={optionIndex}
                  className="flex items-center space-x-1 cursor-pointer"
                >
                  <input
                    type="radio"
                    checked={answers[index] === option}
                    onChange={() => handleSubmit(index, option)}
                    className="hidden"
                  />
                  <span
                    className={`border rounded-full w-4 h-4 flex items-center justify-center ${
                      answers[index] === option
                        ? "border-green-500 bg-green-500"
                        : "border-gray-500 hover:border-blue-500"
                    }`}
                  >
                    {answers[index] === option && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.293 11.293a1 1 0 011.414 0l3 3a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L10 11.414l-3.293 3.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </span>
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
        <button
          onClick={handleShowResults}
          className="bg-white hover:bg-blue-700 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-white rounded-3xl"
        >
          Submit Test
        </button>
        <button
          onClick={handleResetTest}
          className="bg-white hover:bg-red-500 ml-2 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-white rounded-3xl"
        >
          Reset Test
        </button>
        {showResults && (
          <div className="flex justify-center">
            <div className="w-auto">
              <button
                onClick={handleCloseResults}
                className="absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-800 z-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <h2 className="text-xl font-semibold mb-4 mt-4">
                Your Score: {calculateScore()}
              </h2>
              <button
                onClick={handleSeeResult}
                className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
              >
                See Result
              </button>
              {showAnswers && (
                <div>
                  {questions.map((question, index) => (
                    <div key={index} className="mb-4">
                      <p className="font-semibold">{question.question}</p>
                      <p>Correct Answer: {question.correctAnswer}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default IndexPage;
