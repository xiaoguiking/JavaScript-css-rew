# Nginx

> "Nginx 是一款轻量级的 HTTP 服务器，采用事件驱动的异步非阻塞处理方式框架，这让其具有极好的 IO 性能，时常用于服务端的反向代理和负载均衡。"

## 一、环境准备

-- Nginx 优点 --

- 支持海量高并发：采用 IO 多路复用 epoll。官方测试 Nginx 能够支持 5 万并发链接，实际生产环境中可以支撑 2-4 万并发连接数。
- 内存消耗少：在主流的服务器中 Nginx 目前是内存消耗最小的了，比如- 我们用 Nginx+PHP，在 3 万并发链接下，开启 10 个 Nginx 进程消耗 150M 内存。
- 免费使用可以商业化：Nginx 为开源软件，采用的是 2-clause BSD-like 协议，可以免费使用，并且可以用于商业。

远程服务器安装

1.命令安装 登录服务器安装

- yum -y install gcc gcc-c++ autoconf pcre-devel make automake
- yum -y install wget httpd-tools vim

- 检测网络是否连通
  ping 域名

- 新建测试文件夹
  mkdir testDemo

  - testDemo
    - app
    - logs 日志
    - backup 备份
    - download
    - work

## 二、Nginx 安装

- 登录远程服务器 查看 Nginx 目标源命令
  yum list | grep nginx （列出 nginx 目标源）

- 使用 vim 打开文件建立 yum 源

  vim /etc/yum.repos.d/nginx.repo 进入文件中 输入

  ```
  [nginx]
  name=nginx repo
  <!-- 你需要修改一下对应的操作系统和版本号 -->
  <!-- baseurl=http://nginx.org/packages/OS/OSRELEASE/$basearch/ -->
  修改后
  baseurl=http://nginx.org/packages/centos/7/$basearch/
  gpgcheck=0
  enabled=1

  ```

  - 安装 nginx
    yum install nginx
  - 检查是否安装成功
    nginx -v

## 三、nginx 配置文件

> 查看 nginx 安装目录命令 rpm -ql nginx

- 阿里云打开 80 端口
  - 控制台-----云服务器 ECS ---- 地区 ------ 列表中更多 ------ 网络和安全组（安全组配置）----- 配置规则

## 四、Nginx 服务启动、停止、重启

启动 Nginx 服务 （CentOS7.4）

> nginx (systemctl start nginx.service)

> Linux 的组合命令，进行查询服务的运行状况。 ps aux | grep nginx

停止 Nginx 服务的四种方法

- 立即停止服务 nginx -s stop
- 从容停止服务 nginx -s quit
- 方法杀死进程 killall nginx
- systemctl 停止 systemctl stop nginx.service

重启 Nginx 服务

- systemctl restart nginx.service

重新载入配置文件

- nginx -s reload

查看端口号

在默认情况下，Nginx 启动后会监听 80 端口，从而提供 HTTP 访问，如果 80 端口已经被占用则会启动失败。我么可以使用 netstat -tlnp 命令查看端口号的占用情况。
