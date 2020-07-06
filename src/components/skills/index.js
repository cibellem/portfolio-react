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
      {/* <hr /> */}
      <div className="diagonal-skills section section-all">
        <Row id="skills" className="text-center pt-3 skill-header-row  ">
          <Col id="page-header-skills">Skills</Col>
        </Row>
        <div>
          <Row className=" text-center row-to-shrink skill-row ">
            <Col md={4} className="skill-col ">
              <h6 className="skill-paragraph">
                {" "}
                Front End <i class="fas fa-code pl-2"></i>
              </h6>
              <p></p>
              {frontEnd.map((item) => (
                <ul className="list-group list-group-flush">
                  <li className="list-group-item skill-list">
                    <i class="far fa-window-minimize pr-1"></i> {item.name}
                  </li>
                </ul>
              ))}
            </Col>
            <Col md={4} className="skill-col">
              <h6 className="skill-paragraph">
                {" "}
                Back End <i class="fas fa-server  pl-2"></i>
              </h6>

              {backEnd.map((item) => (
                <ul className="list-group list-group-flush">
                  <li className="list-group-item skill-list">
                    {" "}
                    <i class="far fa-window-minimize pr-1"></i> {item.name}
                  </li>
                </ul>
              ))}
            </Col>
            <Col md={4} className="skill-col">
              {" "}
              <h6 className="skill-paragraph">
                {" "}
                Design <i class="fas fa-pencil-ruler pr-2"></i>
              </h6>
              {design.map((item) => (
                <ul className="list-group list-group-flush">
                  <li className="list-group-item skill-list">
                    {" "}
                    <i class="far fa-window-minimize pr-1"></i>
                    {item.name}
                  </li>
                </ul>
              ))}
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Skills;
