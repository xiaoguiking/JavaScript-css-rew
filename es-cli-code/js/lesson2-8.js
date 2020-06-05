// 箭头函数
// Es6 箭头函数 () => {}

// ES5

function hello() {}
let hello1 = function () {};

// ES6
let helloF = (name) => {
  console.log("执行箭头函数", name);
};
helloF("fengyun");

let sum = (x, y) => {
  return x + y;
};
console.log(sum(1, 2), "方法1");

let sum2 = (x, y) => x + y;
console.log(sum2(3, 4), "方法2");

let sum3 = (x, y, z) => ({
  x: 1,
  y: 2,
  z: 3,
});
console.log(sum3(1, 2, 4), "方法3");
// 规则
/**
 *1.只有一个参数的时候可以省略括号;
 *2.表达值可以直接省略return和{}
 *
 */

// 案例1 ES5
let test = {
  name: "text",
  say: function () {
    console.log(this.name);
  },
};
test.say(); // text  解释：谁在调用就指向谁

// 案例2 箭头函数

let test1 = {
  name: "text",
  say: () => {
    console.log(test1.name, this);
  },
};
test1.say();
