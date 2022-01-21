import React, { useEffect, useState } from "react";
import "./css/App.css";

import RouteSwitch from "./RouteSwitch";

function App() {
  const [cart, setCart] = useState([]);
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    let currentSubTotal = 0;

    cart.forEach((item) => {
      currentSubTotal += item.price * item.quantity;
    });

    setSubTotal(currentSubTotal);
  }, [cart]);

  return (
    <div className="main">
      <RouteSwitch
        cart={cart}
        setCart={setCart}
        subTotal={subTotal}
        setSubTotal={setSubTotal}
      />
    </div>
  );
}

export default App;
