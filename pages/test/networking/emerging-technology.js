// pages/index.js
import React, { useState } from "react";
import Head from "next/head";

const questions = [
  {
    question: "What is the primary objective of edge computing?",
    options: [
      "To centralize data storage",
      "To minimize latency",
      "To reduce energy consumption",
      "To increase server capacity",
    ],
    correctAnswer: "To minimize latency",
  },

  {
    question:
      "Which technology allows for the creation of decentralized autonomous organizations (DAOs)?",
    options: [
      "Blockchain",
      "Artificial intelligence",
      "Quantum computing",
      "Internet of Things",
    ],
    correctAnswer: "Blockchain",
  },

  {
    question:
      "What is the main advantage of 5G technology compared to its predecessors?",
    options: [
      "Higher data transfer rates",
      "Lower network coverage",
      "Reduced energy consumption",
      "Decreased device compatibility",
    ],
    correctAnswer: "Higher data transfer rates",
  },

  {
    question:
      "Which emerging technology is expected to revolutionize the healthcare industry by enabling personalized treatment?",
    options: [
      "Blockchain",
      "Quantum computing",
      "Artificial intelligence",
      "Virtual reality",
    ],
    correctAnswer: "Artificial intelligence",
  },

  {
    question:
      "What is the primary application of augmented reality (AR) technology?",
    options: [
      "Gaming",
      "Data encryption",
      "Predictive analytics",
      "Natural language processing",
    ],
    correctAnswer: "Gaming",
  },

  {
    question: "Which technology is at the core of self-driving cars?",
    options: [
      "Quantum computing",
      "Artificial intelligence",
      "Internet of Things",
      "Blockchain",
    ],
    correctAnswer: "Artificial intelligence",
  },

  {
    question: "What is the primary purpose of quantum computing?",
    options: [
      "To increase processing speed",
      "To improve data security",
      "To minimize energy consumption",
      "To enhance cloud storage",
    ],
    correctAnswer: "To increase processing speed",
  },
  {
    question:
      "Which technology allows for the creation of digital twins, virtual representations of physical objects or systems?",
    options: [
      "Quantum computing",
      "Blockchain",
      "Artificial intelligence",
      "Internet of Things",
    ],
    correctAnswer: "Internet of Things",
  },

  {
    question:
      "What is the primary application of generative adversarial networks (GANs)?",
    options: [
      "Natural language processing",
      "Image synthesis",
      "Speech recognition",
      "Data compression",
    ],
    correctAnswer: "Image synthesis",
  },
  {
    question: "Which technology enables the creation of smart contracts?",
    options: [
      "Blockchain",
      "Artificial intelligence",
      "Quantum computing",
      "Internet of Things",
    ],
    correctAnswer: "Blockchain",
  },

  {
    question: "What is the primary advantage of neuromorphic computing?",
    options: [
      "High energy efficiency",
      "Rapid data transfer",
      "Massive storage capacity",
      "Universal compatibility",
    ],
    correctAnswer: "High energy efficiency",
  },

  {
    question:
      "Which technology is essential for the development of virtual reality (VR) applications?",
    options: [
      "Blockchain",
      "Artificial intelligence",
      "Internet of Things",
      "Advanced optics and displays",
    ],
    correctAnswer: "Advanced optics and displays",
  },

  {
    question:
      "What is the primary benefit of using drones equipped with AI algorithms?",
    options: [
      "Enhanced data security",
      "Reduced environmental impact",
      "Improved efficiency in data collection",
      "Higher battery life",
    ],
    correctAnswer: "Improved efficiency in data collection",
  },

  {
    question:
      "Which technology is crucial for enabling seamless communication between IoT devices?",
    options: [
      "Blockchain",
      "Artificial intelligence",
      "Quantum computing",
      "Wireless sensor networks",
    ],
    correctAnswer: "Wireless sensor networks",
  },

  {
    question:
      "What is the primary application of natural language processing (NLP)?",
    options: [
      "Cryptocurrency mining",
      "Language translation",
      "Data encryption",
      "Quantum computing",
    ],
    correctAnswer: "Language translation",
  },

  {
    question:
      "Which technology is used to enhance cybersecurity by identifying and responding to threats in real-time?",
    options: [
      "Quantum computing",
      "Blockchain",
      "Artificial intelligence",
      "Internet of Things",
    ],
    correctAnswer: "Artificial intelligence",
  },

  {
    question:
      "What is the primary advantage of using biometric authentication?",
    options: [
      "Ease of use",
      "High scalability",
      "Resistance to phishing attacks",
      "Low cost",
    ],
    correctAnswer: "Resistance to phishing attacks",
  },

  {
    question:
      "Which emerging technology is focused on creating sustainable energy solutions?",
    options: [
      "Blockchain",
      "Quantum computing",
      "Artificial intelligence",
      "Renewable energy technology",
    ],
    correctAnswer: "Renewable energy technology",
  },

  {
    question: "What is the primary purpose of using 3D printing technology?",
    options: [
      "Virtual reality simulation",
      "Mass production of electronics",
      "Rapid prototyping",
      "Blockchain verification",
    ],
    correctAnswer: "Rapid prototyping",
  },

  {
    question:
      "Which technology is expected to revolutionize the finance industry by enabling secure and transparent transactions?",
    options: [
      "Blockchain",
      "Quantum computing",
      "Artificial intelligence",
      "Internet of Things",
    ],
    correctAnswer: "Blockchain",
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
        <title>Emerging Technology Quiz | Unstop Computer</title>
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
          href="https://unstopcomputer.tech/test/networking/emerging-technology"
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
          Emerging Technology Quiz
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
