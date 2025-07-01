import { useState } from "react";
import QueLayout from "../../components/QueLayout";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const mcqsubjects = [
    {
      id: 1,
      name: "Data Structure",
      category: ["Software Development"],
      link: "/interview-question/data-structure",
      image: "/Images/subject/data-structure.png",
      gradient: "from-purple-500 to-indigo-500",
      metaDesc:
        "Master Data Structure interview questions with answers. Prepare for arrays, linked lists, trees, graphs, and algorithms.",
    },
    {
      id: 2,
      name: "CSS",
      category: ["Web Development"],
      link: "/interview-question/css",
      image: "/Images/subject/css.png",
      gradient: "from-blue-400 to-blue-600",
      metaDesc:
        "CSS interview questions covering selectors, box model, flexbox, grid, animations, and responsive design techniques.",
    },
    {
      id: 3,
      name: "HTML",
      category: ["Web Development"],
      link: "/interview-question/html",
      image: "/Images/subject/html.png",
      gradient: "from-orange-300 to-orange-500",
      metaDesc:
        "HTML5 interview questions on semantic elements, forms, APIs, accessibility, and modern web development practices.",
    },
    {
      id: 4,
      name: "MERN Stack",
      category: ["Web Development"],
      link: "/interview-question/mern-stack",
      image: "/Images/subject/react.png",
      gradient: "from-green-500 to-teal-500",
      metaDesc:
        "MERN Stack interview questions covering MongoDB, Express, React, and Node.js for full-stack development positions.",
    },
    {
      id: 5,
      name: "Next Js",
      category: ["Web Development"],
      link: "/interview-question/nextjs",
      image: "/Images/subject/nextjs.png",
      gradient: "from-gray-700 to-gray-900",
      metaDesc:
        "Next.js interview questions on server-side rendering, static generation, API routes, and performance optimization.",
    },
    {
      id: 6,
      name: "Node Js",
      category: ["Software Development"],
      link: "/interview-question/nodejs",
      image: "/Images/subject/nodejs.png",
      gradient: "from-green-700 to-green-900",
      metaDesc:
        "Node.js interview questions covering event loop, streams, clusters, middleware, and backend development concepts.",
    },
    {
      id: 7,
      name: "React Js",
      category: ["Web Development"],
      link: "/interview-question/reactjs",
      image: "/Images/subject/react.png",
      gradient: "from-cyan-400 to-cyan-600",
      metaDesc:
        "React.js interview questions on hooks, state management, component lifecycle, and modern frontend development.",
    },
    {
      id: 8,
      name: "Python",
      category: ["Software Development", "Data Science"],
      link: "/interview-question/python",
      image: "/Images/subject/python.png",
      gradient: "from-blue-500 to-blue-700",
      metaDesc:
        "Python interview questions covering OOP concepts, data structures, frameworks, and scripting for software developers.",
    },
    {
      id: 9,
      name: "MS Excel",
      category: ["Data Analyst"],
      link: "/interview-question/excel",
      image: "/Images/subject/excel.png",
      gradient: "from-green-600 to-green-800",
      metaDesc:
        "Excel interview questions on formulas, pivot tables, VLOOKUP, macros, and data analysis techniques.",
    },
    {
      id: 10,
      name: "Microsoft Power BI",
      category: ["Data Analyst"],
      link: "/interview-question/powerbi",
      image: "/Images/subject/powerbi.png",
      gradient: "from-yellow-500 to-yellow-700",
      metaDesc:
        "Power BI interview questions on DAX, data modeling, visualization, and business intelligence concepts.",
    },
    {
      id: 11,
      name: "Flutter",
      category: ["Mobile Development"],
      link: "/interview-question/flutter",
      image: "/Images/subject/flutter.png",
      gradient: "from-blue-300 to-blue-500",
      metaDesc:
        "Flutter interview questions on widgets, state management, platform channels, and cross-platform app development.",
    },
    {
      id: 12,
      name: "React Native",
      category: ["Mobile Development"],
      link: "/interview-question/react-native",
      image: "/Images/subject/reactnative.png",
      gradient: "from-pink-500 to-purple-500",
      metaDesc:
        "React Native interview questions on native modules, performance optimization, and mobile app development.",
    },
    {
      id: 13,
      name: "Android Developer",
      category: ["Mobile Development"],
      link: "/interview-question/android-developer",
      image: "/Images/subject/android.png",
      gradient: "from-green-500 to-green-700",
      metaDesc:
        "Android interview questions on activities, fragments, Jetpack components, and mobile application architecture.",
    },
    {
      id: 14,
      name: "PHP",
      category: ["Web Development"],
      link: "/interview-question/php",
      image: "/Images/subject/php.png",
      gradient: "from-indigo-500 to-indigo-700",
      metaDesc:
        "PHP interview questions on OOP, MVC frameworks, security practices, and server-side web development.",
    },
    {
      id: 15,
      name: "Wordpress",
      category: ["Digital Marketing"],
      link: "/interview-question/wordpress",
      image: "/Images/subject/dm.png",
      gradient: "from-indigo-500 to-indigo-700",
      metaDesc:
        "Prepare for wordpress technical interview with these essential questions on themes, plugins, security, performance, and more.",
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
    <QueLayout>
      <Head>
        <title>
          Top 1000+ Computer Science Interview Questions with Answers (2025)
        </title>
        <meta
          name="description"
          content="Comprehensive collection of 1000+ computer science interview questions with answers. Prepare for technical interviews in Data Structures, Web Development, Python, React, Node.js, and more."
        />
        <meta
          name="keywords"
          content="computer science interview questions, programming interview questions, technical interview preparation, coding interview questions, data structure questions, web development interview questions"
        />
        <meta
          property="og:title"
          content="Top Computer Science Interview Questions with Answers"
        />
        <meta
          property="og:description"
          content="Prepare for your next tech interview with our comprehensive collection of computer science and programming interview questions."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://unstopcomputer.tech/interview-question"
        />
        <link
          rel="canonical"
          href="https://unstopcomputer.tech/interview-question"
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
                url: `https://unstopcomputer.tech/interview-question${subject.link}`,
                name: `${subject.name} Interview Questions`,
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
                Top 1000+ Computer Science Interview Questions with Answers
              </h1>
              <p className="mt-4 text-gray-700 text-lg">
                Prepare for your next technical interview with our comprehensive
                collection of
                <span className="font-semibold">
                  {" "}
                  data structure, algorithm, web development, and programming{" "}
                </span>
                interview questions with detailed answers.
              </p>
            </motion.div>

            {/* Popular Categories Section */}
            <div className="mt-12 px-2">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Popular Interview Question Categories
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {mcqsubjects.slice(0, 8).map((subject) => (
                  <Link
                    href={subject.link}
                    key={subject.id}
                    className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <h3 className="font-medium text-blue-600 hover:text-blue-800">
                      {subject.name}
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
                    How to prepare for computer science technical interviews?
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Focus on data structures, algorithms, system design, and
                    problem-solving. Practice coding problems daily and review
                    computer science fundamentals.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-lg">
                    What are the most common data structure interview questions?
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Common questions include array manipulation, linked list
                    operations, tree traversals, graph algorithms, and hash
                    table implementations.
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
                    aria-label={`${subject.name} interview questions`}
                  >
                    <div className="flex flex-col h-full">
                      <div
                        className={`bg-gradient-to-br ${subject.gradient} w-full h-[150px] relative rounded-lg overflow-hidden flex items-center justify-center`}
                      >
                        <Image
                          src={subject.image}
                          width={150}
                          height={150}
                          alt={`${subject.name} interview questions`}
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
                          {subject.name} Interview Q&A
                        </h3>
                        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                          {subject.metaDesc}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </section>
        </div>
      </section>
    </QueLayout>
  );
};

export default Home;
