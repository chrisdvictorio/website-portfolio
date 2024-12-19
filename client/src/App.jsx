import React from "react";

import Header from "./components/Header";
import Hero from "./pages/Hero";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Footer from "./components/Footer";

import design from "./assets/design.png";

const App = () => {
  return (
    <main className="relative bg-[#0D0D0D]">
      <img src={design} className="absolute w-full h-full object-cover" />
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Footer />
    </main>
  );
};

export default App;
