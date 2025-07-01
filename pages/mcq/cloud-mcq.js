import McqLayout from "../../components/McqLayout";
import React, { useState } from 'react';
import Head from "next/head";
const cloud = () => {
    const [ questions ] = useState( [
        {
            id: 1,
            question: 'What is the primary benefit of cloud computing?',
            options: [
                { label: 'A', text: 'Cost savings', isCorrect: true },
                { label: 'B', text: 'Increased security' },
                { label: 'C', text: 'Limited scalability' },
                { label: 'D', text: 'Decreased accessibility' },
            ]
        },
        {
            id: 2,
            question: 'Which service model allows users to rent virtualized computing resources over the internet?',
            options: [
                { label: 'A', text: 'Infrastructure as a Service (IaaS)', isCorrect: true },
                { label: 'B', text: 'Platform as a Service (PaaS)' },
                { label: 'C', text: 'Software as a Service (SaaS)' },
                { label: 'D', text: 'On-premises hosting' },
            ]
        },
        {
            id: 3,
            question: 'What does SaaS stand for in cloud computing?',
            options: [
                { label: 'A', text: 'Software as a Service', isCorrect: true },
                { label: 'B', text: 'System as a Service' },
                { label: 'C', text: 'Storage as a Service' },
                { label: 'D', text: 'Security as a Service' },
            ]
        },
        {
            id: 4,
            question: 'Which of the following cloud deployment models provides dedicated infrastructure to a single organization?',
            options: [
                { label: 'A', text: 'Public cloud' },
                { label: 'B', text: 'Private cloud', isCorrect: true },
                { label: 'C', text: 'Hybrid cloud' },
                { label: 'D', text: 'Community cloud' },
            ]
        },
        {
            id: 5,
            question: 'What is a characteristic of cloud elasticity?',
            options: [
                { label: 'A', text: 'Fixed resources' },
                { label: 'B', text: 'On-demand scaling', isCorrect: true },
                { label: 'C', text: 'Limited availability' },
                { label: 'D', text: 'Static performance' },
            ]
        },
        {
            id: 6,
            question: 'Which cloud service model is suitable for developers building and deploying applications without worrying about underlying infrastructure?',
            options: [
                { label: 'A', text: 'Infrastructure as a Service (IaaS)' },
                { label: 'B', text: 'Platform as a Service (PaaS)', isCorrect: true },
                { label: 'C', text: 'Software as a Service (SaaS)' },
                { label: 'D', text: 'Data as a Service (DaaS)' },
            ]
        },
        {
            id: 7,
            question: 'What is the term for distributing data across multiple servers to improve performance and reliability?',
            options: [
                { label: 'A', text: 'Data fragmentation' },
                { label: 'B', text: 'Data replication', isCorrect: true },
                { label: 'C', text: 'Data centralization' },
                { label: 'D', text: 'Data isolation' },
            ]
        },
        {
            id: 8,
            question: 'Which cloud computing characteristic refers to the ability to scale resources automatically based on demand?',
            options: [
                { label: 'A', text: 'Resource pooling' },
                { label: 'B', text: 'Rapid elasticity', isCorrect: true },
                { label: 'C', text: 'Measured service' },
                { label: 'D', text: 'On-demand provisioning' },
            ]
        },
        {
            id: 9,
            question: 'Which cloud computing model allows organizations to deploy applications in a cloud environment while retaining full control over the underlying infrastructure?',
            options: [
                { label: 'A', text: 'Public cloud' },
                { label: 'B', text: 'Private cloud', isCorrect: true },
                { label: 'C', text: 'Hybrid cloud' },
                { label: 'D', text: 'Community cloud' },
            ]
        },
        {
            id: 10,
            question: 'What is the main advantage of using a hybrid cloud architecture?',
            options: [
                { label: 'A', text: 'Lower cost' },
                { label: 'B', text: 'Increased security' },
                { label: 'C', text: 'Flexibility', isCorrect: true },
                { label: 'D', text: 'Simplicity' },
            ]
        },
        {
            id: 11,
            question: 'Which cloud computing deployment model shares infrastructure between multiple organizations?',
            options: [
                { label: 'A', text: 'Public cloud' },
                { label: 'B', text: 'Private cloud' },
                { label: 'C', text: 'Hybrid cloud' },
                { label: 'D', text: 'Community cloud', isCorrect: true },
            ]
        },
        {
            id: 12,
            question: 'What characteristic of cloud computing allows users to access resources over the internet from anywhere?',
            options: [
                { label: 'A', text: 'On-demand self-service' },
                { label: 'B', text: 'Broad network access', isCorrect: true },
                { label: 'C', text: 'Resource pooling' },
                { label: 'D', text: 'Measured service' },
            ]
        },
        {
            id: 13,
            question: 'Which cloud service model provides ready-to-use applications accessible over the internet?',
            options: [
                { label: 'A', text: 'Infrastructure as a Service (IaaS)' },
                { label: 'B', text: 'Platform as a Service (PaaS)' },
                { label: 'C', text: 'Software as a Service (SaaS)', isCorrect: true },
                { label: 'D', text: 'Data as a Service (DaaS)' },
            ]
        },
        {
            id: 14,
            question: 'What is the term for the practice of using multiple cloud providers to avoid reliance on a single vendor?',
            options: [
                { label: 'A', text: 'Cloud agnosticism', isCorrect: true },
                { label: 'B', text: 'Cloud monopoly' },
                { label: 'C', text: 'Cloud standardization' },
                { label: 'D', text: 'Cloud homogeneity' },
            ]
        },
        {
            id: 15,
            question: 'Which cloud computing characteristic ensures that users only pay for the resources they consume?',
            options: [
                { label: 'A', text: 'On-demand self-service' },
                { label: 'B', text: 'Broad network access' },
                { label: 'C', text: 'Measured service', isCorrect: true },
                { label: 'D', text: 'Resource pooling' },
            ]
        },
        {
            id: 16,
            question: 'What is the term for the practice of running workloads across multiple cloud environments for redundancy or disaster recovery?',
            options: [
                { label: 'A', text: 'Cloud migration' },
                { label: 'B', text: 'Cloud bursting' },
                { label: 'C', text: 'Cloud sprawl' },
                { label: 'D', text: 'Cloud redundancy', isCorrect: true },
            ]
        },
        {
            id: 17,
            question: 'What is the term for a cloud computing model where a third-party provider hosts applications and makes them available to customers over the internet?',
            options: [
                { label: 'A', text: 'On-premises hosting' },
                { label: 'B', text: 'Off-site hosting', isCorrect: true },
                { label: 'C', text: 'Distributed hosting' },
                { label: 'D', text: 'Local hosting' },
            ]
        },
        {
            id: 18,
            question: 'Which cloud computing characteristic refers to the ability to rapidly provision and release computing resources as needed?',
            options: [
                { label: 'A', text: 'On-demand self-service' },
                { label: 'B', text: 'Resource pooling' },
                { label: 'C', text: 'Rapid elasticity', isCorrect: true },
                { label: 'D', text: 'Measured service' },
            ]
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
            <title>Cloud Computing Multiple Choice Question | Unstop Computer</title>
        <meta name="description" content="Explore a collection of multiple-choice questions (MCQs) on cloud computing , covering key concepts and features. Test your knowledge and deepen your understanding of cloud computing with our curated list." />

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
          href="https://unstopcomputer.tech/mcq/cloud-mcq"
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
          content="Cloud Computing Multiple Choice Question | Unstop Computer"
        />
       <meta property="og:description" content="Explore a collection of multiple-choice questions (MCQs) on cloud computing, covering key concepts and features. Test your knowledge and deepen your understanding of cloud computing with our curated list." />
            </Head>
            <section id="content-wrapper">
                <div>
                    <div className="relative xl:container">
                        <h1 className="title-font sm:text-4xl text-center text-3xl mb-2 font-medium text-blue-700">Cloud Computing Multiple Choice Question</h1>
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