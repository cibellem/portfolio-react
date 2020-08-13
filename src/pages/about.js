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
            <h5 className="statement">
              Delivering quality applications through continuous iteration and
              collaboration.
            </h5>
          </Col>
        </Row>
        <Row className=" pb-3 row-to-shrink  ">
          <Col md={6} sm={12} className="pr-4">
            {" "}
            <p className="about-paragraph">
              Hey there, thanks for sticking around! I'm Cibelle and I'm a Full
              Stack Javascript Developer who decided to make her addiction of
              creating short cuts and command-lines for my
              <a href="https://www.mirc.com/"> mIRC</a> into a profession. I'm a
              former teacher who loves being exposed to different concepts,
              cultures and people and I found in tech a place with endless
              oportunities to pursue that.
            </p>
          </Col>
          <Col md={6} sm={12} className="pl-4">
            {" "}
            <p className="about-paragraph">
              I'm an effective learner who's continually looking for ways to
              grow both professionally and as a person. In each and every
              project I put my heart on it and my top priority is delivering a
              final product that goes above and beyond my customer's
              expectations. I'm currently proficient in the MERN Stack and very
              much interested to add more skills to my list.
            </p>
          </Col>
        </Row>
        <Row className=" pb-3 row-to-shrink  ">
          <Col md={12} sm={12}>
            <p className="about-paragraph">
              I’m proud to say I have always left a positive mark in my past
              workplaces due to my ability work colaboratively and to build good
              relationships with my coworkers. I'm always been known as a great
              team player. I'm a proud Brazilian and I have been living in the
              United States since 2015. When not coding I love to garden and
              play soccer. &#x1F60E;
            </p>
          </Col>
        </Row>
        {/* <hr /> */}
      </section>
    </>
  );
}

export default AboutPage;
