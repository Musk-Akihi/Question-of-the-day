/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    let result = []
    let arr = []
    function backTracking(startIndex) {
        if (arr.length === k) {
            result.push([...arr])
            return
        }
        /**
         * 剪枝
         * n 总长度 k 需要的长度 arr.length 已存在的长度
         * k - arr.length 还需要的长度
         * n - (k - arr.length) + 1 i的至多值
         */
        for (let i = startIndex; i <= n - (k - arr.length) + 1; i++) {
            arr.push(i)
            backTracking(++startIndex)
            arr.pop() // 回溯
        }
    }
    backTracking(1)
    return result
}

let n = 4,
    k = 2
console.log(combine(n, k))
console.log('👻👻👻👻👻👻👻👻👻👻')
