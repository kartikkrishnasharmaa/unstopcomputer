// pages/index.js
import React, { useState } from "react";
import Head from "next/head";

const questions = [
  {
    question:
      "Which protocol is used for transferring web pages from a web server to a client's web browser?",
    options: ["HTTP", "FTP", "SMTP", "SSH"],
    correctAnswer: "HTTP",
  },

  {
    question: "What is the primary function of the TCP protocol?",
    options: [
      "To establish and maintain a reliable connection between two devices",
      "To translate domain names to IP addresses",
      "To route packets between networks",
      "To assign IP addresses dynamically",
    ],
    correctAnswer:
      "To establish and maintain a reliable connection between two devices",
  },

  {
    question: "Which protocol is responsible for sending and receiving emails?",
    options: ["SMTP", "HTTP", "FTP", "UDP"],
    correctAnswer: "SMTP",
  },

  {
    question: "What is the purpose of the DHCP protocol?",
    options: [
      "To assign IP addresses dynamically to devices on a network",
      "To translate domain names to IP addresses",
      "To route packets between networks",
      "To establish secure connections between networks",
    ],
    correctAnswer: "To assign IP addresses dynamically to devices on a network",
  },

  {
    question:
      "Which protocol is commonly used for securely accessing remote systems over a network?",
    options: ["SSH", "HTTP", "SMTP", "FTP"],
    correctAnswer: "SSH",
  },

  {
    question: "What is the primary function of the DNS protocol?",
    options: [
      "To translate domain names to IP addresses",
      "To establish and maintain a reliable connection between two devices",
      "To route packets between networks",
      "To assign IP addresses dynamically",
    ],
    correctAnswer: "To translate domain names to IP addresses",
  },

  {
    question: "Which protocol is used for transferring files over a network?",
    options: ["FTP", "HTTP", "SMTP", "SSH"],
    correctAnswer: "FTP",
  },

  {
    question: "What is the purpose of the ICMP protocol?",
    options: [
      "To send error messages and operational information",
      "To translate domain names to IP addresses",
      "To establish and maintain a reliable connection between two devices",
      "To assign IP addresses dynamically",
    ],
    correctAnswer: "To send error messages and operational information",
  },

  {
    question:
      "Which protocol is responsible for managing and controlling network devices?",
    options: ["SNMP", "HTTP", "SMTP", "FTP"],
    correctAnswer: "SNMP",
  },

  {
    question: "What is the purpose of the POP3 protocol?",
    options: [
      "To retrieve emails from a mail server",
      "To establish and maintain a reliable connection between two devices",
      "To translate domain names to IP addresses",
      "To assign IP addresses dynamically",
    ],
    correctAnswer: "To retrieve emails from a mail server",
  },
  {
    question:
      "Which protocol is used for transferring files securely over a network?",
    options: ["SFTP", "HTTP", "SMTP", "SSH"],
    correctAnswer: "SFTP",
  },

  {
    question: "What is the primary function of the ARP protocol?",
    options: [
      "To map IP addresses to MAC addresses",
      "To establish and maintain a reliable connection between two devices",
      "To translate domain names to IP addresses",
      "To assign IP addresses dynamically",
    ],
    correctAnswer: "To map IP addresses to MAC addresses",
  },

  {
    question:
      "Which protocol is used for securely accessing websites over a network?",
    options: ["HTTPS", "HTTP", "FTP", "SSH"],
    correctAnswer: "HTTPS",
  },

  {
    question:
      "What is the purpose of the ICMP protocol's 'Echo Request' message?",
    options: [
      "To check network connectivity by sending a ping request",
      "To establish and maintain a reliable connection between two devices",
      "To translate domain names to IP addresses",
      "To assign IP addresses dynamically",
    ],
    correctAnswer: "To check network connectivity by sending a ping request",
  },

  {
    question:
      "Which protocol is commonly used for managing and transferring files between networked computers?",
    options: ["FTP", "HTTP", "SMTP", "SSH"],
    correctAnswer: "FTP",
  },

  {
    question: "What is the purpose of the NTP protocol?",
    options: [
      "To synchronize the time on network devices",
      "To establish and maintain a reliable connection between two devices",
      "To translate domain names to IP addresses",
      "To assign IP addresses dynamically",
    ],
    correctAnswer: "To synchronize the time on network devices",
  },

  {
    question:
      "Which protocol is used for securely transferring hypertext documents over a network?",
    options: ["HTTPS", "HTTP", "FTP", "SSH"],
    correctAnswer: "HTTPS",
  },

  {
    question: "What is the primary function of the RDP protocol?",
    options: [
      "To provide remote desktop access to a computer",
      "To establish and maintain a reliable connection between two devices",
      "To translate domain names to IP addresses",
      "To assign IP addresses dynamically",
    ],
    correctAnswer: "To provide remote desktop access to a computer",
  },

  {
    question:
      "Which protocol is used for transferring emails between mail servers?",
    options: ["SMTP", "HTTP", "FTP", "SSH"],
    correctAnswer: "SMTP",
  },

  {
    question: "What is the purpose of the SNMP protocol?",
    options: [
      "To manage and monitor network devices",
      "To establish and maintain a reliable connection between two devices",
      "To translate domain names to IP addresses",
      "To assign IP addresses dynamically",
    ],
    correctAnswer: "To manage and monitor network devices",
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
        <title>Networking Protocol Quiz | Unstop Computer</title>
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
          href="https://unstopcomputer.tech/test/networking/networking-protocol"
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
          Networking Protocol Quiz
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
