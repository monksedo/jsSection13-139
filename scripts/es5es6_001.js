// let and const
const gamePlayer = 'Dat';
let expLevel = 100;
let wizardExp = false;

if (expLevel > 90) {
  let wizardExp = true;
  console.log('inside', wizardExp);
}
console.log('outside', wizardExp)
// gamePlayer = 'Chris'; // Uncaught TypeError: Assigment to constant variable.

//////////////////////////////////////////////////////////////
// Example of an object

const obj = {
  player: 'Chris',
  experience: 100,
  wizardLevel: false
}
console.log(obj);

const player = obj.player;
const expierence = obj.experience;
let wizardLevel = obj.wizardLevel;
console.log(player, expierence, wizardLevel);

// Example above with Desctructuring
const objD = {
  playerName: 'Chris',
  playExp: 100,
  wizLevel: true
}
const { playerName, playExp } = objD;
let { wizLevel } = objD;
console.log(playerName, playExp, wizLevel);

// Another example of how to creat object properties
const name = 'Chris Nguyen';
const obj1 = {
  [name]: 'hello',
  ['Kim' + 'Nguyen']: 'hihi!'
}
console.log(obj1);

// Or dynamic propertie values in ES6
const obj2 = {
  [name]: 'hello',
  [2 * 5]: 'goodbye!'
}
console.log(obj2);

// Old way of assigning objects property and value with same name
const a = 'Mike';
const b = true;
const c = {};

const obj3 = {
  a: a,
  b: b,
  c: c
}; console.log(obj3);

// Now we can do this
const obj4 = {
  a,
  b,
  c
}; console.log(obj4);

///////////////////////////////////////////////////////////////////////////
// Template Strings

const firstName = "Sallly";
const age = 34;
const pet = "horse";

// The go old way of concat string together
const greeting = "Hello " + firstName + ", you seem to be " + age + ". What a lovely " + pet + "you have!";
console.log(greeting);

// With string template
const greeting1 = `Hello ${firstName}, you seem te be ${age}. What a lovely ${pet} you have?`;
console.log(greeting1);
