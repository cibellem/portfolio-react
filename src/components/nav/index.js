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
      <Navbar.Brand className="logo" href="#home">
        <span className="first">Cibelle</span>
        <span className="second">Montor</span>
      </Navbar.Brand>
      <Navbar.Toggle
        className="border-1 ml-auto nav-bar-toggle"
        aria-controls="navbar-toggle"
      />
      <Navbar.Collapse className="nav-bar-collapse" id="navbar-toggle">
        <Nav className="nav-bar ml-auto brackets ">
          <Link to="/" className="px-4  nav-link">
            Home
          </Link>
          <Link to="/projects" className="px-4  nav-link">
            Projects
          </Link>
          <Link to="/skills" className="px-4  nav-link">
            Skills
          </Link>
          <Link to="/about" className="px-4  nav-link">
            About
          </Link>
          <Link to="/contact" className="px-4  nav-link">
            Contact
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
