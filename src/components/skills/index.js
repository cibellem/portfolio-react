import React from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import react from "./assets/1.png";
import css from "./assets/2.png";
import html from "./assets/3.png";
import js from "./assets/5.png";
import jquery from "./assets/6.png";
import git from "./assets/8.png";
import firebase from "./assets/9.png";
import figma from "./assets/4.png";
import bootstrap from "./assets/7.png";
import node from "./assets/11.png";
import mongo from "./assets/12.png";
import sass from "./assets/13.png";
import mysql from "./assets/10.png";

function Skills() {
  const frontEnd = [
    {
      name: "HTML",
      img: html,
    },
    {
      name: "CSS",
      img: css,
    },
    {
      name: "SASS",
      img: sass,
    },
    {
      name: "Bootstrap",
      img: bootstrap,
    },
    {
      name: "JavaScript",
      img: js,
    },
    {
      name: "Figma",
      img: figma,
    },
    {
      name: "jQuery",
      img: jquery,
    },
    {
      name: "React",
      img: react,
    },
    {
      name: "MongoDB",
      img: mongo,
    },
    {
      name: "MySQL",
      img: mysql,
    },

    {
      name: "Firebase",
      img: firebase,
    },
    {
      name: "Node",
      img: node,
    },
  ];

  // let backEnd = [
  //   {
  //     name: "Mongo",
  //   },
  //   {
  //     name: "MySQL",
  //   },
  //   {
  //     name: "Firebase",
  //   },
  //   {
  //     name: "Node",
  //   },
  //   {
  //     name: "Express",
  //   },
  // ];

  // let design = [{ name: "Figma" }, { name: "Git" }, { name: "Postman" }];
  return (
    <>
      {/* <hr /> */}
      <div className="diagonal-skills section section-all">
        <Row id="skills" className="text-center pt-3 skill-header-row  ">
          <Col id="page-header-skills">Skills</Col>
        </Row>

        <Row className=" text-center  row-to-shrink skill-row ">
          {frontEnd.map((item) => (
            <Col md={2} className="skill-col   ">
              <img src={item.img} alt="" className="img-responsive" />
              <p> {item.name}</p>
            </Col>
          ))}
          {/* <Col md={4} className="skill-col">
              <h6 className="skill-paragraph">
                {" "}
                Back End <i class="fas fa-server  pl-2"></i>
              </h6>

              {backEnd.map((item) => (
                <ul className="list-group list-group-flush">
                  <li className="list-group-item skill-list">
                    {" "}
                    <i class="fas fa-circle pr-1"></i> {item.name}
                  </li>
                </ul>
              ))}
            </Col>
            <Col md={4} className="skill-col">
              {" "}
              <h6 className="skill-paragraph">
                {" "}
                Other Techs <i class="fas fa-pencil-ruler pr-2"></i>
              </h6>
              {design.map((item) => (
                <ul className="list-group list-group-flush">
                  <li className="list-group-item skill-list">
                    {" "}
                    <i class="fas fa-circle pr-1"></i>
                    {item.name}
                  </li>
                </ul>
              ))}
            </Col> */}
        </Row>
      </div>
    </>
  );
}

export default Skills;
