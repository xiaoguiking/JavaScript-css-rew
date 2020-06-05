//  函数参数默认值

// es5
function foo(x, y, z) {
  if (y === undefined) {
    y = 7;
  }
  if (z === undefined) {
    z = 8;
  }
  return x + y + z;
}

console.log(foo(1));

// es6 直接指定默认值
function fcc(x, y = 7, z = 8) {
  return x + y + z;
}
console.log(fcc(1));

// 跳过中间有默认值情况
// function Es(x, y = 1, z = 2) {
//   return x + y + z;
// }
// console.log(Es(1, undefined, 2));
function Es(x, y = 1, z = x + y) {
  console.log(arguments, "当前函数值情况");
  console.log(Array.from(arguments), "伪数组变成真实数组");
  return x + y + z;
  //   1+ 1 +2
}
console.log(Es(1, undefined));

// ES6 如何处理不确定参数问题
// 案例 求和参数
// ES5
function sumES5() {
  let num = 0;
  //   ES5
  Array.prototype.forEach.call(arguments, function (item) {
    num += item * 1;
  });
  //   ES6;
  //   Array.from(arguments).forEach(function (item) {
  //     num += item * 1;
  //   });
  return num;
}

console.log(sumES5(1, 2, 4));

// 剩余运算符 ...rest
function sumES6(...nums) {
  let num = 0;
  nums.forEach(function (item) {
    num += item * 1;
  });
  return num;
}

console.log(sumES6(1, 2, 3, 4));

// 默认参数 剩余运算符，
function sumEsRest(base, ...rest) {
  let num = 0;
  rest.forEach(function (item) {
    num += item * 1;
  });
  //   这里修改值
  return base * 2 + num;
}
console.log(sumEsRest(1, 2, 4), "base");

// rest参数的逆运算
function sumRest(x, y = 2, z = 3) {
  return x + y + z;
}
let data = [4, 5, 6];
console.log(sumRest(data[0], data[1], data[2]), "方法1");
console.log(sumRest.apply(this, data), "方法2");
console.log(sumRest(...data), "方法3");
