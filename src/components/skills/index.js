import React from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Skills() {
  const frontEnd = [
    {
      name: "HTML",
    },
    {
      name: "CSS",
    },
    {
      name: "SASS",
    },
    {
      name: "JavaScript",
    },
    {
      name: "jQuery",
    },
  ];

  let backEnd = [
    {
      name: "Mongo",
    },
    {
      name: "MySQL",
    },
    {
      name: "Firebase",
    },
    {
      name: "Node",
    },
    {
      name: "Express",
    },
  ];

  let design = [{ name: "Figma" }];
  return (
    <>
      <section className="diagonal-skills   section-all ">
        {/* <hr /> */}

        <Row id="about" className="text-center   ">
          <Col>
            <h2 id="page-header-skills">Skills</h2>
            <small></small>
          </Col>
        </Row>

        <Row className=" row-to-shrink skill-row ">
          <Col md={4} sm={12} className="skill-col">
            <p className="skill-paragraph">
              {" "}
              <i class="fas fa-code  pr-2"></i> Front End
            </p>
            {frontEnd.map((item) => (
              <ul className="list-group list-group-flush">
                <li className="list-group-item skill-list col-6">
                  {item.name}
                </li>
              </ul>
            ))}
          </Col>
          <Col md={4} sm={12} className="skill-col">
            <p className="skill-paragraph">
              {" "}
              <i class="fas fa-server  pr-2"></i> Back End
            </p>
            {backEnd.map((item) => (
              <ul className="list-group list-group-flush">
                <li className="list-group-item skill-list">{item.name}</li>
              </ul>
            ))}
          </Col>
          <Col md={4} sm={12} className="skill-col">
            {" "}
            <p className="skill-paragraph">
              {" "}
              <i class="fas fa-pencil-ruler pr-2"></i>Design
            </p>
            {design.map((item) => (
              <ul className="list-group list-group-flush">
                <li className="list-group-item skill-list">{item.name}</li>
              </ul>
            ))}
          </Col>
        </Row>
      </section>
    </>
  );
}

export default Skills;
