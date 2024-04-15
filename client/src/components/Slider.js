import React, { useState, useEffect, useRef } from "react";

export default function Slider({ image }) {
  const [isVisible, setIsVisible] = useState(false);
  const shopPhotosRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (shopPhotosRef.current) {
        const { top } = shopPhotosRef.current.getBoundingClientRect();
        const isVisible = top < window.innerHeight / 2;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="mt-8" ref={shopPhotosRef}>
      <div
        className={`flex flex-row justify-center align-center items-center transition-transform duration-1000 ${
          isVisible ? "translate-x-0" : "translate-x-full origin-left"
        }`}
      >
        <img src={image} alt="Shop" className="w-7/12 h-auto" />
      </div>
    </div>
  );
}
