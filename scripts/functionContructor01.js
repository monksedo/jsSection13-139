// Section 5 - Advance JavaScript Objects & Functions

// Function contructor

const Person = function (name, birthYear, job) {
  this.name = name;
  this.birthYear = birthYear;
  this.job = job;
};

Person.prototype.calculateAge = function () {
  console.log(2016 - this.birthYear);
};

Person.prototype.address = [
  { address: '12345 SW Street' },
  { city: 'San Jose' },
  { state: 'CA' },
  { Country: 'USA' }
];

const chris = new Person('Chris', 1970, 'Programmer');
const jane = new Person('Jane', 1969, 'Designer');
const mark = new Person('Mark', 1948, 'Retired');

chris.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(chris.address);