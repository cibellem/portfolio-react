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
              Hi, and thanks for sticking around! You probably would like to
              know more about me... I was a teacher in 2018 when I decided to
              switch careers and study to become a Full Stack Web Developer. My
              path to tech really started back in 2002 when I used be addicted
              to creating short cuts and command-lines for my mIRC .
            </p>
          </Col>
          <Col md={4} sm={12} className="">
            {" "}
            <p className="about-paragraph">
              In 2019, I earned my Full Stack - Web Developer Certificate from
              the University of Arizona Coding Bootcamp. There I honed my skills
              in both Front and Back End technologies. I've always had a thirst
              to learn new things and the coding bootcamp started me on a new
              path to do exactly that - I am still constantly learning and
              working to add to my skillset.
            </p>
          </Col>
          <Col md={4} sm={12} className="">
            {" "}
            <p className="about-paragraph">
              I’m proud to say I have always left a positive mark in my past
              workplaces due to my ability to build good relationships with my
              coworkers. I'm always been known as a great team player. I'm
              originally from Brazil and have been living in the United States
              since 2015. When not coding I love to garden and play soccer.
            </p>
          </Col>
        </Row>
        {/* <hr /> */}
      </section>
    </>
  );
}

export default AboutPage;
