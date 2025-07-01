import McqLayout from "../../components/McqLayout";
import React, { useState } from 'react';
import Head from "next/head";
const ml = () => {
    const [ questions ] = useState( [
        {
            id: 1,
            question: 'What is the result of the following expression: 5 + "3"?',
            options: [
                { label: 'A', text: '8' },
                { label: 'B', text: '53', isCorrect: true },
                { label: 'C', text: '35' },
                { label: 'D', text: 'NaN' },
            ],
        },
        {
            id: 2,
            question: 'Which of the following is NOT a valid way to declare a variable in JavaScript?',
            options: [
                { label: 'A', text: 'var x = 5;' },
                { label: 'B', text: 'let y = 3;' },
                { label: 'C', text: 'const z = 10;' },
                { label: 'D', text: 'variable w = 8;', isCorrect: true },
            ],
        },
        {
            id: 3,
            question: 'What is the result of the following expression: "20" - 5?',
            options: [
                { label: 'A', text: '15', isCorrect: true },
                { label: 'B', text: '25' },
                { label: 'C', text: '20' },
                { label: 'D', text: 'NaN' },
            ],
        },
        {
            id: 4,
            question: 'Which keyword is used to define a function in JavaScript?',
            options: [
                { label: 'A', text: 'function', isCorrect: true },
                { label: 'B', text: 'define' },
                { label: 'C', text: 'func' },
                { label: 'D', text: 'funciton' },
            ],
        },
        {
            id: 5,
            question: 'What is the result of the following expression: typeof 42?',
            options: [
                { label: 'A', text: 'number', isCorrect: true },
                { label: 'B', text: 'string' },
                { label: 'C', text: 'undefined' },
                { label: 'D', text: 'object' },
            ],
        },
        {
            id: 6,
            question: 'What does the "===" operator do in JavaScript?',
            options: [
                { label: 'A', text: 'Checks for equality without type conversion', isCorrect: true },
                { label: 'B', text: 'Checks for equality with type conversion' },
                { label: 'C', text: 'Assigns a value to a variable' },
                { label: 'D', text: 'Compares two variables' },
            ],
        },
        {
            id: 7,
            question: 'What is the output of the following code snippet?\n\n```javascript\nconsole.log(1 + "2" + "2");\n```',
            options: [
                { label: 'A', text: '122' },
                { label: 'B', text: '32' },
                { label: 'C', text: '1222', isCorrect: true },
                { label: 'D', text: '5' },
            ],
        },
        {
            id: 8,
            question: 'What is the correct way to write a comment in JavaScript?',
            options: [
                { label: 'A', text: '//This is a comment' },
                { label: 'B', text: '<!--This is a comment-->' },
                { label: 'C', text: '#This is a comment' },
                { label: 'D', text: '/* This is a comment */', isCorrect: true },
            ],
        },
        {
            id: 9,
            question: 'Which built-in method adds one or more elements to the end of an array and returns the new length of the array?',
            options: [
                { label: 'A', text: 'push()', isCorrect: true },
                { label: 'B', text: 'add()' },
                { label: 'C', text: 'concat()' },
                { label: 'D', text: 'append()' },
            ],
        },
        {
            id: 10,
            question: 'Which of the following is NOT a valid data type in JavaScript?',
            options: [
                { label: 'A', text: 'number' },
                { label: 'B', text: 'boolean' },
                { label: 'C', text: 'character', isCorrect: true },
                { label: 'D', text: 'string' },
            ],
        },
        {
            id: 11,
            question: 'Which of the following is the correct way to declare a JavaScript array?',
            options: [
                { label: 'A', text: 'var colors = {};' },
                { label: 'B', text: 'var colors = [];', isCorrect: true },
                { label: 'C', text: 'var colors = ();' },
                { label: 'D', text: 'var colors = "";' },
            ],
        },
        {
            id: 12,
            question: 'What does the "&&" operator do in JavaScript?',
            options: [
                { label: 'A', text: 'Logical OR' },
                { label: 'B', text: 'Logical AND', isCorrect: true },
                { label: 'C', text: 'Bitwise OR' },
                { label: 'D', text: 'Bitwise AND' },
            ],
        },
        {
            id: 13,
            question: 'What is the result of the following expression: 5 * "3"?',
            options: [
                { label: 'A', text: '15', isCorrect: true },
                { label: 'B', text: '53' },
                { label: 'C', text: '35' },
                { label: 'D', text: 'NaN' },
            ],
        },
        {
            id: 14,
            question: 'Which method is used to remove the last element from an array in JavaScript?',
            options: [
                { label: 'A', text: 'pop()', isCorrect: true },
                { label: 'B', text: 'remove()' },
                { label: 'C', text: 'delete()' },
                { label: 'D', text: 'splice()' },
            ],
        },
        {
            id: 15,
            question: 'What is the output of the following code snippet?\n\n```javascript\nconsole.log("5" + 3);\n```',
            options: [
                { label: 'A', text: '53', isCorrect: true },
                { label: 'B', text: '8' },
                { label: 'C', text: '15' },
                { label: 'D', text: 'NaN' },
            ],
        },
        {
            id: 16,
            question: 'Which of the following is NOT a valid JavaScript variable name?',
            options: [
                { label: 'A', text: 'myVar' },
                { label: 'B', text: '3var', isCorrect: true },
                { label: 'C', text: '_var' },
                { label: 'D', text: '$var' },
            ],
        },
        {
            id: 17,
            question: 'What is the correct way to round the number 7.25 to the nearest integer in JavaScript?',
            options: [
                { label: 'A', text: 'Math.round(7.25)' },
                { label: 'B', text: 'round(7.25)' },
                { label: 'C', text: 'Math.ceil(7.25)' },
                { label: 'D', text: 'Math.floor(7.25)', isCorrect: true },
            ],
        },
        {
            id: 18,
            question: 'What does the "||" operator do in JavaScript?',
            options: [
                { label: 'A', text: 'Logical AND' },
                { label: 'B', text: 'Bitwise OR' },
                { label: 'C', text: 'Logical OR', isCorrect: true },
                { label: 'D', text: 'Bitwise AND' },
            ],
        },
        {
            id: 19,
            question: 'What is the result of the following expression: "Hello".length?',
            options: [
                { label: 'A', text: 'Hello' },
                { label: 'B', text: '5', isCorrect: true },
                { label: 'C', text: 'undefined' },
                { label: 'D', text: 'NaN' },
            ],
        },
        {
            id: 20,
            question: 'Which built-in method returns the index of the first occurrence of a specified value in a string?',
            options: [
                { label: 'A', text: 'indexOf()', isCorrect: true },
                { label: 'B', text: 'search()' },
                { label: 'C', text: 'find()' },
                { label: 'D', text: 'locate()' },
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
            <title>Javascript Multiple Choice Question | Unstop Computer</title>
        <meta name="description" content="Explore a collection of multiple-choice questions (MCQs) on javascript, covering key concepts and features. Test your knowledge and deepen your understanding of  with our curated list." />

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
          href="https://unstopcomputer.tech/mcq/javascript-mcq"
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
          content="Javascript Multiple Choice Question | Unstop Computer"
        />
       <meta property="og:description" content="Explore a collection of multiple-choice questions (MCQs) on javascript, covering key concepts and features. Test your knowledge and deepen your understanding of javascript  with our curated list." />
            </Head>
            <section id="content-wrapper">
                <div>
                    <div className="relative xl:container">
                        <h1 className="title-font sm:text-4xl text-center text-3xl mb-2 font-medium text-blue-700">JavaScript Multiple Choice Question</h1>
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