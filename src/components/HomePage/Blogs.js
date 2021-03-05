import React, { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Login from "./login";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import axios from "axios"
import {API_URL} from "../../config"

function Blogs() {
  
  const [state, setState] = useState({
    "username": "",
    "exp":""
  })
  function handleOnChange(e){
    const {name,value} = e.target
    setState({...state, [name]:value})
    
  }
  function handleOnSubmit(e){
    e.preventDefault();
    const data ={
      "username": state.username,
      "exp": state.exp
    }
    const access_token = localStorage.getItem("jwt")
   
   axios.post(API_URL+"blog",data,{ headers: {"Authorization" : "Bearer "+ access_token}}).then((res)=>{
      console.log("response recorded");
    }).catch((err)=>{
      console.log(data)
      console.log(err)
    })
    setState({
      "username": "",
    "exp":""
    })
  }
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
        <form >
          <input type="email" name="username" onChange={handleOnChange} value={state.username}/>
          <textarea name="exp" rows="5" columns="15"  onChange={handleOnChange} value={state.exp} ></textarea>
          <button type="submit" onClick={handleOnSubmit}>Add</button>
        </form>
      </div>
      <div className="bottom">
        <Contact />
      </div>
    </div>
  );
}

export default Blogs;
