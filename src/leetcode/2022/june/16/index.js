/**
 * @param {string} s
 * @return {number}
 */
let map = new Map([
    ['CM', 900],
    ['M', 1000],
    ['CD', 400],
    ['D', 500],
    ['XC', 90],
    ['C', 100],
    ['XL', 40],
    ['L', 50],
    ['IX', 9],
    ['X', 10],
    ['IV', 4],
    ['V', 5],
    ['I', 1]
])
var romanToInt = function (s) {
    let res = 0
    while (s.length) {
        if (map.get(s.slice(0, 2))) {
            res += map.get(s.slice(0, 2))
            s = s.slice(2)
        } else {
            res += map.get(s.slice(0, 1))
            s = s.slice(1)
        }
    }
    return res
}

console.log(romanToInt('MCMXCIV'))
console.log('👻👻👻👻👻👻👻👻👻👻')
