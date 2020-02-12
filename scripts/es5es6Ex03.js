//////////////////////////////////////////////////////////////////////////////////
// ES5 and ES6 Exercises
//

// change everything below to the newer Javascript!

// Old var
var a = 'test';
var b = true;
var c = 789;
a = 'test2';

// new let and const
const a = 'Test';
let b = true;
let c = 789;
// a = 'test2'; // Testing const reasign of a variable


// Good old var object
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// new const object
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 50,
  eyeColor: 'blue'
}

// Old method of accessing Object's properties
var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;

// new ES5 and ES6 method of accessing Object properties
const { firstName, lastName, age, eyeColor } = person;



// Old var Object properties
var x = 'test';
var y = true;
var z = 789;

var okObj = {
  x: x,
  y: y,
  z: z
};

// new let + const Object
const x = 'test';
let y = true;
let z = 789;

const okObj = {
  x,
  y,
  z
}


// Template strings
const firstName = "Chris";
let city = "San Francisco";
// Old method of string concat
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";

// New method of string template
let message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`;


// default arguments
// default age to 10;
function isValidAge(age) {
  return age;
}

function isValidAge(age = 18) {
  return age;
}

// Symbol
// Create a symbol: "This is my first Symbol"
let sym1 = Symbol();
let sym2 = Symbol('Hello');
let sym3 = Symbol('Hello');
sym2 = sym3;  // error

// Arrow functions
function whereAmI(username, location) {
  if (username && location) {
    return "I am not lost";
  } else {
    return "I am totally lost!";
  }
}

const whereAmI = (username, location) => {
  return (username && location) ? 'I am not lost' : 'I am totally lost!';
}