/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  let res = []
  let m = words.length
  let n = words[0].length
  let ls = s.length

  for (let i = 0; i < n; i++) {
    if (i + m * n > ls) break
    let differ = new Map()
    for (let j = 0; j < m; j++) {
      const word = s.substring(i + j * n, i + (j + 1) * n)
      differ.set(word, (differ.get(word) || 0) + 1)
    }
    for (let word of words) {
      differ.set(word, (differ.get(word) || 0) - 1)
      if (differ.get(word) === 0) {
        differ.delete(word)
      }
    }

    for (let start = i; start < ls - m * n + 1; start += n) {
      if (start > i) {
        let word = s.substring(start + (m - 1) * n, start + m * n)
        differ.set(word, (differ.get(word) || 0) + 1)
        if (differ.get(word) === 0) {
          differ.delete(word)
        }

        word = s.substring(start - n, start)
        differ.set(word, (differ.get(word) || 0) - 1)
        if (differ.get(word) === 0) {
          differ.delete(word)
        }
      }

      if (differ.size === 0) {
        res.push(start)
      }
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
