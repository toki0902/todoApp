const $addMenu = document.getElementById("js-addMenu");
const $closeButtun = document.querySelector(".close__btn");
const $addTrigger = document.getElementById("js-addTrigger");
const $mask = document.getElementById("mask");
const $color = document.querySelectorAll(".color__item");
const $label = document.getElementsByTagName("label");
const $addButtun = document.querySelector(".add-task__btn");
const $taskList = document.querySelector(".task__list");
const $dump = document.querySelector(".dump");

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
for (let i = 1; i < $color.length + 1; i++) {
  $color[i - 1].addEventListener("click", () => {
    // 選択されたカラーを取得
    let getColor = getComputedStyle($color[i - 1]).backgroundColor;
    // それを例文に反映
    for (let label of document.querySelectorAll(".example__list label")) {
      label.style.color = getColor;
    }
    // 選択されたカラーにselectedを追加。それ以外は消去。
    for (let q = 1; q < $color.length + 1; q++) {
      $color[q - 1].removeAttribute("id", "selected");
    }
    $color[i - 1].setAttribute("id", "selected");
  });
}

// タスク追加のボタン
$addButtun.addEventListener("click", () => {
  // 必要な要素を取得
  let $userText = $addMenu.querySelector(".user__input").value;
  const $selectedColor = $addMenu.querySelector("#selected");
  if ($userText !== "") {
    // 要素を生成
    const newItem = document.createElement("li");
    const newInput = document.createElement("input");
    const newLabel = document.createElement("label");
    // クラス、属性、eventを付与
    newLabel.textContent = $userText;
    newLabel.setAttribute(
      "for",
      "box-" + document.querySelectorAll("input").length
    );
    newLabel.style.color = getComputedStyle($selectedColor).backgroundColor;
    newItem.classList.add("task__item");
    newInput.setAttribute(
      "id",
      "box-" + document.querySelectorAll("input").length
    );
    newInput.setAttribute("type", "checkbox");
    // 要素をリストに追加
    $taskList.appendChild(newItem);
    newItem.appendChild(newInput);
    newItem.appendChild(newLabel);
    // 状態をリセット
    $userText = $addMenu.querySelector(".user__input").value = "";
  }

  // trush機能
  $dump.addEventListener("click", function () {
    const $currentLabel = $taskList.querySelectorAll("label");
    $taskList.querySelectorAll("input:checked").forEach(function (used) {
      while (used.closest(".task__item").lastChild) {
        used
          .closest(".task__item")
          .removeChild(used.closest(".task__item").lastChild);
      }
    });
  });
});
