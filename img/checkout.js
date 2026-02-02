
document.getElementById("checkout-form").addEventListener("submit", (e) => {
  e.preventDefault();

  alert("Order placed successfully!");

  localStorage.removeItem("cart"); // clear cart
  window.location.href = "index.html";
});

document.getElementById("checkout-form").addEventListener("submit", (e) => {
  e.preventDefault();

  localStorage.removeItem("cart"); // clear cart
  window.location.href = "thankyou.html";
});





const cart = JSON.parse(localStorage.getItem("cart")) || [];
const summary = document.getElementById("order-summary");
const totalEl = document.getElementById("order-total");

let total = 0;
summary.innerHTML = "";

if (cart.length === 0) {
  summary.innerHTML = "<p>Your cart is empty</p>";
} else {
  cart.forEach(item => {
    const subtotal = item.price * item.quantity;
    total += subtotal;

    summary.innerHTML += `
      <p>
        ${item.name} (x${item.quantity}) — $${subtotal.toFixed(2)}
      </p>
    `;
  });
}

totalEl.innerText = `Total: $${total.toFixed(2)}`;