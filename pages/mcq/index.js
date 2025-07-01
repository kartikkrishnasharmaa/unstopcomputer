import { useState } from "react";
import McqLayout from "../../components/McqLayout";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const mcqsubjects = [
    {
      id: 1,
      name: "Artificial Intelligence",
      category: ["Emerging Technologies"],
      link: "/mcq/artificial-intelligence",
      image: "/Images/subject/ai.png",
      gradient: "from-purple-500 to-indigo-500",
  
    },
    {
      id: 2,
      name: "Angular Js",
      category: ["Web Development"],
      link: "/mcq/angularjs-mcq",
      image: "/Images/subject/angular.png",
      gradient: "from-red-500 to-red-700",
    },
    {
      id: 3,
      name: "Blockchain",
      category: ["Emerging Technologies"],
      link: "/mcq/blockchain",
      image: "/Images/subject/blockchain.png",
      gradient: "from-blue-800 to-gray-900",
    },
    {
      id: 4,
      name: "C Language",
      category: ["Programming"],
      link: "/mcq/c-language",
      image: "/Images/subject/clanguage.png",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      id: 5,
      name: "Computer Fundamental",
      category: ["Basic Concepts"],
      link: "/mcq/computer-fundamental",
      image: "/Images/subject/fundamental.png",
      gradient: "from-gray-500 to-gray-700",
    },
    {
      id: 6,
      name: "Computer Memory",
      category: ["Computer Architecture"],
      link: "/mcq/computer-memory",
      image: "/Images/subject/memory.png",
      gradient: "from-yellow-500 to-yellow-700",
    },
    {
      id: 7,
      name: "Cloud Computing",
      category: ["Emerging Technologies"],
      link: "/mcq/cloud-mcq",
      image: "/Images/subject/cloud.png",
      gradient: "from-blue-300 to-blue-500",
    },
    {
      id: 8,
      name: "C++",
      category: ["Programming"],
      link: "/mcq/cpp-language",
      image: "/Images/subject/cpp.png",
      gradient: "from-blue-500 to-blue-700",
    },
    {
      id: 9,
      name: "CSS",
      category: ["Web Development"],
      link: "/mcq/css-mcq",
      image: "/Images/subject/css.png",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      id: 10,
      name: "Computer Networking",
      category: ["Networking"],
      link: "/mcq/networking-mcq",
      image: "/Images/subject/networking.png",
      gradient: "from-green-500 to-green-700",
    },
    {
      id: 11,
      name: "DBMS",
      category: ["Database"],
      link: "/mcq/dbms-mcq",
      image: "/Images/subject/dbms.png",
      gradient: "from-indigo-500 to-indigo-700",
    },
    {
      id: 12,
      name: "Ethical Hacking",
      category: ["Security"],
      link: "/mcq/ethical-hacking-mcq",
      image: "/Images/subject/hacking.png",
      gradient: "from-red-600 to-red-800",
    },
    {
      id: 13,
      name: "HTML",
      category: ["Web Development"],
      link: "/mcq/html-mcq",
      image: "/Images/subject/html.png",
      gradient: "from-orange-500 to-orange-700",
    },
    {
      id: 14,
      name: "I/O Devices",
      category: ["Computer Architecture"],
      link: "/mcq/io-device",
      image: "/Images/subject/os.png",
      gradient: "from-purple-400 to-purple-600",
    },
    {
      id: 15,
      name: "Information & Network Security",
      category: ["Security"],
      link: "/mcq/information-and-network-mcq",
      image: "/Images/subject/networking.png",
      gradient: "from-blue-600 to-blue-800",
    },
    {
      id: 16,
      name: "Java",
      category: ["Programming"],
      link: "/mcq/java-mcq",
      image: "/Images/subject/java.png",
      gradient: "from-red-600 to-red-800",
    },
    {
      id: 17,
      name: "JavaScript",
      category: ["Web Development"],
      link: "/mcq/javascript-mcq",
      image: "/Images/subject/javascript.png",
      gradient: "from-yellow-400 to-yellow-600",
    },
    {
      id: 18,
      name: "Machine Learning",
      category: ["Emerging Technologies"],
      link: "/mcq/machine-learning-mcq",
      image: "/Images/subject/machinelearning.png",
      gradient: "from-orange-500 to-pink-500",
    },
    {
      id: 19,
      name: "MongoDB",
      category: ["Database"],
      link: "/mcq/mongodb-mcq",
      image: "/Images/subject/mongodb.png",
      gradient: "from-green-600 to-green-800",
    },
    {
      id: 20,
      name: "Mobile Communication",
      category: ["Networking"],
      link: "/mcq/mobile-communication-mcq",
      image: "/Images/subject/fundamental.png",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      id: 21,
      name: "Multimedia",
      category: ["Basic Concepts"],
      link: "/mcq/multimedia-mcq",
      image: "/Images/subject/os.png",
      gradient: "from-pink-500 to-purple-500",
    },
    {
      id: 22,
      name: "Node Js",
      category: ["Web Development"],
      link: "/mcq/node-mcq",
      image: "/Images/subject/nodejs.png",
      gradient: "from-green-500 to-green-700",
    },
    {
      id: 23,
      name: "Operating System",
      category: ["System Software"],
      link: "/mcq/operating-system",
      image: "/Images/subject/os.png",
      gradient: "from-gray-600 to-gray-800",
    },
    {
      id: 24,
      name: "Python",
      category: ["Programming"],
      link: "/mcq/python-mcq",
      image: "/Images/subject/python.png",
      gradient: "from-blue-500 to-blue-700",
    },
    {
      id: 25,
      name: "ReactJs",
      category: ["Web Development"],
      link: "/mcq/react-mcq",
      image: "/Images/subject/react.png",
      gradient: "from-cyan-400 to-cyan-600",
    },
    {
      id: 26,
      name: "System Analysis & Design",
      category: ["Software Engineering"],
      link: "/mcq/system-design-analysis-mcq",
      image: "/Images/subject/fundamental.png",
      gradient: "from-indigo-600 to-indigo-800",
    },
  ];

  const categories = [
    ...new Set(mcqsubjects.flatMap((subject) => subject.category)),
  ];

  const filteredSubjects = selectedCategory
    ? mcqsubjects.filter((s) =>
        Array.isArray(s.category)
          ? s.category.includes(selectedCategory)
          : s.category === selectedCategory
      )
    : mcqsubjects;

  return (
    <McqLayout>
      <Head>
        <title>5000+ Computer Science MCQs with Answers | Unstop Computer</title>
        <meta
          name="description"
          content="Comprehensive collection of 1000+ computer science multiple choice questions with answers. Test your knowledge in programming, web development, databases, networking, and more."
        />
        <meta
          name="keywords"
          content="computer science MCQs, programming MCQs, technical quizzes, coding questions, data structure MCQs, web development questions, computer science quizzes"
        />
        <meta
          property="og:title"
          content="5000+ Computer Science MCQs with Answers"
        />
        <meta
          property="og:description"
          content="Test your computer science knowledge with our comprehensive collection of multiple choice questions."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://unstopcomputer.tech/mcq"
        />
        <link
          rel="canonical"
          href="https://unstopcomputer.tech/mcq"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: mcqsubjects.slice(0, 10).map((subject, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "WebPage",
                url: `https://unstopcomputer.tech/mcq${subject.link}`,
                name: `${subject.name} MCQs`,
              },
            })),
          })}
        </script>
      </Head>

      <section id="content-wrapper">
        <div className="sm:mx-auto sm:mb-2">
          <section className="mt-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-blue-700">
                5000+ Computer Science MCQs with Answers
              </h1>
              <p className="mt-4 text-gray-700 text-lg">
                Test your computer science knowledge with our comprehensive collection of
                <span className="font-semibold">
                  {" "}
                  programming, web development, database, networking, and emerging technology{" "}
                </span>
                multiple choice questions with detailed answers.
              </p>
            </motion.div>

            {/* Popular Categories Section */}
            <div className="mt-12 max-w-7xl mx-auto px-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Popular MCQ Categories
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {mcqsubjects.slice(0, 8).map((subject) => (
                  <Link
                    href={subject.link}
                    key={subject.id}
                    className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <h3 className="font-medium text-blue-600 hover:text-blue-800">
                      {subject.name} MCQs
                    </h3>
                  </Link>
                ))}
              </div>
            </div>

            {/* FAQ Section for SEO */}
            <div className="mt-16 max-w-4xl mx-auto px-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-lg">
                    How can MCQs help in computer science exam preparation?
                  </h3>
                  <p className="mt-2 text-gray-600">
                    MCQs help test your understanding of key concepts, identify knowledge gaps, 
                    and improve recall speed. They're particularly effective for competitive 
                    exams and certification tests where time management is crucial.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-lg">
                    What are the most important topics for computer science MCQs?
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Fundamental topics include data structures, algorithms, programming languages, 
                    database systems, computer networks, operating systems, and computer architecture. 
                    Emerging technologies like AI and blockchain are also increasingly important.
                  </p>
                </div>
              </div>
            </div>

            {/* Category Filter Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-3 mt-10"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className="bg-white border border-blue-600 text-blue-700 hover:bg-blue-700 hover:text-white px-4 py-2 rounded-xl shadow-md transition duration-300"
                  aria-label={`Filter by ${category}`}
                >
                  {category}
                </button>
              ))}
              <button
                onClick={() => setSelectedCategory(null)}
                className="bg-white border border-gray-500 text-gray-700 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-xl shadow-md transition duration-300"
                aria-label="Clear filters"
              >
                Clear Filter
              </button>
            </motion.div>

            {/* Subjects Grid */}
            <motion.div
              layout
              className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-12 max-w-7xl mx-auto px-4"
            >
              {filteredSubjects.map((subject) => (
                <motion.div
                  key={subject.id}
                  whileHover={{ scale: 1.03 }}
                  className="transition-all duration-300 transform shadow-md hover:shadow-xl rounded-xl relative overflow-hidden"
                >
                  <Link
                    href={subject.link}
                    aria-label={`${subject.name} MCQs`}
                  >
                    <div className="flex flex-col h-full">
                      <div
                        className={`bg-gradient-to-br ${subject.gradient} w-full h-[150px] relative rounded-lg overflow-hidden flex items-center justify-center`}
                      >
                        <Image
                          src={subject.image}
                          width={150}
                          height={150}
                          alt={`${subject.name} MCQs`}
                          className="max-w-[80%] max-h-[80%] object-contain"
                          style={{
                            width: "auto",
                            height: "auto",
                            maxWidth: "100%",
                            maxHeight: "100%",
                          }}
                          loading="lazy"
                        />
                      </div>

                      <div className="text-center mt-4 p-2">
                        <h3 className="text-xl font-semibold text-blue-700">
                          {subject.name} MCQs
                        </h3>
                     
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </section>
        </div>
      </section>
    </McqLayout>
  );
};

export default Home;