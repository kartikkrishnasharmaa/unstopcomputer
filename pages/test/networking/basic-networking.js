// pages/index.js
import React, { useState } from "react";
import Head from "next/head";

const questions = [
  {
    question: "What is a computer network?",
    options: [
      "A group of interconnected computers",
      "A single computer",
      "A computer program",
      "A computer accessory",
    ],
    correctAnswer: "A group of interconnected computers",
  },
  {
    question: "What is the purpose of a router in a network?",
    options: [
      "To connect computers to the internet",
      "To transmit data between different networks",
      "To store data",
      "To print documents",
    ],
    correctAnswer: "To transmit data between different networks",
  },
  {
    question: "What is an IP address?",
    options: [
      "A postal address for sending physical mail",
      "A unique identifier for a device on a network",
      "A type of computer virus",
      "A type of computer screen",
    ],
    correctAnswer: "A unique identifier for a device on a network",
  },
  {
    question: "What does TCP/IP stand for?",
    options: [
      "Text Control Protocol/Internet Protocol",
      "Transmission Control Protocol/Internet Protocol",
      "Telecommunication Control Protocol/Internet Protocol",
      "Transfer Control Protocol/Internet Protocol",
    ],
    correctAnswer: "Transmission Control Protocol/Internet Protocol",
  },
  {
    question: "What is the function of DNS?",
    options: [
      "To convert domain names to IP addresses",
      "To encrypt data transmission",
      "To create websites",
      "To connect to wireless networks",
    ],
    correctAnswer: "To convert domain names to IP addresses",
  },
  {
    question: "What is a LAN?",
    options: [
      "Local Access Network",
      "Long Access Network",
      "Limited Access Network",
      "Large Area Network",
    ],
    correctAnswer: "Local Access Network",
  },
  {
    question: "What is a WAN?",
    options: [
      "Wireless Area Network",
      "Wide Access Network",
      "Worldwide Access Network",
      "Wide Area Network",
    ],
    correctAnswer: "Wide Area Network",
  },
  {
    question: "What is a firewall?",
    options: [
      "A physical barrier to protect computers from fire damage",
      "A software or hardware-based security system",
      "A tool to speed up internet connection",
      "A type of computer virus",
    ],
    correctAnswer: "A software or hardware-based security system",
  },
  {
    question: "What is Ethernet?",
    options: [
      "A type of internet browser",
      "A networking protocol",
      "A computer manufacturer",
      "A type of computer virus",
    ],
    correctAnswer: "A networking protocol",
  },
  {
    question: "What is a modem?",
    options: [
      "A device to connect computers wirelessly",
      "A device to connect computers to the internet",
      "A type of computer virus",
      "A tool to create websites",
    ],
    correctAnswer: "A device to connect computers to the internet",
  },
  {
    question: "What is a packet?",
    options: [
      "A type of computer storage device",
      "A unit of data transmitted over a network",
      "A type of computer virus",
      "A computer programming language",
    ],
    correctAnswer: "A unit of data transmitted over a network",
  },
  {
    question: "What is bandwidth?",
    options: [
      "The physical width of a computer monitor",
      "The amount of data that can be transmitted in a fixed amount of time",
      "The number of computers connected to a network",
      "A type of computer virus",
    ],
    correctAnswer:
      "The amount of data that can be transmitted in a fixed amount of time",
  },
  {
    question: "What is a subnet mask?",
    options: [
      "A security feature in computer networks",
      "A tool to hide IP addresses",
      "A protocol for sending emails",
      "A method of dividing an IP address into network and host portions",
    ],
    correctAnswer:
      "A method of dividing an IP address into network and host portions",
  },
  {
    question: "What is latency?",
    options: [
      "The time it takes for data to travel from one point to another in a network",
      "The size of a computer monitor",
      "The number of devices connected to a network",
      "A type of computer virus",
    ],
    correctAnswer:
      "The time it takes for data to travel from one point to another in a network",
  },
  {
    question: "What is a MAC address?",
    options: [
      "A type of computer virus",
      "A unique identifier assigned to network interfaces for communications on the physical network segment",
      "A method of sending emails",
      "A type of computer storage device",
    ],
    correctAnswer:
      "A unique identifier assigned to network interfaces for communications on the physical network segment",
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
        <title>Basic Networking Quiz | Unstop Computer</title>
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
          href="https://unstopcomputer.tech/test/networking/basic-networking"
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
          Basic Computer Networking Quiz
        </h1>
        {questions.map((question, index) => (
          <div key={index} className="border p-4 rounded-md mb-4">
            <h4 className="font-semibold text-xl mb-2">Q.{index + 1} {question.question}</h4>
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
