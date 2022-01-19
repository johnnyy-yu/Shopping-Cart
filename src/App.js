import React, { useState } from "react";
import "./App.css";

import RouteSwitch from "./RouteSwitch";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="main">
      <RouteSwitch cart={cart} setCart={setCart} />
    </div>
  );
}

export default App;
