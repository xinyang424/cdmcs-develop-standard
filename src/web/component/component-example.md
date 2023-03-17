---
title: 组件样例
date: 2023-03-01
category:
  + 常用组件
---

## 搜索、表格、分页样式

效果图（注：该布局基于element-ui，若原型图采用这种布局，该示例图就是模板。）：

![表格、搜索、分页界面](/component/diy/list.png)

::: details 代码示例

::: code-tabs#shell

@tab:active CSS

```css
html,
body {
    height: 100%;
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

[v-cloak] {
    display: none;
}

#app {
    overflow: hidden;
    height: 100%;

}

#app>.el-container {
    height: 100%;
    justify-content: space-between;
}

#app>.el-container .el-header {
    display: flex;
    align-items: center;
}

#app>.el-container .el-header .el-form .el-form-item {
    margin-bottom: 0;
}

#app>.el-container .el-main {
    padding: 5px;
    border-top: 1px solid #F5F5F5;
    border-bottom: 1px solid #F5F5F5;
    overflow: hidden;
}

#app>.el-container .el-main .el-table th.el-table__cell {
    background-color: #F5F5F5;
    line-height: 30px;
    font-size: 14px;
}

#app>.el-container .el-main .el-table .amount-row {
    background: #f0f9eb;
}

#app>.el-container .el-footer {
    display: flex;
    align-items: center;
}
```

@tab HTML

```html
<body>
    <div id="app" v-cloak>
        <el-container>
            <el-header style="height: 60px;">
                <el-form :inline="true">
                    <el-form-item label="减免事项名称">
                        <el-input v-model="searchCondition.PC_KEYWORD" clearable placeholder="请输入项目类型名称" style="width: 240px;"></el-input>
                    </el-form-item>
                    <el-form-item label="状态">
                        <el-select v-model="searchConditionForm.PC_DQZT" style="width: 150px;" clearable placeholder="请选择">
                            <el-option label="有效" value="1"></el-option>
                            <el-option label="无效" value="0"></el-option>
                            <el-option label="全部" value=""></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="goSearch" icon="el-icon-search" :disabled="isLoading">查询</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="success" @click="add" icon="el-icon-circle-plus-outline" :disabled="isLoading">添加</el-button>
                    </el-form-item>
                </el-form>
            </el-header>
            <el-main>
                <el-table :data="tableData" stripe style="width: 100%" border v-loading="isLoading" highlight-current-row="true" :height="tableHeight" size="mini">
                    <el-table-column header-align="center" align="center" prop="RM" label="序号" width="50">
                    </el-table-column>
                    <el-table-column header-align="center" show-overflow-tooltip min-width="150" prop="C_JMSXMC" label="减免事项名称">
                    </el-table-column>
                    <el-table-column header-align="center" align="center" width="130" prop="N_JMBL" label="减免比例(%)">
                    </el-table-column>
                    <el-table-column prop="C_YXBZMS" label="状态" width="100" header-align="center" align="center">
                    </el-table-column>
                    <el-table-column prop="C_BZ" label="备注" header-align="center" show-overflow-tooltip min-width="50">
                    </el-table-column>
                    <el-table-column label="操作" fixed="right" width="150" header-align="center" align="center">
                        <template slot-scope="scope">
                            <el-button type="text" size="small" icon="el-icon-edit-outline" @click="update(scope.$index,scope.row)">修改</el-button>
                            <el-button type="text" size="small" icon="el-icon-delete" @click="delete(scope.$index,scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-main>
            <el-footer style="height: 50px;">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="pageBar.currentPage" :page-sizes="pageBar.pageSizes" :page-size="pageBar.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="pageBar.totalPage" pager-count="7">
                </el-pagination>
            </el-footer>
        </el-container>
    </div>
</body>
<script type="text/javascript" src="script/main.js?t=<%=System.currentTimeMillis()%>" charset="UTF-8">
</script>
```

@tab JS

```javascript
var user = top._globPlateUserInfo;
new Vue({
    el: "#app",
    data: function() {
        return {
            searchCondition: {
                PC_KEYWORD: "",
                PC_DQZT: "",
            },
            isSearch: false, //是否查询
            tableHeight: 0,
            isLoading: false,
            tableData: [{
                C_JMSXDM: "",
                C_JMSXMC: "",
                N_JMBL: "",
                C_YXBZMS: "",
                RM: "",
                C_BZ: "",
            }, ],
            pageBar: {
                currentPage: 1, //当前页
                pageSize: 5, //每页多少行数据
                totalPage: 0, //总条数
                pageSizes: [5, 10, 20, 30], //可切换的每页条数
            },
        };
    },
    methods: {
        //每页大小变化
        handleSizeChange: function(currentSize) {
            this.pageBar.pageSize = currentSize;
            this.getTable();
        },
        //当前页变化
        handleCurrentChange: function(currentPage) {
            this.pageBar.currentPage = currentPage;
            this.getTable();
        },
        //查询
        goSearch: function() {
            this.isSearch = true;
            this.pageBar.currentPage = 1;
            this.pageBar.totalPage = 0;
            this.getTable();
        },
        //获取表格数据
        getTable: function() {
            var that = this;
            var http = new AjaxProxy();
            that.isLoading = true;
            http.addParm("PN_PAGE", this.pageBar.currentPage == 1 ? -1 : this.pageBar.currentPage);
            http.addParm("PN_PAGEROWS", this.pageBar.pageSize);
            http.addParm("PC_JMSXMC", this.isSearch ? this.searchCondition.PC_KEYWORD : "");
            http.addParm("PC_YXBZ", this.isSearch ? this.searchCondition.PC_DQZT : "");
            http.addParm("PN_USERID", user.userid);
            http.addParm("PC_USERNAME", user.username);

            http.invokeProc(
                "APPUSER2017.PTFSYS_JMSXWH.PK_JMSX_LIST",
                true,
                function(http) {
                    var sysError = http.getSysError();
                    that.isLoading = false;
                    that.isSearch = false;
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
                        if (!that.pageBar.totalPage) {
                            that.pageBar.totalPage = Number(res.PN_TOTALROWS);
                        }
                        that.tableData = res.P_RESULT.row_value;
                    }
                },
                http
            );
        },
        //添加
        add: function(index, item) {},
        //删除减免事项
        delete: function(index, item) {},
        //计算表格高度，即允许表格的最大高度
        computedTableHeight: function() {
            var that = this;
            var el_main_element = document.querySelector(".el-main");
            var el_main_element_height = Number(getComputedStyle(el_main_element, false)["height"].replace(/\s+|px/gi, ""));
            var el_main_element_padding = Number(getComputedStyle(el_main_element, false)["paddingTop"].replace(/\s+|px/gi, "")) + Number(getComputedStyle(el_main_element, false)["paddingBottom"].replace(/\s+|px/gi, ""));
            var el_main_element_real_height = el_main_element_height - el_main_element_padding;
            that.$nextTick(function() {
                that.tableHeight = el_main_element_real_height;
            });
        },
    },
    created: function() {
        this.getTable();
    },
    mounted: function() {
        this.computedTableHeight();
    },
});
```

:::

==样式注意点：==

* 需要采用el-container的上中下布局，CSS样式才能最大程度选中。
* 搜索区域如果是一行显示完，el-header默认为60px，如果多行显示，请把高度设置大一点。
* el-main是有上下边框的，会有更清晰的层次感。
* 大部分代码可以直接拷贝使用，个别需要根据需求需求动态调整。

## 页面弹框样式

### 操作类弹框

效果图（注：该布局基于element-ui，适用于用MdiWindow打开页面的模板。）：

![操作类弹框界面](/component/diy/handleDialog.png)

::: details 代码示例

::: code-tabs#shell

@tab:active CSS

```css
html,
body,
#app {
    height: 100%;
    overflow: hidden;
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

[v-cloak] {
    display: none;
}

#app .el-container {
    height: 100%;
}

#app .el-container .el-main {
    flex: 1;
    padding: 10px 30px;
    border-bottom: 1px solid #F5F5F5;
    display: flex;
    justify-content: center;
    align-items: center;
}

#app .el-container .el-main .el-form {
    width: 100%;
}

#app .el-container .el-main .el-form .el-form-item__label {
    white-space: nowrap;
}

#app .el-container .el-footer {
    display: flex;
    align-items: center;
    justify-content: center;
}

#app .el-container .el-footer>button:last-child {
    margin-left: 60px;
}
```

@tab HTML

```html
<div id="app" v-cloak>
    <el-container>
        <el-main>
            劈里啪啦一堆内容
        </el-main>
        <el-footer style="height: 60px;">
            <el-button type="success" icon="el-icon-circle-check">提交</el-button>
            <el-button icon="el-icon-circle-close">取消</el-button>
        </el-footer>
    </el-container>
</div>
```

:::

==样式注意点：==

* 需要采用el-container的上中下布局，CSS样式才能最大程度选中。
* el-main是有底部边框的，与操作按钮区域区分开，增强层次感。
* 大部分代码可以直接拷贝使用，个别需要根据需求需求动态调整。
* 操作类的弹框确定按钮动态改变，但是关闭类按钮文字为取消

### 查看类弹框

效果图（注：该布局基于element-ui，适用于用MdiWindow打开页面的模板。）：

![查看类弹框界面](/component/diy/viewDialog.png)

::: details 代码示例

::: code-tabs#shell

@tab:active CSS

```css
html,
body {
    height: 100%;
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

[v-cloak] {
    display: none;
}

#app {
    overflow: hidden;
    height: 100%;
}

#app>.el-container {
    height: 100%;
    justify-content: space-between;
    overflow: hidden;
}

#app>.el-container .el-header {
    display: flex;
    align-items: center;
    font-size: 16px;
    padding: 0;
    margin: 0 20px;
}

#app>.el-container .el-main {
    flex: 1;
    border-top: 1px solid #F5F5F5;
    border-bottom: 1px solid #EAEAEA;
}

#app>.el-container .el-footer {
    display: flex;
    align-items: center;
    justify-content: center;

}
```

@tab HTML

```html
<div id="app" v-cloak>
    <el-container>
        <el-header height="50px">
            标题或头部内容
        </el-header>
        <el-main>
            显示的主要内容
        </el-main>
        <el-footer height="50px">
            <el-button icon="el-icon-circle-close" @click="closeWindow">返回</el-button>
        </el-footer>
    </el-container>
</div>
```

:::

==样式注意点：==

* 需要采用el-container的上中下布局，CSS样式才能最大程度选中。
* el-main是有底部边框的，与操作按钮区域区分开，增强层次感。
* 大部分代码可以直接拷贝使用，个别需要根据需求需求动态调整。
* 查看类的弹框关闭类按钮为“返回”
