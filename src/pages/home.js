import React from "react";
import Hero from "../components/hero";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Works from "./works";
import About from "./about";
import Contact from "./contact";

function HomePage() {
  return (
    <>
      <Hero />
      <Works />
      <About  />
      <Contact />
    </>
  );
}

export default HomePage;
