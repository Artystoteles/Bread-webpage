const title = document.querySelector(".title");
var produktBtn = document.querySelectorAll(".produkt-btn");
var produktContainer = document.querySelectorAll(".produkt-container");
let btn_active = false;

window.addEventListener("load", () => {
  title.classList.add("loaded");
});

produktBtn.forEach((button) => {
  button.addEventListener("click", () => {
    if (!btn_active) {
      button.classList.add("active");
      button.innerText = "Back";
      btn_active = true;
    } else {
      button.classList.remove("active");
      button.innerText = "Details";
      btn_active = false;
    }
  });
});
