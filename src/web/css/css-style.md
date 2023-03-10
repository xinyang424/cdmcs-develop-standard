---
title: 代码风格
icon: flower
date: 2023-03-01
category:
  + CSS规范
order: 2
---

## className命名风格

取名方式：
1. 中文首字母小写，尽量简短但不能失去核心意思。
1. 中文首字母小写 + 适当的英文。
1. 使用短横线进行连接，不准使用下划线或者驼峰命名。

:::details 查看取名示例

```css
/* good */
.list {
    /* 见明知意 */
}

.ptfjk-list {
    /* 就算不知道前面中文简写是啥意思，但是最起码知道这是一个列表 */
}

/* bad */
.lb {
    /* 晦涩难懂 */
}

.ptfjklb {
    /* 晦涩难懂 */
}

.ptfjk_list {
    /* 下划线连接，风格不统一 */
}

.ptfjkList {
    /* 驼峰命名，风格不统一 */
}
```

:::

## css书写风格

说明：
1. 类名与`{`之间要有空格
1. 属性与属性值之间要有空格。
1. 全部采用展开形式而非紧凑型。
1. 全部采用小写，不允许使用大写。
1. 不准采用id选择器，因为id选择器的权重比较重，建议采用class选择器，通常情况下只允许出现`#app`。
1. 类名定义样式与另外一个类名定义样式之间要空一行，如果是内嵌样式：写在`<style>`内，那么最开始和最结尾不需要换行。
1. 尽量将有共同点的样式一起定义，不要分开定义那么多。
1. 尽量避免使用无具体语义定义的标签选择器。
1. 同时选中多个类名定义样式的时候，且html结构是同级的时候，需要换行。
1. 同时选中多个类名定义样式的时候，且html结构是父子关系的时候，不需要换行，但需要用空格隔开。
1. 定义样式时，相同类型的样式放在一起写，不要分开写。
1. 颜色值`rgb()`、`rgba()`、`hsl()`、`hsla()`、`rect()`中不需有空格，且取值不要带有不必要的 0。
1. 属性值十六进制数值能用简写的尽量用简写。
1. 不要为 0 指明单位。
1. css属性值需要用到引号时，统一使用单引号。
1. `>`、`+`、`~` 选择器的两边各保留一个空格。

:::details 查看代码示例

```css
/* 类名与 { 之间要有空格 */
/* good */
.header {
  width: 100px;
  height: 100px;
}

/* bad */
.header{
  width: 100px;
  height: 100px;
}

/* 属性与属性值之间要有空格 */
/* good */
.header {
  width: 100px;
  height: 100px;
}

/* bad */
.header {
    width: 100px 
    height:100px
}

/* 全部采用展开形式而非紧凑型 */
/* good */
.header {
    width: 100px;
    height: 100px;
}

/* bad */
.header { width: 100px; height: 100px; }

/* 全部采用小写，不允许使用大写 */
/* good */
.header {
    width: 100px;
    height: 100px;
}

/* bad */
.header { 
  WIDTH: 100px;
  HEIGHT: 100px; 
}

/* 不准采用id选择器，因为id选择器的权重比较重，建议采用class选择器，通常情况下只允许出现 #app */
/* good */
.header {
    width: 100px;
    height: 100px;
}

.body {
    width: 100px;
    height: 100px;
}

/* bad */
#header {
    width: 100px;
    height: 100px;
}

#body {
    width: 100px;
    height: 100px;
}

/* 类名定义样式与另外一个类名定义样式之间要空一行，如果是内嵌样式：写在 <style> 内，那么最开始和最结尾不需要换行 */
/* good */
.header {
    width: 100px;
    height: 100px;
}

.body {
    width: 100px;
    height: 100px;
}

/* bad */
.header {
    width: 100px;
    height: 100px;
}
.body {
    width: 100px;
    height: 100px;
}

/* 尽量将有共同点的样式一起定义，不要分开定义那么多。 */
/* good */
.p1,
.p2 {
    width: 100px;
    height: 100px;
    color: purple;
}

.p2 {
    color: pink;
}

/* bad */
.p1 {
    width: 100px;
    height: 100px;
    color: purple;
}

.p2 {
    width: 100px;
    height: 100px;
    color: pink;
}

/* 尽量避免使用无具体语义定义的标签选择器。 */
/* good */
#app header {
    height: 80px;
}

/* bad */
#app div {
    height: 80px;
}

/* 同时选中多个类名定义样式的时候，且html结构是同级的时候，需要换行。 */
/* good */
.header,
.body,
.footer {
    height: 80px;
}

/* bad */
.header, .body, .footer {
    height: 80px;
}

/* 同时选中多个类名定义样式的时候，且html结构是父子关系的时候，不需要换行，但需要用空格隔开。 */
/* good */
.header .body .footer {
    height: 80px;
}
/* bad */
.header 
.body 
.footer {
    height: 80px;
}

/* 定义样式时，相同类型的样式放在一起写，不要分开写 */
/* good */
.header {
    width:100px;
    height: 80px;
    border:1px solid #ccc;
    border-radius:5px;
    background-color:#333;
    font-size: 12px;
}

/* bad（宽高分开写了，边框和圆角也分开写了） */
.header {
    background-color:#333;
    height: 80px;
    border-radius:5px;
    font-size: 12px;
    width:100px;
    border:1px solid #ccc;
}

/* 颜色值`rgb()`、`rgba()`、`hsl()`、`hsla()`、`rect()`中不需有空格，且取值不要带有不必要的 0 */
/* good */
.header {
  color: rgba(255,255,255,.5);
}

/* bad */
.header {
  color: rgba( 255, 255, 255, 0.5 );
}

/* 属性值十六进制数值能用简写的尽量用简写 */
/* good */
.header {
  color: #fff;
}

/* bad */
.header {
  color: #ffffff;
}

/* 不要为 0 指明单位 */
/* good */
.header {
  margin: 0 10px;
}

/* bad */
.header {
  margin: 0px 10px;
}

/* css属性值需要用到引号时，统一使用单引号 */
/* good */
.header {
  font-family: 'Hiragino Sans GB';
}

/* bad */
.header {
  font-family: "Hiragino Sans GB";
}

/* >、+、~ 选择器的两边各保留一个空格。 */
/* good */
main > nav {
    padding: 10px;
}

label + input {
    margin-left: 5px;
}

input:checked ~ button {
    background-color: #69C;
}

/* bad */
main>nav {
    padding: 10px;
}

label+input {
    margin-left: 5px;
}

input:checked~button {
    background-color: #69C;
}
```

:::





## css兼容性写法示例

说明：浏览器私有前缀在前，标准前缀在后

:::details 查看代码示例

```css
.header{
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -o-border-radius: 10px;
    -ms-border-radius: 10px;
    border-radius: 10px;
}
```

:::