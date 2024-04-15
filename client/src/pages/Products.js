import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import ProductFilter from "../components/ProductFilter";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = process.env.REACT_APP_API_KEY;
        const apiUrl = process.env.REACT_APP_API_URL;
        const url = `${apiUrl}/${apiKey}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!selectedCategory) {
      // If no category selected, display all products
      setFilteredProducts(products);
    } else {
      // Filter products based on selected category
      const filtered = products.filter(
        (product) => product.category === selectedCategory
      );
      setFilteredProducts(filtered);
    }
  }, [selectedCategory, products]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      {/* Product filter component */}
      <ProductFilter
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />

      {/* Products display */}
      <ul className="mt-6 flex flex-row flex-wrap justify-center align-center items-center">
        {filteredProducts.map((product) => (
          <li key={product._id}>
            <a href={`/${product._id}`}>
              <ProductCard
                product={{
                  name: product.name,
                  image: product.image,
                  price: product.price,
                }}
              />
            </a>
          </li>
        ))}
      </ul>
      {/* End products display */}
    </div>
  );
}
