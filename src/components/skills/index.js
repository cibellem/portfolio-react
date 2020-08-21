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
  //diagonal-skills
  return (
    <>
      <div className="diagonal-skills section section-all">
        <Row id="skills" className="text-center pt-3 skill-header-row  ">
          <Col id="page-header-skills">Skills</Col>
        </Row>
        <Row className="text-center skill-header-row  ">
          <Col>
            <h5>Tools I'm proficient with:</h5>{" "}
          </Col>
        </Row>

        <Row className=" text-center  row-to-shrink skill-row ">
          {frontEnd.map((item) => (
            <Col md={2} className="skill-col   ">
              <img src={item.img} alt="" className="img-responsive" />
              <p> {item.name}</p>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default Skills;
