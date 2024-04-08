import React, { useState, useEffect } from "react";
import "./ProductCarousel.css"; // Import CSS file for styling

export default function ProductCarousel({ photos }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 3000); // Change photo every 3 seconds

    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <div className="w-97 h-auto carousel-container">
      <div
        className="carousel-wrapper"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {photos.map((photo, index) => (
          <img key={index} src={photo} alt="Limited edition products" />
        ))}
      </div>
    </div>
  );
}
