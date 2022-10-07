/**
 * @param {number[]} digits
 * @return {number[]}
 */
let plusOne = function (digits) {
  let index = digits.length - 1
  while (digits[index] === 9) {
    digits[index] = 0
    index--
  }
  index >= 0 && (digits[index] += 1)
  index < 0 && digits.unshift(1)
  return digits
}
let digits = [9]
console.log(plusOne(digits))
console.log('👻👻👻👻👻👻👻👻👻👻')
