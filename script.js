const title = document.querySelector(".title");
const produktBtn = document.querySelector(".produkt-btn");
let btn_active = false;
window.addEventListener("load", () => {
  title.classList.add("loaded");
});

produktBtn.addEventListener("click", () => {
  if (!btn_active) {
    produktBtn.innerText = "Back";
    btn_active = true;
  } else {
    produktBtn.innerText = "Details";
    btn_active = false;
  }
});
