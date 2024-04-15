import React, { useState, useEffect } from "react";

export default function ProductFilter({ selectedCategory, onCategoryChange }) {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    // Determine if the filter should be sticky based on scroll position
    setIsSticky(window.scrollY > 50);
  };

  useEffect(() => {
    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCategoryChange = (category) => {
    onCategoryChange(category);
  };

  return (
    <div
      className={`flex justify-center mt-12 w-screen ${
        isSticky ? "sticky top-0 z-10 bg-black transition duration-200" : ""
      }`}
      style={{ top: isSticky ? "50px" : "auto" }} // Adjust the top position
    >
      <button
        className={`mr-4 ${
          selectedCategory === null ? "text-gray-400" : "text-gray-500"
        } text-gray-400 py-2 px-4 rounded`}
        onClick={() => handleCategoryChange(null)}
      >
        All
      </button>
      <button
        className={`mr-4 ${
          selectedCategory === "pipes" ? "text-gray-400" : "text-gray-500"
        } text-gray-400 py-2 px-4 rounded`}
        onClick={() => handleCategoryChange("pipes")}
      >
        Pipes
      </button>
      <button
        className={`mr-4 ${
          selectedCategory === "pipeweed" ? "text-gray-400" : "text-gray-500"
        } text-gray-400 py-2 px-4 rounded`}
        onClick={() => handleCategoryChange("pipeweed")}
      >
        Pipeweed
      </button>
      <button
        className={`mr-4 ${
          selectedCategory === "fireworks" ? "text-gray-400" : "text-gray-500"
        } text-gray-400 py-2 px-4 rounded`}
        onClick={() => handleCategoryChange("fireworks")}
      >
        Fireworks
      </button>
    </div>
  );
}
