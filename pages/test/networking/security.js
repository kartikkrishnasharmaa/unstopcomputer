// pages/index.js
import React, { useState } from "react";
import Head from "next/head";

const questions = [
  {
    question: "What is the primary purpose of a firewall in network security?",
    options: [
      "To monitor and control incoming and outgoing network traffic",
      "To encrypt network traffic",
      "To assign IP addresses dynamically",
      "To provide physical layer connectivity",
    ],
    correctAnswer:
      "To monitor and control incoming and outgoing network traffic",
  },

  {
    question:
      "Which type of attack involves flooding a network or server with excessive traffic to disrupt its normal operation?",
    options: [
      "DDoS (Distributed Denial of Service)",
      "Phishing",
      "Spoofing",
      "Man-in-the-Middle",
    ],
    correctAnswer: "DDoS (Distributed Denial of Service)",
  },

  {
    question: "What is the purpose of encryption in network security?",
    options: [
      "To secure data by converting it into a form that can only be read with a decryption key",
      "To filter incoming and outgoing network traffic",
      "To assign IP addresses dynamically",
      "To provide physical layer connectivity",
    ],
    correctAnswer:
      "To secure data by converting it into a form that can only be read with a decryption key",
  },

  {
    question:
      "Which protocol is commonly used for secure remote access to a network?",
    options: [
      "VPN (Virtual Private Network)",
      "SSH (Secure Shell)",
      "HTTPS (Hypertext Transfer Protocol Secure)",
      "IPSec (Internet Protocol Security)",
    ],
    correctAnswer: "VPN (Virtual Private Network)",
  },

  {
    question:
      "What is the purpose of intrusion detection systems (IDS) in network security?",
    options: [
      "To monitor network traffic for suspicious activity or security policy violations",
      "To encrypt network traffic",
      "To assign IP addresses dynamically",
      "To provide physical layer connectivity",
    ],
    correctAnswer:
      "To monitor network traffic for suspicious activity or security policy violations",
  },

  {
    question:
      "Which type of attack involves tricking individuals into disclosing sensitive information such as passwords or credit card numbers?",
    options: [
      "Phishing",
      "DDoS (Distributed Denial of Service)",
      "Spoofing",
      "Man-in-the-Middle",
    ],
    correctAnswer: "Phishing",
  },

  {
    question:
      "What is the purpose of access control lists (ACLs) in network security?",
    options: [
      "To control which network traffic is allowed or denied based on specified criteria",
      "To monitor network traffic in real-time",
      "To assign IP addresses dynamically",
      "To provide physical layer connectivity",
    ],
    correctAnswer:
      "To control which network traffic is allowed or denied based on specified criteria",
  },

  {
    question:
      "Which security mechanism is used to authenticate and authorize users and devices connecting to a network?",
    options: [
      "802.1X",
      "WPA (Wi-Fi Protected Access)",
      "MAC Filtering",
      "WEP (Wired Equivalent Privacy)",
    ],
    correctAnswer: "802.1X",
  },

  {
    question:
      "What is the purpose of network segmentation in network security?",
    options: [
      "To isolate different parts of a network to contain security breaches",
      "To encrypt network traffic",
      "To assign IP addresses dynamically",
      "To provide physical layer connectivity",
    ],
    correctAnswer:
      "To isolate different parts of a network to contain security breaches",
  },

  {
    question:
      "Which protocol is used for secure communication between web browsers and web servers?",
    options: [
      "HTTPS (Hypertext Transfer Protocol Secure)",
      "SSH (Secure Shell)",
      "VPN (Virtual Private Network)",
      "IPSec (Internet Protocol Security)",
    ],
    correctAnswer: "HTTPS (Hypertext Transfer Protocol Secure)",
  },
  {
    question:
      "What is the primary purpose of a VPN (Virtual Private Network) in network security?",
    options: [
      "To create a secure and encrypted connection over a public network",
      "To monitor network traffic for suspicious activity",
      "To assign IP addresses dynamically",
      "To provide physical layer connectivity",
    ],
    correctAnswer:
      "To create a secure and encrypted connection over a public network",
  },

  {
    question:
      "Which type of attack involves intercepting communication between two parties to steal or manipulate data?",
    options: [
      "Man-in-the-Middle (MitM)",
      "Phishing",
      "Spoofing",
      "DDoS (Distributed Denial of Service)",
    ],
    correctAnswer: "Man-in-the-Middle (MitM)",
  },

  {
    question: "What is the purpose of antivirus software in network security?",
    options: [
      "To detect and remove malware from computers and networks",
      "To encrypt network traffic",
      "To assign IP addresses dynamically",
      "To provide physical layer connectivity",
    ],
    correctAnswer: "To detect and remove malware from computers and networks",
  },

  {
    question:
      "Which security mechanism is used to prevent unauthorized access to a wireless network based on the MAC addresses of devices?",
    options: [
      "MAC Filtering",
      "Firewall",
      "Intrusion Detection System (IDS)",
      "Intrusion Prevention System (IPS)",
    ],
    correctAnswer: "MAC Filtering",
  },

  {
    question: "What is the purpose of a honeypot in network security?",
    options: [
      "To attract and trap attackers to gather information about their tactics",
      "To encrypt network traffic",
      "To assign IP addresses dynamically",
      "To provide physical layer connectivity",
    ],
    correctAnswer:
      "To attract and trap attackers to gather information about their tactics",
  },

  {
    question:
      "Which protocol is commonly used for securely accessing and managing network devices such as routers and switches?",
    options: [
      "SSH (Secure Shell)",
      "HTTPS (Hypertext Transfer Protocol Secure)",
      "VPN (Virtual Private Network)",
      "IPSec (Internet Protocol Security)",
    ],
    correctAnswer: "SSH (Secure Shell)",
  },

  {
    question:
      "What is the primary function of a WAF (Web Application Firewall) in network security?",
    options: [
      "To protect web applications from common web-based attacks",
      "To monitor network traffic for suspicious activity",
      "To assign IP addresses dynamically",
      "To provide physical layer connectivity",
    ],
    correctAnswer: "To protect web applications from common web-based attacks",
  },

  {
    question:
      "Which security mechanism is used to prevent unauthorized access to a network by requiring users to provide multiple forms of authentication?",
    options: [
      "Multi-factor authentication (MFA)",
      "Firewall",
      "Intrusion Detection System (IDS)",
      "Intrusion Prevention System (IPS)",
    ],
    correctAnswer: "Multi-factor authentication (MFA)",
  },

  {
    question: "What is the purpose of data encryption in network security?",
    options: [
      "To protect sensitive information from unauthorized access",
      "To monitor network traffic for suspicious activity",
      "To assign IP addresses dynamically",
      "To provide physical layer connectivity",
    ],
    correctAnswer: "To protect sensitive information from unauthorized access",
  },

  {
    question:
      "Which security mechanism is used to detect and block malicious traffic based on predefined rules or signatures?",
    options: [
      "Intrusion Prevention System (IPS)",
      "Firewall",
      "Intrusion Detection System (IDS)",
      "MAC Filtering",
    ],
    correctAnswer: "Intrusion Prevention System (IPS)",
  },
  {
    question: "What is the purpose of a proxy server in network security?",
    options: [
      "To act as an intermediary between clients and servers, providing security and anonymity",
      "To monitor network traffic for suspicious activity",
      "To assign IP addresses dynamically",
      "To provide physical layer connectivity",
    ],
    correctAnswer:
      "To act as an intermediary between clients and servers, providing security and anonymity",
  },

  {
    question:
      "Which type of attack involves sending unsolicited messages to trick individuals into revealing sensitive information?",
    options: ["Spamming", "Phishing", "Spoofing", "Man-in-the-Middle (MitM)"],
    correctAnswer: "Phishing",
  },

  {
    question:
      "What is the purpose of a DMZ (Demilitarized Zone) in network security?",
    options: [
      "To segregate and protect public-facing servers from the internal network",
      "To encrypt network traffic",
      "To assign IP addresses dynamically",
      "To provide physical layer connectivity",
    ],
    correctAnswer:
      "To segregate and protect public-facing servers from the internal network",
  },

  {
    question:
      "Which security mechanism is used to prevent unauthorized access to a network by disguising its true identity?",
    options: [
      "Spoofing",
      "Firewall",
      "Intrusion Detection System (IDS)",
      "Intrusion Prevention System (IPS)",
    ],
    correctAnswer: "Spoofing",
  },

  {
    question:
      "What is the primary function of an IDS (Intrusion Detection System) in network security?",
    options: [
      "To detect and alert on suspicious activity or potential security breaches",
      "To monitor network traffic for suspicious activity",
      "To assign IP addresses dynamically",
      "To provide physical layer connectivity",
    ],
    correctAnswer:
      "To detect and alert on suspicious activity or potential security breaches",
  },

  {
    question:
      "Which security mechanism is used to prevent unauthorized access to a network by inspecting and filtering incoming and outgoing traffic based on predefined criteria?",
    options: [
      "Firewall",
      "MAC Filtering",
      "Multi-factor authentication (MFA)",
      "Encryption",
    ],
    correctAnswer: "Firewall",
  },

  {
    question:
      "What is the purpose of network segmentation in network security?",
    options: [
      "To isolate different parts of a network to contain security breaches",
      "To monitor network traffic for suspicious activity",
      "To assign IP addresses dynamically",
      "To provide physical layer connectivity",
    ],
    correctAnswer:
      "To isolate different parts of a network to contain security breaches",
  },

  {
    question:
      "Which security mechanism is used to verify the integrity and authenticity of data transmitted over a network?",
    options: [
      "Digital signatures",
      "Firewall",
      "Intrusion Detection System (IDS)",
      "Intrusion Prevention System (IPS)",
    ],
    correctAnswer: "Digital signatures",
  },

  {
    question: "What is the purpose of network hardening in network security?",
    options: [
      "To reduce the attack surface and strengthen security defenses",
      "To monitor network traffic for suspicious activity",
      "To assign IP addresses dynamically",
      "To provide physical layer connectivity",
    ],
    correctAnswer:
      "To reduce the attack surface and strengthen security defenses",
  },

  {
    question:
      "Which security mechanism is used to protect sensitive data by ensuring that only authorized users can access it?",
    options: [
      "Access control",
      "Firewall",
      "Intrusion Detection System (IDS)",
      "Intrusion Prevention System (IPS)",
    ],
    correctAnswer: "Access control",
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
        <title>Networking Security Quiz | Unstop Computer</title>
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
          href="https://unstopcomputer.tech/test/networking/security"
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
          Networking Security Quiz
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
