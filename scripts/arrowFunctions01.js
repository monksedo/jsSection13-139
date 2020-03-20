/////////////////////////////////////////////////////////////////////
// Arrow functions
//

const years = [1990, 1965, 1982, 1970];

// ES5 code example
var ages5 = years.map(function (element) {
    return 2019 - element;
})
console.log(ages5);

// ES6
let ages6 = years.map(element => 2019 - element);
console.log(ages6);

// Example with two arguments
ages6 = years.map((el, index) => `Age element ${index + 1}: ${2019 - el}.`);
console.log(ages6);

// Example of arrow function with code block or multilines of code
ages6 = years.map((el, index) => {
    const currentYear = new Date().getFullYear();
    const age = currentYear - el;
    return `Age element ${index + 1}: ${age}.`;
});
console.log(ages6);
