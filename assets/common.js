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
    // 選択されたカラーを取得
    let getColor = getComputedStyle($color[i - 1]).backgroundColor;
    // それを例文に反映
    for(let p = 1;p <= $label.length;p++){
      $label[p - 1].style.color=(getColor);
    };
    // 選択されたカラーにselectedクラスを追加。それ以外は消去。
    for(let q=1;q < $color.length + 1; q++){
      $color[q - 1].classList.remove("selected");
    }
    $color[i - 1].classList.add("selected");
});
};



