document.addEventListener("click", (e) => {
  if (
    e.target.closest(".add-to-cart-btn") ||
    e.target.closest(".card-cart-icon")
  ) {
    const card = e.target.closest(".product-card");

    const id = card.dataset.id;
    const name = card.dataset.name;
    const price = parseFloat(card.dataset.price);
    const image = card.dataset.image;

    addToCart(id, name, price, image, 1);
  }
});