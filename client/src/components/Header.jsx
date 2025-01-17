import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

import { GoHome } from "react-icons/go";
import { FaCode } from "react-icons/fa";
import { FaFile, FaGithub } from "react-icons/fa6";
import { IoFileTrayFullOutline, IoPersonOutline } from "react-icons/io5";

import logo from "../assets/logo.png";

const Header = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  const sections = [
    { name: "home", icon: <GoHome className="size-6" /> },
    { name: "skills", icon: <FaCode className="size-6" /> },
    { name: "projects", icon: <IoFileTrayFullOutline className="size-6" /> },
    { name: "about", icon: <IoPersonOutline className="size-6" /> },
  ];

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section.name);
      if (sectionElement) {
        const { offsetTop, clientHeight } = sectionElement;
        if (
          scrollY >= offsetTop - 100 &&
          scrollY < offsetTop + clientHeight - 100
        ) {
          setActiveSection(section.name);
        }
      }
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [lastScrollY]);

  return (
    <header className="flex justify-center md:block fixed top-0 w-full z-50 px-4 py-4 md:px-12 md:py-4 lg:px-20 lg:py-6 xl:px-40 xl:py-8">
      <div className="flex items-center justify-between w-full">
        <Link to="home" smooth={true} duration={500} className="cursor-pointer">
          <img
            src={logo}
            alt="Website Logo"
            className="p-2 w-32 rounded-md bg-red-600 hover:bg-red-700 "
          />
        </Link>

        <nav className="hidden md:flex px-6 py-2 rounded-full text-[#7A7A7A] border border-[#262626] bg-[#131313] bg-opacity-80 backdrop-blur-sm">
          <ul className="flex gap-10 font-bold">
            {sections.map(({ name }) => (
              <li key={name}>
                <Link
                  to={name}
                  smooth={true}
                  duration={500}
                  className={`cursor-pointer hover:text-[#CCCCCC] ${
                    activeSection === name ? "text-[#CCCCCC]" : ""
                  }`}
                  onClick={() => setActiveSection(name)}
                >
                  {name.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="https://github.com/chrisdvictorio"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full text-[#CCCCCC] hover:text-[#E2FF02] border border-[#262626] bg-[#131313]"
        >
          <FaGithub />
        </a>
      </div>

      <nav
        className={`md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-2xl border border-[#262626] bg-[#131313] bg-opacity-80 backdrop-blur-md transition-all duration-300 ease-in-out ${
          showNav ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <ul className="flex items-center justify-between gap-12 text-[#7A7A7A]">
          {sections.map(({ name, icon }) => (
            <li
              key={name}
              className={
                activeSection === name ? "p-2 rounded-xl bg-[#E2FF02]" : ""
              }
            >
              <Link
                to={name}
                smooth={true}
                duration={500}
                className="cursor-pointer"
                onClick={() => setActiveSection(name)}
              >
                {icon}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
