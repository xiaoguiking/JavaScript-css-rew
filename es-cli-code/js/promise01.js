/**
 * ES6 promise 学习
 * promise
 * .then
 * resolve reject 静态方法
 * 不要用throw new error 去触发错误
 */

// then 需要再次学习
function loadScript(src) {
  // pending // undefined
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve(src); //  fulfilled, result
    script.onerror = (err) => reject(err); // rejected, error
    document.head.append(script);
  });
}

// 传的不是函数
// loadScript("./1.js").then(loadScript("./2.js")).then(loadScript("./3.js"));

// promise.then((onFulfilled, onRejected))  函数
// .then 链式调用，返回的是一个新的promise实例

/**
 * loadScript('./1.js')
 * .then(() => {
 * return loadScript('./4.js')   // 执行不存在的4 ，， 注意加上返回值return
 * }, (err) => {
 * })，
 * .then(() => {
 * loadScript('./2.js')
 * }, (err) => {
 * console.log(err)
 * })
 *
 */

//   执行结果： 先输出1，然后报错，

// 使用catch捕获多个then时候出现的错误
loadScript("./1.js")
  .then(() => {
    return loadScript("./3.js"); // 执行不存在的4.js
  })
  .then(() => {
    return loadScript("./4.js");
  })
  // 获取任意一个then执行不到抛出的错误
  .catch((err) => {
    console.log(err);
  });

// 数字变成一个promise异步对象

function test(bool) {
  if (bool) {
    return new Promise((resolve, reject) => {
      resolve(30);
    });
  } else {
    return Promise.resolve(40);
  }
}

// test(1).then((value) => {
//   console.log(value);
// });

function test1(bool) {
  if (bool) {
    return new Promise((resolve, reject) => {
      resolve(20);
    });
  } else {
    return Promise.reject(new Error("报错信息"));
  }
}

test1(1).then(
  (value) => {
    console.log(value);
  },
  (err) => {
    console.log(err);
  }
);

// promise.all  三个接口并行成一个数据
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3]).then((value) => {
  console.log(value);
});

// promise.race  竞争模式

const p4 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(4);
    }, 1000);
  });
};

const p5 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(5);
    }, 4000);
  });
};

// 谁先返回结果执行谁 先执行p4返回的结果4
Promise.race([p4(), p5()]).then((value) => {
  console.log(value);
});
