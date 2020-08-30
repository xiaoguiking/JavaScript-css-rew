# babel 编译

#### 在线

1.引入 browser 文件
2.type="text/babel"

#### 本地环境

node， npm

- 1.安装 node
- 2.安装 babel

```
  npm i @babel/core @babel/cli @babel/preset-env -D（环境预设）
  npm i @babel/polyfill ---- 填充方法环境 --对标低版本
```

- 3.添加脚本 package.json

  ```js
   "build": "babel src -d dist"
  ```

- 4.添加配置文件 环境预设 .babelrc

      ```js
      {

        "presets": ["@babel/preset-env"]

  }

      ```

- 5.执行脚本命令 npm run build
