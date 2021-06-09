/**
 *  手写js 系列
 */




/**
 *  1. 题目描述:实现一个 compose 函数
 */

function fn1 (x) {
    return x + 1;
}

function fn2(x) {
    return x + 2;
}

function fn3 (x) {
    return x + 3;
}

function fn4 (x) {
    return x + 4;
} 

function compose(...fn) {
    if (!fn.length) return (v) => v;
    if (fn.length === 1) return fn[0];
    return fn.reduce(
      (pre, cur) =>
        (...args) =>
          pre(cur(...args))
    );
  }
  

const fnValue = compose(fn1, fn2, fn3, fn4)     // 1 + 4 + 3 + 2  + 1 =  11
console.log(fnValue(1), "===========> fnValue")

