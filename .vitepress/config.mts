import { defineConfig } from 'vitepress';

const prefix = '/src/docs';
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "word-demo",
  description: "笔记文档",
  assetsDir: 'public', // 指定资源目录
  lastUpdated: true,
  themeConfig: {
    logo: 'logo.svg',
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
      { text: '文档', items: [
        { text: '小程序', link: '/api-examples' },
        { text: '工程化', link: '/api-examples' },
        { text: '模块化', link: '/api-examples' },
        { text: '业务管理', link: '/api-examples' },
        { text: '框架设计', link: '/api-examples' },
        { text: 'web 3D', link: '/api-examples' },
        { text: '操作系统', link: '/api-examples' },
        { text: '真理之门', link: '/api-examples' },
      ]},
      { text: '工具库', items: [
        { text: '特效库', link: '/api-examples' },
        { text: '功能库', link: '/api-examples' },
        { text: 'dhx-UI', link: '/api-examples' }
      ]}
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
