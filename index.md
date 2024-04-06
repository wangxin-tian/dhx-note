---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "word_demo"
  text: "弟皇前端"
  tagline: 江畔何人初见月，江月何年初照人。

  actions:
    - theme: brand
      text: 文档合集
      link: /src/pages/docs/

    - theme: alt
      text: 经典案例
      link: /examples

    - theme: alt
      text: 工具 API
      link: /api-examples

features:
  - icon:
      width: 100%
      height: auto
    title: 基于React+Nest的个人博客
    details: 登录鉴权，文章管理，标签管理，文章的发布、编辑、删除、搜索
    link: "http://118.195.140.233:3000/home"
    target: _blank
  - icon:
      width: 100%
      height: auto
    title: 基于spring boot+vue3的个人网盘
    details: 文件资源的管理，包括文件的上传、下载、删除、搜索、编辑
    link: "http://118.195.140.233:3000/home"
  - title: 个人图床
    details: 支持上传图片，但不允许删除
    link: "http://dhx.liangmoren.com/"
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
   
---

<script setup>
  // import Template from './template.vue'
  false && (() => {
    const list = [0,1,7,9,5,6,25];
    const bodyStyle = document.body.style;

    bodyStyle.backgroundColor = "transparent";

    setInterval( _ => {
      const num = Math.random() * 7;
      const index = list[Math.floor(num)];
      const suffix = index === 7 ? 'png' : 'jpg';
      const url = `url('https://snow_sharon.gitee.io/tuchuang/imgs/img_(${index}).${suffix}')`;
      bodyStyle.backgroundImage = url;
    }, 1000 * 10)
  })(); /** 图片切换 */
</script>

<style lang="scss">
  :root {
    --vp-home-hero-name-color: transparent;
    --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe, #41d1ff);
  }

  body {
    background-image: url('https://snow_sharon.gitee.io/tuchuang/imgs/img_(7).png');
    background-size: auto;
    background-attachment: fixed;
    background-position: right bottom;
    background-repeat: no-repeat;
  }

  .red {
    color: #bd34fe;
  }

  .yellow {
    color: #ffae1a;
  }

  .green {
    color: #36c12c;
  }

  .title {
    --vp-c-text-1: #832dac;
  }

  .dark .title {
    --vp-c-text-1: #fff;
  }

  .VPNavBarMenuLink, .button .text {
    font-weight: bold !important;
  }

  .button .text {
    color: purple;
  }

  .grid-4 > .VPLink {
    box-shadow: 0 0 4px #0005;

    &:hover {
      box-shadow: 0 0 4px var(--vp-c-brand-1);
    }
  }

  /* 设置垂直滚动条的宽度和水平滚动条的高度 */
  body::-webkit-scrollbar{
      width: 8px;
      height: 8px;
  }

  /* 设置滚动条的滑轨 */
  body::-webkit-scrollbar-track {
        background-color: #ddd;
  }

  /* 滑块 */
  body::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.6);
      border-radius: 4px;
  }

   /* 滑轨两头的监听按钮 */
  body::-webkit-scrollbar-button {
      background-color: #888;
      display: none;
  }

  /* 横向滚动条和纵向滚动条相交处尖角 */
  body::-webkit-scrollbar-corner {
      background-color: black;
  }
</style>
