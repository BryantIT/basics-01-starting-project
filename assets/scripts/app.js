const defaultResult = 0
let currentResult = defaultResult

function getUserInput() {
  return parseInt(userInput.value)
}

function add(num1, num2) {
  const enteredNumber = getUserInput()
  const description = `${currentResult} + ${enteredNumber}`
  currentResult = currentResult + enteredNumber
  outputResult(currentResult, description)
}

addBtn.addEventListener('click', add)
