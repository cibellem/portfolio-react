import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/home";
import WorksPage from "./pages/works";
import ContactPage from "./pages/contact";
import AboutPage from "./pages/about";
import Footer from "./components/footer";
import Skills from "./components/skills";
import NavBar from "./components/nav";
import "./pages/style.scss";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        {/* <button onClick={() => themeState.toggle()}>
            {themeState.dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </button> */}
        <Container className="app-container">
          <HomePage />
        </Container>

        <Footer />
      </Router>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
