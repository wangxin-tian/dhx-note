# HTTPS

HTTPS 即 HTTP over TLS/SSL，是以安全为目标的 HTTP 通道，简单讲是 HTTP 的升级版，即 HTTP 下加入 SSL 层，HTTPS 的安全基础是 SSL，因此加密的详细内容就需要 SSL。

## 使用openssl生成证书

生成私钥

```bash
    openssl genrsa -out server.key 2048
```

根据私钥生成证书请求CRS文件

```bash
openssl req -new -key server.key -out server.csr
```

使用私钥对证书申请进行签名从而生成证书文件pem

```bash
openssl x509 -req -in cert.csr -out cacert.pem -signkey private.key
```

合并成一个命令

```bash
openssl req -x509 -newkey rsa:4096 -sha256 -nodes -keyout private.key -out cacert.pem -days 3650
```
  
## 配置nginx