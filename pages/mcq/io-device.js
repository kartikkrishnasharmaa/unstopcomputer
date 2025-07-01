import McqLayout from "../../components/McqLayout";
import React, { useState } from 'react';
import Head from "next/head";
const ml = () => {
    const [ questions ] = useState( [
        {
            id: 1,
            question: 'Which of the following is an input device?',
            options: [
                { label: 'A', text: 'Monitor' },
                { label: 'B', text: 'Keyboard', isCorrect: true },
                { label: 'C', text: 'Printer' },
                { label: 'D', text: 'Speaker' },
            ],
        },
        {
            id: 2,
            question: 'Which device is used to produce hard copies of documents?',
            options: [
                { label: 'A', text: 'Monitor' },
                { label: 'B', text: 'Printer', isCorrect: true },
                { label: 'C', text: 'Scanner' },
                { label: 'D', text: 'Keyboard' },
            ],
        },
        {
            id: 3,
            question: 'Which device is used to input sound into a computer system?',
            options: [
                { label: 'A', text: 'Microphone', isCorrect: true },
                { label: 'B', text: 'Printer' },
                { label: 'C', text: 'Scanner' },
                { label: 'D', text: 'Monitor' },
            ],
        },
        {
            id: 4,
            question: 'Which device is used to display visual output from a computer system?',
            options: [
                { label: 'A', text: 'Keyboard' },
                { label: 'B', text: 'Mouse' },
                { label: 'C', text: 'Monitor', isCorrect: true },
                { label: 'D', text: 'Scanner' },
            ],
        },
        {
            id: 5,
            question: 'Which device is used to capture physical documents and convert them into digital format?',
            options: [
                { label: 'A', text: 'Monitor' },
                { label: 'B', text: 'Scanner', isCorrect: true },
                { label: 'C', text: 'Printer' },
                { label: 'D', text: 'Keyboard' },
            ],
        },
        {
            id: 6,
            question: 'Which device is used to input graphical drawings or sketches into a computer system?',
            options: [
                { label: 'A', text: 'Keyboard' },
                { label: 'B', text: 'Mouse' },
                { label: 'C', text: 'Graphics Tablet', isCorrect: true },
                { label: 'D', text: 'Printer' },
            ],
        },
        {
            id: 7,
            question: 'Which device is used to produce high-quality photographic prints from a computer system?',
            options: [
                { label: 'A', text: 'Keyboard' },
                { label: 'B', text: 'Monitor' },
                { label: 'C', text: 'Plotter', isCorrect: true },
                { label: 'D', text: 'Scanner' },
            ],
        },
        {
            id: 8,
            question: 'Which device is used to input text and commands into a computer system?',
            options: [
                { label: 'A', text: 'Monitor' },
                { label: 'B', text: 'Scanner' },
                { label: 'C', text: 'Keyboard', isCorrect: true },
                { label: 'D', text: 'Printer' },
            ],
        },
        {
            id: 9,
            question: 'Which device is used to output digital audio from a computer system?',
            options: [
                { label: 'A', text: 'Printer' },
                { label: 'B', text: 'Monitor' },
                { label: 'C', text: 'Speaker', isCorrect: true },
                { label: 'D', text: 'Scanner' },
            ],
        },
        {
            id: 10,
            question: 'Which device is used to input handwritten text or drawings into a computer system?',
            options: [
                { label: 'A', text: 'Graphics Tablet', isCorrect: true },
                { label: 'B', text: 'Keyboard' },
                { label: 'C', text: 'Mouse' },
                { label: 'D', text: 'Scanner' },
            ],
        },
        {
            id: 11,
            question: 'Which device is used to output large-format designs or drawings?',
            options: [
                { label: 'A', text: 'Printer' },
                { label: 'B', text: 'Monitor' },
                { label: 'C', text: 'Plotter', isCorrect: true },
                { label: 'D', text: 'Scanner' },
            ],
        },
        {
            id: 12,
            question: 'Which device is used to input the movement of a user’s hand into a computer system?',
            options: [
                { label: 'A', text: 'Graphics Tablet' },
                { label: 'B', text: 'Mouse', isCorrect: true },
                { label: 'C', text: 'Keyboard' },
                { label: 'D', text: 'Scanner' },
            ],
        },
        {
            id: 13,
            question: 'Which device is used to output visual information to a large audience?',
            options: [
                { label: 'A', text: 'Printer' },
                { label: 'B', text: 'Projector', isCorrect: true },
                { label: 'C', text: 'Monitor' },
                { label: 'D', text: 'Scanner' },
            ],
        },
        {
            id: 14,
            question: 'Which device is used to input biometric information for security purposes?',
            options: [
                { label: 'A', text: 'Mouse' },
                { label: 'B', text: 'Keyboard' },
                { label: 'C', text: 'Biometric Scanner', isCorrect: true },
                { label: 'D', text: 'Printer' },
            ],
        },
        {
            id: 15,
            question: 'Which device is used to output high-quality text and graphics onto paper?',
            options: [
                { label: 'A', text: 'Printer', isCorrect: true },
                { label: 'B', text: 'Monitor' },
                { label: 'C', text: 'Projector' },
                { label: 'D', text: 'Scanner' },
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
            <title>Input Output Device Multiple Choice Question | Unstop Computer</title>
        <meta name="description" content="Explore a collection of multiple-choice questions (MCQs) on input output device, covering key concepts and features. Test your knowledge and deepen your understanding of input output device with our curated list." />

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
          href="https://unstopcomputer.tech/mcq/io-device"
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
          content="Input Output Device Multiple Choice Question | Unstop Computer"
        />
       <meta property="og:description" content="Explore a collection of multiple-choice questions (MCQs) on input output device, covering key concepts and features. Test your knowledge and deepen your understanding of input output device with our curated list." />
            </Head>
            <section id="content-wrapper">
                <div>
                    <div className="relative xl:container">
                        <h1 className="title-font sm:text-4xl text-center text-3xl mb-2 font-medium text-blue-700">Input Output Device Multiple Choice Question</h1>
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

export default ml;