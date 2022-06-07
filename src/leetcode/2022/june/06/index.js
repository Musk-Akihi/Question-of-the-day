/**
 * @param {string} s
 * @return {string}
 * 回文的意思是正着念和倒着念一样，如：上海自来水来自海上
 */

// 暴力解法
var longestPalindrome = function (s) {
    let value = ''
    for (let i in s) {
        if (s.slice(i).length < value.length) break
        console.log(i)
        console.log('👻👻👻👻👻👻👻👻👻👻')

        // 从后往前倒
        let latelyIndex = s.lastIndexOf(s[i])
        while (latelyIndex !== -1) {
            let str = s.slice(i, latelyIndex + 1)
            let reverse = str.split('').reverse().join('')
            // 是否回文
            if (str === reverse) {
                value = str.length > value.length ? str : value
                // 终止while循环
                break
            }
            latelyIndex = s.lastIndexOf(s[i], latelyIndex - 1)
        }
    }
    return value
}

let str = 'abcbaa'
console.log(longestPalindrome(str))
