import React from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <footer class="footer-distributed ">
      <div className="container text-center">
        <div class="footer-left col">
          <h4>Cibelle Montor</h4>

          <p class="footer-company-name">© 2020 Copyright</p>
          <span>Illustration by Stories by Freepik </span>
        </div>

        <div class="footer-right row">
          <div class="footer-icons col">
            <a href="https://www.linkedin.com/in/cibelle-montor-2a1a58157/">
              <i class="fa fa-linkedin"></i>
            </a>
            <a href="https://github.com/cibellem">
              <i class="fab fa-github"></i>
            </a>
            <a href="mailto:montorcibelle@gmail.com">
              {" "}
              <i class="fas fa-at"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
