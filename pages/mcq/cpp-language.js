import McqLayout from "../../components/McqLayout";
import React, { useState } from 'react';
import Link from "next/link";
import Head from "next/head";
const cloud = () => {
    const [ questions ] = useState( 
        [
            {
                id: 1,
                question: 'What is the correct syntax to define a function in C++?',
                options: [
                    { label: 'A', text: 'function myFunction() {};', isCorrect: true },
                    { label: 'B', text: 'void myFunction() {}' },
                    { label: 'C', text: 'def myFunction() {}' },
                    { label: 'D', text: 'def myFunction():' },
                ]
            },
            {
                id: 2,
                question: 'Which data type in C++ is used to store a single character?',
                options: [
                    { label: 'A', text: 'char', isCorrect: true },
                    { label: 'B', text: 'int' },
                    { label: 'C', text: 'string' },
                    { label: 'D', text: 'float' },
                ]
            },
            {
                id: 3,
                question: 'What is the output of the following code snippet: \n int x = 5; \n cout << x++;',
                options: [
                    { label: 'A', text: '5' },
                    { label: 'B', text: '6', isCorrect: true },
                    { label: 'C', text: 'Compiler Error' },
                    { label: 'D', text: 'Undefined Behavior' },
                ]
            },
            {
                id: 4,
                question: 'Which operator is used to allocate memory for a variable in C++?',
                options: [
                    { label: 'A', text: 'new', isCorrect: true },
                    { label: 'B', text: 'malloc' },
                    { label: 'C', text: 'alloc' },
                    { label: 'D', text: 'allocate' },
                ]
            },
            {
                id: 5,
                question: 'What is the correct way to access the "age" member variable of an object "person" of class "Person" in C++?',
                options: [
                    { label: 'A', text: 'person.age;', isCorrect: true },
                    { label: 'B', text: 'person->age;' },
                    { label: 'C', text: 'person::age;' },
                    { label: 'D', text: 'person[age];' },
                ]
            },
            {
                id: 6,
                question: 'Which keyword is used to inherit a class in C++?',
                options: [
                    { label: 'A', text: 'extend' },
                    { label: 'B', text: 'inherits' },
                    { label: 'C', text: 'extend class', isCorrect: true },
                    { label: 'D', text: 'inherit' },
                ]
            },
            {
                id: 7,
                question: 'What is the output of the following code snippet: \n int x = 10; \n int y = x++ + ++x; \n cout << y;',
                options: [
                    { label: 'A', text: '20' },
                    { label: 'B', text: '21' },
                    { label: 'C', text: '22', isCorrect: true },
                    { label: 'D', text: 'Compiler Error' },
                ]
            },
            {
                id: 8,
                question: 'Which of the following is NOT a valid C++ comment?',
                options: [
                    { label: 'A', text: '// This is a comment', isCorrect: true },
                    { label: 'B', text: '/* This is a comment */' },
                    { label: 'C', text: '# This is a comment' },
                    { label: 'D', text: '// This is another comment' },
                ]
            },
            {
                id: 9,
                question: 'What is the purpose of the "endl" manipulator in C++?',
                options: [
                    { label: 'A', text: 'It ends the program execution.' },
                    { label: 'B', text: 'It moves the cursor to the next line.', isCorrect: true },
                    { label: 'C', text: 'It clears the output buffer.' },
                    { label: 'D', text: 'It inserts a new line character.' },
                ]
            },
            {
                id: 10,
                question: 'What is the function of the "cin" object in C++?',
                options: [
                    { label: 'A', text: 'To display output on the console.' },
                    { label: 'B', text: 'To write data to a file.' },
                    { label: 'C', text: 'To read input from the console.', isCorrect: true },
                    { label: 'D', text: 'To allocate memory.' },
                ]
            },
            {
                id: 11,
                question: 'What does the "static" keyword mean when used with a class member in C++?',
                options: [
                    { label: 'A', text: 'It specifies that the member is accessible only within its class.' },
                    { label: 'B', text: 'It indicates that the member should not be initialized.', isCorrect: true },
                    { label: 'C', text: 'It signifies that the member is shared among all objects of the class.' },
                    { label: 'D', text: 'It defines a constant member.' },
                ]
            },
            {
                id: 12,
                question: 'Which operator is used to access the member functions and variables of a class in C++?',
                options: [
                    { label: 'A', text: '->', isCorrect: true },
                    { label: 'B', text: '.' },
                    { label: 'C', text: '::' },
                    { label: 'D', text: ':' },
                ]
            },
            {
                id: 13,
                question: 'What is the correct way to declare a reference variable in C++?',
                options: [
                    { label: 'A', text: 'int &x = 10;' },
                    { label: 'B', text: 'int* x;' },
                    { label: 'C', text: 'int& x = y;', isCorrect: true },
                    { label: 'D', text: 'int x = &y;' },
                ]
            },
            {
                id: 14,
                question: 'What is the output of the following code snippet: \n int arr[5] = {1, 2, 3}; \n cout << arr[3];',
                options: [
                    { label: 'A', text: '0' },
                    { label: 'B', text: '1' },
                    { label: 'C', text: '2' },
                    { label: 'D', text: 'Undefined Behavior', isCorrect: true },
                ]
            },
            {
                id: 15,
                question: 'What does the "sizeof" operator return in C++?',
                options: [
                    { label: 'A', text: 'The address of a variable.' },
                    { label: 'B', text: 'The size of a datatype in bytes.', isCorrect: true },
                    { label: 'C', text: 'The value of a variable.' },
                    { label: 'D', text: 'The datatype of a variable.' },
                ]
            },
            {
                id: 16,
                question: 'What is the function of the "break" statement in a switch case statement in C++?',
                options: [
                    { label: 'A', text: 'To skip the current iteration of a loop.' },
                    { label: 'B', text: 'To exit the switch case block.', isCorrect: true },
                    { label: 'C', text: 'To terminate the program execution.' },
                    { label: 'D', text: 'To continue to the next case.' },
                ]
            },
            {
                id: 17,
                question: 'What is the purpose of the "continue" statement in C++?',
                options: [
                    { label: 'A', text: 'To exit the loop.' },
                    { label: 'B', text: 'To jump to the next iteration of the loop.', isCorrect: true },
                    { label: 'C', text: 'To return from a function.' },
                    { label: 'D', text: 'To print the loop index.' },
                ]
            },
            {
                id: 18,
                question: 'What is the difference between "++i" and "i++" in C++?',
                options: [
                    { label: 'A', text: '"++i" increments the value of i and returns the new value, while "i++" returns the value of i and then increments it.', isCorrect: true },
                    { label: 'B', text: '"++i" increments the value of i, while "i++" decrements it.' },
                    { label: 'C', text: '"++i" decrements the value of i and returns the new value, while "i++" returns the value of i and then decrements it.' },
                    { label: 'D', text: '"++i" and "i++" have the same functionality.' },
                ]
            },
            {
                id: 19,
                question: 'What is the output of the following code snippet: \n int x = 5, y = 10; \n cout << (x > y ? x : y);',
                options: [
                    { label: 'A', text: '5' },
                    { label: 'B', text: '10' },
                    { label: 'C', text: 'Compiler Error' },
                    { label: 'D', text: '10', isCorrect: true },
                ]
            },
            {
                id: 20,
                question: 'Which of the following statements is true about the "virtual" keyword in C++?',
                options: [
                    { label: 'A', text: 'It is used to declare a pure virtual function.' },
                    { label: 'B', text: 'It specifies that a function can be overridden in derived classes.', isCorrect: true },
                    { label: 'C', text: 'It is used to define a function inside a class.' },
                    { label: 'D', text: 'It is used to prevent inheritance.' },
                ]
            },
            {
                id: 21,
                question: 'What is the purpose of the "typeid" operator in C++?',
                options: [
                    { label: 'A', text: 'To determine the type of an object at runtime.', isCorrect: true },
                    { label: 'B', text: 'To perform dynamic casting.' },
                    { label: 'C', text: 'To perform static casting.' },
                    { label: 'D', text: 'To determine the size of an object.' },
                ]
            },
            {
                id: 22,
                question: 'What is the syntax for creating an object of class "MyClass" using dynamic memory allocation in C++?',
                options: [
                    { label: 'A', text: 'MyClass obj();' },
                    { label: 'B', text: 'MyClass obj = new MyClass();' },
                    { label: 'C', text: 'MyClass* obj = new MyClass();', isCorrect: true },
                    { label: 'D', text: 'MyClass obj = new MyClass;' },
                ]
            },
            {
                id: 23,
                question: 'What is the purpose of the "friend" keyword in C++?',
                options: [
                    { label: 'A', text: 'To specify the base class in inheritance.' },
                    { label: 'B', text: 'To declare a function or class as a friend, granting it access to private and protected members of the class.', isCorrect: true },
                    { label: 'C', text: 'To declare a function as a member of a class.' },
                    { label: 'D', text: 'To specify the derived class in inheritance.' },
                ]
            },
            {
                id: 24,
                question: 'Which of the following statements about templates in C++ is true?',
                options: [
                    { label: 'A', text: 'Templates are used to define generic classes and functions.', isCorrect: true },
                    { label: 'B', text: 'Templates can only be used with built-in data types.' },
                    { label: 'C', text: 'Templates are used to define private members of a class.' },
                    { label: 'D', text: 'Templates are not supported in C++.' },
                ]
            },
            {
                id: 25,
                question: 'What is the difference between "new" and "malloc()" in C++?',
                options: [
                    { label: 'A', text: '"new" is an operator used for dynamic memory allocation and also calls the constructor, while "malloc()" is a function used for dynamic memory allocation without calling the constructor.', isCorrect: true },
                    { label: 'B', text: '"new" is used for static memory allocation, while "malloc()" is used for dynamic memory allocation.' },
                    { label: 'C', text: '"new" is used for array allocation, while "malloc()" is used for single variable allocation.' },
                    { label: 'D', text: '"new" is a function used for dynamic memory allocation and also calls the constructor, while "malloc()" is an operator used for dynamic memory allocation without calling the constructor.' },
                ]
            },
            {
                id: 26,
                question: 'What is the purpose of the "delete" operator in C++?',
                options: [
                    { label: 'A', text: 'To deallocate memory allocated using "new".', isCorrect: true },
                    { label: 'B', text: 'To deallocate memory allocated using "malloc()".' },
                    { label: 'C', text: 'To delete a file from the file system.' },
                    { label: 'D', text: 'To remove an element from a container.' },
                ]
            },
            {
                id: 27,
                question: 'What is the difference between "private" and "protected" access specifiers in C++ classes?',
                options: [
                    { label: 'A', text: '"private" members are accessible only within the same class, while "protected" members are accessible within the same class and its derived classes.', isCorrect: true },
                    { label: 'B', text: '"private" members are accessible within the same class and its derived classes, while "protected" members are accessible only within the same class.' },
                    { label: 'C', text: '"private" members are accessible from anywhere in the program, while "protected" members are accessible only within the same class.' },
                    { label: 'D', text: '"private" members are accessible only within the same class, while "protected" members are accessible from anywhere in the program.' },
                ]
            },
            {
                id: 28,
                question: 'What is function overloading in C++?',
                options: [
                    { label: 'A', text: 'It refers to the ability to define multiple functions with the same name but different return types.', },
                    { label: 'B', text: 'It refers to the ability to define multiple functions with the same name but different access specifiers.' },
                    { label: 'C', text: 'It refers to the ability to define multiple functions with the same name but different parameter lists.', isCorrect: true },
                    { label: 'D', text: 'It refers to the ability to define multiple functions with the same name but in different classes.' },
                ]
            },
            {
                id: 29,
                question: 'What is a constructor in C++?',
                options: [
                    { label: 'A', text: 'It is a function that is called when an object is created.', isCorrect: true },
                    { label: 'B', text: 'It is a function that is called when an object is destroyed.' },
                    { label: 'C', text: 'It is a function that is called when an object is modified.' },
                    { label: 'D', text: 'It is a function that is called when an object is copied.' },
                ]
            },
            {
                id: 30,
                question: 'What is the purpose of the "this" pointer in C++?',
                options: [
                    { label: 'A', text: 'To store the address of the current object.', isCorrect: true },
                    { label: 'B', text: 'To store the address of the previous object.' },
                    { label: 'C', text: 'To store the address of the next object.' },
                    { label: 'D', text: 'To store the address of the main function.' },
                ]
            },
            {
                id: 31,
                question: 'What is the difference between "class" and "struct" in C++?',
                options: [
                    { label: 'A', text: 'There is no difference between "class" and "struct" in C++.' },
                    { label: 'B', text: 'In a "class", members are private by default, while in a "struct", members are public by default.', isCorrect: true },
                    { label: 'C', text: 'In a "class", members are public by default, while in a "struct", members are private by default.' },
                    { label: 'D', text: 'In a "class", members are protected by default, while in a "struct", members are private by default.' },
                ]
            },
            {
                id: 32,
                question: 'What is the purpose of inheritance in C++?',
                options: [
                    { label: 'A', text: 'To create multiple instances of a class.' },
                    { label: 'B', text: 'To allow a class to inherit properties and behaviors from another class.', isCorrect: true },
                    { label: 'C', text: 'To prevent other classes from accessing certain members of a class.' },
                    { label: 'D', text: 'To restrict the access to certain members of a class.' },
                ]
            }
        ]
        
    );

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
            <title>C++ Language Multiple Choice Question | Unstop Computer</title>
        <meta name="description" content="Explore a collection of multiple-choice questions (MCQs) on c++ language , covering key concepts and features. Test your knowledge and deepen your understanding of c++ language  with our curated list." />

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
          href="https://unstopcomputer.tech/mcq/cpp-language"
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
          content="C++ Language Multiple Choice Question | Unstop Computer"
        />
       <meta property="og:description" content="Explore a collection of multiple-choice questions (MCQs) on c++ language , covering key concepts and features. Test your knowledge and deepen your understanding of c++ language with our curated list." />
            </Head>
            <section id="content-wrapper">
                <div>
                    <div className="relative xl:container">
                        <h1 className="title-font sm:text-4xl text-center text-3xl mb-2 font-medium text-blue-700">C++ Multiple Choice Question</h1>
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