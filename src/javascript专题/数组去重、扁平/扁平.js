/**
 * flat
 */

let arr01 = [1, [2, [3, [4, [5]]]]]
// console.log(arr01.flat(Infinity))
// console.log(arr01.flat(5 - 1))
// console.log('👻👻👻👻👻👻👻👻👻👻')

/**
 * for循环递归
 */

function backTracking(arr) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    Array.isArray(arr[i]) ? res.push(...backTracking(arr[i])) : res.push(arr[i])
  }
  return res
}
// console.log(backTracking(arr01))
// console.log('👻👻👻👻👻👻👻👻👻👻')

/**
 * reduce
 */

function flatten(array) {
  return array.reduce(
    (target, current) =>
      Array.isArray(current)
        ? target.concat(flatten(current))
        : target.concat(current),
    []
  )
}

console.log(flatten(arr01))
console.log('👻👻👻👻👻👻👻👻👻👻')
