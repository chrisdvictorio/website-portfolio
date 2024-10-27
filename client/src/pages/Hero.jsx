import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Description, Dialog, DialogTitle } from "@headlessui/react";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { IoInformationCircle } from "react-icons/io5";

import herobg from "../assets/hero-bg.png";
import profile1 from "../assets/profile.png";

import frontend from "../assets/frontend-icon.png";
import backend from "../assets/backend-icon.png";
import responsive from "../assets/responsive-icon.png";

import html from "../assets/round-icons/html-round.png";
import css from "../assets/round-icons/css-round.png";
import javascript from "../assets/round-icons/javascript-round.png";
import react from "../assets/round-icons/react-round.png";
import node from "../assets/round-icons/node-round.png";
import express from "../assets/round-icons/express-round.png";
import python from "../assets/round-icons/python-round.png";
import mongodb from "../assets/round-icons/mongodb-round.png";
import tailwind from "../assets/round-icons/tailwind-round.png";

const Hero = () => {
  const [isFrontendOpen, setIsFrontendOpen] = useState(false);
  const [isBackendOpen, setIsBackendOpen] = useState(false);
  const [isResponsiveOpen, setIsResponsiveOpen] = useState(false);

  return (
    <section id="home" className="overflow-hidden relative">
      <motion.div
        className="hidden 2xl:flex 2xl:justify-center absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [-15, 15],
          opacity: [1, 1, 0],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          times: [0, 0.3, 1],
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <IoIosArrowDown className="size-8 text-[#7A7A7A]" />
      </motion.div>
      <div className="relative">
        <img
          src={herobg}
          alt=""
          className="h-[40rem] md:h-[46.5rem] w-full object-cover rounded-b-3xl"
        />
        <img
          src={profile1}
          alt="profile"
          className="absolute bottom-44 size-[34rem] md:size-[44rem] left-1/2 transform -translate-x-1/2 lg:left-auto lg:top-auto lg:transform-none lg:bottom-0 lg:right-0 2xl:right-44 object-cover"
        />

        <div className="space-y-2 lg:space-y-4 px-4 py-4 md:px-12 md:py-4 lg:px-20 lg:py-6 lg:absolute lg:bottom-0 xl:px-40 xl:py-8">
          <div className="space-y-1 text-center lg:text-start">
            <p className="font-titan text-lg md:text-2xl lg:text-3xl text-[#7A7A7A]">
              @chrisdvictorio
            </p>
            <h1 className="font-titan text-2xl md:text-4xl lg:text-5xl text-[#CCCCCC]">
              Welcome to my portfolio,
            </h1>
            <h2 className="font-titan text-xl md:text-3xl lg:text-4xl text-[#7A7A7A]">
              I'm an aspiring{" "}
              <span className="block lg:inline-block text-[#E2FF02]">
                <TypeAnimation
                  sequence={[
                    "Full-Stack Developer.",
                    1000,
                    "",
                    1000,
                    "Back-End Developer.",
                    1000,
                    "",
                    1000,
                  ]}
                  speed={50}
                  wrapper="span"
                  repeat={Infinity}
                  className="text-[#E2FF02]"
                />
              </span>
            </h2>
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-2">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/chris-victorio/"
            >
              <div className="flex items-center px-3 py-1 gap-2 rounded-md border border-[#262626] bg-[#161616] hover:bg-[#1F1F1F]">
                <FaLinkedin className="text-[#CCCCCC]" />
                <p className="font-titan text-[#CCCCCC]">LINKED IN</p>
              </div>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/chrisdvictorio"
            >
              <div className="flex items-center px-3 py-1 gap-2 rounded-md border border-[#262626] bg-[#161616] hover:bg-[#1F1F1F]">
                <FaGithub className="text-[#CCCCCC]" />
                <p className="font-titan text-[#CCCCCC]">GITHUB</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-8 px-4 py-4 md:px-12 md:py-4 lg:px-20 lg:py-6 xl:px-40 xl:py-8">
        <div className="flex flex-col items-center lg:items-start justify-center space-y-1 w-full">
          <ul className="flex items-center gap-3">
            <motion.li
              whileHover={{ scale: 1.2 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
            >
              <img src={html} alt="HTML" className="min-w-14 w-14" />
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.2 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
            >
              <img src={css} alt="CSS" className="min-w-14 w-14" />
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.2 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
            >
              <img
                src={javascript}
                alt="JavaScript"
                className="min-w-14 w-14"
              />
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.2 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
            >
              <img src={react} alt="React" className="min-w-14 w-14" />
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.2 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
            >
              <img src={node} alt="Node.js" className="min-w-14 w-14" />
            </motion.li>
          </ul>

          <ul className="flex items-center gap-3 xl:ml-8 ">
            <motion.li
              whileHover={{ scale: 1.2 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
            >
              <img
                src={express}
                alt="Express"
                className="min-w-[3.8rem] w-[3.8rem]  shadow-md rounded-full"
              />
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.2 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
            >
              <img src={python} alt="Python" className="min-w-14 w-14" />
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.2 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
            >
              <img src={mongodb} alt="MongoDb" className="min-w-14 w-14" />
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.2 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
            >
              <img
                src={tailwind}
                alt="Tailwind CSS"
                className="min-w-14 w-14"
              />
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.2 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              className="flex items-center justify-center size-16 rounded-full border border-[#262626] hover:bg-[#161616]"
            >
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                <div className="flex items-center justify-center w-[3rem] h-[3rem] bg-gray-800 rounded-full">
                  <p className="text-[#CCCCCC]">+10</p>
                </div>
              </Link>
            </motion.li>
          </ul>
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            onClick={() => setIsFrontendOpen(true)}
            className="relative flex items-center justify-center h-36 px-2 rounded-2xl border border-[#262626] bg-[#161616]"
          >
            <IoInformationCircle className="size-5 absolute right-3 top-3 text-[#CCCCCC]" />
            <div className="flex flex-col items-center gap-4 min-w-40">
              <img src={frontend} className="size-16 lg:size-10" />
              <h2 className="text-center text-sm text-[#CCCCCC]">
                Front-End Development
              </h2>
            </div>
          </motion.button>
          <Dialog
            open={isFrontendOpen}
            onClose={() => setIsFrontendOpen(false)}
            className="relative z-50"
          >
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex w-screen items-center justify-center p-4">
              <motion.DialogPanel
                as={motion.div}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.3 }}
                className="max-w-lg px-8 py-6 space-y-2 rounded-2xl shadow-lg border border-[#262626] bg-[#161616]"
              >
                <DialogTitle className="flex items-center justify-between mb-6">
                  <p className="font-bold text-xl text-[#CCCCCC]">
                    Front-End Development
                  </p>
                  <button onClick={() => setIsFrontendOpen(false)}>
                    <IoMdClose className="size-6 text-red-500" />
                  </button>
                </DialogTitle>
                <Description>
                  <p className="text-justify text-[#7A7A7A]">
                    Experienced in creating user-friendly and visually appealing
                    websites using React and its libraries. I design intuitive
                    interfaces that ensure seamless navigation and optimal
                    performance while efficiently managing states and mutations
                    to maintain cross-browser compatibility.
                  </p>
                </Description>
              </motion.DialogPanel>
            </div>
          </Dialog>

          <motion.button
            whileHover={{ scale: 1.05 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            onClick={() => setIsBackendOpen(true)}
            className="relative flex items-center justify-center p-2 h-36 px-2 rounded-2xl border border-[#262626] bg-[#161616]"
          >
            <IoInformationCircle className="size-5 absolute right-3 top-3 text-[#CCCCCC]" />
            <div className="flex flex-col items-center gap-4 min-w-40">
              <img src={backend} className="size-16 lg:size-12" />
              <h2 className="text-center text-sm text-[#CCCCCC]">
                Back-End Development
              </h2>
            </div>
          </motion.button>
          <Dialog
            open={isBackendOpen}
            onClose={() => setIsBackendOpen(false)}
            className="relative z-50"
          >
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex w-screen items-center justify-center p-4">
              <motion.DialogPanel
                as={motion.div}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.3 }}
                className="max-w-lg px-8 py-6 space-y-2 rounded-2xl shadow-lg border border-[#262626] bg-[#161616]"
              >
                <DialogTitle className="flex items-center justify-between mb-6">
                  <p className="font-bold text-xl text-[#CCCCCC]">
                    Back-End Development
                  </p>
                  <button onClick={() => setIsBackendOpen(false)}>
                    <IoMdClose className="size-6 text-red-500" />
                  </button>
                </DialogTitle>
                <Description>
                  <p className="text-justify text-[#7A7A7A]">
                    Experienced in creating efficient back-end systems using
                    MongoDB, Express, and Node.js. I implement RESTful APIs to
                    facilitate seamless communication between the server and
                    client while focusing on best practices for data management
                    and security to enhance application performance.
                  </p>
                </Description>
              </motion.DialogPanel>
            </div>
          </Dialog>

          <motion.button
            whileHover={{ scale: 1.05 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            onClick={() => setIsResponsiveOpen(true)}
            className="relative flex items-center justify-center p-2 h-36 px-2 rounded-2xl border border-[#262626] bg-[#161616]"
          >
            <IoInformationCircle className="size-5 absolute right-3 top-3 text-[#CCCCCC]" />
            <div className="flex flex-col items-center gap-4 min-w-40">
              <img src={responsive} className="size-16 lg:size-12" />
              <h2 className="text-center text-sm text-[#CCCCCC]">
                Responsive <br className="hidden lg:block" /> Design
              </h2>
            </div>
          </motion.button>
          <Dialog
            open={isResponsiveOpen}
            onClose={() => setIsResponsiveOpen(false)}
            className="relative z-50"
          >
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex w-screen items-center justify-center p-4">
              <motion.DialogPanel
                as={motion.div}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.3 }}
                className="max-w-lg px-8 py-6 space-y-2 rounded-2xl shadow-lg border border-[#262626] bg-[#161616]"
              >
                <DialogTitle className="flex items-center justify-between mb-6">
                  <p className="font-bold text-xl">Responsive Design</p>
                  <button onClick={() => setIsResponsiveOpen(false)}>
                    <IoMdClose className="size-6 text-red-500" />
                  </button>
                </DialogTitle>
                <Description>
                  <p className="text-justify text-[#7A7A7A]">
                    Implementing responsive design principles using HTML, CSS,
                    and Tailwind CSS to ensure websites adapt to various screen
                    sizes, from smartphones to desktops. I focus on creating a
                    smooth and accessible user experience across all devices.
                  </p>
                </Description>
              </motion.DialogPanel>
            </div>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default Hero;
