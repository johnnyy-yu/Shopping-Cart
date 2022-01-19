import React, { useState, useEffect } from "react";
import fetchItems from "./fetchItems";

function Browse(props) {
  const { cart, setCart } = props;

  const [items, setItems] = useState([]);

  useEffect(async () => {
    setItems(await fetchItems());
  }, []);

  return (
    <div className="browse-page">
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
    </div>
  );
}

export default Browse;
