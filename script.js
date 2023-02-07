'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

// function printAge() {
//   let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//   console.log(output);

// if (birthYear >= 1981 && birthYear <= 1996) {
//   var millenial = true;
// Creating NEW variable with same name as outer scopes's variable
// const firstName = 'Steven';

// Reassigning outer scopes's variable
//   output = 'NEW OUTPUT';
//   const str = `Oh, and you're a millenial, ${firstName}`;
//   console.log(str);

//   function add(a, b) {
//     return a + b;
//   }
// }
// console.log(millenial);
// console.log(add(2, 3));
//     console.log(output);
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);

// Variables
// console.log(me); // undefined
// console.log(job); // error before initialization
// console.log(year); // error before initialization

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// Functions

// console.log(addDecl(2, 3)); // 5
// console.log(addExpr(2, 3)); // error before initialization
// console.log(addArrow(2, 3)); // error before initialization

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// Example
// console.log(numProducts);
// if (!numProducts) {
//   deleteShoppingCart();
// }

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// var x = 1; // window see
// let y = 2; // window not see
// const z = 3; //window not see

// console.log(x === window.x); // true
// console.log(y === window.y); // false
// console.log(z === window.z); // false

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this); // dont work in functions in strict mode
// };

// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this); // use this in global scope
// };

// calcAgeArrow(1980);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;
// f();

// var firstName = 'Matilda';

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2037 - this.year);

// 1 Solution
// const self = this;
// const isMillenial = function () {
//   console.log(self);
//   console.log(self.year >= 1981 && self.year <= 1996);
// };
//   console.log(this.year >= 1981 && this.year <= 1996);
// };

// 2 Solution
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },

//   greet: () => console.log(`Hey ${this.firstName}`),
// };

// jonas.greet();
// jonas.calcAge();

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 8);

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age); // 31
// console.log(oldAge); // 30

// const me = {
//   name: 'Jonas',
//   age: 30,
// };

// const friend = me;
// friend.age = 27;
// console.log('Friend:', friend); // name: Jonas, age: 27
// console.log('Me:', me); // name: Jonas, age: 27

// -------------------------------------

// Primitive types
// let lastName = 'Williams';
// let oldLastName = lastName;
// lastName = 'Davis';
// console.log(lastName, oldLastName);

// Reference types
// const jessica = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
// };

// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';
// console.log('Before marriage:', jessica);
// console.log('After marriage:', marriedJessica);

// marriedJessica = {};

// Copying objects
// const jessica2 = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
//   family: ['Alice', 'Bob'],
// };

// const jessicaCopy = Object.assign({}, jessica2);
// jessicaCopy.lastName = 'Davis';

// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('John');

// console.log('Before marriage:', jessica2);
// console.log('After marriage:', jessicaCopy);
