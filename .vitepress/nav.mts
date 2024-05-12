import { DefaultTheme } from "vitepress";

const prefix_docs = "/src/pages/docs";
const prefix_tools = "/src/pages/tools";
const prefix_about = "/src/pages/mine";

const nav: DefaultTheme.NavItem[] = [
  { text: "主页", link: "/" },
  { text: "案例", link: "/examples" },
  {
    text: "基础",
    items: [
      { text: "小程序", link: `${prefix_docs}/applet/` },
      { text: "工程化", link: "/api-examples" },
      { text: "模块化", link: "/api-examples" },
      { text: "...", link: `${prefix_docs}/` },
    ],
  },
  {
    text: "dhx-UI",
    items: [
      { text: "特效库", link: `${prefix_tools}/animation/` },
      { text: "功能库", link: `${prefix_tools}/functional/tool` },
      { text: "组件库", link: `${prefix_tools}/ui/` },
      { text: "脚手架", link: `${prefix_tools}/cli/` },
    ],
  },
  { text: "关于↗", link: `${prefix_about}/` },
  { text: "友链↗", link: "/src/pages/friends/index.html" },
];

export default nav;