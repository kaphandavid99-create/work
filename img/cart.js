const product = {
  name: document.getElementById("product-name").innerText,
  price: Number(
    document.getElementById("product-price").getAttribute("data-price")
  ),
  image: document.getElementById("MainImg").src,
  size: document.getElementById("size").value,
  quantity: Number(document.getElementById("quantity").value)
};