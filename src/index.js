import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/home";
import ReactGA from "react-ga";
import Footer from "./components/footer";
import NavBar from "./components/nav";
import "./pages/style.scss";

ReactGA.initialize(process.env.REACT_APP_GA);
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <article className="app-container">
          <HomePage />
        </article>
        <Footer />
      </Router>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
