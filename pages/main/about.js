import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const about = () => {
  // Background animation elements
  const backgroundElements = [
    {
      style:
        "absolute top-1/4 left-1/4 w-16 h-16 bg-blue-300 rounded-full blur-xl",
      animate: {
        x: [0, 20, -10, 0],
        y: [0, 30, -20, 0],
        opacity: [0.1, 0.3, 0.2, 0.1],
        transition: {
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        },
      },
    },
    {
      style:
        "absolute bottom-1/3 right-1/3 w-24 h-24 bg-indigo-300 rounded-full blur-xl",
      animate: {
        x: [0, -40, 30, 0],
        y: [0, -20, 15, 0],
        opacity: [0.1, 0.2, 0.05, 0.1],
        transition: {
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        },
      },
    },
    {
      style:
        "absolute top-3/4 right-1/4 w-20 h-20 bg-cyan-300 rounded-full blur-xl",
      animate: {
        x: [0, -30, 20, 0],
        y: [0, 40, -30, 0],
        opacity: [0.05, 0.15, 0.1, 0.05],
        transition: {
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        },
      },
    },
  ];

  // Main container animation
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  // Child element animation
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
      },
    },
  };
  return (
    <div>
      <Head>
        <title>About Us | Unstop Computer</title>
        <meta
          name="description"
          content="The website where you can learn how to code from scratch. Whether you are a beginner or an experienced programmer, you will find something useful and interesting on our site. "
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
          href="https://unstopcomputer.tech/main/about"
        />
        <meta
          property="og:image"
          content="https://unstopcomputer.tech/Images/logo.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="150" />
        <meta property="og:image:height" content="150" />
        <meta property="og:title" content="About Us | Unstop Computer" />
        <meta
          property="og:description"
          content="The website where you can learn how to code from scratch. Whether you are a beginner or an experienced programmer, you will find something useful and interesting on our site. "
        />
        <link rel="icon" href="/Images/favicon.ico" type="image/x-icon"></link>
      </Head>
      <section className="box-border h-full w-auto p-10 m-6 border-4 shadow-xl shadow-cyan-600 hover:shadow-indigo-700">
        <h1 className="title-font sm:text-4xl text-center text-2xl mb-10 font-medium text-blue-700">
          About us | Unstop Computer.tech{" "}
        </h1>
        <div className="container px-5 py-10 mx-auto flex flex-wrap">
          <Image src="/Images/about.png" alt="about" width={300} height={50} />
          <div className="md:w-3/5 md:pl-6">
            <p className="title-font text-lg">
              {" "}
              The website where you can learn how to code from scratch. Whether
              you are a beginner or an experienced programmer, you will find
              something useful and interesting on our site. We offer tutorials
              on various topics, such as web development, data science, machine
              learning, game design, and more.
            </p>
          </div>
        </div>
        <section className="title-font text-lg">
          <div className="container px-2 mx flex flex-wrap mb-4">
            <h3>
              You can also access quizzes, exercises, and projects to test your
              skills and apply what you have learned. Our tutorials are written
              by experts who have years of experience in the field and are
              passionate about sharing their knowledge with others. They are
              also easy to follow, interactive, and fun. You can learn at your
              own pace and schedule, and get feedback and support from our
              community of learners and instructors.
              <br />
              <br />
              <br /> Whether you want to start a career in coding, advance your
              current skills, or simply have fun with programming, we are here
              to help you. Join us today and start your coding journey with
              Unstop Computer!
            </h3>
            <p className="mt-4">
              Our platform is constantly evolving and we welcome any ideas or
              comments you have. We are a team of passionate developers who
              strive to create coding resources that are correct and easy to
              understand.
            </p>
          </div>
        </section>
      </section>
      <section className="bg-pink-400 box-border h-full w-auto p-6 m-6 border-4 shadow-xl shadow-cyan-600 hover:shadow-indigo-700">
        <div className="container mx-auto flex px-5 py-16 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-white text-3xl mb-4 font-medium ">
              “Before software can be reusable it first has to be usable.” –
              Ralph Johnson
            </h1>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <h1 className="title-font sm:text-4xl text-center text-3xl mb-4 font-medium text-blue-700">
          Our Testimonial
        </h1>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <p className="leading-relaxed">
                  I have learned so much from Unstop Computer.in website. The
                  instructors are knowledgeable and engaging, the courses are
                  well-structured and up-to-date, and the exercises are
                  challenging and fun. I highly recommend this website to anyone
                  who wants to learn coding skills in a fast and easy way.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  Radhika Malhotra
                </h2>
                <p className="text-gray-500">Front-end Developer</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <p className="leading-relaxed">
                  Unstop Computer.in website is the best online learning
                  platform for coding enthusiasts. The website offers a variety
                  of courses on different topics and languages, from beginner to
                  advanced level. The courses are interactive and practical,
                  with clear explanations and examples. The website also
                  provides support and feedback from the instructors and the
                  community. I love Unstop Computer.in website and I think you
                  will too.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  Anshika Maheshwari
                </h2>
                <p className="text-gray-500">UI Develeoper</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <p className="leading-relaxed">
                  If you are looking for a reliable and affordable way to learn
                  coding, look no further than Unstop Computer.in website. The
                  website has a huge collection of courses on various coding
                  topics and languages, suitable for all skill levels. The
                  courses are taught by experienced and friendly instructors,
                  who guide you through the concepts and techniques with ease.
                  The website also has a lot of resources and tips to help you
                  improve your coding skills. Unstop Computer.in website is the
                  ultimate online learning destination for coders.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  Priyanka Rathore
                </h2>
                <p className="text-gray-500">Student</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-full w-auto p-10 m-6 border-1 shadow-md z-90 shadow-cyan-600 hover:shadow-indigo-700 overflow-hidden">
        {/* Background animated elements */}
        {backgroundElements.map((element, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={element.animate}
            className={element.style}
          />
        ))}

        <motion.div
          className="container mx-auto flex flex-col items-center text-center relative z-10"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            variants={item}
            className="text-3xl font-semibold text-blue-700 mb-6"
          >
            Meet the Author
          </motion.h2>

          <motion.div variants={item}>
            <Image
              src="/Images/kartikprofile.jpeg"
              alt="Author"
              width={150}
              height={150}
              className="rounded-full shadow-md"
            />
          </motion.div>

          <motion.h3
            variants={item}
            className="text-xl font-medium text-gray-900 mt-4"
          >
            Kartik Sharma
          </motion.h3>

          <motion.p variants={item} className="text-gray-500">
            Founder & Lead Developer
          </motion.p>

          <motion.p variants={item} className="mt-2 text-lg text-gray-700">
            Passionate about coding, technology, and innovation. Dedicated to
            creating a platform where learning is accessible and enjoyable.
          </motion.p>

          <motion.div
            variants={item}
            className="flex justify-center mt-4 space-x-4"
          >
            <a
              href="https://instagram.com/kartikkrishnasharma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/dev-kartik-sharma/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 transition-colors"
            >
              LinkedIn
            </a>
      
          </motion.div>
        </motion.div>
      </section>

      <section className="h-full w-auto p-10 m-6 border-1 shadow-md shadow-cyan-600 hover:shadow-indigo-700">
        <div className="container mx-auto flex px-5 py-14 items-center justify-center flex-col">
          <div className="text-center lg:w-3/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Join our Team
            </h1>
            <p className="mb-8 leading-relaxed">
              We are looking for talented and motivated individuals to join our
              team. If you are passionate about creating innovative solutions
              and delivering value to our clients, we want to hear from you.
            </p>
            <div className="flex justify-center">
              <Link href="/main/career">
                <button className="inline-flex text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  See Current Opportunity
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default about;
