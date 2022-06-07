// 动态规划
var longestPalindrome = function (s) {
    // 定义返回的最长回文子串
    let res = ''
    // 开始循环每一个字符
    for (let i = 0; i < s.length; i++) {
        // 当回文子串为奇数时 // bab
        test(i, i)
        // 当回文子串为偶数时 // aa
        test(i, i + 1)
    }
    function test(m, n) {
        console.log(m + '-----' + n)
        console.log('👻👻👻👻👻👻👻👻👻👻')
        // 首先不能越界，其次两个元素要相等，然后m左移，n右移进行比较
        while (m >= 0 && n < s.length && s[m] === s[n]) {
            m--
            n++
        }
        // 比较当前回文字符串的长度是否比前面的回文字符串长度长，长则进行更新。
        if (n - m - 1 > res.length) {
            res = s.slice(m + 1, n)
        }
    }
    return res
}

let s = 'cbabc'
console.log(longestPalindrome(s))
console.log('👻👻👻👻👻👻👻👻👻👻')
