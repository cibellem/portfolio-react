import React from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function AboutPage() {
  return (
    <>
      <section className="about-section section-all ">
        <Row id="about" className="text-center  row-to-shrink  pb-4 ">
          <Col className="">
            <h2 className="page-header text-white">About Me</h2>
          </Col>
        </Row>
        <Row className="row-to-shrink   ">
          <Col md={4} sm={12} className="">
            {" "}
            <p className="about-paragraph">
              Hey there, thanks for sticking around! I'm Cibelle and I’m a
              certified Full Stack Web Developer who decided to make her
              addiction of creating short cuts and command-lines for my mIRC
              into a profession.
            </p>
          </Col>
          <Col md={4} sm={12} className="">
            {" "}
            <p className="about-paragraph">
              I'm an effective learner who's continually looking for ways to
              grow both professionally and as a person. I'm commited to become
              the best version of myself every day. I love being exposed to
              different things and learning keeps me motivated. I'm currently
              proficient in the MERN Stack and very much interested to add more
              skills to my list.
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
