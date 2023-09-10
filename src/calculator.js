const validArgs = (a, b) => {
  return typeof a === 'number' && typeof b === 'number'
}

const add = (a, b) => {
  return validArgs(a, b) ? a + b : 'Invalid arguments'
}

const subtract = (a, b) => {
  return validArgs(a, b) ? a - b : 'Invalid arguments'
}

const divide = (a, b) => {
  return validArgs(a, b) ? a / b : 'Invalid arguments'
}

const multiply = (a, b) => {
  return validArgs(a, b) ? a * b : 'Invalid arguments'
}

const calculator = {
  add,
  subtract,
  divide,
  multiply,
}

module.exports = calculator
