import React from "react";
import { Navbar, Nav,NavDropdown, Row, Col, Container } from "react-bootstrap";
import Login from "./login";
import Home from "./Home";
import {
  Link,
  BrowserRouter,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { FaFacebook, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

import ReactDOM from "react-dom";
ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/home" component={Home} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
function Blogs() {
  return (
      <div className="body">
        <div className="top">
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="transparent"
          variant="light"
          className="navbar"
        >
          <Navbar.Brand className="title" href="#home">
            Team Technical Affairs
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto nav-item">
              
              
              <Nav.Link>
                <BrowserRouter>
                  <Link to="/home" className="placed-blog">
                    Home
                  </Link>
                </BrowserRouter>
              </Nav.Link>
              
              <NavDropdown title="Societies" id="basic-nav-dropdown">
                <NavDropdown.Item href="https://www.nitj.ac.in/mechanical/teams/some_society.html">
                  Some
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Opengeest
                </NavDropdown.Item>
                <NavDropdown.Item href="https://www.nitj.ac.in/ice/spice/index.html#Events">
                  SPice
                </NavDropdown.Item>
                <NavDropdown.Item href="https://www.nitj.ac.in/ece/">
                  SoEce
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Ties</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">CHess</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Soccer</NavDropdown.Item>
                <NavDropdown.Item href="https://www.nitj.ac.in/biotech/SOBER.html">
                  Sober
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Tex Styles
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">IT</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">EE</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <a
                  href="/"
                  onClick={(e) => {
                    let hero = document.getElementById("contact");
                    e.preventDefault(); 
                    hero && hero.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Contact
                </a>
              </Nav.Link>
              <Nav.Link>
                <Login />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        </div>
        <div className="bottom">
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
                  OUR ADDRESS OFFICE (USA) P.O. Box 10641 Pleasanton Calfornia
                  9488 United State
                </p>
                <p>
                  OFFICE (INDIA) Pheruman Road Amritsar -143112 Punjab (India)
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
  );
}

export default Blogs;
