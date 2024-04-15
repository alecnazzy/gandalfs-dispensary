import React from "react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-white z-10 w-screen">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-row justify-between items-center">
          <img
            src="navbar-title.png"
            alt="Gandalf's Dispensary"
            className="w-2/12 h-auto"
          />
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="text-sm mx-2">
                Home
              </a>
            </li>
            <li>
              <a href="/products" className="text-sm mx-2">
                Products
              </a>
            </li>
            <li>
              <a href="/about" className="text-sm mx-2">
                About
              </a>
            </li>
            <li>
              <a href="/cart" className="text-sm mx-2">
                Cart
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
