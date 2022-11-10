/**
 * apply 实现类似于 call，参数为数组
 */

Function.prototype.myCall = function (context = globalThis, args) {
  if (this === Function.prototype) {
    return undefined // Function.prototype.myCall() 直接调用
  }
  context = context || globalThis
  const symbol = Symbol()
  context[symbol] = this
  const result = context[symbol](...args)
  delete context[symbol]
  return result
}
