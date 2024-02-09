import React, { useEffect, useState } from "react";
import "./styles.css";

function ImageCarouselComponent({ projectImages, projectName }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLHovered, setIsLHovered] = useState(false);
  const [isRHovered, setIsRHovered] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectImages?.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projectImages?.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      {projectImages && projectImages.length > 0 && (
        <div className="carouselContainer">
          <div
            className="carouselTrack"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projectImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Imagen ${index + 1} de ${projectName}`}
                className="slide"
              />
            ))}
          </div>

          {projectImages?.length > 1 && (
            <div
              className={`arrowLeft ${isLHovered ? "hovered" : ""}`}
              onClick={handlePrev}
              onMouseEnter={() => setIsLHovered(true)}
              onMouseLeave={() => setIsLHovered(false)}
            ></div>
          )}

          {projectImages?.length > 1 && (
            <div
              className={`arrowRight ${isRHovered ? "hovered" : ""}`}
              onClick={handleNext}
              onMouseEnter={() => setIsRHovered(true)}
              onMouseLeave={() => setIsRHovered(false)}
            ></div>
          )}
        </div>
      )}
    </>
  );
}

export default ImageCarouselComponent;
