"use strict";

/*

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

////////////////////////
// Working with strings: part 3

console.log("a+very+nice+string".split("+"));
console.log("Théophile Bancal".split(" "));

const [firstName, lastName] = "Théophile Bancal".split(" ");

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];
  for (const n of names) {
    //namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};

capitalizeName("jessica ann smith davis");
capitalizeName("jonas Schmedtmann");

// Padding
const message = "Go to date 23!";
console.log(message.padStart(25, "+").padEnd(35, "+"));
console.log("Jonas".padStart(25, "+").padEnd(35, "+"));

// Masking credit card number
const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(697297383));
console.log(maskCreditCard(5678765456789876));
console.log(maskCreditCard("68786298618928639028"));

// Repeat
const message2 = "Bad weather... All departures delayed...";
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"🛩".repeat(n)}`);
};

planesInLine(3);
planesInLine(12);
planesInLine(23);

////////////////////////
// Working with strings: part 2

const airline = "TAP Air Portugal";

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix Capitalization in name

const passenger = "jOnAS";

const passengerCorrectName = function (passenger) {
  const passengerLower = passenger.toLowerCase();
  const passengerCorrect =
    passengerLower[0].toUpperCase() + passengerLower.slice(1);
  console.log(passengerCorrect);
};

passengerCorrectName(passenger);

// Check User Input Email
const email = "hello@jonas.io";
const loginEmail = "    Hello@Jonas.Io   \n";

const normalizeEmail = function (email) {
  const normalizeEmail = email.toLowerCase().trim();
  return normalizeEmail;
};

console.log(normalizeEmail(loginEmail));
console.log(email === normalizeEmail(loginEmail));

// Replacing
const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS);

const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";

console.log(announcement.replace("door", "gate"));
console.log(announcement.replaceAll("door", "gate"));

// Regex
console.log(announcement.replaceAll(/door/g, "gate"));

// Booleans
const plane = "Airbus A320neo";
console.log(plane.includes("A320"));
console.log(plane.includes("Boeing"));
console.log(plane.startsWith("Airb"));

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("Part of the New Airbus family");
}

// Pratice Exercice
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are not welcome on board");
  } else {
    console.log("Welcome on board");
  }
};

checkBaggage("I have a laptop, some food and a pocket knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snack and a gun for protection");

////////////////////////
// Working with strings: part 1

const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log("B737"[0]);

console.log(airline.length);
console.log("B737".length);

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("portugal"));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log("You got the middle seat 😬");
  } else {
    console.log("You got lucky 🥳");
  }
};

checkMiddleSeat("11B");
checkMiddleSeat("29C");
checkMiddleSeat("7E");

console.log(new String("Théophile"));
console.log(typeof new String("Théophile"));
 
/////////////////////////
// Restaurant Part

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`
    );
  },

  orderPizza(mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

////////////////////////
// Maps: Iteration

const question = new Map([
  ["question", "What is the best programming langage in the world ?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct !"],
  [false, "Try again !"],
]);

console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt("Your answer"));
console.log(answer);

console.log(question.get(question.get("correct") === answer));

// Convert map to array

console.log([...question]);
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);


////////////////////////
// Maps : fundamentals

const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Lisbone, Portugal"));

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :(");

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;

console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));
rest.delete(2);
// rest.clear();
const arr = [1, 2];
rest.set(arr, "Test");
rest.set(document.querySelector("h1"), "Heading");
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));

////////////////////////
// Sets
const orderSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);
console.log(orderSet);

console.log(new Set("Jonas"));

console.log(orderSet.size);

console.log(orderSet.has("Pizza"));
console.log(orderSet.has("Bread"));

orderSet.add("Garlic Bread");
orderSet.add("Garlic Bread");
console.log(orderSet);

orderSet.delete("Risotto");
console.log(orderSet);

//orderSet.clear();
//console.log(orderSet);

for (const order of orderSet) console.log(order);

// Exemple
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set(staff).size);

console.log(new Set("theophilebancal").size);

/*

////////////////////////
// Looping Objects : Object keys, values and entries

// Property Names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days : `;

for (const day of Object.keys(openingHours)) {
  openStr += ` ${day},`;
}
console.log(openStr);

// Property Values
const values = Object.values(openingHours);
console.log(values);

// Entire Object
const entries = Object.entries(openingHours);
// console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

////////////////////////
// Optional Chaining (.?)

// Without optionnal chaining
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// With optionnal chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Exemple
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}

// Methods

console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");

// Arrays

//const users = [{ name: "Jonas", email: "hello@jonas.io" }];
const users = [];

console.log(users[0]?.name ?? "Users array empty");


////////////////////////
// Enhance object literals

// Check the object

////////////////////////
// Looping arrays : the for of Loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(i, el);
}

////////////////////////////
// Logical assignement operator

const rest1 = {
  name: "Capri",
  numGuests: 0,
};

const rest2 = {
  name: "Piazza",
  owner: "Giovanni Rossi",
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignement operator
// rest1.owner = rest1.owner && "<ANONYMOUS>";
// rest2.owner = rest2.owner && "<ANONYMOUS>";
rest1.owner &&= "<ANONYMOUS>";
rest2.owner &&= "<ANONYMOUS>";

console.log(rest1);
console.log(rest2);


////////////////////////////
// The Nullish Coalesing Operator (??)

restaurant.numGuest = 0;

const guess2 = restaurant.numGuest || 10;
console.log(guess2);

// Nullish value are null and undefined (not 0 or '')
const guessCorrect = restaurant.numGuest ?? 10;
console.log(guessCorrect);


/////////////////////////////////////
// Short-circuiting 
// Use any data type, return any data type, short circuiting
console.log(3 || "Jonas");
console.log("" || "Jonas");
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || "" || "Hello" || 23 || null);

restaurant.numGuest = 23;
const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guest1);

const guess2 = restaurant.numGuest || 10;
console.log(guess2);

console.log("-------AND-------");
console.log(0 && "Jonas");
console.log(7 && "Jonas");
console.log("Hello" && 23 && null && "Jonas");

if (restaurant.orderPizza) {
  restaurant.orderPizza("mushroom", "spinach");
}

restaurant.orderPizza && restaurant.orderPizza("mushroom", "spinach");


/////////////////////////////////////
// Rest : Destructuring
// Spread because ... on the right of =
const arr = [1, 2, ...[3, 4]];

// Rest because ... on the left of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);

// Object
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// Rest : Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(2, 1, 3, 4, 9);
add(1, 9, 7, 8, 0, 2, 3, 4, 2);

const x = [5, 9, 7];
add(...x);

restaurant.orderPizza("mushroom", "ham", "cheese", "olive", "tomato");
restaurant.orderPizza("mushroom");


///////////////////////////////////////
// SPREAD OPERATOR
const arr = [7, 8, 9];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);

const newArray = [1, 2, ...arr];
console.log(newArray);
console.log(...newArray);

const newMenu = [...restaurant.mainMenu, "Gnocchis"];
console.log(newMenu);

// Copy Array

const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Joins Arrays

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables : arrays, strings, maps, sets, NOT Objects
const str = "Jonas";
const letters = [...str, "", "S."];
console.log(letters);
console.log(...str);
//console.log(`${...str}`)

//const ingredients = [
//  prompt("Let's make pasta ! Ingredient 1 :"),
//  prompt("Ingredient 2 :"),
//  prompt("ingredient 3 :"),
//];
//console.log(ingredients);

//restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
//restaurant.orderPasta(...ingredients);

// Object
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);


// Destructuring Object

restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: "Via de la Luna, 93",
  starterIndex: 3,
});

const { name, openingHours, categories } = restaurant;
console.log("coucou");
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default Value
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating Value
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// Nested Object
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

// Destructuring Array
const arr = [1, 2, 3];
const [x, y, z] = arr;

console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);
[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.order(2, 0));
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);
*/
