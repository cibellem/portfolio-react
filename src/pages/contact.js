import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ContactList from "../components/contact-list";
import ContactForm from "../components/contact-form";

function ContactPage() {
  return (
    <section className="  section-all">
      <Row id="contact" className="text-left  row-to-shrink  pb-4 ">
        <Col className="d-flex-row justify-around" md={6} xs={12}>
          <h2 className=" page-header pb-2">Reach out!</h2>{" "}
          <h6 className="contact-form-header mr-5">
            Interested in colaborating or believe I would be a good addition to
            your team? Drop me a message!
          </h6>
          <Row className="pb-4">
            <ContactList />
          </Row>
        </Col>
        <Col md={6} xs={12}>
          <ContactForm />
        </Col>
      </Row>
    </section>
  );
}

export default ContactPage;
