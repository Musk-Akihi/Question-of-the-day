/**
 * @param {string}
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let len = s.length
    let maxLen = 0
    let sleft = ''
    for (let i = 0; i < len; i++) {
        let rpIdx = sleft.indexOf(s[i])
        if (rpIdx > -1) {
            sleft = sleft.slice(rpIdx + 1)
        }
        sleft += s[i]
        maxLen = Math.max(sleft.length, maxLen)
    }
    return maxLen
}

let s = 'abcabcbbe'
console.log(lengthOfLongestSubstring(s))
console.log('👻👻👻👻👻👻👻👻👻👻')
