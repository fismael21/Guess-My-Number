"use strict";

/* ----------------------------------------------------------------------------
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct Number!";
document.querySelector(".number").textContent = "13";
document.querySelector(".score").textContent = "10";
document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
---------------------------------------------------------------------------- */

let secretNumber = Math.trunc(20 * Math.random()) + 1;
//console.log(secretNumber);
let score = 20;
let highscore = 0;

const check = function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "No number!";

    //When the player wins the game
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct nummber!";
    document.querySelector("body").style.backgroundColor = "#009432";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "Too high" : "Too low";

      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector("body").style.backgroundColor = "#EA2027";
      document.querySelector(".message").textContent = "You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
};

document.querySelector(".check").addEventListener("click", check);

document.addEventListener("keydown", function (evt) {
  if (evt.key == "Enter") {
    check();
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(20 * Math.random()) + 1;
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
});
