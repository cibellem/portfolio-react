import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Hero() {
  return (
    <Row id="home" className="row-shared row-to-shrink  ">
      <Col className="col-to-shrink" lg={6} md={6} xs={12}>
        {" "}
        <h1 className="hero-header">Welcome</h1>
        <p className="hero-text">
          {" "}
          This is my website and I love what I do! I’m a Full Stack Web
          Developer dedicated to building creative and user-friendly
          applications.
        </p>
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
