import Head from "next/head";
import React, { useState } from "react";
import QueLayout from "../../components/QueLayout";

const GlossaryTable = () => {
  const termsData = [
    {
      que: "",
      ans: "",
    },

   

    // Add more terms as needed
  ];

  return (
    <>
      <Head>
        <title>Microsoft Excel Interview Questions & Answer | Unstop Computer</title>
        <meta
          name="description"
          content="Explore a comprehensive computer dictionary featuring all computer-related terms. Unstop Computer offers a wealth of definitions and explanations to enhance your understanding of technology and computing. Dive into the world of computers with our expansive dictionary"
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
          href="https://unstopcomputer.tech/interview-question/html"
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
          content="Computer Dictionary - ALl computer related terms | Unstop Computer"
        />
        <meta name="description" content="" />
      </Head>
      <QueLayout>
        <section id="content-wrapper">
          <div className="row">
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col">
                <div className="lg:flex-grow lg:pr-24 md:pr-14 flex flex-col md:items-start md:text-left md:mb-0">
                  <div className="relative xl:container">
                    <h2 className=" text-blue-700 text-2xl sm:text-xl md:text-5xl lg:text-center xl:text-4l dark:text-blue">
                     Microsoft Excel Interview Questions and Answer{" "}
                    </h2>{" "}
                    <br className="lg:block hidden" />
                  </div>
                  <p className="mt-2">
                    Here are Microsoft Excel Top interview questions along with their
                    correct answers..{" "}
                  </p>
                </div>
              </div>
              <div className="max-w-screen-lg mx-auto p-4">
                <div className="w-full table-auto">
                  {termsData.map((term, index) => (
                    <div
                      key={index + 1}
                      class="flex flex-col gap-4 p-3 mt-7 shadow-xl"
                    >
                      <div class="flex justify justify-between">
                        <div class="flex gap-auto">
                          <div class="w-7 h-7 text-center rounded-full bg-blue-700 mr-6 text-white">
                            {index + 1}
                          </div>
                          <span className="font-bold">{term.que}</span>
                        </div>
                      </div>
                      <div className="m-3">
                        Ans.
                        <span className="ml-2">{term.ans}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </QueLayout>
    </>
  );
};

export default GlossaryTable;
