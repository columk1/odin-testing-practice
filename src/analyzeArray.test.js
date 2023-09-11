const analyzeArray = require('./analyzeArray')

test('When argument is not an array', () => {
  expect(analyzeArray('potato')).toBe('Invalid argument')
})

test('When array contains a non-number', () => {
  expect(analyzeArray(['potato', 4, 5])).toBe('Invalid argument')
})

test('Happy path', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  })
})
