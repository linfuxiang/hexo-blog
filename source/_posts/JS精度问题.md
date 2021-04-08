---
title: JS精度问题
date: 2021-04-08 11:37:29
tags:
---

## 精度问题

#### 浮点数精度

判断是否符合相等，只要精度误差在`Number.EPSILON`范围内，可以判断为相等

```javascript
function withinErrorMargin(left, right) {
  return Math.abs(left - right) < Number.EPSILON;
}
withinErrorMargin(0.1 + 0.2, 0.3);
```

#### 解决办法

1. 重写加减乘除运算函数
2. 扩大缩小法
3. 使用`number-precision`库

#### 一些常用的函数或常量

- `Number.EPSILON`常量，代表误差可接受范围
- `Number.prototype.toPrecision`函数，类似`toFixed`，可能会四舍五入

## BigInt 存在的一些坑

1. 对象/数组中，key 值是字符类型的

```javascript
let obj = {};
obj[9007199254740993n] = 'foo';

obj[9007199254740993n] === 'foo'; // true
obj['9007199254740993'] === 'foo'; // true
```

1. 不存在`+0`和`-0`之分
2. 不能使用`new`创建`BigInt`实例，而且值必须是整数或布尔值

```javascript
BigInt(1.0001); // Uncaught RangeError
```

[参考文章](https://zhuanlan.zhihu.com/p/36385254)
