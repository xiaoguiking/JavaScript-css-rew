<!-- 事件循环 -->

# 事件循环

[TOC]

主线程从 "任务队列" task queue 读取事件，这个过程是不断循环的，整个的运行机制称为事件循环

- 堆 heap
- 栈 stack

setTimeout() 一次性执行 setTimeInterval() 反复执行

## 浏览器中的事件循环

js 代码执行过程中，除了依靠函数来搞定函数的执行顺序，还依靠任务队列（task queue）搞定代码的执行。一个线程中，事件是唯一的，但是任务队列可以多个。

**任务队列**

- macro - task 宏任务
- micro - task 微任务

macro-task 大概包括：

- script(整体代码)
- setTimeout
- setInterval
- setImmediate
- I/O
- UI render

micro-task 大概包括:

- process.nextTick
- Promise
- Async/Await(实际就是 promise)
- MutationObserver(html5 新特性)

> > 执行宏任务， 执行该宏任务产生的微任务，若该微任务在执行过程中产生了新的微任务，则继续执行微任务，微任务执行完毕后，再回到宏任务进行下一轮循环。

```js
模型案例
async function async1 () {
    await async2()
    console.log("async1 end");
}

async function async2 () {
    console.log("async2 end")
}

async1()

setTimeout(function() {
    console.log("setTimeout")
}, 0)

new Promise((resolve) => {
    console.log("Promise")
    resolve();
})
.then(() => {
    console.log("promise1")
})
.then(() => {
    console.log("promise2")
})


answer:  async2 end  ----------->  Promise ------------> async1 end -------->   promise1 ------> promise2 ----------> setTimeout


**宏任务**
setTimeout(function() {
    console.log("setTimeout")
}, 0)

**微任务**

await async2()
console.log("script end")

.then(() => {
    console.log("promise1")
})

.then(() => {
    console.log("promise2")
})

```

```js
async function async1() {
  console.log("");
}
```

### async/await 执行顺序

async 隐式返回 Promise 作为结果的函数，await 后面的函数执行完毕时，await 会产生一个微任务(Promise.then 是微任务)。但是我们要注意这个微任务产生的时机，它是执行完 await 之后，直接跳出 async 函数，执行其他代码(此处就是协程的运作，A 暂停执行，控制权交给 B)。其他代码执行完毕后，再回到 async 函数去执行剩下的代码，然后把 await 后面的代码注册到微任务队列当中。

```js
console.log("script start");

async function async1() {
  await async2();
  console.log("async1 end");
}
async function async2() {
  console.log("async2 end");
}
async1();

setTimeout(function () {
  console.log("setTimeout");
}, 0);

new Promise((resolve) => {
  console.log("Promise");
  resolve();
})
  .then(function () {
    console.log("promise1");
  })
  .then(function () {
    console.log("promise2");
  });

console.log("script end");

旧版执行顺序：
script start => async2 end => Promise => script end => promise1 => promise2 => async1 end => setTimeout


新版执行顺序：
script start ----------> async2 end ----------> Promise ---------->  script end

 ----------> async1 end ---------->  promise1 ---------->  promise2 ---------->  setTimeout
```

>> 分析上述代码：

- 执行代码，输出script start。
- 执行async1(),会调用async2(),然后输出async2 end,此时将会保留async1函数的上下文，然后跳出async1函数。
- 遇到setTimeout，产生一个宏任务
- 执行Promise，输出Promise。遇到then，产生第一个微任务
- 继续执行代码，输出script end
- 代码逻辑执行完毕(当前宏任务执行完毕)，开始执行当前宏任务产生的微任务队列，输出promise1，该微任务遇到then，产生一个新的微任务
- 执行产生的微任务，输出promise2,当前微任务队列执行完毕。执行权回到async1
- 执行await,实际上会产生一个promise返回，

- 执行完成，执行await后面的语句，输出async1 end

- 最后，执行下一个宏任务，即执行setTimeout，输出setTimeout








## node 事件循环

macro-task 大概包括：

- setTimeout
- setInterval
- setImmediate
- script（整体代码)
- I/O 操作等。

micro-task 大概包括：

- process.nextTick(与普通微任务有区别，在微任务队列执行之前执行)
- new Promise().then(回调)等。

node 和 浏览器 eventLoop 的主要区别
两者最主要的区别在于浏览器中的微任务是在每个相应的宏任务中执行的，而 nodejs 中的微任务是在不同阶段之间执行的。
