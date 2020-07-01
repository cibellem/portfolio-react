import React from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Skills() {
  const techs = [
    {
      name: "React",
      stars: <i class="far fa-star"></i>,
    },
  ];
  return (
    <>
      <section className="diagonal-skills ">
        <hr />

        <Row id="about" className="text-center   py-5">
          <Col>
            <h2 id="page-header-skills">skills</h2>
            <small></small>
          </Col>
        </Row>
        <Row className="row-to-shrink ">
          <Col md={4} sm={12}>
            <p className="about-paragraph">Front End</p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>SASS</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </Col>
          <Col md={4} sm={12}>
            {" "}
            <p className="about-paragraph">Back End</p>
            <ul>
              <li>Mongo</li>
              <li>MySQL</li>
              <li>Express</li>
              <li>Firebase</li>
              <li>Node</li>
            </ul>
          </Col>
          <Col md={4} sm={12}>
            {" "}
            <p className="about-paragraph">Design</p>
            <ul>
              <li>Figma</li>
              <li>Responsive Design</li>
            </ul>
          </Col>
        </Row>
      </section>
    </>
  );
}

export default Skills;
