import McqLayout from "../../components/McqLayout";
import Head from "next/head";
import Link from "next/link";

const angularjsmcq = () => {
  const mcqs = [
    {
      id: 1,
      question: "How many $RootScope an AngularJS application can have?",
      options: [
        { id: 'A', text: "Two" },
        { id: 'B', text: "Infinity" },
        { id: 'C', text: "One" },
        { id: 'D', text: "Zero" }
      ],
      answer: "C. One",
      explanation: "An AngularJS application can have only one $rootScope which acts as the parent scope for all other scopes in the application."
    },
    {
      id: 2,
      question: "Which of the following components can be injected as a dependency in AngularJS?",
      options: [
        { id: 'A', text: "Factory" },
        { id: 'B', text: "Value" },
        { id: 'C', text: "Constant" },
        { id: 'D', text: "Application Module" }
      ],
      answer: "D. Application Module",
      explanation: "In AngularJS, the application module can be injected as a dependency along with factories, values, and constants."
    },
    {
      id: 3,
      question: "What is deep linking in AngularJS?",
      options: [
        { id: 'A', text: "Deep linking refers to linking various views to the main page." },
        { id: 'B', text: "Deep linking is an SEO-based technique." },
        { id: 'C', text: "Deep linking allows you to encode the state of an application in the URL so that it can be bookmarked." },
        { id: 'D', text: "All of the Above" }
      ],
      answer: "C. Deep linking allows you to encode the state of an application in the URL so that it can be bookmarked.",
      explanation: "Deep linking in AngularJS enables bookmarking and sharing of specific application states through URL encoding."
    },
    {
      id: 4,
      question: "AngularJS applications are a mix of which of the following technologies?",
      options: [
        { id: 'A', text: "HTML and JavaScript" },
        { id: 'B', text: "HTML and CSS" },
        { id: 'C', text: "PHP and JavaScript" },
        { id: 'D', text: "None of the Above" }
      ],
      answer: "A. HTML and JavaScript",
      explanation: "AngularJS combines HTML templates with JavaScript controllers to build dynamic web applications."
    },
    {
      id: 5,
      question: "Which of the following template can be used to write AngularJS directives?",
      options: [
        { id: 'A', text: "Attribute" },
        { id: 'B', text: "Tag" },
        { id: 'C', text: "Class name" },
        { id: 'D', text: "All of the Above" }
      ],
      answer: "D. All of the Above",
      explanation: "AngularJS directives can be written as attributes, tags, or class names, providing flexibility in implementation."
    },
    {
      id: 6,
      question: "AngularJS is perfect for?",
      options: [
        { id: 'A', text: "Single Page Applications" },
        { id: 'B', text: "Mobile Web Applications" },
        { id: 'C', text: "Desktop Applications" },
        { id: 'D', text: "Cloud Applications" }
      ],
      answer: "A. Single Page Applications",
      explanation: "AngularJS was specifically designed to simplify the development of Single Page Applications (SPAs)."
    },
    {
      id: 7,
      question: "Do AngularJS provide reusable components?",
      options: [
        { id: 'A', text: "Yes" },
        { id: 'B', text: "No" }
      ],
      answer: "A. Yes",
      explanation: "AngularJS promotes component reusability through directives, services, and other modular constructs."
    },
    {
      id: 8,
      question: "Which of the following directive is used to bind the application data to the HTML view in AngularJS?",
      options: [
        { id: 'A', text: "ng-app directive" },
        { id: 'B', text: "ng-model directive" },
        { id: 'C', text: "ng-bind directive" },
        { id: 'D', text: "ng-repeat directive" }
      ],
      answer: "C. ng-bind directive",
      explanation: "The ng-bind directive binds AngularJS application data to HTML elements, updating the view when the model changes."
    },
    {
      id: 9,
      question: "Which of the following statement is true about the lowercase filter?",
      options: [
        { id: 'A', text: "The lowercase filter is a function that takes text as input." },
        { id: 'B', text: "The lowercase filter is used to convert a text to lower case text." },
        { id: 'C', text: "Both of the above." },
        { id: 'D', text: "None of the above." }
      ],
      answer: "B. The lowercase filter is used to convert a text to lower case text.",
      explanation: "AngularJS filters transform displayed data, with the lowercase filter specifically converting text to lowercase."
    },
    {
      id: 10,
      question: "Which of the following is an advantage of AngularJS?",
      options: [
        { id: 'A', text: "AngularJS provides capability to create Single Page Application in a very clean and maintainable way." },
        { id: 'B', text: "AngularJS provides data binding capability to HTML thus giving user a rich and responsive experience" },
        { id: 'C', text: "AngularJS code is unit testable." },
        { id: 'D', text: "All of the above." }
      ],
      answer: "D. All of the above.",
      explanation: "AngularJS offers multiple advantages including SPA development, two-way data binding, and testability."
    }
  ];

  const relatedMcqs = [
    { title: "Artificial Intelligence MCQ", path: "/mcq/artificial-intelligence" },
    { title: "Blockchain MCQ", path: "/mcq/blockchain" },
    { title: "Computer Networking MCQ", path: "/mcq/networking-mcq" },
    { title: "DBMS MCQ", path: "/mcq/dbms-mcq" },
    { title: "Python MCQ", path: "/mcq/python-mcq" }
  ];

  return (
    <McqLayout>
      <Head>
        <title>Top 50 AngularJS MCQ Questions with Answers | Unstop Computer</title>
        <meta name="description" content="Comprehensive collection of AngularJS multiple choice questions (MCQs) with detailed answers. Test your AngularJS knowledge with these practice questions covering directives, scopes, filters, and more. Perfect for interview preparation and skill assessment." />
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="Keywords" content="AngularJS MCQs, AngularJS questions, AngularJS interview questions, AngularJS quiz, JavaScript framework MCQs, web development MCQs, SPA framework questions, AngularJS directives, AngularJS scopes, AngularJS filters, frontend development quiz" />
        <link rel="canonical" href="https://unstopcomputer.tech/mcq/angularjs-mcq" />
        <meta property="og:image" content="https://unstopcomputer.tech/Images/logo.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="150" />
        <meta property="og:image:height" content="150" />
        <meta property="og:title" content="Top 50 AngularJS MCQ Questions with Answers | Unstop Computer" />
        <meta property="og:description" content="Comprehensive collection of AngularJS multiple choice questions (MCQs) with detailed answers. Test your AngularJS knowledge with these practice questions covering directives, scopes, filters, and more." />
        <meta property="og:url" content="https://unstopcomputer.tech/mcq/angularjs-mcq" />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Quiz",
            "name": "AngularJS Multiple Choice Questions",
            "description": "Test your knowledge of AngularJS with these multiple choice questions",
            "hasPart": mcqs.map(mcq => ({
              "@type": "Question",
              "name": mcq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": mcq.answer
              }
            }))
          })}
        </script>
      </Head>

      <section id="content-wrapper">
        <div className="mx-auto px-4">
          <div className="divide-y divide-gray-300/50">
            <h1 className="title-font sm:text-4xl text-center text-3xl mb-6 font-medium text-blue-700">
              AngularJS Multiple Choice Questions
            </h1>
            
            <div className="py-4">
              <p className="text-lg text-gray-700 mb-4">
                Test your AngularJS knowledge with these comprehensive multiple choice questions. Covering key concepts like directives, scopes, filters, and more, these MCQs are perfect for interview preparation and skill assessment.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h2 className="text-xl font-semibold text-blue-800 mb-2">Key Topics Covered:</h2>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>AngularJS Directives (ng-app, ng-model, ng-bind)</li>
                  <li>Scope Hierarchy and $rootScope</li>
                  <li>Dependency Injection</li>
                  <li>Filters and Data Binding</li>
                  <li>Single Page Application Concepts</li>
                  <li>AngularJS Architecture</li>
                </ul>
              </div>
            </div>

            {mcqs.map((mcq) => (
              <div key={mcq.id} className="space-y-6 py-8 text-base leading-7 text-gray-600">
                <p className="font-bold text-lg text-gray-800">
                  Question {mcq.id}. {mcq.question}
                </p>
                <ul className="space-y-3">
                  {mcq.options.map((option) => (
                    <li key={option.id} className="flex items-start">
                      <div className="h-6 w-6 flex-none">
                        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-700 text-white font-medium text-sm">
                          {option.id}
                        </span>
                      </div>
                      <p className="ml-3">{option.text}</p>
                    </li>
                  ))}
                </ul>
                <details className="group open:duration-300 border rounded-lg overflow-hidden">
                  <summary className="bg-blue-100 px-5 py-3 text-lg font-medium cursor-pointer flex justify-between items-center">
                    <span>View Answer & Explanation</span>
                    <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 py-3 border-t border-blue-200 bg-white">
                    <p className="font-semibold text-green-700">{mcq.answer}</p>
                    {mcq.explanation && (
                      <p className="mt-2 text-gray-700">{mcq.explanation}</p>
                    )}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 mt-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Related Multiple Choice Questions
            </h2>
            <ul className="space-y-3">
              {relatedMcqs.map((item, index) => (
                <li key={index}>
                  <Link href={item.path} className="flex items-center text-blue-600 hover:text-blue-800 transition duration-200">
                    <span className="mr-2">👉</span>
                    <span className="hover:underline">{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h2 className="text-xl font-bold text-blue-800 mb-3">About AngularJS MCQs</h2>
            <p className="text-gray-700 mb-3">
              AngularJS is a JavaScript-based open-source front-end web framework mainly maintained by Google. These AngularJS multiple choice questions cover fundamental concepts that every web developer should know when working with this framework.
            </p>
            <p className="text-gray-700 mb-3">
              The questions range from basic to intermediate level, testing your understanding of directives, data binding, dependency injection, and other core AngularJS features.
            </p>
            <p className="text-gray-700">
              Regular practice with these MCQs will help you prepare for technical interviews and strengthen your AngularJS fundamentals for real-world application development.
            </p>
          </div>
        </div>
      </section>
    </McqLayout>
  );
};

export default angularjsmcq;