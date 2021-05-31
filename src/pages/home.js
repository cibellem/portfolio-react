import React from "react";
import Hero from "../components/hero";
import "./style.scss";
import Works from "./works";
import About from "./about";
import Contact from "./contact";
import Skills from "../components/skills";
function HomePage() {
  return (
    <>
      <Hero />
      <Works />
      <About />
      <Skills />
      <Contact />
    </>
  );
}

export default HomePage;
