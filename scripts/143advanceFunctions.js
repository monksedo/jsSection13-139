/**************************************************************************
 * Section 13: Advanced JavaScript
 */

// 143. Advanced Functions
const first = () => {
  const greet = 'Hi';
  const second = () => {
    alert(greet);
  }
  return second;
};

const newFunc = first();
newFunc();

// Currying
const multiply = (a, b) => (a * b);

const curriedMultiply = (a) => (b) => a * b;
const test = curriedMultiply(3)(5);
console.log(test);

const result = multiply(3, 5);
console.log(result);

const mulby5 = curriedMultiply(5);

console.log(mulby5(3));

// Compose

const compose = (f, g) => (a) => f(g(a));
console.log(compose());

const sum = (num) => num + 1;
console.log(sum);

let n = 9;
const temp = compose(sum, sum)(n);
console.log(temp);


// Closure
/*
const addTo = x => y => x + y;
let addToTen = addTo(10);
*/

const addTo = function addTo(x) {
  return function (y) {
    return x + y;
  };
};
let addToTem = addTo(10);
let sum1 = addToTem(5);
console.log(sum1);

