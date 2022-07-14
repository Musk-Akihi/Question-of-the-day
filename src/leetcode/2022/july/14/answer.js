/**
 * @param {string} s
 * @return {string[][]}
 */

let partition = function (s) {
    let res = [],
        path = [],
        len = s.length

    function isPalindrome(leftIndex, rightIndex) {
        for (let i = leftIndex, j = rightIndex; i < j; i++, j--) {
            if (s[i] !== s[j]) return false
        }
        return true
    }
    function backTracking(startIndex) {
        if (startIndex === len) {
            res.push([...path])
            return
        }
        for (let i = startIndex; i < len; i++) {
            if (!isPalindrome(startIndex, i)) continue
            path.push(s.slice(startIndex, i + 1))
            backTracking(i + 1)
            path.pop()
        }
    }
    backTracking(0)
    return res
}

let s = 'aba'
console.log(partition(s))
console.log('👻👻👻👻👻👻👻👻👻👻')
