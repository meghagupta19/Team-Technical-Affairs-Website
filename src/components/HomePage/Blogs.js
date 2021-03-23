import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  ListGroup,
  NavItem,
  ListGroupItem,
  Card,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { isAuthenticated, signout } from "../../auth/authHelper";
import Login from "./login";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import axios from "axios";
import { API_URL } from "../../config";

function Blogs() {
  const [setLogin] = useState(false);
  const [state, setState] = useState({
    name: "",
    username: "",
    exp: "",
    blogs: [],
  });
  useEffect(() => {
    axios.get(API_URL + "blog").then((data) => {
      data = data.data;
      blogs = data.blogs;
      setState({ blogs: [...state.blogs, ...blogs] });
    });
  }, []);

  function handleOnChange(e) {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  }
  function handleOnSubmit(e) {
    e.preventDefault();
    const data = {
      name: state.name,
      username: state.username,
      exp: state.exp,
    };

    axios
      .post(API_URL + "blog", data)
      .then((res) => {})
      .catch((err) => {
        console.log(data);
        console.log(err);
      });
    setState({
      name: "",
      username: "",
      exp: "",
      blogs: [...state.blogs, data],
    });
  }
  function blogs() {
    return state.blogs.map((blog) => {
      return (
        <Col md={12} className="blog-col">
          <Card>
            <Card.Body>
              <Card.Title>{blog.name}</Card.Title>
              <Card.Text>{blog.exp}</Card.Text>
            </Card.Body>
          </Card>
          <hr></hr>
        </Col>
      );
    });
  }
  const loginDetails = () => {
    if (isAuthenticated()) {
      return (
        <div>
          <NavItem>Welcome {localStorage.getItem("name")}!</NavItem>
          <Nav.Link
            onClick={() => {
              signout();
              setLogin(true);
            }}
          >
            Logout
          </Nav.Link>
        </div>
      );
    } else
      return (
        <Nav.Link>
          <Login />
        </Nav.Link>
      );
  };
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
            <Nav className="ml-auto nav-item nav-blog">
              <Nav.Link>
                <Link to="/" className="placed-blog">
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
              <Nav.Link>{loginDetails()}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className="placements">
        <Container>
          <Row>
            <Col md={8}>
              <Container className="blog-list">
                <Row className="blog-row">{blogs()}</Row>
              </Container>
            </Col>
            <Col md={4}></Col>
          </Row>
          <Row>
            <form className="blog-form">
              <h3>Share Your Experience</h3>
              <input
                className="blog-name"
                placeholder="Name"
                type="text"
                name="name"
                onChange={handleOnChange}
                value={state.name}
              ></input>
              <input
                className="user"
                placeholder="Email Id"
                type="email"
                name="username"
                onChange={handleOnChange}
                value={state.username}
              />

              <textarea
                className="message"
                placeholder="Type a message here"
                name="exp"
                rows="5"
                columns="15"
                onChange={handleOnChange}
                value={state.exp}
              ></textarea>
              <button
                className="blog-button"
                type="submit"
                onClick={handleOnSubmit}
              >
                Send
              </button>
            </form>
          </Row>
        </Container>
      </div>
      <div className="bottom">
        <Contact />
      </div>
    </div>
  );
}

export default Blogs;
