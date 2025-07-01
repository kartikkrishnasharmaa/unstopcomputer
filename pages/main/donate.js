import React, { useState } from "react";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Donate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: -50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: 20,
    },
  };

  const upiVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText("9057508560@ptaxis");
    alert("UPI ID copied to clipboard!");
  };

  return (
    <>
      <Head>
        <title>Support Our Mission | Unstop Computer</title>
        <meta
          name="description"
          content="Help us keep coding education free and accessible for everyone. Your donation fuels our tutorials, community, and future growth."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta
          name="Keywords"
          content="donate, support, coding education, free programming, web development, learn to code"
        />
        <link rel="canonical" href="https://unstopcomputer.tech/donate" />
        <meta
          property="og:image"
          content="https://unstopcomputer.tech/Images/logo.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="150" />
        <meta property="og:image:height" content="150" />
        <meta
          property="og:title"
          content="Support Our Mission | Unstop Computer"
        />
        <meta
          property="og:description"
          content="Help us keep coding education free and accessible for everyone."
        />
        <link rel="icon" href="/Images/favicon.ico" type="image/x-icon"></link>
      </Head>

      <motion.div
        className="box-border h-full w-auto p-6 md:p-10 m-4 md:m-6 border-4 shadow-xl shadow-cyan-600 hover:shadow-indigo-700"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="title-font sm:text-4xl text-center text-3xl mb-10 font-medium text-blue-700"
          variants={itemVariants}
        >
          Support Unstop Computer
        </motion.h1>

        <motion.p className="p-2 mb-4 text-lg" variants={itemVariants}>
          At <span className="font-bold">Unstop Computer</span>, we're on a
          mission to make coding education{" "}
          <span className="text-cyan-600">
            accessible, interactive, and fun
          </span>{" "}
          for everyone—from beginners to experienced programmers.
        </motion.p>

        <motion.div
          className="bg-blue-50 p-6 rounded-lg my-6 border-l-4 border-cyan-600"
          variants={itemVariants}
        >
          <h2 className="title-font text-2xl mb-4 font-medium text-blue-700">
            Why Your Donation Matters
          </h2>
          <ul className="space-y-3">
            {[
              "🚀 Expand Resources: Create more high-quality tutorials",
              "🌍 Build Community: Better tools and community events",
              "💡 Keep It Free: Cover hosting and maintenance costs",
              "🎯 New Features: Interactive coding environments",
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <span className="mr-2">{item.split(":")[0]}</span>
                <span>{item.split(":")[1]}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="my-8 p-6 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg"
          variants={itemVariants}
        >
          <h2 className="title-font text-2xl mb-4 font-medium text-blue-700">
            How You Can Help
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                emoji: "💖",
                title: "One-Time Donation",
                desc: "Any amount helps! Even ₹10 can improve a tutorial.",
              },
              {
                emoji: "📅",
                title: "Monthly Support",
                desc: "Become a sustainer with a small recurring donation.",
              },
              {
                emoji: "🤝",
                title: "Spread the Word",
                desc: "Share with friends who might support our mission.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md text-center"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl mb-2">{item.emoji}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="text-center mt-10 space-y-4"
          variants={itemVariants}
        >
          <motion.button
            className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:from-cyan-700 hover:to-blue-700 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
          >
            Donate Now
          </motion.button>

        </motion.div>

        <motion.div
          className="mt-10 p-4 bg-gray-50 rounded-lg"
          variants={itemVariants}
        >
          <h3 className="title-font text-xl mb-3 font-medium text-blue-700">
            Our Promise to You
          </h3>
          <ul className="space-y-2">
            {[
              "✅ 100% Transparency: Regular updates on fund usage",
              "✅ No Paywalls: All content stays free forever",
              "✅ Your Name in Our Hall of Fame (optional)",
            ].map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 5 }}
                className="flex items-center"
              >
                <span className="mr-2">{item.split(":")[0]}</span>
                <span>{item.split(":")[1]}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.p className="p-2 mt-6 text-center" variants={itemVariants}>
          With gratitude,
          <br />
          <span className="font-bold">The Unstop Computer Team</span>
          <br />
          <span className="text-blue-600">kartik.thedeveloper@gmail.com</span>
        </motion.p>

        {/* Donation Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white rounded-lg max-w-md w-full p-6 relative"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <button
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                  onClick={() => setIsModalOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <h3 className="text-2xl font-bold text-center text-blue-600 mb-4">
                  Scan to Donate
                </h3>

                <div className="flex justify-center mb-6">
                  <Image
                    src="/Images/subject/qrcode.jpeg"
                    alt="Donation QR Code"
                    className="w-48 h-48 border-2 border-gray-200 rounded-lg"
                    width={192}
                    height={192}
                  />
                </div>

                <motion.div
                  className="bg-blue-50 p-4 rounded-lg"
                  variants={upiVariants}
                >
                  <h4 className="font-semibold text-center mb-2">
                    Or send directly via UPI
                  </h4>
                  <motion.div
                    className="flex items-center justify-between bg-white p-3 rounded border border-blue-200"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { delay: 0.7 },
                    }}
                  >
                    <span className="font-mono">9057508560@ptaxis</span>
                    <motion.button
                      className="bg-blue-100 hover:bg-blue-200 px-2 py-1 rounded text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={copyToClipboard}
                    >
                      Copy
                    </motion.button>
                  </motion.div>
                </motion.div>

                <motion.p
                  className="text-center text-sm text-gray-500 mt-4"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { delay: 0.9 },
                  }}
                >
                  Thank you for supporting our mission! 🙏
                </motion.p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default Donate;
