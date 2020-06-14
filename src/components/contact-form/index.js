import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import * as firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC52PAOtRTH6rW1ENR51KdSsSnKZTGqFGE",
  authDomain: "contact-form-portfolio-61dfa.firebaseapp.com",
  databaseURL: "https://contact-form-portfolio-61dfa.firebaseio.com",
  projectId: "contact-form-portfolio-61dfa",
  storageBucket: "contact-form-portfolio-61dfa.appspot.com",
  messagingSenderId: "808342677893",
  appId: "1:808342677893:web:8047798b7e9e93fb2e3cec",
  measurementId: "G-975E7P66D1",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
//Connection to my colletions with Firebase
const db = firestore.collection("contacts");
function ContactForm() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  function handleForm(e) {
    e.preventDefault();
    console.log(name, email, message);

    db.doc()
      .set({
        name,
        email,
        message,
      })
      .then(function () {
        console.log("worked");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <Form className="form" variant="outline-none">
      <Form.Group className="test">
        <Form.Control
          className="input-form"
          type="text"
          onChange={(e) => setName(e.target.value)}
          name="name"
          value={name}
          placeholder="Your name.."
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          className="input-form"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email.."
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          className="input-form"
          as="textarea"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
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
