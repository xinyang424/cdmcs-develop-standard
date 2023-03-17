---
title: Vue语法模板
date: 2023-03-01
category:
  - Vue规范
---


### 基础模板

```javascript
new Vue({
    el:"#app"
    data:function(){
        return{
        }
    },
    methods:{
        
    },
    created:function(){
        
    }
})
```



### 请求示例模板

需搭配element-ui模板：

```javascript
var user = top._globPlateUserInfo;

new Vue({
	el: "#app",
	data: function () {
		return {
			tableData:[],//表格数据源
      isLoading:false,//表格是否加载中
		};
	},
	methods: {
		//获取表格数据
		getTableData: function () {
			var that = this;//推荐使用this之前先这么处理，后面就是that.xxx，不破坏vue语法结构。
			that.isLoading = true;
			var http = new AjaxProxy();
			http.addParm("PN_USERID", user.userid);
			http.addParm("PC_USERNAME", user.username);
			http.invokeProc(
				"APPUSER2017.xxxxx.xxxxxx",
				true,
				function (http) {
					var sysError = http.getSysError();
					that.isLoading = false;
					if (sysError) {
						that.$alert(sysError, "错误", {
							confirmButtonText: "确定",
						});
						return;
					}
					var res = http.responseInfo;
					if (Number(res.PN_RET)) {
						//有错
						that.$alert(res.PC_MSG, "错误", {
							confirmButtonText: "确定",
						});
					} else {
                        that.tableData = res.P_RESULT.row_value;
					}
				},
				http
			);
		},
	},
	created: function () {
		this.getTableData();
	},
});

```

