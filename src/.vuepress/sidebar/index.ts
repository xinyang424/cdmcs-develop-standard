import { sidebar } from "vuepress-theme-hope";

 const zhSidebar = sidebar({
  "/web/": [
    "",
    {
      text:"HTML规范",
      icon:"html",
      prefix:"html/",
      collapsible: true,
      children:"structure"
    },
    {
      text:"CSS规范",
      icon:"css",
      prefix:"css/",
      collapsible: true,
      children:"structure"
    },
    {
      text:"JavaScript规范",
      icon:"javascript",
      prefix:"js/",
      collapsible: true,
      children:"structure"
    },
    {
      text:"Vue规范",
      icon:"vue",
      prefix:"vue/",
      collapsible: true,
      children:"structure"
    },
    {
      text:"命名规范",
      icon:"comment",
      prefix:"nominate/",
      collapsible: true,
      children:"structure"
    },
    {
      text:"常用方法",
      icon:"function",
      prefix:"function/",
      collapsible: true,
      children:"structure"
    },
    {
      text:"常用组件",
      icon:"module",
      prefix:"component/",
      collapsible: true,
      children:"structure"
    },
    {
      text:"前端工具",
      icon:"tool",
      prefix:"tools/",
      collapsible: true,
      children:"structure"
    },
    {
      text:"前端文档贡献者",
      icon:"group",
      link:"contributor/",
    },
  ],
  "/java/":[
    "",
    {
      text:"后端工具",
      icon:"build",
      prefix:"tools/",
      collapsible: true,
      children:"structure"
    },
  ]
});

export default zhSidebar
