////////////////////////////////////////////////////////////////////////////
// First Class Functions: Passing Functions as Arguments
// 

var birthYears = [1990, 1965, 1973, 2005, 1998];

function arrayLoop(arr, callBack) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(callBack(arr[i]));
  }
  return arrRes;
}

function calculateAge(birthYear) {
  var currYear = 2016;
  return currYear - birthYear;
}

function adult(limit, age) {
  return age >= limit;
}

function maxHeartRate(age) {
  if (age >= 18 && age <= 81) {
    return Math.round(206.9 - (0.67 * age));
  } else {
    return 'Too Young';
  }
};

var ages = arrayLoop(birthYears, calculateAge);
var limitJapan = adult.bind(this, 20);
var grownJapan = arrayLoop(ages, limitJapan);
var limitUS = adult.bind(this, 18);
var grownUS = arrayLoop(ages, limitUS);
var heartRates = arrayLoop(ages, maxHeartRate);

console.log(`Ages are ${ages}`);
console.log(`Are you US adult? ${grownUS}`);

console.log(`Are you Japan Adult? ${grownJapan}`);
console.log(`Your hearth rate will be ${heartRates}`);
