/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let len = matrix.length
  let arr = JSON.parse(JSON.stringify(matrix))

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      matrix[i][j] = arr[len - 1 - j][i]
    }
  }
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
rotate(matrix)
console.log(matrix)
console.log('👻👻👻👻👻👻👻👻👻👻')
