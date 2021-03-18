import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import "./Events.css";
function Events() {
  return (
    <div>
      <Carousel className="Events-content" pause="false">
        <Carousel.Item className="Events-item" interval={3000}>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTbEGQ9o9-hBjxoJml7L4nDEXgrXG_rAipqA&usqp=CAU"
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="card-head">Events</div>
            <hr></hr>
            <h3>Techniti</h3>
            <p>
              Lorem ipsum is a pseudo-Latin text used in web design, typography,
              layout, and printing in place of English to emphasise design
              elements over content. It's also called placeholder (or filler)
              text. It's a convenient tool for mock-ups. It helps to outline the
              visual elements of a document or presentation, eg typography,
              font, or layout. Lorem ipsum is mostly a part of a Latin text by
              the classical author and philosopher Cicero. Its words and letters
              have been changed by addition or removal, so to deliberately
              render its content nonsensical; it's not genuine, correct, or
              comprehensible Latin anymore. While lorem ipsum's still resembles
              classical Latin, it actually has no meaning whatsoever.
            </p>
            <Button variant="info" href="#" size="lg" active>
              Website
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="Events-item" interval={3000}>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTbEGQ9o9-hBjxoJml7L4nDEXgrXG_rAipqA&usqp=CAU"
            alt="Third slide"
          />

          <Carousel.Caption>
            <div className="card-head">Events</div>
            <hr></hr>
            <h3>Techniti</h3>
            <p>
              Lorem ipsum is a pseudo-Latin text used in web design, typography,
              layout, and printing in place of English to emphasise design
              elements over content. It's also called placeholder (or filler)
              text. It's a convenient tool for mock-ups. It helps to outline the
              visual elements of a document or presentation, eg typography,
              font, or layout. Lorem ipsum is mostly a part of a Latin text by
              the classical author and philosopher Cicero. Its words and letters
              have been changed by addition or removal, so to deliberately
              render its content nonsensical; it's not genuine, correct, or
              comprehensible Latin anymore. While lorem ipsum's still resembles
              classical Latin, it actually has no meaning whatsoever.
            </p>
            <Button variant="info" href="#" size="lg" active>
              Website
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="Events-item" interval={3000}>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTbEGQ9o9-hBjxoJml7L4nDEXgrXG_rAipqA&usqp=CAU"
            alt="Third slide"
          />

          <Carousel.Caption>
            <div className="card-head">Events</div>
            <hr></hr>
            <h3>Techniti</h3>
            <p>
              Lorem ipsum is a pseudo-Latin text used in web design, typography,
              layout, and printing in place of English to emphasise design
              elements over content. It's also called placeholder (or filler)
              text. It's a convenient tool for mock-ups. It helps to outline the
              visual elements of a document or presentation, eg typography,
              font, or layout. Lorem ipsum is mostly a part of a Latin text by
              the classical author and philosopher Cicero. Its words and letters
              have been changed by addition or removal, so to deliberately
              render its content nonsensical; it's not genuine, correct, or
              comprehensible Latin anymore. While lorem ipsum's still resembles
              classical Latin, it actually has no meaning whatsoever.
            </p>
            <Button variant="info" size="lg" active href="#">
              Website
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Events;
