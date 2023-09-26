const $addMenu = document.getElementById("js-addMenu");
const $closeButtun = document.querySelector(".close__btn");
const $addTrigger = document.getElementById("js-addTrigger");
const $mask = document.getElementById("mask");
const $color = document.querySelectorAll(".color__item");
const $label = document.getElementsByTagName("label");


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

for(let i=1;i < $color.length + 1; i++){
  $color[i - 1].addEventListener("click" , ()=>{
    let getColor = getComputedStyle($color[i - 1]).backgroundColor;
    getComputedStyle($label[0]).color = (getColor);
    getComputedStyle($label[1]).color = (getColor);
});
};


