import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Browse from "./Components/Browse";
import Checkout from "./Components/Checkout";

function RouteSwitch(props) {
  const { cart, setCart, subTotal, setSubTotal } = props;

  return (
    <Routes>
      <Route path="/" element={<Home cart={cart} />} />
      <Route
        path="/browse"
        element={<Browse cart={cart} setCart={setCart} subTotal={subTotal} />}
      />
      <Route
        path="/checkout"
        element={
          <Checkout cart={cart} subTotal={subTotal} setSubTotal={setSubTotal} />
        }
      />
    </Routes>
  );
}

export default RouteSwitch;
