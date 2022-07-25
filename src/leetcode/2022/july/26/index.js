/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let len = nums.length
  if (len === 0) return 0
  let left = 0
  let right = len - 1
  while (left <= right) {
    if (nums[left] === val) {
      nums.splice(left, 1)
      len--
    } else {
      left++
    }
    if (nums[right] === val) {
      nums.splice(right, 1)
      len--
    } else {
      right--
    }
  }
  return nums.length
}
let nums = [0, 1, 2, 2, 3, 0, 4],
  val = 2
console.log(removeElement(nums, val))
console.log(nums)
console.log('👻👻👻👻👻👻👻👻👻👻')
