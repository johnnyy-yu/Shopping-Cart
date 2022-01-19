export default async function fetchItems() {
  try {
    const url = "https://fakestoreapi.com/products/category/electronics";
    const response = await fetch(url);
    const items = await response.json();
    console.log(items);
    return items;
  } catch (e) {
    console.log(e);
    return "Error loading items";
  }
}
