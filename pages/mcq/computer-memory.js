import McqLayout from "../../components/McqLayout";
import React, { useState } from 'react';
import Link from "next/link";
import Head from "next/head";
const cloud = () => {
    const [ questions ] = useState( [
        {
            id: 1,
            question: 'The smallest unit of computer data is ',
            options: [
                { label: 'A', text: 'Byte' },
                { label: 'B', text: 'Bit', isCorrect: true },
                { label: 'C', text: 'Record' },
                { label: 'D', text: 'File' },
            ],
        },
        {
            id: 2,
            question: 'The unit of measurement of a word length is ',
            options: [
                { label: 'A', text: 'Meter' },
                { label: 'B', text: 'Byte' },
                { label: 'C', text: 'Bit' , isCorrect: true },
                { label: 'D', text: 'Milimeter' },
            ],
        },
        {
            id: 3,
            question: 'In binary language , each letter of the aplhabet, each number and each special character is made up of a unique combination of .... ?',
            options: [
                { label: 'A', text: '8 bits'},
                { label: 'B', text: '8 KB' },
                { label: 'C', text: '8 characters' },
                { label: 'D', text: '8 bits', isCorrect: true  },
            ],
        },
        {
            id: 4,
            question: 'A 32 bit of computer can access ..... bytes at a time.',
            options: [
                { label: 'A', text: '4', isCorrect: true },
                { label: 'B', text: '8' },
                { label: 'C', text: '16' },
                { label: 'D', text: '32' },
            ],
        },
        {
            id: 5,
            question: 'The memory data register of each 8 bit word for memory of 64 k words is -',
            options: [
                { label: 'A', text: '8 bits', isCorrect: true },
                { label: 'B', text: '16 byte' },
                { label: 'C', text: '32 bit' },
                { label: 'D', text: '128 bbit' },
            ],
        },
        {
            id: 6,
            question: 'Bit is the extended form of ......',
            options: [
                { label: 'A', text: 'Binary system'},
                { label: 'B', text: 'Digital Bite' },
                { label: 'C', text: 'Binary Digit' , isCorrect: true },
                { label: 'D', text: 'Binary Unit' },
            ],
        },
        {
            id: 7,
            question: 'The memory of a computer is measured by',
            options: [
                { label: 'A', text: 'By Bits', isCorrect: true },
                { label: 'B', text: 'By Hertz' },
                { label: 'C', text: 'By Ampere' },
                { label: 'D', text: 'By Volts' },
            ],
        },
        {
            id: 8,
            question: 'Which circuit is used to store one bit of data',
            options: [
                { label: 'A', text: 'Register'},
                { label: 'B', text: 'Flip Flop' , isCorrect: true },
                { label: 'C', text: 'Vector' },
                { label: 'D', text: 'Encoder' },
            ],
        },
        {
            id: 9,
            question: 'The means of expressing the position of data in memory specifically are',
            options: [
                { label: 'A', text: 'Address', isCorrect: true },
                { label: 'B', text: 'Accumulator' },
                { label: 'C', text: 'LDA' },
                { label: 'D', text: 'RAM' },
            ],
        },
        {
            id: 10,
            question: 'ASCII is an 8 bit code and can typically represent a maximum of ..... characters .',
            options: [
                { label: 'A', text: '256', isCorrect: true },
                { label: 'B', text: '127' },
                { label: 'C', text: '255' },
                { label: 'D', text: '128' },
            ],
        },
        {
            id:11,
            question: 'What is full form of EBCDIC ?',
            options: [
                { label: 'A', text: 'Extended Binary coded data interchange code'},
                { label: 'B', text: 'Expended binary coded decimal interchange code' },
                { label: 'C', text: 'Extended Binary coded decimal interchange code', isCorrect: true  },
                { label: 'D', text: 'Expanded Binary coding Data Interchange Code' },
            ],
        },
        {
            id: 12,
            question: 'UTF -8 is a/an',
            options: [
                { label: 'A', text: '8 - bit fixed with encoding'},
                { label: 'B', text: '8 - bit variable width encoding', isCorrect: true  },
                { label: 'C', text: '16 - bit variable width encoding' },
                { label: 'D', text: '8 - Bit coding path encoding' },
            ],
        },
        {
            id: 13,
            question: 'BCD Stands for ....',
            options: [
                { label: 'A', text: 'Binary Coded Decimal', isCorrect: true },
                { label: 'B', text: 'Binary Code Display' },
                { label: 'C', text: 'Bi- Directional Coded Data' },
                { label: 'D', text: 'Binary Coded Data' },
            ],
        },
        {
            id: 14,
            question: 'A string of eight 0s and 1s is called .......',
            options: [
                { label: 'A', text: 'Megabite'},
                { label: 'B', text: 'Kilobite' },
                { label: 'C', text: 'Gigabyte' },
                { label: 'D', text: 'Bite' , isCorrect: true },
            ],
        },
        {
            id: 15,
            question: 'The term memory is used for which of the following ?',
            options: [
                { label: 'A', text: 'Logic'},
                { label: 'B', text: 'Control' },
                { label: 'C', text: 'Storage', isCorrect: true  },
                { label: 'D', text: 'Programme' },
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
            <title>Computer Memory Multiple Choice Question | Unstop Computer</title>
        <meta name="description" content="Explore a collection of multiple-choice questions (MCQs) on computer memory , covering key concepts and features. Test your knowledge and deepen your understanding of computer memory  with our curated list." />

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
          href="https://unstopcomputer.tech/mcq/computer-memory"
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
          content="Computer Memory Multiple Choice Question | Unstop Computer"
        />
       <meta property="og:description" content="Explore a collection of multiple-choice questions (MCQs) on computer memory, covering key concepts and features. Test your knowledge and deepen your understanding of computer memory with our curated list." />
            </Head>
            <section id="content-wrapper">
                <div>
                    <div className="relative xl:container">
                        <h1 className="title-font sm:text-4xl text-center text-3xl mb-2 font-medium text-blue-700">Computer Memory Multiple Choice Question</h1>
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