// pages/index.js
import React, { useState } from "react";
import Head from "next/head";

const questions = [
  {
    question: "Which wireless networking standard operates in the 2.4 GHz frequency band and offers a maximum data rate of 54 Mbps?",
    options: [
    "802.11g",
    "802.11n",
    "802.11ac",
    "802.11ax"
    ],
    correctAnswer: "802.11g",
    },
    
    {
    question: "What is the purpose of SSID (Service Set Identifier) in wireless networking?",
    options: [
    "To identify a wireless network",
    "To encrypt network traffic",
    "To assign IP addresses dynamically",
    "To provide physical layer connectivity"
    ],
    correctAnswer: "To identify a wireless network",
    },
    
    {
    question: "Which wireless networking technology allows devices to connect to a network without requiring physical cables?",
    options: [
    "Wi-Fi",
    "Bluetooth",
    "Ethernet",
    "NFC (Near Field Communication)"
    ],
    correctAnswer: "Wi-Fi",
    },
    
    {
    question: "What is the primary advantage of using MIMO (Multiple Input Multiple Output) technology in wireless networks?",
    options: [
    "Increased data throughput and coverage",
    "Enhanced security",
    "Lower latency",
    "Reduced interference"
    ],
    correctAnswer: "Increased data throughput and coverage",
    },
    
    {
    question: "Which wireless networking standard operates in both the 2.4 GHz and 5 GHz frequency bands and offers a maximum data rate of several gigabits per second?",
    options: [
    "802.11ac",
    "802.11g",
    "802.11n",
    "802.11ax"
    ],
    correctAnswer: "802.11ac",
    },
    
    {
    question: "What is the purpose of WPA (Wi-Fi Protected Access) in wireless networking?",
    options: [
    "To secure wireless networks by encrypting data transmission",
    "To monitor network traffic for suspicious activity",
    "To assign IP addresses dynamically",
    "To provide physical layer connectivity"
    ],
    correctAnswer: "To secure wireless networks by encrypting data transmission",
    },
    
    {
    question: "Which wireless networking standard is backward compatible with 802.11b/g and operates in both the 2.4 GHz and 5 GHz frequency bands?",
    options: [
    "802.11n",
    "802.11ac",
    "802.11ax",
    "802.11ah"
    ],
    correctAnswer: "802.11n",
    },
    
    {
    question: "What is the purpose of WEP (Wired Equivalent Privacy) in wireless networking?",
    options: [
    "To encrypt wireless network traffic",
    "To identify a wireless network",
    "To assign IP addresses dynamically",
    "To provide physical layer connectivity"
    ],
    correctAnswer: "To encrypt wireless network traffic",
    },
    
    {
    question: "Which wireless networking technology uses low-power radio frequency signals for short-range communication between devices?",
    options: [
    "Bluetooth",
    "Wi-Fi",
    "LTE (Long-Term Evolution)",
    "Zigbee"
    ],
    correctAnswer: "Bluetooth",
    },
    
    {
    question: "What is the purpose of channel bonding in wireless networking?",
    options: [
    "To increase data throughput by using multiple channels simultaneously",
    "To identify a wireless network",
    "To assign IP addresses dynamically",
    "To provide physical layer connectivity"
    ],
    correctAnswer: "To increase data throughput by using multiple channels simultaneously",
    },{
      question: "Which wireless networking standard operates in the 60 GHz frequency band and offers very high data rates but limited range?",
      options: [
      "802.11ad",
      "802.11ax",
      "802.11ac",
      "802.11ah"
      ],
      correctAnswer: "802.11ad",
      },
      
      {
      question: "What is the primary purpose of beamforming in wireless networking?",
      options: [
      "To improve signal strength and coverage by focusing radio waves toward specific devices",
      "To identify a wireless network",
      "To assign IP addresses dynamically",
      "To provide physical layer connectivity"
      ],
      correctAnswer: "To improve signal strength and coverage by focusing radio waves toward specific devices",
      },
      
      {
      question: "Which wireless networking technology is commonly used for communication between IoT (Internet of Things) devices with low power consumption and low data rates?",
      options: [
      "Zigbee",
      "Wi-Fi",
      "LTE (Long-Term Evolution)",
      "Bluetooth"
      ],
      correctAnswer: "Zigbee",
      },
      
      {
      question: "What is the purpose of DFS (Dynamic Frequency Selection) in wireless networking?",
      options: [
      "To dynamically select and switch to less congested Wi-Fi channels to avoid interference",
      "To encrypt wireless network traffic",
      "To assign IP addresses dynamically",
      "To provide physical layer connectivity"
      ],
      correctAnswer: "To dynamically select and switch to less congested Wi-Fi channels to avoid interference",
      },
      
      {
      question: "Which wireless networking technology uses orthogonal frequency-division multiplexing (OFDM) for improved performance in noisy environments?",
      options: [
      "802.11a",
      "802.11b",
      "802.11ax",
      "802.11ah"
      ],
      correctAnswer: "802.11a",
      },
      
      {
      question: "What is the purpose of a repeater in wireless networking?",
      options: [
      "To extend the coverage area of a wireless network",
      "To identify a wireless network",
      "To assign IP addresses dynamically",
      "To provide physical layer connectivity"
      ],
      correctAnswer: "To extend the coverage area of a wireless network",
      },
      
      {
      question: "Which wireless networking technology is designed for low-power, low-bandwidth communication over long distances?",
      options: [
      "LoRaWAN",
      "Wi-Fi",
      "LTE (Long-Term Evolution)",
      "Bluetooth"
      ],
      correctAnswer: "LoRaWAN",
      },
      
      {
      question: "What is the purpose of MU-MIMO (Multi-User Multiple Input Multiple Output) technology in wireless networking?",
      options: [
      "To improve network efficiency by allowing multiple devices to transmit data simultaneously",
      "To identify a wireless network",
      "To assign IP addresses dynamically",
      "To provide physical layer connectivity"
      ],
      correctAnswer: "To improve network efficiency by allowing multiple devices to transmit data simultaneously",
      },
      
      {
      question: "Which wireless networking standard operates in the 900 MHz frequency band and offers long-range communication suitable for IoT and M2M applications?",
      options: [
      "802.11ah",
      "802.11ad",
      "802.11ax",
      "802.11n"
      ],
      correctAnswer: "802.11ah",
      },
      
      {
      question: "What is the primary function of a wireless access point (WAP) in wireless networking?",
      options: [
      "To connect wireless devices to a wired network",
      "To identify a wireless network",
      "To assign IP addresses dynamically",
      "To provide physical layer connectivity"
      ],
      correctAnswer: "To connect wireless devices to a wired network",
      }

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
        <title>Wireless Networking Quiz | Unstop Computer</title>
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
          href="https://unstopcomputer.tech/test/networking/wireless"
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
          Wireless Networking Quiz
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
