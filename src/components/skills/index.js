import React from "react";

//Bootstrap
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

//Assets
import react from "./assets/1.png";
import css from "./assets/2.png";
import html from "./assets/3.png";
import js from "./assets/5.png";
import redux from "./assets/redux.svg";
import git from "./assets/8.png";
import firebase from "./assets/9.png";
import graphql from "./assets/graphql.svg";
import bootstrap from "./assets/7.png";
import node from "./assets/11.png";
import mongo from "./assets/12.png";
import sass from "./assets/13.png";
import mysql from "./assets/10.png";
import amplify from "./assets/amplify.svg";

function Skills() {
  const tools = [
    {
      name: "HTML",
      img: html,
    },
    {
      name: "CSS",
      img: css,
    },
    {
      name: "Sass",
      img: sass,
    },

    {
      name: "JavaScript",
      img: js,
    },
    {
      name: "React",
      img: react,
    },
    {
      name: "Redux",
      img: redux,
    },
    {
      name: "GraphQL",
      img: graphql,
    },
    {
      name: "Amplify",
      img: amplify,
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
    // {
    //   name: "Bootstrap",
    //   img: bootstrap,
    // },
    {
      name: "Node",
      img: node,
    },
  ];

  //diagonal-skills
  return (
    <>
      <div className="section section-all">
        <Row id="skills" className="text-center pt-3 skill-header-row  ">
          <Col id="page-header-skills">Skills</Col>
        </Row>
        <Row className="text-center skill-header-row  ">
          <Col>
            <h5>Tools I'm proficient with:</h5>{" "}
          </Col>
        </Row>

        <Row className=" text-center  row-to-shrink skill-row ">
          {tools.map((item) => (
            <Col className="skill-col   ">
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
