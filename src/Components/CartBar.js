import React from "react";
import { Link } from "react-router-dom";

function CartBar(props) {
  const { cart } = props;

  return (
    <div className="cart-bar" style={{ display: "none" }}>
      <div>Shopping Cart</div>
      <div className="items">
        {cart.map((item) => (
          <div key={item.id}>
            {item.name} {item.price}
          </div>
        ))}
      </div>
      <Link to="/checkout">
        <button type="button">Checkout</button>
      </Link>
    </div>
  );
}

export default CartBar;
