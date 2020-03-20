/////////////////////////////////////////////////////////////////////////
// Destructuring
//

// ES5
var chris = ['Chris', 49, 'Programmer'];
var name = chris[0];
var age = chris[1];
var job = chris[2];

console.log(name, age, job);

// ES6
const [name1, age1, job1] = ['Chris', 49, 'Programmer'];
console.log(name1, age1, job1);

const person = {
    firstName: 'Chris',
    lastName: 'Nguyen'
};
const { firstName, lastName } = person;
console.log(person);
console.log(firstName, lastName);


// function destructuring
function retirementAge(year) {
    const age3 = new Date().getFullYear() - year;
    return [age3, 65 - age3];
}

const [age3, retirement] = retirementAge(1990);
console.log(age3);
console.log(retirement);