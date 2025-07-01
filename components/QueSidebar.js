import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const QueSidebar = () => {
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
      name: "Android Developer",
      link: "/interview-question/android-developer",
    },
    {
      id: 2,
      name: "Data Structure",
      link: "/interview-question/data-structure",
    },
    {
      id: 3,
      name: "CSS",
      link: "/interview-question/css",
    },
    {
      id: 4,
      name: "Flutter",
      link: "/interview-question/flutter",
    },
    {
      id: 5,
      name: "HTML",
      link: "/interview-question/html",
    },
    {
      id: 6,
      name: "MERN Stack",
      link: "/interview-question/mern-stack",
    },
    {
      id: 7,
      name: "Next Js",
      link: "/interview-question/nextjs",
    },
    {
      id: 8,
      name: "Node Js",
      link: "/interview-question/nodejs",
    },
    {
      id: 9,
      name: "React Js",
      link: "/interview-question/reactjs",
    },
    {
      id: 10,
      name: "React Native",
      link: "/interview-question/react-native",
    },
    {
      id: 11,
      name: "Python",
      link: "/interview-question/python",
    },
    {
      id: 12,
      name: "MS Excel",
      link: "/interview-question/excel",
    },
    {
      id: 13,
      name: "Microsoft Power BI",
      link: "/interview-question/powerbi",
    },
    {
      id: 14,
      name: "PHP",
      category: "Web Development",
      link: "/interview-question/php",
    },
    {
      id: 14,
      name: "Django",
      category: "Web Development",
      link: "/interview-question/django",
    },
    {
      id: 15,
      name: "Wordpress",
      category: "Digital Marketing",
      link: "/interview-question/wordpress",
    },
    {
      id: 16,
      name: ".",
      category: "",
      link: "",
    },
    {
      id: 16,
      name: ".",
      category: "",
      link: "",
    },{
      id: 16,
      name: ".",
      category: "",
      link: "",
    },{
      id: 16,
      name: ".",
      category: "",
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
              <Link href="/interview-question">
                <div
                  className={`sidebar-link ${
                    router.pathname === "/interview-question" ? "active" : ""
                  }`}
                >
                  <i className="fa fa-home" />
                  Interview Question
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

export default QueSidebar;
