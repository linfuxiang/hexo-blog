/**
 * 关键点：
 * 1.循环引用
 * 2.函数（定义新函数，通过apply绑定）、正则（通过new RegExp，带上source和flags）、日期（new Date）等类型
 * 3.数组和对象，克隆一份新的对象出来（Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj))），然后递归
 * 4.普通类型直接返回
 */
let map = new WeakMap();
function deepClone(obj) {
  if (obj instanceof Object) {
    if (map.has(obj)) {
      return map.get(obj);
    }
    let newObj;
    if (obj instanceof Array) {
      newObj = [];
    } else if (obj instanceof Function) {
      newObj = function () {
        return obj.apply(this, arguments);
      };
    } else if (obj instanceof RegExp) {
      // 拼接正则
      newobj = new RegExp(obj.source, obj.flags);
    } else if (obj instanceof Date) {
      newobj = new Date(obj);
    } else {
      newObj = {};
    }
    // 克隆一份对象出来
    let desc = Object.getOwnPropertyDescriptors(obj);
    let clone = Object.create(Object.getPrototypeOf(obj), desc);
    map.set(obj, clone);
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        newObj[key] = deepClone(obj[key]);
      }
    }
    return newObj;
  }
  return obj;
}
