// let and const scope
const gamePlayer = 'Dat';
let gameExp = 100;
let gameWizard = false;

if (gameExp > 90) {
  let gameWizard = true;
  console.log('inside', gameWizard);    // gameWizard is only accessible inside { code block }
}
console.log('outside', gameWizard); // gameWizard at global is accessible inside any { code block }

function playerStat() {
  if (gameExp > 90) {
    console.log(gameWizard);  // 
  }
}
playerStat();

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

// Or dynamic properties in ES6
const obj2 = {
  [name]: 'hello',
  [2 * 5]: 'goodbye!'
}
console.log(obj2);


///////////////////////////////////////////////////////////////////////////
// Template Strings
const firstName = 'Chris'
const age = 49;
const pet = 'horse';

// The good old string concat method
const greeting = 'Hello ' + firstName + ' you seem to be ' + age +
  ' and look, what a lovely ' + pet + ' you have!';
console.log(greeting);

// Here is how the new string template works
const greetingNew = `Hello ${firstName} you seem to be ${age} and look, what a lovely ${pet} you have! `;
console.log(greetingNew);


///////////////////////////////////////////////////////////////////////////
// Default arguments
function greet(name = '', age = 16, pet = 'bird') {
  return `Hello ${name} you seem to be ${age}, look what a lovely ${pet} you have!`;
};
console.log(greet(firstName, age, pet)); // function call that passed in all three arguments
console.log(greet());   // function call that passed in no argument, so defaul argument is being used.