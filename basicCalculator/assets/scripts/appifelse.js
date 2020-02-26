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
    const num = getUserInput();
    console.log(num);
    operType = operType.toLowerCase();
    if (
        'NaN' && operType === 'add' ||
        'NaN' && operType === 'subtract' ||
        'NaN' && operType === 'multiply' ||
        'NaN' && operType === 'divide'
    ) {
        return;
    }

    console.log(operType);
    const initResult = result;
    let operator;
    if (operType === 'add') {
        result += num;
        operator = '+';
    } else if (operType === 'subtract') {
        result -= num;
        operator = '-';
    } else if (operType === 'multiply') {
        result *= num;
        operator = '*';
    } else if (operType === 'divide') {
        result /= num;
        operator = '/';
    }
    logEntries.push(num);
    displayResult(initResult, operator, num);
    printLog(operType, initResult, num, result);
}

// Add function
function add() {
    calcExpression('Add');
}

// Subtract function
function subtract() {
    calcExpression('Subtract');
}

// mulpiply function
function multiply() {
    calcExpression('Multiply');
}

// division function
function division() {
    calcExpression('Divide');
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

