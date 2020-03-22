# JavaScript 基础


**JavaScript目录**

[TOC]



## 第一章浏览器内核和控制台

### 常用浏览器
 - webkit内核（V8引擎）
	+ 谷歌chrome
	+  Safari
	+  Opera > 14
	+  国产浏览器
	+  手机浏览器
 - Gecko
	+ 火狐FireFox
 - Presto
	+ 欧朋Opera <14
 - Trident
   + IE
   + Edge (使用chrome内核)

谷歌浏览器的控制台F12 + Fn+12
- Elements 查看结构样式，可以修改这些内容
- Console控制台 查看输出结果和报错信息是js神器
- Sources 资源文件夹 查看项目源码
- NetWork 所有的发送请求包括和服务器传输的http报文信息 加载时间，根据加载时间进行项目优化
- Application 查看storage,本地数据存储

## 第二章JS的组成和变量

**JS由三部分组成**
- [x] ECMA(es): 描述了该语言的语法和基本对象
- [x] DOM： 文档对象模型： 描述处理网页内容的方法和接口
- [x] BOM： 浏览器对象模型： 描述与浏览器进行交互的方法和接口

### JS做客户端语言
> 安装相关js语法，去操作页面中的元素，实现功能

- ECMA ---- JS语法规范(变量、数据类型 操作语句 )
- DOM（document object model）： 文档对象模型，提供js属性和方法，用来操作页面中的dom元素
- BOM（browser ojbect model）： 浏览器对象模型，提供js属性方法用来操作浏览器

### JS中的变量variable

> 变量：可变的量，在变成语言中，变量只是名字，用来存储代表不同的值

```
// ES3
var a = 1;
a = 2；
console.log(a);  --- 输出结果是代表a的值是1；重新赋值最终结果是2

// ES6
let c = 2;
c = 3;

const x = 112; --- 不能给常量重新赋值


```
// 创建函数相当于创建变量
function fn(){}
// 创建类
class A{}
// ES6的模块导入也可以创建变量
import React from 'react'
//Symbol创建唯一值
```
let n = Symbol(100);
let m = Symbol(100);

n == m (false,因为是唯一值缘故)

```
## 第三章JS命令规范

- 严格区分大小写
- 使用数字、字母、下划线、$,数字不能作为开头
- 使用驼峰命名法： 首字母小写，其余每一个有意义单词的首字母都大写（语义化命名
```
let studentInfo
常用缩写： add增加/insert插入/create创建/new新建/update修改/delete删除/remove移除/sel/select/query/get查询/info信息
```
-  不能使用关键字和保留字
```
当下有特殊含义的是关键字，未来可能会会成为关键字的是保留字
var let const ---- 关键字

```
## 第四章JS的数据类型分类

- 基本数据类型
	- 数字 number
		常规数字和NaN
	- 字符串string
		所有用单引号、双引号、反引号`,包起来的都是字符串
	- 布尔值 boolean
		true、 false
	- 空对象指针 null
	- 未定义 undefined
	- Symbol(ES6)
- 引用数据类型
	* 对象数据类型 object
		+  {} 普通对象
		+  [] 数组对象
		+  /^[+ -]/ 正则表达式
		+  Math 数学函数对象
		+  日期对象
	* 函数数据类型 function

## 第五章number数字类型

> 包含: 常规数字、NaN

### NaN

> not a number 不是一个数，但是属于数字类型

NaN和任何值都不相等，包括自己， NaN！= NaN

### isNaN检测一个值是否为非有有效数字， 不是有效数字返回true，不是有效数字返回false
```
isNaN([val])

let a = '12';
console.log(isNaN(a)) // false, 是有效数字，
原因： 默认机制，首先基于Number()方法转化为number类型，在进行验证 

1. Number('12') => 12
2. isNaN(12) ==> false  是有效数字
```


## 第四章
## 第四章
## 第四章
## 第四章
## 第四章
## 第四章
## 第四章
## 第四章
## 第四章
## 第四章
## 第四章
## 第四章
## 第四章
## 第四章
## 第四章
## 第四章
## 第四章
## 第四章
## 第四章
## 第四章
## 第四章
