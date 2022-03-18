// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// Challenge 1
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (array) {
  let forecast = "";
  for (let i = 0; i < array.length; i++) {
    let dailyforecast = `${array[i]}°C in ${i + 1} days... `;
    forecast += dailyforecast;
  }
  return "..." + forecast;
};

console.log(printForecast(data1));
console.log(printForecast(data2));
