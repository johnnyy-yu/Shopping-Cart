export default async function fetchItems() {
  try {
    const url = "https://fakestoreapi.com/products/category/electronics";
    const response = await fetch(url);
    const items = await response.json();
    return items;
  } catch (e) {
    return console.log(e);
  }
}
