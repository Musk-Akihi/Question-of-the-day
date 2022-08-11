/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  let res = []
  let path = []
  nums.sort((a, b) => a - b)

  backtracking(0)
  function backtracking(startIndex) {
    res.push([...path])

    for (let i = startIndex; i < nums.length; i++) {
      path.push(nums[i])
      backtracking(i + 1)
      path.pop()

      while (nums[i] === nums[i + 1]) i = i + 1
    }
  }

  return res
}

let nums = [1, 2, 2, 3]
console.log(subsetsWithDup(nums))
console.log('👻👻👻👻👻👻👻👻👻👻')
