import McqLayout from "../../components/McqLayout";
import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
const cloud = () => {
  const [questions] = useState([
    {
      id: 1,
      question: "Which CSS property is used to change the text color?",
      options: [
        { label: "A", text: "color" },
        { label: "B", text: "text-color", isCorrect: true },
        { label: "C", text: "font-color" },
        { label: "D", text: "text-style" },
      ],
    },
    {
      id: 2,
      question:
        "Which CSS property is used to set the background color of an element?",
      options: [
        { label: "A", text: "bg-color" },
        { label: "B", text: "background-color", isCorrect: true },
        { label: "C", text: "color" },
        { label: "D", text: "foreground-color" },
      ],
    },
    {
      id: 3,
      question: "What does CSS stand for?",
      options: [
        { label: "A", text: "Cascading Style Sheets", isCorrect: true },
        { label: "B", text: "Creative Style Sheets" },
        { label: "C", text: "Computer Style Sheets" },
        { label: "D", text: "Coded Style Sheets" },
      ],
    },
    {
      id: 4,
      question:
        "Which CSS property is used to control the spacing between lines of text?",
      options: [
        { label: "A", text: "line-height", isCorrect: true },
        { label: "B", text: "text-spacing" },
        { label: "C", text: "line-spacing" },
        { label: "D", text: "text-height" },
      ],
    },
    {
      id: 5,
      question: "Which CSS property is used to make text bold?",
      options: [
        { label: "A", text: "font-style" },
        { label: "B", text: "text-weight" },
        { label: "C", text: "font-weight", isCorrect: true },
        { label: "D", text: "bold" },
      ],
    },
    {
      id: 6,
      question:
        "Which CSS property is used to specify the space between the border and the content of an element?",
      options: [
        { label: "A", text: "margin" },
        { label: "B", text: "padding", isCorrect: true },
        { label: "C", text: "spacing" },
        { label: "D", text: "border-spacing" },
      ],
    },
    {
      id: 7,
      question: "Which CSS property is used to set the font size of text?",
      options: [
        { label: "A", text: "text-size" },
        { label: "B", text: "font-size", isCorrect: true },
        { label: "C", text: "font-height" },
        { label: "D", text: "size" },
      ],
    },
    {
      id: 8,
      question:
        "Which CSS property is used to create a shadow effect around an elements border?",
      options: [
        { label: "A", text: "border-shadow" },
        { label: "B", text: "shadow" },
        { label: "C", text: "box-shadow", isCorrect: true },
        { label: "D", text: "element-shadow" },
      ],
    },
    {
      id: 9,
      question: "Which CSS property is used to align text within an element?",
      options: [
        { label: "A", text: "text-align", isCorrect: true },
        { label: "B", text: "align" },
        { label: "C", text: "text-justify" },
        { label: "D", text: "alignment" },
      ],
    },
    {
      id: 10,
      question: "Which CSS property is used to make an element transparent?",
      options: [
        { label: "A", text: "transparency" },
        { label: "B", text: "opacity", isCorrect: true },
        { label: "C", text: "visibility" },
        { label: "D", text: "transparent" },
      ],
    },
    {
      id: 11,
      question:
        "Which CSS property is used to control the size of an element relative to its parent?",
      options: [
        { label: "A", text: "size" },
        { label: "B", text: "relative-size" },
        { label: "C", text: "scale" },
        { label: "D", text: "flex", isCorrect: true },
      ],
    },
    {
      id: 12,
      question:
        "Which CSS property is used to specify the order of flexible items inside a flex container?",
      options: [
        { label: "A", text: "flex-order" },
        { label: "B", text: "order", isCorrect: true },
        { label: "C", text: "item-order" },
        { label: "D", text: "flex-item-order" },
      ],
    },
    {
      id: 13,
      question:
        "Which CSS property is used to control the appearance of the border around an element?",
      options: [
        { label: "A", text: "border-style" },
        { label: "B", text: "border", isCorrect: true },
        { label: "C", text: "border-appearance" },
        { label: "D", text: "border-visual" },
      ],
    },
    {
      id: 14,
      question:
        "Which CSS property is used to create rounded corners for an element?",
      options: [
        { label: "A", text: "corner-radius" },
        { label: "B", text: "border-radius", isCorrect: true },
        { label: "C", text: "rounded-corners" },
        { label: "D", text: "element-rounding" },
      ],
    },
    {
      id: 15,
      question:
        "Which CSS property is used to control the display behavior of an element?",
      options: [
        { label: "A", text: "display", isCorrect: true },
        { label: "B", text: "visible" },
        { label: "C", text: "visibility" },
        { label: "D", text: "show" },
      ],
    },
    {
      id: 16,
      question: "Which CSS property is used to create a gradient background?",
      options: [
        { label: "A", text: "color-gradient" },
        { label: "B", text: "background-gradient" },
        { label: "C", text: "gradient", isCorrect: true },
        { label: "D", text: "background-color-gradient" },
      ],
    },
    {
      id: 17,
      question:
        "Which CSS property is used to specify the style of a list item marker?",
      options: [
        { label: "A", text: "list-style-type" },
        { label: "B", text: "list-marker-style" },
        { label: "C", text: "marker-style" },
        { label: "D", text: "list-marker", isCorrect: true },
      ],
    },
    {
      id: 18,
      question:
        "Which CSS property is used to control the spacing between letters in a text?",
      options: [
        { label: "A", text: "letter-spacing", isCorrect: true },
        { label: "B", text: "text-spacing" },
        { label: "C", text: "word-spacing" },
        { label: "D", text: "character-spacing" },
      ],
    },
    // Add more questions here...
  ]);

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showAnswer, setShowAnswer] = useState({});

  const handleOptionSelect = (questionId, selectedOptionLabel) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: selectedOptionLabel,
    });
  };
  return (
    <McqLayout>
      <Head>
      <title>CSS Multiple Choice Question | Unstop Computer</title>
        <meta name="description" content="Explore a collection of multiple-choice questions (MCQs) on css , covering key concepts and features. Test your knowledge and deepen your understanding of css with our curated list." />

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
          href="https://unstopcomputer.tech/mcq/css-mcq"
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
          content="CSS Multiple Choice Question | Unstop Computer"
        />
       <meta property="og:description" content="Explore a collection of multiple-choice questions (MCQs) on css, covering key concepts and features. Test your knowledge and deepen your understanding of css with our curated list." />
      </Head>
      <section id="content-wrapper">
        <div>
          <div className="relative xl:container">
            <h1 className="title-font sm:text-4xl text-center text-3xl mb-2 font-medium text-blue-700">
              CSS Multiple Choice Question
            </h1>
            <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
              {questions.map((question) => (
                <div key={question.id}>
                  <p className="font-bold">
                    {" "}
                    Question : {question.id} {question.question}
                  </p>
                  <ul className="space-y-4">
                    {question.options.map((option) => (
                      <li key={option.label} className="flex items-center">
                        <div className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2">
                          <h1 className="mx-auto font-semibold bg-blue-700 rounded-full text-lg text-white text-center">
                            {option.label}
                          </h1>
                        </div>
                        <p className="ml-4">{option.text}</p>
                        {/* Remove the select button for each option */}
                      </li>
                    ))}
                  </ul>
                  {selectedAnswers[question.id] && (
                    <div className="px-5 py-3 border border-blue-700 text-sm mt-3">
                      Your answer: {selectedAnswers[question.id]}
                    </div>
                  )}
                  <details className="open:duration-300">
                    <summary
                      className="bg-gray-200 mt-4 px-5 py-3 text-lg cursor-pointer"
                      onClick={() =>
                        setShowAnswer({ ...showAnswer, [question.id]: true })
                      }
                    >
                      Answer:
                    </summary>
                    {showAnswer[question.id] && (
                      <div className="px-5 py-3 border border-blue-700 text-sm">
                        {question.options.find((opt) => opt.isCorrect)?.text}
                      </div>
                    )}
                  </details>
                </div>
              ))}
            </div>

            <div className="justify-center flex space-x-4">
              <Link
                href="/mcq/angularjs-mcq"
                className="bg-white hover:bg-blue-700 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-white rounded-3xl"
              >
                Previous
              </Link>

              <Link
                href="/mcq/angularjs-mcq-2"
                className="bg-white hover:bg-blue-700 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-white rounded-3xl float-right"
              >
                Next
              </Link>
            </div>
          </div>
        </div>
      </section>
    </McqLayout>
  );
};

export default cloud;
