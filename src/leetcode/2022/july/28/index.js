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
  if (!wordsLen || sLen < wordsLen * wordsChildLen) return []

  for (let i = 0; i < sLen; i++) {
    let copyWords = [...words]
    let base = 1
    let firstStr = s.slice(i, i + wordsChildLen * base)
    let lastStr = s.slice(
      i + wordsChildLen * (copyWords.length - 1),
      i + wordsChildLen * copyWords.length
    )
    if (lastStr.length < wordsChildLen) break
    deep(copyWords, firstStr, lastStr, i, base)
  }

  function deep(copyWords, firstStr, lastStr, i, base) {
    if (copyWords.indexOf(firstStr) !== -1) {
      copyWords.splice(copyWords.indexOf(firstStr), 1)
      if (!copyWords.length) {
        res.push(i)
        return
      }
    } else return

    if (copyWords.indexOf(lastStr) !== -1) {
      copyWords.splice(copyWords.indexOf(lastStr), 1)
      if (!copyWords.length) {
        res.push(i)
        return
      }
    } else return

    let preStr = s.slice(
      i + wordsChildLen * base,
      i + wordsChildLen * (base + 1)
    )

    let nextStr = s.slice(
      i + wordsChildLen * (wordsLen - base - 1),
      i + wordsChildLen * (wordsLen - base)
    )

    deep(copyWords, preStr, nextStr, i, base + 1)
  }

  return res
}

let s = 'bcabbcaabbccacacbabccacaababcbb',
  words = ['c', 'b', 'a', 'c', 'a', 'a', 'a', 'b', 'c']

console.log(findSubstring(s, words))
console.log('👻👻👻👻👻👻👻👻👻👻')
