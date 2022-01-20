import React from "react";
import { Link } from "react-router-dom";
import uniqid from "uniqid";

function CartBar(props) {
  const { cart, setCart } = props;

  function decrement(item) {
    let currentCart = [...cart];

    currentCart.forEach((aItem) => {
      if (aItem.id === item.id) aItem.quantity -= 1;

      if (aItem.quantity === 0)
        currentCart = currentCart.filter(
          (cartItem) => cartItem.id !== aItem.id
        );
    });

    setCart(currentCart);
  }

  function increment(item) {
    const currentCart = [...cart];

    currentCart.forEach((aItem) => {
      if (aItem.id === item.id) aItem.quantity += 1;
    });

    setCart(currentCart);
  }

  return (
    <div className="cart-bar" style={{ display: "none" }}>
      <div className="cart-bar-header">Shopping Cart</div>
      <div className="items">
        {cart.map((item) => (
          <div key={uniqid()}>
            {item.name} {item.price}
            <div className="cart-bar-quantity">
              <button type="button" onClick={() => decrement(item)}>
                -
              </button>
              <div>{item.quantity}</div>
              <button type="button" onClick={() => increment(item)}>
                +
              </button>
            </div>
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
