## 外观模式

封装一个统一、简洁、易用的接口/方法，比如封装一个可以兼容各浏览器版本的绑定 DOM 事件的方法

```javascript
// 绑定事件
function addEvent(element, event, handler) {
    if (element.addEventListener) {
        element.addEventListener(event, handler, false);
    } else if (element.attachEvent) {
        element.attachEvent("on" + event, handler);
    } else {
        element["on" + event] = fn;
    }
}
```

## 代理模式

增加对一个对象的访问控制，比如 ES6 的`Proxy`

## 工厂模式

## 单例模式

Class 只有一个实例

```javascript
// 单例构造器
const FooServiceSingleton = (function () {
    // 隐藏的Class的构造函数
    function FooService() {}

    // 未初始化的单例对象
    let fooService;

    return {
        // 创建/获取单例对象的函数
        getInstance: function () {
            if (!fooService) {
                fooService = new FooService();
            }
            return fooService;
        },
    };
})();

const fooService1 = FooServiceSingleton.getInstance();
const fooService2 = FooServiceSingleton.getInstance();

console.log(fooService1 === fooService2); // true
```

## 策略模式

## 发布订阅模式（观察者模式）

比如给 DOM 元素绑定事件的`addEventListener()`方法

```javascript
target.addEventListener(type, listener [, options]);
```

## 迭代器模式

## 中介者模式

## 访问者模式
