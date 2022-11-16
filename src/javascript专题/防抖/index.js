/**
 * 防抖（debounce）：
 * 不管事件触发频率多高，一定在事件触发n秒后才执行。
 * 如果你在一个事件触发的 n 秒内又触发了这个事件，就以新的事件的时间为准，n秒后才执行，总之，触发完事件 n 秒内不再触发事件，n秒后再执行。
 */

function debounce(event, time, flag) {
  let timer = null
  return function (...args) {
    clearTimeout(timer)
    if (flag && !timer) {
      event.apply(this, args)
    }
    timer = setTimeout(() => {
      event.apply(this, args)
    }, time)
  }
}

debounce(
  function () {
    console.log(arguments)
    console.log('👻👻👻👻👻👻👻👻👻👻')
  },
  3000,
  true
)(1, 2, 3, 4, 5)
