import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import icon from "../icons/reactIcon.svg";
import shoppingCart from "../icons/outline_shopping_cart_white_24dp.png";

function NavBar(props) {
  const {cart} = props;

  return (
    <header>
      <img src={icon} alt="" className="react-logo" />
      <ul className="nav-bar">
        <Link to="/" style={{ textDecoration: "none" }}>
          <li>Home</li>
        </Link>
        <Link to="/browse" style={{ textDecoration: "none" }}>
          <li>Browse</li>
        </Link>
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <li className="cart">
            <img src={shoppingCart} alt="" className="shopping-cart-icon" />
            <div className="num-items">{cart.length}</div>
          </li>
        </Link>
      </ul>
    </header>
  );
}

export default NavBar;
