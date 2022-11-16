/**
 * 节流（throttle）:
 * 不管事件触发频率多高，只在单位时间内执行一次
 *
 * 匿名函数的执行环境具有全局性
 */

// 时间戳实现
function throttle(event, time) {
  let pre = 0
  return function (...args) {
    if (Date.now() - pre > time) {
      pre = Date.now()
      event.apply(this, args)
    }
  }
}

// 定时器实现
function throttle(event, time) {
  let timer = null
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null
        event.apply(this, args)
      }, time)
    }
  }
}
