---
title: 日期
icon: date
date: 2023-03-01
category:
  + 常用方法
---

## 日期格式转换

xxxx年xx月xx日 与 xxxx-xx-xx 互转

::: details 查看代码

```javascript
const turnDateFormat = (date: string): string => {
    //date格式为xxxx年xx月xx日或xxxx-xx-xx
    let formatDate = "";
    if (date.indexOf("-") != -1) {
        const dateArr = date.split("-");
        formatDate = `${dateArr[0]}年${dateArr[1]}月${dateArr[2]}日`;
    } else {
        formatDate = date.replace(/([年月])/g, "-").replace(/([日])/g, "");
    }
    return formatDate;
};
```

:::

注意点：
* 此代码对形参判断并不十分严谨，需严格遵守格式：xxxx年xx月xx日或xxxx-xx-xx，否则会出错。

## 获取当前时间

::: details 查看代码

::: code-tabs#shell

@tab:active 方法一

```javascript
const getNowTime = (date: string): string => {
    //form格式：xxxx年xx月xx日、xxxx-xx-xx
};
```

@tab 方法二

```javascript
const getNowTime = (form: string): string => {
    //form格式：xxxx年xx月xx日、xxxx-xx-xx、xxxx年xx月xx日 xx时xx分xx秒、xxxx-xx-xx xx:xx:xx

};
```

:::

## 时间戳

::: details 查看代码

```javascript
const timestamp = (num: number): number => {
    let nowTime = new Date();
    nowTime.setMonth(nowTime.getMonth() + num);
    let year = nowTime.getFullYear();
    let month = nowTime.getMonth() + 1;
    let day = nowTime.getDate();
    return new Date(`${year}-${month}-${day}`).getTime();

};
```

:::
