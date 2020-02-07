const defaultResult = 0
let currentResult = defaultResult
let logEntries = []

// Gets input from input field
function getUserInput() {
  return parseInt(userInput.value)
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBefore, calcNum) {
  const description = `${resultBefore} ${operator} ${calcNum}`
  outputResult(currentResult, description) // from vendor file
}

function writesToLog(
  operationId,
  prevResult,
  operationNum,
  newResult
){
  const logEntry = {
    operation: operationId,
    prevResult: prevResult,
    number: operationNum,
    result: newResult
  }
  logEntries.push(logEntry)
  console.log(logEntries)
}

function add() {
  const enteredNumber = getUserInput()
  const initialResult = currentResult
  currentResult += enteredNumber
  createAndWriteOutput('+', initialResult, enteredNumber)
  writesToLog('ADD', initialResult, enteredNumber, currentResult)
}

function subtract() {
  const enteredNumber = getUserInput()
  const initialResult = currentResult
  currentResult -= enteredNumber
  createAndWriteOutput('-', initialResult, enteredNumber)
  writesToLog('SUBTRACT', initialResult, enteredNumber, currentResult)
}

function multiply() {
  const enteredNumber = getUserInput()
  const initialResult = currentResult
  currentResult *= enteredNumber
  createAndWriteOutput('*', initialResult, enteredNumber)
  writesToLog('MULTIPLY', initialResult, enteredNumber, currentResult)
}

function divide() {
  const enteredNumber = getUserInput()
  const initialResult = currentResult
  currentResult /= enteredNumber
  createAndWriteOutput('/', initialResult, enteredNumber)
  writesToLog('DIVIDE', initialResult, enteredNumber, currentResult)
}

addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)
