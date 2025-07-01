"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const pathname = usePathname();
  const scrollableRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [items, setItems] = useState([]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Computer Dictionary", path: "/glossary" },
    { name: "Blogs", path: "/blog" },
    { name: "MCQ", path: "/mcq" },
    { name: "Test", path: "/test" },
    { name: "Interview Preparation", path: "/interview-question" },
    { name: "Online Compiler", path: "/compiler/index.html" }
  ];

  const scrollItemsData = [
    {
      text: "Android Developer",
      path: "/interview-question/android-developer",
    },
    {
      text: "Data Structure",
      path: "/interview-question/data-structure",
    },
    {
      text: "CSS",
      path: "/interview-question/css",
    },
    {
      text: "Flutter",
      path: "/interview-question/flutter",
    },
    {
      text: "HTML",
      path: "/interview-question/html",
    },
    {
      text: "MERN Stack",
      path: "/interview-question/mern-stack",
    },
    {
      text: "Next Js",
      path: "/interview-question/nextjs",
    },
    {
      text: "Node Js",
      path: "/interview-question/nodejs",
    },
    {
      text: "React Js",
      path: "/interview-question/reactjs",
    },
    {
      text: "React Native",
      path: "/interview-question/react-native",
    },
    {
      text: "Python",
      path: "/interview-question/python",
    },
    {
      text: "MS Excel",
      path: "/interview-question/excel",
    },
    {
      text: "Microsoft Power BI",
      path: "/interview-question/powerbi",
    },
    {
      text: "PHP",
      path: "/interview-question/php",
    },
    {
      text: "Django",
      path: "/interview-question/django",
    },
  ];
  // Initialize items with duplicates for seamless looping
  useEffect(() => {
    setItems([...scrollItemsData, ...scrollItemsData]);
  }, []);

  // Auto-scroll effect with infinite loop
  useEffect(() => {
    const scrollContainer = scrollableRef.current;
    if (!scrollContainer || isPaused || items.length === 0) return;

    const scrollSpeed = 1;
    let animationFrame;
    let scrollAmount = 0;
    const itemWidth = scrollContainer.children[0]?.offsetWidth + 16; // 16px for margin

    const scroll = () => {
      scrollAmount += scrollSpeed;
      scrollContainer.scrollLeft = scrollAmount;

      // When we've scrolled past the first set of items, reset scroll position seamlessly
      if (scrollAmount >= scrollItemsData.length * itemWidth) {
        scrollAmount = 0;
        scrollContainer.scrollLeft = 0;
      }

      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused, items]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Animation variants (same as before)
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: -20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  const mobileMenu = {
    hidden: { height: 0, opacity: 0 },
    show: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <header className="sticky top-0 z-50 bg-black backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo with animation */}
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/" className="flex items-center">
              <Image
                src="/Images/logo.webp"
                width={140}
                height={40}
                alt="website Logo"
                className="hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:flex items-center space-x-8"
            initial="hidden"
            animate="show"
            variants={container}
          >
            {navItems.map((navItem, index) => {
              const isActive = pathname === navItem.path;
              return (
                <motion.div
                  key={navItem.path}
                  className="relative"
                  variants={item}
                  onHoverStart={() => setHoveredItem(index)}
                  onHoverEnd={() => setHoveredItem(null)}
                >
                  <Link
                    href={navItem.path}
                    className={`relative px-2 py-1.5 font-medium transition-colors ${
                      isActive
                        ? "text-white font-bold "
                        : "text-white hover:text-white"
                    }`}
                  >
                    {navItem.name}
                    {(hoveredItem === index || isActive) && (
                      <motion.span
                        layoutId="navHover"
                        className={`absolute left-0 bottom-0 h-0.5 ${
                          isActive ? "bg-blue-600" : "bg-blue-400"
                        }`}
                        initial={{ width: isActive ? "100%" : 0 }}
                        animate={{ width: "100%" }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-md focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={isMenuOpen ? "open" : "closed"}
              variants={{
                closed: { rotate: 0 },
                open: { rotate: 180 },
              }}
              transition={{ duration: 0.3 }}
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden mt-4"
              variants={mobileMenu}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <motion.div
                className="flex flex-col space-y-2 py-2"
                variants={container}
                initial="hidden"
                animate="show"
              >
                {navItems.map((navItem) => {
                  const isActive = pathname === navItem.path;
                  return (
                    <motion.div key={navItem.path} variants={item}>
                      <Link
                        href={navItem.path}
                        className={`block px-4 py-3 rounded-lg transition-colors ${
                          isActive
                            ? "bg-blue-50 text-blue-600 font-semibold"
                            : "text-white hover:bg-black-700"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <motion.div
                          whileHover={{ x: 5 }}
                          className="flex items-center"
                        >
                          <span
                            className={`mr-2 ${
                              isActive ? "text-blue-600" : "text-gray-400"
                            }`}
                          >
                            →
                          </span>
                          {navItem.name}
                          {isActive && (
                            <span className="ml-2 text-blue-400">●</span>
                          )}
                        </motion.div>
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Horizontal Scrollable Section - No Scrollbar */}
        <div
          className="mt-2 relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={scrollableRef}
            className="flex overflow-x-auto whitespace-nowrap py-2 scrollbar-none"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <style jsx>{`
              .scrollbar-none::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {items.map((item, index) => (
              <Link
                key={`${item.text}-${index}`} // Unique key for duplicated items
                href={item.path}
                className="inline-block px-4 py-1 mx-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors duration-200 flex-shrink-0"
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
