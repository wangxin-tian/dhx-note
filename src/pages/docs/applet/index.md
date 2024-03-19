---
layout: home
---
# github ci

实现GitHub上的自动部署

## 流程

- 编译生成静态文件
- 将静态文件推送到github上
- 将仓库资源同步到另一个仓库
- 部署 Gitee Pages (GitHub action)
- 使用 rsync 增量同步工具，将静态资源同步的自购服务器的对应目录上