import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  NavItem,
  Card,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { Modal, Button, Collapse } from "react-bootstrap";
import { isAuthenticated, signout } from "../../auth/authHelper";
import Login from "./login";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import axios from "axios";
import { API_URL } from "../../config";
import { CardHeader } from "@material-ui/core";

function Blogs() {
  const [setLogin] = useState(false);
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [readMore,setReadMore]=useState(false);
  const linkName=readMore?'Read Less << ':'Read More >> '
  const [state, setState] = useState({
    name: "",
    username: "",
    title: "",
    exp: "",
    tags: "",
    state:"",
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
  function handleOnSave(e) {
    e.preventDefault();
    const data = {
      name: state.name,
      username: state.username,
      title: state.title,
      exp: state.exp,
      tags: state.tags,
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
      title: "",
      exp: "",
      tags: "",
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
              <h5>{blog.title}</h5>
              <Card.Text>{blog.exp}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      );
    });
  }
  function blogs2() {
    return state.blogs.map((blog) => {
      return (
        <Col md={12} className="blog-col2">
          <Card>
            <Card.Body>
              <Card.Title>{blog.name}</Card.Title>
              <h5>{blog.title}</h5>
              <Card.Text>{blog.exp}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      );
    });
  }
  const loginDetails = () => {
    if (isAuthenticated()) {
      return (
        <div className="link-color">
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
      <div className="top2 navbar-blog">
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
                <Link to="/" className="placed-blog link-color">
                  Home
                </Link>
              </Nav.Link>

              <NavDropdown
                title="Societies"
                id="basic-nav-dropdown"
                className="link-color"
              >
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
                  className="link-color"
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
        <Container className="blog-list">
          <Row className="blog-row">
            <Col md={6} className="blog-col">
              <Card>
                <Card.Body>
                  <Card.Title>Name</Card.Title>
                  <h5>Blog Title !!!</h5>
                  <Card.Text>
                    Content.............
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
              <Col md={6} className="blog-col">
              <Card>
                <Card.Body>
                  <Card.Title>Name</Card.Title>
                  <h5>Blog Title !!!</h5>
                  <Card.Text>
                    Content.............                   
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="blog-row">
            <Col md={6} className="blog-col">
              <Card>
                <Card.Body>
                  <Card.Title>Name</Card.Title>
                  <h5>Blog Title !!!</h5>
                  <Card.Text>
                    Content.............
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
              <Col md={6} className="blog-col">
              <Card>
                <Card.Body>
                  <Card.Title>Name</Card.Title>
                  <h5>Blog Title !!!</h5>
                  <Card.Text>
                    Content.............                   
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <h3
          className="blog-form-head"
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          Write Your Experience
        </h3>
        <h5 className="blog-form-head">
        Your small contributions can make someone learn easier and better
        </h5>
        <Collapse in={open}>
          <Container>
            <Row className="form-send">
              <Col>
                <form className="blog-form" action="mailto:meghagupta190801@gmail.com" method="post" enctype="text/plain">
                <Col md={6} className="blog-form-col">
                  <label>Title</label>
                  <input
                    className="title-blog"
                    name="title"
                    onChange={handleOnChange}
                    value={state.title}
                  ></input>
                  <label>Content</label>
                  <textarea
                    className="message"
                    placeholder="Type your content here"
                    name="exp"
                    rows="10"
                    columns="25"
                    onChange={handleOnChange}
                    value={state.exp}
                  ></textarea>
                  
                    <button className="blog-button" type="submit">
                      Send
                    </button>                  
                    </Col>
                    
                <Col md={6} className="blog-form-col">
                <label>Name</label>
                  <input
                    className="blog-name"
                    placeholder="Full name"
                    type="text"
                    name="name"
                    onChange={handleOnChange}
                    value={state.name}
                  ></input>
                  <label>Email Id</label>
                  <input
                    className="user"
                    placeholder="Official Email Id"
                    type="email"
                    name="username"
                    onChange={handleOnChange}
                    value={state.username}
                  />
                  <input className="tags" name="tags" type="text" value="" data-role="tagsinput" id="tags" class="form-control"
                  onChange={handleOnChange}
                  value={state.tags}/>
                  
                  </Col>
                  
                  
                </form>
                <div className="blog-button-div">
                    <button
                      className="blog-button"
                      type="submit"
                      onClick={handleOnSave}
                    >
                      Save
                    </button>
                    <button
                      className="blog-button"
                      onClick={handleShow}
                    >
                      Preview
                    </button>
                    <Modal
                      show={show}
                      onHide={handleClose}
                      size="lg"
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                      className="modal-blog"
                    >
                      <Modal.Header closeButton>
                      </Modal.Header>
                      <Modal.Body>
                        <Container className="blog-list">
                          <Row className="blog-row">{blogs2()}</Row>
                        </Container>
                      </Modal.Body>
                    </Modal>
                  </div>
              
              </Col>
              
              
            </Row>
            <Row>
              <Col>
                <Container className="blog-list">
                  <Row className="blog-row">{blogs()}</Row>
                </Container>
              </Col>
            </Row>
          </Container>
        </Collapse>
      </div>
      <div className="bottom">
        <Contact />
      </div>
    </div>
  );
}

export default Blogs;
