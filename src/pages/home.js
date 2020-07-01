import React, { useState } from "react";
import Hero from "../components/hero";

import Container from "react-bootstrap/Container";
import Works from "./works";
import About from "./about";
import Contact from "./contact";
import Skills from "../components/skills";

function HomePage() {
  const [darkThese, setDarkTheme] = useState("");
  return (
    <>
      <Hero />
      <Works />
      {/* <Skills /> */}
      <About />
      <Contact />
    </>
  );
}

export default HomePage;
