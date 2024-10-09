// .vitepress/theme/index.js
// import DefaultTheme from 'vitepress/theme'
import { EnhanceAppContext } from "vitepress";
import Layout from "./Layout.vue";
import "./global.css";

// export default DefaultTheme

export default {
	Layout,
	enhanceApp({ app, router, siteData }: EnhanceAppContext) {
		// ...
		console.log( app, router, siteData);
	},
};
