import React from "react";
import { Link } from "react-router-dom";
import icon from "../icons/reactIcon.svg";
import shoppingCart from "../icons/outline_shopping_cart_white_24dp.png";

function NavBar(props) {
  const { cart, checkout } = props;

  function checkoutSwitch() {
    if (checkout === "true") {
      return (
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <img
            src={shoppingCart}
            alt=""
            className="shopping-cart-icon"
            style={{ cursor: "pointer" }}
          />
        </Link>
      );
    }
    return (
      <div
        onKeyDown={() => {}}
        role="button"
        onClick={() => {
          const cartBar = document.querySelector(".cart-bar");
          cartBar.classList.toggle("is-open");
        }}
        tabIndex={0}
      >
        <img
          src={shoppingCart}
          alt=""
          className="shopping-cart-icon"
          style={{ cursor: "pointer" }}
        />
      </div>
    );
  }

  return (
    <header>
      <img src={icon} alt="" className="react-logo" />
      <ul className="nav-bar">
        <Link to="/" style={{ textDecoration: "none" }}>
          <li className="home-nav">Home</li>
        </Link>
        <Link to="/browse" style={{ textDecoration: "none" }}>
          <li className="browse-nav">Browse</li>
        </Link>
        <li className="cart">
          {checkoutSwitch()}
          {cart.length > 0 && <div className="num-items">{cart.length}</div>}
        </li>
      </ul>
    </header>
  );
}

export default NavBar;
