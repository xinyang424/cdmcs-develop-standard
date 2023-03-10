---
title: 文件模板
icon: blog
date: 2023-03-01
category:
  + HTML规范
---

## PC端网页模板

```html
<!DOCTYPE html>
<html lang="zh-CN">

<head>
    <meta charset="UTF-8">
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
    <title>PC端HTML模版</title>
    <!-- 引入css -->
    <link rel="stylesheet" type="text/css" href="..." />
    <!-- 引入js -->
    <script type="text/javascript" src="..." charset="UTF-8"></script>
    <!-- 自定义内嵌css -->
    <style>

    </style>

</head>

<body>
    <div id="app"></div>
</body>

<script type="text/javascript" src="xxx.js?t=<%=System.currentTimeMillis()%>" charset="UTF-8"></script>

</html>
```

## 移动端网页模板

```html
<!DOCTYPE html>
<html lang="zh-CN">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="format-detection" content="telephone=no">
    <title>移动端网页模板</title>
</head>

<body>

</body>

</html>
```
