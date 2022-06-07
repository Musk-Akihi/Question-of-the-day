/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    // 一次 |/ 的 数量为
    let vNum = numRows > 2 ? numRows + (numRows - 2) : numRows
    let arr = []

    for (let i = 0; i < s.length; i++) {
        let row = 0
        let j = i + 1
        // 余数
        let residue = j % vNum
        if (residue) {
            // 有余数且余数小于行数
            if (residue < numRows) {
                row = residue
            } else {
                // 余数大于行数
                row = numRows - (residue - numRows)
            }
            // 无余数
        } else {
            row = 2
        }
        arr.push({
            row,
            value: s[i]
        })
    }

    let arrSort = arr.sort((a, b) => a.row - b.row)
    return arrSort.reduce((total, cur) => total + cur.value, '')
}

let s = 'PAYPALISHIRING',
    numRows = 4
console.log(convert(s, numRows))
