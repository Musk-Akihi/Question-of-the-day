/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let result = []
    let path = []
    let sum = 0
    // 排序
    candidates.sort((a, b) => a - b)

    function backTracking(startIndex) {
        if (sum > target) return
        if (sum === target) {
            result.push([...path])
        }
        for (let i = startIndex; i < candidates.length; i++) {
            path.push(candidates[i])
            sum += candidates[i]
            // 剪枝
            if (sum > target) {
                path.pop()
                sum -= candidates[i]
                return
            }
            backTracking(i)
            // 回溯
            path.pop()
            sum -= candidates[i]
        }
    }
    backTracking(0)
    return result
}

let candidates = [2, 3, 5],
    target = 8
console.log(combinationSum(candidates, target))
console.log('👻👻👻👻👻👻👻👻👻👻')
