import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../Assets/Images/C1.png';
import slide2 from '../Assets/Images/C2.png';
import slide3 from '../Assets/Images/C3.png';

function ControlledCarousel() {
  // State to control the active carousel slide
  const [index, setIndex] = useState(0);

  // Function to handle the selected index change
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {/* First Carousel Item */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide1} 
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Trusted by Sri Lankans</h3>
          <p>Join thousands of satisfied customers across Sri Lanka</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Second Carousel Item */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide2} 
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Tailored to Your Needs</h3>
          <p>Choose flexible repayment options that fit your financial situation</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Third Carousel Item */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide3} 
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Fast and Easy Loans</h3>
          <p>Get approved in minutes with our hassle-free AI Based online process</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
