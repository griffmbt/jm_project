import { body, aside } from "./index";

const modals = document.querySelectorAll(".modal");
const modalBody = document.querySelectorAll(".modal__body");

const chatButtonHeader = document.querySelector(".header__button--chat");
const chatButtonAside = document.querySelector(".button--chat");

const callButtonHeader = document.querySelector(".header__button--call");
const callButtonAside = document.querySelector(".button--call");

const modalButton = document.querySelectorAll(".modal__button");
const modalButtonClose = document.querySelectorAll(".modal__close");

const modalFeedback = document.querySelector(".modal__feedback");
const modalCall = document.querySelector(".modal__call");

const addClassModalBody = function () {
  modalBody.forEach((body) => {
    body.classList.add("appear__right");
  });
};
const removeClassModalBody = function () {
  modalBody.forEach((body) => {
    body.classList.remove("appear__right");
  });
};

const removeFeedback = function () {
  modalFeedback.classList.remove("not-visible");
  body.classList.add("restrictScroll");
  addClassModalBody();
};
const removeCall = function () {
  modalCall.classList.remove("not-visible");
  body.classList.add("restrictScroll");
  addClassModalBody();
};

const addFeedback = function () {
  modalFeedback.classList.add("not-visible");
  removeClassModalBody();
  if (window.innerWidth <= 768) {
    if (!aside.classList.contains("not-visible")) {
      body.classList.add("restrictScroll");
    } else {
      body.classList.remove("restrictScroll");
    }
  } else {
    body.classList.remove("restrictScroll");
  }
};

const addCall = function () {
  modalCall.classList.add("not-visible");
  removeClassModalBody();
  if (window.innerWidth <= 768) {
    if (!aside.classList.contains("not-visible")) {
      body.classList.add("restrictScroll");
    } else {
      body.classList.remove("restrictScroll");
    }
  } else {
    body.classList.remove("restrictScroll");
  }
};

chatButtonHeader.addEventListener("click", () => {
  removeFeedback();
});
chatButtonAside.addEventListener("click", () => {
  removeFeedback();
});

callButtonHeader.addEventListener("click", () => {
  removeCall();
});
callButtonAside.addEventListener("click", () => {
  removeCall();
});

modalButtonClose.forEach((btn) => {
  btn.addEventListener("click", () => {
    addFeedback();
    addCall();
  });
});

modalButton.forEach((btn) => {
  btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    addFeedback();
    addCall();
  });
});

window.addEventListener("click", outsideClickModal);

function outsideClickModal(e) {
  modals.forEach((modal) => {
    if (e.target == modal) {
      addFeedback();
      addCall();
    }
  });
}
