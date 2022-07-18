/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    let res = [],
        length = nums.length
    nums.sort((a, b) => a - b)

    // 第一位
    for (let i = 0; i < length - 3; i++) {
        // 当前位跟上一位重复 跳过
        if (i && nums[i] === nums[i - 1]) continue
        // 连续四位之和大于target的话 直接退出
        if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break
        // 当前位跟倒数前三位之和小于target的话 跳过
        if (
            nums[i] + nums[length - 1] + nums[length - 2] + nums[length - 3] <
            target
        )
            continue
        // 第二位
        for (let j = i + 1; j < length - 2; j++) {
            // 当前位等于上一位 跳过
            if (j > i + 1 && nums[j] === nums[j - 1]) continue
            // 连续四位之和大于target的话 直接退出
            if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break
            // 当前位跟倒数前二位之和小于target的话 跳过
            if (
                nums[i] + nums[j] + nums[length - 2] + nums[length - 1] <
                target
            )
                continue

            // 第三位
            let left = j + 1,
                // 第四位
                right = length - 1
            while (left < right) {
                let sum = nums[i] + nums[j] + nums[left] + nums[right]
                if (sum < target) {
                    left++
                } else if (sum > target) {
                    right--
                } else {
                    res.push([nums[i], nums[j], nums[left], nums[right]])
                    while (left < right && nums[left] === nums[left + 1]) {
                        left++
                    }
                    left++
                    while (left < right && nums[right] === nums[right - 1]) {
                        right--
                    }
                    right--
                }
            }
        }
    }

    return res
}
let nums = [1, 0, -1, 0, 0, -2, 2],
    target = 0
console.log(fourSum(nums, target))
console.log('👻👻👻👻👻👻👻👻👻👻')
