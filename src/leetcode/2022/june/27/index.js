/**
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = function (strs) {
    let res = ''
    if (!strs[0]) return res
    for (let i = 0; i < strs[0].length; i++) {
        let val = strs[0].slice(0, i + 1)
        let hasCommon = true

        for (let j = 1; j < strs.length; j++) {
            if (val === strs[j].slice(0, i + 1)) {
                hasCommon = true
            } else {
                hasCommon = false
                break
            }
        }
        if (hasCommon) {
            res = val
        } else {
            res = strs[0].slice(0, i)
            break
        }
    }
    return res
}

let strs = ['flower', 'flow', 'flight']
console.log(longestCommonPrefix(strs))
console.log('👻👻👻👻👻👻👻👻👻👻')
