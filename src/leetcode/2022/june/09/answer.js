var reverse = function (x) {
    let rev = 0
    while (x !== 0) {
        // 取余
        const digit = x % 10
        // 除10取整
        x = ~~(x / 10)
        // 乘10相加当前余数
        rev = rev * 10 + digit
        if (rev < (-2) ** 31 || rev > 2 ** 31 - 1) {
            return 0
        }
    }
    return rev
}

let x = -8463847
console.log(reverse(x))
console.log('👻👻👻👻👻👻👻👻👻👻')
