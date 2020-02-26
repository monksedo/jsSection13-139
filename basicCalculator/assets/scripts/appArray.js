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

// Add function
function add() {
    const num = getUserInput();
    logEntries.push(num);
    const initResult = result;
    result += num;
    displayResult(initResult, '+', num);
    printLog('ADD', initResult, num, result);
}

// Subtract function
function subtract() {
    const num = getUserInput();
    logEntries.push(num);
    const initResult = result;
    result -= num;
    displayResult(initResult, '-', num);
    printLog('SUBTRACT', initResult, num, result);
}

// mulpiply function
function multiply() {
    const num = getUserInput();
    logEntries.push(num);
    const initResult = result;
    result *= num;
    displayResult(initResult, '*', num);
    printLog('MULTIPLY', initResult, num, result);
}

// division function
function division() {
    const num = getUserInput();
    logEntries.push(num);
    const initResult = result;
    result /= num;
    displayResult(initResult, '/', num);
    printLog('DIVIDE', initResult, num, result);
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

