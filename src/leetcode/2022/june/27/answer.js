/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length <= 0) {
        return res[0] || ''
    }
    strs.sort()
    let result = ''
    for (let i = 0; i < strs[0].length, i < strs[strs.length - 1].length; i++) {
        if (strs[0].charAt(i) === strs[strs.length - 1].charAt(i)) {
            result = strs[0].slice(0, i + 1)
        } else {
            break
        }
    }
    return result
}

let strs = ['flower', 'flow', 'flight']
console.log(longestCommonPrefix(strs))
console.log('👻👻👻👻👻👻👻👻👻👻')
