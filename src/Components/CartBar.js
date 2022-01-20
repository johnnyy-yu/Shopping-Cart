import React from "react";
import { Link } from "react-router-dom";
import uniqid from "uniqid";
import "../CartBar.css";

function CartBar(props) {
  const { cart, setCart, subTotal } = props;

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
      <div className="cart-items">
        {cart.map((item) => (
          <div className="cart-item" key={uniqid()}>
            <div className="cart-img-name">
              <img className="cart-img" src={item.image} alt={item.id} />
              <div className="cart-name">{item.name}</div>
            </div>
            <div className="cart-quantity-price">
              <div className="cart-quantity">
                <div className="quantity">Quantity:</div>
                <button
                  type="button"
                  className="decrement"
                  onClick={() => decrement(item)}
                >
                  -
                </button>
                <div>{item.quantity}</div>
                <button
                  type="button"
                  className="increment"
                  onClick={() => increment(item)}
                >
                  +
                </button>
              </div>
              <div className="cart-price">{`$${item.price}`}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="subtotal">Subtotal: {`$${subTotal}`}</div>
      <div className="tax-shipping">Tax & Shipping: --</div>
      <Link to="/checkout" className="cart-checkout">
        <button type="button" id="cart-checkout">
          Checkout
        </button>
      </Link>
    </div>
  );
}

export default CartBar;
