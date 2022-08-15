/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  nums.sort((a, b) => a - b)
  if (nums[0] > 1 || !nums.includes(1)) return 1

  for (let i = 0; i < nums.length; i++) {
    if (
      nums[i] + 1 < 1 ||
      nums[i + 1] === nums[i] ||
      nums[i + 1] - nums[i] == 1
    ) {
      continue
    } else {
      return nums[i] + 1
    }
  }

  return 1
}

let nums = [-1, -2, -60, 40, 43]
console.log(firstMissingPositive(nums))
console.log('👻👻👻👻👻👻👻👻👻👻')
