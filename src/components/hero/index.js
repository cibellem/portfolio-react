import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Hero() {
  return (
    <Row id="home" className="row-shared row-to-shrink fade-in-image ">
      <Col className="col-to-shrink" lg={6} md={6} xs={12}>
        {" "}
        <h1 className="hero-header">Hi! I'm Cibelle :)</h1>
        <p className="hero-text">
          {" "}
          I'm a Software Engineer naturally driven by challenges. I love
          building scalable, out of the box and accessible solutions.
          Experienced with both Front and Back End technologies and constantly
          seeking out new ways to grow as an Engineer.
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
