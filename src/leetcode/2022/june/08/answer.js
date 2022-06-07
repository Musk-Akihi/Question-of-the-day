// 解题思路：
// 使用 map 来存储当前已经遍历过的字符，key 为字符，value 为下标
// 使用 i 来标记无重复子串开始下标，j 为当前遍历字符下标
// 遍历字符串，判断当前字符是否已经在 map 中存在，存在则更新无重复子串开始下标 i 为相同字符的下一位置，此时从 i 到 j 为最新的无重复子串，更新 max ，将当前字符与下标放入 map 中
// 最后，返回 max 即可

var lengthOfLongestSubstring = function (s) {
    let map = new Map(),
        max = 0
    for (let i = 0, j = 0; j < s.length; j++) {
        if (map.has(s[j])) {
            i = Math.max(map.get(s[j]) + 1, i)
        }
        max = Math.max(max, j - i + 1)
        map.set(s[j], j)
    }
    console.log(map)
    console.log('👻👻👻👻👻👻👻👻👻👻')
    return max
}

let s = 'abcabcbbe'
console.log(lengthOfLongestSubstring(s))
console.log('👻👻👻👻👻👻👻👻👻👻')
