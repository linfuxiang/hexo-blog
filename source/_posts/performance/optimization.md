---
title: 性能优化
date: 2021-04-02 14:47:47
categories: 性能
tags: 性能
---

性能优化可以做的事情

普遍的：

1. html、css、js 资源混淆压缩，图片压缩
2. 合理利用 CDN 和浏览器缓存（强缓存，协商缓存，Service Worker，storage，indexedDB）
3. DNS 预解析，预先建立连接

```html
<link rel="dns-prefetch" href="https://longlin.com" />
<link rel="preconnect" href="https://longlin.com" crossorigin />

<script>
  // prefetch
  import(/* webpackPrefetch: true */ './sub1.js');
</script>
```

3. 长列表使用虚拟滚动优化
4. 防止事件监听回调执行时间过长，导致原生事件执行延迟了

```javascript
let supportsPassive = false;
try {
  const opts = Object.defineProperty({}, 'passive', {
    get() {
      supportsPassive = true;
    },
  });
  window.addEventListener('testPassive', null, opts);
  window.removeEventListener('testPassive', null, opts);
} catch (e) {}

document.addEventListener('touchstart', e => {}, supportsPassive ? { passive: true } : false);
```

4. 合理使用防抖和节流函数
5. 大任务使用 web-worker 或者分片任务（`requestAnimationFrame`和`requestIdleCallback`）
6. 使用
7. 利用服务端渲染（SSR，可细分为 HTML SSR 和 Data SSR）
8. 避免闭包引发的内存泄漏
9. 减少回流操作，尽量给元素定宽高
10. 图片尝试使用`Webp`

Webpack：

1. 资源懒加载，拆分异步组件，利用骨架屏或良好的 loading 做提示
2. SDK 等常用而且不会经常变化的资源，抽出来（`optimization.splitChunks`或`externals`），加载
3. Tree Shaking（已默认支持）

React：

1. 为列表增加 key
2. 非事务操作中，减少 setState 次数
3. 合理利用`React.useMemo`和`React.memo`
