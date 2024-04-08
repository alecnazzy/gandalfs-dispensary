import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="flex flex-col justify-center align-center items-center text-center max-w-xs rounded-xl overflow-hidden bg-white shadow-md my-2 mx-2">
      <img src={product.image} alt={product.name} className="w-full" />
      <div className="px-6 py-4">
        <div className="text-xl mb-2">{product.name}</div>
        <p className="text-gray-900 text-lg mt-2">${product.price}</p>
      </div>
      <div className="px-6 py-4">
        <button className="bg-white hover:bg-gray-100 text-black shadow-md font-bold py-2 px-4 rounded-xl">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
