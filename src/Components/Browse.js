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
      <div className="browse">
        {items.map((item) => (
          <div key={item.id} className="item">
            <img src={item.image} alt="pic" className="item-pic" />
            <div className="item-name">{item.title}</div>
            <div className="item-price">{`$${item.price}`}</div>
            <button
              type="submit"
              onClick={() => {
                const currentCart = [...cart];
                const thisItem = {
                  id: item.id,
                  image: item.image,
                  name: item.title,
                  price: item.price,
                };
                currentCart.push(thisItem);

                setCart(currentCart);
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <CartBar cart={cart} />
    </div>
  );
}

export default Browse;
