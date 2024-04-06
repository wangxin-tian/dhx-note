# 工具方法

一些通用的工具函数

## 代码实现

- 属性获取 √
- 金额格式化 √
- 时间格式化
- 模拟事件监听 √
- 消息封装 √
- 鉴权封装
- 防抖节流
- 校验封装
- 请求拦截
- 图片压缩
- 大文件传输
- 文件下载
- 图表绘制（echarts | canvas）
- 过滤输入
- 错误处理
- 缓存控制
- 快照导出
- 日志打印
- 性能监控
- 通用表单查询

## 属性获取

lodash.get

```js
function get(obj, key, defaultVal): _get<Object>{
  if (typeof obj !== 'object') {
    throw new Error('参数类型错误')
  }

  const keys = key.replace(/\[/, '.').replace(/\]/, '').split('.');

  return keys.reduce((o: any, cur) => {
    return (o || {})[cur] || {};
  }, obj) || defaultVal;
}
```

## 金额格式化

> 1234 -> 1,234

```js
const formatMoney = (money: number) => {
  let strNum: string = money.toString();
  let len = strNum.length;
  let text = "";

  if (len <= 3) {
    return strNum;
  }

  for (let i = 1; i <= len; i++) {
    text =
      "" +
      (i % 3 === 0 && i != len ? "," : "") +
      strNum[len - i] +
      text;
  }

  return text;
};
```

## 时间格式化

> formatDate(new Date(), 'YYYY年MM月DD日 hh:mm:ss')
> > 2021-01-01T00:00:00.000Z -> 2021-01-01 00:00:00

```js
function formatDate(date, format) {
  if (!(date instanceof Date)) {
    throw new Error('请传递正确的Date对象')
  }

  const o = {
    "YY": date.getFullYear(),
    "MM": date.getMonth() + 1,
    "DD": date.getDate(),
    "hh": date.getHours(),
    "mm": date.getMinutes(),
    "ss": date.getSeconds(),
  }

  return Object.keys(o).reduce((pre, key) => {
    return pre = pre.replace(key, o[key] < 10 ? "0" + o[key] : o[key]);
  }, format);
}
```

## 模拟事件监听

> 同步方法实现事件监听

```js
function getElement(el: string) {
  const dom = document.getElementById(el);
  const proxy = new Proxy(dom, {
    get(target, key) {
      if (!key.startWith("wait")) {
        return Reflect.get(target, key);
      }

      return new Promise(resolve => {
        dom.addEventListener(key.replace("wait", ""), (e) => resolve(e.target));
      });
    }
  });

  return proxy;
}

// test
(async () => {
  const btn = getElement('button');
  while(1) {
    await btn.waitclick;
    console.log('监听到了 click');
  }
})();
```

## 消息封装

[完整实践](case#消息封装)

```js

class Message {
  constructor {
    // 实现一个单例dom用于挂载消息元素
  }

  show(type, content, duration) {
    // 创建需要挂载的dom容器 EL

    // 向El中添加icon content 
    El.innerHTML = `
      <span class="icon-${type}"></span>
      <span class="text">${content}</span>
    `;

    // 添加移入动画
    El.className = "move-in";

    // 设置计时器调用关闭方法 duration
  }

  close() {
    // 清除 EL.className 中的move-in

    // 添加退出动画
    El.className += "move-out";

    // 注册动画事件，remove挂载的El
  }
}

```
