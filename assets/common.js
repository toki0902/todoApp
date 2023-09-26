const $addMenu = document.getElementById("js-addMenu");
const $closeButtun = document.querySelector(".close__btn");
const $addTrigger = document.getElementById("js-addTrigger");
const $mask = document.getElementById("mask");

$addTrigger.addEventListener("click", function () {
  $addMenu.classList.add("open");
  $mask.classList.add("open");
});

$closeButtun.addEventListener("click", function () {
  $addMenu.classList.remove("open");
  $mask.classList.remove("open");
});

$mask.addEventListener("click", () => {
  $addMenu.classList.remove("open");
  $mask.classList.remove("open");
});
