///////////////////////////////////////////////////////////////////////////////
// Advanced Javascript - Closures
//

// Function retirement - Calculate the years before one's retirement
function retirement(retireAge) {
  var a = ' years before retirement.';
  return function (birthYear) {
    var age = 2020 - birthYear;
    console.log((retireAge - age) + a);
  }
}

// Declaire function variable with predefined arguments (retirement ages for each different countries)
var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);


// Call the function and pass in arguments
retirementUS(1970);

// Another way to call and pass in arguments
retirement(66)(1971);
