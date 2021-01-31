import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ContactPage from "../../pages/contact";

function NavBar() {
  const handleThemChange = () => {
    console.log("hi");
  };
  return (
    <Navbar expand="lg" className="container nav ">
      {/* <Navbar.Brand className="logo" href="#home">
        <span className="first">Cibelle</span>
        <span className="second">Montor</span>
      </Navbar.Brand> */}
      <Navbar.Toggle
        className="border-1 ml-auto nav-bar-toggle"
        aria-controls="navbar-toggle"
      />
      <Navbar.Collapse className="nav-bar-collapse" id="navbar-toggle">
        <Nav className="nav-bar ml-auto brackets ">
          <a href="/" className="px-4  nav-link">
            Home
          </a>
          <a href="#projects" className="px-4  nav-link">
            {" "}
            Projects
          </a>
          <a href="#skills" className="px-4  nav-link">
            {" "}
            Skills
          </a>
          <a href="#about" className="px-4  nav-link">
            {" "}
            About
          </a>{" "}
          <a href="#contact" className="px-4  nav-link">
            {" "}
            Contact
          </a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
