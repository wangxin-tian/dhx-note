# 工具方法

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
