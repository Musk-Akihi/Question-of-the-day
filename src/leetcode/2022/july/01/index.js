/**
 * @param {string} digits
 * @return {string[]}
 */

let getMapVal = function (val) {
    let map = new Map([
        [2, 'abc'],
        [3, 'def'],
        [4, 'ghi'],
        [5, 'jkl'],
        [6, 'mno'],
        [7, 'pqrs'],
        [8, 'tuv'],
        [9, 'wxyz']
    ])
    return map.get(+val) || ''
}

let letterCombinations = function (digits) {
    let length = digits.length
    // 无值或者长度为1直接返回
    if (length < 2) return getMapVal(digits).split('')
    let arr = []
    let recursion = function (index, item) {
        // 长度达到
        if (index === length) {
            arr.push(item)
            return
        }
        for (let i = 0; i < getMapVal(digits[index]).length; i++) {
            recursion(index + 1, item + getMapVal(digits[index])[i])
        }
    }
    recursion(0, '')
    return arr
}

let digits = '23'
console.log(letterCombinations(digits))
console.log('👻👻👻👻👻👻👻👻👻👻')
