---
title: Grid
date: 2021-04-13 18:09:43
tags:
categories: CSS
---

参考[阮一峰文档](http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)

`grid-template-columns`定义列宽，`grid-template-rows`定义行宽，可以是具体值、百分比、关键字

```css
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
}
```

<!--more-->

## 容器属性

### 关键字

1. `repeat`

```css
.container {
  /* 每列都是33.33%，一共3列 */
  grid-template-columns: repeat(3, 33.33%);

  /* 按照100/20/80重复2次，一共6列 */
  grid-template-columns: repeat(2, 100px 20px 80px);
}
```

2. `auto-fill`

```css
.container {
  /* 每列宽度100px，然后自动填充 */
  grid-template-columns: repeat(auto-fill, 100px);
}
```

3. `fr`

```css
.container {
  /* 两列，列与列的比例为1：1 */
  grid-template-columns: 1fr 1fr;

  /* 和长度组合使用，第一列150，第三列是第二列宽度的2倍 */
  grid-template-columns: 150px 1fr 2fr;
}
```

4. `minmax()`

```css
.container {
  /* 第二列处于100px和1fr范围中 */
  grid-template-columns: 1fr minmax(100px, 1fr);
}
```

5. `auto`

```css
.container {
  /* 自动适配尺寸 */
  grid-template-columns: 100px auto 100px;
}
```

6. 网格线名称

```css
.container {
  /* 指定网格线的名称 */
  grid-template-columns: [c1] 100px [c2] 100px [c3];
}
```

### 间距

- `grid-row-gap`
- `grid-column-gap`
- `grid-gap`

```css
.container {
  /* 行列分开写 */
  grid-row-gap: 20px;
  grid-column-gap: 20px;

  /* 组合，grid-gap: <grid-row-gap> <grid-column-gap>; */
  grid-gap: 20px 20px;
}
```

### 行列摆放顺序

`grid-auto-flow`，默认先摆放完行（row）再摆放列（column）

```css
.container {
  /* 先列后行 */
  grid-auto-flow: column;

  /* 会尽量填满空格 */
  grid-auto-flow: row dense;
}
```

### 单元格内容的位置

- `justify-items`
- `align-items`
- `place-items`

```css
.container {
  justify-items: start | end | center | stretch;
  align-items: start | end | center | stretch;

  /* 组合，place-items: <align-items> <justify-items>; */
  place-items: start end;
}
```

### 整个内容区域的位置

- `justify-content`
- `align-content`
- `place-content`

```css
.container {
  justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
  align-content: start | end | center | stretch | space-around | space-between | space-evenly;

  /* 组合，place-items: <align-items> <justify-items>; */
  place-content: start end;
}
```

### 定义区域名称

```css
.container {
  grid-template-areas:
    'a a a'
    'b e b'
    'c c c';
}
```

## 子元素属性

### 根据网格线指定位置

- `grid-column-start` 左边框所在的垂直网格线
- `grid-column-end` 右边框所在的垂直网格线
- `grid-row-start` 上边框所在的水平网格线
- `grid-row-end` 下边框所在的水平网格线

```css
.item-1 {
  /* 跨越两个单元格 */
  grid-column-start: 1;
  grid-column-end: 3;

  /* 指定网格线 */
  grid-column-start: header-start;
  grid-column-end: header-end;

  /* 跨越两个单元格 */
  grid-column-start: span 2;

  /* 简写 */
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}
```

### 根据区域名称指定位置

```css
.item-1 {
  grid-area: e;

  /* 也可以是网格线合并简写 */
  grid-area: 1 / 1 / 3 / 3;
}
```

### 单元格内容位置

- `justify-self`
- `align-self`
- `place-self`

```css
.item {
  justify-self: start | end | center | stretch;
  align-self: start | end | center | stretch;

  /* 简写，place-self: <align-self> <justify-self>; */
  place-self: center center;
}
```
