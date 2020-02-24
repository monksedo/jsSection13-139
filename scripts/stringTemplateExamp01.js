////////////////////////////////////////////////////////////////
// Lecture: Strings Template Literal
//

const firstName = 'Chris';
const lastName = 'Nguyen';
const birthYear = 1970;

function calcAge(now, bYear) {
    return now - bYear;
}
const age = calcAge(2018, birthYear);

// ES5 String 
console.log('This is ' + firstName + ' ' + lastName + ' he was born in ' +
    birthYear + '. He is now ' + age + ' years old.');

// ES6 String template literal
console.log(`This is ${firstName} ${lastName} he was born in ${birthYear}. He is now ${age} years old. `);