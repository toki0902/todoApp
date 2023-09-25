const $addMenu = document.getElementById("js-addMenu");
const $addTrigger = document.getElementById("js-addTrigger");
const $mask = document.getElementById("mask");

$addTrigger.addEventListener("click", function () {
  $addMenu.classList.add("open");
  $mask.classList.add("open");
});
