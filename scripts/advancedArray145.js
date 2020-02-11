/*********************************************************************
 * 145. Advanced Arrays
 */

const array = [1, 2, 3, 5, 9, 6, 10, 4, 7, 8];

const double = [];
// forEach iterating through array
const newArray = array.forEach((n) => {
  double.push(n * 2);
});
console.log('original', array);
console.log('forEach', double);


/************************************************************************
 * map, filter, reduce
 */

// map example
const mapArray = array.map((n) => n * 2);
console.log('map', mapArray);

// filter example
const filterArray = array.filter(n => n < 9);
console.log('filter Array', filterArray);


// reduce example
const reduceArray = array.reduce((accum, n) => {
  return accum + n;
}, 0);
console.log('reduce', reduceArray);
