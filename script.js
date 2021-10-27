const title = document.querySelector(".title");
var produktBtn = document.querySelectorAll(".produkt-btn");
var produktContainer = document.querySelectorAll(".produkt-container");
let btn_active = false;

window.addEventListener("load", () => {
  title.classList.add("loaded");
});

produktBtn.forEach((button) => {
  console.log(button.parentElement);
  const productDiv = button.parentElement;
  button.addEventListener("click", () => {
    if (!btn_active) {
      productDiv.classList.add("test");
      button.classList.add("active");
      button.innerText = "Back";
      btn_active = true;
    } else {
      productDiv.classList.remove("test");
      button.classList.remove("active");
      button.innerText = "Details";
      btn_active = false;
    }
  });
});
