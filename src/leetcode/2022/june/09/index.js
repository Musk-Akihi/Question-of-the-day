/**
 * @param {number} x
 * @return {number}
 */
// var reverse = function (x) {
//     let str = x + ''
//     let res = ''
//     if (str[0] === '-') {
//         res = '-'
//         str = str.substr(1)
//     }
//     let num = Number(res + str.split('').reverse().join(''))
//     // 32位有符号整数可表示的范围
//     if (num >= -2147483648 && num <= 2147483647) {
//         return num
//     } else {
//         return 0
//     }
// }

var reverse = function (x) {
    let y = parseInt(x.toString().split('').reverse().join(''))
    if (x < 0) y = -y
    return y < -(2 ** 31) || y > 2 ** 31 - 1 ? 0 : y
}

let x = -8463847412
console.log(reverse(x))
console.log('👻👻👻👻👻👻👻👻👻👻')
