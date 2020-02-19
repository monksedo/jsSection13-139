// Section 5 - Advance JavaScript Objects & Functions

// Function contructor
/*
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
*/

/******************************************************************
 * Object.create
 */
/*
const personProto = {
  calulateAge: function () {
    console.log(2016 - this.birthYear);
  }
};
var john = Object.create(personProto, {
  name: { value: 'John' },
  birthYear: { value: 1990 },
  job: { value: 'Teacher' }
});

const person = {}

const chris = Object.create(person);
chris.name = 'Chris';
chris.job = 'Programmer';
chris.birthYear = 1970;

chris.buzAddress = '5555 Stree';
chris.city = 'Chicago';
chris.state = 'Illinois';
chris.Country = 'USA';

chris.home = {
  address: '22222 SW Park',
  city: 'New York',
  state: 'NY',
  country: 'USA'
}

chris.calculateAge = function (now) {
  return now - this.birthYear;
};

console.log(chris.calculateAge(2020));

console.log(chris.address);

console.log(chris.home);

console.log(chris);
*/

/*****************************************************************
 * Primitives vs Objects
 */
/*
// Primitive
var a = 23;
var b = a;
a = 46;

console.log(a);
console.log(b);

// Objects
var obj1 = {
  name: 'John',
  age: 26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// Functions
var age = 28;
var obj = {
  name: 'Chris',
  city: 'Tracy',
  age: 50
};

function change(a, b) {
  a = 30;
  b.city = 'San Francisco';
}

change(age, obj);
console.log(obj);
console.log(age);
console.log(obj.city);
console.log(obj.age);
*/

////////////////////////////////////////////////////////////////////////////
// First Class Functions: Passing Functions as Arguments
// 
/*
var birthYears = [1990, 1965, 1973, 2005, 1998];

function arrayLoop(arr, callBack) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(callBack(arr[i]));
  }
  console.log(arrRes);
  return arrRes;
}

function calculateAge(birthYear) {
  var currYear = 2020;
  return currYear - birthYear;
}

function adult(age) {
  return age >= 18;
}

function maxHeartRate(age) {
  if (age >= 18 && age <= 81) {
    return Math.round(206.9 - (0.67 * age));
  } else {
    return 'Too Young';
  }
};

var ages = arrayLoop(birthYears, calculateAge);
var grown = arrayLoop(ages, adult);
var heartRates = arrayLoop(ages, maxHeartRate);

console.log(`Ages are ${ages}`);
console.log(`You are grown up if you ages are above ${grown}`);
console.log(`Your hearth rate will be ${heartRates}`);
*/


///////////////////////////////////////////////////////////////////////////////
// First Class Functions: functions returning Functions

function interviewQuestion(job) {
  if (job === 'designer') {
    return function (name) {
      console.log(name + ', can you explain what UX design is?');
    }
  } else if (job === 'teacher') {
    return function (name) {
      console.log('What subject do you teach, ' + name + '?');
    }
  } else {
    return function (name) {
      console.log('Hello ' + name + ', what do you do?');
    }
  }
};

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('Chris');
designerQuestion('John');
designerQuestion('Mark');
designerQuestion('Jane');
designerQuestion('Mike');

interviewQuestion('teacher')('Chris');


//////////////////////////////////////////////////////////////////////////////////////////////////////////////// Immediately Involked Function Expressions (IIFE)
/*
var chris = {
  name: 'Chris',
  age: 50,
  job: 'Programmer',
  presentation: function (style, timeOfDay) {
    if (style === 'formal') {
      console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m a ' + this.name + ', I am a ' + this.job + ' and I am ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
    } else if (style === 'friendly') {
      console.log('Hey! what\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
    }
  }
};

var emily = {
  name: 'Emily',
  age: 35,
  job: 'designer'
};

chris.presentation('formal', 'morning');
chris.presentation('friendly', 'evening');

chris.presentation.call(emily, 'formal', 'afternoon');
// chris.presentation.apply(emily, ['friendly', 'afternoon']);

var chrisFriendly = chris.presentation.bind(chris, 'friendly');
chrisFriendly('morning');

var emilyFormal = chris.presentation.bind(emily, 'formal');
emilyFormal('afternoon');
*/

/////////////////////////////////////////////////////////////////////////////////////////////////
// review passing function as argument
/*
var years = [1990, 1965, 1973, 2005, 2010];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  // console.log(arrRes);
  return arrRes;
}

function calculateAge(birthYear) {
  var currYear = 2020;
  return currYear - birthYear;
}

function adult(limit, age) {
  return age >= limit;
}

var ages = arrayCalc(years, calculateAge);
var japanAdult = arrayCalc(ages, adult.bind(this, 20));

console.log(ages);
console.log(japanAdult);
*/




























