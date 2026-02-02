const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
if (bar) {
    bar.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
}


const cart = JSON.parse(localStorage.getItem("cart")) || [];
const tbody = document.querySelector("#cart tbody");

let cartTotal = 0;

tbody.innerHTML = "";

cart.forEach((item, index) => {
  const subtotal = item.price * item.quantity;
  cartTotal += subtotal;

  tbody.innerHTML += `
    <tr>
      <td>
        <a href="#" onclick="removeItem(${index})">
          <i class="far fa-times-circle"></i>
        </a>
      </td>
      <td><img src="${item.image}" width="70"></td>
      <td>${item.name} <br> Size: ${item.size}</td>
      <td>$${item.price}</td>
      <td>${item.quantity}</td>
      <td>$${subtotal}</td>
    </tr>
  `;
});

// Update totals
document.querySelector("#subtotal table tr:nth-child(1) td:nth-child(2)").innerText =
  `$${cartTotal}`;

document.querySelector("#subtotal table tr:nth-child(3) td:nth-child(2)").innerText =
  `$${cartTotal}`;

// Remove item function
function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}

document.getElementById("checkout-btn")?.addEventListener("click", () => {
  if (!localStorage.getItem("cart") || JSON.parse(localStorage.getItem("cart")).length === 0) {
    alert("Your cart is empty");
    return;
  }

  window.location.href = "checkout.html";
});

document.querySelector("#mobile a")?.addEventListener("click", () => {
  window.location.href = "cart.html";
});

function revealOnScroll() {
  const sections = document.querySelectorAll("section"); // all sections

  sections.forEach(section => {
    const windowHeight = window.innerHeight;
    const elementTop = section.getBoundingClientRect().top;

    // Animate if section is visible
    if (elementTop < windowHeight - 100) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

// Trigger once on load in case first section is visible
window.addEventListener("load", revealOnScroll);