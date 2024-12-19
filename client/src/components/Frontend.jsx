import React from "react";

import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import javascript from "../assets/skills/javascript.png";
import typescript from "../assets/skills/typescript.png";
import react from "../assets/skills/react.png";
import reactquery from "../assets/skills/reactquery.png";
import zustand from "../assets/skills/zustand.png";
import tailwind from "../assets/skills/tailwind.png";
import bootstrap from "../assets/skills/bootstrap.png";
import axios from "../assets/skills/axios.png";
import shadcn from "../assets/skills/shadcn.png";

const frontendSkills = [
  { name: "HTML 5", image: html, alt: "HTML 5" },
  { name: "CSS 3", image: css, alt: "CSS 3" },
  { name: "JavaScript", image: javascript, alt: "JavaScript" },
  { name: "TypeScript", image: typescript, alt: "TypeScript" },
  { name: "React JS", image: react, alt: "React JS" },
  { name: "React Query", image: reactquery, alt: "React Query" },
  { name: "Zustand", image: zustand, alt: "Zustand" },
  { name: "Tailwind CSS", image: tailwind, alt: "Tailwind CSS" },
  { name: "Bootstrap", image: bootstrap, alt: "Bootstrap" },
  { name: "Axios", image: axios, alt: "Axios" },
  { name: "Shadcn", image: shadcn, alt: "Shadcn" },
];

const Frontend = () => {
  return (
    <div className="p-4 space-y-4 rounded-2xl border border-[#262626] bg-gradient-to-b from-[#1F1F1F] to-[#141414]">
      <h3 className="font-bold text-xl md:text-2xl text-[#CCCCCC]">Frontend</h3>
      <ul className="flex flex-wrap items-center justify-center gap-2 max-w-[32rem]">
        {frontendSkills.map((skill) => (
          <li
            key={skill.name}
            className="flex items-center gap-2 px-4 py-3 rounded-lg border border-[#313131] bg-[#141414]"
          >
            <img src={skill.image} alt={skill.alt} className="size-6" />
            <p className="font-semibold text-[#CCCCCC]">{skill.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Frontend;
