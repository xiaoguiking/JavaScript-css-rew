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

- 从容停止服务 nginx -s quit
- 立即停止服务 nginx -s stop
- 方法杀死进程 killall nginx
- 关闭 linux 服务 systemctl stop nginx.service

重启 Nginx 服务

- systemctl restart nginx.service

重新载入配置文件

- nginx -s reload

查看端口号

在默认情况下，Nginx 启动后会监听 80 端口，从而提供 HTTP 访问，如果 80 端口已经被占用则会启动失败。

> netstat -tlnp 命令查看端口号的占用情况。

## Nginx 错误页面 访问设置

- 找到配置文件
  根目录执行: cd /etc/nginx/conf.d ------- 文件： default.conf
  打开文件 vim default.conf

  ```js
  error_page 500 502 504 /50x.html
  ```

- 找到配置文件的 html

  `cd user/share/nginx/html`------ 50x.html

- 加入一个 404(vim default.conf)

  ```js
  error_page  404 /404_error.html;   (注意分号)
  跳转外面链接
   error_page  404 http:// www.baidu.com;
  ```

- vim 404_error.html （自己写入 html 内容）

可以直接在 default.conf 里进行配置。

```html
location / { deny 123.9.51.42; allow 45.76.202.231; } 配置完成后，重启服务器
```

## Nginx 访问权限

deny 是禁止访问，allow 是允许访问。

> 先执行的命令起作用

设置用户的访问权限

```js
//允许所有用户访问img，不允许访问admin
=号代表精确匹配，使用了=后是根据其后的模式进行精确匹配
location =/img {
  allow all;
}

location =/admin {
  deny all;
}

// 拦截所有的php文件
location ~\.ph$ {
   deny all;
}
```

## Nginx 根据端口号设置虚拟主机

> 端口号配置虚拟主机，Nginx 可以监听多个端口，根据不同的端口号，区分不同的网站 （配置虚拟主机可以基于端口号、基于 IP 和基于域名，）

- 主文件 `etc/nginx/nginx.conf`
- 子配置文件 `etc/nginx/conf.d/default.conf`

- 新建配置文件 `8001.conf`文件

  ```js
   server {
     listen: 8001;
     server_name localhost;
     root  /user/share/nginx/html/html8001  文件放置路径
     index index.html;
   }
  ```

- /user/share/nginx/html/html8001 放置文件 index.html
  ```js
  <h1>This is port 8001</h1>
  ```
- 访问 http://112.74.164.244:8001

- 基于 IP 和基于端口的配置几乎一样，只是把 server_name 选项，配置成 IP

  ```js
  server{
        listen 80;
        <!-- 修改关键点 -->
        server_name 112.74.164.244;
        root /usr/share/nginx/html/html8001;
        index index.html;
  }
  ```

## Nginx 使用域名设置虚拟主机 （需要解析域名）

> 一个网站是需要域名和公网 IP 才可以访问的。

- nginx.jspang.com :这个域名映射到默认的 Nginx 首页位置。
- nginx2.jspang.com : 这个域名映射到原来的 8001 端口的位置。

配置以域名为划分的虚拟主机

- 修改 etc/nginx/conf.d 目录下的`default.conf`文件

  ```
  server {
    listen       80;
    <!--修改成域名 -->
    server_name  nginx.jspang.com;
  ```

- 同目录下的 80001.conf 文件

  ```
    server{
          listen 80;
          server_name nginx2.jspang.com;
          location / {
                  root /usr/share/nginx/html/html8001;
                  index index.html index.htm;
          }
    }

  ```

- 重启查看效果

## Nginx 反向代理的设置

正向代理流程：

client1、client2、client3 --------------- 通过代理 proxy ----------- server 一个网站

**正向代理**

理解：你想访问目标服务器没有访问权限权限，但是代理服务器有访问权限权限
，你可以通过访问 proxy 服务器，代理访问真实内容然后反馈给你。

反向代理流程：

client ----------- 代理 proxy 服务器 ------- server1、server2、server3

**反向代理**

理解： 反向代理代理就是你通过访问代理服务器访问的是多个不同的 server 服务器
一般代理指代理的客户端，反向代理是代理的服务器。

```
反向代理的主要用途是为多个服务器提供负债均衡、缓存等功能。负载均衡就是一个网站的内容被部署在若干服务器上，可以把这些机子看成一个集群，那Nginx可以将接收到的客户端请求“均匀地”分配到这个集群中所有的服务器上，从而实现服务器压力的平均分配，也叫负载均衡
```

**反向代理实例**
我们要访问http://nginx2.jspang.com然后反向代理到jspang.com这个网站。我们直接到etc/nginx/con.d/8001.conf进行修改

```
    server {
      listen: 80;
      server_name nginx2.jspang.com;
      <!-- 设置反向代理，设置一个ip，或者域名也可以 -->
      location / {
        proxy_pass http://jspang.com;
      }
    }
```

- proxy_set_header :在将客户端请求发送给后端服务器之前，更改来自客户端的请求头信息。

* proxy_connect_timeout:配置 Nginx 与后端代理服务器尝试建立连接的超时时间。

- proxy_read_timeout : 配置 Nginx 向后端服务器组发出 read 请求后，等待相应的超时时间。

* proxy_send_timeout：配置 Nginx 向后端服务器组发出 write 请求后，等待相应的超时时间。

- proxy_redirect :用于修改后端服务器返回的响应头中的 Location 和 Refresh。

## Nginx 适配 PC 或移动设备

\$http_user_agent 的使用：

Nginx 通过内置变量\$http_user_agent，可以获取到请求客户端的 userAgent，就可以用户目前处于移动端还是 PC 端，进而展示不同的页面给用户。

**操作步骤**

- 在/user/share/nginx/目录下新建两个文件夹： pc 和 mobile 文件夹
  ```
  cd /user/share/nginx/
  mkdir pc
  mkdir mobile
  ```
- 建立对应的 index.html 文件

  ```js
  cd pc
  touch index.html -------- 内容 <h1>pC站点</h1>
  cd mobile
  touch index.html ----------- 内容  <h1>mobile站点</h1>
  ```

- 进入 etc/nginx/conf.d 修改 8001.conf 文件

  ```js
  server{
        listen 80;
        server_name nginx2.jspang.com;
        location / {
         root /usr/share/nginx/pc;
         if ($http_user_agent ~* '(Android|webOS|iPhone|iPod|BlackBerry)') {
            root /usr/share/nginx/mobile;
         }
         index index.html;
        }
  }

  ```

## Nginx 的 Gzip 压缩配置

Gzip 是网页的一种网页压缩技术，经过 gzip 压缩后，页面大小可以变为原来的 30%甚至更小。更小的网页会让用户浏览的体验更好，速度更快。gzip 网页压缩的实现需要浏览器和服务器的支持。

服务器----（压缩后传递）------浏览器 ----（解压并且解析）----- 客户端展现

```
当浏览器支持gzip压缩时，会在请求消息中包含Accept-Encoding:gzip,这样Nginx就会向浏览器发送听过gzip后的内容，同时在相应信息头中加入Content-Encoding:gzip，声明这是gzip后的内容，告知浏览器要先解压后才能解析输出。

```

**gzip 配置项**

- gzip : 该指令用于开启或 关闭 gzip 模块。
- gzip_buffers : 设置系统获取几个单位的缓存用于存储 gzip 的压缩结果数据流。
- gzip_comp_level : gzip 压缩比，压缩级别是 1-9，1 的压缩级别最低，9 的压缩级别最高。压缩级别越高压缩率越大，压缩时间越长。
- gzip_disable : 可以通过该指令对一些特定的 User-Agent 不使用压缩功能。
- gzip_min_length:设置允许压缩的页面最小字节数，页面字节数从相应消息头的 Content-length 中进行获取。
- gzip_http_version：识别 HTTP 协议版本，其值可以是 1.1.或 1.0.
- gzip_proxied : 用于设置启用或禁用从代理服务器上收到相应内容 gzip 压缩。
- gzip_vary : 用于在响应消息头中添加 Vary：Accept-Encoding,使代理服务器根据请求头中的 Accept-Encoding 识别是否启用 gzip 压缩。

**gzip 最简单的配置**

- cd ect/nginx ---- vim nginx.conf

```js
http {
   .....
  // 开启
    gzip on;
  //  压缩类型 
    gzip_types text/plain application/javascript text/css;
   .....
}
```
