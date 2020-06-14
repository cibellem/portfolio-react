import React from "react";

import ListGroup from "react-bootstrap/ListGroup";

function ContactList() {
  return (
    <ListGroup className="border-0 contact-list" variant="flush">
      <ListGroup.Item className="border-0">
        <i class="fas fa-at"></i>
        montorcibelle@gmail.com
      </ListGroup.Item>
      <ListGroup.Item className="border-0">
        {" "}
        <i class="fas fa-phone-alt"></i>
        (619) 643-5029
      </ListGroup.Item>
      <ListGroup.Item className="border-0">
        <i class="fas fa-globe"></i>
        Phoenix, AZ
      </ListGroup.Item>
    </ListGroup>
  );
}

export default ContactList;
