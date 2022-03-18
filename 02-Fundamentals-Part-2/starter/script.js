"use strict";
/*
// Challenge 1
const calcAverage = (score1, score2, score3) => ((score1 + score2 + score3) / 3);

const scoreDaulphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

console.log(scoreDaulphins);
console.log(scoreKoalas);

function checkWinner(avgScoreDaulphins, avgScoreKoalas) {
    if (avgScoreDaulphins >= (avgScoreKoalas * 2)) {
        return `Dolphins win (${avgScoreDaulphins} vs. ${avgScoreKoalas})`;
    } else if (avgScoreKoalas >= (avgScoreDaulphins * 2)) {
        return `Koalas win (${avgScoreKoalas} vs. ${avgScoreDaulphins})`;
    } else {
        return "No winner";
    }
}

console.log(checkWinner(scoreDaulphins, scoreKoalas));


// Challenge 2

const calcTip = function (bill) {
    if (bill >= 50 && bill <= 300) {
        let tip = bill * 0.15;
        return tip;
    } else {
        let tip = bill * 0.2;
        return tip;
    }
}

console.log(calcTip(100));

const bills = [125, 555, 44];

const tips = [
    calcTip(bills[0]),
    calcTip(bills[1]),
    calcTip(bills[2])
];

const totals = [
    bills[0] + calcTip(bills[0]),
    bills[1] + calcTip(bills[1]),
    bills[2] + calcTip(bills[2])
];

console.log(bills, tips, totals)


// Challenge 3

const markMiller = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const johnSmith = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

markMiller.calcBMI();
johnSmith.calcBMI();

if (markMiller.bmi > johnSmith.bmi) {
    console.log(`Mark's bmi (${markMiller.bmi}) is higher than John's (${johnSmith.bmi})`);
} else {
    console.log(`John's bmi (${johnSmith.bmi}) is higher than Mark's (${markMiller.bmi})`);
}

*/

// Challenge 4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = []

const calcTip = function (bill) {
    if (bill >= 50 && bill <= 300) {
        let tip = bill * 0.15;
        return tip;
    } else {
        let tip = bill * 0.2;
        return tip;
    }
}

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + calcTip(bills[i]));
}

console.log(bills);
console.log(tips);
console.log(totals);

const calcAverage = function (array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    const result = sum / array.length;
    return result;
}

console.log(calcAverage(bills), calcAverage(tips), calcAverage(totals));