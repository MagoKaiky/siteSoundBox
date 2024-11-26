const loginBtn = document.getElementById("login-btn");
const loginForm = document.getElementById("login-form");
const closeBtn = document.getElementById("close-btn");
const loginTab = document.getElementById("login-tab");
const signupTab = document.getElementById("signup-tab");
const loginFormElement = document.getElementById("login");
const signupFormElement = document.getElementById("signup");

loginBtn.addEventListener("click", () => {
  loginForm.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  loginForm.style.display = "none";
});

loginTab.addEventListener("click", () => {
  loginTab.classList.add("active");
  signupTab.classList.remove("active");
  loginFormElement.classList.add("active");
  signupFormElement.classList.remove("active");
});

signupTab.addEventListener("click", () => {
  signupTab.classList.add("active");
  loginTab.classList.remove("active");
  signupFormElement.classList.add("active");
  loginFormElement.classList.remove("active");
});

document.getElementById("finalizarCompra").addEventListener("click", function(event) {
  ;  

  alert("Compra finalizada!");
  const pagamentoURL = 'https://www.paypal.com/checkoutnow?token=SEU_TOKEN';

});


