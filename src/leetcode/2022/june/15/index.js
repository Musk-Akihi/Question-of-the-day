let map = new Map([
    [1, 'I'],
    [4, 'IV'],
    [5, 'V'],
    [9, 'IX'],
    [10, 'X'],
    [40, 'XL'],
    [50, 'L'],
    [90, 'XC'],
    [100, 'C'],
    [400, 'CD'],
    [500, 'D'],
    [900, 'CM'],
    [1000, 'M']
])
const intToRoman = function (num) {
    let divisor = getDivisor(num)
    let res = ''
    while (divisor) {
        res += new Array(parseInt(num / divisor) + 1).join(map.get(divisor))
        num = num - parseInt(num / divisor) * divisor
        // 跳出
        if (divisor === 1) {
            divisor = 0
            break
        }
        divisor = getDivisor(num % divisor)
    }
    return res
}

const getDivisor = function (num) {
    let arr = Array.from(map)
        .map(item => item[0])
        .reverse()
    let divisor = 1 // 除数
    for (let i = 0; i < arr.length; i++) {
        if (num >= arr[i]) {
            divisor = arr[i]
            break
        }
    }
    return divisor
}

console.log(intToRoman(9999))
console.log('👻👻👻👻👻👻👻👻👻👻')
