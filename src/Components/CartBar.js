import React from "react";
import { Link } from "react-router-dom";
import uniqid from "uniqid";
import "../css/CartBar.css";
import { increment, decrement } from "./quantity";

function CartBar(props) {
  const { cart, setCart, subTotal } = props;

  return (
    <div className="cart-bar">
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
                  onClick={() => decrement(item, cart, setCart)}
                >
                  -
                </button>
                <div>{item.quantity}</div>
                <button
                  type="button"
                  className="increment"
                  onClick={() => increment(item, cart, setCart)}
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
      <Link to="/cart" className="cart-checkout">
        <button type="button" id="cart-checkout">
          Go to Cart
        </button>
      </Link>
    </div>
  );
}

export default CartBar;
