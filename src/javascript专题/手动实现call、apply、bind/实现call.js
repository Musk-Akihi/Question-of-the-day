/**
 * 1、判断当前this是否为函数，防止 Function.prototype.myCall() 直接调用
 * 2、context 为可选参数，如果不传默认上下文为 globalThis
 * 3、为context 创建一个 Symbol（保证不会重名）属性，将当前函数赋值给这个属性
 * 4、处理参数，传入第一个参数后的其余参数
 * 5、调用函数后删除该 Symbol 属性
 */

Function.prototype.myCall = function (context = globalThis, ...args) {
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

let obj = {
  name: 'dxw',
  sex: 'man',
  fn: function () {
    console.log(this.name)
    console.log('👻👻👻👻👻👻👻👻👻👻')
  }
}
let newObj = {
  name: 'da',
  sex: 'women'
}
obj.fn()
obj.fn.myCall(newObj)
