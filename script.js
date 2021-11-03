const body = document.body; //zmiana koloru

//NAVBAR
const navContainer = document.querySelector(".navbar-container"); //zmiana koloru
const title = document.querySelector(".title"); //zmiana tekstu
//items
const navList = document.querySelectorAll(".nav-list");
const firItem = document.querySelector(".first_item"); //zmiana tekstu
const scnItem = document.querySelector(".second_item"); //zmiana tekstu
const thiItem = document.querySelector(".third_item"); //zmiana tekstu
const fouItem = document.querySelector(".fourth_item"); //zmiana tekstu
const pChange_btn = document.querySelector(".change");
//CONTAINER
const headline = document.querySelector(".headline"); //zmiana tekstu
const underHeadline = document.querySelector(".under_headnile"); //zmiana tekstu
const container = document.querySelector(".container");
//PPRZERYWNIKI
const przerywnik = document.querySelectorAll(".przerywnik"); //zmienić kolor
const lines = document.querySelectorAll(".lines");

//PRODUKTY

const produktBtn = document.querySelectorAll(".produkt-btn"); //zostawić
const produktContainer = document.querySelectorAll(".produkt-container"); //można kolor zmienić
//first item
const firstItemImage = document.querySelector(".first-item-image"); //zmienić zdjęcie
const firstItemName = document.querySelector(".first-item-name"); //zmienić nazwe
const firstItemDsc = document.querySelector(".first-item-description"); //zmienić opis

//second item
const secondItemImage = document.querySelector(".second-item-image"); //zmienić zdjęcie
const secondItemName = document.querySelector(".second-item-name"); //zmienić nazwe
const secondItemDsc = document.querySelector(".second-item-description"); //zmienić opis

//third item
const thirdItemImage = document.querySelector(".third-item-image"); //zmienić zdjęcie
const thirdItemName = document.querySelector(".third-item-name"); //zmienić nazwe
const thirdItemDsc = document.querySelector(".third-item-description"); //zmienić opis

//fourth item
const fourthItemImage = document.querySelector(".fourth-item-image"); //zmienić zdjęcie
const fourthItemName = document.querySelector(".fourth-item-name"); //zmienić nazwe
const fourthItemDsc = document.querySelector(".fourth-item-description"); //zmienić opis

let btn_active = false;

window.addEventListener("load", () => {
  title.classList.add("loaded");
});

produktBtn.forEach((button) => {
  const productDiv = button.parentElement;
  button.addEventListener("click", () => {
    if (!btn_active) {
      console.log(headline.innerText);
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

//tutaj pizgam magie
let piekarnia = false;

pChange_btn.addEventListener("click", () => {
  if (!piekarnia) {
    document.title = "Sweet Candies";
    container.classList.add("cukiernia");
    headline.innerText = "Sweet Candies";
    underHeadline.innerText = "Best cukiernia in your okolica";
    body.classList.add("cukiernia");
    navContainer.classList.add("cukiernia");

    navList.forEach((e) => {
      e.classList.add("cukiernia");
    });
    przerywnik.forEach((e) => {
      e.classList.add("cukiernia");
    });

    lines.forEach((e) => {
      e.classList.add("cukiernia");
    });

    title.innerText = "Sweet Candies";

    firItem.innerText = "Donut";
    scnItem.innerText = "Muffin";
    thiItem.innerText = "Rogalik";
    fouItem.innerText = "Cookie";

    //first item
    firstItemImage.innerHTML = `<img
    class="product-image"
    src="../images/donut-bgl.png "
    width="auto"
    height="auto"
  />`;
    firstItemName.innerText = "Donut";
    firstItemDsc.innerText = "Just Donut. What did you expected?";
    //second item
    secondItemImage.innerHTML = `<img
    class="product-image"
    src="../images/muffin-bgl.png "
    width="auto"
    height="auto"
  />`;
    secondItemName.innerText = "Muffin";
    secondItemDsc.innerText = "Just Muffin. What did you expected?";
    //third item
    thirdItemImage.innerHTML = `<img
    class="product-image"
    src="../images/rogalik-bgl.png "
    width="auto"
    height="auto"
  />`;
    thirdItemName.innerText = "Rogalik";
    thirdItemDsc.innerText = "Just Rogalik. What did you expected?";
    //fourth item
    fourthItemImage.innerHTML = `<img
    class="product-image"
    src="../images/cookie-bgl.png "
    width="auto"
    height="auto"
  />`;
    fourthItemName.innerText = "Cookie";
    fourthItemDsc.innerText = "Just Cookie. What did you expected?";
    piekarnia = true;
  } else {
    body.classList.remove("cukiernia");
    navContainer.classList.remove("cukiernia");
    przerywnik.classList.remove("cukiernia");
    lines.classList.remove("cukiernia");
    piekarnia = false;
  }
});
