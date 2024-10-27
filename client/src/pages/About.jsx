import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import { FaLocationDot, FaArrowRight } from "react-icons/fa6";
import {
  FaLanguage,
  FaSchool,
  FaUserGraduate,
  FaHeart,
  FaFile,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import { SiExpress, SiMongodb } from "react-icons/si";

import profile from "../assets/about-profile.png";

const About = () => {
  const titleVariants = {
    hidden: { y: 65, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const leftVariants = {
    hidden: { x: -65, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: { duration: 1, delay: i * 0.2 },
    }),
  };

  const rightVariants = {
    hidden: { x: 65, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: { duration: 1, delay: i * 0.2 },
    }),
  };

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative flex flex-col items-center gap-4 md:gap-6 lg:gap-8 xl:gap-10 px-4 py-4 md:px-12 md:py-4 lg:px-20 lg:py-6 xl:px-40 xl:py-28 overflow-hidden"
    >
      <motion.h2
        className="font-titan text-3xl md:text-5xl text-[#CCCCCC]"
        variants={titleVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        About Me
      </motion.h2>
      <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
        <div className="space-y-4 md:space-y-6 lg:w-full">
          <motion.div
            variants={leftVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="p-4 space-y-4 rounded-2xl border border-[#1D1D1D] bg-[#0F0F0F]"
          >
            <div className="flex items-center gap-2 lg:gap-4">
              <img
                src={profile}
                alt="profile"
                className="rounded-lg size-16 md:size-20 xl:size-28 object-cover"
              />
              <div>
                <p className="font-bold text-xl xl:text-2xl text-[#CCCCCC]">
                  Chris Victorio
                </p>
                <p className="lg:text-lg ">
                  <TypeAnimation
                    sequence={[
                      "★ Full-Stack Developer ★",
                      1000,
                      "",
                      1000,
                      "★ Back-End Developer ★",
                      1000,
                      "",
                      1000,
                    ]}
                    speed={50}
                    wrapper="span"
                    repeat={Infinity}
                    className="text-[#E2FF02]"
                  />
                </p>
              </div>
            </div>
            <div className="p-2 rounded-md border border-[#1E1E1E] bg-[#141414]">
              <ul className="flex flex-wrap gap-2">
                <li className="flex items-center gap-2 px-2 py-1 rounded-full border border-[#212121] bg-[#191919]">
                  <FaLocationDot className="size-4 text-[#E2FF02]" />
                  <p className="text-sm text-[#CCCCCC]">Philippines</p>
                </li>
                <li className="flex items-center gap-2 px-2 py-1 rounded-full border border-[#212121] bg-[#191919]">
                  <FaLanguage className="size-4 text-[#E2FF02]" />
                  <p className="text-sm text-[#CCCCCC]">English & Filipino</p>
                </li>
                <li className="flex items-center gap-2 px-2 py-1 rounded-full border border-[#212121] bg-[#191919]">
                  <FaSchool className="size-4 text-[#E2FF02]" />
                  <p className="text-sm text-[#CCCCCC]">DLSUD</p>
                </li>
                <li className="flex items-center gap-2 px-2 py-1 rounded-full border border-[#212121] bg-[#191919]">
                  <FaUserGraduate className="size-4 text-[#E2FF02]" />
                  <p className="text-sm text-[#CCCCCC]">Computer Science</p>
                </li>
                <li className="flex items-center gap-2 px-2 py-1 rounded-full border border-[#212121] bg-[#191919]">
                  <FaHeart className="size-4 text-[#E2FF02]" />
                  <p className="text-sm text-[#CCCCCC]">Attack On Titan</p>
                </li>
              </ul>
            </div>
            <div className="flex gap-6">
              <a
                href="/assets/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 py-1 gap-2 w-full rounded-md border border-[#212121] bg-[#191919] hover:bg-[#1F1F1F]"
              >
                <FaFile className="size-3 text-[#E2FF02]" />
                <p className="text-[#CCCCCC]">Resume</p>
              </a>
              <a
                href="https://www.linkedin.com/in/chris-victorio/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 py-1 gap-2 w-full rounded-md border border-[#212121] bg-[#191919] hover:bg-[#1F1F1F]"
              >
                <FaLinkedin className="size-4 text-[#E2FF02]" />
                <p className="text-[#CCCCCC]">LinkedIn</p>
              </a>
            </div>
          </motion.div>
          <motion.div
            variants={leftVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="flex flex-col gap-4 2xl:flex-row 2xl:items-center justify-between p-4 rounded-2xl border border-[#1D1D1D] bg-[#0F0F0F]"
          >
            <div>
              <h3 className="font-semibold text-xl md:text-2xl  text-[#CCCCCC]">
                Preferred Stack
              </h3>
              <p className="text-[#7A7A7A]">
                MongoDB | Express | React JS | Node JS
              </p>
            </div>
            <ul className="flex flex-wrap gap-4">
              <motion.li
                whileHover={{ scale: 1.2 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
                className="p-3 rounded-full border-l border-t border-[#292929] bg-[#141414] text-[#22B14C]"
              >
                <SiMongodb className="size-10" />
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.2 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
                className="p-3 rounded-full border-l border-t border-[#292929] bg-[#141414] text-[#1D3B63]"
              >
                <SiExpress className="size-10" />
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.2 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
                className="p-3 rounded-full border-l border-t border-[#292929] bg-[#141414] text-[#61DAFB]"
              >
                <FaReact className="size-10" />
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.2 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
                className="p-3 rounded-full border-l border-t border-[#292929] bg-[#141414] text-[#83CD29]"
              >
                <FaNodeJs className="size-10" />
              </motion.li>
            </ul>
          </motion.div>
        </div>
        <div className="space-y-4 md:space-y-6 lg:w-full">
          <motion.div
            className="p-4 space-y-4 rounded-2xl border border-[#1D1D1D] bg-[#0F0F0F]"
            variants={rightVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <h3 className="font-semibold text-xl md:text-2xl text-[#CCCCCC]">
              A little about me
            </h3>
            <p className="text-justify text-[#7A7A7A]">
              Hi, I'm Chris Victorio, an aspiring{" "}
              <span className="text-[#E2FF02]">Full-Stack Developer</span>. My
              primary focus is on{" "}
              <span className="text-[#E2FF02]">back-end development</span>.
              However, I recognize that having a background on{" "}
              <span className="text-[#E2FF02]">front-end technologies</span> is
              valuable as it helps me understand how web development works as a
              whole. This knowledge enables me to create applications that are
              visually appealing, efficient, and scalable.
            </p>
            <p className="text-justify text-[#7A7A7A]">
              Eager to improve my skills, I aim to showcase my abilities and
              deliver exceptional results in website development. I learned the
              importance of{" "}
              <span className="text-[#E2FF02]">discipline and focus</span> in my
              development journey, as these qualities enable me to stay
              committed to my goals.
            </p>
            <p className="text-justify text-[#7A7A7A]">
              I've also discovered the importance of{" "}
              <span className="text-[#E2FF02]">
                balancing work and relaxation
              </span>
              , as it allows me to recharge my mind and body, ensuring that I
              stay motivated and focused on my goals. In my free time, I enjoy
              watching movies and anime, listening to music, and playing games,
              which helps me relax and prevents burnout.
            </p>
          </motion.div>

          <motion.div
            className="p-4 space-y-4 rounded-2xl border border-[#1D1D1D] bg-[#0F0F0F]"
            variants={rightVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <h3 className="font-semibold text-xl md:text-2xl text-center text-[#CCCCCC]">
              Socials
            </h3>
            <ul className="flex flex-col md:flex-row md:justify-between gap-4 ">
              <li className="w-full md:h-40 rounded-xl border border-[#1E1E1E] bg-[#141414] hover:bg-[#1F1F1F] group">
                <a
                  href="https://www.linkedin.com/in/chris-victorio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex md:flex-col md:items-start md:justify-between items-center px-3 py-2 md:p-6 h-full gap-2"
                >
                  <div className="flex items-center md:justify-between md:w-full">
                    <div className="p-2 rounded-md bg-[#282828]">
                      <FaLinkedin className="size-6 text-[#CCCCCC] group-hover:text-[#E2FF02]" />
                    </div>
                    <FaArrowRight className="hidden md:block size-5 transition-transform duration-500 transform group-hover:-rotate-45 group-hover:opacity-100 opacity-0 text-[#7A7A7A]" />
                  </div>

                  <div className="flex justify-between items-center w-full">
                    <div>
                      <p className="text-sm font-bold text-[#CCCCCC]">
                        LinkedIn
                      </p>
                      <p className="text-xs text-[#7A7A7A]">www.linkedin.com</p>
                    </div>
                    <FaArrowRight className="size-5 -rotate-45 md:hidden text-[#7A7A7A]" />
                  </div>
                </a>
              </li>

              <li className="w-full md:h-40 rounded-xl border border-[#1E1E1E] bg-[#141414] hover:bg-[#1F1F1F] group">
                <a
                  href="https://github.com/chrisdvictorio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex md:flex-col md:items-start md:justify-between items-center px-3 py-2 md:p-6 h-full gap-2"
                >
                  <div className="flex items-center md:justify-between md:w-full">
                    <div className="p-2 rounded-md bg-[#282828]">
                      <FaGithub className="size-6 text-[#CCCCCC] group-hover:text-[#E2FF02]" />
                    </div>
                    <FaArrowRight className="hidden md:block size-5 transition-transform duration-500 transform group-hover:-rotate-45 group-hover:opacity-100 opacity-0 text-[#7A7A7A]" />
                  </div>

                  <div className="flex justify-between items-center w-full">
                    <div>
                      <p className="text-sm font-bold text-[#CCCCCC]">GitHub</p>
                      <p className="text-xs text-[#7A7A7A]">
                        www.github.com/chrisdvictorio
                      </p>
                    </div>
                    <FaArrowRight className="size-5 -rotate-45 md:hidden text-[#7A7A7A]" />
                  </div>
                </a>
              </li>

              <li className="w-full md:h-40 rounded-xl border border-[#1E1E1E] bg-[#141414] hover:bg-[#1F1F1F] group">
                <a
                  href="https://www.instagram.com/ishmimi_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex md:flex-col md:items-start md:justify-between items-center px-3 py-2 md:p-6 h-full gap-2"
                >
                  <div className="flex items-center md:justify-between md:w-full">
                    <div className="p-2 rounded-md bg-[#282828]">
                      <FaInstagram className="size-6 text-[#CCCCCC] group-hover:text-[#E2FF02]" />
                    </div>
                    <FaArrowRight className="hidden md:block size-5 transition-transform duration-500 transform group-hover:-rotate-45 group-hover:opacity-100 opacity-0 text-[#7A7A7A]" />
                  </div>

                  <div className="flex justify-between items-center w-full">
                    <div>
                      <p className="text-sm font-bold text-[#CCCCCC]">
                        Instagram
                      </p>
                      <p className="text-xs text-[#7A7A7A]">
                        www.instagram.com/ishmimi_
                      </p>
                    </div>
                    <FaArrowRight className="size-5 -rotate-45 md:hidden text-[#7A7A7A]" />
                  </div>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
