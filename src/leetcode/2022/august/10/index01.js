/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let res = []
  let path = []
  nums.sort((a, b) => a - b)

  backTracking(nums)
  function backTracking(remainingArr) {
    if (path.length === nums.length) {
      res.push([...path])
      return
    }

    for (let i = 0; i < remainingArr.length; i++) {
      if (i && remainingArr[i] === remainingArr[i - 1]) continue

      let arr = [...remainingArr]
      arr.splice(i, 1)

      path.push(remainingArr[i])
      backTracking(arr)
      path.pop()

      // while (remainingArr[i] === remainingArr[i + 1]) i++
    }
  }

  return res
}

// 包含重复数字
let nums = [3, 3, 0, 3]
console.log(permuteUnique(nums))
console.log('👻👻👻👻👻👻👻👻👻👻')
