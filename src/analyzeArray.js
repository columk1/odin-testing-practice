function analyzeArray(arr) {
  return !isValid(arr)
    ? 'Invalid argument'
    : {
        average: arr.reduce((a, b) => a + b, 0) / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length,
      }
}

function isValid(arr) {
  return Array.isArray(arr) ? arr.every((num) => typeof num === 'number') : false
}

module.exports = analyzeArray
