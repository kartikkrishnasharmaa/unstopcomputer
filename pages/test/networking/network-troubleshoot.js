// pages/index.js
import React, { useState } from "react";
import Head from "next/head";

const questions = [
  {
    question:
      "What is the first step in troubleshooting a network connectivity issue?",
    options: [
      "Identifying the problem",
      "Checking the physical connections",
      "Rebooting the router",
      "Contacting the ISP",
    ],
    correctAnswer: "Identifying the problem",
  },

  {
    question:
      "What tool is commonly used to test network connectivity between two devices?",
    options: ["Ping", "Traceroute", "Netstat", "Nmap"],
    correctAnswer: "Ping",
  },

  {
    question: "What does the 'ping' command do?",
    options: [
      "Sends ICMP echo requests to test network connectivity",
      "Maps the route that packets take across a network",
      "Monitors network traffic in real-time",
      "Scans for open ports on a remote device",
    ],
    correctAnswer: "Sends ICMP echo requests to test network connectivity",
  },

  {
    question: "What does the 'tracert' (or 'traceroute') command do?",
    options: [
      "Displays the route that packets take across a network",
      "Tests network connectivity by sending ICMP echo requests",
      "Monitors network traffic in real-time",
      "Scans for open ports on a remote device",
    ],
    correctAnswer: "Displays the route that packets take across a network",
  },

  {
    question:
      "What is the purpose of using a network sniffer (packet analyzer) during troubleshooting?",
    options: [
      "To capture and analyze network traffic",
      "To test network connectivity by sending ICMP echo requests",
      "To identify the physical location of network devices",
      "To monitor network bandwidth usage",
    ],
    correctAnswer: "To capture and analyze network traffic",
  },

  {
    question: "What is the common cause of slow network performance?",
    options: [
      "Network congestion",
      "Physical damage to network cables",
      "Outdated router firmware",
      "Incorrect DNS settings",
    ],
    correctAnswer: "Network congestion",
  },

  {
    question:
      "What could be a reason for intermittent network connectivity issues?",
    options: [
      "Wireless interference",
      "Incorrect IP address assignment",
      "Power outage",
      "Firewall misconfiguration",
    ],
    correctAnswer: "Wireless interference",
  },

  {
    question:
      "What is the purpose of checking firewall settings during network troubleshooting?",
    options: [
      "To ensure that the firewall is not blocking network traffic",
      "To test network connectivity by sending ICMP echo requests",
      "To monitor network bandwidth usage",
      "To identify the physical location of network devices",
    ],
    correctAnswer:
      "To ensure that the firewall is not blocking network traffic",
  },

  {
    question:
      "What tool is commonly used to detect unauthorized devices on a network?",
    options: ["Network scanner", "Packet sniffer", "Ping", "Traceroute"],
    correctAnswer: "Network scanner",
  },

  {
    question:
      "What is the purpose of checking DNS settings during network troubleshooting?",
    options: [
      "To ensure that domain names are resolved correctly to IP addresses",
      "To test network connectivity by sending ICMP echo requests",
      "To monitor network traffic in real-time",
      "To identify the physical location of network devices",
    ],
    correctAnswer:
      "To ensure that domain names are resolved correctly to IP addresses",
  },
  {
    question: "What is the primary purpose of performing a loopback test?",
    options: [
      "To verify that a network device's hardware and software are functioning correctly",
      "To monitor network traffic in real-time",
      "To test network connectivity by sending ICMP echo requests",
      "To identify the physical location of network devices",
    ],
    correctAnswer:
      "To verify that a network device's hardware and software are functioning correctly",
  },

  {
    question:
      "What is the purpose of using a cable tester during network troubleshooting?",
    options: [
      "To check for faulty Ethernet cables",
      "To test network connectivity by sending ICMP echo requests",
      "To monitor network traffic in real-time",
      "To identify the physical location of network devices",
    ],
    correctAnswer: "To check for faulty Ethernet cables",
  },

  {
    question:
      "What is a common symptom of a DNS (Domain Name System) misconfiguration?",
    options: [
      "Failure to access websites by domain name",
      "Slow network performance",
      "Intermittent network connectivity",
      "Loss of power to network devices",
    ],
    correctAnswer: "Failure to access websites by domain name",
  },

  {
    question: "What does the 'arp' command do?",
    options: [
      "Displays the ARP cache",
      "Tests network connectivity by sending ICMP echo requests",
      "Monitors network traffic in real-time",
      "Scans for open ports on a remote device",
    ],
    correctAnswer: "Displays the ARP cache",
  },

  {
    question:
      "What is the purpose of analyzing network logs during troubleshooting?",
    options: [
      "To identify patterns or anomalies in network behavior",
      "To test network connectivity by sending ICMP echo requests",
      "To monitor network traffic in real-time",
      "To identify the physical location of network devices",
    ],
    correctAnswer: "To identify patterns or anomalies in network behavior",
  },

  {
    question: "What could be a cause of frequent network disconnections?",
    options: [
      "Faulty network hardware",
      "Slow network performance",
      "Incorrect DNS settings",
      "Power outage",
    ],
    correctAnswer: "Faulty network hardware",
  },

  {
    question: "What is the purpose of a network audit during troubleshooting?",
    options: [
      "To assess the overall health and performance of a network",
      "To test network connectivity by sending ICMP echo requests",
      "To monitor network traffic in real-time",
      "To identify the physical location of network devices",
    ],
    correctAnswer: "To assess the overall health and performance of a network",
  },

  {
    question:
      "What is the purpose of a bandwidth test during network troubleshooting?",
    options: [
      "To measure the available bandwidth of a network connection",
      "To test network connectivity by sending ICMP echo requests",
      "To monitor network traffic in real-time",
      "To identify the physical location of network devices",
    ],
    correctAnswer: "To measure the available bandwidth of a network connection",
  },

  {
    question: "What is the primary cause of network collisions?",
    options: [
      "Multiple devices attempting to transmit data simultaneously",
      "Faulty network cables",
      "Incorrect DNS settings",
      "Slow network performance",
    ],
    correctAnswer:
      "Multiple devices attempting to transmit data simultaneously",
  },

  {
    question:
      "What is the purpose of a firmware update for network devices during troubleshooting?",
    options: [
      "To fix known issues and improve device performance",
      "To test network connectivity by sending ICMP echo requests",
      "To monitor network traffic in real-time",
      "To identify the physical location of network devices",
    ],
    correctAnswer: "To fix known issues and improve device performance",
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
        <title>Network Troubleshoot Quiz | Unstop Computer</title>
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
          href="https://unstopcomputer.tech/test/networking/network-troubleshoot"
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
          Network Troubleshoot Quiz
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
