import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTheme } from "./pages/ThemeContext";
import { ThemeProvider } from "./pages/ThemeContext";

import HomePage from "./pages/home";
import WorksPage from "./pages/works";
import ContactPage from "./pages/contact";
import AboutPage from "./pages/about";
import Footer from "./components/footer";
import NavBar from "./components/nav";
import "./pages/style.scss";

function App() {
  const themeState = useTheme();
  return (
    <>
      <Router>
        <NavBar />

        {/* <button onClick={() => themeState.toggle()}>
            {themeState.dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </button> */}
        <Container className="container">
          <HomePage />
        </Container>

        <Footer />
      </Router>
    </>
  );
}

ReactDOM.render(
  <ThemeProvider>
    {" "}
    <App />{" "}
  </ThemeProvider>,
  document.getElementById("root")
);
