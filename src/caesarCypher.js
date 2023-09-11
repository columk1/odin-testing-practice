function shift(char, k, caseCode) {
  return String.fromCharCode(((char.charCodeAt() - caseCode + k) % 26) + caseCode)
}

function caesarCypher(input, k = 10) {
  return typeof input !== 'string'
    ? 'not a string'
    : input
        .replace(/[a-z]/g, (char) => shift(char, k, 97))
        .replace(/[A-Z]/g, (char) => shift(char, k, 65))
}

module.exports = caesarCypher
