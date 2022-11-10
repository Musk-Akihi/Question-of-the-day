// 获取 arguments 对象，类数组对象，不能调用数组方法
function test1() {
  console.log('获取 arguments 对象', arguments)
}
test1(1, 2, 3)

// 获取参数数组  可以调用数组方法
function test2(...args) {
  console.log('获取参数数组', args)
}
test2(1, 2, 3)

// 获取除第一个参数的剩余参数数组
function test3(first, ...args) {
  console.log(first)
  console.log('剩余参数数组', args)
}
test3(1, 2, 3)

// 透传参数
function test4(first, ...args) {
  fn(...args)
  fn(...arguments)
}
function fn() {
  console.log('透传', arguments)
}
test4(1, 2, 3)
