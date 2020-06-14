import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function ContactForm() {
  function handleForm(e) {
    e.preventDefault();
    console.log("hi");
  }
  return (
    <Form className="form" variant="outline-none">
      <Form.Group className="test">
        <Form.Control
          className="input-form"
          type="text"
          placeholder="Your name.."
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          className="input-form"
          type="email"
          placeholder="Your email.."
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          className="input-form"
          as="textarea"
          rows="8"
          placeholder="Your message.."
        />
      </Form.Group>
      <Form.Group>
        <Button type="button" className="submit-button" onClick={handleForm}>
          Send now
        </Button>
      </Form.Group>
    </Form>
  );
}
export default ContactForm;
