/////////////////////////////////////////////////////////////////////////////
// Rest parameters
//

/*
// ES5 
function isAdult() {
    // console.log(arguments);
    var arr = Array.prototype.slice.call(arguments);
    arr.forEach(function (val) {
        console.log((2016 - val) >= 18);
    });
}

isAdult(1990, 1999, 1965);
isAdult(1990, 1999, 1965, 2016, 1987);


// ES6
function isAdult1(...years) {
    console.log(years);
    years.forEach(val => {
        const result = (2016 - val) >= 18;
        console.log(result);
    });
}

isAdult1(1990, 1999, 1965);
isAdult1(1990, 1999, 1965, 2016, 1987);
*/


// ES5 
function isAdult(adultAge) {
    console.log(arguments);
    var arr = Array.prototype.slice.call(arguments, 1);
    console.log(arr);
    arr.forEach(function (val) {
        console.log((2016 - val) >= adultAge);
    });
}

isAdult(16, 1990, 1999, 1965);
isAdult(16, 1990, 1999, 1965, 2016, 1987);


// ES6
function isAdult1(adultAge, ...years) {
    console.log(years);
    years.forEach(val => {
        const result = (2016 - val) >= adultAge;
        console.log(result);
    });
}

isAdult1(1990, 1999, 1965);
isAdult1(1990, 1999, 1965, 2016, 1987);
