import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AppLayout from "./AppLayout";
import Cart from "./components/Cart";
import ProductDetail from "./components/ProductDetail";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
