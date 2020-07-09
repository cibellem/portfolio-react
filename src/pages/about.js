import React from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function AboutPage() {
  return (
    <>
      <section className="about-section section-all ">
        <Row id="about" className="text-center pt-3 pb-3  ">
          <Col className="">
            <h2 className="page-header ">About Me</h2>
          </Col>
        </Row>
        <Row className=" pb-3 row-to-shrink  ">
          <Col md={4} sm={12} className="">
            {" "}
            <p className="about-paragraph">
              Hi, and thanks for sticking around! You problably would like to
              know more about myself. I'm a Teacher that in 2018 decided to
              switch careers and become a Full Stack Web Developer. My path to
              tech started back in 2002 when I used be addicted to creating
              short cuts and command-lines for my mIRC .
            </p>
          </Col>
          <Col md={4} sm={12} className="">
            {" "}
            <p className="about-paragraph">
              In 2019 I finally made a move towards this passion and earned my
              Certificate from Uofa Coding Bootcamp where I gathered skills in
              both Front and Back End Technologies. The Teacher side of me made
              me an effective learner who's continually looking for ways to
              learn and I'm very much interested to add more skills to my list.
            </p>
          </Col>
          <Col md={4} sm={12} className="">
            {" "}
            <p className="about-paragraph">
              I’m proud to say I have always left a positive mark in my past
              workplaces due to my ability to build good relantionships with my
              coworkers. I'm known as a great team player. I'm brazilian and I
              love playing soccer.
            </p>
          </Col>
        </Row>
        {/* <hr /> */}
      </section>
    </>
  );
}

export default AboutPage;
