/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let res = []
  let path = []

  backtracking(0)
  function backtracking(startIndex) {
    res.push([...path])

    for (let i = startIndex; i < nums.length; i++) {
      path.push(nums[i])
      backtracking(i + 1)
      path.pop()
    }
  }

  return res
}

let nums = []
console.log(subsets(nums))
console.log('👻👻👻👻👻👻👻👻👻👻')
