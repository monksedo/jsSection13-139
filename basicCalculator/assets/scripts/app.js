//////////////////////////////////////////////////////////////////////////
// Badic unconventional calculator
// 

const defaultResult = 0;
let result = defaultResult;

function getUserInput() {
    return parseFloat(userInput.value);
}

function add() {
    const num = getUserInput();
    console.log(result);
    const text = `${result} + ${num}`;
    result += num;
    console.log(result);
    outputResult(result, text);
    return result;
}
function subtract() {
    const num = getUserInput();
    console.log(result);
    const text = `${result} - ${num}`;
    result -= num;
    console.log(result);
    outputResult(result, text);
    return result;
}
function multiply() {
    const num = getUserInput();
    console.log(result);
    const text = `${result} * ${num}`;
    result *= num;
    console.log(result);
    outputResult(result, text);
    return result;
}
function division() {
    const num = getUserInput();
    console.log(result);
    const text = `${result} / ${num}`;
    result /= num;
    console.log(result);
    outputResult(result, text);
    return result;
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', division);

// outputResult(result, text);

