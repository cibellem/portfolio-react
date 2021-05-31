import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/home";
import Footer from "./components/footer";
import NavBar from "./components/nav";
import "./pages/style.scss";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Container className="app-container">
          <HomePage />
        </Container>
        <Footer />
      </Router>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
