/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let len = nums.length
  if (len < 2) return nums

  for (let i = len - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      let j = nums[i]
      // 冒泡排序剩位
      for (let m = i; m < len; m++) {
        for (let n = i; n < len; n++) {
          if (nums[n] > nums[n + 1]) {
            ;[nums[n], nums[n + 1]] = [nums[n + 1], nums[n]]
          }
        }
      }
      // 交换 首位与下一位 位置
      for (let x = len - 2; x >= 0; x--) {
        if (nums[x] === j) {
          let y = nums[x + 1]
          nums.splice(x + 1, 1)
          nums.splice(i, 0, y)
          return
        }
      }
      return
    }
  }
  // 翻转数组
  nums.reverse()
}

let nums = [2, 2, 0, 4, 3, 1]
nextPermutation(nums)
console.log(nums)
console.log('👻👻👻👻👻👻👻👻👻👻')
