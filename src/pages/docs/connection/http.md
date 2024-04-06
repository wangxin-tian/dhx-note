# 实现一个http请求

## 前端

```js
    fetch('http://localhost:3000/api/getUser', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json', 
      }
    }).then(res => res.json())
```

## 后端node

```js
const express = require('express');
const app = express();

app.get('/api/getUser', (req, res) => {
  res.json({
    name: 'John',
  })  
  res.end();
});
```
