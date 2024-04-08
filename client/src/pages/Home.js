import React from "react";
import ReviewCard from "../components/ReviewCard";
import ProductCarousel from "../components/ProductCarousel";

export default function Home() {
  const photos = [
    "dwarf-pipe.png",
    "dwarf-pipe2.png",
    "dwarf-pipe3.png",
    "dwarf-pipe4.png",
  ];

  return (
    <div className="flex flex-col justify-center items-center h-full relative">
      {/* Product Showcase */}
      <div className="flex flex-row w-full h-full">
        <div className="w-1/3 h-full relative hover:cursor-pointer">
          <div className="relative">
            <img
              src="pipeweed.png"
              alt="placeholder"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h3 className="text-lg font-semibold">Pipeweed</h3>
              <p className="text-sm">Premium Quality</p>
            </div>
          </div>
        </div>

        <div className="w-1/3 h-full relative cursor-pointer">
          <div className="relative">
            <img
              src="paraphernalia.png"
              alt="placeholder"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h3 className="text-lg font-semibold">Paraphernalia</h3>
              <p className="text-sm">Authentic Collection</p>
            </div>
          </div>
        </div>

        <div className="w-1/3 h-full relative cursor-pointer">
          <div className="relative">
            <img
              src="fireworks.png"
              alt="fireworks"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h3 className="text-lg font-semibold">Fireworks</h3>
              <p className="text-sm">Trendy Collection</p>
            </div>
          </div>
        </div>
      </div>
      {/* End Product Showcase */}

      {/* Limited Edition Showcase */}
      {/* <h1 className="mt-36">Limited Edition</h1> */}
      <img
        src="limited-title.png"
        alt="limited edition"
        className="mt-36 w-2/12 h-auto mb-4"
      />
      <div className="flex flex-row justify-center items-center mt-12">
        <div className="w-4/12 h-auto">
          <ProductCarousel photos={photos} />
        </div>
        <div className="text-center w-4/12 ml-24">
          <h1 className="text-2xl">Dwarf Pipe</h1>
          <p>
            Crafted with the essence of the Dwarve's rich heritage, each pipe
            captures the spirit of dwarven craftsmanship. Get yours while deal
            lasts!
          </p>
          <button className="mt-8 bg-white hover:bg-gray-100 text-black shadow-md font-bold py-2 px-4 rounded-xl">
            Shop Now
          </button>
        </div>
      </div>
      {/* End Limited Edition Showcase */}

      {/* Customer Reviews */}
      <div className="mt-36 mb-32 flex flex-col justify-center align-center items-center">
        <img
          src="customer-review-title.png"
          alt="reviews"
          className="w-2/4 h-auto mb-4"
        />
        <div className="flex flex-wrap justify-center">
          <ReviewCard
            review={{
              name: "Sam",
              text: "Smells like home, tastes like a cozy hug. Just right - not too strong, not too weak.",
              avatar: "sam.png",
            }}
          />
          <ReviewCard
            review={{
              name: "Merry",
              text: " Perfect for lazy afternoons or when you're pretending to listen to Aunt Lobelia's stories.",
              avatar: "merry.png",
            }}
          />
          <ReviewCard
            review={{
              name: "Pippin",
              text: "Not your granny's pipe-weed, but then again, I'm not your granny.",
              avatar: "pippin.png",
            }}
          />
        </div>
      </div>
      {/* End Customer Reviews */}
    </div>
  );
}
