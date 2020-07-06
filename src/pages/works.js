import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import shelfie from "../pages/assets/book.png";
import wx from "../pages/assets/wx.png";
import pleasantly from "../pages/assets/pleasantly.svg";
import ck from "../pages/assets/ck.png";
import plantare from "../pages/assets/plantare.png";

function WorksPage() {
  const projects = [
    {
      id: 1,
      image: shelfie,
      description: "#react #mongodb #node #google-books-api #REST-apis #JSON",
      github: "https://github.com/cibellem/react-bookSearch",
      liveApp: "https://react-book-shelfie.herokuapp.com/",
      title: "Shelfie",
    },
    {
      id: 2,
      image: wx,
      description: "#react #node #open-weather-api ",
      github: "https://github.com/cibellem/react-wdashboard",
      liveApp: "https://shrouded-sea-44886.herokuapp.com/",
      title: "React Wx",
    },
    {
      id: 3,
      image: ck,
      description: "#jquery #mysqL #Sequelize #bootstrap #handlebars ",
      github: "https://github.com/cibellem/cleankitchen",
      liveApp: "https://ckitchenpos.herokuapp.com/",
      title: "Clean Kitchen",
    },
    // {
    //   id: 4,
    //   image: pleasantly,
    //   description: "#vanilla Js #HTML #CSS",
    //   github: "https://github.com/LLJirie/Pleasantly",
    //   liveApp: "https://lljirie.github.io/Pleasantly/",
    //   title: "Pleasantly",
    // },
    {
      id: 5,
      image: plantare,
      description: "#react #mongodb #nodejs #enzyme #jasmine #firebase ",
      github: "https://github.com/cibellem/plantare",
      liveApp: "https://plantare.herokuapp.com/",
      title: "Plantare",
    },
  ];

  return (
    <>
      <section class="diagonal" id="works">
        <Row className="text-center pb-4 pt-4">
          <Col>
            <h2 className="page-header ">Projects</h2>
          </Col>
        </Row>

        <Row className="row-projects  row-to-shrink  ">
          {projects.map((item) => (
            <Col md={6} sm={12} className="col-works  " key={item.id}>
              <img
                className="img-responsive project-img  "
                src={item.image}
                alt="Project Image"
              />
              <Row className="py-2">
                <Col>
                  <p className="hashtags">
                    <h5 className="">{item.title}</h5>
                    <h6> {item.description}</h6>

                    <div className="container">
                      <div className="row pt-2">
                        <div className="col">
                          <a id="gihub-link" href={item.github}>
                            {" "}
                            Source Code
                            <i class="pl-2  fal fa-angle-right"></i>
                          </a>
                          <a id="app-link" href={item.liveApp}>
                            Live App
                            <i class="pl-2   fal fa-angle-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </p>
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
      </section>
    </>
  );
}

export default WorksPage;