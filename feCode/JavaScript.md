### 1. for of , for in 和 forEach,map 的区别

- for...of 循环：具有 iterator 接口，就可以用 for...of 循环遍历它的成员(属性值)。for...of 循环可以使用的范围包括数组、Set 和 Map 结构、某些类似数组的对象、Generator 对象，以及字符串。

- for...in 循环：遍历对象自身的和继承的可枚举的属性, 不能直接获取属性值。可以中断循环

- forEach: 只能遍历数组，不能中断，没有返回值(或认为返回值是 undefined)。
- map: 只能遍历数组，不能中断，返回值是修改后的数组。

> Object.keys()：返回给定对象所有可枚举属性的字符串数组。

### 2. 判断某个值是不是数组

使用 Array.isArray 判断，如果返回 true, 说明是数组
使用 instanceof Array 判断，如果返回 true, 说明是数组
使用 Object.prototype.toString.call 判断，如果值是 [object Array], 说明是数组

let arr = [1,2,3,4];

console.log(Array.isArray(arr));

console.log(arr instanceof Array);

console.log(Object.prototype.toString.call(arr));

### 3.this 绑定

> new 绑定 > 显式绑定 > 隐式绑定 > 默认绑定

. 如何准确判断 this 指向的是什么？

- 函数是否在 new 中调用(new 绑定)，如果是，那么 this 绑定的是新创建的对象。
- 函数是否通过 call,apply 调用，或者使用了 bind(即硬绑定)，如果是，那么 this 绑定的就是指定的对象。
- 函数是否在某个上下文对象中调用(隐式绑定)，如果是的话，this 绑定的是那个上下文对象。一般是 obj.foo()
- 如果以上都不是，那么使用默认绑定。如果在严格模式下，则绑定到 undefined，否则绑定到全局对象。
- 如果把 Null 或者 undefined 作为 this 的绑定对象传入 call、apply 或者 bind，这些值在调用时会被忽略，实际应用的是默认绑定规则。
- 如果是箭头函数，箭头函数的 this 继承的是外层代码块的 this。

### 4.事件循环 event loop

以下异步任务的 api

- macrotasks 宏任务: script 整体代码 setTimeout, setInterval, setImmediate, I/O, UI rendering
- microtasks 微任务: process.nextTick, Promise, MutationObserver

// script start => async2 end => Promise => script end => promise1 => promise2 => async1 end => setTimeout

// script start => async2 end => Promise => script end => async1 end => promise1 => promise2 => setTimeout

```
总的结论就是，执行宏任务，然后执行该宏任务产生的微任务，若微任务在执行过程中产生了新的微任务，则继续执行微任务，微任务执行完毕后，再回到宏任务中进行下一轮循环。
```

1.执行同步代码，这属于宏任务 2.执行栈为空，查询是否有微任务需要执行 3.执行所有微任务 4.必要的话渲染 UI 5.然后开始下一轮 Event loop，执行宏任务中的异步代码

### 防抖

**防抖函数原理：在事件被触发 n 秒后再执行回调，如果在这 n 秒内又被触发，则重新计时。**

一个简化版的防抖

```
// 防抖函数
const debounce = (fn, delay) => {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};


```

适用场景：

按钮提交场景：防止多次提交按钮，只执行最后提交的一次

服务端验证场景：表单验证需要服务端配合，只执行一段连续的输入事件的最后一次，还有搜索联想词功能类似

### 节流

**节流函数原理: 规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。**

我们来手写一个简化版的节流，注意还是要自己深入理解原理

```
/ 节流函数
const throttle = (fn, delay = 500) => {
  let flag = true;
  return (...args) => {
    if (!flag) return;
    flag = false;
    setTimeout(() => {
      fn.apply(this, args);
      flag = true;
    }, delay);
  };
};


```
