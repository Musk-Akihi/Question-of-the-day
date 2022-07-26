/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  needle += ''
  let res = -1
  if (needle === '') return 0
  if (!haystack.length) return -1
  for (let i = 0; i < haystack.length; i++) {
    if (
      haystack[i] === needle[0] &&
      haystack.slice(i, i + needle.length) === needle
    ) {
      res = i
      break
    }
  }
  return res
}
let haystack = '123456',
  needle = '6'
console.log(strStr(haystack, needle))
console.log('👻👻👻👻👻👻👻👻👻👻')
