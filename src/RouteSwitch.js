import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Browse from "./Components/Browse";
import Checkout from "./Components/Checkout";

function RouteSwitch(props) {
  const { cart, setCart } = props;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/browse"
        element={<Browse cart={cart} setCart={setCart} />}
      />
      <Route path="/checkout" element={<Checkout cart={cart} />} />
    </Routes>
  );
}

export default RouteSwitch;
