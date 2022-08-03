/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let res = []
  let path = []
  candidates.sort((a, b) => a - b)
  let len = candidates.length

  backTracking(0, 0)
  function backTracking(sum, startIndex) {
    if (sum === target) {
      res.push([...path])
      return
    }

    for (let i = startIndex; i < len; i++) {
      // 剪枝
      if (candidates[i] > target) break

      path.push(candidates[i])
      sum += candidates[i]

      if (sum > target) {
        sum -= candidates[i]
        path.pop()
        break
      }

      // 回溯
      backTracking(sum, i + 1)
      sum -= candidates[i]
      path.pop()

      // 去重
      while (candidates[i] === candidates[i + 1]) {
        i++
      }
    }
  }

  return res
}

let candidates = [10, 1, 2, 7, 6, 1, 5],
  target = 8
console.log(combinationSum2(candidates, target))
console.log('👻👻👻👻👻👻👻👻👻👻')
