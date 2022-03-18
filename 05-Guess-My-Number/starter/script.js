"use strict";

/*
console.log(document.querySelector(".message").innerHTML);

document.querySelector(".message").textContent = "🏆 Correct Number !";

document.querySelector(".number").textContent = "13";
document.querySelector(".score").textContent = "17";

document.querySelector(".guess").value = "10";
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // No input
  if (!guess) {
    displayMessage("⛔️ Not a number");

    // 1 - Player win
  } else if (secretNumber === guess) {
    displayMessage("🎉 Correct number !");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").classList.add("win-background");
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? "📈 Too high ..." : "📉 Too low ..."
      );
      score--;
      document.querySelector(".score").textContent = score;
      // Player lose
    } else {
      displayMessage("😭 Game over ...");
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").classList.add("lose-background");
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  displayMessage("Start guessing ...");
  document.querySelector(".number").textContent = "?";
  document
    .querySelector("body")
    .classList.remove("lose-background", "win-background");
});
