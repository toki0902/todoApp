const $addMenu = document.getElementById("js-addMenu");
const $closeButtun = document.querySelector(".close__btn");
const $addTrigger = document.getElementById("js-addTrigger");
const $mask = document.getElementById("mask");
const $color = document.querySelectorAll(".color__item");
const $label = document.getElementsByTagName("label");
const $addButtun = document.querySelector(".add-task__btn");
const $taskList = document.querySelector(".task__list");

// addmenu表示ボタン
$addTrigger.addEventListener("click", function () {
  $addMenu.classList.add("open");
  $mask.classList.add("open");
});
// addmenu非表示ボタン
$closeButtun.addEventListener("click", function () {
  $addMenu.classList.remove("open");
  $mask.classList.remove("open");
});
// addmenu非表示ボタン
$mask.addEventListener("click", () => {
  $addMenu.classList.remove("open");
  $mask.classList.remove("open");
});

// カラー選択機能
for(let i=1;i < $color.length + 1; i++){
  $color[i - 1].addEventListener("click" , ()=>{
    // 選択されたカラーを取得
    let getColor = getComputedStyle($color[i - 1]).backgroundColor;
    // それを例文に反映
    for(let p = 1;p <= $label.length;p++){
      $label[p - 1].style.color=(getColor);
    };
    // 選択されたカラーにselectedを追加。それ以外は消去。
    for(let q=1;q < $color.length + 1; q++){
      $color[q - 1].removeAttribute("id","selected");
    }
    $color[i - 1].setAttribute("id","selected");
});
};

$addButtun.addEventListener('click', ()=>{
  // 必要な要素を取得
  let $userText = $addMenu.querySelector(".user__input").value;
  const $selectedColor = $addMenu.querySelector("#selected");
  // 要素を生成
  const newItem = document.createElement("li");
  const newInput = document.createElement("input");
  const newLabel = document.createElement("label");
  // クラス、属性を付与
  newLabel.textContent = ($userText);
  newLabel.setAttribute("for","box-"+(document.querySelectorAll("input").length));
  newLabel.style.color = ($selectedColor);
  newItem.classList.add("task__item");
  newInput.setAttribute("id","box-"+(document.querySelectorAll("input").length));
  newInput.setAttribute("type", "checkbox");
  // 要素をリストに追加
  $taskList.appendChild(newItem);
  newItem.appendChild(newInput);
  newItem.appendChild(newLabel);
  // 状態をリセット
  $userText = $addMenu.querySelector(".user__input").value = ("");
});


