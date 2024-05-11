import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/cartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      setError(false);
      setIsLoading(true);
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCartClick = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  if (error) {
    return <p>Something went wrong</p>;
  }

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {!isLoading &&
        (product ? (
          <div className="mt-4 p-8 flex flex-wrap justify-center gap-8">
            <img
              src={product.image}
              alt={product.title}
              className="w-64 h-52 object-contain"
            />
            <div className="product-detail-info">
              <p className="font-bold">{product.title}</p>
              <p className="leading-normal">{product.description}</p>
              <p className="my-4">Rating: {product.rating?.rate}</p>
              <button
                onClick={handleAddToCartClick}
                className="px-4 py-1 border bg-slate-200 my-4 rounded-lg cursor-pointer transition-transform active:bg-green-600 active:text-white active:translate-y-1"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ) : (
          <p className="flex justify-center mt-4">Product not Found</p>
        ))}
    </>
  );
};

export default ProductDetail;
