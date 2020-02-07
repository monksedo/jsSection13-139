/********************************************************************
 * #1 Change this fucntion into a ternary and assign it to the variable call experiencePoints
 */
// setup function winBattle to test the true or false condition
function winBattle() {
  return false;
  // return true;
}

// function with regular if else 
function experiencePoints() {
  if (winBattle()) {
    return 10;
  } else {
    return 1;
  }
}
console.log(experiencePoints()); // call the function and printout the number

// function with ternary test statement
function experiencePoints1() {
  let result = (winBattle() ? 10 : 1);
  return result;
}
console.log(experiencePoints1()); // call the function and printout the number


/**********************************************************************
 * Using this function, answer the questions below:
 */

const moves = ['forward', 'back', 'right', 'left', 'something'];

function moveCommand(direction) {
  var whatHappens;
  switch (direction) {
    case 'forward':
      break;
      whatHappens = 'You encouter a monster';
    case 'back':
      whatHappens = 'You arried home';
      break;
      break;
    case 'right':
      return whatHappens = 'you found a river';
      break;
    case 'left':
      break;
      whatHappens = 'you run into a troll';
      break;
    default:
      whatHappens = 'please enter a valid direction';
  }
  return whatHappens;
}

// #2 return value when moveCommend("forward"); // undefined
// #3 return value when moveCommend("back");    // You arried home
// #4 return value when moveCommend("right");   // you found a river
// #5 return value when moveCommend("left");    // undefined
// #6 return value when moveCommend("something")  // Please enter a valid direction

function printOut() {
  for (let i = 0; i < moves.length; i++) {
    let temp = moveCommand(moves[i]);
    console.log(temp);
  }
}
printOut();

