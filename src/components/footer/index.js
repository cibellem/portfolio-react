import React from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <div className="footer ">
      <div className="copyright row text-center">
        <div className="col-6">
          <p>Cibelle Montor 2020</p>
        </div>
        <div className="col-6">
          <div className="row p0 row-social">
            <div className="col-6 p-0">
              <a>
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
            <div className="col-6 p-0">
              <a>
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
