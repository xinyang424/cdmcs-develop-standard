---
title: 自定义组件
icon: linter
date: 2023-03-01
category:
  + 常用组件
---

## 自定义表格

效果图：

![自定义表格样式](/component/diy/table.png)

::: details 代码示例

::: code-tabs#shell

@tab:active CSS

```css
.mk-table {
    border-right: 1px solid #ebeef5;
    border-bottom: 1px solid #ebeef5;
}

.mk-table tr {
    color: #909399;
    font-size: 14px;
}

.mk-table td {
    height: 40px;
    line-height: 40px;
    border-style: none;
    border-left: 1px solid #ebeef5;
    border-top: 1px solid #ebeef5;
    padding-left: 10px;
}

.mk-table .td-name {
    text-align: right;
    padding-right: 10px;
    width: 180px;
    font-weight: 700;
    background-color: #fafafa;
}
```

@tab HTML

```html
<table width="100%" class="mk-table" cellspacing="0" cellpadding="0">
    <tbody>
        <tr>
            <td class="td-name">规划许可证号</td>
            <!-- 还可以动态控制表格的宽度-->
            <td style="width:80%;"></td>
            <td class="td-name">项目管辖区域</td>
            <td></td>
        </tr>
        <tr>
            <td class="td-name">项目名称</td>
            <td colspan="3"></td>
        </tr>
        <tr>
            <td class="td-name">项目地址</td>
            <td colspan="3"></td>
        </tr>
    </tbody>
</table>
```

:::
