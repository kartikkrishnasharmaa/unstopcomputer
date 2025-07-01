import McqLayout from "../../components/McqLayout";
import React, { useState } from 'react';
import Head from "next/head";
const Reactjs = () => {
    const [ questions ] = useState( [
        {
            id: 1,
            question: 'What does JSX stand for in ReactJS?',
            options: [
              { label: 'A', text: 'JavaScript XML', isCorrect: true },
              { label: 'B', text: 'JavaScript Extension' },
              { label: 'C', text: 'JavaScript XHR' },
              { label: 'D', text: 'JavaScript XSL' },
            ],
          },
          {
            id: 2,
            question: 'Which method is called once the component is mounted in ReactJS?',
            options: [
              { label: 'A', text: 'componentDidMount()', isCorrect: true },
              { label: 'B', text: 'componentWillMount()' },
              { label: 'C', text: 'componentWillUnmount()' },
              { label: 'D', text: 'componentDidUnmount()' },
            ],
          },
          {
            id: 3,
            question: 'What is the purpose of state in ReactJS?',
            options: [
              { label: 'A', text: 'To store data that can be changed over time', isCorrect: true },
              { label: 'B', text: 'To store data that remains constant throughout the component lifecycle' },
              { label: 'C', text: 'To handle user interactions' },
              { label: 'D', text: 'To manage routing in the application' },
            ],
          },
          {
            id: 4,
            question: 'What is the virtual DOM in ReactJS?',
            options: [
              { label: 'A', text: 'The actual representation of the DOM in the browser' },
              { label: 'B', text: 'A lightweight copy of the DOM maintained by React', isCorrect: true },
              { label: 'C', text: 'A JavaScript file that defines the structure of the DOM' },
              { label: 'D', text: 'A set of rules for updating the DOM efficiently' },
            ],
          },
          {
            id: 5,
            question: 'What is a prop in ReactJS?',
            options: [
              { label: 'A', text: 'A function that returns React elements' },
              { label: 'B', text: 'A data passed from parent to child component', isCorrect: true },
              { label: 'C', text: 'A built-in React method for updating the state' },
              { label: 'D', text: 'A way to handle user interactions in React components' },
            ],
          },
          {
            id: 6,
            question: 'What does the shouldComponentUpdate() method do in ReactJS?',
            options: [
              { label: 'A', text: 'It is called before the component is removed from the DOM' },
              { label: 'B', text: 'It determines if the component should re-render when its state or props change', isCorrect: true },
              { label: 'C', text: 'It is called after the component is updated in the DOM' },
              { label: 'D', text: 'It is called before the component is rendered for the first time' },
            ],
          },
          {
            id: 7,
            question: 'What is a ReactJS component?',
            options: [
              { label: 'A', text: 'A function that returns React elements' },
              { label: 'B', text: 'A reusable piece of code that can be composed to create complex UIs', isCorrect: true },
              { label: 'C', text: 'A JavaScript object that defines the structure of the DOM' },
              { label: 'D', text: 'A built-in React method for updating the state' },
            ],
          },
          {
            id: 8,
            question: 'What is the purpose of the setState() method in ReactJS?',
            options: [
              { label: 'A', text: 'To update the state of a component and trigger a re-render', isCorrect: true },
              { label: 'B', text: 'To define the initial state of a component' },
              { label: 'C', text: 'To retrieve the current state of a component' },
              { label: 'D', text: 'To handle user interactions within a component' },
            ],
          },
          {
            id: 9,
            question: 'What is the significance of keys in ReactJS lists?',
            options: [
              { label: 'A', text: 'Keys are used to identify which items have changed, are added, or are removed', isCorrect: true },
              { label: 'B', text: 'Keys are used to apply styling to list items' },
              { label: 'C', text: 'Keys are used to define the structure of a component' },
              { label: 'D', text: 'Keys are used to handle form input validation' },
            ],
          },
          {
            id: 10,
            question: 'What are React Hooks?',
            options: [
              { label: 'A', text: 'Functions that let you use React features without writing a class', isCorrect: true },
              { label: 'B', text: 'Specialized components used for routing in React applications' },
              { label: 'C', text: 'Methods used for asynchronous data fetching in React components' },
              { label: 'D', text: 'Built-in JavaScript functions used for DOM manipulation in React' },
            ],
          },
          {
            id: 11,
            question: 'What is the purpose of the useEffect() hook in React?',
            options: [
              { label: 'A', text: 'To handle form submissions within a React component' },
              { label: 'B', text: 'To perform side effects in function components', isCorrect: true },
              { label: 'C', text: 'To define the initial state of a component' },
              { label: 'D', text: 'To retrieve the current state of a component' },
            ],
          },
          {
            id: 12,
            question: 'What is the difference between state and props in ReactJS?',
            options: [
              { label: 'A', text: 'State is immutable, while props are mutable' },
              { label: 'B', text: 'Props are passed from parent to child components, while state is managed within a component', isCorrect: true },
              { label: 'C', text: 'State is used for handling user interactions, while props are used for defining the initial state of a component' },
              { label: 'D', text: 'State is used for functional components, while props are used for class components' },
            ],
          },
          {
            id: 13,
            question: 'What is the purpose of the useContext hook in React?',
            options: [
              { label: 'A', text: 'To create reusable custom hooks' },
              { label: 'B', text: 'To share state between components without using props', isCorrect: true },
              { label: 'C', text: 'To manage the lifecycle of functional components' },
              { label: 'D', text: 'To perform data fetching operations within a React component' },
            ],
          },
          {
            id: 14,
            question: 'What is the purpose of the useCallback hook in React?',
            options: [
              { label: 'A', text: 'To memoize expensive computations and optimize performance' },
              { label: 'B', text: 'To subscribe to changes in the Redux store' },
              { label: 'C', text: 'To define custom event handlers for user interactions' },
              { label: 'D', text: 'To memoize callback functions and prevent unnecessary re-renders', isCorrect: true },
            ],
          },
          {
            id: 15,
            question: 'What is the purpose of the useRef hook in React?',
            options: [
              { label: 'A', text: 'To handle component side effects' },
              { label: 'B', text: 'To access the DOM element directly within functional components', isCorrect: true },
              { label: 'C', text: 'To manage stateful logic in functional components' },
              { label: 'D', text: 'To handle asynchronous operations in React components' },
            ],
          },
          {
            id: 16,
            question: 'What is the difference between controlled and uncontrolled components in React?',
            options: [
              { label: 'A', text: 'Controlled components are managed by React, while uncontrolled components manage their own state' },
              { label: 'B', text: 'Controlled components use refs to access DOM elements, while uncontrolled components use state' },
              { label: 'C', text: 'Controlled components rely on React state to manage form data, while uncontrolled components use the DOM directly', isCorrect: true },
              { label: 'D', text: 'Controlled components are stateless, while uncontrolled components are stateful' },
            ],
          },
          {
            id: 17,
            question: 'What is the purpose of the useMemo hook in React?',
            options: [
              { label: 'A', text: 'To subscribe to changes in the Redux store' },
              { label: 'B', text: 'To memoize expensive computations and optimize performance', isCorrect: true },
              { label: 'C', text: 'To manage component lifecycle methods' },
              { label: 'D', text: 'To define custom event handlers for user interactions' },
            ],
          },
          {
            id: 18,
            question: 'What is the significance of the key prop in React lists?',
            options: [
              { label: 'A', text: 'Keys are used to apply styling to list items' },
              { label: 'B', text: 'Keys are used to define the structure of a component' },
              { label: 'C', text: 'Keys are used to identify which items have changed, are added, or are removed', isCorrect: true },
              { label: 'D', text: 'Keys are used to handle form input validation' },
            ],
          },
          {
            id: 19,
            question: 'What is the purpose of the useCallback hook in React?',
            options: [
              { label: 'A', text: 'To memoize callback functions and prevent unnecessary re-renders', isCorrect: true },
              { label: 'B', text: 'To subscribe to changes in the Redux store' },
              { label: 'C', text: 'To define custom event handlers for user interactions' },
              { label: 'D', text: 'To memoize expensive computations and optimize performance' },
            ],
          },
          {
            id: 20,
            question: 'What is the purpose of the useContext hook in React?',
            options: [
              { label: 'A', text: 'To create reusable custom hooks' },
              { label: 'B', text: 'To share state between components without using props', isCorrect: true },
              { label: 'C', text: 'To manage the lifecycle of functional components' },
              { label: 'D', text: 'To perform data fetching operations within a React component' },
            ],
          },
          {
            id: 21,
            question: 'What is the difference between stateful and stateless components in React?',
            options: [
              { label: 'A', text: 'Stateful components manage their own state, while stateless components rely on props for data', isCorrect: true },
              { label: 'B', text: 'Stateful components are more performant than stateless components' },
              { label: 'C', text: 'Stateful components are used for functional components, while stateless components are used for class components' },
              { label: 'D', text: 'Stateful components do not re-render when their state changes' },
            ],
          },
          {
            id: 22,
            question: 'What is the purpose of the useHistory hook in React Router?',
            options: [
              { label: 'A', text: 'To create reusable custom hooks' },
              { label: 'B', text: 'To share state between components without using props' },
              { label: 'C', text: 'To manage the browser history and navigate between pages', isCorrect: true },
              { label: 'D', text: 'To perform data fetching operations within a React component' },
            ],
          },
          {
            id: 23,
            question: 'What is a Higher Order Component (HOC) in React?',
            options: [
              { label: 'A', text: 'A component that renders its children without any modifications' },
              { label: 'B', text: 'A function that takes a component and returns a new component with additional functionality', isCorrect: true },
              { label: 'C', text: 'A component that manages global state for an application' },
              { label: 'D', text: 'A component that renders a loading indicator while waiting for data to load' },
            ],
          },
          {
            id: 24,
            question: 'What is the purpose of the useEffect hook in React?',
            options: [
              { label: 'A', text: 'To manage component state' },
              { label: 'B', text: 'To perform side effects in function components', isCorrect: true },
              { label: 'C', text: 'To define custom event handlers for user interactions' },
              { label: 'D', text: 'To subscribe to changes in the Redux store' },
            ],
          },
          {
            id: 25,
            question: 'What is the significance of the key prop in React lists?',
            options: [
              { label: 'A', text: 'Keys are used to apply styling to list items' },
              { label: 'B', text: 'Keys are used to define the structure of a component' },
              { label: 'C', text: 'Keys are used to identify which items have changed, are added, or are removed', isCorrect: true },
              { label: 'D', text: 'Keys are used to handle form input validation' },
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
            <title>React Js Multiple Choice Question | Unstop Computer</title>
        <meta name="description" content="Explore a collection of multiple-choice questions (MCQs) on react js , covering key concepts and features. Test your knowledge and deepen your understanding of react js with our curated list." />

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
          href="https://unstopcomputer.tech/mcq/react-mcq"
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
          content="React Js Multiple Choice Question | Unstop Computer"
        />
       <meta property="og:description" content="Explore a collection of multiple-choice questions (MCQs) on react js, covering key concepts and features. Test your knowledge and deepen your understanding of react js with our curated list." />
            </Head>
            <section id="content-wrapper">
                <div>
                    <div className="relative xl:container">
                        <h1 className="title-font sm:text-4xl text-center text-3xl mb-2 font-medium text-blue-700">ReactJs Multiple Choice Question</h1>
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

export default Reactjs;