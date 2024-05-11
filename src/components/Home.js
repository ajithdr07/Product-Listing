import React, { useEffect, useState } from "react";
import ProductsList from "./ProductsList";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch("https://fakestoreapi.com/products/categories");
        const data = await res.json();
        setCategories(data);
        setActiveCategory(data[0]);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (error) {
    return <p>Something went wrong...</p>;
  }

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <div className="flex flex-wrap gap-2 mt-4 px-4">
          {categories.map((category, i) => (
            <button
              key={i}
              className={`px-4 py-2 rounded-lg border border-gray-300 focus:outline-none ${
                category === activeCategory
                  ? "bg-green-500 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      )}
      {!isLoading && activeCategory && (
        <ProductsList category={activeCategory} />
      )}
    </>
  );
};

export default Home;
