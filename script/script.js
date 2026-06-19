const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
const carts = document.querySelectorAll(".cart");

carts.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const product = btn.closest(".pro");

    const name = product.querySelector("h3").innerText;
    const price = product.querySelector("h4").innerText;
    const image = product.querySelector("img").src;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
      name,
      price,
      image,
      quantity: 1,
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Đã thêm " + name + " vào giỏ hàng");
  });
});
