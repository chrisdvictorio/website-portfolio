import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { FaGithub } from "react-icons/fa";

import facerecognition from "../assets/projects/facerecognition.png";
import socialmediaapp from "../assets/projects/socialmediaapp.png";
import blogapp from "../assets/projects/blogapp.png";
import messengerapp from "../assets/projects/messengerapp.png";
import taskmanagerapp from "../assets/projects/taskmanagerapp.png";
import bentoportfolio from "../assets/projects/bentoportfolio.png";

const projectsData = [
  {
    id: 1,
    title: "Monitoring System: Face Recognition",
    description: `A face recognition monitoring system designed to verify the identity of DLSUD dormitory residents. It records entry and exit times to apply monitoring and enhance safety. This system create a more secure and reliable environment for residents by minimizing unauthorized access and ensuring accountability.`,
    image: facerecognition,
    stack: ["Python", "PHP", "MySQL", "Bootstrap"],
    link: "https://github.com/chrisdvictorio",
  },
  {
    id: 2,
    title: "Social Media Application",
    description: `A social media platform designed for users to connect, share, and interact. The application provides an intuitive interface for creating, updating, and managing content such as posts, photos, and blogs. Users can engage with others by liking, saving content, commenting, and following profiles. The platform also features live messaging for real-time communication.`,
    image: socialmediaapp,
    stack: ["Typescript", "React JS", "Node JS", "Postgre"],
    link: "https://github.com/chrisdvictorio/blog-app",
  },
  {
    id: 3,
    title: "Blog Application",
    description: `A web-based platform for creating and sharing blog posts, designed with a simple yet appealing interface. Users can create, update, delete and manage blog content effectively, with additional features for liking, saving posts, and following other users.`,
    image: blogapp,
    stack: ["React JS", "Node JS", "MongoDB", "Tailwind"],
    link: "https://github.com/chrisdvictorio/blog-app",
  },
  {
    id: 4,
    title: "Messenger App",
    description: `A messaging application built using Socket.io for real-time communication. It supports private messaging and group chats, along with real-time online status. Additionally, it archives all images sent by users for easy retrieval, allowing users to effortlessly access their shared media and conversations at any time.`,
    image: messengerapp,
    stack: ["React JS", "Node JS", "MongoDB", "Tailwind"],
    link: "https://github.com/chrisdvictorio/messenger-app",
  },
  {
    id: 5,
    title: "Task Manager",
    description: `A task manager designed for organizing, prioritizing, and tracking tasks to improve efficiency. Users can mark tasks as completed or pending, categorize them depending on their complexity, and view all tasks.`,
    image: taskmanagerapp,
    stack: ["React JS", "Node JS", "MongoDB", "Tailwind"],
    link: "https://github.com/chrisdvictorio",
  },
  {
    id: 6,
    title: "Bento Portfolio",
    description: `A responsive portfolio template inspired by Bento design, showcasing a summary of my projects, skills, and about me across devices. It features a clean look on both mobile and desktop. This project helped me enhance my skills in Tailwind.`,
    image: bentoportfolio,
    stack: ["HTML 5", "CSS 3", "Tailwind"],
    link: "https://github.com/chrisdvictorio/bento-portfolio",
  },
];

const Projects = () => {
  const titleVariants = {
    hidden: { y: 65, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: { duration: 0.7, delay: i * 0.1 },
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

  const colorMapping = {
    "HTML 5": "text-[#EC7161]",
    "CSS 3": "text-[#48A0DC]",
    "React JS": "text-[#61dafb]",
    "Node JS": "text-[#68A063]",
    Python: "text-[#FFDD55]",
    PHP: "text-[#7377AD]",
    MongoDB: "text-[#47A248]",
    MySQL: "text-[#F0910E]",
    Tailwind: "text-[#38B2AC]",
    Bootstrap: "text-[#8D12FC]",
    Typescript: "text-[#3178C6]",
    Postgre: "text-[#336791]",
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative flex flex-col items-center gap-4 md:gap-6 lg:gap-8 xl:gap-10 px-4 py-4 md:px-12 md:py-4 lg:px-20 lg:py-6 xl:px-40 xl:py-28 overflow-hidden"
    >
      <motion.h2
        className="font-titan text-3xl md:text-5xl text-[#CCCCCC]"
        variants={titleVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        Projects
      </motion.h2>
      <ul className="flex flex-wrap justify-center gap-4 md:gap-6">
        {projectsData.map((project, index) => (
          <motion.li
            key={project.id}
            whileHover={{ scale: 1.03 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            variants={itemVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            custom={index}
            className="flex"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex flex-col justify-start md:w-[20rem] lg:w-[22rem] 2xl:w-[26rem] p-4 gap-4 rounded-2xl border border-[#262626] bg-[#161616] hover:bg-[#1F1F1F] group"
            >
              <div className="absolute top-3 right-3 p-2 rounded-xl border border-[#282828] bg-[#1F1F1F]">
                <FaGithub className="size-5 text-[#7A7A7A] group-hover:text-[#E2FF02] group-hover:animate-bounce" />
              </div>
              <div className="space-y-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg"
                />
                <div className="space-y-1">
                  <h3 className="font-bold text-xl text-[#E2FF02]">
                    {project.title}
                  </h3>
                  <p className="text-justify text-[#7A7A7A]">
                    {project.description}
                  </p>
                </div>
              </div>

              <ul className="flex flex-wrap text-nowrap gap-2">
                {project.stack.map((stack, index) => (
                  <li
                    key={index}
                    className={`px-4 py-1 text-sm xl:text-xs rounded-md border border-[#262626] bg-[#131313] ${colorMapping[stack]}`}
                  >
                    {stack}
                  </li>
                ))}
              </ul>
            </a>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
