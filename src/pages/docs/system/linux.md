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
5. 进入nginx容器 `docker exec -it nginx-test /bin/bash`
6. 进入配置文件目录 `cd /etc/nginx`
7. 打开配置文件 `vi nginx.conf`
8. 更新apt-get `apt-get update`
9. 下载vim `apt-get install vim`
10. 查看nginx状态 `ps -ef|grep nginx`
11. 下载ps `apt-get install -y procps`
12. 下载netstat `apt-get install -y net-tools`
13. 查看占用 `netstat -tulpn`
14. 退出实例 `exit`
15. 停止nginx `docker stop nginx-test`
16. 删除nginx `docker rm nginx-test`
17. 删除nginx镜像 `docker rmi nginx`
18. 复制文件到docker实例中 `docker cp nginx.conf nginx-test:/etc/nginx/nginx.conf`
  

[docker命令大全](https://www.runoob.com/docker/docker-command-manual.html)

docker run --name my-nginx -v /path/to/nginx:/etc/nginx -p 80:80 --link my-php-fpm:php-fpm nginx


### vim命令大全

一、操作文件

- vim test.php //打开filename文件
- :w //保存文件
- :w test.php //保存至vpser.net文件
- :q //退出编辑器，如果文件已修改请使用下面的命令
- :q! //退出编辑器，且不保存
- :wq //退出编辑器，且保存文件
- ZZ //保存文件并退出编辑

二、编辑文件

- a //在当前光标位置的右边添加文本
- i //在当前光标位置的左边添加文本
- A //在当前行的末尾位置添加文本
- I //在当前行的开始处添加文本(非空字符的行首)
- O //在当前行的上面新建一行
- o //在当前行的下面新建一行
- R //替换(覆盖)当前光标位置及后面的若干文本
- J //合并光标所在行及下一行为一行(依然在命令模式)
- G //光标移动到文件末端
- dd //删除当前行

三、可视化编辑

- v //从光标当前位置开始，光标所经过的地方会被选中，再按一下v结束。
- V //从光标当前行开始，光标经过的行都会被选中，再按一下Ｖ结束。
- Ctrl + v 从光标当前位置开始，选中光标起点和终点所构成的矩形区域，再按一下Ｃtrl + v结束。
- ggVG 选中全部的文本， 其中gg为跳到行首，V选中整行，G末尾
- 选中后就可以用编辑命令对其进行编辑，如 :
- d //删除
- y //复制 （默认是复制到"寄存器）
- p //粘贴 （默认从"寄存器取出内容粘贴）
- "+y //复制到系统剪贴板(也就是vim的+寄存器）
- "+p //从系统剪贴板粘贴
172.17.0.3
四、其他
:set nu //显示行数
:set nonu //不显示行数
: //光标移动到指定行数
/ //搜索匹配内容，按n移动到下一个匹配内容

作者：打工是不可能打工的1
链接：https://www.jianshu.com/p/23ab9c3ffa7b
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。