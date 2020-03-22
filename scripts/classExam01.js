/////////////////////////////////////////////////////////////////////////////////
// Classes
//

// ES5
var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function () {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var chris = new Person('Chris', 1970, 'Programmer');

console.log(chris);
chris.calculateAge();

// ES6
class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        let age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

    static greeting() {
        console.log('Hey there!');
    }

}

const mike = new Person6('Mike', 1970, 'Tennis Coach');
console.log(mike);
mike.calculateAge();
Person6.greeting();
