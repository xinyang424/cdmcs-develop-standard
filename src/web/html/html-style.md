---
title: 代码风格
icon: autumn
order: 2
date: 2023-03-01
category:
  + HTML规范
---

## 标签名书写

说明：约定必须使用小写字母的标签名，不允许使用大写的标签名。

::: details 查看代码示例

```html
<!-- good -->
<div>
    <p>我是一个段落</p>
</div>

<!-- bad -->
<DIV>
    <P>我是一个段落</P>
</DIV>
```

:::

## 采用语义化标签

说明：
1. 尽量采用语义化的标签，不要什么都用div，增加代码的可读性。
2. [更多HTML标签](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a)

下面是常见的语义化标签：
* p - 段落
* h1, h2, h3, h4, h5, h6 - 层级标题
* strong, em - 强调
* ul - 无序列表
* ol - 有序列表
* dl, dt, dd - 定义列表
* header - 通常包含一组介绍性的或是辅助导航的实用元素。它可能包含一些标题元素，但也可能包含其他元素，比如 Logo、搜索框、作者名称，等等。
* section - 表示 HTML 文档中一个通用独立章节，它没有更具体的语义元素来表示。一般来说会包含一个标题。
* footer - 表示最近一个章节内容或者根节点（sectioning root）元素的页脚。一个页脚通常包含该章节作者、版权数据或者与文档相关的链接等信息。

::: details 查看代码示例

```html
<!-- good -->

<body>
    <header>
        页面头部
    </header>

    <section>
        页面内容
    </section>

    <footer>
        页面脚部
    </footer>
</body>

<!-- bad -->

<body>
    <div>
        页面头部
    </div>

    <div>
        页面内容
    </div>

    <div>
        页面脚部
    </div>
</body>
```

```html
<!-- good -->
<p>Esprima serves as an important <strong>building block</strong> for some JavaScript language tools.</p>

<!-- bad（还额外定义样式）-->
<div>Esprima serves as an important <span class="strong">building block</span> for some JavaScript language tools.</div>
```

:::

## 对于无需自闭合的标签，不允许自闭合

说明：常见无需自闭合标签有 input、br、img、hr 等。

::: details 查看代码示例

```html
<!-- good -->
<input type="text" name="title">

<!-- bad -->
<input type="text" name="title" />
```

:::

## 不允许省略闭合标签

说明：对代码体积要求非常严苛的场景，可以例外，但也是HTML5允许省略闭合标签。比如：第三方页面使用的投放系统。

::: details 查看代码示例

```html
<!-- good -->
<ul>
    <li>first</li>
    <li>second</li>
</ul>

<!-- bad -->
<ul>
    <li>first
    <li>second
</ul>
```

:::

## 合理使用块元素、行内元素、行内块元素

说明：前端中，标签即元素，元素也即标签，也可以叫节点。本来就是行内元素的，就不要再套一个行内元素。

常见的块级元素： `div、h1-h6、form、p、li、ol、li、dl、dt、dd、address、caption、table、tbody、td、tfoot、th、thead、tr`

常见的行内元素： `a、button、img、input、label、span、b、textarea、br`

常见的行内块元素：通过 `display:inline-block;` 切换

::: details 查看代码示例

```html
<!-- good -->
<img class="avatar" src="image.png">

<!-- bad（img标签已是行内元素了） -->
<span class="avatar">
    <img src="image.png">
</span>
```

:::

## 标签无内容，结尾标签无需另起一行

说明：此场景主要应用在组件库中，对于标签内无内容的，结尾标签不要另起一行，诣在缩短代码篇幅。

::: details 查看代码示例
```html
<!-- good -->
<el-table-column header-align="center" align="center" show-overflow-tooltip min-width="50" prop="RM" label="序号"></el-table-column>

<!-- bad -->
<el-table-column header-align="center" align="center" show-overflow-tooltip min-width="50" prop="RM" label="序号">
</el-table-column>
```
:::


## 标签属性

### 属性名必须使用小写字母

::: details 查看代码示例

```html
<!-- good -->
<table cellspacing="0">...</table>

<!-- bad（s大写了） -->
<table cellSpacing="0">...</table>
```

:::

### 属性值必须用双引号包围

说明：属性最外层不允许使用单引号，不允许不使用引号。

::: details 查看代码示例

```html
<!-- good -->
<script src="esl.js"></script>

<!-- bad（使用了单引号，甚至不使用引号） -->
<script src='esl.js'></script>
<script src=esl.js></script>
```

:::

### 布尔类型的属性，建议不添加属性值

::: details 查看代码示例

```html
<!-- good -->
<input type="text" disabled>
<input type="checkbox" value="1" checked>

<!-- bad -->
<input type="text" disabled="disabled">
<input type="checkbox" value="1" checked="true">
```

:::

### 自定义属性

说明：自定义属性建议以 `xxx-` 为前缀，推荐使用 data-。使用前缀有助于区分自定义属性和标准定义的属性。

::: details 查看代码示例

```html
<ol data-ui-type="select"></ol>
```

:::

### 标签属性建议不换行

说明：虽然有些标签的属性过于长，会出现横向滚动条，但依旧不建议将属性的换行，虽然在首次开发的过程中麻烦，但是后续开发中，可以缩短代码的篇幅，易于纵向滚动。

::: details 查看代码示例

```html

<!-- good -->

<el-table :data="tableData" stripe style="width: 100%" border highlight-current-row="true" size="mini">
	<el-table-column header-align="center" align="center" show-overflow-tooltip min-width="50" prop="RM" label="序号"></el-table-column>
	<el-table-column header-align="center" align="center" show-overflow-tooltip min-width="120" prop="C_CLJDMS" label="流程节点"></el-table-column>
	<el-table-column header-align="center" align="center" show-overflow-tooltip min-width="90" prop="C_CLJG" label="处理结果"></el-table-column>
	<el-table-column header-align="center" show-overflow-tooltip min-width="100" prop="C_CLUSERNAME" label="处理人"></el-table-column>
	<el-table-column header-align="center" align="center" show-overflow-tooltip  min-width="150" prop="D_CLSJ" label="处理时间"></el-table-column>
	<el-table-column header-align="center" align="center" show-overflow-tooltip  min-width="150" prop="C_CLYJ" label="处理意见"></el-table-column>
</el-table>

<!-- bad（导致代码过于长） -->
<el-table 
    :data="tableData" 
    stripe 
    style="width: 100%" 
    border 
    highlight-current-row="true" 
    size="mini">
	<el-table-column 
        header-align="center" 
        align="center" 
        show-overflow-tooltip 
        min-width="50" 
        prop="RM" 
        label="序号"> 
    </el-table-column>
	<el-table-column 
        header-align="center" 
        align="center" 
        show-overflow-tooltip 
        min-width="120" 
        prop="C_CLJDMS" 
        label="流程节点"> 
    </el-table-column>
	<el-table-column 
        header-align="center" 
        align="center" 
        show-overflow-tooltip 
        min-width="90" 
        prop="C_CLJG" 
        label="处理结果">
    </el-table-column>
	<el-table-column 
        header-align="center" 
        show-overflow-tooltip 
        min-width="100" 
        prop="C_CLUSERNAME" 
        label="处理人"> 
    </el-table-column>
	<el-table-column 
        header-align="center" 
        align="center" 
        show-overflow-tooltip 
        min-width="150" 
        prop="D_CLSJ" 
        label="处理时间">
    </el-table-column>
	<el-table-column 
        header-align="center" 
        align="center" 
        show-overflow-tooltip  
        min-width="150" 
        prop="C_CLYJ" 
        label="处理意见">
    </el-table-column>
</el-table>
```

:::


### 标签属性建议将相同的放前面

说明：标签属性建议将相同的统一放前面或者放后面

::: details 查看代码示例

```html

<!-- good -->
<el-table :data="tableData" stripe style="width: 100%" border highlight-current-row="true" size="mini">
	<el-table-column header-align="center" align="center" show-overflow-tooltip min-width="50" prop="RM" label="序号"></el-table-column>
	<el-table-column header-align="center" align="center" show-overflow-tooltip min-width="120" prop="C_CLJDMS" label="流程节点"></el-table-column>
	<el-table-column header-align="center" align="center" show-overflow-tooltip min-width="90" prop="C_CLJG" label="处理结果"></el-table-column>
	<el-table-column header-align="center" show-overflow-tooltip min-width="100" prop="C_CLUSERNAME" label="处理人"></el-table-column>
	<el-table-column header-align="center" align="center" show-overflow-tooltip  min-width="150" prop="D_CLSJ" label="处理时间"></el-table-column>
	<el-table-column header-align="center" align="center" show-overflow-tooltip  min-width="150" prop="C_CLYJ" label="处理意见"></el-table-column>
</el-table>

<!-- bad（不易找属性共同点） -->
<el-table :data="tableData" stripe style="width: 100%" border highlight-current-row="true" size="mini">
	<el-table-column align="center" show-overflow-tooltip min-width="50" prop="RM" label="序号" header-align="center"></el-table-column>
	<el-table-column prop="C_CLJDMS" header-align="center" align="center" show-overflow-tooltip min-width="120"  label="流程节点"></el-table-column>
	<el-table-column header-align="center" align="center" show-overflow-tooltip min-width="90" prop="C_CLJG" label="处理结果"></el-table-column>
	<el-table-column show-overflow-tooltip min-width="100" prop="C_CLUSERNAME" label="处理人" header-align="center"></el-table-column>
	<el-table-column min-width="150" header-align="center" align="center" show-overflow-tooltip prop="D_CLSJ" label="处理时间"></el-table-column>
	<el-table-column header-align="center" align="center" show-overflow-tooltip  min-width="150" prop="C_CLYJ" label="处理意见"></el-table-column>
</el-table>

```
:::