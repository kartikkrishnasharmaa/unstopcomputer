import McqLayout from "../../components/McqLayout";
import React, { useState } from 'react';
import Head from "next/head";
const ml = () => {
    const [ questions ] = useState( [
        {
            id: 1,
            question: 'Which keyword is used to declare a class in Java?',
            options: [
                { label: 'A', text: 'class', isCorrect: true },
                { label: 'B', text: 'void' },
                { label: 'C', text: 'public' },
                { label: 'D', text: 'new' },
            ],
        },
        {
            id: 2,
            question: 'Which data type is used to store whole numbers in Java?',
            options: [
                { label: 'A', text: 'int', isCorrect: true },
                { label: 'B', text: 'String' },
                { label: 'C', text: 'double' },
                { label: 'D', text: 'char' },
            ],
        },
        {
            id: 3,
            question: 'What is the output of the following code snippet?\n\n```java\nSystem.out.println(5 == 5);\n```',
            options: [
                { label: 'A', text: 'true', isCorrect: true },
                { label: 'B', text: 'false' },
                { label: 'C', text: 'error' },
                { label: 'D', text: '0' },
            ],
        },
        {
            id: 4,
            question: 'Which method is called automatically when an object of a class is created?',
            options: [
                { label: 'A', text: 'run()' },
                { label: 'B', text: 'start()' },
                { label: 'C', text: 'main()' },
                { label: 'D', text: 'constructor', isCorrect: true },
            ],
        },
        {
            id: 5,
            question: 'Which keyword is used to refer to the current instance of a class in Java?',
            options: [
                { label: 'A', text: 'this', isCorrect: true },
                { label: 'B', text: 'super' },
                { label: 'C', text: 'self' },
                { label: 'D', text: 'current' },
            ],
        },
        {
            id: 6,
            question: 'What is the output of the following code snippet?\n\n```java\nint x = 5;\nSystem.out.println(x++);\n```',
            options: [
                { label: 'A', text: '5' },
                { label: 'B', text: '6', isCorrect: true },
                { label: 'C', text: 'error' },
                { label: 'D', text: '0' },
            ],
        },
        {
            id: 7,
            question: 'Which keyword is used to create a subclass in Java?',
            options: [
                { label: 'A', text: 'this' },
                { label: 'B', text: 'super' },
                { label: 'C', text: 'extends', isCorrect: true },
                { label: 'D', text: 'class' },
            ],
        },
        {
            id: 8,
            question: 'Which of the following is NOT a valid Java identifier?',
            options: [
                { label: 'A', text: 'myVariable' },
                { label: 'B', text: '2ndVariable' },
                { label: 'C', text: '_myVariable' },
                { label: 'D', text: 'MyVariable123', isCorrect: true },
            ],
        },
        {
            id: 9,
            question: 'Which operator is used to compare two values for equality in Java?',
            options: [
                { label: 'A', text: '==' },
                { label: 'B', text: '=' },
                { label: 'C', text: '===' },
                { label: 'D', text: 'equals()', isCorrect: true },
            ],
        },
        {
            id: 10,
            question: 'Which of the following statements is used to exit from a loop in Java?',
            options: [
                { label: 'A', text: 'break', isCorrect: true },
                { label: 'B', text: 'continue' },
                { label: 'C', text: 'exit' },
                { label: 'D', text: 'return' },
            ],
        },
        {
            id: 11,
            question: 'Which keyword is used to define a constant value in Java?',
            options: [
                { label: 'A', text: 'static' },
                { label: 'B', text: 'final', isCorrect: true },
                { label: 'C', text: 'constant' },
                { label: 'D', text: 'const' },
            ],
        },
        {
            id: 12,
            question: 'Which of the following access modifiers restricts access the least in Java?',
            options: [
                { label: 'A', text: 'private' },
                { label: 'B', text: 'protected' },
                { label: 'C', text: 'public', isCorrect: true },
                { label: 'D', text: 'default' },
            ],
        },
        {
            id: 13,
            question: 'Which of the following is a type of loop in Java that is executed at least once?',
            options: [
                { label: 'A', text: 'for' },
                { label: 'B', text: 'while' },
                { label: 'C', text: 'do-while', isCorrect: true },
                { label: 'D', text: 'foreach' },
            ],
        },
        {
            id: 14,
            question: 'What does the "static" keyword mean in Java?',
            options: [
                { label: 'A', text: 'Dynamic binding' },
                { label: 'B', text: 'Class level' },
                { label: 'C', text: 'Instance level' },
                { label: 'D', text: 'Shared among all instances of the class', isCorrect: true },
            ],
        },
        {
            id: 15,
            question: 'Which of the following is not a valid type of variable in Java?',
            options: [
                { label: 'A', text: 'int' },
                { label: 'B', text: 'string', isCorrect: true },
                { label: 'C', text: 'double' },
                { label: 'D', text: 'boolean' },
            ],
        },
        {
            id: 16,
            question: 'What is the result of 5 / 2 in Java?',
            options: [
                { label: 'A', text: '2' },
                { label: 'B', text: '2.5' },
                { label: 'C', text: '2.0' },
                { label: 'D', text: '2', isCorrect: true },
            ],
        },
        {
            id: 17,
            question: 'Which method is called when an object is garbage collected in Java?',
            options: [
                { label: 'A', text: 'finalize()', isCorrect: true },
                { label: 'B', text: 'destroy()' },
                { label: 'C', text: 'garbageCollector()' },
                { label: 'D', text: 'delete()' },
            ],
        },
        {
            id: 18,
            question: 'What is the purpose of the "toString()" method in Java?',
            options: [
                { label: 'A', text: 'Converts a string to uppercase' },
                { label: 'B', text: 'Converts a string to lowercase' },
                { label: 'C', text: 'Returns a string representation of an object', isCorrect: true },
                { label: 'D', text: 'Concatenates two strings' },
            ],
        },
        {
            id: 19,
            question: 'What is the output of the following code snippet?\n\n```java\nint[] numbers = {1, 2, 3, 4, 5};\nSystem.out.println(numbers[3]);\n```',
            options: [
                { label: 'A', text: '1' },
                { label: 'B', text: '2' },
                { label: 'C', text: '3' },
                { label: 'D', text: '4', isCorrect: true },
            ],
        },
        {
            id: 20,
            question: 'Which keyword is used to prevent a method from being overridden in Java?',
            options: [
                { label: 'A', text: 'override' },
                { label: 'B', text: 'final', isCorrect: true },
                { label: 'C', text: 'static' },
                { label: 'D', text: 'private' },
            ],
        },
        {
            id: 21,
            question: 'Which operator is used to concatenate strings in Java?',
            options: [
                { label: 'A', text: '+' },
                { label: 'B', text: '-' },
                { label: 'C', text: '*' },
                { label: 'D', text: 'concat()', isCorrect: true },
            ],
        },
        {
            id: 22,
            question: 'Which class is used to read input from the user in Java?',
            options: [
                { label: 'A', text: 'System.in' },
                { label: 'B', text: 'Scanner', isCorrect: true },
                { label: 'C', text: 'Reader' },
                { label: 'D', text: 'InputStream' },
            ],
        },
        {
            id: 23,
            question: 'What is the result of the expression (5 > 3) && (8 < 5) in Java?',
            options: [
                { label: 'A', text: 'true' },
                { label: 'B', text: 'false', isCorrect: true },
                { label: 'C', text: 'error' },
                { label: 'D', text: '0' },
            ],
        },
        {
            id: 24,
            question: 'What is the output of the following code snippet?\n\n```java\nString str = "hello";\nSystem.out.println(str.charAt(2));\n```',
            options: [
                { label: 'A', text: 'e', isCorrect: true },
                { label: 'B', text: 'l' },
                { label: 'C', text: 'h' },
                { label: 'D', text: 'o' },
            ],
        },
        {
            id: 25,
            question: 'Which statement is used to manually throw an exception in Java?',
            options: [
                { label: 'A', text: 'throw', isCorrect: true },
                { label: 'B', text: 'throws' },
                { label: 'C', text: 'try' },
                { label: 'D', text: 'catch' },
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
            <title>Java Multiple Choice Question | Unstop Computer</title>
        <meta name="description" content="Explore a collection of multiple-choice questions (MCQs) on java , covering key concepts and features. Test your knowledge and deepen your understanding of java with our curated list." />

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
          href="https://unstopcomputer.tech/mcq/java-mcq"
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
          content="Java Multiple Choice Question | Unstop Computer"
        />
       <meta property="og:description" content="Explore a collection of multiple-choice questions (MCQs) on java, covering key concepts and features. Test your knowledge and deepen your understanding of java with our curated list." />
            </Head>
            <section id="content-wrapper">
                <div>
                    <div className="relative xl:container">
                        <h1 className="title-font sm:text-4xl text-center text-3xl mb-2 font-medium text-blue-700">Java Multiple Choice Question</h1>
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