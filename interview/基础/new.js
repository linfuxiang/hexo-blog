/**
 * 自己实现一个
 * 1.新生成了一个对象
 * 2.对象连接到构造函数原型上，并绑定 this
 * 3.执行构造函数代码
 * 4.返回新对象
 */

function new_operator(_constructor, ...args) {
  // 创建新对象obj，并关联obj原型到构造函数原型对象上
  let obj = Object.create(_constructor.prototype);

  // 执行构造函数，且绑定this到新对象Obj上，实现继承。同时接受返回值res
  let res = _constructor.apply(obj, args);

  // 返回值判断
  return res instanceof Object ? res : obj;
}
