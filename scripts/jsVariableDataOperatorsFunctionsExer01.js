//////////////////////////////////////////////////////////////////////////////////
// Assignment - Variables, Operators, Data Types
//

/*  1. Create two variables: One that holds a fictional user input (a number of your choice) and one that holds no value initially (e.g. "result").
    2. Set the result variable to 18 plus the value stored in user input.
    3. Add three additional lines of code where you change the result variable again (by subtracting a value of your choice, multiplying it and dividing it).
    4. Think about the value stored in the user input variable you also created - did that value change?
    5. alert() the result and the user input variables (in two separate alert() calls).
*/
let usrInput = 20;
let result;


result = usrInput + 18; // 38
// result = result - 5;  // 33
result -= 5             // 33
alert(result);          // 33

// result = result * 2;  // 66
result *= 2;           // 66
// result = result / 2;  // 33
result /= 2;            // 33
alert(result);        // 33
