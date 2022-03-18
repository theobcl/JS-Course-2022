"use strict";



///////////////////////////////
// Challenge 4

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

const buttonEl = document.querySelector("button");

buttonEl.addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");

  for (const [i, row] of rows.entries()) {
    const [firstPart, secondPart] = row.toLowerCase().trim().split('_');
    const secondPartUpper = secondPart[0].toUpperCase() + secondPart.slice(1) ;
    const result = firstPart + secondPartUpper;
    console.log(`${result.padEnd(20)}${"✅".repeat(i + 1)}`);
  }

});


/*

///////////////////////////////
// Challenge 3

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);

// Exercice 1
const events = [...new Set(gameEvents.values())];
console.log(events);

// Exercice 2
gameEvents.delete(64);
console.log(gameEvents);

// Exercice 3
const time = [...gameEvents.keys()].pop();
const average = time / gameEvents.size;
console.log(`An event happened, on
average, every ${average} minutes`);

// Exercice 4
for (const [index, event] of gameEvents) {
  const periodStr = index <= 45 ? "FIRST" : "SECOND";
  console.log(`[${periodStr} HALF] ${index}: ${event}`);
}

/*

///////////////////////////////
// Challenge 2

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Exercice 1
for (const [index, scorer] of game.scored.entries()) {
  console.log(`Goal ${index + 1} : ${scorer}`);
}

// Exercice 2
const oddsValues = Object.values(game.odds);
let average = 0;

for (const odd of oddsValues) average += odd;
average /= oddsValues.length;
console.log(average);

// Exercice 3
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory of ${game[team]}`;
  console.log(`Odd of ${teamStr} : ${odd}`);
}

// Bonus:
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);



///////////////////////////////
// Challenge 1

// Exercice 1 :
const [players1, players2] = game.players;

console.log(players1);
console.log(players2);

// Exercice 2 :
const [gk, ...fieldPlayers] = players1;

console.log(gk);
console.log(fieldPlayers);

// Exercice 3 :
const allPlayers = [...players1, ...players2];

console.log(allPlayers);

// Exercice 4 :
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

console.log(players1Final);

// Exercice 5 :
const { team1, x: draw, team2 } = game.odds;

console.log(team1, draw, team2);

// Exercice 6 :
const printGoals = function (...players) {
  console.log(...players, players.length);
};

const players = ["Davies", "Muller", "Lewandowski", "Kimmich"];

printGoals(...players);

// Exercice 7 :
team1 < team2 && console.log("Team 1 should Win");
team1 > team2 && console.log("Team 2 should Win");

*/
