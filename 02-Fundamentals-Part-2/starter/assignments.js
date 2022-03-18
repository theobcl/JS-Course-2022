"use strict";
/*
// Assignement 1
// function
function describeCountry(country, population, capitalCity) {
  let description = `${country} has ${population} million people and its capital city is ${capitalCity}`;
  return description;
}

const descriptionFrance = describeCountry("France", 70, "Paris");
const descriptionPortugal = describeCountry("Portugal", 6, "Lisbon");
const descriptionGermany = describeCountry("Germany", 90, "Berlin");

console.log(descriptionFrance);
console.log(descriptionPortugal);
console.log(descriptionGermany);

// Assignment 2
const worldPopulation = 7900;
const francePopulation = 70;
const portugalPopulation = 6;
const germanyPopulation = 90;

// function declaration
function pourcentageOfWorld1(population) {
  return (population / worldPopulation) * 100;
}

console.log(pourcentageOfWorld1(francePopulation));
console.log(pourcentageOfWorld1(portugalPopulation));
console.log(pourcentageOfWorld1(germanyPopulation));

// function expression
const pourcentageOfWorld2 = function (population) {
  return (population / worldPopulation) * 100;
}

console.log(pourcentageOfWorld2(francePopulation));
console.log(pourcentageOfWorld2(portugalPopulation));
console.log(pourcentageOfWorld2(germanyPopulation));

// Assignment 3
// arrow function
const pourcentageOfWorld3 = population => (population / worldPopulation) * 100;
console.log(pourcentageOfWorld3(francePopulation));


// Assignment 4
const describePopulation = function (country, population) {
  const percentage = percentageOfWorld1(population);
  const description = `${country} has ${population} million
  people, which is about ${percentage}% of the world.`;
  console.log(description);
  };

describePopulation('Portugal', 10);
describePopulation('China', 1441);
describePopulation('USA', 332);


// Assignment 5
const populations = [70, 6, 90, 350];
const worldPopulation = 7900;

console.log(populations.length === 4);

function pourcentageOfWorld1(population) {
  return (population / worldPopulation) * 100;
}

const percentages = [
  pourcentageOfWorld1(populations[0]),
  pourcentageOfWorld1(populations[1]),
  pourcentageOfWorld1(populations[2]),
  pourcentageOfWorld1(populations[3])
];

console.log(percentages);


// Assignment 6
const neighbours = ["France", "Portugal"]

// add Utopia
neighbours.push("Utopia");
console.log(neighbours);

// remove Utopia
neighbours.pop();
console.log(neighbours);

if (neighbours.includes("Germany") === false) {
  console.log("Probably not a central European Country")
}

neighbours[1] = "Italy";
console.log(neighbours);



// Assignment 7 : Introduction to Object

const myCountry = {
  country: "France",
  capital: "Paris",
  langage: "french",
  population: 70,
  neighbours: ["Belgium", "Luxembourg", "Germany", "Switzerland", "Italy", "Monaco", "Andorre", "Spain"],

  describe: function ()
};

console.log(myCountry);

// Assignment 8 : Dot & Bracket Notation

console.log(`${myCountry.country} has ${myCountry.population} millions ${myCountry.langage}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

myCountry.population -= 2;
console.log(myCountry.population);
myCountry["population"] += 2
console.log(myCountry.population);



// Assignment 9 : Object method

const myCountry = {
  country: "France",
  capital: "Paris",
  langage: "french",
  population: 70,
  neighbours: ["Belgium", "Luxembourg", "Germany", "Switzerland", "Italy", "Monaco", "Andorre", "Spain"],

  describe: function () {
    console.log(`${this.country} has ${this.population} millions ${this.langage}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`);
  },

  isIsland: function () {
    this.isLand = this.neighbours.length === 0 ? true : false;
    console.log(this.isLand);
  }
};

myCountry.describe();
myCountry.isIsland();


// Assignment 10 : The for loop

for (let rep = 1; rep <= 50; rep++) {
  console.log(`Voter number ${rep} is currently voting`);
}


// Assignement 11 : Looping Arrays, Breaking and Continuing

const populations = [70, 6, 90, 350];
const worldPopulation = 7900;

const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
  percentages2.push((populations[i] / worldPopulation) * 100);
}
console.log(percentages2);


// Assignments 12 : Looping Backwards and Loops in Loops

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (let nbs = 0; nbs < listOfNeighbours.length; nbs++) {
  for (let nb = 0; nb < listOfNeighbours[nbs].length; nb++) {
    console.log(`Neighbour: ${listOfNeighbours[nbs][nb]}`);
  }
}


// Assignment 13 : The While Loop

const populations = [70, 6, 90, 350];
const worldPopulation = 7900;

const percentages3 = [];

let i = 0
while (percentages3.length < populations.length) {
  percentages3.push((populations[i] / worldPopulation) * 100);
  i++;
}

console.log(percentages3);
*/