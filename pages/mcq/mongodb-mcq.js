import McqLayout from "../../components/McqLayout";
import React, { useState } from 'react';
import Head from "next/head";
const mongo = () => {
    const [ questions ] = useState( [
        {
            id: 1,
            question: 'Which of the following is true about MongoDB?',
            options: [
                { label: 'A', text: 'MongoDB is a relational database management system (RDBMS).' },
                { label: 'B', text: 'MongoDB stores data in tables.', isCorrect: true },
                { label: 'C', text: 'MongoDB uses SQL as its query language.' },
                { label: 'D', text: 'MongoDB stores data in JSON-like documents.' },
            ],
        },
        {
            id: 2,
            question: 'What is the primary database model used by MongoDB?',
            options: [
                { label: 'A', text: 'Relational Model' },
                { label: 'B', text: 'Document Model', isCorrect: true },
                { label: 'C', text: 'Hierarchical Model' },
                { label: 'D', text: 'Network Model' },
            ],
        },
        {
            id: 3,
            question: 'Which of the following statements is true about collections in MongoDB?',
            options: [
                { label: 'A', text: 'Collections in MongoDB are similar to tables in relational databases.', isCorrect: true },
                { label: 'B', text: 'Collections in MongoDB store data in key-value pairs.' },
                { label: 'C', text: 'Collections in MongoDB can only store a single document.' },
                { label: 'D', text: 'Collections in MongoDB use a fixed schema.' },
            ],
        },
        {
            id: 4,
            question: 'What is the purpose of the "_id" field in MongoDB documents?',
            options: [
                { label: 'A', text: 'To specify the data type of the document.' },
                { label: 'B', text: 'To store the creation date of the document.' },
                { label: 'C', text: 'To uniquely identify each document in a collection.', isCorrect: true },
                { label: 'D', text: 'To define the primary key of the document.' },
            ],
        },
        {
            id: 5,
            question: 'Which of the following is NOT a data type supported by MongoDB?',
            options: [
                { label: 'A', text: 'String' },
                { label: 'B', text: 'Integer' },
                { label: 'C', text: 'Array' },
                { label: 'D', text: 'Date Object', isCorrect: true },
            ],
        },
        {
            id: 6,
            question: 'Which of the following is true about BSON in MongoDB?',
            options: [
                { label: 'A', text: 'BSON stands for Binary Serialized Object Notation.' },
                { label: 'B', text: 'BSON is a binary representation of JSON-like documents used in MongoDB.', isCorrect: true },
                { label: 'C', text: 'BSON is a query language for MongoDB.' },
                { label: 'D', text: 'BSON is used to define schema in MongoDB.' },
            ],
        },
        {
            id: 7,
            question: 'Which command is used to start the MongoDB server?',
            options: [
                { label: 'A', text: 'mongo' },
                { label: 'B', text: 'mongod', isCorrect: true },
                { label: 'C', text: 'start mongod' },
                { label: 'D', text: 'run mongod' },
            ],
        },
        {
            id: 8,
            question: 'What is the default port number for MongoDB?',
            options: [
                { label: 'A', text: '27017', isCorrect: true },
                { label: 'B', text: '3306' },
                { label: 'C', text: '5432' },
                { label: 'D', text: '8080' },
            ],
        },
        {
            id: 9,
            question: 'Which of the following is NOT a valid command in the MongoDB shell?',
            options: [
                { label: 'A', text: 'show dbs' },
                { label: 'B', text: 'use databaseName' },
                { label: 'C', text: 'create collectionName' },
                { label: 'D', text: 'insert documentName', isCorrect: true },
            ],
        },
        {
            id: 10,
            question: 'Which command is used to create a new database in MongoDB?',
            options: [
                { label: 'A', text: 'create databaseName' },
                { label: 'B', text: 'use databaseName' },
                { label: 'C', text: 'db.createDatabase(databaseName)', isCorrect: true },
                { label: 'D', text: 'db.databaseName.insert(document)' },
            ],
        },
        {
            id: 11,
            question: 'Which MongoDB method is used to query documents in a collection?',
            options: [
                { label: 'A', text: 'find()', isCorrect: true },
                { label: 'B', text: 'query()' },
                { label: 'C', text: 'select()' },
                { label: 'D', text: 'search()' },
            ],
        },
        {
            id: 12,
            question: 'Which operator is used for equality comparison in MongoDB queries?',
            options: [
                { label: 'A', text: '=' },
                { label: 'B', text: '==' },
                { label: 'C', text: '===' },
                { label: 'D', text: '$eq', isCorrect: true },
            ],
        },
        {
            id: 13,
            question: 'What is the purpose of the "limit" method in MongoDB queries?',
            options: [
                { label: 'A', text: 'To limit the number of documents returned by the query.', isCorrect: true },
                { label: 'B', text: 'To sort the documents returned by the query.' },
                { label: 'C', text: 'To skip a specified number of documents in the query result.' },
                { label: 'D', text: 'To perform a case-insensitive search.' },
            ],
        },
        {
            id: 14,
            question: 'Which MongoDB method is used to update documents in a collection?',
            options: [
                { label: 'A', text: 'update()' },
                { label: 'B', text: 'modify()' },
                { label: 'C', text: 'save()' },
                { label: 'D', text: 'updateOne()', isCorrect: true },
            ],
        },
        {
            id: 15,
            question: 'What is the purpose of the "sort" method in MongoDB queries?',
            options: [
                { label: 'A', text: 'To limit the number of documents returned by the query.' },
                { label: 'B', text: 'To skip a specified number of documents in the query result.' },
                { label: 'C', text: 'To perform a case-insensitive search.' },
                { label: 'D', text: 'To sort the documents returned by the query.', isCorrect: true },
            ],
        },
        {
            id: 16,
            question: 'Which MongoDB method is used to delete documents from a collection?',
            options: [
                { label: 'A', text: 'remove()' },
                { label: 'B', text: 'delete()' },
                { label: 'C', text: 'deleteOne()' },
                { label: 'D', text: 'deleteMany()', isCorrect: true },
            ],
        },
        {
            id: 17,
            question: 'What is the purpose of the "projection" parameter in MongoDB queries?',
            options: [
                { label: 'A', text: 'To specify the criteria for document selection.' },
                { label: 'B', text: 'To specify the fields to return in the query result.', isCorrect: true },
                { label: 'C', text: 'To limit the number of documents returned by the query.' },
                { label: 'D', text: 'To sort the documents returned by the query.' },
            ],
        },
        {
            id: 18,
            question: 'Which MongoDB method is used to create an index on a collection?',
            options: [
                { label: 'A', text: 'createIndex()' },
                { label: 'B', text: 'index()' },
                { label: 'C', text: 'addIndex()' },
                { label: 'D', text: 'createIndexOne()', isCorrect: true },
            ],
        },
        {
            id: 19,
            question: 'What is the purpose of indexing in MongoDB?',
            options: [
                { label: 'A', text: 'To sort documents in a collection.' },
                { label: 'B', text: 'To reduce the size of the database.' },
                { label: 'C', text: 'To improve the performance of queries by allowing faster access to data.', isCorrect: true },
                { label: 'D', text: 'To compress data stored in the database.' },
            ],
        },
        {
            id: 20,
            question: 'Which MongoDB method is used to aggregate data from a collection?',
            options: [
                { label: 'A', text: 'aggregate()' },
                { label: 'B', text: 'group()' },
                { label: 'C', text: 'merge()' },
                { label: 'D', text: 'aggregate()', isCorrect: true },
            ],
        },
        {
            id: 21,
            question: 'What is the purpose of the "pipeline" parameter in MongoDB aggregation?',
            options: [
                { label: 'A', text: 'To specify the criteria for document selection.' },
                { label: 'B', text: 'To specify the fields to return in the query result.' },
                { label: 'C', text: 'To define a sequence of data processing operations to be applied to the documents.', isCorrect: true },
                { label: 'D', text: 'To sort the documents returned by the query.' },
            ],
        },
        {
            id: 22,
            question: 'Which MongoDB method is used to create a backup of a database?',
            options: [
                { label: 'A', text: 'backup()' },
                { label: 'B', text: 'dump()' },
                { label: 'C', text: 'snapshot()' },
                { label: 'D', text: 'mongodump()', isCorrect: true },
            ],
        },
        {
            id: 23,
            question: 'What is the purpose of the "mongorestore" command in MongoDB?',
            options: [
                { label: 'A', text: 'To restore a backup of a database.', isCorrect: true },
                { label: 'B', text: 'To create a backup of a database.' },
                { label: 'C', text: 'To drop a database.' },
                { label: 'D', text: 'To check the status of a database.' },
            ],
        },
        {
            id: 24,
            question: 'Which MongoDB method is used to retrieve metadata about the database server?',
            options: [
                { label: 'A', text: 'serverInfo()' },
                { label: 'B', text: 'serverMetadata()' },
                { label: 'C', text: 'dbStats()' },
                { label: 'D', text: 'isMaster()', isCorrect: true },
            ],
        },
        {
            id: 25,
            question: 'What is the purpose of the "mongostat" command in MongoDB?',
            options: [
                { label: 'A', text: 'To view the status of a MongoDB instance.' },
                { label: 'B', text: 'To view the content of a database.' },
                { label: 'C', text: 'To perform statistical analysis on data stored in MongoDB.' },
                { label: 'D', text: 'To monitor the performance of a MongoDB instance.', isCorrect: true },
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
            <title>MongoDB Multiple Choice Question | Unstop Computer</title>
        <meta name="description" content="Explore a collection of multiple-choice questions (MCQs) on  mongodb, covering key concepts and features. Test your knowledge and deepen your understanding of mongodb with our curated list." />

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
          href="https://unstopcomputer.tech/mcq/mongodb-mcq"
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
          content="MongoDB Multiple Choice Question | Unstop Computer"
        />
       <meta property="og:description" content="Explore a collection of multiple-choice questions (MCQs) on mongodb, covering key concepts and features. Test your knowledge and deepen your understanding of monogodb with our curated list." />
            </Head>
            <section id="content-wrapper">
                <div>
                    <div className="relative xl:container">
                        <h1 className="title-font sm:text-4xl text-center text-3xl mb-2 font-medium text-blue-700">MongoDB Multiple Choice Question</h1>
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

export default mongo;