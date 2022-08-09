/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let res
  let left = 0
  let right = nums.length - 1
  let mid

  while (left <= right) {
    if (nums[left] > target) {
      res = left
      break
    }

    if (nums[right] < target) {
      res = right + 1
      break
    }

    if (left + 1 === right) {
      res = nums[left] === target ? left : right
      break
    }

    mid = Math.ceil((left + right) / 2)

    if (nums[mid] > target) {
      right = mid
    } else if (nums[mid] < target) {
      left = mid
    } else {
      res = mid
      break
    }
  }

  return res
}

let nums = [1, 3],
  target = 3
console.log(searchInsert(nums, target))
console.log('👻👻👻👻👻👻👻👻👻👻')
