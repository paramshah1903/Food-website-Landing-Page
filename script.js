"use strict";

const modalButton = document.querySelector(".header__button");
const modalWindow = document.querySelector(".modal__form");
const overlay = document.querySelector(".overlay");
const closeButton = document.querySelector(".close-btn");
const navigationIcon = document.querySelector(".navigation__icon");
const navigationBackground = document.querySelector(".navigation__background");

modalButton.addEventListener("click", function () {
  modalWindow.classList.remove("hidden");
  modalWindow.classList.add("animate");
  // modalWindow.classList.add("show");
  overlay.classList.remove("hidden");
  overlay.classList.add("animate");
});
closeButton.addEventListener("click", function () {
  modalWindow.classList.add("hidden");
  modalWindow.classList.remove("animate");
  overlay.classList.add("hidden");
  overlay.classList.remove("animate");
});
overlay.addEventListener("click", function () {
  modalWindow.classList.add("hidden");
  modalWindow.classList.add("fadeout");
  modalWindow.classList.remove("animate");
  overlay.classList.add("hidden");
  overlay.classList.remove("animate");
});

document.addEventListener("keydown", function (e) {
  if (e.key == "Escape" && !modalButton.classList.contains("hidden")) {
    modalWindow.classList.add("hidden");
    modalWindow.classList.remove("animate");
    overlay.classList.add("hidden");
    overlay.classList.remove("animate");
  }
});

navigationIcon.addEventListener("click", function () {
  navigationBackground.classList.remove("hidden");
  navigationBackground.classList.add("animate");
});

document.addEventListener("keydown", function (e) {
  if (e.key == "Escape" && !navigationBackground.classList.contains("hidden")) {
    navigationBackground.classList.add("hidden");
    navigationBackground.classList.remove("animate");
    // navigationBackground.classList.add("fadeout");
  }
});
