//////////////////////////////////////////////////////////////////////////
// Array in ES6

const boxes = document.querySelectorAll('.box');
console.log(boxes);

// ES5  
var boxArr = Array.prototype.slice.call(boxes);
boxArr.forEach(function (val) {
    val.style.backgroundColor = 'dodgerblue';
});


// ES6
const boxArr6 = Array.from(boxes);
console.log(boxArr6);
boxArr6.forEach(val => val.style.backgroundColor = 'dodgerblue');


// ES5 loop
/*
for (var i = 0; i < boxArr.length; i++) {
    if (boxArr[i].className === 'box blue') {
        continue;
    }
    boxArr[i].textContent = 'I changed to blue';
}
*/

// ES6 Loop
for (const val of boxArr6) {
    if (val.className.includes('blue')) {
        continue;
    }
    val.textContent = 'I changed to blue!';
}

// ES5
var ages = [12, 15, 8, 21, 17, 11];
var full = ages.map(function (val) {
    return val >= 18;
});
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);


// ES6
const result = ages.findIndex(val => val >= 18);
console.log(result);
console.log(ages.find(val => val >= 18));
