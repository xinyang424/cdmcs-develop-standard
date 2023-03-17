import { navbar } from "vuepress-theme-hope";

 const zhNavbar = navbar([
  //首页
  "/",
  //前端
  { text: "前端", icon: "template", link: "/web/" },
  //后端
  { text: "后端", icon: "back-stage", link: "/java/" },
  //前端工具
  {
    text: "前端工具",
    icon: "tool",
    children: [
      {
        text: "vscode插件",
        icon: "vscode",
        link:"/web/tools/vscode-plugins"
      },
      {
        text: "字体图标库",
        icon: "format",
        link:"/web/tools/iconfont"
      },
      {
        text: "在线工具",
        icon: "relation",
        link:"/web/tools/online-tools"
      },
    ],
  },
  //后端工具
  {
    text: "后端工具",
    icon: "build",
    children: [
      {
        text: "Android Studio",
        icon: "android",
        link:"/java/tools/android-studio"
      },
      {
        text: "JDK8",
        icon: "java",
        link:"/java/tools/jdk"
      },
      {
        text: "Centos",
        icon: "centos",
        link:"/java/tools/centos"
      },
      
    ],
  },
]);
export default zhNavbar