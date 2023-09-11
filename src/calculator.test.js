const calculator = require('./calculator')

test('Add', () => {
  expect(calculator.add(2, 2)).toBe(4)
})

test('Subtract', () => {
  expect(calculator.subtract(2, 1)).toBe(1)
})

test('Divide', () => {
  expect(calculator.divide(4, 2)).toBe(2)
})

test('Multiply', () => {
  expect(calculator.multiply(2, 3)).toBe(6)
})

test('Argument NaN returns "Invalid arguments"', () => {
  expect(calculator.add('f', 2)).toBe('Invalid arguments')
})
