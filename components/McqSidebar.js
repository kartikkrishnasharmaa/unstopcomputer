import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const McqSidebar = () => {
  const [toggle, setToggle] = useState(false);
  const router = useRouter();

  const openNav = () => {
    const $wrapper = document.querySelector("#wrapper");
    $wrapper.classList.add("toggled");
  };

  const closeNav = () => {
    const $wrapper = document.querySelector("#wrapper");
    $wrapper.classList.remove("toggled");
  };

  const mcqsubjects = [
    {
      id: 1,
      name: "Artificial Intelligence",
      link: "/mcq/artificial-intelligence",
    },
    { id: 2, name: "Angular Js", link: "/mcq/angularjs-mcq" },
    { id: 3, name: "Blockchain", link: "/mcq/blockchain" },
    { id: 4, name: "C Language", link: "/mcq/c-language" },
    { id: 5, name: "Computer Fundamental", link: "/mcq/computer-fundamental" },
    { id: 6, name: "Computer Memory", link: "/mcq/computer-memory" },
    { id: 7, name: "Cloud Computing", link: "/mcq/cloud-mcq" },
    { id: 8, name: "C++", link: "/mcq/cpp-language" },
    { id: 9, name: "Computer Networking", link: "/mcq/networking-mcq" },
    { id: 8, name: "CSS", link: "/mcq/css-mcq" },

    { id: 10, name: "Data Structure", link: "/mcq/data-structure-mcq" },
    { id: 11, name: "DBMS", link: "/mcq/dbms-mcq" },
    { id: 12, name: "Ethical Hacking ", link: "/mcq/ethical-hacking-mcq" },
    { id: 13, name: "HTML", link: "/mcq/html-mcq" },
    { id: 14, name: "I/O Devices", link: "/mcq/io-device" },
    { id: 16, name: "Java", link: "/mcq/java-mcq" },
    { id: 17, name: "JavaScript", link: "/mcq/javascript-mcq" },
    { id: 18, name: "Machine Learning", link: "/mcq/machine-learning-mcq" },
    { id: 19, name: "MongoDB", link: "/mcq/mongodb-mcq" },
    {
      id: 20,
      name: "Mobile Communication",
      link: "/mcq/mobile-communication-mcq",
    },
    { id: 21, name: "Multimedia", link: "/mcq/multimedia-mcq" },
    { id: 22, name: "Node Js", link: "/mcq/node-mcq" },
    { id: 23, name: "Operating System", link: "/mcq/operating-system" },
    { id: 24, name: "Python", link: "/mcq/python-mcq" },
    { id: 25, name: "ReactJs", link: "/mcq/react-mcq" },
    {
      id: 26,
      name: "System Analysis & Design",
      link: "/mcq/system-design-analysis-mcq",
    },
    {
        id: 14,
        name: ".",
        link: "",
      },
      {
        id: 14,
        name: ".",
        link: "",
      },
    // Add more subjects here
  ];

  useEffect(() => {
    toggle ? openNav() : closeNav();
  }, [toggle]);

  return (
    <div>
      <div id="wrapper">
        <aside id="sidebar-wrapper">
          <ul className="sidebar-nav">
            <li>
              <Link href="/mcq">
                <div
                  className={`sidebar-link ${
                    router.pathname === "/mcq" ? "active" : ""
                  }`}
                >
                  <i className="fa fa-home" />
                  MCQ - Home
                </div>
              </Link>
            </li>
            {mcqsubjects.map((subject) => (
              <li key={subject.id}>
                <Link href={subject.link}>
                  <div
                    className={`sidebar-link ${
                      router.pathname === subject.link ? "active" : ""
                    }`}
                  >
                    <i className="fa fa-home" />
                    {subject.name}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
        <div id="navbar-wrapper">
          <nav className="navbar navbar-inverse">
            <div className="navbar-header">
              <div
                className="sidebar-toggle"
                onClick={() => setToggle(!toggle)}
              >
                <i className="bi bi-list" />
              </div>
            </div>
          </nav>
        </div>
      </div>
      <style jsx>{`
        .sidebar-nav {
          list-style: none;
          padding: 0;
        }
        .sidebar-link {
          display: flex;
          color: black;
          text-decoration: none;
        }
        .sidebar-link.active {
          background-color: #0000ff;
          color: #fff;
        }
        .sidebar-link i {
          margin-right: -50px;
        }
        .navbar-header {
          padding: 10px 15px;
        }
        .sidebar-toggle {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default McqSidebar;
