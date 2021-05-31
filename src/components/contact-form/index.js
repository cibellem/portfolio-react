import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import * as firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "contact-form-portfolio-61dfa.firebaseapp.com",
  databaseURL: process.env.REACT_APP_DB_URL,
  projectId: "contact-form-portfolio-61dfa",
  storageBucket: "contact-form-portfolio-61dfa.appspot.com",
  messagingSenderId: process.env.REACT_APP_MSG_SENDER_ID,
  appId: process.env.REACT_APP_API_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
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
  const [error, setError] = useState();

  function handleForm(e) {
    e.preventDefault();

    if (!name || !email || !message) {
      setError("I need a little bit more of info");
    } else {
      db.doc()
        .set({
          name,
          email,
          message,
          created: new Date(),
        })
        .then(function () {
          setError("Msg sent!I will get back to you soon");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
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
        <p className="error-msg"> {error}</p>
      </Form.Group>
      <Form.Group>
        <Button type="button" className="submit-button" onClick={handleForm}>
          Send
        </Button>
      </Form.Group>
    </Form>
  );
}
export default ContactForm;
