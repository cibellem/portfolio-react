import React, { useState } from "react";
import Hero from "../components/hero";

import Container from "react-bootstrap/Container";
import Works from "./works";
import About from "./about";
import Contact from "./contact";

function HomePage() {
  const [darkThese, setDarkTheme] = useState("");
  return (
    <>
      <Hero />
      <Works />
      <About />
      <Contact />
    </>
  );
}

export default HomePage;
