# Linux

## linux 环境搭建

### 安装docker

1. 检查内核 `uname -r`
2. 更新yum `yum -y update`
3. 卸载旧版docker `sudo yum remove -y docker*`
4. 安装依赖包 `yum install -y yum-utils` (yum-util 提供yum-config-manager功能，另外两个是devicemapper驱动依赖)
5. 设置yum源，并更新 yum 的包索引 `yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
` `yum makecache`
6. 查看docker版本 `yum list docker-ce --showduplicates | sort -r`
7. 下载docker `yum install -y docker-ce-3:19.03.9-3.el7.x86_64`
8. 启动并加入开机启动 `systemctl start docker && systemctl enable docker`
9. 验证docker版本 `docker version`
10. 查看docker状态 `systemctl status docker`

### 使用docker 安装nginx服务

1. 查看可选版本 `docker search nginx`
2. 拉取nginx镜像 `docker pull nginx`
3. 查看本地镜像   `docker images`
4. 运行nginx容器 `docker run --name nginx-test -p 8080:80 -d nginx` -d nginx 表示一直在后台运行

[docker命令大全](https://www.runoob.com/docker/docker-command-manual.html)