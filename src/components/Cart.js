import React, { useContext } from "react";
import { CartContext } from "../contexts/cartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    cart: { items },
  } = useContext(CartContext);

  return (
    <div className="p-4">
      {items.length > 0 ? (
        items.map((product) => (
          <Link
            to={`/product-detail/${product.id}`}
            key={product.id}
            className="flex items-center space-x-4 py-2 px-4 border-b border-gray-300"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-16 h-16 object-contain"
            />
            <div>
              <p className="font-semibold">{product.title}</p>
              <p>Total: {product.total}</p>
            </div>
          </Link>
        ))
      ) : (
        <p className="text-center py-4">
          You have not added any items to the cart
        </p>
      )}
    </div>
  );
};

export default Cart;
