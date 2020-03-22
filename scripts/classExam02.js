////////////////////////////////////////////////////////////////////////
// Class & Subclass
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

var Athlete = function (name, yearOfBirth, job, olympicGame, medals) {
    Person.call(this, name, yearOfBirth, job);
    this.olympicGame = olympicGame;
    this.medals = medals;
}

Athlete.prototype = Object.create(Person.prototype);

Athlete.prototype.wonMedal = function () {
    this.medals++;
    console.log(this.medals);
}

var chris = new Athlete('Chris', 1970, 'Swimmer', 3, 10);
console.log(chris);
chris.calculateAge();
chris.wonMedal();



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
}

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGame, medals) {
        super(name, yearOfBirth, job);
        this.olympicGame = olympicGame;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

const mike = new Athlete6('Mike', 1971, 'Tennis Coach', 3, 10);
console.log(mike);
mike.calculateAge();
mike.wonMedal();
