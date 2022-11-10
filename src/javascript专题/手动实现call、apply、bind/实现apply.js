/**
 * apply 实现类似于 call，参数为数组
 */

Function.prototype.myApply = function (context = globalThis, args) {
  if (this === Function.prototype) {
    return undefined // Function.prototype.myApply() 直接调用
  }
  context = context || globalThis
  const symbol = Symbol()
  context[symbol] = this
  const result = Array.isArray(args)
    ? context[symbol](...args)
    : context[symbol]()
  delete context[symbol]
  return result
}
