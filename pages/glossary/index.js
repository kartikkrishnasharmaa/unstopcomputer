import Head from "next/head";
import React, { useState } from "react";

const GlossaryTable = () => {
  const termsData = [
    {
      keyword: "Abstract Data Type (ADT)",
      description:
        "A mathematical model for data types that defines behavior without implementation details (e.g., Stack, Queue).",
    },
    {
      keyword: "Access Control",
      description:
        "Security policies restricting unauthorized access to systems/resources (e.g., RBAC, ACL).",
    },
    {
      keyword: "Accumulator",
      description:
        "CPU register storing intermediate arithmetic/logic results.",
    },
    {
      keyword: "Adder",
      description:
        "Digital circuit performing binary addition (Half-Adder, Full-Adder).",
    },
    {
      keyword: "Address Bus",
      description:
        "Hardware pathway carrying memory addresses between CPU and RAM.",
    },
    {
      keyword: "Adversarial AI",
      description:
        "Attacks manipulating ML models (e.g., adversarial examples).",
    },
    {
      keyword: "Agile Development",
      description: "Iterative software methodology (Scrum, Kanban).",
    },
    {
      keyword: "AJAX",
      description: "Asynchronous JavaScript/XML for dynamic web content.",
    },
    {
      keyword: "Algorithm",
      description:
        "Step-by-step problem-solving procedure (e.g., Dijkstra’s, Quicksort).",
    },
    {
      keyword: "Alpha Testing",
      description: "Initial software testing by internal teams.",
    },
    {
      keyword: "ALU (Arithmetic Logic Unit)",
      description: "CPU component performing calculations/bitwise operations.",
    },
    {
      keyword: "Amazon Web Services (AWS)",
      description: "Cloud computing platform (EC2, S3, Lambda).",
    },
    {
      keyword: "Analog Computer",
      description: "Processes continuous data (e.g., voltage, temperature).",
    },
    {
      keyword: "Android SDK",
      description: "Toolkit for building Android apps.",
    },
    {
      keyword: "Animation",
      description: "Rapid image sequencing to simulate motion.",
    },
    {
      keyword: "ANSI",
      description: "American National Standards Institute (e.g., ANSI C).",
    },
    {
      keyword: "API",
      description:
        "Application Programming Interface for software interaction.",
    },
    {
      keyword: "Applet",
      description: "Small Java application running in browsers (deprecated).",
    },
    {
      keyword: "Archiving",
      description: "Long-term data storage/compression (e.g., ZIP, TAR).",
    },
    {
      keyword: "ARP",
      description: "Address Resolution Protocol (maps IP to MAC).",
    },
    {
      keyword: "Array",
      description: "Fixed-size collection of same-type elements.",
    },
    {
      keyword: "Artificial Intelligence (AI)",
      description: "Machines mimicking human intelligence (ML, NLP, Robotics).",
    },
    {
      keyword: "Assembler",
      description: "Converts assembly language to machine code.",
    },
    {
      keyword: "Assembly Language",
      description: "Low-level programming using mnemonics (e.g., MOV, ADD).",
    },
    {
      keyword: "Asymmetric Encryption",
      description: "Public-key cryptography (e.g., RSA, ECC).",
    },
    {
      keyword: "Atomicity",
      description:
        "Database property ensuring transactions are all-or-nothing (ACID).",
    },
    {
      keyword: "Attribute",
      description: "Data field in OOP or databases (e.g., class properties).",
    },
    {
      keyword: "Authentication",
      description: "Verifying user identity (e.g., passwords, OTP).",
    },
    {
      keyword: "Authorization",
      description: "Granting resource access post-authentication.",
    },
    {
      keyword: "Autocomplete",
      description:
        "UI feature predicting user input (e.g., search suggestions).",
    },
    {
      keyword: "Automata Theory",
      description: "Study of abstract machines (DFA, NFA, Turing Machines).",
    },
    {
      keyword: "AVL Tree",
      description: "Self-balancing binary search tree.",
    },
    {
      keyword: "A* Algorithm",
      description: "Pathfinding algorithm using heuristics.",
    },
    {
      keyword: "Abstraction",
      description:
        "Hiding complexity while exposing essentials (OOP principle).",
    },
    {
      keyword: "Active Directory",
      description: "Microsoft’s directory service for network management.",
    },
    {
      keyword: "Actor Model",
      description: "Concurrency framework (e.g., Akka, Erlang).",
    },
    {
      keyword: "Adaptive Software",
      description: "Programs adjusting behavior based on environment.",
    },
    {
      keyword: "Adjacency Matrix",
      description: "Graph representation using a 2D array.",
    },
    {
      keyword: "Affine Transformation",
      description: "Linear mapping in graphics (rotation, scaling).",
    },
    {
      keyword: "Agent-Based Modeling",
      description: "Simulating autonomous agents (e.g., traffic systems).",
    },
    {
      keyword: "Ambient Intelligence",
      description: "Smart environments reacting to human presence.",
    },
    {
      keyword: "Apache Hadoop",
      description: "Framework for distributed big data processing.",
    },
    {
      keyword: "Augmented Reality (AR)",
      description: "Overlaying digital content on real-world views.",
    },
    {
      keyword: "Backend",
      description:
        "The server-side part of an application that handles logic, databases, and APIs.",
    },
    {
      keyword: "Backpropagation",
      description:
        "An algorithm used in training neural networks to calculate gradients for weight updates.",
    },
    {
      keyword: "Backup",
      description:
        "The process of copying data to restore it in case of loss or corruption.",
    },
    {
      keyword: "Bandwidth",
      description:
        "The maximum data transfer rate of a network or internet connection, measured in bits per second (bps).",
    },
    {
      keyword: "Base Case",
      description:
        "The terminating condition in a recursive function that stops further recursion.",
    },
    {
      keyword: "Batch Processing",
      description:
        "Executing a series of jobs (data/commands) without manual intervention, often scheduled.",
    },
    {
      keyword: "Behavioral Model",
      description:
        "A design pattern focusing on communication between objects (e.g., Observer, Strategy).",
    },
    {
      keyword: "Big O Notation",
      description:
        "A mathematical notation describing the upper bound of an algorithm's time/space complexity.",
    },
    {
      keyword: "Binary Search",
      description:
        "An efficient O(log n) search algorithm for sorted arrays by repeatedly dividing the interval.",
    },
    {
      keyword: "Binary Tree",
      description:
        "A tree data structure where each node has at most two children (left and right).",
    },
    {
      keyword: "Bit",
      description:
        "The smallest unit of data in computing, representing a binary value (0 or 1).",
    },
    {
      keyword: "Blockchain",
      description:
        "A decentralized, distributed ledger technology for secure transactions (e.g., Bitcoin, Ethereum).",
    },
    {
      keyword: "Boolean",
      description: "A data type with two values: true or false.",
    },
    {
      keyword: "Bootstrap",
      description:
        "A front-end framework for responsive web design using HTML/CSS/JS.",
    },
    {
      keyword: "Botnet",
      description:
        "A network of compromised devices controlled by malware for DDoS attacks or spam.",
    },
    {
      keyword: "Branch",
      description:
        "A divergence in code execution (e.g., in version control or CPU pipelines).",
    },
    {
      keyword: "Breadth-First Search (BFS)",
      description:
        "A graph traversal algorithm exploring all neighbor nodes at the present depth before moving deeper.",
    },
    {
      keyword: "Buffer",
      description:
        "A temporary memory area storing data during transfer between processes/devices.",
    },
    {
      keyword: "Bug",
      description: "An error or flaw in software causing unexpected behavior.",
    },
    {
      keyword: "Bus",
      description:
        "A communication system transferring data between computer components (e.g., USB, PCI).",
    },
    {
      keyword: "Byte",
      description:
        "A unit of data equal to 8 bits, representing a single character (e.g., 'A' = 65 in ASCII).",
    },
    {
      keyword: "Bytecode",
      description:
        "Intermediate code executed by virtual machines (e.g., Java JVM, Python PVM).",
    },
    {
      keyword: "Cache",
      description:
        "A high-speed data storage layer that stores a subset of data for faster access.",
    },
    {
      keyword: "Call Stack",
      description:
        "A stack data structure that stores information about active subroutines in a program.",
    },
    {
      keyword: "Compiler",
      description:
        "A program that translates source code written in a high-level language into machine code.",
    },
    {
      keyword: "Cryptography",
      description:
        "The practice of secure communication techniques to protect information from adversaries.",
    },
    {
      keyword: "CSS (Cascading Style Sheets)",
      description:
        "A stylesheet language used to describe the presentation of a document written in HTML.",
    },
    {
      keyword: "CPU (Central Processing Unit)",
      description:
        "The electronic circuitry that executes instructions comprising a computer program.",
    },
    {
      keyword: "Cloud Computing",
      description:
        "The delivery of computing services over the internet ('the cloud') including servers, storage, databases, etc.",
    },
    {
      keyword: "Cybersecurity",
      description:
        "The practice of protecting systems, networks, and programs from digital attacks.",
    },
    {
      keyword: "Concurrency",
      description:
        "The ability of different parts or units of a program to be executed out-of-order or in partial order.",
    },
    {
      keyword: "Cookie",
      description:
        "A small piece of data sent from a website and stored on the user's computer by the web browser.",
    },
    {
      keyword: "CAP Theorem",
      description:
        "A concept that a distributed system can only provide 2 of 3 guarantees: Consistency, Availability, and Partition tolerance.",
    },
    {
      keyword: "CI/CD (Continuous Integration/Continuous Deployment)",
      description:
        "A method to frequently deliver apps by introducing automation into the stages of app development.",
    },
    {
      keyword: "C++",
      description:
        "A general-purpose programming language created as an extension of the C programming language.",
    },
    {
      keyword: "C#",
      description:
        "A general-purpose, multi-paradigm programming language encompassing strong typing and object-oriented programming.",
    },
    {
      keyword: "Command Line Interface (CLI)",
      description:
        "A text-based interface used to interact with software and operating systems.",
    },
    {
      keyword: "Client-Server Model",
      description:
        "A distributed application structure that partitions tasks between providers (servers) and requesters (clients).",
    },
    {
      keyword: "Computer Vision",
      description:
        "A field of artificial intelligence that trains computers to interpret and understand the visual world.",
    },
    {
      keyword: "Chatbot",
      description:
        "A software application used to conduct an online chat conversation via text or text-to-speech.",
    },
    {
      keyword: "Clustering",
      description:
        "A machine learning technique that groups similar data points together.",
    },
    {
      keyword: "Checksum",
      description:
        "A small-sized datum derived from a block of digital data for detecting errors.",
    },
    {
      keyword: "Cross-Platform",
      description:
        "Software that can run on multiple computing platforms with minimal modifications.",
    },
    {
      keyword: "Cron Job",
      description: "A time-based job scheduler in Unix-like operating systems.",
    },
    {
      keyword: "Content Delivery Network (CDN)",
      description:
        "A geographically distributed network of proxy servers and their data centers.",
    },
    {
      keyword: "Cyclomatic Complexity",
      description:
        "A software metric used to indicate the complexity of a program.",
    },
    {
      keyword: "Caching",
      description:
        "The process of storing copies of files in a cache for quicker access.",
    },
    {
      keyword: "Containerization",
      description:
        "A lightweight alternative to full machine virtualization that involves encapsulating an application in a container.",
    },
    {
      keyword: "Code Review",
      description:
        "A systematic examination of computer source code intended to find and fix mistakes overlooked in development.",
    },
    {
      keyword: "Cache Coherence",
      description:
        "The uniformity of shared resource data that ends up stored in multiple local caches.",
    },
    {
      keyword: "Closure",
      description:
        "A function that has access to its own scope, the outer function's variables, and global variables.",
    },
    {
      keyword: "CORS (Cross-Origin Resource Sharing)",
      description:
        "A mechanism that allows restricted resources on a web page to be requested from another domain.",
    },
    {
      keyword: "Cipher",
      description: "An algorithm for performing encryption or decryption.",
    },
    {
      keyword: "CRUD (Create, Read, Update, Delete)",
      description:
        "The four basic functions of persistent storage in database applications.",
    },
    {
      keyword: "Context Switch",
      description:
        "The process of storing the state of a process or thread so that it can be restored and execution resumed later.",
    },
    {
      keyword: "Continuous Integration",
      description:
        "The practice of merging all developers' working copies to a shared mainline several times a day.",
    },
    {
      keyword: "Cyberattack",
      description:
        "An attempt to damage, disrupt, or gain unauthorized access to a computer system or network.",
    },
    {
      keyword: "Caching",
      description:
        "The process of storing copies of files in a cache for quicker access.",
    },
    {
      keyword: "Clustering",
      description:
        "A machine learning technique that groups similar data points together.",
    },
    {
      keyword: "Cybernetics",
      description:
        "The science of communications and automatic control systems in both machines and living things.",
    },
    {
      keyword: "Code Refactoring",
      description:
        "The process of restructuring existing computer code without changing its external behavior.",
    },
    {
      keyword: "Convolutional Neural Network (CNN)",
      description:
        "A class of deep neural networks, most commonly applied to analyzing visual imagery.",
    },
    {
      keyword: "Cryptocurrency",
      description:
        "A digital currency in which transactions are verified and records maintained by a decentralized system.",
    },
    {
      keyword: "Cyber-Physical Systems",
      description:
        "Systems that integrate computation, networking, and physical processes.",
    },
    {
      keyword: "Content Management System (CMS)",
      description:
        "A software application used to create and manage digital content.",
    },
    {
      keyword: "Computational Complexity",
      description:
        "A branch of computer science that focuses on classifying computational problems according to their difficulty.",
    },
    {
      keyword: "Computer Architecture",
      description:
        "The set of rules and methods that describe the functionality, organization, and implementation of computer systems.",
    },
    {
      keyword: "Cyberspace",
      description:
        "The notional environment in which communication over computer networks occurs.",
    },
    {
      keyword: "Coding Standards",
      description:
        "A set of guidelines for a specific programming language that recommend programming style, practices, and methods.",
    },
    {
      keyword: "Cellular Automaton",
      description:
        "A discrete model studied in computability theory, mathematics, physics, complexity science, theoretical biology.",
    },
    {
      keyword: "Cyber Warfare",
      description:
        "The use of digital attacks to attack a nation, causing comparable harm to actual warfare.",
    },
    {
      keyword: "Code Obfuscation",
      description:
        "The deliberate act of creating source or machine code that is difficult for humans to understand.",
    },
    {
      keyword: "Cascading Failure",
      description:
        "A failure in a system of interconnected parts where the failure of one part can trigger the failure of successive parts.",
    },
    {
      keyword: "Computational Thinking",
      description:
        "A problem-solving process that includes formulating problems, logically organizing data, and representing data through abstractions.",
    },
    {
      keyword: "Cloud Storage",
      description:
        "A model of computer data storage in which the digital data is stored in logical pools across multiple servers.",
    },
    {
      keyword: "Cyber Hygiene",
      description:
        "Basic steps and practices that users can take to improve their cybersecurity.",
    },
    {
      keyword: "Computer Network",
      description:
        "A set of computers connected together for the purpose of sharing resources.",
    },
    {
      keyword: "Circuit Switching",
      description:
        "A method of implementing a telecommunications network in which two network nodes establish a dedicated communications channel.",
    },
    {
      keyword: "Coding Theory",
      description:
        "The study of the properties of codes and their fitness for a specific application.",
    },
    {
      keyword: "Cyber Threat Intelligence",
      description:
        "Information about threats and threat actors that helps mitigate harmful events in cyberspace.",
    },
    {
      keyword: "Cluster Analysis",
      description:
        "The task of grouping a set of objects in such a way that objects in the same group are more similar to each other.",
    },
    {
      keyword: "Computational Biology",
      description:
        "The science of using biological data to develop algorithms and models to understand biological systems.",
    },
    {
      keyword: "Cyber Resilience",
      description:
        "The ability of a system to anticipate, withstand, recover from, and adapt to adverse conditions, stresses, or attacks.",
    },
    {
      keyword: "Context-Free Grammar",
      description:
        "A formal grammar where production rules are of the form A → α, where A is a nonterminal and α is a string of terminals and/or nonterminals.",
    },
    {
      keyword: "Cyber-Physical Security",
      description:
        "The protection of cyber-physical systems from malicious attacks.",
    },
    {
      keyword: "Concurrent Computing",
      description:
        "A form of computing in which several computations are executed during overlapping time periods.",
    },
    {
      keyword: "Code Smell",
      description:
        "Any characteristic in the source code of a program that possibly indicates a deeper problem.",
    },
    {
      keyword: "Cyber Insurance",
      description:
        "An insurance product used to protect businesses from Internet-based risks.",
    },
    {
      keyword: "Computer Vision Syndrome",
      description:
        "A condition resulting from focusing the eyes on a computer display for extended periods.",
    },
    {
      keyword: "Cyber Law",
      description:
        "The legal issues related to use of communications technology, particularly cyberspace.",
    },
    {
      keyword: "Cloud Security",
      description:
        "The set of policies, technologies, and controls deployed to protect data and infrastructure in cloud computing.",
    },
    {
      keyword: "Computational Geometry",
      description:
        "A branch of computer science devoted to the study of algorithms which can be stated in terms of geometry.",
    },
    {
      keyword: "Cyber Espionage",
      description:
        "The use of computer networks to gain illicit access to confidential information.",
    },
    {
      keyword: "Contextual Bandit",
      description:
        "A machine learning algorithm that selects actions based on contextual information.",
    },
    {
      keyword: "Cyber Forensics",
      description:
        "The practice of identifying, acquiring, processing, analyzing, and reporting on data stored electronically.",
    },
    {
      keyword: "Computational Linguistics",
      description:
        "The scientific study of language from a computational perspective.",
    },
    {
      keyword: "Cyber Range",
      description:
        "A virtual environment used for cybersecurity training and simulations.",
    },
    {
      keyword: "Cognitive Computing",
      description:
        "Systems that learn at scale, reason with purpose, and interact with humans naturally.",
    },
    {
      keyword: "Cyber Risk Management",
      description:
        "The process of identifying, assessing, and prioritizing risks to information and information systems.",
    },
    {
      keyword: "Computational Neuroscience",
      description:
        "The study of brain function in terms of the information processing properties of the structures that make up the nervous system.",
    },
    {
      keyword: "Cyber Threat Hunting",
      description:
        "The practice of proactively searching for cyber threats that are lurking undetected in a network.",
    },
    {
      keyword: "Context-Aware Computing",
      description:
        "A computing paradigm that uses context to provide relevant information and services to the user.",
    },
    {
      keyword: "Cyber-Physical Attack",
      description:
        "A security breach in cyberspace that impacts operations in the physical world.",
    },
    {
      keyword: "Computational Physics",
      description:
        "The study and implementation of numerical analysis to solve problems in physics.",
    },
    {
      keyword: "Cyber Threat Modeling",
      description:
        "A process by which potential threats can be identified, enumerated, and prioritized.",
    },
    {
      keyword: "Contextual Advertising",
      description:
        "A form of targeted advertising for advertisements appearing on websites or other media.",
    },
    {
      keyword: "Cyber-Physical Interface",
      description:
        "The boundary between the cyber and physical worlds where interactions occur.",
    },
    {
      keyword: "Computational Social Science",
      description:
        "The academic sub-discipline concerned with computational approaches to the social sciences.",
    },
    {
      keyword: "Cyber Threat Intelligence Sharing",
      description:
        "The exchange of information about cyber threats between organizations.",
    },
    {
      keyword: "Contextual Inquiry",
      description:
        "A user-centered design research method that involves observing and interviewing users in their natural environment.",
    },
    {
      keyword: "Cyber-Physical Simulation",
      description:
        "The simulation of systems that integrate computation, networking, and physical processes.",
    },
    {
      keyword: "Computational Sustainability",
      description:
        "The application of computational techniques to sustainable development.",
    },
    {
      keyword: "Cyber Threat Intelligence Platform",
      description:
        "A technology solution that aggregates, correlates, and analyzes threat intelligence data.",
    },
    {
      keyword: "Contextual Design",
      description:
        "A user-centered design process that uses contextual inquiry as its primary research method.",
    },
    {
      keyword: "Cyber-Physical Testbed",
      description: "A platform for experimenting with cyber-physical systems.",
    },
    {
      keyword: "Computational Topology",
      description:
        "The study of topological features of data from a computational perspective.",
    },
    {
      keyword: "Cyber Threat Intelligence Feed",
      description:
        "A stream of data containing information about cyber threats.",
    },
    {
      keyword: "Contextual Bandit Problem",
      description:
        "A machine learning problem where an algorithm must select actions based on contextual information.",
    },
    {
      keyword: "Cyber-Physical Security Exercise",
      description:
        "A training exercise focused on securing cyber-physical systems.",
    },
    {
      keyword: "Computational Typology",
      description: "The computational study of language typology.",
    },
    {
      keyword: "Cyber Threat Intelligence Analyst",
      description:
        "A professional who analyzes cyber threat intelligence data.",
    },
    {
      keyword: "Contextual Bandit Algorithm",
      description:
        "A machine learning algorithm that solves the contextual bandit problem.",
    },
    {
      keyword: "Cyber-Physical Security Assessment",
      description: "An evaluation of the security of a cyber-physical system.",
    },
    {
      keyword: "Computational Verification",
      description: "The use of computers to verify mathematical proofs.",
    },
    {
      keyword: "Cyber Threat Intelligence Framework",
      description:
        "A structured approach to collecting, analyzing, and disseminating cyber threat intelligence.",
    },
    {
      keyword: "Contextual Bandit Model",
      description:
        "A machine learning model that implements a contextual bandit algorithm.",
    },
    {
      keyword: "Cyber-Physical Security Framework",
      description: "A structured approach to securing cyber-physical systems.",
    },
    {
      keyword: "Computational Virology",
      description: "The use of computers to study viruses.",
    },
    {
      keyword: "Cyber Threat Intelligence Lifecycle",
      description:
        "The process by which cyber threat intelligence is collected, analyzed, and acted upon.",
    },
    {
      keyword: "Contextual Bandit Problem",
      description:
        "A machine learning problem where an algorithm must select actions based on contextual information.",
    },
    {
      keyword: "Cyber-Physical Security Policy",
      description:
        "A set of rules and procedures for securing cyber-physical systems.",
    },
    {
      keyword: "Computational Vision",
      description:
        "The use of computers to process and understand visual information.",
    },
    {
      keyword: "Cyber Threat Intelligence Platform",
      description:
        "A technology solution that aggregates, correlates, and analyzes threat intelligence data.",
    },
    {
      keyword: "Contextual Bandit Solution",
      description: "A method for solving the contextual bandit problem.",
    },
    {
      keyword: "Cyber-Physical Security Standard",
      description: "A set of criteria for securing cyber-physical systems.",
    },
    {
      keyword: "Computational Zoology",
      description: "The use of computers to study animals.",
    },
    {
      keyword: "Cyber Threat Intelligence Process",
      description:
        "The steps involved in collecting, analyzing, and acting on cyber threat intelligence.",
    },
    {
      keyword: "Contextual Bandit System",
      description:
        "A machine learning system that implements a contextual bandit algorithm.",
    },
    {
      keyword: "Cyber-Physical Security Training",
      description:
        "Education and exercises focused on securing cyber-physical systems.",
    },
    {
      keyword: "Computational Zoology",
      description: "The use of computers to study animals.",
    },
    {
      keyword: "Cyber Threat Intelligence Sharing",
      description:
        "The exchange of information about cyber threats between organizations.",
    },
    {
      keyword: "Contextual Bandit Technique",
      description: "A method for implementing a contextual bandit algorithm.",
    },
    {
      keyword: "Cyber-Physical Security Tool",
      description:
        "Software or hardware used to secure cyber-physical systems.",
    },
    {
      keyword: "Computational Zoology",
      description: "The use of computers to study animals.",
    },
    {
      keyword: "Cyber Threat Intelligence Sharing Platform",
      description:
        "A technology solution that facilitates the exchange of cyber threat intelligence.",
    },
    {
      keyword: "Contextual Bandit Theory",
      description:
        "The mathematical foundation of contextual bandit algorithms.",
    },
    {
      keyword: "Cyber-Physical Security Vulnerability",
      description:
        "A weakness in a cyber-physical system that could be exploited by a threat actor.",
    },
    {
      keyword: "Computational Zoology",
      description: "The use of computers to study animals.",
    },
    {
      keyword: "Cyber Threat Intelligence Sharing Protocol",
      description:
        "A standardized method for exchanging cyber threat intelligence.",
    },
    {
      keyword: "Contextual Bandit Variant",
      description: "A modified version of the contextual bandit problem.",
    },
    {
      keyword: "Cyber-Physical Security Workshop",
      description:
        "A meeting or training session focused on securing cyber-physical systems.",
    },
    {
      keyword: "Computational Zoology",
      description: "The use of computers to study animals.",
    },
    {
      keyword: "Cyber Threat Intelligence Sharing Standard",
      description:
        "A set of criteria for exchanging cyber threat intelligence.",
    },
    {
      keyword: "Contextual Bandit Application",
      description: "A practical use of contextual bandit algorithms.",
    },
    {
      keyword: "Cyber-Physical Security Exercise",
      description:
        "A training exercise focused on securing cyber-physical systems.",
    },
    {
      keyword: "Computational Zoology",
      description: "The use of computers to study animals.",
    },
    {
      keyword: "Cyber Threat Intelligence Sharing Framework",
      description:
        "A structured approach to exchanging cyber threat intelligence.",
    },
    {
      keyword: "Contextual Bandit Implementation",
      description: "A specific way of coding a contextual bandit algorithm.",
    },
    {
      keyword: "Cyber-Physical Security Assessment",
      description: "An evaluation of the security of a cyber-physical system.",
    },
    {
      keyword: "Computational Zoology",
      description: "The use of computers to study animals.",
    },
    {
      keyword: "Cyber Threat Intelligence Sharing Process",
      description:
        "The steps involved in exchanging cyber threat intelligence.",
    },
    {
      keyword: "Contextual Bandit Performance",
      description: "The effectiveness of a contextual bandit algorithm.",
    },
    {
      keyword: "Cyber-Physical Security Policy",
      description:
        "A set of rules and procedures for securing cyber-physical systems.",
    },
    {
      keyword: "Computational Zoology",
      description: "The use of computers to study animals.",
    },
    {
      keyword: "Cyber Threat Intelligence Sharing Standard",
      description:
        "A set of criteria for exchanging cyber threat intelligence.",
    },
    {
      keyword: "Contextual Bandit Optimization",
      description:
        "The process of improving the performance of a contextual bandit algorithm.",
    },
    {
      keyword: "Cyber-Physical Security Standard",
      description: "A set of criteria for securing cyber-physical systems.",
    },
    {
      keyword: "Computational Zoology",
      description: "The use of computers to study animals.",
    },
    {
      keyword: "Cyber Threat Intelligence Sharing Framework",
      description:
        "A structured approach to exchanging cyber threat intelligence.",
    },
    {
      keyword: "Contextual Bandit Evaluation",
      description:
        "The process of assessing the performance of a contextual bandit algorithm.",
    },
    {
      keyword: "Cyber-Physical Security Framework",
      description: "A structured approach to securing cyber-physical systems.",
    },
    {
      keyword: "Computational Zoology",
      description: "The use of computers to study animals.",
    },
    {
      keyword: "Cyber Threat Intelligence Sharing Protocol",
      description:
        "A standardized method for exchanging cyber threat intelligence.",
    },
    {
      keyword: "Contextual Bandit Analysis",
      description:
        "The examination of a contextual bandit algorithm's behavior.",
    },
    {
      keyword: "Cyber-Physical Security Tool",
      description:
        "Software or hardware used to secure cyber-physical systems.",
    },
      {
          "keyword": "Database",
          "description": "An organized collection of structured data stored electronically in a computer system."
      },
      {
          "keyword": "Data Structure",
          "description": "A specialized format for organizing, processing, retrieving and storing data (e.g., arrays, linked lists)."
      },
      {
          "keyword": "Debugging",
          "description": "The process of identifying and removing errors from computer hardware or software."
      },
      {
          "keyword": "Deep Learning",
          "description": "A subset of machine learning using artificial neural networks with multiple abstraction layers."
      },
      {
          "keyword": "DNS (Domain Name System)",
          "description": "The hierarchical naming system that translates domain names to IP addresses."
      },
      {
          "keyword": "Distributed System",
          "description": "A system whose components are located on networked computers that communicate to achieve a common goal."
      },
      {
          "keyword": "Docker",
          "description": "A platform for developing, shipping, and running applications in containers."
      },
      {
          "keyword": "Data Mining",
          "description": "The process of discovering patterns in large datasets using machine learning, statistics, and database systems."
      },
      {
          "keyword": "Dijkstra's Algorithm",
          "description": "An algorithm for finding the shortest paths between nodes in a graph."
      },
      {
          "keyword": "Dynamic Programming",
          "description": "A method for solving complex problems by breaking them down into simpler subproblems."
      },
      {
          "keyword": "Data Warehouse",
          "description": "A central repository of integrated data from one or more disparate sources."
      },
      {
          "keyword": "DevOps",
          "description": "A set of practices combining software development (Dev) and IT operations (Ops)."
      },
      {
          "keyword": "Digital Signature",
          "description": "A mathematical scheme for verifying the authenticity of digital messages or documents."
      },
      {
          "keyword": "DDoS (Distributed Denial of Service)",
          "description": "A cyberattack where multiple systems flood a target's resources to disrupt service."
      },
      {
          "keyword": "Dart",
          "description": "A client-optimized programming language developed by Google for building mobile, desktop and web apps."
      },
      {
          "keyword": "Data Science",
          "description": "An interdisciplinary field using scientific methods to extract knowledge from structured/unstructured data."
      },
      {
          "keyword": "Dependency Injection",
          "description": "A design pattern where an object receives other objects it depends on (inversion of control)."
      },
      {
          "keyword": "Django",
          "description": "A high-level Python web framework encouraging rapid development and clean design."
      },
      {
          "keyword": "Docker Compose",
          "description": "A tool for defining and running multi-container Docker applications."
      },
      {
          "keyword": "Data Lake",
          "description": "A storage repository holding vast amounts of raw data in native format."
      },
      {
          "keyword": "Dual Stack",
          "description": "A networking architecture allowing hosts to simultaneously communicate via IPv4 and IPv6."
      },
      {
          "keyword": "Deadlock",
          "description": "A situation where processes block each other by holding resources needed by another."
      },
      {
          "keyword": "DynamoDB",
          "description": "Amazon's fully managed NoSQL database service."
      },
      {
          "keyword": "Data Modeling",
          "description": "The process of creating a data model for an information system."
      },
      {
          "keyword": "Design Pattern",
          "description": "A general reusable solution to commonly occurring problems in software design."
      },
      {
          "keyword": "Dart VM",
          "description": "The virtual machine that executes Dart code and provides runtime support."
      },
      {
          "keyword": "Data Pipeline",
          "description": "A set of data processing elements connected in series for automated data flow."
      },
      {
          "keyword": "Differential Privacy",
          "description": "A system for publicly sharing data while withholding information about individuals."
      },
      {
          "keyword": "Directive (Programming)",
          "description": "A language construct specifying how a compiler should process input (e.g., #include in C)."
      },
      {
          "keyword": "Domain-Driven Design (DDD)",
          "description": "An approach to software development focusing on complex needs by connecting implementation to an evolving model."
      },
      {
          "keyword": "Data Governance",
          "description": "The overall management of availability, usability, integrity, and security of enterprise data."
      },
      {
          "keyword": "Dependency Graph",
          "description": "A directed graph representing dependencies of several objects toward each other."
      },
      {
          "keyword": "Deterministic Algorithm",
          "description": "An algorithm that, given a particular input, will always produce the same output."
      },
      {
          "keyword": "Durable (ACID)",
          "description": "A database property where committed transactions persist even after system failures."
      },
      {
          "keyword": "Data Integrity",
          "description": "The maintenance and assurance of data accuracy and consistency over its lifecycle."
      },
      {
          "keyword": "Datalog",
          "description": "A declarative logic programming language for querying databases."
      },
      {
          "keyword": "Declarative Programming",
          "description": "A paradigm expressing the logic of computation without describing control flow (e.g., SQL)."
      },
      {
          "keyword": "Docker Swarm",
          "description": "Docker's native clustering and orchestration tool."
      },
      {
          "keyword": "Dataframe",
          "description": "A 2D labeled data structure with columns of potentially different types (Pandas, R)."
      },
      {
          "keyword": "Dynamic Typing",
          "description": "A language feature where type checking is performed at runtime (e.g., Python, JavaScript)."
      },
      {
          "keyword": "Denormalization",
          "description": "A database optimization technique adding redundant data to improve read performance."
      },
      {
          "keyword": "Dual Core",
          "description": "A CPU with two complete execution cores per physical processor."
      },
      {
          "keyword": "Data Dictionary",
          "description": "A centralized repository of information about data such as meaning, relationships, origin, usage."
      },
      {
          "keyword": "Dimensional Modeling",
          "description": "A data structure technique optimized for data warehousing tools."
      },
      {
          "keyword": "Duck Typing",
          "description": "A style of dynamic typing where an object's suitability is determined by presence of methods/properties."
      },
      {
          "keyword": "Dockerfile",
          "description": "A text document containing commands to assemble a Docker image."
      },
      {
          "keyword": "Data Cleansing",
          "description": "The process of detecting and correcting corrupt or inaccurate records from datasets."
      },
      {
          "keyword": "Depth-First Search (DFS)",
          "description": "A graph traversal algorithm exploring as far as possible along each branch before backtracking."
      },
      {
          "keyword": "Deployment",
          "description": "The activities making a software system available for use."
      },
      {
          "keyword": "Data Serialization",
          "description": "The process of converting data structures into a storable/transmittable format (e.g., JSON, Protocol Buffers)."
      },
      {
          "keyword": "DMA (Direct Memory Access)",
          "description": "A feature allowing hardware subsystems to access memory independently of the CPU."
      },
      {
          "keyword": "Data Federation",
          "description": "An approach integrating multiple databases into a virtual database."
      },
      {
          "keyword": "Dart Native",
          "description": "Dart code compiled to native machine code for mobile/desktop apps."
      },
      {
          "keyword": "Discrete Mathematics",
          "description": "Mathematical structures fundamentally discrete rather than continuous (essential for CS)."
      },
      {
          "keyword": "Data Replication",
          "description": "The process of storing data in multiple locations to improve availability and fault tolerance."
      },
      {
          "keyword": "Dependency Management",
          "description": "Tools and processes for handling external libraries/packages a project relies on."
      },
      {
          "keyword": "Dart Web",
          "description": "Dart code compiled to JavaScript for web applications."
      },
      {
          "keyword": "Data Masking",
          "description": "A technique creating structurally similar but inauthentic data for privacy protection."
      },
      {
          "keyword": "Deterministic Finite Automaton (DFA)",
          "description": "A finite state machine accepting/rejecting strings of symbols by running through a state sequence."
      },
      {
          "keyword": "Data Wrangling",
          "description": "The process of cleaning, structuring, and enriching raw data into a desired format."
      },
      {
          "keyword": "Docker Hub",
          "description": "A cloud-based registry service for sharing Docker container images."
      },
      {
          "keyword": "Data Parallelism",
          "description": "A form of parallel computing where the same operation is performed on multiple data simultaneously."
      },
      {
          "keyword": "Dual Boot",
          "description": "A configuration where a computer has two operating systems and can boot into either."
      },
      {
          "keyword": "Data Visualization",
          "description": "The graphical representation of information and data (e.g., charts, graphs)."
      },
      {
          "keyword": "Dart Isolate",
          "description": "A lightweight thread in Dart's concurrency model with its own memory heap."
      },
      {
          "keyword": "Data Normalization",
          "description": "The process of structuring a database to reduce redundancy and improve integrity."
      },
      {
          "keyword": "Dynamic Link Library (DLL)",
          "description": "Microsoft's implementation of shared libraries in Windows."
      },
      {
          "keyword": "Data Sovereignty",
          "description": "The concept that digital data is subject to laws of the country where it's located."
      },
      {
          "keyword": "Dart FFI (Foreign Function Interface)",
          "description": "A mechanism for Dart code to call native C code."
      },
      {
          "keyword": "Data Mesh",
          "description": "A decentralized architecture for data management and organizational scaling."
      },
      {
          "keyword": "Domain Name",
          "description": "A human-readable web address (e.g., google.com) mapped to an IP address via DNS."
      },
      {
          "keyword": "Dart Analyzer",
          "description": "A static analysis tool for Dart code that identifies errors and warnings."
      },
      {
          "keyword": "Data Annotation",
          "description": "The process of labeling data to make it usable for machine learning."
      },
      {
          "keyword": "Dynamic Host Configuration Protocol (DHCP)",
          "description": "A network protocol automatically assigning IP addresses to devices."
      },
      {
          "keyword": "Data Stream",
          "description": "A continuous flow of data records processed incrementally."
      },
      {
          "keyword": "Dart Pub",
          "description": "Dart's package manager for sharing and using libraries."
      },
      {
          "keyword": "Data Quality",
          "description": "The measure of data's fitness to serve its purpose in a given context."
      },
      {
          "keyword": "Digital Twin",
          "description": "A virtual representation serving as the real-time digital counterpart of a physical object."
      },
      {
          "keyword": "Dart Test",
          "description": "Dart's built-in testing framework."
      },
      {
          "keyword": "Data Fabric",
          "description": "An architecture and set of services providing consistent capabilities across hybrid multi-cloud environments."
      },
      {
          "keyword": "Demultiplexer (Demux)",
          "description": "A circuit taking a single input and selecting one of many outputs."
      },
      {
          "keyword": "Dart Formatter",
          "description": "A tool that automatically formats Dart code according to style guidelines."
      },
      {
          "keyword": "Data Deduplication",
          "description": "A technique eliminating duplicate copies of repeating data to improve storage efficiency."
      },
      {
          "keyword": "Docker Volume",
          "description": "A mechanism for persisting data generated by Docker containers."
      },
      {
          "keyword": "Dart Doc",
          "description": "Dart's documentation generator that creates API reference docs from code comments."
      },
      {
          "keyword": "Data Virtualization",
          "description": "An approach allowing applications to retrieve and manipulate data without technical details."
      },
      {
          "keyword": "Dart Build System",
          "description": "A system for transforming and generating Dart code during development."
      },
      {
          "keyword": "Data Lineage",
          "description": "The lifecycle of data including origins, movements, characteristics, and transformations."
      },
      {
          "keyword": "Dart Native Extensions",
          "description": "A mechanism for extending Dart's capabilities with platform-specific code."
      },
      {
          "keyword": "DataOps",
          "description": "A collaborative data management practice improving communication between data teams."
      },
      {
          "keyword": "Dart Observatory",
          "description": "A profiling and debugging tool for Dart applications."
      },
      {
          "keyword": "Data Profiling",
          "description": "The process of examining data for completeness, accuracy, and consistency."
      },
      {
          "keyword": "Dart Code Metrics",
          "description": "Tools for analyzing Dart code quality and maintainability."
      },
      {
          "keyword": "Data Retention",
          "description": "Policies determining how long data should be stored before deletion."
      },
      {
          "keyword": "Dart DevTools",
          "description": "A suite of performance tools for Dart and Flutter development."
      },
      {
          "keyword": "Data Synchronization",
          "description": "The process of establishing consistency among data across different systems."
      },
      {
          "keyword": "Dart Fix",
          "description": "A tool for automatically applying fixes to Dart code based on analyzer suggestions."
      },
      {
          "keyword": "Data Transformation",
          "description": "The process of converting data from one format/structure to another."
      },
      {
          "keyword": "Dart Linter",
          "description": "A static analysis tool enforcing coding standards in Dart projects."
      },
      {
          "keyword": "Data Validation",
          "description": "The process of ensuring data is clean, correct, and useful."
      },
      {
          "keyword": "Dart Native Assets",
          "description": "A mechanism for bundling platform-specific resources with Dart applications."
      },
      {
          "keyword": "Data Versioning",
          "description": "The practice of tracking and managing changes to datasets over time."
      },
      {
          "keyword": "Dart Platform Interface",
          "description": "A design pattern for writing platform-agnostic Dart code with platform-specific implementations."
      },
      {
          "keyword": "Data Vault",
          "description": "A data modeling approach for historical data tracking in data warehouses."
      },
      {
          "keyword": "Dart Plugin",
          "description": "An extension adding functionality to the Dart development environment."
      },
      {
          "keyword": "Data Ingestion",
          "description": "The process of importing data from various sources into a system for storage/analysis."
      },
      {
          "keyword": "Dart SDK",
          "description": "The Software Development Kit containing tools for Dart development."
      },
      {
          "keyword": "Data Partitioning",
          "description": "The practice of dividing data into subsets for improved performance and manageability."
      },
      {
          "keyword": "Dart Standalone",
          "description": "Dart programs that run independently outside of browsers."
      },
      {
          "keyword": "Data Persistence",
          "description": "The characteristic of data that outlives the execution of the program that created it."
      },
      {
          "keyword": "Dart WebAssembly (Wasm)",
          "description": "Compiling Dart to WebAssembly for web deployment."
      },
      {
          "keyword": "Data Migration",
          "description": "The process of transferring data between storage types, formats, or systems."
      },
      {
          "keyword": "Dart Web Components",
          "description": "A way to create reusable custom elements in web applications using Dart."
      },
      {
          "keyword": "Data Compression",
          "description": "The process of encoding information using fewer bits to reduce storage/transmission requirements."
      },
      {
          "keyword": "Dart Web Server",
          "description": "A server-side application written in Dart for handling HTTP requests."
      },
      {
          "keyword": "Data Consistency",
          "description": "The property ensuring all data copies in a distributed system are identical at all times."
      },
      {
          "keyword": "Dart Web Starter",
          "description": "Templates and tools for bootstrapping Dart web applications."
      },
      {
          "keyword": "Data Classification",
          "description": "The process of organizing data into categories for efficient use and protection."
      },
      {
          "keyword": "Dart Web Toolkit",
          "description": "Libraries and tools for building web applications with Dart."
      },
      {
          "keyword": "Data Archiving",
          "description": "The process of moving data that is no longer actively used to separate storage for long-term retention."
      },
      {
          "keyword": "Dart Web UI",
          "description": "A declarative framework for building web user interfaces in Dart."
      },
      {
          "keyword": "Data Aggregation",
          "description": "The compilation of information from databases with intent to prepare combined datasets for analysis."
      },
      {
          "keyword": "Dart Web Workers",
          "description": "A mechanism for running Dart scripts in background threads for web applications."
      },
      {
          "keyword": "Data Analytics",
          "description": "The science of analyzing raw data to make conclusions about information."
      },
      {
          "keyword": "Dart WebSockets",
          "description": "A protocol providing full-duplex communication channels over a single TCP connection in Dart web apps."
      },
      {
          "keyword": "Data Binding",
          "description": "A general technique that binds data sources from the provider and consumer together."
      },
      {
          "keyword": "Dart Web Framework",
          "description": "A software framework designed to support development of web applications using Dart."
      },
      {
          "keyword": "Data Catalog",
          "description": "An organized inventory of data assets in an organization."
      },
      {
          "keyword": "Dart Web Components",
          "description": "A way to create reusable custom elements in web applications using Dart."
      },
      {
          "keyword": "Data Flow",
          "description": "The movement of data through a system comprising software, hardware, or a combination."
      },
      {
          "keyword": "Dart Web Development",
          "description": "The process of building web applications using the Dart programming language."
      },
      {
          "keyword": "Data Hierarchy",
          "description": "The systematic organization of data, often in a tree-like structure."
      },
      {
          "keyword": "Dart Web Application",
          "description": "An application program that is stored on a remote server and delivered over the Internet through a browser interface, written in Dart."
      },
      
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLetter, setSelectedLetter] = useState("");

  const alphabet = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

  const filteredTerms = termsData.filter((term) => {
    const matchesLetter = selectedLetter
      ? term.keyword.startsWith(selectedLetter)
      : true;
    const matchesSearch = term.keyword
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesLetter && matchesSearch;
  });

  return (
    <>
      <Head>
        <title>Computer Dictionary | Unstop Computer</title>
        <meta
          name="description"
          content="Explore a comprehensive computer dictionary with definitions of key computing and tech terms. Enhance your knowledge with Unstop Computer."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Computer Dictionary, Glossary, Programming, Web Development, Data Science, Cybersecurity, Software, Hardware, Unstop Computer"
        />
        <link
          rel="canonical"
          href="https://unstopcomputer.tech/glossary"
        />
        <meta
          property="og:image"
          content="https://unstopcomputer.tech/Images/logo.png"
        />
        <meta
          property="og:title"
          content="Computer Dictionary | Unstop Computer"
        />
      </Head>

      <div className="container text-center mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
          Computer Dictionary
        </h1>
        <p className="text-lg text-gray-700">
          Search and explore key computer science terms including programming,
          hardware, networking, databases, AI, and more.
        </p>
      </div>

      <div className="max-w-screen-lg mx-auto px-4 pb-16">
        {/* A-Z Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {alphabet.map((letter) => (
            <button
              key={letter}
              onClick={() =>
                setSelectedLetter(letter === selectedLetter ? "" : letter)
              }
              className={`px-3 py-1 rounded-md border ${
                selectedLetter === letter
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-blue-100"
              }`}
            >
              {letter}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search term..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 mb-6 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <div className="mb-4 text-right text-sm text-gray-600">
          Showing {filteredTerms.length}{" "}
          {filteredTerms.length === 1 ? "term" : "terms"}
        </div>
        {/* Glossary Table */}
        <table className="w-full table-auto border border-collapse">
          <thead>
            <tr className="bg-blue-100">
              <th className="text-left px-4 py-2 border">Keyword</th>
              <th className="text-left px-4 py-2 border">Description</th>
            </tr>
          </thead>
          <tbody>
            {filteredTerms.length > 0 ? (
              filteredTerms.map((term, index) => (
                <tr key={index} className="border-t hover:bg-gray-100">
                  <td className="px-4 py-2 border font-medium">
                    {term.keyword}
                  </td>
                  <td className="px-4 py-2 border">{term.description}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="text-center py-4">
                  No results found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default GlossaryTable;
