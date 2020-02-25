//////////////////////////////////////////////////////////////////////////
// Badic unconventional calculator
// 

const defaultResult = 0;
let result = defaultResult;

function getUserInput() {
    return parseFloat(userInput.value);
}

function displayResult(initResult, operator, num) {
    const text = `${initResult} ${operator} ${num}`;
    outputResult(result, text);
}

function add() {
    const num = getUserInput();
    const initResult = result;
    result += num;
    displayResult(initResult, '+', num);
}

function subtract() {
    const num = getUserInput();
    const initResult = result;
    result -= num;
    displayResult(initResult, '-', num);
}

function multiply() {
    const num = getUserInput();
    const initResult = result;
    result *= num;
    displayResult(initResult, '*', num);
}

function division() {
    const num = getUserInput();
    const initResult = result;
    result /= num;
    displayResult(initResult, '/', num);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', division);

