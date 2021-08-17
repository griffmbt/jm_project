const burgerButton = document.querySelector(".header__button--burger");
const closeBurgerButton = document.querySelector(".button--burger-close");
export const aside = document.querySelector(".aside");

const toggleAside = function () {
  aside.classList.toggle("not-visible");
};

burgerButton.addEventListener("click", (e) => {
  toggleAside();
});

closeBurgerButton.addEventListener("click", (e) => {
  toggleAside();
});

window.addEventListener("click", outsideClick);

function outsideClick(e) {
  if (e.target == aside) {
    toggleAside();
  }
}
