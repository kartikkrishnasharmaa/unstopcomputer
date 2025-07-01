import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

const imageVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 10,
      duration: 0.8
    }
  }
};

const buttonHover = {
  scale: 1.05,
  transition: { type: "spring", stiffness: 400, damping: 10 }
};

const buttonTap = {
  scale: 0.95
};

const pulseAnimation = {
  scale: [1, 1.02, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
};


const Compiler = () => {
  return (
    <>
      {/* Computer Dictionary Section */}
      <motion.section 
        className="bg-black text-white px-8 body-font"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container mx-auto px-5 flex md:flex-row flex-col items-center py-12 shadow-2xl hover:shadow-indigo-700 transition-shadow duration-300">
          <div className="lg:flex-grow ml-8 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <motion.h1 
              className="title-font sm:text-5xl text-4xl mb-6 font-bold text-white"
              variants={itemVariants}
            >
              Computer <span className="text-yellow-300">Dictionary</span>
            </motion.h1>
            
            <motion.p 
              className="text-blue-100 mb-8 leading-relaxed text-lg"
              variants={itemVariants}
            >
              Explore our comprehensive <span className="font-semibold text-white">computer dictionary</span> featuring all essential tech terms, from algorithms to zero-day exploits. Perfect for students, professionals, and tech enthusiasts alike.
            </motion.p>
            
            <motion.div 
              className="flex space-x-4 shadow-2xl hover:shadow-indigo-700 transition-shadow duration-300"
              variants={itemVariants}
              whileHover="hover"
            >
              <Link href="/glossary">
                <motion.button 
                  className="bg-white hover:bg-blue-700 text-blue-700 font-semibold hover:text-white py-3 px-8 border-2 border-blue-500 hover:border-white rounded-full text-lg shadow-lg"
                  whileHover={buttonHover}
                  whileTap={buttonTap}
                >
                  Explore Now →
                </motion.button>
              </Link>
            </motion.div>
          </div>
          
          <motion.div 
            className="bg-transparent mr-4 lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
            variants={imageVariants}
          >
            <motion.div
              animate={pulseAnimation}
              className="relative"
            >
              <Image
                className="object-center rounded-lg shadow-2xl hover:shadow-indigo-700 transition-shadow duration-300"
                alt="Computer Dictionary Illustration"
                width={500}
                height={400}
                src="/Images/banner-author.png"
                priority
              />
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-yellow-400 text-blue-900 font-bold px-4 py-2 rounded-full shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
              >
                New Terms Added!
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Interview Prep Banner */}
      <motion.div 
        className="px-8 bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Link href="/interview-question">
          <motion.div 
            className="relative overflow-hidden rounded-xl shadow-2xl hover:shadow-indigo-700 transition-shadow duration-300"
            whileHover={{ scale: 1.005 }}
          >
            <Image
              className="object-center w-full h-auto rounded-xl"
              alt="Interview Preparation Banner"
              width={1250}
              height={400}
              src="/Images/prep.png"
              priority
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <div>
                <h3 className="text-white text-3xl font-bold mb-2">Interview Preparation</h3>
                <p className="text-blue-200">Master your next tech interview with our comprehensive guides</p>
              </div>
            </motion.div>
          </motion.div>
        </Link>
      </motion.div>

      {/* Online Test Section */}
      <motion.section 
        className="px-8 bg-black body-font text-white"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container mx-auto px-5 flex md:flex-row flex-col items-center py-16">
          <motion.div 
            className="bg-transparent mr-4 lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"
            variants={imageVariants}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-xl shadow-xl"
            >
              <Image
                className="object-center rounded-xl transform hover:scale-105 transition duration-500"
                alt="Online Test Illustration"
                width={500}
                height={400}
                src="/Images/onlinetest.png"
              />
            </motion.div>
          </motion.div>
          
          <div className="lg:flex-grow ml-8 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left p-10 items-center text-center shadow-2xl hover:shadow-indigo-700 transition-shadow duration-300">
            <motion.h1 
              className="title-font sm:text-4xl text-3xl mb-6 font-bold text-white"
              variants={itemVariants}
            >
              Test Your <span className="text-blue-600">Knowledge</span>
            </motion.h1>
            
            <motion.p 
              className="text-white mb-8 leading-relaxed text-lg"
              variants={itemVariants}
            >
              Challenge yourself with our interactive quizzes covering algorithms, data structures, programming languages, and cutting-edge technologies. Perfect for interview prep or skill assessment.
            </motion.p>
            
            <motion.div 
              className="flex space-x-4"
              variants={itemVariants}
            >
              <Link href="/test">
                <motion.button 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 border-2 border-blue-600 hover:border-blue-700 rounded-full text-lg shadow-md"
                  whileHover={buttonHover}
                  whileTap={buttonTap}
                >
                  Start Quiz Now
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Compiler;