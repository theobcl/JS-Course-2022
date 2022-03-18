/*
const country = "France";
const continent = "Europe";
let population = 70;
const isIsland = false;
const langage = "french";

const biggerThanAverage = population > 33

console.log(country);
console.log(continent);
console.log(population);
console.log(isIsland);
console.log(langage);

let populationOfFinland = 6;
console.log(population > populationOfFinland);
let averagePopulation = 33;
console.log(population > averagePopulation);


const description = country + " is in " + continent + " and its " + population + " million people speak " + langage + ".";
console.log(description)
const descriptionNew = `${country} is in ${continent} and its ${population} million people speak ${langage}.`;
console.log(descriptionNew)


if (population > averagePopulation) {
  console.log(`${country} population is above average`);
} else {
  console.log(`${country}'s population is ${averagePopulation - population} below the average`);
}


console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // 617
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143


let numNeighbours = Number(prompt('How many neighbour countries does your country have ?'));

if (numNeighbours === 1) {
  console.log("Only one border!");
} else if (numNeighbours > 1) {
  console.log("More than one border");
} else {
  console.log("No border");
}


let speakEnglish = langage === "english";
let populationWanted = population === 50;
let isNotIsland = country != "Island";

if (speakEnglish && populationWanted && isNotIsland) {
  console.log(`You should live in ${country}`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}


switch (langage) {
  case "mandarin":
    console.log("Most number of native speaker");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken langage")
    break
  default:
    console.log("Great langage too 😀")
    break;
}

const compareToAverage = biggerThanAverage ? "above" : "below";
console.log(`${country} population is ${compareToAverage} the average.`);
*/
