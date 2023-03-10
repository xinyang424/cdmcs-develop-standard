---
title: MdiWindow使用
icon: window
date: 2023-03-01
category:
  + 常用组件
---

## 页面弹框

效果图：

![页面弹框](/component/mdiwindow/dialog.png)

::: details 查看代码

::: code-tabs#shell

@tab:active 代码示例

```javascript
openDialog: function(item) {
    var that = this;
    var win = top.$.MdiWindow(window, "80%", "90%", 0, 0, true);
    win.setTitle("标题", "font-family:微软雅黑;font-size:14px");
    win.setWindowArguments({
        id: item.N_SQJLBH
    });
    win.btnClose(true);
    win.btnMax(false);
    win.btnMin(false);
    win.isResize(false);
    win.onClose(function(ret) {
        if (ret) {
            that.getTable();
        }
    });
    win.load("./notice_preview.jsp?t=" + Math.random(), window, function(obj) {});
},
```

@tab 代码说明

```javascript
openDialog: function() {
    var win = top.$.MdiWindow(window, "80%", "90%", 0, 0, true); //80%对应的是浏览器可视区的宽度，90%对应的是浏览器可视区的高度，
    //var win = top.$.MdiWindow(window, 1280, 720, 0, 0, true);//宽高可以是string，可以是number
    win.setTitle("弹框标题", "font-family:微软雅黑;font-size:14px");
    win.setWindowArguments("需要传递的数据");
    win.btnClose(true);
    win.btnMax(false);
    win.btnMin(false);
    win.isResize(false);
    win.onClose(function(ret) {
        //ret为弹框返回过来的参数，可根据参数值进行刷新表格或进行对应的提示
    });
    win.load("path?t=" + Math.random(), window, function(obj) {}); //path为打开jsp的路径
},
```

:::

需要在打开的页面的js进行如下设置：

::: details 查看代码

```javascript
function _init(args, mdi, layerIdx, parentWindow) {
    new Vue({
        el: "#app",
        data: function() {
            return () {

            }
        },
        methods: {
            closeDialog: function() {
                parentWindow.returnValue = 'Hello World!';
                /*
                    向上一级窗口传递的值，任意类型都可以，对应的值在打开时候定义的：
                        win.onClose(function(ret) {
                            //ret就是接收的值，可根据值进行相应提示或操作
                        })
                */
                //关闭窗口
                top.$.Mdiclose(index);
            }
        },
        created: function() {
            console.log(args);
            /*
                args就是打开次页面传递过来的值，具体是：
                    win.setWindowArguments("需要传递的值");//值可以是任意类型
            */
        }
    })

}
```

:::

## 确认弹框

效果图：

![确认弹框](/component/mdiwindow/confirm.png)

::: details 查看代码

::: code-tabs#shell

@tab:active 代码示例

```javascript
var that = this;
top.$.Mdiconfirm("提示", "确实开始补打吗？",
    function(index) {
        //点关闭图标
        top.$.Mdiclose(index);
    },
    function(index) {
        //点取消按钮
        top.$.Mdiclose(index);
    },
    function(index) {
        //点确定按钮
        that.doPrint();
        top.$.Mdiclose(index);
    }
);
```

@tab 代码说明

```javascript
top.$.Mdiconfirm("弹框标题", "弹框内容",
    function(index) {
        //点关闭图标
    },
    function(index) {
        //点取消按钮
    },
    function(index) {
        //点确定按钮
    }
);
```

:::

## 警告弹框

效果图：

![警告弹框](/component/mdiwindow/alert.png)

::: details 查看代码

::: code-tabs#shell

@tab:active 代码示例

```javascript
top.$.MdiAlert("提示", '请在新打开的预览页面中选择打印<br/>（将在点击"确定"后打开）', "EXC", function() {
    a.click();
});
```

@tab 代码说明

```javascript
top.$.MdiAlert("弹框标题", '弹框内容', "EXC", function() {
    //点确定按钮
});
```

:::
