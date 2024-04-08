import React from "react";
import ProductCard from "../components/ProductCard";

export default function Products() {
  return (
    <div>
      {/* products display */}
      <div className="mt-24 flex flex-row flex-wrap justify-center align-center items-center">
        <ProductCard
          product={{
            name: "Product Name",
            image: "pipeweed.png",
            description: "Product description goes here",
            price: 20.99,
          }}
        />
        {/*  */}
        <ProductCard
          product={{
            name: "Product Name",
            image: "pipeweed2.png",
            description: "Product description goes here",
            price: 20.99,
          }}
        />
        {/*  */}
        <ProductCard
          product={{
            name: "Product Name",
            image: "pipeweed3.png",
            description: "Product description goes here",
            price: 20.99,
          }}
        />
        {/*  */}
        <ProductCard
          product={{
            name: "Product Name",
            image: "pipeweed4.png",
            description: "Product description goes here",
            price: 20.99,
          }}
        />
        {/*  */}
        <ProductCard
          product={{
            name: "Product Name",
            image: "pipeweed5.png",
            description: "Product description goes here",
            price: 20.99,
          }}
        />
        {/*  */}
        <ProductCard
          product={{
            name: "Product Name",
            image: "dwarf-pipe.png",
            description: "Product description goes here",
            price: 20.99,
          }}
        />
        {/*  */}
        <ProductCard
          product={{
            name: "Product Name",
            image: "dwarf-pipe2.png",
            description: "Product description goes here",
            price: 20.99,
          }}
        />
        {/*  */}
        <ProductCard
          product={{
            name: "Product Name",
            image: "dwarf-pipe3.png",
            description: "Product description goes here",
            price: 20.99,
          }}
        />
        {/*  */}
        <ProductCard
          product={{
            name: "Product Name",
            image: "dwarf-pipe4.png",
            description: "Product description goes here",
            price: 20.99,
          }}
        />
        {/*  */}
        <ProductCard
          product={{
            name: "Product Name",
            image: "paraphernalia.png",
            description: "Product description goes here",
            price: 20.99,
          }}
        />
        {/*  */}
        <ProductCard
          product={{
            name: "Product Name",
            image: "paraphernalia2.png",
            description: "Product description goes here",
            price: 20.99,
          }}
        />
        {/*  */}
        <ProductCard
          product={{
            name: "Product Name",
            image: "fireworks.png",
            description: "Product description goes here",
            price: 20.99,
          }}
        />
        {/*  */}
        <ProductCard
          product={{
            name: "Product Name",
            image: "fireworks2.png",
            description: "Product description goes here",
            price: 20.99,
          }}
        />
        {/*  */}
        <ProductCard
          product={{
            name: "Product Name",
            image: "fireworks3.png",
            description: "Product description goes here",
            price: 20.99,
          }}
        />
      </div>
      {/* end products display */}
    </div>
  );
}
