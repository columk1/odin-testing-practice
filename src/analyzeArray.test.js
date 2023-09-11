const analyzeArray = require('./analyzeArray')

test('Not an array: analyzeArray("potato") returns "Invalid argument"', () => {
  expect(analyzeArray('potato')).toBe('Invalid argument')
})

test('Array contains non-number: analyzeArray(["potato", 4, 5]) returns "Invalid argument"', () => {
  expect(analyzeArray(['potato', 4, 5])).toBe('Invalid argument')
})

test('analyzeArray([1,8,3,4,2,6]) returns { average: 4, min: 1, max: 8, length: 6 }', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  })
})
