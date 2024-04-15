import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL;
        const url = `${apiUrl}/${id}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (product && product.category) {
      fetchRelatedProducts(product.category);
    }
  }, [product]);

  const fetchRelatedProducts = async (category) => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL;
      const url = `${apiUrl}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setRelatedProducts(
        data.filter(
          (item) => item.category === category && item.name !== product.name
        )
      );
    } catch (error) {
      console.error("Error fetching related products:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-4">
      <button className="bg-white hover:bg-gray-100 text-black shadow-md font-bold py-2 px-4 rounded-xl mb-6">
        <a href="/products">Back</a>
      </button>
      {product ? (
        <div className="flex flex-row items-center align-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-5/12 rounded-lg shadow-lg mr-8"
          />
          <div className="flex flex-col justify-center align-center items-center ml-44">
            <h2 className="text-3xl font-semibold mb-4">{product.name}</h2>
            <p className="text-sm text-gray-600 w-72">{product.description}</p>
            <p className="text-md mt-6 text-gray-500">
              {product.price} copper pennies
            </p>
            <div className="px-6 py-4">
              <button className="bg-white hover:bg-gray-100 text-black shadow-md font-bold py-2 px-4 rounded-xl">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      {relatedProducts.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mt-10 text-center">
            Related Products
          </h2>
          <div className="mt-6 flex flex-row flex-wrap justify-center align-center items-center">
            {relatedProducts.slice(0, 3).map((relatedProduct) => (
              <div key={relatedProduct.id}>
                <a href={`/${relatedProduct._id}`}>
                  <ProductCard
                    product={{
                      name: relatedProduct.name,
                      image: relatedProduct.image,
                      price: relatedProduct.price,
                    }}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
