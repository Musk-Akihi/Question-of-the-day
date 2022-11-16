/**
 * 1、处理参数，返回一个闭包
 * 2、判断是否为构造函数调用，如果是则使用 new 调用当前函数
 * 3、如果不是，使用apply，将context和处理好的参数传入
 * 4、函数柯里化
 */

Function.prototype.myBind = function (context, ...args1) {
  if (this === Function.prototype) {
    return undefined
  }
  const that = this
  return function F(...args2) {
    // 判断是否用于构造函数
    return that.apply(this instanceof F ? this : context, args1.concat(args2))
  }
}
