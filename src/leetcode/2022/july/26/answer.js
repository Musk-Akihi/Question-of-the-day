var removeElement = function (nums, val) {
  let left = 0,
    right = nums.length
  while (left < right) {
    if (nums[left] === val) {
      nums[left] = nums[right - 1]
      right--
    } else {
      left++
    }
  }
  return left
}

let nums = [0, 1, 2, 2, 3, 0, 4],
  val = 2
console.log(removeElement(nums, val))
console.log('👻👻👻👻👻👻👻👻👻👻')
