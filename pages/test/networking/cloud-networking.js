// pages/index.js
import React, { useState } from "react";
import Head from "next/head";

const questions = [
  {
    question: "What is the primary advantage of cloud networking?",
    options: [
      "Scalability",
      "Physical security",
      "Latency",
      "Cost-effectiveness",
    ],
    correctAnswer: "Scalability",
  },
  {
    question:
      "Which cloud networking model provides dedicated resources to a single organization?",
    options: [
      "Public cloud",
      "Private cloud",
      "Hybrid cloud",
      "Community cloud",
    ],
    correctAnswer: "Private cloud",
  },
  {
    question:
      "Which protocol is commonly used for connecting virtual machines in a cloud network?",
    options: ["HTTP", "SMTP", "TCP/IP", "VXLAN"],
    correctAnswer: "VXLAN",
  },
  {
    question: "Which of the following is NOT a component of cloud networking?",
    options: ["Data center", "Router", "Load balancer", "Firewall"],
    correctAnswer: "Router",
  },
  {
    question: "What does SDN stand for in the context of cloud networking?",
    options: [
      "Software Defined Network",
      "Secure Data Network",
      "System Development Network",
      "Server Distribution Network",
    ],
    correctAnswer: "Software Defined Network",
  },
  {
    question: "What does VPN stand for in cloud networking?",
    options: [
      "Virtual Private Network",
      "Virtual Public Network",
      "Volatile Packet Network",
      "Verified Private Network",
    ],
    correctAnswer: "Virtual Private Network",
  },
  {
    question:
      "Which of the following is a cloud networking deployment model that combines public and private clouds?",
    options: [
      "Public cloud",
      "Private cloud",
      "Hybrid cloud",
      "Community cloud",
    ],
    correctAnswer: "Hybrid cloud",
  },
  {
    question:
      "Which cloud networking service is used for distributing incoming network traffic across multiple servers?",
    options: ["VPN", "VLAN", "VPC", "Load balancer"],
    correctAnswer: "Load balancer",
  },
  {
    question:
      "Which cloud networking service provides a secure bridge between an organization's on-premises network and the cloud?",
    options: ["VLAN", "VPN", "VPC", "Direct Connect"],
    correctAnswer: "Direct Connect",
  },
  {
    question:
      "What is a benefit of using a CDN (Content Delivery Network) in cloud networking?",
    options: [
      "Increased latency",
      "Decreased data redundancy",
      "Improved content delivery speed",
      "Reduced security",
    ],
    correctAnswer: "Improved content delivery speed",
  },
  {
    question:
      "Which cloud networking service allows users to create isolated sections of a cloud network?",
    options: ["VLAN", "VPN", "VPC", "Direct Connect"],
    correctAnswer: "VPC",
  },
  {
    question:
      "Which cloud networking model is shared by multiple organizations with similar networking needs?",
    options: [
      "Public cloud",
      "Private cloud",
      "Hybrid cloud",
      "Community cloud",
    ],
    correctAnswer: "Community cloud",
  },
  {
    question:
      "Which technology allows a user to access a computing resource over the internet without the need for direct management of the underlying infrastructure?",
    options: ["PaaS", "IaaS", "SaaS", "FaaS"],
    correctAnswer: "IaaS",
  },
  {
    question:
      "Which cloud networking service provides network-level access control for cloud resources?",
    options: ["Firewall", "Load balancer", "VPN", "VPC"],
    correctAnswer: "Firewall",
  },
  {
    question: "Which of the following is a characteristic of cloud networking?",
    options: [
      "Limited scalability",
      "High upfront costs",
      "Physical storage",
      "On-demand provisioning",
    ],
    correctAnswer: "On-demand provisioning",
  },
  {
    question:
      "What technology is used to connect remote users securely to a cloud network?",
    options: ["TLS", "SSH", "VPN", "HTTP"],
    correctAnswer: "VPN",
  },
  {
    question:
      "Which cloud networking service is used to create a logically isolated section of the AWS cloud where you can launch AWS resources in a virtual network?",
    options: ["VPC", "VPN", "VLAN", "VLAN"],
    correctAnswer: "VPC",
  },
  {
    question:
      "Which of the following is NOT a deployment model for cloud computing?",
    options: ["Public cloud", "Private cloud", "Virtual cloud", "Hybrid cloud"],
    correctAnswer: "Virtual cloud",
  },
  {
    question: "What is the purpose of multi-cloud networking?",
    options: [
      "To reduce complexity",
      "To limit scalability",
      "To increase vendor lock-in",
      "To enhance security",
    ],
    correctAnswer: "To reduce complexity",
  },
  {
    question:
      "Which cloud networking component manages the flow of traffic between servers within a data center?",
    options: ["Firewall", "Router", "Load balancer", "Switch"],
    correctAnswer: "Switch",
  },
  {
    question:
      "Which cloud networking service allows users to securely connect to AWS cloud services as if they were on a local network?",
    options: ["Direct Connect", "VPC", "VPN", "VLAN"],
    correctAnswer: "Direct Connect",
  },
  {
    question:
      "Which protocol is commonly used for communication between cloud-based services?",
    options: ["HTTP", "SMTP", "SOAP", "REST"],
    correctAnswer: "REST",
  },
  {
    question:
      "What is the main purpose of a cloud network's virtual private gateway?",
    options: [
      "To manage user authentication",
      "To provide secure access to on-premises networks",
      "To optimize network performance",
      "To allocate IP addresses",
    ],
    correctAnswer: "To provide secure access to on-premises networks",
  },
  {
    question:
      "Which cloud networking concept allows for the creation of logical, isolated sections of a cloud provider's infrastructure?",
    options: ["VLAN", "VPC", "VPN", "VPC peering"],
    correctAnswer: "VPC",
  },
  {
    question: "What is a potential drawback of cloud networking?",
    options: [
      "Reduced scalability",
      "Higher upfront costs",
      "Increased physical security risks",
      "Dependency on internet connectivity",
    ],
    correctAnswer: "Dependency on internet connectivity",
  },
  {
    question:
      "Which cloud networking service is responsible for managing IP addresses within a virtual network?",
    options: ["DNS", "DHCP", "NAT", "CIDR"],
    correctAnswer: "DHCP",
  },
  {
    question:
      "What is the primary benefit of using a software-defined WAN (SD-WAN) in cloud networking?",
    options: [
      "Improved network security",
      "Reduced latency",
      "Enhanced network visibility and control",
      "Decreased scalability",
    ],
    correctAnswer: "Enhanced network visibility and control",
  },
  {
    question: "In cloud networking, what is the purpose of traffic shaping?",
    options: [
      "To limit bandwidth usage",
      "To increase latency",
      "To enhance data redundancy",
      "To optimize server storage",
    ],
    correctAnswer: "To limit bandwidth usage",
  },
  {
    question:
      "Which cloud networking service is responsible for translating domain names into IP addresses?",
    options: ["DHCP", "DNS", "NAT", "CIDR"],
    correctAnswer: "DNS",
  },
  {
    question:
      "Which of the following is NOT a potential benefit of cloud networking?",
    options: [
      "Cost savings",
      "Scalability",
      "Decreased flexibility",
      "Improved disaster recovery",
    ],
    correctAnswer: "Decreased flexibility",
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
        <title>Cloud Networking Quiz | Unstop Computer</title>
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
          href="https://unstopcomputer.tech/test/networking/cloud-networking"
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
          Cloud Networking Quiz
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
