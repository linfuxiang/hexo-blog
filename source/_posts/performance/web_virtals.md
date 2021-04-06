---
title: 性能指标
date: 2021-04-02 14:47:13
categories: 性能
tags: 性能
---

部分性能指标

<!--more-->

## First Input Delay (FID)

## Cumulative Layout Shift (CLS)

## Largest Contentful Paint (LCP)

```javascript
let lcp;

const po = new PerformanceObserver(entryList => {
  const entries = entryList.getEntries();
  const lastEntry = entries[entries.length - 1];

  lcp = lastEntry.renderTime || lastEntry.loadTime;
});

po.observe({ type: 'largest-contentful-paint', buffered: true });

addEventListener(
  'visibilitychange',
  function fn() {
    if (lcp && document.visibilityState === 'hidden') {
      console.log('LCP:', lcp);
      removeEventListener('visibilitychange', fn, true);
    }
  },
  true
);
```

## First Contentful Paint (FCP)

首个内容返回`performance.getEntries()`

## Time to First Byte (TTFB)

首个字节返回的时延`performance.timing.responseStart`

## First Meaningful Page (FMP)

首个字节返回的时延`performance.timing.responseStart`

## DOMContentLoaded 和 load

`DOMContentLoaded`是 DOM 树渲染完成后触发的，会被以下因素影响时间：

1. 同步执行的 JS 脚本
2. async 的 JS 脚本在 DOM 树渲染加载完成，会先执行，再继续渲染 DOM 树，再触发 `DOMContentLoaded`
3. defer 的 JS 脚本会执行完后才触发 `DOMContentLoaded`

`load`是整个页面完全加载时触发，包括 css、img、js（不包括异步引入的资源）
