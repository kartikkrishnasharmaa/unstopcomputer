"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import TiltCard from "../pages/TiltCard";

const mcqTopics = [
  { title: "HTML", link: "/mcq/html-mcq", image: "/Images/html.png" },
  { title: "DBMS", link: "/mcq/dbms-mcq", image: "/Images/dbmss.png" },
  {
    title: "Computer Networking",
    link: "/mcq/networking-mcq",
    image: "/Images/networking.png",
  },
  { title: "Python", link: "/mcq/python-mcq", image: "/Images/pythonn.png" },
  { title: "CSS", link: "/mcq/css-mcq", image: "/Images/css3.png" },
  {
    title: "JavaScript",
    link: "/mcq/javascript-mcq",
    image: "/Images/javascript.png",
  },
  {
    title: "C Language",
    link: "/mcq/c-language",
    image: "/Images/c-programming.png",
  },
  { title: "MongoDB", link: "/mcq/mongodb-mcq", image: "/Images/mongodb.png" },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
  hover: {
    scale: 1.03,
    boxShadow: "0 12px 24px rgba(0,0,0,0.1)",
    transition: { duration: 0.3 },
  },
};

const Mcq = () => {
  return (
    <section className="text-white bg-black body-font py-20 z-10">
      <div className="container px-5 mx-auto">
        {/* Title and button */}
        <div className="flex flex-col items-center justify-center text-center mb-10">
          <h2 className="p-4 text-gray-900 title-font text-4xl mb-12 font-extrabold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600">
            Multiple Choice Questions
          </h2>
        </div>

        {/* Grid of cards */}
        <div className="grid grid-cols-1 gap-8 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {mcqTopics.map((topic, index) => (
            <TiltCard>
              <motion.article
                key={topic.title}
                custom={index}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                variants={cardVariant}
                className="bg-white rounded-2xl p-6 shadow-md flex flex-col items-center"
              >
                <Link
                  href={topic.link}
                  className="flex flex-col items-center w-full h-full justify-between"
                >
                  {/* Image */}
                  <div className="flex flex-col items-center">
                    <Image
                      src={topic.image}
                      width={80}
                      height={80}
                      alt={topic.title}
                      className="rounded-full border border-gray-200 shadow-sm mb-4"
                    />
                    <h3 className="text-lg font-bold text-gray-800 text-center">
                      {topic.title}
                    </h3>
                  </div>

                  {/* Button */}
                  <div className="w-full mt-6">
                    <button className="w-full px-4 py-2 border-2 border-blue-400 text-blue-700 font-semibold text-sm uppercase rounded-md hover:bg-blue-100 transition duration-200">
                      Explore
                    </button>
                  </div>
                </Link>
              </motion.article>
            </TiltCard>
          ))}
        </div>

        <hr className="h-px mt-12 bg-blue-200 border-0" />
      </div>
    </section>
  );
};

export default Mcq;
