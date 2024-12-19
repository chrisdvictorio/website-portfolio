import React from "react";

import git from "../assets/skills/git.png";
import github from "../assets/skills/github.png";
import postman from "../assets/skills/postman.svg";
import cloudinary from "../assets/skills/cloudinary.png";
import pgAdmin4 from "../assets/skills/postgre.png";

const toolsSkills = [
  { name: "Git", image: git, alt: "Git" },
  { name: "GitHub", image: github, alt: "GitHub" },
  { name: "Postman", image: postman, alt: "Postman" },
  { name: "Cloudinary", image: cloudinary, alt: "Cloudinary" },
  { name: "pgAdmin4", image: pgAdmin4, alt: "pgAdmin4" },
];

const Tools = () => {
  return (
    <div className="p-4 space-y-4 rounded-2xl border border-[#262626] bg-gradient-to-b from-[#1F1F1F] to-[#141414]">
      <h3 className="font-bold text-xl md:text-2xl text-[#CCCCCC]">Tools</h3>
      <ul className="flex flex-wrap items-center justify-center gap-2 max-w-[32rem]">
        {toolsSkills.map((skill) => (
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

export default Tools;
