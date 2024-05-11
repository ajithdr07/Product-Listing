import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { CartContextProvider } from "./contexts/cartContext";

const AppLayout = () => {
  return (
    <>
      <CartContextProvider>
        <Navbar />
        <Outlet />
      </CartContextProvider>
    </>
  );
};

export default AppLayout;
