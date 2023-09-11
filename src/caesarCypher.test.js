const caesarCypher = require('./caesarCypher')

test('Lowercase without wrapping from z to a', () => {
  expect(caesarCypher('hello', 10)).toBe('rovvy')
})

test('Uppercase without wrapping from Z to A', () => {
  expect(caesarCypher('HELLO', 10)).toBe('ROVVY')
})

test('Lowercase with wrapping from z to a', () => {
  expect(caesarCypher('z', 1)).toBe('a')
})

test('Uppercase with wrapping from Z to A', () => {
  expect(caesarCypher('Z', 1)).toBe('A')
})

test('Mixed case', () => {
  expect(caesarCypher('Zz', 1)).toBe('Aa')
})

test('Includes non alphabetical characters', () => {
  expect(caesarCypher('g# Y7.', 1)).toBe('h# Z7.')
})

test('Input is not a string', () => {
  expect(caesarCypher(545905, 1)).toBe('not a string')
})
