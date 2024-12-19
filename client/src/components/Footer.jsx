import React from "react";

import icon from "../assets/icon.png";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center mt-8 xl:mt-0 py-4 h-24 gap-4 bg-[#1A181D]">
      <img src={icon} className="size-8" />
      <p className="font-bold text-lg text-[#CCCCCC]">
        Chris Daniel Victorio &#169; 2024
      </p>
    </footer>
  );
};

export default Footer;
