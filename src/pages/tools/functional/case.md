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
