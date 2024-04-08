import React from "react";
import { useState, useEffect, useRef } from "react";

export default function About() {
  //
  const [isVisible, setIsVisible] = useState(false);
  const shopPhotosRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const { top } = shopPhotosRef.current.getBoundingClientRect();
      const isVisible = top < window.innerHeight / 2;
      setIsVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  //
  return (
    <div className="container mx-auto px-4 pt-24">
      {/* about paragraph */}
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
        <div className="md:w-1/2 mb-4 md:mb-0 flex justify-center">
          <img
            src="gandalf.png"
            alt="Gandalf"
            className="w-96 h-96 object-cover rounded-full shadow-md"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <p className="text-lg mb-4">
            Welcome to Gandalf's Premium Pipeweed Dispensary, your one-stop shop
            for the finest pipeweed and paraphernalia in Middle-earth!
          </p>
          <p className="text-lg mb-4">
            Our mission is to provide premium-quality pipeweed sourced from the
            Shire and beyond, curated by none other than Gandalf the Grey
            himself. In addition to our exceptional pipeweed collection, we
            offer a wide range of paraphernalia, including pipes, tobacco
            pouches, and other accessories to elevate your smoking experience.
          </p>
          <p className="text-lg">
            Whether you're a seasoned pipe enthusiast or a curious hobbit
            looking to indulge in the pleasures of the leaf, Gandalf's Pipeweed
            Premium Dispensary has something for everyone. Browse our selection
            and embark on a journey to relaxation and delight.
          </p>
        </div>
      </div>
      {/* end about paragraph */}
      {/* shop photos */}

      <div className="mt-24" ref={shopPhotosRef}>
        <div className="w-full flex flex-col justify-center align-center items-center">
          <h1 className="w-8/12 text-lg text-center mb-6">
            Come and visit our location nestled along the tranquil banks of the
            Water in the heart of Hobbiton. Look for the tall, crooked sign
            adorned with a smoking pipe, just a stone's throw from the Green
            Dragon Inn!
          </h1>
          <h1 className="mb-8">Photos of our shop:</h1>
        </div>
        <div
          className={`flex flex-row justify-center align-center items-center transition-transform duration-1000 ${
            isVisible ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <img src="shop.png" alt="shop1" className="w-8/12 h-auto my-4" />
        </div>
        <div
          className={`flex flex-row justify-center align-center items-center transition-transform duration-1000 ${
            isVisible ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <img src="shop2.png" alt="shop1" className="w-8/12 h-auto my-4" />
        </div>
      </div>
      {/* end shop photos */}
    </div>
  );
}
