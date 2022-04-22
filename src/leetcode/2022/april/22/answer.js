/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/**
 * 解题思路
 * 循环将数组中的元素以值为 key，下标作为 value，放到 map 结构中
 * 再以 target 和当前值的 差 在map中查找是否存在
 * 存在就说明map中有与当前值的和为target，分别取出
 */

let twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i];
    if (map.has(difference)) {
      return [map.get(difference), i];
    }
    map.set(nums[i], i);
  }
};

let nums = [2, 3, 5, 4],
  target = 6;
console.log(twoSum(nums, target));
