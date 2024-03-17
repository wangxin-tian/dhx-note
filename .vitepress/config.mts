import { defineConfig } from 'vitepress';

const prefix = '/src/docs';
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "word-demo",
  description: "笔记文档",
  lastUpdated: true,
  themeConfig: {
    logo: '/public/images/logo.svg',
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path'
    },
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '案例', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: '导航',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: '文档合集', link: `${prefix}/word-all` },
          { text: '工具库', link: `${prefix}/dhx-api` }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
