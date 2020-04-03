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

- var/let/const

```
// ES3
var a = 1;
a = 2；
console.log(a);  --- 输出结果是代表a的值是1；重新赋值最终结果是2

// ES6
let c = 2;
c = 3;

const x = 112; --- 不能给常量重新赋值， 常量重新赋值会报错


```
- 创建函数相当于创建变量
function fn(){}
- 创建类
class A{}
- ES6的模块导入也可以创建变量
import React from 'react'
- Symbol创建唯一值
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

### isNaN检测一个值是否为非有有效数字， 不是有效数字返回true，是有效数字返回false
```
isNaN([val])

let a = '12';
console.log(isNaN(a)) // false, 是有效数字，
原因： 默认机制，首先基于Number()方法转化为number类型，在进行验证 

1. Number('12') => 12
2. isNaN(12) ==> false  是有效数字
```
### 字符串类型值转换为数字类型
- Number([val])  (把字符串转换为数字，只要字符串包含任意一个非有效数字，结果就是NaN),空字符串变成0
 ```
 Number('12') ------- 12
 Number('12px') ------- NaN
 Number('12.5.5') ------  NaN
 Number('')    -------- 0
 ```
 - 布尔转化为数字
 ```
 Number(true);   ------- 1
 Number(false)   ------- 0
 ```
 - null和undefined
 ```
 Number(null)   ----- 0
 Number(undefined) ------- undefined
 ```
 
 - 对象、数组(把引用类型转换为数字，是先toString变成数字，然后转换为数字)
 ```
 Number([]) ---------  0
 Number({}) ---------NaN
 Nuber([12]) -------  12
 Number([1,2]) --------- NaN

 ```

 - parseInt/parseFloat([value,[进制]]) 也是转换为数字方法对于字符串说它是从左到右依次查找有效数字字符直到遇到非有效数字字符不再查找。不管后面是否还有都不再查找，把找到的当做数字返回
 ```
 let str = '12.3px';   //取出小数部分
 Number(str); ----  NaN
 parseInt(str);  // 12   取整
 parseFloat(str);  // 12.3  取出小数部分
 
 let str1 = 'px10';
 parseFloat('str'); -------- NaN

 ```
 - == 默认转换()
 ```
 '10' == 10
 ```
 


## 第六章string字符串数据类型

> 所有单引号、双引号、模板字符串包起来的都是字符串


### 其他类型值变成字符串
- [value].toString()
```
console.log(12.toString()); ------- 报语法错误

eg：
let str = 12；
str.toString(); --------  "12"
(NaN).toString() -------- 'NaN'
(true).toString() ---------  "true"
[12,21].toString() ------  "12,21"

```
> null和undefined禁止直接toString(其实可以转换)

> {}.toString() 普通对象除外 ---- [object, Objectt]-===> Object.prototype.toString方法不是转换字符串，而是检测数据类型  

- 字符串拼接
```
// 四则运算中除加法之外，都是数学运算，只有加法存在字符串拼接
（一旦遇到字符串，则不是数学运算，而是拼接）
console.log('10' + 10)  // 1010;
console.log('10' - 10 );   //0
console.log('10px' - 10);  // NaN
```


## 第七章boolean 布尔类型

> 两个值 true/ false

### 把其他类型变成布尔类型

> 只有0 NaN '' null undefined 五个值变为false，其余都是true

- boolean([value])
- !/!!
```
! 取反（先转为布尔，然后取反）
console.log(!1);  true--- false
!! 取反再取反 相当于转换为布尔 Boolean
console.log(!!1); --- true
```
- 条件判断


## 第八章null和undefined区别

> null和undefined都代表是没有

- null: （意料之中）开始不知道值，手动设置为null,后期给予赋值操作
```
**1.赋值操作**
let num = null; 手动设置为null
num = 12； 给予赋值操作

**2.数值转换**
Number(null);  //  结果为0


**3.null表示'没有对象'，即该处不应该有值**

1)作为函数的参数，表示该函数的参数不是对象
2)作为对象原型链的终点
Object.getProtoOf(Object.prototype);
// null
```

- undefined：意料之外
```
**1.赋值操作**
let num; ====> 创建一个变量没有赋值，默认值是undefined
console.log(num);

**2.数值转换**
Number(undefined)  // 结果为 NaN


**3.undefined表示‘缺少值’，此处应该有个值，但是还没有定义**

1）变量被声明，但没有赋值，等于undefined， var i， i // undefined

2）调用函数式，应该提供的参数没有提供，该参数等于undefined // function f(x){console.log(x)}  f() // undefined

3）对象没有赋值的属性，该属性的值为undefined,var o = new Object(); o.p // undefined
4）函数没有返回值，默认返回undefined。var x =f(); x//undefined

```


## 第九章对象数据类型的基本操作（普通对象）

> {[key]: [value],...} 任何一个对象都是由0到多组键值对（属性名：属性值）组成的（并且属性名不能重复）

```
let person = {
	name: 'ck',
	age: 123,
	sex: '男'
}
```
**获取属性名对应的属性值方式**
=> 对象.属性名
=> 对象['属性名'] 属性名是数组或者字符串格式
=> 如果属性名是数字，则不能使用点的方式获取属性值
console.log(person.name); // ck
console.log(person['age']); //123
console.log(person.user); // undefined

**设置添加属性名属性值**
// => 属性名不能重复，存在增加等于是在修改
`person.fr = '123'`


**删除属性**

==> 真删除： 把属性彻底干掉
delete person[1]
==> 假删除： 属性还在，但是值为空
person.sex = null;


## 第十章数组的基本结构（特殊对象类型）

> 数组是特殊的对象数据类型

`let arr = [12,'ck', true, 12]`
console.log(arr.length);
console.log(arr['length']);
获取ck的值 console.log(arr[1]);
- 中括号设置的是属性值，属性名是默认生成的数字，从0开始递增，这个数字代表每一项的位置，索引下标
- 天生默认一个属性名 length 存储数组的长度
- 第一项索引arr[0], 最后一项索引length-1



## 第十一章数据类型区别（堆栈底层机制）稍后看 20 ------22

**堆栈内存（stack && heap）**

 [x] 浏览器渲染js机制
 [x] 数据类型之间的区别
 [x] 面试题
 [x] 数据类型检测

> 问题考察
	
```
// 基础类型值
let a = 12;
b = a;
b = 13;
console.log(a);  // 12


// 引用类型值
let n = {
	name: '12'
}
let m = n;
m.name = '34'
console.log(n.name);  // 34
```
### 堆栈内存练习

### 阿里面试题


## 第十二章JS数据类型检测（4种）

- typeof[val]: 用来检测数据类型的运算符
```
//基于typeof检测出来的结果
1. 首先是一个字符串
2. 字符串中包含对用的类型
3.局限性 
	3.1typeof null=> 'object' 但是null并不是对象
	3.2基于typeof不能区别当前值是普通对象还是数组对象。返回结果都是 "object"


console.log(typeof 1);  "number"  --- 数值型
console.log(typeof NaN);  ---- 数值型
console.log(type {});  ----   'object'
console.log(typeof [])  ---- "object"

```

- instanceof:  当前实例是否属于某个类
- constructor： 基于构造函数检测数据类型（类的方式）
- Object.prototype.toString.call()： 检测数据类型最好办法

## 第十三章JS常用的操作语句 判断 循环

> 条件成立做什么，不成立做什么

- if/else
- 三元运算符
- switch case

1.`if/else`

```
if(条件成立){
	条件成立code执行
}else if (条件2) {
	条件2执行
}else {
	以上条件都不成立时候执行
}

let  a = 5;
if(a >= 5) {
	console.log('执行');
} else {
	console.log('不执行');
}
```
2.`三元运算符`
```
简单if/else处理方式
1.如果处理事情多，我们使用括号包起来，每一件事用逗号分隔，
2.如果不需要处理事情，可以使用null和undefined占位
let a = 5;
a>=5 ? 执行 : 不执行

a > 0 ? (a++, console.log(a)) : null
```

3.`switch case`
```
1.case情况结束后最好加上break
2.default === else 以上条件都不成立做的事情
3.不加break，当前条件成立执行完成后，后面条件不论是否成立都要执行，直到遇到break为止。	
4.每一种case情况比较用的是 === ，全等

switch （a）{
	case 1: 
	console.log('1');
	break;
	case 2: 
	console.log('2');
	default: 
	console.log('default');
}
```

## 第十四章 基于css实现鼠标滑过出现详情效果

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>css实现鼠标滑过显示详情</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        .box {
            width: 200px;
            height: 50px;
            border: 1px solid coral;
            box-sizing: border-box;
            margin: 20px auto;
            text-align: center;
            line-height: 50px;
            position: relative;
        }
        .box .detail {
            position: absolute;
            right: -1px;
            top: 48px;
            width: 500px;
            height: 100px;
            box-sizing: border-box;
            border:darkcyan 1px solid;
            display: none;
            z-index: -1;
        }
        .box:hover {
            border-bottom-color: #fff;
        }
        .box:hover .detail {
            display: block;
        }
    </style>
</head>
<body>
    基于css实现，我们需要让详情区域是按钮的子元素
    <div class="box">
        <span>
            购物车
        </span>
        <div class="detail">
            购物车相关信息
        </div>
    </div>
</body>
</html>
```

## 第十五章 基于js实现点击渲染效果

传统基于操作dom方式实现业务需求
- 1.想操作谁就先获取谁
- 2.给某元素绑定事件
- 3.在事件触发的时候修改某元素的样式

```js
        let box = document.getElementById('box');
        let detail = document.getElementById('detail');
        // 最终实现效果，可以显示可以隐藏
        // 元素对象.onxxx事件 = function
        box.onclick = function () {
            console.log('点击');
            // 元素对象.style.xxx = xxx 修改元素的某一个样式值 操作的行内样式 前提是注意需要的是操作行内样式
            
            let tmp = detail.style.display;
            if (tmp === 'none') {
                // 隐藏时候显示
                detail.style.display = 'block';
                box.style.borderBottomColor = '#fff';
            }else {
                detail.style.display = 'none';
                box.style.borderBottomColor = 'darkcyan';
            }
        }
```

## 第十六章 掌握for循环

> 重复做某些事情就是循环

- for循环
- for in 循环
- for of 循环 ES6
- while 循环
- do while 循环

+ for 循环
  - 1.创建循环初始值
  - 2.设置验证循环执行的条件
  - 3.条件成立执行循环体的内容
  - 4.当前循环结束执行步长累计操作

```js
for(var i = 0; i< 5; i++) {
	console.log(i); 0 1 2 3 4
}
console.log(i); i ++ 最后i值得是5
```
> continue 和break

- continue 结束当前这轮循环 continue后面的代码不再执行，继续执行下一轮循环
- break  强制结束整个循环， break后代码也不再执行


## 第十七章

## 第十八章

## 第十九章

## 第二十章

## 第二十一章

## 第二十二章

## 第二十三章


## 第二十四章

## 第二十五章

## 第二十六章
