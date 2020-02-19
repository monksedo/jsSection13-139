////////////////////////////////////////////////////////////////////////////
// First Class Functions: Passing Functions as Arguments
// 

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
