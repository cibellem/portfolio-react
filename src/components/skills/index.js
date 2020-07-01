import React from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Skills() {
  return (
    <>
      <section className="diagonal-skills">
        <Row id="about" className="text-center   py-5">
          <Col>
            <h2 className="page-header">skills</h2>
            <small></small>
          </Col>
        </Row>
        <Row className="row-to-shrink ">
          <Col md={4} sm={12}>
            {" "}
            <p className="about-paragraph">Front End</p>
          </Col>
          <Col md={4} sm={12}>
            {" "}
            <p className="about-paragraph">Back End</p>
          </Col>
          <Col md={4} sm={12}>
            {" "}
            <p className="about-paragraph">Design</p>
          </Col>
        </Row>
      </section>
      <hr />
    </>
  );
}

export default Skills;
