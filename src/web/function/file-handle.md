---
title: 文件操作
icon: view
order: 1
date: 2023-03-01
category:
  + 常用方法
---

## 图片类

### 压缩图片

#### 接收base64进行压缩

::: details 查看代码

::: code-tabs#shell
@tab:active TS版本

```typescript
const compressedImg = (base64: string, callback: Function) => {
    let canvas: HTMLCanvasElement = document.createElement("canvas");
    let context: any = canvas.getContext("2d");
    let img = new Image();
    img.src = base64;
    img.onload = () => {
        let originWidth = img.width;
        let originHeight = img.height;
        let maxWidth = 400;
        let maxHeight = 300;
        let targetWidth = originWidth;
        let targetHeight = originHeight;
        if (originWidth > maxWidth || originHeight > maxHeight) {
            if (originWidth / originHeight > maxWidth / maxHeight) {
                targetWidth = maxWidth;
                targetHeight = Math.floor(maxWidth * (originHeight / originWidth));
            } else {
                targetWidth = Math.floor(maxHeight * (originWidth / originHeight));
                targetHeight = maxHeight;
            }
        }
        canvas.width = targetWidth;
        canvas.height = targetHeight;
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
        let compressedBase64: string = canvas.toDataURL("image/jpeg", 0.5);
        callback(compressedBase64);
    };
};
```

@tab JS版本

```javascript
const compressedImg = (base64, callback) => {
    let canvas = document.createElement("canvas");
    let context = canvas.getContext("2d");
    let img = new Image();
    img.src = base64;
    img.onload = () => {
        let originWidth = img.width;
        let originHeight = img.height;
        let maxWidth = 400;
        let maxHeight = 300;
        let targetWidth = originWidth;
        let targetHeight = originHeight;
        if (originWidth > maxWidth || originHeight > maxHeight) {
            if (originWidth / originHeight > maxWidth / maxHeight) {
                targetWidth = maxWidth;
                targetHeight = Math.floor(maxWidth * (originHeight / originWidth));
            } else {
                targetWidth = Math.floor(maxHeight * (originWidth / originHeight));
                targetHeight = maxHeight;
            }
        }
        canvas.width = targetWidth;
        canvas.height = targetHeight;
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
        let compressedBase64: string = canvas.toDataURL("image/jpeg", 0.5);
        callback(compressedBase64);
    };
};
```

:::

#### 接收file文件进行压缩

::: details 查看代码

::: code-tabs#shell
@tab:active TS版本

```typescript
const compressedImg = (file: File, callback: Function) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
        let img = new Image();
        oImg.src = e.target.result;
        img.onload = () => {
            let originWidth = img.width;
            let originHeight = img.height;
            let maxWidth = 400;
            let maxHeight = 300;
            let targetWidth = originWidth;
            let targetHeight = originHeight;
            if (originWidth > maxWidth || originHeight > maxHeight) {
                if (originWidth / originHeight > maxWidth / maxHeight) {
                    targetWidth = maxWidth;
                    targetHeight = Math.floor(maxWidth * (originHeight / originWidth));
                } else {
                    targetWidth = Math.floor(maxHeight * (originWidth / originHeight));
                    targetHeight = maxHeight;
                }
            }
            let canvas: HTMLCanvasElement = document.createElement("canvas");
            let context: any = canvas.getContext("2d");
            canvas.width = targetWidth;
            canvas.height = targetHeight;
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(img, 0, 0, canvas.width, canvas.height);
            let compressedBase64: string = canvas.toDataURL("image/jpeg", 0.5);
            callback(compressedBase64);
        };
    }
};
```

@tab JS版本

```javascript
const compressedImg = (file, callback) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
        let img = new Image();
        oImg.src = e.target.result;
        img.onload = () => {
            let originWidth = img.width;
            let originHeight = img.height;
            let maxWidth = 400;
            let maxHeight = 300;
            let targetWidth = originWidth;
            let targetHeight = originHeight;
            if (originWidth > maxWidth || originHeight > maxHeight) {
                if (originWidth / originHeight > maxWidth / maxHeight) {
                    targetWidth = maxWidth;
                    targetHeight = Math.floor(maxWidth * (originHeight / originWidth));
                } else {
                    targetWidth = Math.floor(maxHeight * (originWidth / originHeight));
                    targetHeight = maxHeight;
                }
            }
            let canvas: HTMLCanvasElement = document.createElement("canvas");
            let context: any = canvas.getContext("2d");
            canvas.width = targetWidth;
            canvas.height = targetHeight;
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(img, 0, 0, canvas.width, canvas.height);
            let compressedBase64: string = canvas.toDataURL("image/jpeg", 0.5);
            callback(compressedBase64);
        };
    }
};
```

:::

## 获取base64大小

::: details 查看代码

::: code-tabs#shell
@tab:active TS版本

```typescript
const getBase64Size = (base64: string): number => {
	let size: number | null;
	if (base64) {
		const equalIndex = base64.indexOf("=");
		if (equalIndex > 0) {
			const str = base64.substring(0, equalIndex);
			const strLength = str.length;
			const fileLength = strLength - (strLength / 8) * 2;
			size = Math.floor(fileLength);
		} else {
			const strLength = base64.length;
			const fileLength = strLength - (strLength / 8) * 2;
			size = Math.floor(fileLength);
		}
	} else {
		size = null;
	}
	return size;
};
```

@tab JS版本

```javascript
const getBase64Size = (base64) => {
    let size;
    if (base64) {
        const equalIndex = base64.indexOf("=");
        if (equalIndex > 0) {
            const str = base64.substring(0, equalIndex);
            const strLength = str.length;
            const fileLength = strLength - (strLength / 8) * 2;
            size = Math.floor(fileLength);
        } else {
            const strLength = base64.length;
            const fileLength = strLength - (strLength / 8) * 2;
            size = Math.floor(fileLength);
        }
    } else {
        size = null;
    }
    return size;
};
```

:::

## base64转file图片

::: details 查看代码

::: code-tabs#shell
@tab:active TS版本

```typescript
//获取base64大小
const getBase64Size = (base64: string): number => {
	let size: number | null;
	if (base64) {
		const equalIndex = base64.indexOf("=");
		if (equalIndex > 0) {
			const str = base64.substring(0, equalIndex);
			const strLength = str.length;
			const fileLength = strLength - (strLength / 8) * 2;
			size = Math.floor(fileLength);
		} else {
			const strLength = base64.length;
			const fileLength = strLength - (strLength / 8) * 2;
			size = Math.floor(fileLength);
		}
	} else {
		size = null;
	}
	return size;
};
//base64转图片
const base64ToFile = (fileName: string, base64: string): Array<any> => {
    //ps：还可以继续优化返回值的类型
	let temp = {
		content: base64,
		file: {
			lastModified: new Date().getTime(),
			lastModifiedDate: new Date(),
			name: `${fileName}.jpg`,
			size: getBase64Size(base64),
			type: "image/jpeg",
			webkitRelativePath: "",
		},
		message: "",
		status: "",
	};
	return [temp];
};
```

@tab JS版本

```javascript
//获取base64大小
const getBase64Size = (base64) => {
    let size;
    if (base64) {
        const equalIndex = base64.indexOf("=");
        if (equalIndex > 0) {
            const str = base64.substring(0, equalIndex);
            const strLength = str.length;
            const fileLength = strLength - (strLength / 8) * 2;
            size = Math.floor(fileLength);
        } else {
            const strLength = base64.length;
            const fileLength = strLength - (strLength / 8) * 2;
            size = Math.floor(fileLength);
        }
    } else {
        size = null;
    }
    return size;
};
//base64转图片文件对象
const base64ToFile = (fileName, base64) => {
    let temp = {
        content: base64,
        file: {
            lastModified: new Date().getTime(),
            lastModifiedDate: new Date(),
            name: `${fileName}.jpg`,
            size: getBase64Size(base64),
            type: "image/jpeg",
            webkitRelativePath: "",
        },
        message: "",
        status: "",
    };
    return [temp];
};
```

:::

## 下载类

### 下载方式模板

::: details 查看代码

```javascript
fetch(url)
    .then(function(res) {
        return res.blob();
    })
    .then(function(data) {
        // ie兼容处理
        if (window.navigator.msSaveBlob) {
            window.navigator.msSaveBlob(data, fileName);
        } else {
            const downloadURL = window.URL.createObjectURL(data);
            const a = document.createElement("a");
            a.style.display = "none";
            a.href = downloadURL;
            a.target = "_blank";
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(downloadURL);
            var timeoutId = window.setTimeout(function() {
                loading.close();
                window.clearTimeout(timeoutId);
            }, 500);
        }
    })
    .catch(function(e) {
    });
```

:::

### pdf直接下载

说明：需要配合element-ui使用

::: details 查看示例代码

```javascript
function download_pdf(fileName, url) {
    //filename文件名，url为文件链接
    var that = this;
    var loading = that.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(255, 255, 255, 0.7)",
    });
    fetch(url)
        .then(function(res) {
            return res.blob();
        })
        .then(function(data) {
            // ie兼容处理
            if (window.navigator.msSaveBlob) {
                window.navigator.msSaveBlob(data, fileName);
            } else {
                const downloadURL = window.URL.createObjectURL(data);
                const a = document.createElement("a");
                a.style.display = "none";
                a.href = downloadURL;
                a.target = "_blank";
                a.download = fileName;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                window.URL.revokeObjectURL(downloadURL);
                loading.close();
            }
        })
        .catch(function(e) {
            that.$alert("下载失败，请重试", "错误", {
                confirmButtonText: "确定",
            });
            loading.close();
        });
};
```

:::

### 数据渲染到pdf再下载

说明：需要配合element-ui使用

::: details 查看示例代码

@tab:active JSP

```html
<script>
    var BASEURL = "<%=base_url%>";
</script>
```

@tab JS

```javascript
function download_pdf() {
    var that = this;
    var loading = that.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(255, 255, 255, 0.7)",
    });
    /*
        page_url：
            BASEURL
                jsp页面获取的，意思是当前的地址
            /website/ptfjk/jktzs_print/jktzs_print.jsp
                拼接的地址，jktzs_print.jsp就是将此jsp渲染为pdf
            ?&userid=
                拼接参数
            encodeURIComponent
                中文需要encodeURIComponent转
        url：
            html2pdf2oss
                将html转换为html

    */
    var page_url = BASEURL + "/website/ptfjk/jktzs_print/jktzs_print.jsp?&userid=" + user.userid + "&username=" + encodeURIComponent(user.username);
    var url = "/ptfhj_glxt/html2pdf2oss?userId=" + user.userid + "&userName=" + encodeURIComponent(user.username) + "&url=" + encodeURIComponent(page_url);

    fetch(url)
        .then(function(resp) {
            return resp.json();
        })
        .then(function(resp) {
            that.isLoading = false;
            var pdf_url = resp.data.PC_OBJECT_URL;
            var a = document.createElement("a");
            a.style.display = "none";
            a.href = pdf_url;
            a.target = "_blank";
            document.body.appendChild(a);
            if (Number(resp.ret)) {
                //打印出错
                that
                    .$alert("打印失败，请重试", "错误", {
                        confirmButtonText: "确定",
                    })
                    .then(function() {
                        that.printing = false;
                    });
            } else {
                top.$.MdiAlert("提示", '请在新打开的预览页面中选择打印<br/>（将在点击"确定"后打开）', "EXC", function() {
                    a.click();
                });
                document.body.removeChild(a);
            }
        });
}
```

@tab jktzs_print.jsp

```html
<%@ page import="org.springframework.web.context.support.WebApplicationContextUtils" %>
<%@ page import="com.cdmcs.common.services.database.DataBaseUtil" %>
<%@ page import="java.util.Map" %>
<%@ page import="java.util.HashMap" %>
<%@ page import="com.alibaba.fastjson.JSONObject" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%

    String PN_SQJLBH = request.getParameter("PN_SQJLBH");
    if(PN_SQJLBH == null){
        PN_SQJLBH = "";
    }
    String PC_DYFS = request.getParameter("PC_DYFS");
    if(PC_DYFS == null){
        PC_DYFS = "";
    }
    String C_SPYJXM = request.getParameter("C_SPYJXM");
    if(C_SPYJXM == null){
        C_SPYJXM = "";
    }
    String username = request.getParameter("username");
    if(username == null){
        username = "";
    }
    String userid = request.getParameter("userid");
    if(userid == null){
        userid = "";
    }

    DataBaseUtil databaseUtil = WebApplicationContextUtils.getWebApplicationContext(session.getServletContext()).getBean(DataBaseUtil.class);

    Map<String, String> args = new HashMap<String, String>();
    args.put("PN_SQJLBH", PN_SQJLBH);
    args.put("PC_DYFS",PC_DYFS);
    args.put("PN_USERID", userid);
    args.put("PC_USERNAME", username);
    Map<String,Object> retMap = databaseUtil.callProcedureMap("APPUSER2017.PTFSYS_HJGL.PW_PTFHJSHTG_PRTINFO", args, false, "000001", null, session.getId());

    
%>
<!DOCTYPE html>
<html lang="zh-CN">

<head>
    <meta charset="utf-8">
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,Chrome=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script type="text/javascript" src="../../../static/vue/vue@2.min.js"></script>
    <script>
        var C_SPYJXM = "<%=C_SPYJXM%>"; //办理情况说明
        var PC_DYFS = Number("<%=PC_DYFS%>"); //打印类型
        var retJSON = < %= JSONObject.toJSONString(retMap) % > ; //请求结果
    </script>
</head>

<body>
    <div id="app" v-cloak>

    </div>
</body>
<script type="text/javascript" src="./jktzs_print.js?t=<%=System.currentTimeMillis()%>" charset="UTF-8"></script>

</html>
```

:::
