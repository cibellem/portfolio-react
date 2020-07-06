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
          I'm Cibelle, Full Stack Web Developer based in Phoenix-Arizona.
        </p>
        <p className="hero-text">
          {" "}
          I love what I do and I'm glad you stopped by! I'm dedicated to
          building creative, clean and user-friendly solutions.
        </p>
        {/* <button className="button hero-button">Projects</button> */}
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
