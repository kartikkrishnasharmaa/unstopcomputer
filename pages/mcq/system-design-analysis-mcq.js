import McqLayout from "../../components/McqLayout";
import React, { useState } from 'react';
import Head from "next/head";
const sad = () => {
    const [ questions ] = useState( [
            {
              id: 1,
              question: 'What is the primary purpose of System Design?',
              options: [
                { label: 'A', text: 'To define the architecture of a system', isCorrect: true },
                { label: 'B', text: 'To write code efficiently' },
                { label: 'C', text: 'To manage databases' },
                { label: 'D', text: 'To analyze user requirements' },
              ],
            },
            {
              id: 2,
              question: 'Which of the following is NOT a step in System Analysis?',
              options: [
                { label: 'A', text: 'Requirement Gathering' },
                { label: 'B', text: 'Designing the system', isCorrect: true },
                { label: 'C', text: 'System Modeling' },
                { label: 'D', text: 'Feasibility Study' },
              ],
            },{
                id: 3,
                question: 'What is meant by the term "scalability" in System Design?',
                options: [
                  { label: 'A', text: 'The ability of a system to handle a growing amount of work' , isCorrect: true },
                  { label: 'B', text: 'The speed of the system' },
                  { label: 'C', text: 'The size of the system' },
                  { label: 'D', text: 'The security of the system' },
                ],
              },
              {
                id: 4,
                question: 'What does UML stand for?',
                options: [
                  { label: 'A', text: 'Unified Modeling Language', isCorrect: true },
                  { label: 'B', text: 'Uniform Modeling Language' },
                  { label: 'C', text: 'Universal Modeling Language' },
                  { label: 'D', text: 'United Modeling Language' },
                ],
              },
              {
                id: 5,
                question: 'What is the purpose of a use case diagram in System Analysis?',
                options: [
                  { label: 'A', text: 'To visualize the interactions between actors and the system' , isCorrect: true },
                  { label: 'B', text: 'To design the database schema' },
                  { label: 'C', text: 'To implement security measures' },
                  { label: 'D', text: 'To analyze the performance of the system' },
                ],
              },
              {
                id: 6,
                question: 'Which of the following is NOT a characteristic of a good software design?',
                options: [
                  { label: 'A', text: 'High coupling' },
                  { label: 'B', text: 'Low cohesion', isCorrect: true },
                  { label: 'C', text: 'Scalability' },
                  { label: 'D', text: 'Flexibility' },
                ],
              },
              {
                id: 7,
                question: 'What is the purpose of a sequence diagram in System Design?',
                options: [
                  { label: 'A', text: 'To show the flow of messages between objects or components' , isCorrect: true },
                  { label: 'B', text: 'To visualize the data flow within the system' },
                  { label: 'C', text: 'To design the user interface' },
                  { label: 'D', text: 'To represent the relationships between classes' },
                ],
              },
              {
                id: 8,
                question: 'What is meant by the term "modularity" in System Design?',
                options: [
                  { label: 'A', text: 'The ability of a system to handle concurrent users' },
                  { label: 'B', text: 'The process of dividing a system into smaller, manageable components', isCorrect: true },
                  { label: 'C', text: 'The process of optimizing the system for performance' },
                  { label: 'D', text: 'The process of documenting the system architecture' },
                ],
              },
              {
                id: 9,
                question: 'Which of the following is NOT a type of software testing?',
                options: [
                  { label: 'A', text: 'Integration testing' },
                  { label: 'B', text: 'Unit testing' },
                  { label: 'C', text: 'Requirement testing', isCorrect: true },
                  { label: 'D', text: 'Acceptance testing' },
                ],
              },
              {
                id: 10,
                question: 'What is a use case in System Analysis?',
                options: [
                  { label: 'A', text: 'A description of the user interface' },
                  { label: 'B', text: 'A set of actions performed by a system to achieve a goal', isCorrect: true },
                  { label: 'C', text: 'A representation of the system architecture' },
                  { label: 'D', text: 'A diagram that shows the relationships between classes' },
                ],
              },
              {
                id: 11,
                question: 'What is the purpose of a data flow diagram (DFD) in System Analysis?',
                options: [
                  { label: 'A', text: 'To show the flow of data through the system' , isCorrect: true },
                  { label: 'B', text: 'To represent the relationships between objects' },
                  { label: 'C', text: 'To design the user interface' },
                  { label: 'D', text: 'To visualize the interactions between actors and the system' },
                ],
              },
              {
                id: 12,
                question: 'Which of the following is NOT a characteristic of a good software requirement?',
                options: [
                  { label: 'A', text: 'Unambiguous' },
                  { label: 'B', text: 'Consistent' },
                  { label: 'C', text: 'Subjective' , isCorrect: true },
                  { label: 'D', text: 'Complete' },
                ],
              },
              {
                id: 13,
                question: 'What is meant by the term "black box testing"?',
                options: [
                  { label: 'A', text: 'Testing based on the internal logic and structure of the code' },
                  { label: 'B', text: 'Testing without knowledge of the internal workings of the application', isCorrect: true },
                  { label: 'C', text: 'Testing of individual components in isolation' },
                  { label: 'D', text: 'Testing conducted by end-users' },
                ],
              },
              {
                id: 14,
                question: 'What does CRUD stand for in database management?',
                options: [
                  { label: 'A', text: 'Create, Run, Update, Delete' },
                  { label: 'B', text: 'Create, Read, Update, Display' },
                  { label: 'C', text: 'Create, Retrieve, Update, Delete', isCorrect: true },
                  { label: 'D', text: 'Copy, Read, Update, Delete' },
                ],
              },
              {
                id: 15,
                question: 'What is the purpose of a class diagram in System Design?',
                options: [
                  { label: 'A', text: 'To represent the flow of control between objects' },
                  { label: 'B', text: 'To visualize the interactions between actors and the system' },
                  { label: 'C', text: 'To model the structure of a system using classes and their relationships', isCorrect: true },
                  { label: 'D', text: 'To design the user interface' },
                ],
              },
              {
                id: 16,
                question: 'Which of the following is NOT a type of software maintenance?',
                options: [
                  { label: 'A', text: 'Corrective maintenance' },
                  { label: 'B', text: 'Adaptive maintenance' },
                  { label: 'C', text: 'Perfective maintenance' },
                  { label: 'D', text: 'Predictive maintenance', isCorrect: true },
                ],
              },
              {
                id: 17,
                question: 'What is meant by the term "coupling" in System Design?',
                options: [
                  { label: 'A', text: 'The degree of interdependence between modules or components' , isCorrect: true },
                  { label: 'B', text: 'The process of dividing a system into smaller, manageable components' },
                  { label: 'C', text: 'The process of documenting the system architecture' },
                  { label: 'D', text: 'The process of optimizing the system for performance' },
                ],
              },
              {
                id: 18,
                question: 'What is the purpose of a feasibility study in System Analysis?',
                options: [
                  { label: 'A', text: 'To design the user interface' },
                  { label: 'B', text: 'To evaluate whether a proposed system is feasible and practical', isCorrect: true },
                  { label: 'C', text: 'To represent the relationships between classes' },
                  { label: 'D', text: 'To visualize the data flow within the system' },
                ],
              },
              {
                id: 19,
                question: 'What is the purpose of a state diagram in System Design?',
                options: [
                  { label: 'A', text: 'To visualize the interactions between actors and the system' },
                  { label: 'B', text: 'To represent the flow of control between objects' },
                  { label: 'C', text: 'To model the behavior of a system by showing the possible states and transitions', isCorrect: true },
                  { label: 'D', text: 'To design the user interface' },
                ],
              },
              {
                id: 20,
                question: 'Which of the following is NOT a software development life cycle model?',
                options: [
                  { label: 'A', text: 'Agile' },
                  { label: 'B', text: 'Spiral' },
                  { label: 'C', text: 'Waterfall' },
                  { label: 'D', text: 'Linear', isCorrect: true },
                ],
              },
              {
                id: 21,
                question: 'What is meant by the term "functional requirement" in System Analysis?',
                options: [
                  { label: 'A', text: 'Requirements related to the appearance and behavior of the system' },
                  { label: 'B', text: 'Requirements related to the performance and scalability of the system' },
                  { label: 'C', text: 'Requirements related to the functions or capabilities of the system', isCorrect: true },
                  { label: 'D', text: 'Requirements related to the security of the system' },
                ],
              },
              {
                id: 22,
                question: 'What is the purpose of a prototype in System Design?',
                options: [
                  { label: 'A', text: 'To represent the relationships between classes' },
                  { label: 'B', text: 'To design the user interface' },
                  { label: 'C', text: 'To create a preliminary version of a system to gather feedback and validate requirements', isCorrect: true },
                  { label: 'D', text: 'To visualize the data flow within the system' },
                ],
              },
              {
                id: 23,
                question: 'What does MVP stand for in software development?',
                options: [
                  { label: 'A', text: 'Most Valuable Product' },
                  { label: 'B', text: 'Minimum Viable Product', isCorrect: true },
                  { label: 'C', text: 'Maximum Viable Product' },
                  { label: 'D', text: 'Most Viable Prototype' },
                ],
              },
              {
                id: 24,
                question: 'Which of the following is NOT a non-functional requirement?',
                options: [
                  { label: 'A', text: 'Performance' },
                  { label: 'B', text: 'Scalability' },
                  { label: 'C', text: 'User Interface', isCorrect: true },
                  { label: 'D', text: 'Reliability' },
                ],
              },
              {
                id: 25,
                question: 'What is the purpose of a deployment diagram in System Design?',
                options: [
                  { label: 'A', text: 'To represent the structure of a system using classes and their relationships' },
                  { label: 'B', text: 'To visualize the interactions between actors and the system' },
                  { label: 'C', text: 'To model the deployment of software components to hardware nodes', isCorrect: true },
                  { label: 'D', text: 'To design the user interface' },
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
            <title>System Design and Analysis Multiple Choice Question | Unstop Computer</title>
        <meta name="description" content="Explore a collection of multiple-choice questions (MCQs) on  System Design and Analysis, covering key concepts and features. Test your knowledge and deepen your understanding of System Design and Analysis with our curated list." />

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
          href="https://unstopcomputer.tech/mcq/system-design-analysis-mcq"
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
          content="System Design and Analysis Multiple Choice Question | Unstop Computer"
        />
       <meta property="og:description" content="Explore a collection of multiple-choice questions (MCQs) on System Design and Analysis, covering key concepts and features. Test your knowledge and deepen your understanding of System Design and Analysis with our curated list." />
            </Head>
            <section id="content-wrapper">
                <div>
                    <div className="relative xl:container">
                        <h1 className="title-font sm:text-4xl text-center text-3xl mb-2 font-medium text-blue-700">System Design and Analysis Multiple Choice Question</h1>
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

export default sad;