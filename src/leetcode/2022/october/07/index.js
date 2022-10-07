/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLastWord = function (s) {
  let res = s.trim()
  let lastIndex = res.lastIndexOf(' ') + 1
  return res.slice(lastIndex).length
}
let s = 'Hello World'
console.log(lengthOfLastWord(s))
console.log('👻👻👻👻👻👻👻👻👻👻')
