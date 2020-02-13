/////////////////////////////////////////////////////////////////////////////
// Advanced Loop
//

// Example Array
const fruitArr = ['Apple', 'Banana', 'Coconut', 'Dates', 'Cherries'];
const fruitObj = {
  apples: 5,
  orange: 12,
  grapes: 1300,
  banana: 200
};

// 1 - The old tradition loop (Review)
for (let i = 0; i < fruitArr.length; i++) {
  console.log(`The old traditional for loop ${fruitArr[i]}`);
};

// 2 - The forEach (review)
fruitArr.forEach(i => {
  console.log(`The forEach loop ${i}`);
});


// for of (ES6)
for (i of fruitArr) {
  console.log(`The for of loop ${i}`);
};

// for in (ES6) - loop Object properties
for (i in fruitObj) {
  console.log(`The for in loop ${i}`);
};
