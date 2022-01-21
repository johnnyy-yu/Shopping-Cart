function decrement(item, cart, setFunction) {
  let currentCart = [...cart];

  currentCart.forEach((aItem) => {
    if (aItem.id === item.id) aItem.quantity -= 1;

    if (aItem.quantity === 0)
      currentCart = currentCart.filter((cartItem) => cartItem.id !== aItem.id);
  });

  setFunction(currentCart);
}

function increment(item, cart, setFunction) {
  const currentCart = [...cart];

  currentCart.forEach((aItem) => {
    if (aItem.id === item.id) aItem.quantity += 1;
  });

  setFunction(currentCart);
}

export { decrement, increment };
