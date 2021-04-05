---
title: 性能指标
date: 2021-04-02 14:47:13
categories: 性能
tags: 性能
---

部分性能指标

<!--more-->

### First Input Delay (FID)

### Cumulative Layout Shift (CLS)

### Largest Contentful Paint (LCP)

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

### First Contentful Paint (FCP)

首个内容返回`performance.getEntries()`

### Time to First Byte (TTFB)

首个字节返回的时延`performance.timing.responseStart`
