/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let n = matrix.length

  for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = 0; j < Math.floor((n + 1) / 2); j++) {
      const temp = matrix[i][j]
      matrix[i][j] = matrix[n - j - 1][i]
      matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1]
      matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1]
      matrix[j][n - i - 1] = temp
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
