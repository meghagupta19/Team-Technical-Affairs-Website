import React from 'react'
import {Navbar,Nav} from 'react-bootstrap';
import './Home.css';
import News from './News'
import Container from 'react-bootstrap/Container'
import Events from './Events'
import Events2 from './Events2' 
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import News2 from './News2'
import AboutUs from './AboutUs'
import Figure from 'react-bootstrap/Figure'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  offset: 200,
  duration: 500,
  easing: 'ease-in-quad',
});

function Home() {
    return (
        <div className="body">
            <div className="top">
               <Navbar bg="transparent" variant="light" className="navbar">
                   <Navbar.Brand className="title" href="#home">Team Technical Affairs</Navbar.Brand>
                   <Nav className="ml-auto nav-item">
                     <Nav.Link href="#home">Administration</Nav.Link>
                     <Nav.Link href="#features">Events</Nav.Link>
                     <Nav.Link href="#pricing">Placements</Nav.Link>
                     <Nav.Link href="#pricing">Blogs</Nav.Link>
                     <Nav.Link href="#pricing">Contact</Nav.Link>
                   </Nav>    
               </Navbar>
               
               <Container fluid >
                   <Row>
                       <Col md={4} className="news-col"><News/></Col>                                              
                       <Col md={{ span: 6, offset: 1 }}><div className="Top-Image"><News2/></div></Col>
                   </Row>
               </Container>              

            </div>
            <div className="medium">
               <Container fluid >
                   <Row className="medium-row1" data-aos="zoom-in-up" data-aos-delay="200"><AboutUs/></Row>
                   <Row className="medium-row2" data-aos="zoom-in-up" data-aos-delay="100">
                       <Col md={5}><Events/></Col>                                              
                       <Col md={7}><Events2/></Col>
                   </Row>

                   <h1>Administration</h1>
                   <hr></hr>
                   <Row className="center-image">
                    <Figure>
                        <Figure.Image className="image-shape" width={171} height={180} alt="171x180" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMGl0jtJ3dE4ABUUqHeqiLBzCkXDui91ZLlQ&usqp=CAU"/>
                        <Figure.Caption>
                         Dr. LK Awasthi<br/>Director
                        </Figure.Caption>
                    </Figure>
                   </Row>
                   <Row className="center-image">
                       <Col md={6}>
                           <Figure>
                               <Figure.Image className="image-shape" width={171} height={180} alt="171x180" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMGl0jtJ3dE4ABUUqHeqiLBzCkXDui91ZLlQ&usqp=CAU"/>
                               <Figure.Caption>
                               Dr. Anish Sachdeva<br/>Dean Students Welfare
                                </Figure.Caption>
                           </Figure>
                       </Col>
                       <Col md={6}>
                            <Figure>
                               <Figure.Image className="image-shape" width={171} height={180} alt="171x180" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMGl0jtJ3dE4ABUUqHeqiLBzCkXDui91ZLlQ&usqp=CAU"/>
                               <Figure.Caption>
                               Dr. LK Awasthi<br/>Associate Dean Students Welfare
                                </Figure.Caption>
                           </Figure>
                       </Col>
                   </Row>
                   <Row className="center-image">
                       <Col md={6}>
                           <Figure>
                               <Figure.Image className="image-shape" width={171} height={180} alt="171x180" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMGl0jtJ3dE4ABUUqHeqiLBzCkXDui91ZLlQ&usqp=CAU"/>
                               <Figure.Caption>
                               Dr. Anish Sachdeva<br/>Dean Students Welfare
                                </Figure.Caption>
                           </Figure>
                       </Col>
                       <Col md={6}>
                            <Figure>
                               <Figure.Image className="image-shape" width={171} height={180} alt="171x180" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMGl0jtJ3dE4ABUUqHeqiLBzCkXDui91ZLlQ&usqp=CAU"/>
                               <Figure.Caption>
                               Dr. LK Awasthi<br/>Associate Dean Students Welfare
                                </Figure.Caption>
                           </Figure>
                       </Col>
                   </Row>
               </Container>
            </div>
            <div className="bottom">
                <Container>
                    <Row>
                        <Col md={4}><div className="title-end">Team Technical Affairs</div></Col>
                        <Col md={4}>
                            <h4>Follow Us On</h4>
                            <a href="https://www.facebook.com/"></a>
                            <a href="https://www.linkedin.com/"></a>
                            <a href="https://www.twitter.com/"></a>
                            <a href="https://www.gmail.com/"></a>
                        </Col>
                        <Col md={4}>
                            <h4>Contact Info</h4>
                            <p>OUR ADDRESS OFFICE (USA) P.O. Box 10641 Pleasanton Calfornia 9488 United State</p> 
                            <p>OFFICE (INDIA) Pheruman Road Amritsar -143112 Punjab (India)</p>                           
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Home
