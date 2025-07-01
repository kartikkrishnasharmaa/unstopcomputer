import McqLayout from "../../components/McqLayout";
import React, { useState } from 'react';
import Link from "next/link";
import Head from "next/head";
const cloud = () => {
    const [ questions ] = useState( [
        {
            id: 1,
            question: 'Which data structure organizes data in a sequential manner?',
            options: [
                { label: 'A', text: 'Queue' },
                { label: 'B', text: 'Stack' },
                { label: 'C', text: 'Array', isCorrect: true },
                { label: 'D', text: 'Tree' },
            ],
        },
        {
            id: 2,
            question: 'Which data structure allows elements to be accessed randomly using an index?',
            options: [
                { label: 'A', text: 'Queue' },
                { label: 'B', text: 'Stack' },
                { label: 'C', text: 'Array', isCorrect: true },
                { label: 'D', text: 'Linked List' },
            ],
        },
        {
            id: 3,
            question: 'Which data structure is based on the concept of First In First Out (FIFO)?',
            options: [
                { label: 'A', text: 'Stack' },
                { label: 'B', text: 'Array' },
                { label: 'C', text: 'Queue', isCorrect: true },
                { label: 'D', text: 'Tree' },
            ],
        },
        {
            id: 4,
            question: 'Which data structure stores elements in a non-contiguous memory location?',
            options: [
                { label: 'A', text: 'Array' },
                { label: 'B', text: 'Stack' },
                { label: 'C', text: 'Linked List', isCorrect: true },
                { label: 'D', text: 'Queue' },
            ],
        },
        {
            id: 5,
            question: 'Which data structure allows elements to be inserted or removed only from one end?',
            options: [
                { label: 'A', text: 'Queue' },
                { label: 'B', text: 'Stack', isCorrect: true },
                { label: 'C', text: 'Array' },
                { label: 'D', text: 'Linked List' },
            ],
        },
        {
            id: 6,
            question: 'Which data structure represents a collection of elements with each element containing a reference to its adjacent element?',
            options: [
                { label: 'A', text: 'Queue' },
                { label: 'B', text: 'Stack' },
                { label: 'C', text: 'Linked List', isCorrect: true },
                { label: 'D', text: 'Tree' },
            ],
        },
        {
            id: 7,
            question: 'Which data structure is a hierarchical collection of elements in which each element can have a parent and multiple children?',
            options: [
                { label: 'A', text: 'Stack' },
                { label: 'B', text: 'Queue' },
                { label: 'C', text: 'Tree', isCorrect: true },
                { label: 'D', text: 'Linked List' },
            ],
        },
        {
            id: 8,
            question: 'Which data structure is used to efficiently search, insert, and delete elements, and is based on a binary tree structure?',
            options: [
                { label: 'A', text: 'Queue' },
                { label: 'B', text: 'Binary Search Tree', isCorrect: true },
                { label: 'C', text: 'Stack' },
                { label: 'D', text: 'Linked List' },
            ],
        },
        {
            id: 9,
            question: 'Which data structure is a collection of elements in which each element has a unique identifier?',
            options: [
                { label: 'A', text: 'Array' },
                { label: 'B', text: 'Set', isCorrect: true },
                { label: 'C', text: 'Queue' },
                { label: 'D', text: 'Stack' },
            ],
        },
        {
            id: 10,
            question: 'Which data structure is a variant of a queue with two primary operations, enqueue and dequeue, but with a limited size?',
            options: [
                { label: 'A', text: 'Queue' },
                { label: 'B', text: 'Priority Queue' },
                { label: 'C', text: 'Circular Queue', isCorrect: true },
                { label: 'D', text: 'Stack' },
            ],
        },
        {
            id: 11,
            question: 'Which data structure is used for quickly finding a range of elements within a collection?',
            options: [
                { label: 'A', text: 'Array' },
                { label: 'B', text: 'Hash Table' },
                { label: 'C', text: 'Binary Search Tree' },
                { label: 'D', text: 'Segment Tree', isCorrect: true },
            ],
        },
        {
            id: 12,
            question: 'Which data structure efficiently maintains a set of elements with operations like union, find, and make set?',
            options: [
                { label: 'A', text: 'Heap' },
                { label: 'B', text: 'Disjoint Set', isCorrect: true },
                { label: 'C', text: 'Hash Table' },
                { label: 'D', text: 'Graph' },
            ],
        },
        {
            id: 13,
            question: 'Which data structure is used for representing graphs?',
            options: [
                { label: 'A', text: 'Tree' },
                { label: 'B', text: 'Stack' },
                { label: 'C', text: 'Linked List' },
                { label: 'D', text: 'Graph', isCorrect: true },
            ],
        },
        {
            id: 14,
            question: 'Which data structure is a special type of graph where each node is connected to every other node?',
            options: [
                { label: 'A', text: 'Binary Tree' },
                { label: 'B', text: 'Tree' },
                { label: 'C', text: 'Graph' },
                { label: 'D', text: 'Complete Graph', isCorrect: true },
            ],
        },
        {
            id: 15,
            question: 'Which data structure is used for mapping keys to values?',
            options: [
                { label: 'A', text: 'Array' },
                { label: 'B', text: 'Queue' },
                { label: 'C', text: 'Hash Table', isCorrect: true },
                { label: 'D', text: 'Linked List' },
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
            <title>Data Structure Multiple Choice Question | Unstop Computer</title>
        <meta name="description" content="Explore a collection of multiple-choice questions (MCQs) on  , covering key concepts and features. Test your knowledge and deepen your understanding of  with our curated list." />

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
          href="https://unstopcomputer.tech/mcq/data-structure-mcq"
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
          content="Data Structure Multiple Choice Question | Unstop Computer"
        />
       <meta property="og:description" content="Explore a collection of multiple-choice questions (MCQs) on data structure, covering key concepts and features. Test your knowledge and deepen your understanding of data structure with our curated list." />
            </Head>
            <section id="content-wrapper">
                <div>
                    <div className="relative xl:container">
                        <h1 className="title-font sm:text-4xl text-center text-3xl mb-2 font-medium text-blue-700">Data Structure Multiple Choice Question</h1>
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