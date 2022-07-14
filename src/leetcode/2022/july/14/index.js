/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    let result = []
    let path = []
    // 是否回文子串
    function isPalindrome(str) {
        let left = 0,
            right = str.length - 1
        while (left < right) {
            if (str[left] === str[right]) {
                left++
                right--
            } else return false
        }
        return true
    }
    // 递归
    function backTracking(subStr) {
        if (!subStr.length) {
            result.push([...path])
            return
        }
        for (let i = 1; i <= subStr.length; i++) {
            // 前面串是回文串的话 存起来 递归后面串
            if (!isPalindrome(subStr.slice(0, i))) continue
            path.push(subStr.slice(0, i))
            backTracking(subStr.slice(i))
            // 回溯
            path.pop()
        }
    }
    backTracking(s)
    return result
}

let s = ''
console.log(partition(s))
console.log('👻👻👻👻👻👻👻👻👻👻')
