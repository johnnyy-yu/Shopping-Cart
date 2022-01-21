import React from "react";
import NavBar from "./NavBar";
import "../css/Cart.css";
import { increment, decrement } from "./quantity";

export default function Cart(props) {
  const { cart, setCart, subTotal } = props;
  return (
    <div className="cart-page">
      <NavBar cart={cart} />
      <div className="cart-p">
        <div className="cart-page-main">
          <div className="cart-page-header">My Cart</div>
          <div className="cart-page-list">
            {cart.map((item) => (
              <div className="cart-page-item" key={item.id}>
                <img className="cart-page-image" src={item.image} alt="" />
                <div className="cart-page-details">
                  <div className="cart-page-name-price">
                    <div className="cart-page-name">{item.name} </div>
                    <div className="cart-page-price">{`$${item.price}`}</div>
                  </div>
                  <div className="cart-page-quantity">
                    Quantity:
                    <button
                      type="button"
                      className="decrement"
                      onClick={() => {
                        decrement(item, cart, setCart);
                      }}
                    >
                      -
                    </button>
                    <div className="cart-item-quantity">{item.quantity}</div>
                    <button
                      type="button"
                      className="increment"
                      onClick={() => {
                        increment(item, cart, setCart);
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="order-summary">
          <div className="summary-header">Order Summary</div>
          <div className="summary-main">
            <div className="summary-subtotal">Subtotal: {`$${subTotal}`}</div>
            <div className="summary-tax-shipping">Tax & Shipping: --</div>
            <div className="summary-total">Total: {`$${subTotal}`}</div>
          </div>
          <div className="summary-checkout">Checkout</div>
        </div>
      </div>
    </div>
  );
}
