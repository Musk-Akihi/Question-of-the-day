/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLastWord = function (s) {
  let index = s.length - 1
  while (s[index] === ' ') {
    index--
  }
  let res = 0
  while (index >= 0 && s[index] !== ' ') {
    res++
    index--
  }
  return res
}
let s = 'hello  '
console.log(lengthOfLastWord(s))
console.log('👻👻👻👻👻👻👻👻👻👻')
