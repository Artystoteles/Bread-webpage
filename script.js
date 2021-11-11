const body = document.body; //zmiana koloru
const element = document.body.querySelectorAll("*");
console.log(element);

//NAVBAR
const navLists = [element[7], element[16], element[27]];
const przerywniki = [element[39], element[77]];
const linie = [element[43], element[81]];
const produkt_btns = [element[52], element[60], element[68], element[76]];

let btn_active = false;

window.addEventListener("load", () => {
  element[1].classList.add("loaded");
  element[36].classList.add("loaded");
  element[37].classList.add("loaded");
});

produkt_btns.forEach((button) => {
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

element[2].addEventListener("click", () => {
  if (!piekarnia) {
    document.title = "Sweet Candies";
    element[35].classList.add("cukiernia");
    element[36].innerText = element[36].dataset.alt;
    element[37].innerText = element[37].dataset.alt;
    body.classList.add("cukiernia");
    element[0].classList.add("cukiernia");
    element[89].classList.add("cukiernia");

    navLists.forEach((e) => {
      e.classList.add("cukiernia");
    });
    przerywniki.forEach((e) => {
      e.classList.add("cukiernia");
    });

    linie.forEach((e) => {
      e.classList.add("cukiernia");
    });

    element[92].innerHTML = element[92].dataset.alt;
    element[1].innerText = "Sweet Candies";

    console.log(element[18].dataset.alt);
    console.log(element[18].innerText);

    element[18].innerHTML = element[18].dataset.alt;
    element[20].innerHTML = element[20].dataset.alt;
    element[22].innerHTML = element[22].dataset.alt;
    element[24].innerHTML = element[24].dataset.alt;

    //first item
    element[47].src = element[47].dataset.photo;
    element[49].innerText = element[49].dataset.alt;
    element[51].innerText = element[51].dataset.alt;
    //second item
    element[55].src = element[55].dataset.photo;
    element[57].innerText = element[57].dataset.alt;
    element[59].innerText = element[59].dataset.alt;
    //third item
    element[63].src = element[63].dataset.photo;
    element[65].innerText = element[65].dataset.alt;
    element[67].innerText = element[67].dataset.alt;
    //fourth item
    element[71].src = element[71].dataset.photo;
    element[73].innerText = element[73].dataset.alt;
    element[75].innerText = element[75].dataset.alt;
    piekarnia = true;
  } else {
    body.classList.remove("cukiernia");
    element[0].classList.remove("cukiernia");
    przerywniki.forEach((e) => {
      e.classList.remove("cukiernia");
    });
    linie.forEach((e) => {
      e.classList.remove("cukiernia");
    });
    piekarnia = false;
  }
});
