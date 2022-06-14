/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (arr) {
    let max = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            max = Math.max(Math.min(arr[i], arr[j]) * (j - i), max)
        }
    }
    return max
}

let arr = [1, 2, 1]
console.log(maxArea(arr))
