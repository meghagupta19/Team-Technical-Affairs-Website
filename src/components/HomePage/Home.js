import React from "react";
import "./Home.css";
import News from "./News";
import Events from "./Events";
import Events2 from "./Events2";
import { Row, Col, Container, Figure } from "react-bootstrap";
import News2 from "./News2";
import AboutUs from "./AboutUs";
import Team from "./Team";
import AOS from "aos";
import "aos/dist/aos.css";
import Navigation from "./Navigation";
import Contact from "./Contact";
AOS.init({
  offset: 200,
  duration: 500,
  easing: "ease-in-quad",
});

function Home() {
  return (
    <div className="body">
      <div className="top">
        <Navigation />
        <Container fluid>
          <Row>
            <Col md={4} className="news-col">
              <News />
            </Col>
            <Col md={{ span: 6, offset: 1 }}>
              <div className="Top-Image">
                <News2 />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="medium">
        <Container fluid className="medium-container">
          <Row
            className="medium-row1"
            data-aos="zoom-in-up"
            data-aos-delay="100"
          >
            <AboutUs />
          </Row>
          <div id="events"></div>
          <Row
            className="medium-row2"
            data-aos="zoom-in-up"
            data-aos-delay="100"
          >
            <Col md={5}>
              <Events />
            </Col>
            <Col md={7}>
              <Events2 />
            </Col>
          </Row>
          <div id="tech-team"></div>
          <Row className="tech-team">
            <h1>Tech Team</h1>
          </Row>
          <Row>
            <Team />
          </Row>
          <div id="administration"></div>
          <Row className="admin">
            <h1>Administration</h1>
          </Row>
          <hr></hr>
          <Row className="center-image">
            <Figure>
              <Figure.Image
                className="image-shape"
                alt="171x180"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMGl0jtJ3dE4ABUUqHeqiLBzCkXDui91ZLlQ&usqp=CAU"
              />
              <Figure.Caption>
                Dr. LK Awasthi
                <br />
                <h3>Director</h3>
              </Figure.Caption>
            </Figure>
          </Row>
          <Row className="center-image">
            <Col md={6}>
              <Figure>
                <Figure.Image
                  className="image-shape"
                  alt="171x180"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMGl0jtJ3dE4ABUUqHeqiLBzCkXDui91ZLlQ&usqp=CAU"
                />
                <Figure.Caption>
                  Dr. Anish Sachdeva
                  <br />
                  <h3>Dean Students Welfare</h3>
                </Figure.Caption>
              </Figure>
            </Col>
            <Col md={6}>
              <Figure>
                <Figure.Image
                  className="image-shape"
                  alt="171x180"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMGl0jtJ3dE4ABUUqHeqiLBzCkXDui91ZLlQ&usqp=CAU"
                />
                <Figure.Caption>
                  Dr. LK Awasthi
                  <br />
                  <h3>Associate Dean Students Welfare</h3>
                </Figure.Caption>
              </Figure>
            </Col>
          </Row>
          <Row className="center-image">
            <Col md={6}>
              <Figure>
                <Figure.Image
                  className="image-shape"
                  alt="171x180"
                  src="https://www.nitj.ac.in/hacknitj/Resources/img/dr_mamta_khosla.jpg"
                />
                <Figure.Caption>
                  DR. MAMTA KHOSLA
                  <br />
                  <h3>Coordinator</h3>
                </Figure.Caption>
              </Figure>
            </Col>
            <Col md={6}>
              <Figure>
                <Figure.Image
                  className="image-shape"
                  alt="171x180"
                  src="https://www.nitj.ac.in/hacknitj/Resources/img/Dr_Geeta_Sikka.jpg"
                />
                <Figure.Caption>
                DR. GEETA SIKKA
                  <br />
                  <h3>Coordinator</h3>
                </Figure.Caption>
              </Figure>
            </Col>
          </Row>
          <Row className="admin">
            <h1>Core Team</h1>
          </Row>
          <hr></hr>
          <Row className="center-image">
            <Col md={4}>
              <Figure>
                <Figure.Image
                  className="image-shape2"
                  alt="171x180"
                  src="https://www.nitj.ac.in/hacknitj/Resources/img/anupam.jpeg"
                />
                <Figure.Caption>
                  Anupam Kumar
                  <br />
                  <h3>Hackathon Co-ordinator</h3>
                </Figure.Caption>
              </Figure>
            </Col>
            <Col md={4}>
              <Figure>
                <Figure.Image
                  className="image-shape2"
                  alt="171x180"
                  src="https://www.nitj.ac.in/hacknitj/Resources/img/madhav.jpeg"
                />
                <Figure.Caption>
                  Madhav Krishna
                  <br />
                  <h3>Hackathon Co-ordinator</h3>
                </Figure.Caption>
              </Figure>
            </Col>
            <Col md={4}>
              <Figure>
                <Figure.Image
                  className="image-shape2"
                  alt="171x180"
                  src="https://www.nitj.ac.in/hacknitj/Resources/img/aditya.jpg"
                />
                <Figure.Caption>
                  Aditya Manchanda
                  <br />
                  <h3>Hackathon Technical Co-ordinator</h3>
                </Figure.Caption>
              </Figure>
            </Col>
          </Row>
          <Row className="center-image">
            <Col md={4}>
              <Figure>
                <Figure.Image
                  className="image-shape2"
                  alt="171x180"
                  src="https://www.nitj.ac.in/hacknitj/Resources/img/pawan.jpg"
                />
                <Figure.Caption>
                  Pawan Kholiya
                  <br />
                  <h3>Hackathon Technical Co-ordinator</h3>
                </Figure.Caption>
              </Figure>
            </Col>
            <Col md={4}>
              <Figure>
                <Figure.Image
                  className="image-shape2"
                  alt="171x180"
                  src="https://www.nitj.ac.in/hacknitj/Resources/img/kunal.jpeg"
                />
                <Figure.Caption>
                  Kunal Khandelwal
                  <br />
                  <h3>Convener</h3>
                </Figure.Caption>
              </Figure>
            </Col>
            <Col md={4}>
              <Figure>
                <Figure.Image
                  className="image-shape2"
                  alt="171x180"
                  src="https://www.nitj.ac.in/hacknitj/Resources/img/aarushi.jpeg"
                />
                <Figure.Caption>
                  Aarushi Singla
                  <br />
                  <h3>Co-Convener</h3>
                </Figure.Caption>
              </Figure>
            </Col>
          </Row>
          
          <Row className="admin">
            <h1>Web Team</h1>
          </Row>
          <hr></hr>
          <Row className="center-image">
            <Col md={4}>
              <Figure>
                <Figure.Image
                  className="image-shape3"
                  alt="171x180"
                  src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/events/PhotoGrid_1590851241438_MtiBlPh.jpg"
                />
                <Figure.Caption>
                  Megha Gupta
                  <br />
                  <h3>Frontend Developer</h3>
                </Figure.Caption>
              </Figure>
            </Col>
            <Col md={4}>
              <Figure>
                <Figure.Image
                  className="image-shape3"
                  alt="171x180"
                  src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/events/WhatsApp%20Image%202021-01-20%20at%207.14.30%20PM_NIqhTrU.jpeg"
                />
                <Figure.Caption>
                  Yukt Kataria
                  <br />
                  <h3>Web Developer</h3>
                </Figure.Caption>
              </Figure>
            </Col>
            <Col md={4}>
              <Figure>
                <Figure.Image
                  className="image-shape3"
                  alt="171x180"
                  src="https://media-exp1.licdn.com/dms/image/C4E03AQGtrXOd_Az2aw/profile-displayphoto-shrink_200_200/0/1585660933416?e=1621468800&v=beta&t=qXcppbCh2rnKqnRCHfWg5VmczcP-IXljW4SXIZAneEA"
                />
                <Figure.Caption>
                  Tushar Upadhyay
                  <br />
                  <h3>Web Developer</h3>
                </Figure.Caption>
              </Figure>
            </Col>
          </Row>


        </Container>
      </div>
      <div className="bottom">
        <Contact />
      </div>
    </div>
  );
}

export default Home;
