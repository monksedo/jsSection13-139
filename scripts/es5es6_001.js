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

