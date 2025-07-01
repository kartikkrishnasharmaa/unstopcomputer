import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

const privacypolicy = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const mcqsubjects = [
    {
      id: 1,
      name: "Computer Networking",
      category: "Computer Science",
      link: "/test/networking",
    },
  ];

  // Get unique categories
  const categories = [
    ...new Set(mcqsubjects.map((subject) => subject.category)),
  ];

  // Filtered subjects based on selectedCategory
  const filteredSubjects = selectedCategory
    ? mcqsubjects.filter((subject) => subject.category === selectedCategory)
    : mcqsubjects;
  return (
    <div>
      <Head>
        <title>Test Your Computer Knowledge | Unstop Computer</title>
        <meta
          name="description"
          content="This privacy policy explains how we use and protect any information that you provide when you use this website."
        />
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
          href="https://unstopcomputer.tech/test"
        />
        <meta
          property="og:image"
          content="https://unstopcomputer.tech/Images/logo.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="150" />
        <meta property="og:image:height" content="150" />
        <meta property="og:title" content="Privacy Policy | Unstop Computer" />
        <meta
          property="og:description"
          content="This privacy policy explains how we use and protect any information that you provide when you use this website."
        />
      </Head>

      <div className="box-border h-full w-auto p-10 m-6 border-4 shadow-xl shadow-cyan-600 hover:shadow-indigo-700">
        <h1 className="title-font sm:text-4xl text-center text-3xl mb-10 font-medium text-blue-700">
          {" "}
          Challenge Your Mind: Computer Science Quiz Adventure{" "}
        </h1>
        <div className="items-center mx-auto m-2">
          <div className="flex flex-col items-center mx-auto md:flex-row mb-6">
            {categories.map((category) => (
              <button
                key={category}
                className={`bg-white mt-1 md:mt-0 md:ml-1 hover:bg-blue-700 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-white rounded-2xl`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
            {/* Add a button to clear the filter */}
            <button
              className={`bg-white mt-1 md:mt-0 md:ml-1 hover:bg-blue-700 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-white rounded-2xl`}
              onClick={() => setSelectedCategory(null)}
            >
              Clear Filter
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredSubjects.map((subject) => (
              <div key={subject.id}>
                <Link href={subject.link}>
                  <div className="bg-gray-100 rounded flex p-4 items-center cursor-pointer">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      className="text-blue-700 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="title-font font-medium">
                      {subject.name}
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default privacypolicy;
