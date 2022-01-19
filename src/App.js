import React, { useState, useEffect } from "react";
// import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import NavBar from "./Components/NavBar";
import Browse from "./Components/Browse";
import Checkout from "./Components/Checkout";
import Home from "./Components/Home";
import RouteSwitch from "./RouteSwitch";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="main">
      <NavBar cart={cart} />
      <RouteSwitch cart={cart} setCart={setCart} />
    </div>
  );
}

export default App;
