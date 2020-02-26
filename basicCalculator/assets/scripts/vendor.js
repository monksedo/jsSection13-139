const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');


const currentCalculationOutput = document.getElementById('current-calculation');
const currentResultOutput = document.getElementById('current-result');
const inputNum = document.getElementById('user-input');
const preResult = document.getElementById('pre-result');

function outputResult(result, text, preRes, input) {
  currentCalculationOutput.textContent = text;
  currentResultOutput.textContent = result;
  preResult.textContent = preRes;
  inputNum.textContent = input;
}


