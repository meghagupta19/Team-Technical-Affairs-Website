import React from "react";
import Login from "./login";
import { Link,Redirect } from "react-router-dom";
import { useState } from "react";
import { Navbar, Nav, NavItem,NavDropdown } from "react-bootstrap";
import { isAuthenticated,signout } from "../../auth/authHelper"
function Navigation() {
  const [loginSuccess,setLogin] = useState(false)
  const loginDetails = ()=>{
   if (isAuthenticated()){
     return <div><NavItem>
       Welcome {localStorage.getItem("name")}!
     </NavItem>
     <Nav.Link onClick ={()=>{
       signout()
        setLogin(true)
     }}>
       Logout
     </Nav.Link>
     </div>
   }
   else 
   return <Nav.Link>
   <Login />
 </Nav.Link>
  }
  return (
    <div>
      <Navbar //Navigation Bar
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
              <a
                href="/"
                onClick={(e) => {
                  let hero = document.getElementById("administration");
                  e.preventDefault();
                  hero && hero.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Administration
              </a>
            </Nav.Link>
            <Nav.Link>
              <a
                href="/"
                onClick={(e) => {
                  let hero = document.getElementById("events");
                  e.preventDefault();
                  hero && hero.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Events
              </a>
            </Nav.Link>
            <Nav.Link>
              <Link to="/blogs" className="placed-blog">
                Placements
              </Link>
            </Nav.Link>
            <Nav.Link>
              <a
                href="/"
                onClick={(e) => {
                  let hero = document.getElementById("tech-team");
                  e.preventDefault();
                  hero && hero.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Tech Team
              </a>
            </Nav.Link>
            <NavDropdown title="Societies" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://www.nitj.ac.in/mechanical/teams/some_society.html">
                Some
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Opengeest</NavDropdown.Item>
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
              <NavDropdown.Item href="#action/3.4">Tex Styles</NavDropdown.Item>
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
            {loginDetails()}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
