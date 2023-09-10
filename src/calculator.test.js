const calculator = require('./calculator')

test('Add: 2 + 2 equals 4', () => {
  expect(calculator.add(2, 2)).toBe(4)
})

test('Subtract: 2 - 1 equals 1', () => {
  expect(calculator.subtract(2, 1)).toBe(1)
})

test('Divide: 4 / 2 equals 2', () => {
  expect(calculator.divide(4, 2)).toBe(2)
})

test('Multiply: 2 * 3 equals 6', () => {
  expect(calculator.multiply(2, 3)).toBe(6)
})

test('Calculator argument with string returns "Invalid arguments"', () => {
  expect(calculator.add('f', 2)).toBe('Invalid arguments')
})
