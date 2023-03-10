---
title: vscode插件
icon: vscode
order: 1
date: 2023-03-01
category:
  + 前端工具
---

## 格式化类插件

### 常用格式化插件

插件名：Prettier - Code formatter（以下简称Prettier）

![Prettier插件](/tools/Prettier.png)

用处：可以格式化文件类型：HTML、Vue、JS、TS、CSS、Less等多种文件类型，配合保存时候自动格式化设置，更加方便。

::: details 查看详情

配置插件：

* 点击插件的扩展设置

![Prettier插件扩展设置](/tools/PrettierMore.png)

* 推荐配置：
    

![Prettier插件配置1](/tools/PrettierSettings1.png)

![Prettier插件配置2](/tools/PrettierSettings2.png)

![Prettier插件配置3](/tools/PrettierSettings3.png)

![Prettier插件配置4](/tools/PrettierSettings4.png)

配置这些设置后可支持的功能：
1. 代码缩进规范
1. 标签属性不换行
1. 句末自动添加分号等

:::

### md文件格式化插件

插件名：markdown-formatter

![markdown-formatter插件](/tools/markdown-formatter.png)

用处：格式化md类文件，自动缩进行。配合保存时候自动格式化设置，更加方便。

## 提示类插件

### 正则表达式

插件名：any-rule

![any-rule插件](/tools/any-rule.png)

用处：在编辑器按F1即可查看支持的正则规则，且支持搜索。

::: details 查看详情

![F1查看any-rule插件支持的正则](/tools/any-rule-F1.png)

或者安装好后，在扩展中点击any-rule插件，在右边页面下滑可以看到详细的正则。

![F1查看any-rule插件支持的正则](/tools/any-rule-details.png)

:::

### 路径提示

插件名：Path Intellisense

![Path Intellisense插件](/tools/Path-Intellisense.png)

用处：当引入文件资源路径的时候，会进行相对应的提示

::: details 查看详情

![Path Intellisense插件使用示例](/tools/Path-Intellisense.gif)

更多插件功能可查看插件详情。

:::

## 预览类插件

### 普通图片类预览

插件名：Image preview

![Image preview插件](/tools/Image-preview.png)

用处：当引入图片路径的时候，如果路径正确，会显示图片以此来提示你路径正确。

::: details 查看详情

当你引入图片路径正确的时候会有左边的小图案，如下图：

![Image preview插件使用示例](/tools/Image-preview-example.png)

:::

### SVG文件预览

插件名：Svg preview

![Svg preview插件](/tools/svg-preview.png)

用处：SVG文件可以直接在编辑器内预览，再也不用双击文件打开预览了。

::: details 查看详情

当你打开的svg文件的时候会在自动打开svg文件预览，如下图：

![Svg preview插件使用示例](/tools/svg-preview-example1.png)

当你打开的svg文件的时候，并不希望在右侧自动打开svg文件预览时，可以设置插件，如下图：

![Svg preview插件设置](/tools/svg-preview-settings.png)

当你打开的svg文件的时候，希望预览svg文件效果时，可以点击打开，如下图：

![Svg preview插件预览svg文件](/tools/svg-preview-example2.png)

:::
