import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import shelfie from "../pages/assets/shelfie.svg";
import wx from "../pages/assets/wx.svg";
import pleasantly from "../pages/assets/pleasantly.svg";
import ck from "../pages/assets/ck.svg";
import ws from "../pages/assets/ws.svg";
import { Link } from "react-router-dom";

function WorksPage() {
  const projects = [
    {
      id: 1,
      image: shelfie,
      description: "#react #mongodb #node #google-books-api #REST-apis",
      github: "https://github.com/cibellem/react-bookSearch",
      liveApp: "https://react-book-shelfie.herokuapp.com/",
    },
    {
      id: 2,
      image: wx,
      description: "#react #node #open-weather-api ",
      github: "https://github.com/cibellem/react-wdashboard",
      liveApp: "https://shrouded-sea-44886.herokuapp.com/",
    },
    {
      id: 3,
      image: ck,
      description: "#jquery #mysqL #Sequelize #bootstrap #handlebars ",
      github: "https://github.com/cibellem/cleankitchen",
      liveApp: "https://ckitchenpos.herokuapp.com/",
    },
    {
      id: 4,
      image: pleasantly,
      description: "#vanilla Js #HTML #CSS",
      github: "https://github.com/LLJirie/Pleasantly",
      liveApp: "https://lljirie.github.io/Pleasantly/",
    },
    {
      id: 5,
      image: ws,
      description: "#react #mongodb #node #aws-amplify",
      github: "https://github.com/verlitas/WebSpace",
      liveApp: "https://thewebspace.herokuapp.com/",
    },
  ];

  return (
    <>
      <section class="diagonal" id="works">
        <Row className="text-center  py-4 ">
          <Col>
            <h2 className="page-header ">Projects</h2>
          </Col>
        </Row>

        <Row className="row-projects  row-to-shrink  ">
          {projects.map((item) => (
            <Col md={6} sm={12} className=" " key={item.id}>
              <img
                className="img-responsive project-img "
                src={item.image}
                alt="Project Image"
              />
              <Row>
                <Col>
                  <p className="hashtags">
                    {item.description}{" "}
                    <div className="container">
                      <div className="row mt-2">
                        <div className="col">
                          <a id="gihub-link" href={item.github}>
                            {" "}
                            github
                          </a>
                          <a id="app-link" href={item.liveApp}>
                            app
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

      {/* <hr /> */}
    </>
  );
}

export default WorksPage;
