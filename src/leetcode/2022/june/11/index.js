/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function (x) {
//     let reverseStr = x.toString().split('').reverse().join('')
//     return x.toString() === reverseStr ? true : false
// }

// let x = 121
// console.log(isPalindrome(x))
// console.log('👻👻👻👻👻👻👻👻👻👻')

var isPalindrome = function (x) {
    let str = x.toString()
    let newStr = ''
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i]
    }
    return str === newStr ? true : false
}

let x = 121
console.log(isPalindrome(x))
console.log('👻👻👻👻👻👻👻👻👻👻')
