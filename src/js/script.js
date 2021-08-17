const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1.2,

  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

const buttonBrands = document.querySelector(".button__brands");
const buttonHidden = document.querySelectorAll(".brands__display--none");
const buttonNameBrands = document.querySelector(".brands__span");
const brandsImg = document.querySelector(".brands__img");
const buttonHiddenIpad = document.querySelectorAll(".brands__display--ipad");

hideButtonBrands();

function hideButtonBrands() {
  buttonHidden.forEach((item) => {
    if (item.style.display != "none") {
      item.style.display = "none";
      buttonNameBrands.textContent = "Показать все";
      brandsImg.src = "./img/main/icon.svg";
      buttonHiddenIpad.forEach((button) => {
        button.classList.remove("display--flex");
      });
    } else {
      item.style.display = "flex";
      buttonNameBrands.textContent = "Скрыть";
      brandsImg.src = "./img/main/icon2.svg";
      buttonHiddenIpad.forEach((button) => {
        button.classList.add("display--flex");
      });
    }
  });
}
buttonBrands.addEventListener("click", hideButtonBrands);

const buttonEquipment = document.querySelector(".button__equipment");
const equipmentItem = document.querySelectorAll(".equipment__display--none");
const buttonNameEquipment = document.querySelector(".equipment__span");
const equipmentImg = document.querySelector(".equipment__img");
const equipmentItemIpad = document.querySelector(".equipment__display--ipad");
hideButtonEquipment();

function hideButtonEquipment() {
  equipmentItem.forEach((item) => {
    if (item.style.display != "none") {
      item.style.display = "none";
      buttonNameEquipment.textContent = "Показать все";
      equipmentItemIpad.classList.remove("display--block");
      equipmentImg.src = "./img/main/icon.svg";
    } else {
      item.style.display = "block";
      buttonNameEquipment.textContent = "Скрыть";
      equipmentItemIpad.classList.add("display--block");
      equipmentImg.src = "./img/main/icon2.svg";
    }
  });
}
buttonEquipment.addEventListener("click", hideButtonEquipment);

const contentBody = document.querySelector(".content__body");
const hiddenContentText = contentBody.querySelector(".content__text--hidden");
const buttonContent = contentBody.querySelector(".content__button");
const buttonContentName = buttonContent.querySelector(".button__name");
const buttonContentImg = buttonContent.querySelector(".content__button-img")

const contentText768 = contentBody.querySelector(".content__768");
const contentText320 = contentBody.querySelector(".content__320");

function hideContent() {

  if (hiddenContentText.style.display != "none") {
    hiddenContentText.style.display = "none";
    buttonContentName.textContent = 'Читать далее';
    buttonContentImg.src = "./img/main/icon.svg";

    if (window.innerWidth <= 768) {
      contentText768.style.display = "none";
    }
    if (window.innerWidth <= 320) {
      contentText320.style.display = "none";
      contentText768.style.display = "none";
    }
  } else {
    hiddenContentText.style.display = "block";
    buttonContentName.textContent = 'Скрыть';
    buttonContentImg.src = "./img/main/icon2.svg";

    if (window.innerWidth <= 768) {
      contentText768.style.display = "inline";
    }
    if (window.innerWidth <= 320) {
      contentText320.style.display = "inline";
      contentText768.style.display = "inline";
    }
  }
}
hideContent();
buttonContent.addEventListener("click", hideContent);


function hiddenItemIpad() {
  if (window.innerWidth <= 768) {
    equipmentItemIpad.classList.add("equipment__display--none");
    buttonHiddenIpad.forEach((button) => {
      button.classList.add("brands__display--none");
    });
    contentText320.style.display = "inline";
    contentText768.style.display = "none";
    aside.classList.add('not-visible');
  }
  if (window.innerWidth > 768) {
    equipmentItemIpad.classList.remove("equipment__display--none");
    buttonHiddenIpad.forEach((button) => {
      button.classList.remove("brands__display--none");
    });
    contentText320.style.display = "inline";
    contentText768.style.display = "inline";
    aside.classList.remove('not-visible');
  }
  if (window.innerWidth <= 320) {
    contentText320.style.display = "none";
    contentText768.style.display = "none";
    aside.classList.add('not-visible');
  }
}

hiddenItemIpad();
window.addEventListener("resize", hiddenItemIpad);