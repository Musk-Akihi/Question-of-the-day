/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var searchRange = function (nums, target) {
//   return [nums.indexOf(target), nums.lastIndexOf(target)]
// }

var searchRange = function (nums, target) {
  let start = -1,
    end = -1
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    if (start === -1) {
      if (nums[left] === target) {
        start = left
      } else left++
    }

    if (end === -1) {
      if (nums[right] === target) {
        end = right
      } else right--
    }

    if (start !== -1 && end !== -1) break
  }

  return [start, end]
}

let nums = [5, 7, 7, 8, 8, 10],
  target = 11
console.log(searchRange(nums, target))
console.log('👻👻👻👻👻👻👻👻👻👻')
