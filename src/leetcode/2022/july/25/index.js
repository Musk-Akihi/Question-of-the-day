/**
 * @param {number[]} nums
 * @return {number}
 * 快慢指针解法
 */
var removeDuplicates = function (nums) {
  const n = nums.length
  if (n === 0) return 0
  let fast = 1,
    slow = 1
  while (fast < n) {
    if (nums[fast] !== nums[fast - 1]) {
      nums[slow] = nums[fast] // 覆盖
      slow++
    }
    fast++
  }
  return slow
}

let nums = [1, 1, 2, 2, 3, 3]
console.log(removeDuplicates(nums))
console.log('👻👻👻👻👻👻👻👻👻👻')
