import McqLayout from "../../components/McqLayout";
import React, { useState } from 'react';
import Head from "next/head";
const ethical = () => {
    const [ questions ] = useState( [
        {
            id: 1,
            question: 'What is the primary goal of ethical hacking?',
            options: [
                { label: 'A', text: 'To exploit vulnerabilities for personal gain' },
                { label: 'B', text: 'To penetrate networks without permission' },
                { label: 'C', text: 'To identify and fix security vulnerabilities', isCorrect: true },
                { label: 'D', text: 'To cause harm to computer systems' },
            ],
        },
        {
            id: 2,
            question: 'Which term refers to a program or script that automates the process of finding security vulnerabilities?',
            options: [
                { label: 'A', text: 'Malware' },
                { label: 'B', text: 'Virus' },
                { label: 'C', text: 'Exploit' },
                { label: 'D', text: 'Security Scanner', isCorrect: true },
            ],
        },
        {
            id: 3,
            question: 'What is the practice of gathering information about a target system without directly interacting with it?',
            options: [
                { label: 'A', text: 'Hacking' },
                { label: 'B', text: 'Footprinting', isCorrect: true },
                { label: 'C', text: 'Phishing' },
                { label: 'D', text: 'Spoofing' },
            ],
        },
        {
            id: 4,
            question: 'Which type of attack involves flooding a network or system with excessive traffic to make it unavailable to users?',
            options: [
                { label: 'A', text: 'Phishing' },
                { label: 'B', text: 'Denial of Service (DoS)', isCorrect: true },
                { label: 'C', text: 'Spoofing' },
                { label: 'D', text: 'Man-in-the-Middle (MitM)' },
            ],
        },
        {
            id: 5,
            question: 'What is the term for an attack that involves intercepting and altering communication between two parties without their knowledge?',
            options: [
                { label: 'A', text: 'Phishing' },
                { label: 'B', text: 'Spoofing' },
                { label: 'C', text: 'Man-in-the-Middle (MitM)', isCorrect: true },
                { label: 'D', text: 'Denial of Service (DoS)' },
            ],
        },
        {
            id: 6,
            question: 'Which of the following is NOT a phase of ethical hacking?',
            options: [
                { label: 'A', text: 'Reconnaissance' },
                { label: 'B', text: 'Exploitation' },
                { label: 'C', text: 'Post-Attack' },
                { label: 'D', text: 'Attack', isCorrect: true },
            ],
        },
        {
            id: 7,
            question: 'What is the process of tricking individuals into divulging sensitive information by pretending to be a legitimate entity?',
            options: [
                { label: 'A', text: 'Hacking' },
                { label: 'B', text: 'Spoofing' },
                { label: 'C', text: 'Phishing', isCorrect: true },
                { label: 'D', text: 'Denial of Service (DoS)' },
            ],
        },
        {
            id: 8,
            question: 'What is the term for the practice of redirecting users from legitimate websites to fraudulent ones to steal their credentials?',
            options: [
                { label: 'A', text: 'Pharming', isCorrect: true },
                { label: 'B', text: 'Spoofing' },
                { label: 'C', text: 'Phishing' },
                { label: 'D', text: 'Denial of Service (DoS)' },
            ],
        },
        {
            id: 9,
            question: 'Which type of attack involves modifying DNS records to redirect users to fake websites?',
            options: [
                { label: 'A', text: 'Pharming', isCorrect: true },
                { label: 'B', text: 'Phishing' },
                { label: 'C', text: 'Spoofing' },
                { label: 'D', text: 'Man-in-the-Middle (MitM)' },
            ],
        },
        {
            id: 10,
            question: 'What is the term for an attack that involves exploiting vulnerabilities in software to gain unauthorized access?',
            options: [
                { label: 'A', text: 'Phishing' },
                { label: 'B', text: 'Exploit', isCorrect: true },
                { label: 'C', text: 'Spoofing' },
                { label: 'D', text: 'Denial of Service (DoS)' },
            ],
        },
        {
            id: 11,
            question: 'Which term refers to an attack that involves using one compromised system to attack other systems within the same network?',
            options: [
                { label: 'A', text: 'Phishing' },
                { label: 'B', text: 'Spoofing' },
                { label: 'C', text: 'Pivoting', isCorrect: true },
                { label: 'D', text: 'Denial of Service (DoS)' },
            ],
        },
        {
            id: 12,
            question: 'Which of the following is NOT considered a social engineering technique?',
            options: [
                { label: 'A', text: 'Phishing' },
                { label: 'B', text: 'Shoulder Surfing' },
                { label: 'C', text: 'SQL Injection', isCorrect: true },
                { label: 'D', text: 'Tailgating' },
            ],
        },
        {
            id: 13,
            question: 'What is the term for an attack that involves capturing and analyzing network traffic to gather sensitive information?',
            options: [
                { label: 'A', text: 'Phishing' },
                { label: 'B', text: 'Spoofing' },
                { label: 'C', text: 'Sniffing', isCorrect: true },
                { label: 'D', text: 'Denial of Service (DoS)' },
            ],
        },
        {
            id: 14,
            question: 'Which of the following is NOT a common cryptography attack?',
            options: [
                { label: 'A', text: 'Brute Force' },
                { label: 'B', text: 'Social Engineering' },
                { label: 'C', text: 'Man-in-the-Middle (MitM)', isCorrect: true },
                { label: 'D', text: 'Cryptanalysis' },
            ],
        },
        {
            id: 15,
            question: 'Which term refers to an attack that involves overwhelming a system by sending more data than it can handle?',
            options: [
                { label: 'A', text: 'Phishing' },
                { label: 'B', text: 'Spoofing' },
                { label: 'C', text: 'Buffer Overflow', isCorrect: true },
                { label: 'D', text: 'Denial of Service (DoS)' },
            ],
        },
        
        
        // Add more questions here...
    ] );

    const [ selectedAnswers, setSelectedAnswers ] = useState( {} );
    const [ showAnswer, setShowAnswer ] = useState( {} );

    const handleOptionSelect = ( questionId, selectedOptionLabel ) => {
        setSelectedAnswers( {
            ...selectedAnswers,
            [ questionId ]: selectedOptionLabel,
        } );
    };
    return (
        <McqLayout>
            <Head>
            <title>Ethical Hacking Multiple Choice Question | Unstop Computer</title>
        <meta name="description" content="Explore a collection of multiple-choice questions (MCQs) on  ethical hacking, covering key concepts and features. Test your knowledge and deepen your understanding of ethical hacking with our curated list." />

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
          href="https://unstopcomputer.tech/mcq/ethical-hacking-mcq"
        />
        <meta
          property="og:image"
          content="https://unstopcomputer.tech/Images/logo.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="150" />
        <meta property="og:image:height" content="150" />
        <meta
          property="og:title"
          content="Ethical Hacking Multiple Choice Question | Unstop Computer"
        />
       <meta property="og:description" content="Explore a collection of multiple-choice questions (MCQs) on ethical hacking, covering key concepts and features. Test your knowledge and deepen your understanding of ethical hacking with our curated list." />
            </Head>
            <section id="content-wrapper">
                <div>
                    <div className="relative xl:container">
                        <h1 className="title-font sm:text-4xl text-center text-3xl mb-2 font-medium text-blue-700">Ethical Hacking Multiple Choice Question</h1>
                        <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
                            { questions.map( ( question ) => (
                                <div key={ question.id }>
                                    <p className="font-bold"> Question : { question.id }  { question.question }</p>
                                    <ul className="space-y-4">
                                        { question.options.map( ( option ) => (
                                            <li key={ option.label } className="flex items-center">
                                                <div className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2">
                                                    <h1 className="mx-auto font-semibold bg-blue-700 rounded-full text-lg text-white text-center">
                                                        { option.label }
                                                    </h1>
                                                </div>
                                                <p className="ml-4">{ option.text }</p>
                                                {/* Remove the select button for each option */ }
                                            </li>
                                        ) ) }
                                    </ul>
                                    { selectedAnswers[ question.id ] && (
                                        <div className="px-5 py-3 border border-blue-700 text-sm mt-3">
                                            Your answer: { selectedAnswers[ question.id ] }
                                        </div>
                                    ) }
                                    <details className="open:duration-300">
                                        <summary
                                            className="bg-gray-200 mt-4 px-5 py-3 text-lg cursor-pointer"
                                            onClick={ () => setShowAnswer( { ...showAnswer, [ question.id ]: true } ) }
                                        >
                                            Answer:
                                        </summary>
                                        { showAnswer[ question.id ] && (
                                            <div className="px-5 py-3 border border-blue-700 text-sm">
                                                { question.options.find( ( opt ) => opt.isCorrect )?.text }
                                            </div>
                                        ) }
                                    </details>
                                </div>
                            ) ) }
                        </div>
                    </div>
                </div>
            </section>
        </McqLayout>
    );
};

export default ethical;