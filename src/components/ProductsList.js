import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductsList = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `https://fakestoreapi.com/products/category/${category}`
        );
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  if (error) {
    return <p>Something went wrong while fetching products...</p>;
  }

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {!isLoading && products && products.length > 0 && (
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <Link
              to={`/product-detail/${product.id}`}
              key={product.id}
              className="border p-2 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-contain rounded-lg"
              />
              <div className="p-4 flex flex-col flex-grow">
                <p className="text-lg font-semibold mb-2 overflow-hidden overflow-ellipsis whitespace-nowrap">
                  {product.title}
                </p>
                <p className="mt-auto text-blue-500 self-end">View Details</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default ProductsList;
