"use strict";

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    const output = `${firstName}, you are ${age} years old, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = "Jonas";
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial);
  }

  printAge();
  return age;
}

const firstName = "Théophile";
calcAge(1994);


// Variable
console.log(me);
//console.log(job);
//console.log(year);

var me = "Jonas";
let job = "teacher";
const year = 1991;

// Function
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

if (!numProducts) {
  deleteShoppingCart();
}

var numProducts = 10;

function deleteShoppingCart() {
  console.log("All items deleted");
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);



console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(1994);

const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAgeArrow(1991);

const jonas = {
  firstName: "Jonas",
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

jonas.calcAge();

const matilda = {
  year: 2003,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;



const jonas = {
  firstName: "Jonas",
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this;
    // const isMillenial = function () {
    //console.log(self);
    // console.log(self.year >= 1981 && self.year <= 1996);
    //};

    // Solution 2
    const isMillenial = () => {
      // console.log(this.year >= 1981 && this.year <= 1996);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};

jonas.greet();
jonas.calcAge();

// Arguments Keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addExpr(2, 3);
addArrow(3, 6);




let age = 27;
let oldAge = age;
age = 28;

console.log(age);
console.log(oldAge);

const me = {
  name: "Théophile",
  age: 28,
};

const friend = me;
friend.age = 30;

console.log(me);
console.log(friend);

*/

// Primitives types
let lastName = "William";
let oldLastName = lastName;
lastName = "Davis";

console.log(lastName, oldLastName);

// References types
const jessica = {
  firstName: "Jessica",
  lastName: "William",
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = "Davis";

console.log("Before wedding", jessica);
console.log("After wedding", marriedJessica);

// Copying object
const jessica2 = {
  firstName: "Jessica",
  lastName: "William",
  age: 27,
  family: ["Alice", "Bob"],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";
jessicaCopy.family.push("Mary");

console.log("Before wedding", jessica2);
console.log("After wedding", jessicaCopy);
