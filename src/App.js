import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ShopGridLeft from "./Pages/Shop/Shop-grid-left";
import Product from "./Pages/Product/Product";
import Cart from "./Pages/Cart/Cart";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Dashboard />} />
      <Route path="/shopGridLeft" element={<ShopGridLeft />} />
      <Route path="/shop" element={<Product />}/>
      <Route path="/cart" element={<Cart />}/>
    </Routes>
  );
}

export default App;
