import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { FaFacebook, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
function Contact() {
  return (
    <div>
      <Container>
        <Row>
          <Col md={4}>
            <div className="title-end">Team Technical Affairs</div>
          </Col>
          <Col md={4}>
            <h4>Follow Us On</h4>
            <a href="https://www.facebook.com/">
              <FaFacebook />
            </a>
            <a href="https://www.linkedin.com/">
              <FaLinkedin />
            </a>
            <a href="https://www.twitter.com/">
              <FaTwitter />
            </a>
            <a href="https://www.gmail.com/">
              <FaEnvelope />
            </a>
          </Col>
          <Col md={4}>
            <div id="contact"></div>
            <h4>Contact Info</h4>
            <p>
              OUR ADDRESS OFFICE (USA) P.O. Box 10641 Pleasanton Calfornia 9488
              United State
            </p>
            <p>OFFICE (INDIA) Pheruman Road Amritsar -143112 Punjab (India)</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
