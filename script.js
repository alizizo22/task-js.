const store = {
  name: "Tech Store",
  city: "Cairo",
  phone: "01012345678"
};
document.getElementById("store-name").innerHTML = store.name;
document.getElementById("store-info").innerHTML = `${store.city} | ${store.phone}`;
const cart = [
  { name: "Mouse", price: 250, qty: 2 },
  { name: "Keyboard", price: 450, qty: 1 },
  { name: "Headphones", price: 500, qty: 1 }
];
   function renderCart(cartData, cartId, countId, totalId) {
   const cartUl = document.getElementById(cartId);
   cartUl.innerHTML = "";
  for (let i = 0; i < cartData.length; i++) {
    const itemTotal = cartData[i].price * cartData[i].qty;
   cartUl.innerHTML += `<li>${cartData[i].name.toUpperCase()} - ${cartData[i].price} EGP x ${cartData[i].qty} = ${itemTotal} EGP</li>`;
  }
  document.getElementById(countId).innerHTML = `You have ${cartData.length} items in your cart`;

  let total = 0;
  for (let i = 0; i < cartData.length; i++) {
    total += cartData[i].price * cartData[i].qty;
  }
  let shippingText = "";
  if (total > 1000) {
    shippingText = "You got free shipping!";
  } else {
    const remaining = (1000 - total).toFixed(2);
    shippingText = `Add ${remaining} EGP more for free shipping`;
  }
  document.getElementById(totalId).innerHTML = `Total: ${total.toFixed(2)} EGP<br>${shippingText}`;
}
renderCart(cart, "cart", "count", "total");
cart.push({ name: "USB Cable", price: 100, qty: 2 });
cart.unshift({ name: "Free Gift", price: 0, qty: 1 });
cart.pop();
cart.shift();
document.body.innerHTML += `

  <h2>Your Cart (After Updates)</h2>
  <ul id="cart-updated"></ul>
  <p id="count-updated"></p>
  <p id="total-updated"></p>
`;
renderCart(cart, "cart-updated", "count-updated", "total-updated");