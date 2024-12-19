import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import Frontend from "../components/Frontend";
import Backend from "../components/Backend";
import Tools from "../components/Tools";

const Skills = () => {
  const titleVariants = {
    hidden: { y: 65, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { x: 100, opacity: 0 },
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
      id="skills"
      ref={sectionRef}
      className="relative flex flex-col items-center gap-4 md:gap-6 lg:gap-8 xl:gap-10 px-4 py-4 md:px-12 md:py-4 lg:px-20 lg:py-6 xl:px-40 xl:py-28 overflow-hidden"
    >
      <motion.h2
        className="font-titan text-3xl md:text-5xl text-[#CCCCCC]"
        variants={titleVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        My Skills
      </motion.h2>
      <motion.p
        className="md:text-xl text-center text-[#7A7A7A]"
        variants={titleVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        I have acquired knowledge and various technical skills through my
        academic studies and continuous upskilling during my free time. By
        working on various projects, it significantly enhanced my skills across
        both <span className="text-[#E2FF02]">frontend</span> and{" "}
        <span className="text-[#E2FF02]">backend</span> technologies.
      </motion.p>
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          custom={0}
        >
          <Frontend />
        </motion.div>
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          custom={1}
        >
          <Backend />
        </motion.div>
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          custom={2}
        >
          <Tools />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
