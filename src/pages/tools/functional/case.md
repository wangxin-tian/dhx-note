# 模拟场景

## 红绿灯

```typescript
const task = (light: string, time: number) =>
  new Promise((resolve) => {
    setTimeout(() => {
      if (light === "red") console.log("stop");
      else if (light === "green") console.log("go");
      else if (light === "yellow") console.log("slow down");
      resolve();
    }, time);
  });

const taskFlow = async () => {
  await task("red", 3000);
  await task("green", 2000);
  await task("yellow", 1000);
  taskFlow();
};
```

## 睡眠

```typescript
type SleepType = (time: number) => Promise<void>;
const sleep: SleepType= (time) => new Promise(resolve => {
  setTimeout(resolve , time);
});

const sleep = (time: number): void => {
  try {
    let srtTime = new Date().getTime();
    while (new Date().getTime() - srtTime < time) {}
    return;
  } catch (e) {
    console.log(e)
  }
}
```

## 请求5秒后终止

实现1：利用abort签名5秒后取消请求

```js
let abort = new AbortController();
fetch(url, { signal: abort.signal }).then((response) => {
  // ...
});

setTimeout(() => {
  abort.abort();
}, 5000);
```

实现2：利用Promise.race

```js
const call = (url) => fetch(url).then(res => res.json());
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const result = Promise.race([call(url), wait(5000)]);
```

## 消息封装

```js
/* message.js */

class Message {

  /**
   * 构造函数会在实例化的时候自动执行
   */
  constructor() {
    const containerId = 'message-container';
    // 检测下html中是否已经有这个message-container元素
    this.containerEl = document.getElementById(containerId);

    if (!this.containerEl) {
      // 创建一个Element对象，也就是创建一个id为message-container的dom节点
      this.containerEl = document.createElement('div');
      this.containerEl.id = containerId;
      // 把message-container元素放在html的body末尾
      document.body.appendChild(this.containerEl);
    }
  }

  show({ type = 'info', text = '', duration = 2000, closeable = false }) {
    // 创建一个Element对象
    let messageEl = document.createElement('div');
    // 设置消息class，这里加上move-in可以直接看到弹出效果
    messageEl.className = 'message move-in';
    // 消息内部html字符串
    messageEl.innerHTML = `
        <span class="icon icon-${type}"></span>
        <div class="text">${text}</div>
    `;

    // 是否展示关闭按钮
    if (closeable) {
      // 创建一个关闭按钮
      let closeEl = document.createElement('div');
      closeEl.className = 'close icon icon-close';
      // 把关闭按钮追加到message元素末尾
      messageEl.appendChild(closeEl);

      // 监听关闭按钮的click事件，触发后将调用我们的close方法
      // 我们把刚才写的移除消息封装为一个close方法
      closeEl.addEventListener('click', () => {
        this.close(messageEl)
      });
    }

    // 追加到message-container末尾
    // this.containerEl属性是我们在构造函数中创建的message-container容器
    this.containerEl.appendChild(messageEl);

    // 只有当duration大于0的时候才设置定时器，这样我们的消息就会一直显示
    if (duration > 0) {
      // 用setTimeout来做一个定时器
      setTimeout(() => {
        this.close(messageEl);
      }, duration);
    }
  }

  close(messageEl) {
    // 首先把move-in这个弹出动画类给移除掉，要不然会有问题，可以自己测试下
    messageEl.className = messageEl.className.replace('move-in', '');
    // 增加一个move-out类
    messageEl.className += 'move-out';

    // move-out动画结束后把元素的高度和边距都设置为0
    // 由于我们在css中设置了transition属性，所以会有一个过渡动画
    messageEl.addEventListener('animationend', () => {
      messageEl.setAttribute('style', 'height: 0; margin: 0');
    });

    // 这个地方是监听transition的过渡动画结束事件，在动画结束后把消息从dom树中移除。
    messageEl.addEventListener('transitionend', () => {
      // Element对象内部有一个remove方法，调用之后可以将该元素从dom树种移除！
      messageEl.remove();
    });
  }
}
```

```css
/* message.css */
 
#message-container {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;

  /* 采用flex弹性布局，让容器内部的所有消息可以水平居中，还能任意的调整宽度 */
  display: flex;
  flex-direction: column;
  align-items: center;
}

#message-container .message {
  background: #fff;
  margin: 10px 0;
  padding: 0 10px;
  height: 40px;
  box-shadow: 0 0 10px 0 #ccc;
  font-size: 14px;
  border-radius: 3px;

  /* 让消息内部的三个元素（图标、文本、关闭按钮）可以垂直水平居中 */
  display: flex;
  align-items: center;
  
  /* 增加一个过渡属性，当message元素的高度和margin变化时候将会有一个过渡动画 */
  transition: height 0.2s ease-in-out, margin 0.2s ease-in-out;
}
#message-container .message .text {
  color: #333;
  padding: 0 20px 0 5px;
}
#message-container .message .close {
  cursor: pointer;
  color: #999;
}

/* 给每个图标都加上不同的颜色，用来区分不同类型的消息 */
#message-container .message .icon-info {
  color: #0482f8;
}
#message-container .message .icon-error {
  color: #f83504;
}
#message-container .message .icon-success {
  color: #06a35a;
}
#message-container .message .icon-warning {
  color: #ceca07;
}
#message-container .message .icon-loading {
  color: #0482f8;
}

/* message.css */
 
/* 这个动画规则我们就叫做message-move-in吧，随后我们会用animation属性在某个元素上应用这个动画规则。 */
@keyframes message-move-in {
  0% {
      /* 前边分析过了，弹出动画是一个自上而下的淡入过程 */
      /* 所以在动画初始状态要把元素的不透明度设置为0，在动画结束的时候再把不透明度设置1，这样就会实现一个淡入动画 */
      opacity: 0;
      /* 那么“自上而下”这个动画可以用“transform”变换属性结合他的“translateY”上下平移函数来完成 */
      /* translateY(-100%)表示动画初始状态，元素在实际位置上面“自身一个高度”的位置。 */
      transform: translateY(-100%);
  }
  100% {
      opacity: 1;
      /* 平移到自身位置 */
      transform: translateY(0);
  }
}



/* message.css */
 
#message-container .message.move-in {
  /* animation属性是用来加载某个动画规则 请参考 https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation */
  animation: message-move-in 0.3s ease-in-out;
}



/* message.css */
 
@keyframes message-move-out {
  0% {
      opacity: 1;
      transform: translateY(0);
  }
  100% {
      opacity: 0;
      transform: translateY(-100%);
  }
}

#message-container .message.move-out {
  animation: message-move-out 0.3s ease-in-out;
  /* 让动画结束后保持结束状态 */
  animation-fill-mode: forwards;
}
```