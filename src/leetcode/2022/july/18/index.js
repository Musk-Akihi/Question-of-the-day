/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    let res = []
    let path = []
    nums.sort((a, b) => a - b)

    function backTracking(str, sum) {
        if (path.length === 4) {
            if (sum === target) {
                res.push([...path])
            }
            return
        }
        if (path.length + str.length < 4) return
        for (let i = 0; i < str.length; i++) {
            if (i && str[i] === str[i - 1]) continue
            path.push(str[i])
            sum += str[i]
            backTracking(str.slice(i + 1), sum)
            path.pop()
            sum -= str[i]
        }
    }
    backTracking(nums, null)
    return res
}
let nums = [2, 2, 2, 2, 2],
    target = 8
console.log(fourSum(nums, target))
console.log('👻👻👻👻👻👻👻👻👻👻')
