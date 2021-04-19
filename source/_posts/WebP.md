---
title: WebP
date: 2021-04-19 10:32:54
tags:
---

`WebP`的优势体现在它具有更优的图像数据压缩算法，能带来更小的图片体积，而且拥有肉眼识别无差异的图像质量；同时具备了无损和有损的压缩模式、Alpha 透明以及动画的特性，在`JPEG`和`PNG`上的转化效果都相当优秀、稳定和统一。

## 判断是否支持

1. 通过 js 判断，根据此判断，业务中选择使用 WebP 或其他格式的图片

```javascript
function isSupportWebp() {
  const canvasEL = document.createElement('canvas');
  const docEl = document.documentElement || document.getElementsByTagName('html')[0];
  if (canvasEL.getContext && canvasEL.getContext('2d')) {
    return canvasEL.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
  return false;
}

isSupportWebp();
```

2. CDN 根据 HTTP Accept 头来判断，如果支持则返回 WebP 副本，如果不支持则返回原图

```
accept:image/webp,...
```
