import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ContactList from "../components/contact-list";
import ContactForm from "../components/contact-form";

function ContactPage() {
  return (
    <Row id="contact" className="text-left py-5  row-to-shrink  ">
      <Col className="d-flex-row justify-around" md={6} xs={12}>
        <h2 className=" page-header">reach out!</h2>
        <Row>
          <ContactList />
        </Row>
      </Col>
      <Col md={6} xs={12}>
        <h6 className="contact-form-header">
          Interested in colaborating or believe I would be a good addition to
          your team? Drop me a message!
        </h6>
        <ContactForm />
      </Col>
    </Row>
  );
}

export default ContactPage;
