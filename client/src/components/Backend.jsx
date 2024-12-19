import React from "react";

import nodejs from "../assets/skills/node.webp";
import express from "../assets/skills/express.png";
import postgre from "../assets/skills/postgre.png";
import mongodb from "../assets/skills/mongodb.png";
import jwt from "../assets/skills/jwt.svg";
import prisma from "../assets/skills/prisma.png";
import socket from "../assets/skills/socket.png";
import python from "../assets/skills/python.png";

const backendSkills = [
  { name: "Node JS", image: nodejs, alt: "Node JS" },
  { name: "Express", image: express, alt: "Express" },
  { name: "PostgreSQL", image: postgre, alt: "PostgreSQL" },
  { name: "MongoDB", image: mongodb, alt: "MongoDB" },
  { name: "JWT", image: jwt, alt: "JWT" },
  { name: "Prisma", image: prisma, alt: "Prisma" },
  { name: "Socket.io", image: socket, alt: "Socket.io" },
  { name: "Python", image: python, alt: "Python" },
];

const Backend = () => {
  return (
    <div className="p-4 space-y-4 rounded-2xl border border-[#262626] bg-gradient-to-b from-[#1F1F1F] to-[#141414] h-full">
      <h3 className="font-bold text-xl md:text-2xl text-[#CCCCCC]">Backend</h3>
      <ul className="flex flex-wrap items-center justify-center gap-2 max-w-[32rem]">
        {backendSkills.map((skill) => (
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

export default Backend;
