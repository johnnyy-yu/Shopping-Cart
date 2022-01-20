import React, { useState, useEffect } from "react";
import CartBar from "./CartBar";
import fetchItems from "./fetchItems";
import NavBar from "./NavBar";

function Browse(props) {
  const { cart, setCart } = props;

  const [items, setItems] = useState([]);

  useEffect(async () => {
    setItems(await fetchItems());
  }, []);

  return (
    <div className="browse-page">
      <NavBar cart={cart} checkout="false" />
      <div
        className="browse"
        onClick={() => {
          document.querySelector(".cart-bar").style.display = "none";
        }}
        role="tab"
        onKeyDown={() => {}}
        tabIndex={0}
      >
        {items.map((item) => (
          <div key={item.id} className="item">
            <div className="image-frame">
              <img src={item.image} alt="pic" className="item-pic" />
            </div>
            <div className="item-description">
              <div className="name-price">
                <div className="item-name">{item.title}</div>
                <div className="item-price">{`$${item.price}`}</div>
              </div>
              <button
                type="submit"
                className="add-button"
                onClick={() => {
                  const currentCart = [...cart];
                  const thisItem = {
                    id: item.id,
                    image: item.image,
                    name: item.title,
                    price: item.price,
                    quantity: 1,
                  };
                  currentCart.push(thisItem);
                  setCart(currentCart);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <CartBar cart={cart} setCart={setCart} />
    </div>
  );
}

export default Browse;
