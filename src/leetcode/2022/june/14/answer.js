/**
 * @param {number[]}
 * @return {number}
 */
var maxArea = function (arr) {
    let minVal = 0
    let maxVal = arr.length - 1
    let value = 0

    while (minVal < maxVal) {
        value = Math.max(
            Math.min(arr[maxVal], arr[minVal]) * (maxVal - minVal),
            value
        )
        if (arr[maxVal] > arr[minVal]) {
            minVal++
        } else {
            maxVal--
        }
    }

    return value
}

let arr = [1, 8, 6, 2, 5, 4, 8, 3, 7]
console.log(maxArea(arr))
