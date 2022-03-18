/*
// Data set 1

let weightMark1 = 78;
let heightMark1 = 1.69;
let weightJohn1 = 92;
let heightJohn1 = 1.95;

const markBMI1 = weightMark1 / (heightMark1 ** 2);
const johnBMI1 = weightJohn1 / (heightJohn1 ** 2);
const markHigherBMI1 = markBMI1 > johnBMI1;

console.log(markBMI1, johnBMI1, markHigherBMI1);

if (markHigherBMI1) {
  console.log(`Mark's BMI (${markBMI1}) is higher than John's (${johnBMI1})!`);
} else {
  console.log(`John's BMI (${johnBMI1}) is higher than Mark's (${markBMI1})!`);
}

// Data set 2

let weightMark2 = 95;
let heightMark2 = 1.88;
let weightJohn2 = 85;
let heightJohn2 = 1.76;

const markBMI2 = weightMark2 / (heightMark2 ** 2);
const johnBMI2 = weightJohn2 / (heightJohn2 ** 2);
const markHigherBMI2 = markBMI2 > johnBMI2;

console.log(markBMI2, johnBMI2, markHigherBMI2);

if (markHigherBMI2) {
  console.log(`Mark's BMI (${markBMI2}) is higher than John's (${johnBMI2})!`);
} else {
  console.log(`John's BMI (${johnBMI2}) is higher than Mark's (${markBMI2})!`);
}


let averageDolphinScore = (97 + 112 + 101) / 3;
console.log(averageDolphinScore);
let averageKoalaScore = (109 + 95 + 106) / 3;
console.log(averageKoalaScore);
let drawResult = averageDolphinScore === averageKoalaScore;
console.log(drawResult);
let dolphin100Points = averageDolphinScore >= 100;
console.log(dolphin100Points);
let koala100Points = averageKoalaScore >= 100;
console.log(koala100Points);
let bothTeamHave100Points = dolphin100Points && koala100Points;
console.log(bothTeamHave100Points);


if (drawResult && bothTeamHave100Points) {
  console.log("It's a draw");
} else if (averageDolphinScore < averageKoalaScore && bothTeamHave100Points) {
  console.log(`The Koalas win with an average of ${averageKoalaScore}!`);
} else if (averageDolphinScore > averageKoalaScore && bothTeamHave100Points) {
  console.log(`The Dolphins win with an average of ${averageDolphinScore}!`);
} else {
  console.log("No winner");
}
*/

const bill = 40;
const billIsFifteen = 50 <= bill && bill <= 300;

const tip = billIsFifteen ? (bill * 0.15) : (bill * 0.2);
console.log(`The bill was ${bill}€, the tip was ${tip}€, and the total value ${bill + tip}€`);
