const chatButtonHeader = document.querySelector(".header__button--chat");
const chatButtonAside = document.querySelector(".button--chat");

const callButtonHeader = document.querySelector(".header__button--call");
const callButtonAside = document.querySelector(".button--call");

const modalButton = document.querySelectorAll(".modal__button");
const modalButtonClose = document.querySelectorAll(".modal__close");

const modalFeedback = document.querySelector(".modal__feedback");
const modalCall = document.querySelector(".modal__call");

chatButtonHeader.addEventListener("click", () => {
  modalFeedback.classList.remove("not-visible");
});
chatButtonAside.addEventListener("click", () => {
  modalFeedback.classList.remove("not-visible");
});

callButtonHeader.addEventListener("click", () => {
  modalCall.classList.remove("not-visible");
});
callButtonAside.addEventListener("click", () => {
  modalCall.classList.remove("not-visible");
});

modalButtonClose.forEach((btn) => {
  btn.addEventListener("click", () => {
    modalFeedback.classList.add("not-visible");
    modalCall.classList.add("not-visible");
  });
});

modalButton.forEach((btn) => {
  btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    modalFeedback.classList.add("not-visible");
    modalCall.classList.add("not-visible");
  });
});
