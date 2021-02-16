import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Login from "./login";
import { Link } from "react-router-dom";
import Contact from "./Contact";
function Blogs() {
  return (
    <div className="body2">
      <div className="top2">
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
                <Link to="/home" className="placed-blog">
                  Home
                </Link>
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
      <div className="placements">
        <form action="/blog" method="post">
          <input type="email" name="username" />
          <textarea name="exp" rows="5" columns="15"></textarea>
          <button type="submit">Add</button>
        </form>
      </div>
      <div className="bottom">
        <Contact />
      </div>
    </div>
  );
}

export default Blogs;
