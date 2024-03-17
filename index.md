---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "word_demo"
  text: "弟皇前端"
  tagline: My great project tagline
  # image: "/public/images/background.svg"
  actions:
    - theme: brand
      text: 文档合集
      link: /word-all
    - theme: alt
      text: 1000种 经典案例
      link: /markdown-examples
    - theme: alt
      text: 工具 API
      link: /api-examples

features:
  - icon:
      src: "https://snow_sharon.gitee.io/tuchuang/imgs/icon-1.svg"
      width: 100%
      height: auto
    title: 基于React+Nest的个人博客
    details: 登录鉴权，文章管理，标签管理，文章的发布、编辑、删除、搜索
    link: "http://118.195.140.233:3000/home"
    target: _blank
  - icon:
      src: "https://snow_sharon.gitee.io/tuchuang/imgs/icon-2.svg"
      width: 100%
      height: auto
    title: 基于spring boot+vue3的个人网盘
    details: 文件资源的管理，包括文件的上传、下载、删除、搜索、编辑
    link: "http://118.195.140.233:3000/home"
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
    
---


## 个人简介:

<div class="article-box">
  <div class="article-avatar-wrap">
    <img src="/public/logo.svg" alt="dhx" class="article-avatar" />
    <div class="animation"></div>
  </div>
  
  <div>
    <div class="article-title">dhx</div>
    <div class="article-personal">一个默默无闻的前端开发者</div>
    <p class="article-content">
    {{`君子尚拙, 以璞为真;
    克己慎独, 守心明性。`}}
    </p>
  </div>
  
</div>

## 职业技能:

- 喜欢可视化技术、擅长JavaScript、计算机科学与技术专业

| 技术栈                                  | 熟练度 | 备注       |
| --------------------------------------- | ------ | ---------- |
| HTML、CSS、JavaScript、ES6+、TypeScript | 熟练   | 网页可视化基础   |
| Webpack、Vite、Grunt、Rollup            | 生疏   | 工程化管理   |
| React、Vue、Uniapp                      | 熟练   | 单页面应用开发   |
| Node.js、Nestjs、Spring                 | 生疏   | 服务端搭建 |
| Threejs、CocosJS、Canvas 2D             | 生疏   | web 3D |
| MySQL、MongoDB、Redis                   | 生疏   | 数据库     |

## 个人经历:

- 2023年，六月中旬，毕业于北京交通大学海滨学院
- 2023年，九月初，加入掌腾科技有限公司，担任前端开发工程师，兼顾后端，维护内部基于(react+nest)OA系统
- 2023年，12月底，加入杭州软程有限公司，担任前端开发工程师，负责二次开发基于(vue+uniapp)的小程序和后台租机系统

### 说说

- 人世间一切皆是虚妄，惟吾所爱真切。
- 纵然前路永夜，也要心存光亮。
- 无论选择哪条路，都需要脚踏实地钻研。
- 与其临渊羡鱼，不如退而结网。

<script setup>

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

  .title {
    --vp-c-text-1: #832dac;
  }

  .dark .title {
    --vp-c-text-1: #fff;
  }

  .article {
    &-box {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      &>div + div {
        width: 60%;
      }
    }

    &-avatar {
      width: 140px;
      height: 140px;

      &-wrap {
        position: relative;
        width: 160px;
        height: 160px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2;

        .animation {
          width: 160px;
          height: 160px;
          border-radius: 40%;
          background-color: #a175be;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
          animation: rotate 10s linear infinite;

          &::before {
            position: absolute;
            content: "";
            width: 100%;
            height: 100%;
            left: 0;
            border-radius: 40%;
            background-color: #a175be96;
            transform: rotate(45deg);
            z-index: 1;
          }
        }

        @keyframes rotate {
          to {
            transform: rotate(360deg);
          }
        }

        img {
          position: absolute;
          z-index: 3;
        }
      }
    }

    &-info {
      width: 100%;
      margin-left: 20px;
    }

    &-title {
      text-align: center;
      font-size: 30px;
      font-weight: 700;
    }

    &-personal {
      text-align: center;
      font-size: 20px;
      color: #832dac;
      line-height: 1.7
    }

    &-tag {}

    &-content {
      text-align: center;
      font-size: 16px;
      line-height: 1.7;
      white-space: break-spaces;
    }
  }

  .dark .article {

    &-title {}

    &-personal {
      color: #ddd;
    }
  }

  #个人经历 + ul {
    mix-blend-mode: difference;
    color: #aaa;
  }

  .VPNavBarMenuLink {
    font-weight: bold !important;
  }
</style>
