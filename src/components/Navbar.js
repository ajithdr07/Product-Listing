import React, { useContext } from "react";
import SearchProduct from "./SearchProduct";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/cartContext";
import cartImage from "../cart.svg";
import profileIcon from "../profile.svg";
import homeIcon from "../homeIcon.svg";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <nav className="flex justify-between items-center p-3 bg-gray-900 text-white">
      <Link to="/" className="home-link">
        <img src={homeIcon} alt="home icon" className="h-8" />
      </Link>
      <SearchProduct />
      <div className="flex items-center space-x-4">
        <Link to="/cart" className="relative">
          <img src={cartImage} alt="cart icon" className="h-8" />
          {cart.totalItems > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 rounded-full w-4 h-4 flex items-center justify-center text-xs">
              {cart.totalItems}
            </span>
          )}
        </Link>
        <div className="relative group">
          <img src={profileIcon} alt="profile icon" className="h-8" />
          <div className="absolute w-max right-0 bg-gray-800 text-gray-300 rounded-lg p-2 hidden group-hover:block">
            <span className="block py-1">My Profile</span>
            <span className="block py-1">My Orders</span>
            <span className="block py-1">Logout</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
