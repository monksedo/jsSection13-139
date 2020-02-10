
/******************************************************************************************
 * For all of these, what is the value of a when the function gets called with the alert()
 */
// Question #1
function q1() {
  var a = 5;
  if (a > 1) {
    a = 3;
  }
  alert(a);         // 3
}

// Question #2
var a = 0;
function q2() {
  a = 5;           // a is now = 5
  alert(a);
}

function q22() {
  alert(a);         // 5
}


// Question #3
function q3() {
  window.a = "hello";   // a is now = "hello"
}


function q32() {
  alert(a);           // alert will print "hello"
}

// Question #4
var a = 1;
function q4() {
  var a = "test";       // a is now reasigned to "test"
  alert(a);             // alert will print "test"
}

// Question #5
var a = 2;
if (true) {
  var a = 5;            // a is now reassigned to 5
  alert(a);             // alert will print 5
}
alert(a);               // alert will print 5