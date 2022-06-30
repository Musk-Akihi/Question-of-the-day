var threeSum = function (nums) {
    const result = []
    // 小到大排序
    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length; i++) {
        // 跳过重复数字
        if (i && nums[i] === nums[i - 1]) continue
        // 初始左右值下标
        let leftIndex = i + 1
        let rightIndex = nums.length - 1
        while (leftIndex < rightIndex) {
            const sum = nums[i] + nums[leftIndex] + nums[rightIndex]
            if (sum > 0) {
                rightIndex--
            } else if (sum < 0) {
                leftIndex++
            } else {
                result.push([nums[i], nums[leftIndex++], nums[rightIndex--]])
                while (nums[leftIndex] === nums[leftIndex - 1]) {
                    leftIndex++
                }
                while (nums[rightIndex] === nums[rightIndex + 1]) {
                    rightIndex--
                }
            }
        }
    }

    return result
}

let nums = [-1, 0, 1, 2, -1, -4]
// let nums = [0, 0, 0, 0]

console.log(threeSum(nums))
console.log('👻👻👻👻👻👻👻👻👻👻')
