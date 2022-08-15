/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  const length = nums.length
  for (let i = 0; i < length; i++) {
    while (
      nums[i] != i + 1 &&
      nums[i] <= length &&
      nums[i] > 0 &&
      nums[nums[i] - 1] != nums[i]
    ) {
      let temp = nums[nums[i] - 1]
      nums[nums[i] - 1] = nums[i]
      nums[i] = temp
    }
  }

  for (let i = 0; i < length; i++) {
    if (nums[i] != i + 1) return i + 1
  }

  return nums.length + 1
}

let nums = [3, 4, -1, 1]
console.log(firstMissingPositive(nums))
console.log('👻👻👻👻👻👻👻👻👻👻')
