# espjs嵌入式开发

espjs简介：

ESPJS是一个基于ESP8266的嵌入式开发框架，它提供了一系列的工具和库，使得开发人员可以轻松地编写和部署嵌入式应用程序。
它支持开发者使用JavaScript来实现嵌入式开发

## 配置环境

开源地址 github: [https://github.com/zhaishuaigan/espjs](https://github.com/zhaishuaigan/espjs)

安装并将目录配置到path中的环境变量

## 初始化固件和项目

```bash
espjs init && npm init -y

espjs flash // 初始化固件

espjs dev    // 热上传
espjs upload // 编译上传
```

## 使用Wifi模块

```bash
const wifi = require('Wifi');

const config = {
  ssid: "CMCC-B2DA",
  password: "******",
  status: 'off'
};

function createWifi() {
  wifi.connect(config.ssid, {
    password: config.password
  }, () => {
    wifi.getIP((err, info) => {
      console.log("Connected to WiFi: " + config.ssid);
      console.log("IP: " + `http://${info.ip}`);
    })
  });
}
```
  
## 创建http服务

```bash
const http = require('Http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
});

server.listen(8080);
```

## 实现本地存储

```bash
const storage = require('Storage');

function saveConfig() {
  storage.write('config.json', JSON.stringify(config));
  // storage中保存的数据如果用于计算，则需要parseInt强转成数字
}
```

## 实现按钮

通过`function setWatch(function, pin, options)`来监听引脚

## 实现模块的远程加载

```bash
const http = require('Http');

function loadModule(url) {
  http.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    res.on('close', () => {
      Modules.addCached(url, data)
    });
  }).on('error', (err) => {
    console.log(err);
  });
}
```

## 加载模块扩展库

```bash
espjs modules add fetch
```

## 双esp实现远程控制

通过wifi模块开启startAp服务（局域网），然后通过局域网访问espjs的http服务，实现远程控制

```js
const http = require("http");
const wifi = require('Wifi');

const config = {
  ssid: "CMCC-B2DA",
  password: "752757GE",
  status: 'off'
};

const urlMap = {
  '/on': (res) => {
    NodeMCU.D4.write(0);
    config.status = 'on';
    res.end('<html><body><h1>LED is on</h1><a href="/off">Turn off</a></body></html>')
  },
  '/off': (res) => {
    NodeMCU.D4.write(1);
    config.status = 'off';
    res.end('<html><body><h1>LED is off</h1><a href="/on">Turn on</a></body></html>')
  },
  '/status': (res) => {
    console.log(config.status);
  },
  '/': (res) => {
    if (config.status === 'on') {
      res.end('<html><body><h1>LED is on</h1><a href="/off">Turn off</a></body></html>');
    } else {
      res.end('<html><body><h1>LED is off</h1><a href="/on">Turn on</a></body></html>');
    }
  }
}

function createServer() {
  http.createServer(function (req, res) {

    res.writeHead(200);

    if (urlMap[req.url]) {
      urlMap[req.url](res);
    } else {
      res.end('<html><body><h1>404</h1></body></html>');
    }

  }).listen(80);
  console.log("Server started on port 80");
}

function createWifi() {
  wifi.connect(config.ssid, {
    password: config.password
  }, () => {
    wifi.getIP((err, info) => {
      console.log("Connected to WiFi: " + config.ssid);
      console.log("IP: " + `http://${info.ip}`);
    })
  });
}

createWifi();
createServer();
```

## 使用esp8266连接sdd1315

scl：时钟引脚连接D1，
sda：数据引脚连接D2，
vcc：电源引脚连接3.3v，
gnd：接地引脚连接GND

这里之所以要连接D1、D2是因为符合I2C协议，否则需要通过软件模拟I2C通信会导致性能的丢失

简单实现一个hello, world

```js
const Model_1306 = require("1306.js"); 

// 这里引入的是1306的模块，主要是使用别人写好的连接和图像展示功能，具体的变形指令可能和1315不一样，但不妨碍显示文字

I2C1.setup({
  scl: NodeMCU.D1,
  sda: NodeMCU.D2
});

function startDisplay() {
  g.clear();
  g.drawString("Hello, World!", 0, 0);
  g.flip();
}

const g = Model_1306.connect(I2C1, startDisplay);
```

## 参考

[espjs使用说明](https://www.kancloud.cn/shuai/espjs/2203723)