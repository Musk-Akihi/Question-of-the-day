/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 输入：nums = [3,2,4], target = 6
 * 输出：[1,2]
 */

/*
  let twoSum = function (nums, target) {
    let len = nums.length;
    let arr = null;
    for (let i = 0; i < len; i++) {
      if (arr) break;
      for (let j = i + 1; j < len; j++) {
        if (arr) break;
        if (nums[i] + nums[j] === target) {
          arr = [i, j];
          break;
        }
      }
    }
    return arr;
  };

  let nums = [3, 2, 4];
  let target = 6;
  console.log(twoSum(nums, target));
 */

/*
  let twoSum = function (nums, target) {
    let len = nums.length;
    let arr = null;
    for (let i = 0; i < len; i++) {
      let res = target - nums[i];
      let resIndex = nums.indexOf(res, i + 1);
      if (resIndex !== -1) {
        arr = [i, resIndex];
        break;
      }
    }
    return arr;
  };
  
  let nums = [2, 3, 3],
    target = 6;
  console.log(twoSum(nums, target));
 */
