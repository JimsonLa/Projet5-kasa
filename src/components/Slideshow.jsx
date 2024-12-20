import React, { useState } from "react";
import arrowLeft from "../assets/arrow-left.png";
import arrowRight from "../assets/arrow-right.png";

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const hasMultipleImages = images.length > 1;

  return (
    <div className="slideshow">
      {hasMultipleImages && (
        <>
          <button className="arrowLeft" onClick={handlePrevious}>
            <img src={arrowLeft} alt="Flèche de gauche" />
          </button>
          <button className="arrowRight" onClick={handleNext}>
            <img src={arrowRight} alt="Flèche de droite" />
          </button>
        </>
      )}
      <img src={images[currentIndex]} alt="Slideshow" />
      {hasMultipleImages && (
        <p className="image-counter">
          {currentIndex + 1} / {images.length}
        </p>
      )}
    </div>
  );
};

export default Slideshow;
