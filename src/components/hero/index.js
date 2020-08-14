import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Hero() {
  return (
    <Row id="home" className="row-shared row-to-shrink  ">
      <Col className="col-to-shrink" lg={6} md={6} xs={12}>
        {" "}
        <h1 className="hero-header">Hello!</h1>
        <p className="hero-text">
          {" "}
          <span>I'm Cibelle,</span> Full Stack Web Developer based in Phoenix,
          Arizona. I'm building data-driven, creative,  and user-friendly
          solutions.
        </p>
        <p className="hero-text"> </p>
        {/* <button className="button hero-button">Projects</button> */}
        <div class="footer-icons ">
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
      </Col>
      <Col className="text-right  " lg={6} md={6} xs={12}>
        <img
          className="hero-image img-responsive  "
          src={require("./me.svg")}
          alt=""
        />
      </Col>
    </Row>
  );
}
export default Hero;
