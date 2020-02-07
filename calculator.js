
// Make a Calculator! using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.
// 2. Stores that first number
// 3. Prompts the user for the second number.
// 4. stores that number and responds with the SUM by using an alert.  


// BONUS: Make a program that can subtract, multiply, and also divide!

// Adding two numbers
var num1 = prompt('Enter the first number:');
var num2 = prompt('Enter the second number:');
num1 = Number(num1);
num2 = Number(num2);
var sum = num1 + num2;

// BONUS: Subtract
var sub = num1 - num2;

// Multiplication
var pro = num1 * num2;

// Divide
var div = num1 / num2;

// Print result for all problems
alert(num1 + " + " + num2 + " = " + sum);
alert(num1 + " - " + num2 + " = " + sub);
alert(num1 + " * " + num2 + " = " + pro);
alert(num1 + " / " + num2 + " = " + div);


