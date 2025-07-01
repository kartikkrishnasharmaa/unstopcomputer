import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

const privacypolicy = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const mcqsubjects = [
    {
      id: 1,
      name: "Basic Networking Test",
      link: "/test/networking/basic-networking",
    },
    {
      id: 2,
      name: "Network Topology Test",
      link: "/test/networking/network-topology",
    },
    {
      id: 3,
      name: "Network Protocols Test",
      link: "/test/networking/protocol",
    },
    {
      id: 4,
      name: "Network Security Test",
      link: "/test/networking/security",
    },
    {
      id: 5,
      name: "IP Addressing Test",
      link: "/test/networking/ip-address",
    },
    {
      id: 6,
      name: "Routing and Switching Test",
      link: "/test/networking/route-and-switch",
    },
    {
      id: 7,
      name: "Network Troubleshooting Test",
      link: "/test/networking/network-troubleshoot",
    },
    {
      id: 8,
      name: "Wireless Networking Test",
      link: "/test/networking/wireless",
    },
    {
      id: 9,
      name: "Cloud Networking Test",
      link: "/test/networking/cloud-networking",
    },
    {
      id: 10,
      name: "Emerging Technologies Test",
      link: "/test/networking/emerging-technology",
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
        <title>Computer Networking Quiz | Unstop Computer</title>
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
          href="https://unstopcomputer.tech/test/networking"
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
          Computer Networking Quiz{" "}
        </h1>
        <div className="items-center mx-auto m-2">
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
