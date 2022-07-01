/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let threeSumClosest = function (nums, target) {
    let res = null
    let numsLen = nums.length
    // 先排序
    nums.sort((a, b) => a - b)
    // 长度小于等于3返回和
    if (numsLen <= 3) nums.reduce((a, b) => a + b)

    for (let i = 0; i < numsLen; i++) {
        // 跳过重复的基数
        if (i && nums[i] === nums[i - 1]) continue
        // 左初始下标
        let left = i + 1
        // 右初始下标
        let right = numsLen - 1

        while (left < right) {
            // 当前的和
            let currentRes = nums[i] + nums[left] + nums[right]
            // 当前的和 跟 res 比较看谁最接近
            if (
                res == null ||
                (res !== null &&
                    Math.abs(currentRes - target) <= Math.abs(res - target))
            ) {
                res = currentRes
            }
            //根据当前和来决定下标怎么移动
            if (currentRes > target) {
                right--
            } else if (currentRes < target) {
                left++
            } else {
                return res
            }
        }
    }
    return res
}

let nums = [0, 2, 1, -3],
    target = 1

console.log(threeSumClosest(nums, target))
console.log('👻👻👻👻👻👻👻👻👻👻')
