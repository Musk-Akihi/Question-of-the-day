/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  let res = []
  let sLen = s.length
  let wordsLen = words.length
  let wordsChildLen = words[0].length
  let wordsStrLen = wordsLen * wordsChildLen
  if (!wordsLen || sLen < wordsStrLen) return []

  for (let i = 0; i <= sLen - wordsStrLen; i++) {
    let copyWords = [...words]
    let sChild = s.slice(i, i + wordsStrLen)
    let sChildLen = sChild.length

    let leftIndex = 0
    let rightIndex = sChildLen - wordsChildLen

    while (leftIndex <= rightIndex) {
      let leftVal = sChild.slice(leftIndex, leftIndex + wordsChildLen)
      let rightVal = sChild.slice(rightIndex, rightIndex + wordsChildLen)

      if (copyWords.indexOf(leftVal) !== -1) {
        copyWords.splice(copyWords.indexOf(leftVal), 1)
        leftIndex += wordsChildLen
        if (!copyWords.length) {
          res.push(i)
          break
        }
      } else break

      if (copyWords.indexOf(rightVal) !== -1) {
        copyWords.splice(copyWords.indexOf(rightVal), 1)
        rightIndex -= wordsChildLen
        if (!copyWords.length) {
          res.push(i)
          break
        }
      } else break
    }
  }

  return res
}

let s = 'bcabbcaabbccacacbabccacaababcbb',
  words = ['c', 'b', 'a', 'c', 'a', 'a', 'a', 'b', 'c']
// let s = 'barfoofoobarthefoobarman',
//   words = ['bar', 'foo', 'the']

console.log(findSubstring(s, words))
console.log('👻👻👻👻👻👻👻👻👻👻')
