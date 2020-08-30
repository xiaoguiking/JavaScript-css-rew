# 环境安装日志记录

## mongodb 安装说明

> brew 安装 mongodb 报错 (mongodb 不再开源)

- brew tap mongodb/brew

-brew install mongodb-community@4.2

链接记录 ： https://segmentfault.com/a/1190000020400235

https://www.jianshu.com/p/fab47b974c54

```js
mongodb-community@4.2 is keg-only, which means it was not symlinked into /usr/local,
because this is an alternate version of another formula.

If you need to have mongodb-community@4.2 first in your PATH run:
  echo 'export PATH="/usr/local/opt/mongodb-community@4.2/bin:$PATH"' >> ~/.zshrc


To have launchd start mongodb/brew/mongodb-community@4.2 now and restart at login:
  brew services start mongodb/brew/mongodb-community@4.2
Or, if you don't want/need a background service you can just run:
  mongod --config /usr/local/etc/mongod.conf
```

https://blog.csdn.net/qq_31754523/article/details/97624726
