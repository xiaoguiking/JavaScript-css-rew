## 脚本特效

### 1.JavaScript 基础

#### 1.1JavaScript 与 html

##### 1.1.1 html5

html 全称`Hyper Text Mark-up Language`,是在 SGML 规范下定义的一种描述性语言。

```js
index.html 基本文档结构

<html>
<head><title>html基本文档结构</title></head>
<body>
网页内容主体部分
</body>
</html>

```

- 整份文件处于`<html></html>`之间，`<html></html>`用来声明这是 html 文件，让浏览器认出并且正确处理此文件。
- 文件分为两部分`<head></head>`称为开头，`<body></body>`称为主体
- `<title></title>`标题 会出现在浏览器的顶部，

##### 1.1.2 html5 常用标签

1.html5 新增标签
`<header></header>`
`<nav></nav>`
`<article></article>`
`<footer></footer>`
`<aside></aside>`
`<svg></svg>` 2.网页超链接根据链接路径不同分为三种

- 内部链接单击链接链接到同一个网站的另外一个页面
- 锚点链接同一个页面的某一个位置
- 外部链接单击链接连接到其他网站的某一个页面

按照使用对象不同区别

- 文本超链接 -- 文本
- 图像超链接 -- 图像
- E-mail --- 超链接的目标是邮件发送
- 锚点链接 --- 超链接的目标是同一个页面的跳转
- 多谋体文件链接 --- 超链接的目标是多媒体文件
- 空链接 -- 超链接没有目标 #

> 超链接对象是一种对象，它以特殊编码的文本或图形的形式实现链接，如果打击该链接，则打开一个新的网页

```html
<a href="" target=""></a>
```

href 表示超链接的目标路径，href 的值三种形式

- 绝对 URL 的超链接，URL 是统一资源定位符
  意思是网络上的一个站点，网页的完整路径
  如`http://www.baidu.com`
- 相对 URL 链接，如将自己网页上的某一段文字或某标题链接到同一个网站的其他网页上。
- 同一个网页的超链接，这种超链接叫做书签或者锚标记

```html
锚标记
<a name="锚标记名称">文本内容</a>

使用：
<a href="#锚标记名称">文本内容</a>
```

```html
邮件链接 使用： <a href="mailto: 邮箱地址">文本内容</a>
```

##### 1.1.3 js 脚本内嵌到 html 中

#### 1.2 编写 js 脚本工具

#### 1.3 简单计算器

### 2.js 语法

#### 2.1js 基础语法

1.注释

- 单行的 js 注释用`//`开始，
- 多行注释以`/*code*/`;

2. 数据类型
   主要数据类型`number`,`string`,`object`,`Boolean`,`null`,`undefined`,
3. 常量
   在程序运行中，其值不能被改变的量成为常量。

4.变量
变量用来存放运行中的值，使用变量之前，需要先声明。

```js
var a = 1;
console.log(a);
```

5.运算符

- 算术运算符 ++ -- +-\*/
- 逻辑运算符 逻辑非! 小于< 大于> 小于等于<= 大于等于>= 等于== 不等于!= 逻辑与&& 逻辑或|| 三元?: 恒等=== 不恒等!==

  6.程序流程控制

```js
if (条件) {
  执行语句;
}
```

```js
switch (表达式) {
  case 取值1:
    code;
    break;
  case 取值2:
    code;
    break;
  default:
    break;
}
```

```js
while (条件) {
  执行code;
}
```

```js
do {
  执行语句code;
} while (条件);
```

```js
for(初始化表达式; 循环条件表达式; 循环后的操作表达式)
for(var i = 0; i < 10; i++)
```

#### 2.2 函数

##### 2.2.1 特殊的内置函数

##### 2.2.2 创建自己函数

```js
function 函数名() {
  函数代码;
}
```

```js
function add() {
  sum = 1 + 2;
  alert(sum);
}
```

```js
function 函数名(参数1, 参数2, 参数3) {
  函数代码;
}
```

```js
function sum(x, y) {
  sum = x + y;
  alert(sum);
}
```

#### 2.3 常用对象

##### 2.3.1 字符串对象

```
双引号 \"
单引号 \'
反斜杠 \\
退格 \b
Tab  \t
换行 \n
回车 \r
走纸换页 \f
```

1.获取字符串长度

```js
var msg = "hello world";
console.log(msg.length); // 长度为11
```

2.字符串对象方法

- toUpperCase()

```js
var msg = "hello world";
console.log(msg.toUpperCase()); // HELLO WORLD
```

- toUpperCase()

```js
var msg = "HELLO WORLD";
console.log(msg.toUpperCase()); // hello world
```

- String.charat(index)

```js
系统默认起始位置是0;
index表示返回的字符位置;
var char = "index表示返回的字符位置";
charString = char.charAt(2);
document.write(`输出结果` + charString);
```

- String.indexOf(string2, index)

```js
从一个特定的位置开始查找设置的字符串，返回一个字符或是字符串上
起始位置值。找不到返回 -1;
string2表示需要检索的字符串值，必须; index表示可选的整数参数
合法取值0 --- string1Object.length-1

var string = "hello";
stringIndex = string.indexOf("he");
document.write(`indexOf返回` + stringIndex);
返回 0 表示有这个值存在
```

```

```

##### 2.3.2 Date 对象

#### 2.3.3 Math 对象

#### 2.4 数组

#### 2.5 js 错误

#### 2.6 js 特性

### 3.JavaScript 编程基础

#### 3.1DOM 编程基础

#### 3.2window 对象

##### 3.2.1window 对象常用属性

##### 3.2.2window 对象常用方法

##### 3.2.3window 对象事件

#### 3.3 history 和 location 事件

##### 3.3.1 history 对象

##### 3.3.2 location 对象

##### 3.4 document 对象

##### 3.4.1.2.3.4 document 对象增删改查

#### 3.5 操作表格

#### 3.5.1 表格的树形结构

#### 3.5.2 遍历行

#### 3.5.3 添加行

#### 3.5.4 删除行

#### 3.6 下拉边框操作

#### 3.7 事件源的应用

#### 3.8 body 对象

#### 3.9 form 对象

#### 3.10 js 创建对象

#### 3.11 js 访问样式属性

#### 3.12 常用事件

### 页面信息交互

### ajax 技术

### jquery 框架

```

```
