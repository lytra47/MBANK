const modal = document.querySelector(".modal1");
const overlay = document.querySelector(".overlay");
const pay = document.querySelector(".payments");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  pay.classList.add("hidden");
  overlay.classList.add("hidden");
};
overlay.addEventListener("click", closeModal);

const paymentsO = function () {
  pay.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
