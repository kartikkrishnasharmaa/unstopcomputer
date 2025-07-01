import McqLayout from "../../components/McqLayout";
import React, { useState } from 'react';
import Head from "next/head";
const cloud = () => {
    const [ questions ] = useState( [
        {
            id: 1,
            question: 'The basic operation performed by a computer are :',
            options: [
                { label: 'A', text: 'Arithmetic operation' },
                { label: 'B', text: 'Logical operation'},
                { label: 'C', text: 'Storage and relative' },
                { label: 'D', text: 'All of the above' , isCorrect: true},
            ],
        },
        {
            id: 2,
            question: 'The two major types of computer chips are ',
            options: [
                { label: 'A', text: 'Externam memory chips'},
                { label: 'B', text: 'Primary memory chips' },
                { label: 'C', text: 'Microprocessor chips' },
                { label: 'D', text: 'Both B and C' , isCorrect: true},
            ],
        },
        {
            id: 3,
            question: 'The brain of any computer system is ',
            options: [
                { label: 'A', text: 'ALU', isCorrect: true },
                { label: 'B', text: 'Memory' },
                { label: 'C', text: 'CPU' },
                { label: 'D', text: 'All of the above' },
            ],
        },
        {
            id: 4,
            question: 'Microprocessors as switching devices are for which generation computer',
            options: [
                { label: 'A', text: 'First Generation'},
                { label: 'B', text: 'Second Generation' },
                { label: 'C', text: 'Third generation' },
                { label: 'D', text: 'Fourth Generation', isCorrect: true },
            ],
        },
        {
            id: 5,
            question: 'Storage capacity of magnetic disk depends on',
            options: [
                { label: 'A', text: 'Tracks per inch surface'},
                { label: 'B', text: 'Bits per inch of tracks' },
                { label: 'C', text: 'Disk Pack in disk surface' },
                { label: 'D', text: 'All of the above', isCorrect: true },
            ],
        },
        {
            id: 6,
            question: 'The two of main memory are',
            options: [
                { label: 'A', text: 'Primary and secondary'},
                { label: 'B', text: 'Random and Sequnetial' },
                { label: 'C', text: 'RAM and ROM' },
                { label: 'D', text: 'All of the above' },
            ],
        },
        {
            id: 7,
            question: 'Computer are free from fatigue and boredom, what is it called ?',
            options: [
                { label: 'A', text: 'Accuracy'},
                { label: 'B', text: 'Reliability' },
                { label: 'C', text: 'Diligence', isCorrect: true },
                { label: 'D', text: 'Versatality' },
            ],
        },
        {
            id: 8,
            question: 'A storage area used to store data to compesate for the difference in speed at which the different units can handle data is ',
            options: [
                { label: 'A', text: 'Memory'},
                { label: 'B', text: 'Buffer' },
                { label: 'C', text: 'Accumulator' },
                { label: 'D', text: 'Address' },
            ],
        },
        {
            id: 9,
            question: 'Integrated circuit are related to which generation of computers',
            options: [
                { label: 'A', text: 'First generation', isCorrect: true },
                { label: 'B', text: 'Second generation' },
                { label: 'C', text: 'Third generation' },
                { label: 'D', text: 'Fourth generation' },
            ],
        },
        {
            id: 10,
            question: 'CD- ROM is',
            options: [
                { label: 'A', text: 'Semi conductor memory'},
                { label: 'B', text: 'Memory register' },
                { label: 'C', text: 'Magnetic memory' },
                { label: 'D', text: 'None of above', isCorrect: true },
            ],
        },
        {
            id:11,
            question: 'What was the main component of first generation computer ?',
            options: [
                { label: 'A', text: 'Transistors'},
                { label: 'B', text: 'Vaccum Tubes and Valves', isCorrect: true },
                { label: 'C', text: 'Integrated circuit' },
                { label: 'D', text: 'None of the above' },
            ],
        },
        {
            id: 12,
            question: 'A hybrid computer',
            options: [
                { label: 'A', text: 'Resembles digital computer'},
                { label: 'B', text: 'Resembles analogue computer' },
                { label: 'C', text: 'Resembles both a digital and anlogue Computer' , isCorrect: true},
                { label: 'D', text: 'None of the above' },
            ],
        },
        {
            id: 13,
            question: 'Which types of computer uses the 8-bit code called EBCDIC ?',
            options: [
                { label: 'A', text: 'Mini computer'},
                { label: 'B', text: 'Micro computer' },
                { label: 'C', text: 'Mainframe computer', isCorrect: true },
                { label: 'D', text: 'Super computer' },
            ],
        },
        {
            id: 14,
            question: 'To produce high quality graphics in color which one would you like to use ?',
            options: [
                { label: 'A', text: 'RGB Monitor'},
                { label: 'B', text: 'Plotter', isCorrect: true },
                { label: 'C', text: 'InkJet printer' },
                { label: 'D', text: 'Laser Printer' },
            ],
        },
        {
            id: 15,
            question: 'The ALU of a computer responds to the command coming from ',
            options: [
                { label: 'A', text: 'Primary memory' },
                { label: 'B', text: 'Control section', isCorrect: true },
                { label: 'C', text: 'External memory' },
                { label: 'D', text: 'Cache memory' },
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
            <title>Computer Fundamental Multiple Choice Question | Unstop Computer</title>
        <meta name="description" content="Explore a collection of multiple-choice questions (MCQs) on  computer fundamental, covering key concepts and features. Test your knowledge and deepen your understanding of computer fundamental with our curated list." />

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
          href="https://unstopcomputer.tech/mcq/computer-fundamental"
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
          content="Computer Fundamental Multiple Choice Question | Unstop Computer"
        />
       <meta property="og:description" content="Explore a collection of multiple-choice questions (MCQs) on computer fundamental, covering key concepts and features. Test your knowledge and deepen your understanding of computer fundamental with our curated list." />
            </Head>
            <section id="content-wrapper">
                <div>
                    <div className="relative xl:container">
                        <h1 className="title-font sm:text-4xl text-center text-3xl mb-2 font-medium text-blue-700">Computer Fundamental Multiple Choice Question </h1>
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

export default cloud;