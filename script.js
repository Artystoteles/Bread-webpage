const elementy = {
  body: document.body,
  //NAVBAR
  navContainer: document.querySelector(".navbar-container"), //zmiana koloru
  title: document.querySelector(".title"), //zmiana tekstu
  //items
  navList: document.querySelectorAll(".nav-list"),
  firItem: document.querySelector(".a_first_item"), //zmiana tekstu
  scnItem: document.querySelector(".a_second_item"), //zmiana tekstu
  thiItem: document.querySelector(".a_third_item"), //zmiana tekstu
  fouItem: document.querySelector(".a_fourth_item"), //zmiana tekstu
  pChange_btn: document.querySelector(".change-btn"),
  //CONTAINER
  headline: document.querySelector(".headline"), //zmiana tekstu
  underHeadline: document.querySelector(".under_headline"), //zmiana tekstu
  container: document.querySelector(".container"),
  //PPRZERYWNIKI
  przerywnik: document.querySelectorAll(".przerywnik"), //zmienić kolor
  lines: document.querySelectorAll(".lines"),
  //PRODUKTY
  produktBtn: document.querySelectorAll(".produkt-btn"), //zostawić
  produktContainer: document.querySelectorAll(".produkt-container"), //można kolor zmienić
  //first item
  firstItemImage: document.querySelector(".fii"), //zmienić zdjęcie
  firstItemName: document.querySelector(".first-item-name"), //zmienić nazwe
  firstItemDsc: document.querySelector(".first-item-description"), //zmienić opis
  //second item
  secondItemImage: document.querySelector(".sii"), //zmienić zdjęcie
  secondItemName: document.querySelector(".second-item-name"), //zmienić nazwe
  secondItemDsc: document.querySelector(".second-item-description"), //zmienić opis
  //third item
  thirdItemImage: document.querySelector(".tii"), //zmienić zdjęcie
  thirdItemName: document.querySelector(".third-item-name"), //zmienić nazwe
  thirdItemDsc: document.querySelector(".third-item-description"), //zmienić opis
  //fourth item
  fourthItemImage: document.querySelector(".foii"), //zmienić zdjęcie
  fourthItemName: document.querySelector(".fourth-item-name"), //zmienić nazwe
  fourthItemDsc: document.querySelector(".fourth-item-description"), //zmienić opis
  // FOOTER
  footer: document.querySelector(".footer"),
  email: document.querySelector(".email"),
};
console.log(elementy.firstItemImage);

let btn_active = false;

window.addEventListener("load", () => {
  elementy.title.classList.add("loaded");
  elementy.headline.classList.add("loaded");
  elementy.underHeadline.classList.add("loaded");
});

elementy.produktBtn.forEach((button) => {
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

let piekarnia = false;
elementy.pChange_btn.addEventListener("click", () => {
  if (!piekarnia) {
    document.title = "Sweet Candies";
    elementy.container.classList.add("cukiernia");
    elementy.headline.innerText = "Sweet Candies";
    elementy.underHeadline.innerText = "Najlepsza cukiernia w Twojej okolicy!";
    elementy.body.classList.add("cukiernia");
    elementy.navContainer.classList.add("cukiernia");
    elementy.footer.classList.add("cukiernia");

    elementy.navList.forEach((e) => {
      e.classList.add("cukiernia");
    });
    elementy.przerywnik.forEach((e) => {
      e.classList.add("cukiernia");
    });

    elementy.lines.forEach((e) => {
      e.classList.add("cukiernia");
    });

    elementy.email.innerHTML = elementy.email.dataset.alt;
    elementy.title.innerText = elementy.title.dataset.alttitle;

    elementy.firItem.innerText = elementy.firItem.dataset.alt;
    elementy.scnItem.innerText = elementy.scnItem.dataset.alt;
    elementy.thiItem.innerText = elementy.thiItem.dataset.alt;
    elementy.fouItem.innerText = elementy.fouItem.dataset.alt;

    //first item
    elementy.firstItemImage.src = elementy.firstItemImage.dataset.photo;
    elementy.firstItemName.innerText = elementy.firstItemName.dataset.alt;
    elementy.firstItemDsc.innerText = elementy.firstItemDsc.dataset.alt;
    //second item
    elementy.secondItemImage.src = elementy.secondItemImage.dataset.photo;
    elementy.secondItemName.innerText = elementy.secondItemName.dataset.alt;
    elementy.secondItemDsc.innerText = elementy.secondItemDsc.dataset.alt;
    //third item
    elementy.thirdItemImage.src = elementy.thirdItemImage.dataset.photo;
    elementy.thirdItemName.innerText = elementy.thirdItemName.dataset.alt;
    elementy.thirdItemDsc.innerText = elementy.thirdItemDsc.dataset.alt;
    //fourth item
    elementy.fourthItemImage.src = elementy.fourthItemImage.dataset.photo;
    elementy.fourthItemName.innerText = elementy.fourthItemName.dataset.alt;
    elementy.fourthItemDsc.innerText = elementy.fourthItemDsc.dataset.alt;
    piekarnia = true;
  } else {
    elementy.body.classList.remove("cukiernia");
    elementy.navContainer.classList.remove("cukiernia");
    elementy.przerywnik.classList.remove("cukiernia");
    elementy.lines.classList.remove("cukiernia");
    piekarnia = false;
  }
});
