"use strict";

// Selecting Element
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");

const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.innerHTML = 0;
  score1El.innerHTML = 0;

  current0El.innerHTML = 0;
  current1El.innerHTML = 0;

  diceEl.classList.add("hidden");

  player0El.classList.remove("player--winner");
  player0El.classList.add("player--active");

  player1El.classList.remove("player--winner");
  player1El.classList.remove("player--active");
};

init();

// Initialing party
score0El.innerHTML = 0;
score1El.innerHTML = 0;
diceEl.classList.add("hidden");

const changePlayer = function () {
  document.getElementById(`current--${activePlayer}`).innerHTML = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

// Click on roll btn
btnRoll.addEventListener("click", function () {
  if (playing) {
    // Generating a random dice result
    const dice = Math.trunc(Math.random() * 6) + 1;
    // Displaying the dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;
    // Incrementing score
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).innerHTML =
        currentScore;
    } else {
      // Changing game
      changePlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    // Add current score to active player score

    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).innerHTML =
      scores[activePlayer];
    // Check if current score is >= 100
    if (scores[activePlayer] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--active");
      playing = false;
      diceEl.classList.add("hidden");
    } else {
      changePlayer();
    }
  }
});

btnNew.addEventListener("click", init);
