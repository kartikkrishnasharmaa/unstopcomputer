import McqLayout from "../../components/McqLayout";
import React, { useState } from 'react';
import Head from "next/head";
const ml = () => {
    const [ questions ] = useState( [
        {
            id: 1,
            question: 'Which of the following is NOT a type of machine learning?',
            options: [
                { label: 'A', text: 'Supervised Learning' },
                { label: 'B', text: 'Unsupervised Learning' },
                { label: 'C', text: 'Biased Learning', isCorrect: true },
                { label: 'D', text: 'Reinforcement Learning' },
            ],
        },
        {
            id: 2,
            question: 'What is the objective of regression analysis in machine learning?',
            options: [
                { label: 'A', text: 'Classification' },
                { label: 'B', text: 'Clustering' },
                { label: 'C', text: 'Predicting continuous values', isCorrect: true },
                { label: 'D', text: 'Finding patterns' },
            ],
        },
        {
            id: 3,
            question: 'Which algorithm is commonly used for classification problems in machine learning?',
            options: [
                { label: 'A', text: 'K-Means' },
                { label: 'B', text: 'K-Nearest Neighbors' },
                { label: 'C', text: 'Decision Trees', isCorrect: true },
                { label: 'D', text: 'Linear Regression' },
            ],
        },
        {
            id: 4,
            question: 'What is the main goal of unsupervised learning?',
            options: [
                { label: 'A', text: 'Predicting outcomes' },
                { label: 'B', text: 'Making decisions' },
                { label: 'C', text: 'Discovering patterns and relationships', isCorrect: true },
                { label: 'D', text: 'Optimizing a function' },
            ],
        },
        {
            id: 5,
            question: 'Which evaluation metric is commonly used for classification problems?',
            options: [
                { label: 'A', text: 'Mean Squared Error' },
                { label: 'B', text: 'Accuracy', isCorrect: true },
                { label: 'C', text: 'Root Mean Squared Error' },
                { label: 'D', text: 'R² Score' },
            ],
        },
        {
            id: 6,
            question: 'Which technique is used to handle missing data in machine learning?',
            options: [
                { label: 'A', text: 'Mean Imputation' },
                { label: 'B', text: 'Median Imputation' },
                { label: 'C', text: 'Mode Imputation' },
                { label: 'D', text: 'All of the above', isCorrect: true },
            ],
        },
        {
            id: 7,
            question: 'What is the primary purpose of feature scaling in machine learning?',
            options: [
                { label: 'A', text: 'To increase the dimensionality of features' },
                { label: 'B', text: 'To reduce overfitting' },
                { label: 'C', text: 'To speed up training' },
                { label: 'D', text: 'To normalize the range of features', isCorrect: true },
            ],
        },
        {
            id: 8,
            question: 'Which algorithm is commonly used for anomaly detection in machine learning?',
            options: [
                { label: 'A', text: 'K-Means' },
                { label: 'B', text: 'Decision Trees' },
                { label: 'C', text: 'Isolation Forest', isCorrect: true },
                { label: 'D', text: 'Linear Regression' },
            ],
        },
        {
            id: 9,
            question: 'Which technique is used to reduce the dimensionality of data in machine learning?',
            options: [
                { label: 'A', text: 'Feature Engineering' },
                { label: 'B', text: 'Principal Component Analysis (PCA)', isCorrect: true },
                { label: 'C', text: 'Cross-Validation' },
                { label: 'D', text: 'Gradient Descent' },
            ],
        },
        {
            id: 10,
            question: 'What is the main advantage of using ensemble learning methods?',
            options: [
                { label: 'A', text: 'They are simple to implement' },
                { label: 'B', text: 'They always provide accurate predictions' },
                { label: 'C', text: 'They reduce overfitting and increase accuracy', isCorrect: true },
                { label: 'D', text: 'They require less computational resources' },
            ],
        },
        {
            id: 11,
            question: 'What is the purpose of cross-validation in machine learning?',
            options: [
                { label: 'A', text: 'To split the dataset into training and testing sets' },
                { label: 'B', text: 'To select the best hyperparameters' },
                { label: 'C', text: 'To evaluate model performance and prevent overfitting', isCorrect: true },
                { label: 'D', text: 'To train the model on multiple datasets' },
            ],
        },
        {
            id: 12,
            question: 'Which algorithm is commonly used for regression problems in machine learning?',
            options: [
                { label: 'A', text: 'K-Means' },
                { label: 'B', text: 'Linear Regression', isCorrect: true },
                { label: 'C', text: 'Decision Trees' },
                { label: 'D', text: 'K-Nearest Neighbors' },
            ],
        },
        {
            id: 13,
            question: 'What is the primary goal of model evaluation in machine learning?',
            options: [
                { label: 'A', text: 'To memorize the training data' },
                { label: 'B', text: 'To generalize well to unseen data', isCorrect: true },
                { label: 'C', text: 'To overfit the training data' },
                { label: 'D', text: 'To increase model complexity' },
            ],
        },
        {
            id: 14,
            question: 'Which technique is used to handle imbalanced datasets in machine learning?',
            options: [
                { label: 'A', text: 'Feature Scaling' },
                { label: 'B', text: 'Overfitting' },
                { label: 'C', text: 'Resampling', isCorrect: true },
                { label: 'D', text: 'Regularization' },
            ],
        },
        {
            id: 15,
            question: 'What is the purpose of hyperparameter tuning in machine learning?',
            options: [
                { label: 'A', text: 'To preprocess the data' },
                { label: 'B', text: 'To select the best features' },
                { label: 'C', text: 'To optimize model performance by selecting the best hyperparameters', isCorrect: true },
                { label: 'D', text: 'To train the model on multiple datasets' },
            ],
        },
        {
            id: 16,
            question: 'What is the primary goal of regularization in machine learning?',
            options: [
                { label: 'A', text: 'To increase model complexity' },
                { label: 'B', text: 'To reduce model complexity and prevent overfitting', isCorrect: true },
                { label: 'C', text: 'To memorize the training data' },
                { label: 'D', text: 'To improve computational efficiency' },
            ],
        },
        {
            id: 17,
            question: 'Which technique is used to handle categorical variables in machine learning?',
            options: [
                { label: 'A', text: 'Feature Scaling' },
                { label: 'B', text: 'One-Hot Encoding', isCorrect: true },
                { label: 'C', text: 'Standardization' },
                { label: 'D', text: 'Imputation' },
            ],
        },
        {
            id: 18,
            question: 'What is the main purpose of a validation set in machine learning?',
            options: [
                { label: 'A', text: 'To train the model' },
                { label: 'B', text: 'To tune hyperparameters and evaluate model performance', isCorrect: true },
                { label: 'C', text: 'To test the model on unseen data' },
                { label: 'D', text: 'To preprocess the data' },
            ],
        },
        {
            id: 19,
            question: 'Which evaluation metric is commonly used for regression problems in machine learning?',
            options: [
                { label: 'A', text: 'Accuracy' },
                { label: 'B', text: 'Precision' },
                { label: 'C', text: 'Mean Squared Error', isCorrect: true },
                { label: 'D', text: 'Recall' },
            ],
        },
        {
            id: 20,
            question: 'What is the purpose of a confusion matrix in machine learning?',
            options: [
                { label: 'A', text: 'To visualize the decision boundary of the model' },
                { label: 'B', text: 'To evaluate the performance of a classification model', isCorrect: true },
                { label: 'C', text: 'To handle missing data' },
                { label: 'D', text: 'To optimize hyperparameters' },
            ],
        },
        {
            id: 21,
            question: 'Which algorithm is commonly used for text classification tasks in machine learning?',
            options: [
                { label: 'A', text: 'K-Means' },
                { label: 'B', text: 'Naive Bayes', isCorrect: true },
                { label: 'C', text: 'Random Forest' },
                { label: 'D', text: 'Support Vector Machine' },
            ],
        },
        {
            id: 22,
            question: 'What is the main objective of gradient descent optimization in machine learning?',
            options: [
                { label: 'A', text: 'To maximize the likelihood function' },
                { label: 'B', text: 'To minimize the cost function by adjusting model parameters', isCorrect: true },
                { label: 'C', text: 'To prevent overfitting' },
                { label: 'D', text: 'To calculate feature importance' },
            ],
        },
        {
            id: 23,
            question: 'Which technique is used to handle overfitting in machine learning?',
            options: [
                { label: 'A', text: 'Feature Engineering' },
                { label: 'B', text: 'Regularization', isCorrect: true },
                { label: 'C', text: 'Cross-Validation' },
                { label: 'D', text: 'Ensemble Learning' },
            ],
        },
        {
            id: 24,
            question: 'What is the main objective of cross-entropy loss function in machine learning?',
            options: [
                { label: 'A', text: 'To minimize the difference between predicted and actual values' },
                { label: 'B', text: 'To measure the uncertainty in predictions', isCorrect: true },
                { label: 'C', text: 'To maximize the likelihood function' },
                { label: 'D', text: 'To regularize the model' },
            ],
        },
        {
            id: 25,
            question: 'Which algorithm is commonly used for recommendation systems in machine learning?',
            options: [
                { label: 'A', text: 'K-Means' },
                { label: 'B', text: 'K-Nearest Neighbors' },
                { label: 'C', text: 'Matrix Factorization', isCorrect: true },
                { label: 'D', text: 'Decision Trees' },
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
            <title>Machine Learning Multiple Choice Question | Unstop Computer</title>
        <meta name="description" content="Explore a collection of multiple-choice questions (MCQs) on machine learning , covering key concepts and features. Test your knowledge and deepen your understanding of machine learning with our curated list." />

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
          href="https://unstopcomputer.tech/mcq/machine-learning-mcq"
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
          content="Machine Learning Multiple Choice Question | Unstop Computer"
        />
       <meta property="og:description" content="Explore a collection of multiple-choice questions (MCQs) on machine learning, covering key concepts and features. Test your knowledge and deepen your understanding of machine learning with our curated list." />
            </Head>
            <section id="content-wrapper">
                <div>
                    <div className="relative xl:container">
                        <h1 className="title-font sm:text-4xl text-center text-3xl mb-2 font-medium text-blue-700">Machine Learning Multiple Choice Question</h1>
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