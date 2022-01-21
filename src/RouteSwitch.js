import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Browse from "./Components/Browse";
import Cart from "./Components/Cart";

function RouteSwitch(props) {
  const { cart, setCart, subTotal } = props;

  return (
    <Routes>
      <Route path="/" element={<Home cart={cart} />} />
      <Route
        path="/browse"
        element={<Browse cart={cart} setCart={setCart} subTotal={subTotal} />}
      />
      <Route
        path="/cart"
        element={<Cart cart={cart} setCart={setCart} subTotal={subTotal} />}
      />
    </Routes>
  );
}

export default RouteSwitch;
