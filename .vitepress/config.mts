import { defineConfig } from "vitepress";
import { DefaultTheme } from "vitepress/theme";
import nav from "./nav.mts";
import sidebar from "./sidebar.mts";
import articles from "./articles.mts";

const themeConfig: DefaultTheme.Config & any = {
	logo: "https://snow_sharon.gitee.io/tuchuang/imgs/logo.svg",
	editLink: {
		pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
	},
	search: { provider: "local" },
  nav: nav,
  sidebar: sidebar,
	socialLinks: [ { icon: "github", link: "https://github.com/wangxin-tian" } ],
  articles: articles
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
	head: [
		[
			"link",
			{
				rel: "icon",
				href: "https://dhx.liangmoren.com/public/dhx_ico.ico",
			},
		],
	],
  cleanUrls: true,
	title: "word-demo",
	description: "笔记文档",
	assetsDir: "public", // 指定资源目录
	lastUpdated: true,
	markdown: {
		lineNumbers: true,
	},

	themeConfig,

  css: {
    // 指定全局样式文件路径
    global: 'src/global.css'
  }
});
