---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "word_demo"
  text: "弟皇前端"
  tagline: 江畔何人初见月，江月何年初照人。
  image:
    src: "https://dhx.liangmoren.com/public/img_(0).jpeg"
    alt: "hero"

  actions:
    - theme: brand
      text: 文档合集
      link: /src/pages/docs/

    - theme: alt
      text: 1000 经典案例
      link: /examples

    - theme: alt
      text: 个人项目
      link: /projects
# features:
#   - icon:
#       width: 100%
#       height: auto
#     title: 基于React+Nest的个人博客
#     details: 登录鉴权，文章管理，标签管理，文章的发布、编辑、删除、搜索
#     link: "http://118.195.140.233:3000/home"
#     target: _blank
#   - icon:
#       width: 100%
#       height: auto
#     title: 基于spring boot+vue3的个人网盘
#     details: 文件资源的管理，包括文件的上传、下载、删除、搜索、编辑
#     link: "http://118.195.140.233:3000/home"
#   - title: 个人图床
#     details: 支持上传图片，但不允许删除
#     link: "http://dhx.liangmoren.com/"
#   - title: Feature C
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<script setup>
  // import Template from './template.vue'
  // import MyCalender from './src/component/MyCalender.vue';
  import { useData } from 'vitepress'
  const { articles } = useData().theme.value;

  // console.log(useData().site.value.themeConfig.sidebar[0].items.push());

  Array.toSorted || (Array.prototype.toSorted = function (compareFn) {
    return this.slice(0).sort(compareFn);
  });

  const orderedArticles = articles.toSorted((a, b) => a.order - b.order).slice(0, 8);

  function openArticle(article) {
    // console.log(article.link, window.location.origin)
    // window.open(window.location.origin + '/src' + article.link, '_self');
  }

  const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];

  function getRandomColor(key) {
    const index = key % colors.length;
    return colors[index];
  }

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

<div class="wrap">
   <div v-for="(article, index) in orderedArticles" :key="index" class="container">
     <a class="VPLink link VPFeature flex-row article-item" :href="article.link" style="text-decoration: none" target="_self">
       <div v-if="article.image" class="article-image">
          <img :src="article.image" alt="">
       </div>
       <div class="VPHomeGridItem">
         <h3 class="title" style="padding: 0; margin: 0;">
           {{ article.title }}
         </h3>
         <div class="details">
           <span class="">{{ article.description }}</span>
         </div>
         <div class="details">
          <div v-if="article.tags.length" class="tags">
            <span
             v-for="(tag, key) in article.tags"
             :key="key"
             class="tag"
             :class="`bg-${getRandomColor(key)}`"
           >{{ tag }}</span>
           <span class="">{{ article.date }}</span>
          </div>
         </div>
       </div>
     </a>
  </div>
</div>

<!-- ## 本月撰写 <span>（{{ (new Date().getMonth() + 1) + '月'}}）</span> -->

<!-- <MyCalender :articles="articles"/> -->

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

  .title {
    --vp-c-text-1: #832dac;
  }

  .dark .title {
    --vp-c-text-1: #fff;
  }

  .VPHomeGridItem {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 12px 24px;
    height: 100%;
  }

  .VPNavBarMenuLink, .button .text {
    font-weight: bold !important;
  }

  .button .text {
    color: purple;
  }

  .grid-4 > .VPLink {
    box-shadow: 0 0 1px #00000096;

    &:hover {
      box-shadow: 0 0 1px var(--vp-c-brand-1);
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
