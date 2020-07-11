import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function NavBar() {
  const handleThemChange = () => {
    console.log("hi");
  };
  return (
    <Navbar expand="lg" className="container nav ">
      <Navbar.Toggle
        className="border-1 ml-auto nav-bar-toggle"
        aria-controls="navbar-toggle"
      />
      <Navbar.Collapse className="nav-bar-collapse" id="navbar-toggle">
        <Nav className="nav-bar ml-auto brackets ">
          <a className="px-4  nav-link" href="#home">
            Home
          </a>
          <a
            className="px-4  nav-link"
            href="#works"
            smooth={true}
            duration={500}
          >
            My Projects
          </a>
          <a
            className="px-4  nav-link"
            href="#about"
            smooth={true}
            duration={500}
          >
            About
          </a>
          <a
            className="px-4  nav-link"
            href="#skills"
            smooth={true}
            duration={500}
          >
            Skills
          </a>
          <a
            className="px-4  nav-link"
            href="#contact"
            smooth={true}
            duration={500}
          >
            Contact
          </a>
          {/*
           */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;