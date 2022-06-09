/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    if (parseInt(s) > 2 ** 31 - 1) {
        return 2 ** 31 - 1
    }
    if (parseInt(s) < (-2) ** 31) {
        return (-2) ** 31
    }
    return ~~parseInt(s)
}

let s = '    -4191234567543213453 with words'
console.log(myAtoi(s))
console.log('👻👻👻👻👻👻👻👻👻👻')
