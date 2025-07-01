import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const Feature = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const pulseAnimation = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.03, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative overflow-hidden bg-black">
      {/* Background Bubbles */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-indigo-100 opacity-40 dark:bg-indigo-900"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.3, 0.3, 0.3],
            }}
            transition={{
              duration: 15 + Math.random() * 20,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <section className="text-gray-600 body-font relative z-0 ">
        <div className="container px-5 py-24 mx-auto shadow-2xl hover:shadow-indigo-700 transition-shadow duration-300">
          <motion.div
            className="flex flex-col"
            initial="hidden"
            animate="visible"
            variants={container}
          >
            <motion.div className="h-1 bg-gray-200 rounded overflow-hidden mb-8">
              <motion.div
                className="w-24 h-full bg-gradient-to-r from-indigo-500 to-purple-600"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </motion.div>

            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12 space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.h1
                className="p-4 text-gray-900 title-font text-4xl mb-12 font-extrabold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 "
                variants={item}
              >
                Why Choose UnstopComputer ?
              </motion.h1>

              <motion.p
                className="mt-12 mb-6 text-lg text-white backdrop-blur-sm p-6 rounded-lg shadow-sm border border-gray-100"
                variants={item}
              >
                Whether you want to start a career in coding, advance your
                current skills, or simply have fun with programming, we are here
                to help you. Join us today and start your coding journey with
                Unstop Computer!
              </motion.p>
            </div>
          </motion.div>

          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {[
              {
                title: "Practice Coding",
                desc: "The only way to learn to program is by writing code. We provide you with a platform to practice your coding skills.",
                img: "/Images/first.png",
                bg: "from-blue-100 to-indigo-100",
              },
              {
                title: "Expert Content",
                desc: "A group of experts continually working to create programming resources that are accurate and easier to understand.",
                img: "/Images/second.png",
                bg: "from-purple-100 to-pink-100",
              },
              {
                title: "Beginner Friendly",
                desc: "Programming tutorials and examples written in simple, understandable language for beginners.",
                img: "/Images/third.png",
                bg: "from-green-100 to-teal-100",
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                className="p-4 md:w-1/3 sm:mb-0 mb-6"
                variants={item}
                initial="hidden"
                animate="visible"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div
                  className={`bg-gradient-to-r ${card.bg} rounded-xl shadow-xl p-6 h-full transition duration-300 hover:shadow-2xl`}
                >
                  <motion.div
                    className="flex justify-center mb-6"
                    variants={pulseAnimation}
                    initial="initial"
                    animate="animate"
                  >
                    <div className="w-44 h-44 rounded-full border-4 border-indigo-400 p-1 bg-white shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
                      <Image
                        src={card.img}
                        alt={card.title}
                        width={128}
                        height={128}
                        className="rounded-full object-cover w-full h-full"
                      />
                    </div>
                  </motion.div>

                  <h3 className="text-xl font-bold text-center text-indigo-800 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-700 text-center leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;
