/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (!s.length) return true
  // 奇数
  if (s.length & 1) return false

  const stack = []
  const map = new Map([
    ['(', ')'],
    ['[', ']'],
    ['{', '}']
  ])

  for (let i = 0; i < s.length; i++) {
    let current = s[i]

    if (map.has(current)) {
      stack.push(current)
    } else {
      if (map.get(stack[stack.length - 1]) === current) {
        stack.pop()
      } else {
        return false
      }
    }
  }

  return !stack.length
}

console.log(isValid('[[()]]'))
console.log('👻👻👻👻👻👻👻👻👻👻')
