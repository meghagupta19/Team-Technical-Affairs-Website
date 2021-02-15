import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import Login from './login'
import { Link,BrowserRouter } from 'react-router-dom';
function Blogs() {
    return (
        <div>
            <div id="placements"></div>
            <div className="body">
            <div className="top">
               <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light" className="navbar">
                   <Navbar.Brand className="title" href="#home">Team Technical Affairs</Navbar.Brand>
                   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                   <Navbar.Collapse id="responsive-navbar-nav">
                   <Nav className="ml-auto nav-item">
                     <Nav.Link><BrowserRouter><Link to="/">Home</Link></BrowserRouter></Nav.Link>
                     <Nav.Link><Login/></Nav.Link>
                   </Nav> 
                   </Navbar.Collapse>   
               </Navbar>
            </div>
            </div>   
        </div>
    )
}

export default Blogs
