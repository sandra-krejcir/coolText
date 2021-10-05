"use strict";
let maxIterations;
let iterator;
const theText = document.querySelector("#coolText").textContent.trim();

init();

function init() {
  console.log("function init()");
  maxIterations = theText.length + 1;
  iterator = 0;

  document.querySelector("#coolText").innerHTML = "";
  loop();
}

function loop() {
  console.log("function loop()", iterator);
  console.log("theText[iterator]", theText[iterator]);
  iterator++;

  if (iterator < maxIterations) {
    let letter = document.createElement("span");
    letter.textContent += theText[iterator - 1];

    document.querySelector("h1").appendChild(letter);
    loop();
  }
  document.querySelectorAll("span").forEach((elm, i) => {
    elm.classList.add("textAnimation");
    elm.style.animationDelay = `${i / 15}s`;
  });
}
