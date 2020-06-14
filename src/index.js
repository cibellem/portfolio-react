import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./pages/home";
import WorksPage from "./pages/works";
import ContactPage from "./pages/contact";
import AboutPage from "./pages/about";
import Footer from "./components/footer";
import NavBar from "./components/nav";
import "./pages/style.scss";

const darkTheme = {
  body: "#00000",
};

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <Router>
      <NavBar />
      <Container style={{ theme }} className="container-fluid">
        <Route path="/" exact render={() => <HomePage />} />
        <Route path="/works" render={() => <WorksPage />} />
        <Route path="/about" render={() => <AboutPage />} />
        <Route path="/contact" render={() => <ContactPage />} />
      </Container>

      <Footer />
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
