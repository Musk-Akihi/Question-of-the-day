/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = []
  let path = []

  backTracking(nums)
  function backTracking(remainingArr) {
    if (path.length === nums.length) {
      res.push([...path])
      return
    }

    for (let i = 0; i < remainingArr.length; i++) {
      let arr = [...remainingArr]
      arr.splice(i, 1)
      path.push(remainingArr[i])
      backTracking(arr)
      path.pop()
    }
  }

  return res
}

let nums = [1]
console.log(permute(nums))
console.log('👻👻👻👻👻👻👻👻👻👻')
