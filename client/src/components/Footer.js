import React, { useState, useEffect } from "react";

const Footer = () => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setExpanded(isBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer
      className={`flex flex-col items-center mt-24 bottom-0 left-0 w-full bg-white text-black transition-height duration-200 transform-gpu overflow-hidden ${
        expanded ? "h-24" : "h-12"
      }`}
    >
      <div className="flex items-center">
        <span>2024 &copy; Gandalf's Dispensary</span>
        <img src="bouncing-arrow.gif" alt="arrow" className="w-12 h-12 ml-4" />
      </div>

      <div className="flex flex-row align-center items-center justify-center w-full h-full bg-black text-white">
        <span>
          Developed by{" "}
          <a
            href="https://alecnazzy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            alecnazzy.com
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
