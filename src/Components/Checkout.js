import React from "react";
import NavBar from "./NavBar";

function Checkout(props) {
  const { cart } = props;
  return (
    <div>
      <NavBar cart={cart} />
      Checkout
      {cart.map((item) => (
        <div className="checkout-item" key={item.id}>
          <img src={item.image} alt="" />
          <div>{item.name}</div>
          <div>{`$${item.price}`}</div>
        </div>
      ))}
    </div>
  );
}

export default Checkout;
