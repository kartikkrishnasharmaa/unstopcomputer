// pages/index.js
import React, { useState } from "react";
import Head from "next/head";

const questions = [
  {
    question: "What is the primary function of a router in a network?",
    options: [
      "To forward packets between different networks",
      "To connect devices within the same network",
      "To regulate network traffic flow",
      "To provide physical layer connectivity",
    ],
    correctAnswer: "To forward packets between different networks",
  },

  {
    question: "Which layer of the OSI model do switches primarily operate at?",
    options: [
      "Data Link Layer (Layer 2)",
      "Network Layer (Layer 3)",
      "Transport Layer (Layer 4)",
      "Physical Layer (Layer 1)",
    ],
    correctAnswer: "Data Link Layer (Layer 2)",
  },

  {
    question: "What is the primary function of a switch in a network?",
    options: [
      "To forward frames within the same network",
      "To forward packets between different networks",
      "To regulate network traffic flow",
      "To provide physical layer connectivity",
    ],
    correctAnswer: "To forward frames within the same network",
  },

  {
    question:
      "Which protocol is commonly used by routers to dynamically learn and share routing information?",
    options: [
      "OSPF (Open Shortest Path First)",
      "HTTP (Hypertext Transfer Protocol)",
      "FTP (File Transfer Protocol)",
      "SMTP (Simple Mail Transfer Protocol)",
    ],
    correctAnswer: "OSPF (Open Shortest Path First)",
  },

  {
    question: "What is the purpose of a default gateway in a network?",
    options: [
      "To forward packets to other networks",
      "To connect devices within the same network",
      "To regulate network traffic flow",
      "To provide physical layer connectivity",
    ],
    correctAnswer: "To forward packets to other networks",
  },

  {
    question: "Which device forwards data based on MAC addresses?",
    options: ["Switch", "Router", "Hub", "Bridge"],
    correctAnswer: "Switch",
  },

  {
    question:
      "What is the primary function of VLANs (Virtual Local Area Networks) in a network?",
    options: [
      "To logically segment a single physical network into multiple virtual networks",
      "To connect devices within the same network",
      "To regulate network traffic flow",
      "To provide physical layer connectivity",
    ],
    correctAnswer:
      "To logically segment a single physical network into multiple virtual networks",
  },

  {
    question:
      "Which routing protocol uses distance vector algorithm for routing?",
    options: [
      "RIP (Routing Information Protocol)",
      "OSPF (Open Shortest Path First)",
      "EIGRP (Enhanced Interior Gateway Routing Protocol)",
      "BGP (Border Gateway Protocol)",
    ],
    correctAnswer: "RIP (Routing Information Protocol)",
  },

  {
    question:
      "What is the purpose of spanning tree protocol (STP) in a network with redundant links?",
    options: [
      "To prevent loops in the network",
      "To forward packets to other networks",
      "To regulate network traffic flow",
      "To provide physical layer connectivity",
    ],
    correctAnswer: "To prevent loops in the network",
  },

  {
    question: "What does a router use to make forwarding decisions?",
    options: ["Routing table", "MAC address", "IP address", "Subnet mask"],
    correctAnswer: "Routing table",
  },
  {
    question:
      "Which routing protocol uses cost as its metric for path selection?",
    options: [
      "OSPF (Open Shortest Path First)",
      "RIP (Routing Information Protocol)",
      "EIGRP (Enhanced Interior Gateway Routing Protocol)",
      "BGP (Border Gateway Protocol)",
    ],
    correctAnswer: "OSPF (Open Shortest Path First)",
  },

  {
    question: "What is the primary function of a Layer 3 switch?",
    options: [
      "To perform routing functions",
      "To forward frames based on MAC addresses",
      "To forward packets based on IP addresses",
      "To provide physical layer connectivity",
    ],
    correctAnswer: "To perform routing functions",
  },

  {
    question:
      "What is the main benefit of using dynamic routing protocols over static routing?",
    options: [
      "Automatic network adaptation to changes",
      "Higher security",
      "Lower latency",
      "Simpler configuration",
    ],
    correctAnswer: "Automatic network adaptation to changes",
  },

  {
    question:
      "Which switch forwarding method requires the switch to consult its MAC address table before forwarding frames?",
    options: [
      "Store-and-forward",
      "Cut-through",
      "Fragment-free",
      "Adaptive switching",
    ],
    correctAnswer: "Store-and-forward",
  },

  {
    question: "What is the primary function of a Layer 2 switch?",
    options: [
      "To forward frames based on MAC addresses",
      "To perform routing functions",
      "To forward packets based on IP addresses",
      "To provide physical layer connectivity",
    ],
    correctAnswer: "To forward frames based on MAC addresses",
  },

  {
    question:
      "Which routing protocol is commonly used for routing between autonomous systems?",
    options: [
      "BGP (Border Gateway Protocol)",
      "OSPF (Open Shortest Path First)",
      "RIP (Routing Information Protocol)",
      "EIGRP (Enhanced Interior Gateway Routing Protocol)",
    ],
    correctAnswer: "BGP (Border Gateway Protocol)",
  },

  {
    question:
      "What is the primary function of ARP (Address Resolution Protocol)?",
    options: [
      "To map IP addresses to MAC addresses",
      "To forward packets between different networks",
      "To translate domain names to IP addresses",
      "To assign IP addresses dynamically",
    ],
    correctAnswer: "To map IP addresses to MAC addresses",
  },

  {
    question:
      "Which routing protocol uses a hybrid approach, combining aspects of distance vector and link-state routing?",
    options: [
      "EIGRP (Enhanced Interior Gateway Routing Protocol)",
      "OSPF (Open Shortest Path First)",
      "RIP (Routing Information Protocol)",
      "BGP (Border Gateway Protocol)",
    ],
    correctAnswer: "EIGRP (Enhanced Interior Gateway Routing Protocol)",
  },

  {
    question:
      "What is the main purpose of VTP (VLAN Trunking Protocol) in a switched network?",
    options: [
      "To synchronize VLAN information between switches",
      "To perform routing functions",
      "To forward packets between different networks",
      "To translate domain names to IP addresses",
    ],
    correctAnswer: "To synchronize VLAN information between switches",
  },

  {
    question: "Which switching method has the lowest latency?",
    options: [
      "Cut-through",
      "Store-and-forward",
      "Fragment-free",
      "Adaptive switching",
    ],
    correctAnswer: "Cut-through",
  },
  {
    question:
      "What is the main purpose of HSRP (Hot Standby Router Protocol) or VRRP (Virtual Router Redundancy Protocol) in a network?",
    options: [
      "To provide redundancy for default gateway addresses",
      "To synchronize VLAN information between switches",
      "To forward packets between different networks",
      "To translate domain names to IP addresses",
    ],
    correctAnswer: "To provide redundancy for default gateway addresses",
  },

  {
    question:
      "Which routing protocol uses a vector-based metric that includes bandwidth, delay, load, reliability, and MTU?",
    options: [
      "EIGRP (Enhanced Interior Gateway Routing Protocol)",
      "OSPF (Open Shortest Path First)",
      "RIP (Routing Information Protocol)",
      "BGP (Border Gateway Protocol)",
    ],
    correctAnswer: "EIGRP (Enhanced Interior Gateway Routing Protocol)",
  },

  {
    question:
      "What is the primary function of ACLs (Access Control Lists) in a network?",
    options: [
      "To filter traffic based on source or destination IP addresses",
      "To synchronize VLAN information between switches",
      "To forward packets between different networks",
      "To translate domain names to IP addresses",
    ],
    correctAnswer:
      "To filter traffic based on source or destination IP addresses",
  },

  {
    question:
      "Which routing protocol is considered an interior gateway protocol (IGP)?",
    options: [
      "OSPF (Open Shortest Path First)",
      "BGP (Border Gateway Protocol)",
      "RIP (Routing Information Protocol)",
      "IS-IS (Intermediate System to Intermediate System)",
    ],
    correctAnswer: "OSPF (Open Shortest Path First)",
  },

  {
    question: "What is the purpose of port security on a switch?",
    options: [
      "To restrict access to a switch port based on MAC address",
      "To synchronize VLAN information between switches",
      "To forward packets between different networks",
      "To translate domain names to IP addresses",
    ],
    correctAnswer: "To restrict access to a switch port based on MAC address",
  },

  {
    question:
      "Which protocol is used by a router to inform its neighbors of the networks it can reach?",
    options: [
      "RIP (Routing Information Protocol)",
      "OSPF (Open Shortest Path First)",
      "BGP (Border Gateway Protocol)",
      "VTP (VLAN Trunking Protocol)",
    ],
    correctAnswer: "OSPF (Open Shortest Path First)",
  },

  {
    question: "What is the primary purpose of trunking in a switched network?",
    options: [
      "To carry traffic for multiple VLANs over a single link",
      "To synchronize VLAN information between switches",
      "To forward packets between different networks",
      "To translate domain names to IP addresses",
    ],
    correctAnswer: "To carry traffic for multiple VLANs over a single link",
  },

  {
    question: "Which layer of the OSI model do routers primarily operate at?",
    options: [
      "Network Layer (Layer 3)",
      "Data Link Layer (Layer 2)",
      "Transport Layer (Layer 4)",
      "Physical Layer (Layer 1)",
    ],
    correctAnswer: "Network Layer (Layer 3)",
  },

  {
    question: "What is the main purpose of DHCP Snooping on a switch?",
    options: [
      "To prevent unauthorized DHCP servers from assigning IP addresses",
      "To synchronize VLAN information between switches",
      "To forward packets between different networks",
      "To translate domain names to IP addresses",
    ],
    correctAnswer:
      "To prevent unauthorized DHCP servers from assigning IP addresses",
  },

  {
    question:
      "Which protocol is used for automatic assignment of IP addresses on a network?",
    options: [
      "DHCP (Dynamic Host Configuration Protocol)",
      "DNS (Domain Name System)",
      "FTP (File Transfer Protocol)",
      "HTTP (Hypertext Transfer Protocol)",
    ],
    correctAnswer: "DHCP (Dynamic Host Configuration Protocol)",
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
        <title>Route and Switch Quiz | Unstop Computer</title>
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
          href="https://unstopcomputer.tech/test/networking/route-and-switch"
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
          Route and Switch Quiz
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
