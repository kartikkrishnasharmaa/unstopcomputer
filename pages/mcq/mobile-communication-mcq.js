import McqLayout from "../../components/McqLayout";
import React, { useState } from 'react';
import Head from "next/head";
const mb = () => {
    const [ questions ] = useState( [
        {
            id: 1,
            question: 'What does GSM stand for in mobile communication?',
            options: [
                { label: 'A', text: 'Global System for Mobile', isCorrect: true },
                { label: 'B', text: 'Global Satellite Messaging' },
                { label: 'C', text: 'Globally Secure Mobile' },
                { label: 'D', text: 'General System for Mobile' },
            ],
        },
        {
            id: 2,
            question: 'What is the purpose of IMEI in mobile phones?',
            options: [
                { label: 'A', text: 'To identify the user of the phone' },
                { label: 'B', text: 'To identify the SIM card inserted in the phone' },
                { label: 'C', text: 'To uniquely identify the mobile device', isCorrect: true },
                { label: 'D', text: 'To connect to the internet' },
            ],
        },
        {
            id: 3,
            question: 'Which generation of mobile networks introduced digital data transmission?',
            options: [
                { label: 'A', text: '1G' },
                { label: 'B', text: '2G', isCorrect: true },
                { label: 'C', text: '3G' },
                { label: 'D', text: '4G' },
            ],
        },
        {
            id: 4,
            question: 'What technology is used for mobile communication in 4G networks?',
            options: [
                { label: 'A', text: 'CDMA' },
                { label: 'B', text: 'LTE', isCorrect: true },
                { label: 'C', text: 'GSM' },
                { label: 'D', text: 'TDMA' },
            ],
        },
        {
            id: 5,
            question: 'Which of the following is a standard for short-range wireless communication?',
            options: [
                { label: 'A', text: 'Wi-Fi' },
                { label: 'B', text: 'Bluetooth', isCorrect: true },
                { label: 'C', text: '3G' },
                { label: 'D', text: 'LTE' },
            ],
        },
        {
            id: 6,
            question: 'What is the purpose of SIM cards in mobile phones?',
            options: [
                { label: 'A', text: 'To store contact information' },
                { label: 'B', text: 'To provide network authentication and store user data', isCorrect: true },
                { label: 'C', text: 'To improve battery life' },
                { label: 'D', text: 'To connect to Wi-Fi networks' },
            ],
        },
        {
            id: 7,
            question: 'What technology is used for mobile communication in 5G networks?',
            options: [
                { label: 'A', text: 'CDMA' },
                { label: 'B', text: 'LTE' },
                { label: 'C', text: '5G NR', isCorrect: true },
                { label: 'D', text: 'GSM' },
            ],
        },
        {
            id: 8,
            question: 'What is the purpose of base stations in mobile networks?',
            options: [
                { label: 'A', text: 'To store user data' },
                { label: 'B', text: 'To provide network coverage and connect mobile devices to the core network', isCorrect: true },
                { label: 'C', text: 'To authenticate users' },
                { label: 'D', text: 'To process data packets' },
            ],
        },
        {
            id: 9,
            question: 'Which of the following is a technology used for mobile payments?',
            options: [
                { label: 'A', text: 'NFC', isCorrect: true },
                { label: 'B', text: 'GPS' },
                { label: 'C', text: 'Bluetooth' },
                { label: 'D', text: 'Wi-Fi' },
            ],
        },
        {
            id: 10,
            question: 'What is the maximum data transfer rate for 4G LTE networks?',
            options: [
                { label: 'A', text: '100 Mbps' },
                { label: 'B', text: '300 Mbps' },
                { label: 'C', text: '1 Gbps', isCorrect: true },
                { label: 'D', text: '10 Gbps' },
            ],
        },
        {
            id: 11,
            question: 'Which organization develops and maintains GSM standards?',
            options: [
                { label: 'A', text: 'IEEE' },
                { label: 'B', text: 'ITU' },
                { label: 'C', text: 'ETSI', isCorrect: true },
                { label: 'D', text: 'ISO' },
            ],
        },
        {
            id: 12,
            question: 'What is the primary advantage of VoLTE (Voice over LTE) technology?',
            options: [
                { label: 'A', text: 'Higher data transfer rates' },
                { label: 'B', text: 'Better call quality and faster call setup times', isCorrect: true },
                { label: 'C', text: 'Lower battery consumption' },
                { label: 'D', text: 'Greater coverage range' },
            ],
        },
        {
            id: 13,
            question: 'What does NFC stand for in mobile communication?',
            options: [
                { label: 'A', text: 'Near-Field Connectivity' },
                { label: 'B', text: 'Near-Field Camera' },
                { label: 'C', text: 'Near-Field Charging' },
                { label: 'D', text: 'Near-Field Communication', isCorrect: true },
            ],
        },
        {
            id: 14,
            question: 'Which of the following is a technology used for mobile location tracking?',
            options: [
                { label: 'A', text: 'NFC' },
                { label: 'B', text: 'GPS', isCorrect: true },
                { label: 'C', text: 'Bluetooth' },
                { label: 'D', text: 'Wi-Fi' },
            ],
        },
        {
            id: 15,
            question: 'What technology is used for voice communication in 3G networks?',
            options: [
                { label: 'A', text: 'TDMA' },
                { label: 'B', text: 'CDMA' },
                { label: 'C', text: 'UMTS', isCorrect: true },
                { label: 'D', text: 'LTE' },
            ],
        },
        {
            id: 16,
            question: 'What does MIMO stand for in the context of mobile communication?',
            options: [
                { label: 'A', text: 'Mobile Internet Mobile Operator' },
                { label: 'B', text: 'Mobile Information Multicast Operator' },
                { label: 'C', text: 'Multiple Input Multiple Output', isCorrect: true },
                { label: 'D', text: 'Mobile Internet Mobile Option' },
            ],
        },
        {
            id: 17,
            question: 'What is the purpose of handover in mobile communication?',
            options: [
                { label: 'A', text: 'To transfer calls between base stations or cells to maintain continuous connectivity', isCorrect: true },
                { label: 'B', text: 'To switch between different mobile network operators' },
                { label: 'C', text: 'To encrypt voice and data transmissions' },
                { label: 'D', text: 'To increase the battery life of mobile devices' },
            ],
        },
        {
            id: 18,
            question: 'Which of the following is a technology used for mobile internet access?',
            options: [
                { label: 'A', text: 'Bluetooth' },
                { label: 'B', text: 'Wi-Fi' },
                { label: 'C', text: 'LTE', isCorrect: true },
                { label: 'D', text: 'NFC' },
            ],
        },
        {
            id: 19,
            question: 'What is the purpose of ESN in mobile communication?',
            options: [
                { label: 'A', text: 'To identify the mobile device' },
                { label: 'B', text: 'To store contact information' },
                { label: 'C', text: 'To authenticate users' },
                { label: 'D', text: 'To uniquely identify CDMA mobile devices', isCorrect: true },
            ],
        },
        {
            id: 20,
            question: 'What is the purpose of APN in mobile communication?',
            options: [
                { label: 'A', text: 'To identify the mobile device' },
                { label: 'B', text: 'To connect mobile devices to the internet or a private network', isCorrect: true },
                { label: 'C', text: 'To authenticate users' },
                { label: 'D', text: 'To store contact information' },
            ],
        }
        
        
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
            <title>Mobile Communication Multiple Choice Question | Unstop Computer</title>
        <meta name="description" content="Explore a collection of multiple-choice questions (MCQs) on  mobile communication, covering key concepts and features. Test your knowledge and deepen your understanding of mobile communication  with our curated list." />

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
          href="https://unstopcomputer.tech/mcq/mobile-communication-mcq"
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
          content="Mobile Communication Multiple Choice Question | Unstop Computer"
        />
       <meta property="og:description" content="Explore a collection of multiple-choice questions (MCQs) on mobile communication, covering key concepts and features. Test your knowledge and deepen your understanding of mobile communication with our curated list." />
            </Head>
            <section id="content-wrapper">
                <div>
                    <div className="relative xl:container">
                        <h1 className="title-font sm:text-4xl text-center text-3xl mb-2 font-medium text-blue-700">Mobile Communication Multiple Choice Question</h1>
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

export default mb;