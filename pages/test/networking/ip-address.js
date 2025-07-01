// pages/index.js
import React, { useState } from "react";
import Head from "next/head";

const questions = [
  {
    question: "What does IP stand for in the context of networking?",
    options: [
      "Internet Protocol",
      "Internal Protocol",
      "Intranet Protocol",
      "Information Protocol",
    ],
    correctAnswer: "Internet Protocol",
  },

  {
    question: "Which version of IP addresses uses 32 bits for addressing?",
    options: ["IPv4", "IPv6", "IPv8", "IPX"],
    correctAnswer: "IPv4",
  },

  {
    question:
      "What is the maximum number of unique IP addresses that can be assigned in IPv4?",
    options: ["4.3 billion", "1.2 trillion", "1.8 million", "16.8 million"],
    correctAnswer: "4.3 billion",
  },

  {
    question: "In IPv6, how many bits are used for addressing?",
    options: ["128 bits", "64 bits", "32 bits", "256 bits"],
    correctAnswer: "128 bits",
  },

  {
    question:
      "Which type of IP address is used to identify a device within a local network?",
    options: [
      "Private IP address",
      "Public IP address",
      "Dynamic IP address",
      "Static IP address",
    ],
    correctAnswer: "Private IP address",
  },

  {
    question: "What is the purpose of DHCP in IP networking?",
    options: [
      "To assign IP addresses dynamically",
      "To translate domain names to IP addresses",
      "To route packets between networks",
      "To provide secure access to remote networks",
    ],
    correctAnswer: "To assign IP addresses dynamically",
  },

  {
    question:
      "Which protocol is commonly used for dynamically assigning IP addresses to devices on a network?",
    options: ["DHCP", "DNS", "HTTP", "FTP"],
    correctAnswer: "DHCP",
  },

  {
    question:
      "What is the purpose of NAT (Network Address Translation) in IP networking?",
    options: [
      "To map private IP addresses to public IP addresses",
      "To encrypt network traffic",
      "To authenticate users",
      "To establish secure tunnels",
    ],
    correctAnswer: "To map private IP addresses to public IP addresses",
  },

  {
    question: "Which of the following is a valid IPv6 address format?",
    options: [
      "2001:0db8:85a3::8a2e:0370:7334",
      "192.168.1.1",
      "256.128.0.1",
      "10.0.0.1",
    ],
    correctAnswer: "2001:0db8:85a3::8a2e:0370:7334",
  },

  {
    question:
      "Which type of IP address changes every time a device connects to the network?",
    options: [
      "Dynamic IP address",
      "Static IP address",
      "Private IP address",
      "Public IP address",
    ],
    correctAnswer: "Dynamic IP address",
  },
  {
    question: "What is the purpose of subnetting in IP networking?",
    options: [
      "To allocate IP addresses more efficiently",
      "To increase the physical size of a network",
      "To establish secure connections between networks",
      "To improve data encryption",
    ],
    correctAnswer: "To allocate IP addresses more efficiently",
  },

  {
    question: "What is CIDR notation used for in IP addressing?",
    options: [
      "To specify the subnet mask",
      "To represent IPv6 addresses",
      "To identify multicast addresses",
      "To allocate IP addresses dynamically",
    ],
    correctAnswer: "To specify the subnet mask",
  },

  {
    question:
      "What is the purpose of ARP (Address Resolution Protocol) in IP networking?",
    options: [
      "To map IP addresses to MAC addresses",
      "To authenticate users on a network",
      "To assign IP addresses dynamically",
      "To route packets between networks",
    ],
    correctAnswer: "To map IP addresses to MAC addresses",
  },

  {
    question:
      "What is the difference between a public IP address and a private IP address?",
    options: [
      "A public IP address can be accessed from the internet, while a private IP address is only accessible within a local network",
      "A public IP address is assigned dynamically, while a private IP address is assigned statically",
      "A public IP address is longer than a private IP address",
      "A public IP address is used for outgoing traffic, while a private IP address is used for incoming traffic",
    ],
    correctAnswer:
      "A public IP address can be accessed from the internet, while a private IP address is only accessible within a local network",
  },

  {
    question:
      "What is the purpose of NAT (Network Address Translation) in IP networking?",
    options: [
      "To map private IP addresses to public IP addresses",
      "To encrypt network traffic",
      "To authenticate users",
      "To establish secure tunnels",
    ],
    correctAnswer: "To map private IP addresses to public IP addresses",
  },
  {
    question:
      "What is the purpose of DHCP (Dynamic Host Configuration Protocol) in IP networking?",
    options: [
      "To assign IP addresses dynamically to devices on a network",
      "To encrypt network traffic",
      "To map IP addresses to MAC addresses",
      "To route packets between networks",
    ],
    correctAnswer: "To assign IP addresses dynamically to devices on a network",
  },

  {
    question: "What is an IPv6 address?",
    options: [
      "A 32-bit address",
      "A 48-bit address",
      "A 64-bit address",
      "A 128-bit address",
    ],
    correctAnswer: "A 128-bit address",
  },

  {
    question: "What is the primary difference between IPv4 and IPv6 addresses?",
    options: [
      "IPv6 addresses are shorter than IPv4 addresses",
      "IPv6 addresses are backward compatible with IPv4",
      "IPv6 addresses use hexadecimal notation, while IPv4 addresses use decimal notation",
      "IPv6 addresses provide a larger address space compared to IPv4 addresses",
    ],
    correctAnswer:
      "IPv6 addresses provide a larger address space compared to IPv4 addresses",
  },

  {
    question:
      "What is the purpose of ICMP (Internet Control Message Protocol) in IP networking?",
    options: [
      "To troubleshoot network connectivity issues",
      "To assign IP addresses dynamically",
      "To authenticate users on a network",
      "To encrypt network traffic",
    ],
    correctAnswer: "To troubleshoot network connectivity issues",
  },

  {
    question: "What is a multicast IP address used for in IP networking?",
    options: [
      "To send data to multiple recipients simultaneously",
      "To identify the network address",
      "To assign IP addresses dynamically",
      "To encrypt network traffic",
    ],
    correctAnswer: "To send data to multiple recipients simultaneously",
  },

  {
    question:
      "What is the purpose of the loopback address (127.0.0.1) in IP networking?",
    options: [
      "To test network connectivity on a local machine",
      "To route packets between networks",
      "To assign IP addresses dynamically",
      "To authenticate users on a network",
    ],
    correctAnswer: "To test network connectivity on a local machine",
  },

  {
    question: "What is a subnet mask used for in IP networking?",
    options: [
      "To determine the network portion of an IP address",
      "To map IP addresses to MAC addresses",
      "To assign IP addresses dynamically",
      "To encrypt network traffic",
    ],
    correctAnswer: "To determine the network portion of an IP address",
  },

  {
    question: "What is the purpose of the default gateway in IP networking?",
    options: [
      "To route packets between networks",
      "To test network connectivity on a local machine",
      "To assign IP addresses dynamically",
      "To troubleshoot network connectivity issues",
    ],
    correctAnswer: "To route packets between networks",
  },

  {
    question: "What is an anycast IP address used for in IP networking?",
    options: [
      "To identify multiple interfaces that share the same IP address",
      "To assign IP addresses dynamically",
      "To encrypt network traffic",
      "To route packets between networks",
    ],
    correctAnswer:
      "To identify multiple interfaces that share the same IP address",
  },

  {
    question: "What is the purpose of the reverse DNS lookup in IP networking?",
    options: [
      "To map IP addresses to domain names",
      "To troubleshoot network connectivity issues",
      "To assign IP addresses dynamically",
      "To route packets between networks",
    ],
    correctAnswer: "To map IP addresses to domain names",
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
        <title>IP Address Quiz | Unstop Computer</title>
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
          href="https://unstopcomputer.tech/test/networking/ip-address"
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
          IP Address Quiz
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
