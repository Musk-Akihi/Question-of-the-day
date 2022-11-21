/**
 * Object
 * 开辟一个外部存储空间用于标识元素是否出现过
 */

const unique01 = arr => {
  let container = {}
  let res = arr.filter(item =>
    container.hasOwnProperty(item) ? false : (container[item] = true)
  )
  return res
}

/**
 * indexOf + filter
 */

const unique02 = arr => arr.filter((item, index) => arr.indexOf(item) === index)

/**
 * Set
 */

const unique03 = arr => [...new Set(arr)]
const unique04 = arr => Array.from(new Set(arr))

/**
 * 只要数字出现重复次，就将其移除掉
 */

const unique05 = arr =>
  arr.filter(item => arr.indexOf(item) === arr.lastIndexOf(item))

console.log(unique05([1, 2, 3, 4, 3, 2, 1]))
console.log('👻👻👻👻👻👻👻👻👻👻')
