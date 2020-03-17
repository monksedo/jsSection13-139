/////////////////////////////////////////////////////////////////////
// Functions Assignment
//

// Question 1. Re-write the function bellow as an arrow function.
/*
function sayHello(name) {
  console.log('Hi ' + name);
}

sayHello();
*/

// Solution to Q1.
/*
const sayHello = (name) => {
  console.log(`Hi ${name}!`);
}
sayHello('Chris');
*/

/*
// Solution to Q2 - method 01.
const sayHello = (greet, name) => {
  console.log(`${greet} ${name}!`);
}
sayHello('Good afternoon', 'Chris');
*/

/*
// Solution to Q2 - method 02.
const sayHello = () => {
  console.log(`Hello Chris!`);
}
sayHello();
*/

/*
// Solution to Q2 - method 03.
const sayHello = () => `Hello Chris!`;
console.log(sayHello());
*/


// Solution to Q3
const sayHello = (greet, name = `Chris`) => `${greet} ${name}!`;
// console.log(sayHello('Good moning'));

// solution to Q4
const checkInput = (cb, ...input) => {
  cb = sayHello('Good afternoon', 'Mark')
  return messamge = cb + input;
}
console.log(checkInput('Hahahahah, ', ' Something to show here'));