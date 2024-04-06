# 骨架屏

盒子模型开发中，当页面加载时，先显示一个盒子，里面有一些简单的骨架，然后等数据加载完成后再显示真实的数据。

## 原理

1. 先创建一个盒子，里面有一些简单的骨架
2. 然后通过JavaScript动态的将真实的数据填充到盒子中

## 展示

<div class="skeleton-display" style="display: flex; justify-content: space-around; align-items: center">
  <div class="skeleton">
    <div class="image">
      <img class="image" src="http://dhx.liangmoren.com/public/images_归终_01.jpg" alt="">
    </div>
    <div class="content">
      <h4>title</h4>
      <div class="description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi quae sed facere nemo autem nam ...
      </div>
    </div>
  </div>
  <div class="skeleton loading">
    <div class="image"></div>
    <div class="content">
      <h4></h4>
      <div class="description"></div>
    </div>
  </div>
</div>

<style lang="scss">
  .skeleton-display {
    color: #333;
    --loading-purple: #e3daf4;
    .skeleton {
      width: 300px;
      background-color: #fff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.12);
    }
    .image {
      height: 200px;
    }
    .image img {
      display: block;
      width: 100%;
      height: inherit;
      object-fit: cover;
    }
    .content {
      padding: 2rem 1.8rem;
    }
    h4 {
      margin: 0 0 1rem;
      font-size: 1.5rem;
      line-height: 1.5rem;
    }
    .description {
      font-size: 1rem;
      line-height: 1.4rem;
    }
    .loading .image,
    .loading h4,
    .loading .description {
      background-color: var(--loading-purple);
      background: linear-gradient(100deg, #fff0 calc(50% - 30px), #fff8 50%, #fff0 calc(50% + 30px)) var(--loading-purple);
      background-size: 200% 100%;
      background-position-x: 120%;
      animation: loading-skeleton 1s ease-in-out infinite;
    }
    @keyframes loading-skeleton {
      to {
        background-position-x: -20%;
      }
    }
    .loading h4 {
      min-height: 1.6rem;
      border-radius: 4px;
      animation-delay: 0.04s;
    }
    .loading .description {
      min-height: 4rem;
      border-radius: 4px;
      animation-delay: 0.06s;
    }
  }
</style>

## 实现

index.html

```html
  <div class="skeleton">
    <div class="image">
      <img class="image" src="http://dhx.liangmoren.com/public/images_归终_01.jpg" alt="">
    </div>
    <div class="content">
      <h4>title</h4>
      <div class="description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi quae sed facere nemo autem nam ...
      </div>
    </div>
  </div>

  <div class="skeleton loading">
    <div class="image">

    </div>
    <div class="content">
      <h4></h4>
      <div class="description"></div>
    </div>
  </div>
```

skeleton.css

```css
    :root {
      --loading-purple: #e3daf4;
    }

    /* body */
    body {
      background-color: rgb(221, 231, 239);
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 100vh;
      margin: 0;
    }

    * {
      padding: 0;
      margin: 0;
    }

    .skeleton {
      width: 300px;
      background-color: #fff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.12);
    }

    .image {
      height: 200px;
    }

    .image img {
      display: block;
      width: 100%;
      height: inherit;
      object-fit: cover;
    }

    .content {
      padding: 2rem 1.8rem;
    }

    h4 {
      margin: 0 0 1rem;
      font-size: 1.5rem;
      line-height: 1.5rem;
    }

    .description {
      font-size: 1rem;
      line-height: 1.4rem;
    }

    .loading .image,
    .loading h4,
    .loading .description {
      background-color: var(--loading-purple);
      background: linear-gradient(100deg, #fff0 calc(50% - 30px), #fff8 50%, #fff0 calc(50% + 30px)) var(--loading-purple);
      background-size: 200% 100%;
      background-position-x: 120%;
      animation: loading-skeleton 1s ease-in-out infinite;
    }

    @keyframes loading-skeleton {
      to {
        background-position-x: -20%;
      }
    }

    .loading h4 {
      min-height: 1.6rem;
      border-radius: 4px;
      animation-delay: 0.04s;
    }

    .loading .description {
      min-height: 4rem;
      border-radius: 4px;
      animation-delay: 0.06s;
    }
```