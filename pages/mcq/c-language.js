import McqLayout from "../../components/McqLayout";
import React, { useState } from 'react';
import Link from "next/link";
import Head from "next/head";
const cloud = () => {
    const [ questions ] = useState( [
        {
            id: 1,
            question: 'Which of the following language is predecessor to C programming language ?',
            options: [
                { label: 'A', text: 'A Language' },
                { label: 'B', text: 'B Language', isCorrect: true },
                { label: 'C', text: 'BCPL' },
                { label: 'D', text: 'C++ Language' },
            ],
        },
        {
            id: 2,
            question: 'C programming language was developed by ......?',
            options: [
                { label: 'A', text: 'Dennis Ritchie', isCorrect: true },
                { label: 'B', text: 'Ken Thompson' },
                { label: 'C', text: 'Bill Gates' },
                { label: 'D', text: 'Peter Nortan' },
            ],
        },
        {
            id: 3,
            question: 'C was developed in the year ....... ?',
            options: [
                { label: 'A', text: '1972', isCorrect: true },
                { label: 'B', text: '1970' },
                { label: 'C', text: '1976' },
                { label: 'D', text: '1979' },
            ],
        },
        {
            id: 4,
            question: 'C is ...... language',
            options: [
                { label: 'A', text: 'High level'},
                { label: 'B', text: 'Low level' },
                { label: 'C', text: 'Middle level', isCorrect: true  },
                { label: 'D', text: 'Machine level' },
            ],
        },
        {
            id: 5,
            question: 'C language is available for which of the following operating system ?',
            options: [
                { label: 'A', text: 'DOS' },
                { label: 'B', text: 'Window' },
                { label: 'C', text: 'Unix' },
                { label: 'D', text: 'All of these', isCorrect: true },
            ],
        },
        {
            id: 6,
            question: 'Which of the following symbol is used to denote a pre-processor statement ?',
            options: [
                { label: 'A', text: '|'},
                { label: 'B', text: '#', isCorrect: true },
                { label: 'C', text: '^' },
                { label: 'D', text: ';' },
            ],
        },
        {
            id: 7,
            question: 'Which of the following are token in C ?',
            options: [
                { label: 'A', text: 'Keywords'},
                { label: 'B', text: 'Variable' },
                { label: 'C', text: 'Constant' },
                { label: 'D', text: 'All of these', isCorrect: true },
            ],
        },
        {
            id: 8,
            question: 'What is valid range of number for int type of data ?',
            options: [
                { label: 'A', text: '0 to 256'},
                { label: 'B', text: '-32768 to +32767', isCorrect: true },
                { label: 'C', text: '-65536 to -65536' },
                { label: 'D', text: 'None of These' },
            ],
        },
        {
            id: 9,
            question: 'Which of the following is scalar data type ?',
            options: [
                { label: 'A', text: 'Float', isCorrect: true },
                { label: 'B', text: 'Union' },
                { label: 'C', text: 'Array' },
                { label: 'D', text: 'Pointer' },
            ],
        },
        {
            id: 10,
            question: 'Which symbol is used as statement terminator in C ?',
            options: [
                { label: 'A', text: '!'},
                { label: 'B', text: '#' },
                { label: 'C', text: '$' },
                { label: 'D', text: ';', isCorrect: true },
            ],
        },
        {
            id:11,
            question: 'Charcater constant should be enclosed between ....',
            options: [
                { label: 'A', text: 'Single Quotes', isCorrect: true },
                { label: 'B', text: 'Double Quotes' },
                { label: 'C', text: 'Both A and B' },
                { label: 'D', text: 'None of these' },
            ],
        },
        {
            id: 12,
            question: 'The maximum length of variable in C is ....',
            options: [
                { label: 'A', text: '8', isCorrect: true },
                { label: 'B', text: '16' },
                { label: 'C', text: '32' },
                { label: 'D', text: '64' },
            ],
        },
        {
            id: 13,
            question: 'What will be the maximum size of float ?',
            options: [
                { label: 'A', text: '1 byte'},
                { label: 'B', text: '2 bytes' },
                { label: 'C', text: '4 bytes', isCorrect: true },
                { label: 'D', text: '8 bytes' },
            ],
        },
        {
            id: 14,
            question: 'What will be the maximum size of double variable .... ?',
            options: [
                { label: 'A', text: '1 byte'},
                { label: 'B', text: '4 bytes' },
                { label: 'C', text: '8 bytes', isCorrect: true },
                { label: 'D', text: '16 bytes' },
            ],
        },
        {
            id: 15,
            question: 'A declaration float a,b occupies ..... of memory.',
            options: [
                { label: 'A', text: '1 bytes'},
                { label: 'B', text: '4 bytes' },
                { label: 'C', text: '8 bytes', isCorrect: true },
                { label: 'D', text: '16 bytes' },
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
            <title>C Language Multiple Choice Question | Unstop Computer</title>
        <meta name="description" content="Explore a collection of multiple-choice questions (MCQs) on c language, covering key concepts and features. Test your knowledge and deepen your understanding of c language with our curated list." />

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
          href="https://unstopcomputer.tech/mcq/c-language"
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
          content="C Language Multiple Choice Question | Unstop Computer"
        />
       <meta property="og:description" content="Explore a collection of multiple-choice questions (MCQs) on C language , covering key concepts and features. Test your knowledge and deepen your understanding of C Language with our curated list." />
            </Head>
            <section id="content-wrapper">
                <div>
                    <div className="relative xl:container">
                        <h1 className="title-font sm:text-4xl text-center text-3xl mb-2 font-medium text-blue-700">C Language Multiple Choice Question</h1>
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

                        <div className="justify-center flex space-x-4">
                        <Link href="/mcq/angularjs-mcq" className="bg-white hover:bg-blue-700 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-white rounded-3xl">Previous</Link>

                        <Link href="/mcq/angularjs-mcq-2" className="bg-white hover:bg-blue-700 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-white rounded-3xl float-right">Next</Link>
                        </div>
                    </div>
                </div>
            </section>
        </McqLayout>
    );
};

export default cloud;