document
  .getElementById("goRegisterFromForgot")
  .addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(".login-form-container").classList.remove("active");
    document.querySelector(".register-form-container").classList.add("active");
  });
document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("regEmail").value.trim();
    const password = document.getElementById("regPassword").value.trim();

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Đăng ký thành công!");
    document
      .querySelector(".register-form-container")
      .classList.remove("active");
    document.querySelector(".login-form-container").classList.add("active");
  });
let loginForm = document.querySelector(".login-form-container");
document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle("active");
};
document.querySelector("#close-login-btn").onclick = () => {
  loginForm.classList.remove("active");
};
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");

    if (email === savedEmail && password === savedPassword) {
      alert("Đăng nhập thành công!");
      window.location.href = "index.html";
    } else {
      alert("Sai email hoặc mật khẩu!");
    }
  });
});
