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

- string.substring(start, stop)

```js
start(0, stop)
字符串截取，设置两个参数的指定位置，然后将两个参数间的字符串返回给设置的变量，当两个参数相等，就返回一个空字符串，如果没有指定最后的参数，系统默认截取到字符串对象末尾

var str = "字符串对象截取";
str1 = str.substring(5,6);
console.log(str1); // 截
```

- anchor

```js
在页面创建和显示一个html超文本目标，必须在文档中建立一个锚点，
然后调用write方法在文档中写出该链接锚点，达到快速定位的目的
<p algin="left">字符的<a href="#anc">引用</a></p>
str = "this is anchor";
anc = zifu.anchor("anc");
document.write("anc");
```

##### 2.3.2 Date 对象

> Date 对象保存从 1970 年 1 月 1 日 0 时 0 分 0 秒 0 毫秒到记录时间的毫秒值。

`创建jsDate对象的语法`

- 1.无参创建
  `var date = new Date()`
- 2.通过值创建
  `var date = Date(dateVal)`创建一个指定时间，dateVal 可以是数字获取字符串。数字（1970 年 1 月 1 日 0 时 0 分 0 秒 0 毫秒 + dateVal），

- 3.通过多个参数创建
  `var date = new Date(year, month, date[, hours[, minutes[, seconds[, ms]]]]);`

  ```js
  year: 必选项 完整的年份 比如1979
  month: 必选项 表示月份， 0-11之间的整数（1月至12月）
  date: 必选项 表示日期 1-31之间的整数
  hours: 可选项 如果提供minutes参数必须给出，表示小时，0-23的整数
  minutes: 可选项 表示分 0-59分
  seconds: 表示秒 0-59 整数
  ms: 表示毫秒 0-999 整数
  ```

  https://www.w3school.com.cn/jsref/jsref_obj_date.asp 方法连接

#### 2.3.3 Math 对象

#### 2.4 数组

> 数组是某类数据的集合，数据类型包括整型字符串对象

1.定义数组

> var arr = new Array(10)

```js
var arr = new array();
a[0] = 100;
a[1] = "12";
a[2] = "数组";
a[3] = { x: 1, y: 2 };

数组可以在实例化的时候直接赋值;
var arr1 = new Array(1, 2, 4, 5, 6, 7);
```

2.多维数组

```js
var a = new Array([1, 2, 34], [3, 4, 5], [12, 12]);
var b = [
  [1, 2, 34],
  [3, 4, 5],
  [12, 12],
];
```

3. 对象

```js
var aa = new Object();
aa.x = "对";
aa.y = "象";
console.log(aa);
```

4. 数组元素操作
   通过数组[下标]读写元素

5.数组循环

```js
for 循环
var a = [1, 2, 3, 4, 5, 6, 7, , 8];
for (var i = 0; i < a.length; i++) {
  console.log(a[i]);
}

for in(遍历数组或者对象)
var a = [1,2,3,4,56]
for(var e in a){
  console.log(a[e])
}
```

6.数组常用函数

- concat

```js
现有数组后追加数组，并返回新数组，不影响现有数组.
注意： 该函数只能用于数组或者字符串。
var arr = [12, '12']
var arr1 = [45];
console.log(arr.concat(arr1)) // [12, '12', 45]
```

- join

```js
用指定间隔字符串连接起来，把数组转为字符串。只能转换一维数组
var arr2 = [1, 2, 3, 4, 5, 6, , 7, , 8];
document.write(arr2.join() + `<hr/>`); // 数组变成默认逗号间隔的字符串

```

- pop

```js
删除数组最后一个元素，并返回该元素
var arr = [12, 323, 23,23];
console.log(arr.pop()); // 输出 23
console.log(arr) // [12, 323]

```

- push

```js
往数组后添加元素，并返回数组新长度,

var arr = [12, 34, 56]
console.log(arr.push('添加新元素')); // 长度为4
arr ====== [12,34, 56, '添加新元素']
```

- sort

```js
按照字符串排序;
var arr5 = [12, 456, 1212, 3, 32, 234, 23];
document.write(arr5.sort() + `<hr/>`);

var arr6 = arr5;
arr6.sort((x, y) => x - y);
document.write(`整型排序结果` + arr6);
```

- shift

```js
删除数组第一个元素，并返回该元素，
var arr7 = ["卫庄", "赤练", "白凤"];
document.write("shift删除后返回该元素：" + arr7.shift());
document.write("删除后的结果：" + arr7);
```

- unshift

```js
数组最前面添加元素，返回数组新长度
document.write(arr7.unshift("添加元素绝望"));  //3
document.write("结果：" + arr7 + "<hr/>");  // ["添加元素绝望", "赤练", "白凤"]
```

- arr.slice(start, end)

```js
不包括结束下标位置;
返回数组片段;

var arr8 = ["a", "b", "c", "d", "e", "f", "g"];
document.write(arr8.slice(1, 2)); //
console.log(arr8.slice(1, 2)); //["b"]
console.log(arr8.slice(5)); //["f", "g"]
```

- arr.splice(index, howmany(删除数量), item(添加新元素));

```js
splice()从数组中添加或者删除项目，然后返回被删除的项目
该方法改变原数组

var arr9 = ["a", "b", "c", "d", "e", "f", "g"];
document.write("返回被删除的元素:" + arr9.splice(3, 1));  // d
document.write("结果:" + arr9 + "<hr/>");
document.write("添加元素:" + arr9.splice(6, 0, "添加元素"));
document.write("结果:" + arr9); // ["a", "b", "c",  "e", "f", "g", '添加元素'];
```

- toString()

```js
数组转换为字符串,不止数组，所有对象也可以
var a = [3, 5, 6, 7, 8, 9, [12, 34, "12"]];
不受维度限制
document.write(a.toString()); //3,5,6,7,8,9,12,34,12
```

- toLocalString

```js
var b = new Date();
document.write(b.toString() + "<br/>"); // 输出当前时间
document.write(b.toLocaleString() + "<br/>");
document.write(b.toLocaleDateString() + "<br/>");
Sun May 31 2020 15:37:45 GMT+0800 (中国标准时间)
2020/5/31 下午3:37:45
2020/5/31
```

### 3.JavaScript 编程基础

#### 3.1DOM 编程基础

> 完整的 JavaScript 三部分组成

- 核心 ECMAScript
- 文档对象模型 DOM
- 浏览器对象模型 BOM

DOM 通过创建树表示文档，删除、添加、替换节点

#### 3.2window 对象

> JavaScript 对象分为三种类型

- 用户定义对象 user-defined object
- 内置对象 Array Math Date
- 宿主对象 浏览器提供的对象（window）

##### 3.2.1window 对象常用属性

https://developer.mozilla.org/zh-CN/docs/Web/API/Window

##### 3.2.2window 对象常用方法

##### 3.2.3window 对象事件

| 事件名   | 描述           |     |
| -------- | -------------- | --- |
| onload   | 装载完成后触发 |     |
| onunload | 退出时触发     |     | onbeforeunload | 发生在 onunload 之前 |
| onhelp   | 显示帮助时触发 |     |
| onfocus  | 聚焦触发       |     |
| onblur   | 失去焦点触发   |     |
| onerror  | 错误触发       |     |
| onresize | 改变大小触发   |     |
| onscroll | 滚动触发       |     |
| onmove   | 对象移动触发   |     |

#### 3.3 history 和 location 事件

##### 3.3.1 history 对象

1.(window).history，常用 length 属性，
通过该属性得到 history 保存的历史列表长度，用户访问过的不同地址的数目。
history(current, previous, next)在现在浏览器中不能整除访问

2.方法
| 方法名 | 描述 |
| -------- | --------------
| back() | 历史列表前一个网页 按下回退按钮 |
| forward() | 前进 |
| go(number) | 括号内（正数或负数） |

- history.go(1) === forward() 前进
- history.go(-1) === back() 后退
- history.go(-2) === back()执行 2 次

##### 3.3.2 location 对象

1.属性
window.location 访问， location 对象属性保存了当前浏览器地址栏中所有信息
`http://www.baidu.com/ig/china?hl=zh-CN`

| 属性名   | 描述             | 举例                                   |
| -------- | ---------------- | -------------------------------------- |
| protocol | 访问地址协议     | http                                   |
| hostname | 主机名           | www.baidu.com                          |
| port     | 访问端口         | 80                                     |
| host     | 主机名以及端口号 | www.baidu.com:80                       |
| pathname | 访问路径名       | /ig/china                              |
| href     | 完成 url 路径    | http://www.baidu.com/ig/china?hl=zh-CN |

// location 方法
function OpenBaidu() {
// location.href = "http://www.baidu.com"; // 属性跳转
location.assign("http://www.baidu.com"); // 方法跳转
}

##### 3.4 document 对象

每个载入浏览器的 html 文档都会成为 document 对象，document 对象是 window 对象的一部分，（window.document）

| 属性名  | 描述            |
| ------- | --------------- |
| title   | 文档标题        |
| bgColor | 页面背景色      |
| cookie  | 设置读出 cookie |

| 方法                  | 描述                                           |
| --------------------- | ---------------------------------------------- |
| close()               | 关闭用 close 打开的输出流                      |
| getElementById()      | 指定 id 的第一个对象获取                       |
| getElementByName()    | 返回带有指定名称的对象集合                     |
| getElementByTagName() | 返回带有指定标签名的对象集合                   |
| open                  | 打开一个流                                     |
| write                 | 向文档中写 html 或 js                          |
| writeIn()             | 等同于 write，区别是每个表达式之后写一个换行符 |

##### 3.4.1.2.3.4 document 对象增删改查

1.查询元素

```js
// getElementById()  指定id
function queryById() {
  // 通过id查询元素
  var txt = document.getElementById("inputId");
  alert(txt.value); // 显示文本输入内容
}

// getElementByName  同一个name名字集合

function queryByName() {
  var listInput = document.getElementsByName("inter");
  //   alert(listInput.value);
  // 通过查询数组的length属性 取得查询元素个数
  var len = listInput.length;
  console.log(len);
  var str = "";
  for (var i = 0; i < len; i++) {
    console.log(listInput[i]);
    str = str + listInput[i].value + ",";
  }
  alert(`查询得到元素个数` + len + `元素内容` + str);
}

// getElementsByTagName()
function queryByTagName() {
  var list = document.getElementsByTagName("li");
  var lenList = list.length;
  console.log(lenList, "list");
  var listStr = "";
  for (var j = 0; j < lenList; j++) {
    listStr = listStr + list[j].innerText + ",";
  }
  alert(`查询元素个数：` + lenList + `元素内容：` + listStr);
}
```

2.修改网页元素 （全选和全不选）

3.添加网页元素

- document.createElement() 创建一个元素
- Element.appendChild() 将创建的网页元素添加到 DOM 中

  4.删除元素 document.removeChild()

#### 3.5 操作表格

| 属性名 | 描述                                     |     |
| ------ | ---------------------------------------- | --- |
| rows   | 得到来自 table 对象的 tr，表格行对象集合 |     |
| cells  | 得到整个表格中所有单元格的集合           |     |

| 方法名                | 描述                                                        |     |
| --------------------- | ----------------------------------------------------------- | --- |
| insertRow()           | 在表格中创建新行，并将行新行添加到 rows 集合中              |     |
| deleteRow()           | 删除指定行                                                  |     |
| moveRow(tr, index)    | 将表格行移动到新位置                                        |     |
| cells                 | 得到表格行中所有单元格的集合                                |     |
| insertCell()          | 在表格行行 tr 中创建新单元格，并将单元格添加到 cells 集合中 |     |
| deleteCell(tr, index) | 从表格行以及 cells 中删除指定单元格                         |     |

#### 3.5.1 表格的树形结构

#### 3.5.2 遍历行

#### 3.5.3 添加行

#### 3.5.4 删除行

#### 3.6 下拉边框操作

#### 3.7 事件源的应用

#### 3.8 body 对象

#### 3.9 form 对象

#### 3.10 js 创建对象

```js
对象构造器;
function Student(name, age, color) {
  this.name = name;
  this.color = color;
  this.age = age;
}
// 调用构造器
var someBody = new Student("tian", 12, "red");
var sName = prompt("what is your name");
var sAge = prompt("How old are you this year");
var sColor = prompt("what is your favorite color");
var someBody = new (sName, sAge, sColor);

访问： someBody.name 或者someBody['name']
```

#### 3.11 js 访问样式属性

如果 js 访问 style 多属性

```js
document.body.style.color = "color";
document.body.style.fontSize = "15px";
```

#### 3.12 常用事件

#### 3.14正则表达式

#### 3.15 

### 页面信息交互

### ajax 技术

### jquery 框架

```

```

```

```
