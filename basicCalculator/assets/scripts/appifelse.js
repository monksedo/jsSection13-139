//////////////////////////////////////////////////////////////////////////
// Badic unconventional calculator
// 

// Gobal variables
const defaultResult = 0;
let result = defaultResult;
let logEntries = [];       // Array example

// get UI/user input data
function getUserInput() {
    return parseFloat(userInput.value);
}

// Output program log to console
function printLog(operator, preResult, num, newResult) {
    const logEntry = {
        operator: operator,
        preResult: preResult,
        num: num,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntry);
    console.log(logEntries);
}

function calcExpression(operType) {
    let num = getUserInput();
    console.log(num);
    operType = operType.toLowerCase();
    if (
        (operType !== '+') &&
        (operType !== '-') &&
        (operType !== '*') &&
        (operType !== '/') ||
        (!num)
    ) {
        return;
    }

    const initResult = result;
    let operator = operType

    console.log(operator);
    if (operType === '+') {
        result += num;
    } else if (operType === '-') {
        result -= num;
    } else if (operType === '*') {
        result *= num;
    } else if (operType === '/') {
        result /= num;
    } else {
        alert('Please enter a number');
    }

    logEntries.push(num);
    displayResult(initResult, operator, num);
    printLog(operType, initResult, num, result);
}

// Add function
function add() {
    calcExpression('+');
}

// Subtract function
function subtract() {
    calcExpression('-');
}

// mulpiply function
function multiply() {
    calcExpression('*');
}

// division function
function division() {
    calcExpression('/');
}

// Display data on UI after calculation
function displayResult(initResult, operator, num) {
    const text = `${initResult} ${operator} ${num}`;
    const preResult = initResult;
    const input = num;
    outputResult(result, text, preResult, input);
}

// Event listener from UI elements
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', division);

