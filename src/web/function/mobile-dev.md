---
title: 移动开发
date: 2023-03-01
category:
  + 常用方法
---

## H5禁止用户缩放或双击放大

:::details 查看代码

```javascript
const disabledScale = () => {
    var lastTouchEnd = 0;
    document.addEventListener('touchstart', function(event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    });
    document.addEventListener('touchend', function(event) {
        var now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);

    // 阻止双指放大
    document.addEventListener('gesturestart', function(event) {
        event.preventDefault();
    })
}

export default disabledScale
```

:::
