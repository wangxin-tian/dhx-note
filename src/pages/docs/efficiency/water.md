# 水波纹

## 机理

1. 水波上的任何一点在任何时候都是以自己为圆心向四周扩散的，之所以会形成一个环状的水波，是因为水波的内部因为扩散的对称而相互抵消了。  
2. 衰减：因为水是有阻尼的，否则，当你在水池中投入石头，水波就会永不停止的震荡下去。

other: 水的折射、反射、衍射

## 实现

建立两个与水池图象一样大小的数组 buffer[poolWidth * poolHeight]，用于保存水面上一个点前后的波幅数据（波能：波的能量），称这两个数组为波能缓冲区

1. 初始化：buffer[i] = 0
2. 设计函数：根据某个点周围，前后左右四个点以及自生波能来推算下一时刻该点的波能

```ts
// 公式一：某一点波能除了收到周围四个点的波能影响，还受到自生波能的影响，自生波能的衰减由衰减系数决定
x0' = a * ( x1 + x2 + x3 + x4 ) + b * x0;

// 公式二：若水的阻尼系数为0，则前后波能总和不变
x0' + x1' + x2' + x3' + x4' = x0 + x1 + x2 + x3 + x4;

// 将每个点的公式一和公式二合并
(4 * a + b)x0  + ... = x0 + x1 + ...; => 4a + b = 1;

// 拼得最简解
a = 1 / 2; 
b = -1;

// 固得
x0' = (1 / 2) * ( x1 + x2 + x3 + x4 ) - x0;
```

3. 但是水是存在阻尼的，但凭借上面的公式并不能满足条件，还需设置一个衰减系数，来模拟水波的衰减 ( 1 / 2 ^ 5 )

```js
const buffer_before = new Array(w * h);
const buffer_after = new Array(w * h);

/**
 * 计算波能缓冲
 */
void rippleSpread(int w, int h, int r) {
  for (let i = w; i < w * h - w; i++) {
    buffer_after = ((
      buffer_before[i - w] 
      + buffer_before[i + w] 
      + buffer_before[i - 1] 
      + buffer_before[i + 1
    ]) >> 1 )
    - buffer_after;

    // 衰减
    buffer_after -= (buffer_after >> 5);
  }

  // 交换波能数据缓冲区
  [buffer_before, buffer_after] = [buffer_after, buffer_before]; 
}
```