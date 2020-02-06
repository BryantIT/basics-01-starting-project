const defaultResult = 0
let currentResult = defaultResult

// Gets input from input field
function getUserInput() {
  return parseInt(userInput.value)
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBefore, calcNum) {
  const description = `${resultBefore} ${operator} ${calcNum}`
  outputResult(currentResult, description) // from vendor file
}

function add() {
  const enteredNumber = getUserInput()
  const initialResult = currentResult
  currentResult += enteredNumber
  createAndWriteOutput('+', initialResult, enteredNumber)
}

function subtract() {
  const enteredNumber = getUserInput()
  const initialResult = currentResult
  currentResult -= enteredNumber
  createAndWriteOutput('-', initialResult, enteredNumber)
}

function multiply() {
  const enteredNumber = getUserInput()
  const initialResult = currentResult
  currentResult *= enteredNumber
  createAndWriteOutput('*', initialResult, enteredNumber)
}

function divide() {
  const enteredNumber = getUserInput()
  const initialResult = currentResult
  currentResult /= enteredNumber
  createAndWriteOutput('/', initialResult, enteredNumber)
}

addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)
