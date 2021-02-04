import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Events2() {
  return (
    <div>
      <Carousel>
        <Carousel.Item className="Events-item">
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/2539924/pexels-photo-2539924.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item className="Events-item">
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/2539924/pexels-photo-2539924.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item className="Events-item">
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/2539924/pexels-photo-2539924.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Events2;
