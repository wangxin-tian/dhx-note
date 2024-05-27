import { DefaultTheme } from "vitepress/theme";

const prefix_docs = "/src/pages/docs";
const prefix_tools = "/src/pages/tools";
const prefix_about = "/src/pages/mine";

const sidebar: DefaultTheme.Sidebar = [
  {
    text: "导航",
    items: [
      {
        text: "案例合集",
        link: "/examples",
        collapsed: true,
        items: [
          { text: "项目案例", link: "/examples#项目案例" },
          { text: "方案设计", link: "/examples#方案设计" },
        ],
      },
      {
        text: "语言基础",
        collapsed: true,
        items: [
          {
            text: "JavaScript",
            link: `${prefix_docs}/language/javascript`,
          },
          {
            text: "TypeScript",
            link: `${prefix_docs}/language/typescript`,
          },
          { text: "ArkTs", link: `${prefix_docs}/language/arkts` },
          { text: "Golang", link: `${prefix_docs}/language/golang` },
          { text: "Dart", link: `${prefix_docs}/language/dart` },
          { text: "C/C++", link: `${prefix_docs}/language/c` },
          { text: "PHP", link: `${prefix_docs}/language/php` },
          { text: "Java", link: `${prefix_docs}/language/java` },
          { text: "Python", link: `${prefix_docs}/language/python` },
        ],
      },
      {
        text: "开发基础",
        collapsed: true,
        items: [
          { text: "开发生态", link: `${prefix_docs}/base/` },
          { text: "数据库", link: `${prefix_docs}/sql/` },
          { text: "跨端开发", link: `${prefix_docs}/applet/` },
          { text: "工程化", link: `${prefix_docs}/engineer/` },
          { text: "模块化", link: `${prefix_docs}/modelization/` },
          { text: "业务管理", link: `${prefix_docs}/business/` },
          { text: "性能优化", link: `${prefix_docs}/performance/` },
          { text: "设计模式", link: `${prefix_docs}/design/` },
          { text: "框架设计", link: `${prefix_docs}/frame/` },
          { text: "Canvas", link: `${prefix_docs}/drawing/` },
          { text: "操作系统", link: `${prefix_docs}/system/` },
          { text: "网络", link: `${prefix_docs}/internet/` },
          { text: "GIS", link: `${prefix_docs}/gis/` },
          { text: "真理之门", link: `${prefix_docs}/door/` },
        ],
      },
      {
        text: "数学基础",
        collapsed: true,
        items: [
          { text: "线性代数", link: `${prefix_docs}/math/linear` },
          { text: "高等数学", link: `${prefix_docs}/math/high` },
          { text: "离散数学", link: `${prefix_docs}/math/discrete` },
        ],
      },
      {
        text: "dhx-UI",
        link: `${prefix_tools}/`,
        collapsed: false,
        items: [
          { text: "特效库", link: `${prefix_tools}/animation/` },
          { text: "功能库", link: `${prefix_tools}/functional/tool` },
          { text: "组件库", link: `${prefix_tools}/ui/` },
          { text: "脚手架", link: `${prefix_tools}/cli/` },
        ],
      },
    ],
  },
];

export default sidebar;


