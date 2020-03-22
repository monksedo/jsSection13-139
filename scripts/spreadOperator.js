///////////////////////////////////////////////////////////////////////////
// Spread Operator

function addFourAges(a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

// ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

// ES6 passing array as arguments using spread operator
const sum3 = addFourAges(...ages);
console.log(sum3);

// ES6 join array using spread operator
const friendGroup1 = ['Anthony', 'Marcus', 'Dave'];
const friendGroup2 = ['Chris', 'Tim', 'Mike'];
const allFriends = [...friendGroup1, 'Mark', ...friendGroup2, 'Lee'];
console.log(allFriends);

// ES6 Node list iteration
const h = document.querySelectorAll('h1');
const boxes = document.querySelectorAll('.box');
const combine = [...h, ...boxes];
console.log(combine);
Array.from(combine).forEach(val => val.style.color = 'purple');