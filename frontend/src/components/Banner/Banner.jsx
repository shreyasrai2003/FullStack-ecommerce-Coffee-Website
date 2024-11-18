import React, { useState } from "react";
import "./Banner.css";
import coffee1 from "../Assets/coffee1.jpg";
import coffee2 from "../Assets/coffee2.jpg";
import coffee3 from "../Assets/coffee3.jpg";

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [coffee1, coffee2, coffee3];

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="banner">
      <button className='prev' onClick={handlePrev}>Previous</button>
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
      />
      <button className='next' onClick={handleNext}>Next</button>
    </div>
  );
};

export default Banner;
