// let and const
/*
const player = 'Dat';
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
  let wizardLevel = true;
  console.log('inside', wizardLevel);
}

console.log('outside', wizardLevel)
*/

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

