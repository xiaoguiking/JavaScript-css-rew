/**
 * 14解构赋值
 * Object
 * Array
 */

const obj = {
  name: "liming",
  age: 12,
  sex: "男",
};

const { name, age, ...rest } = obj;

console.log(name); // 'liming'
console.log(age); //12
console.log(rest); // {sex: '男'}

const arr = [
  1,
  2,
  3,
  {
    num: 1,
  },
];

const [num] = arr;

console.log(num, "12");

let arr1 = ["hello", "world"];
let [one, two] = arr1;
console.log(one, two);

// 字符串解构
let arr2 = "abcd";
let [fir, , thi, four] = arr2;
// let [fir, , thi, four] = new Set([1,2,3,4]);
console.log(fir, thi, four); // acd

// 对象赋值
const obj1 = { name1: "天气", weather: "预报" };
[obj1.name1, obj1.weather] = ["hello", "world"];
console.log(obj1, "obj1");

// 现在是可遍历对象
for (let [k, v] of Object.entries(obj1)) {
  console.log(k, v); //name1 hello    weather world
  // key key的集合
}
const keys = Object.keys(obj1);
console.log(keys); //) ["name1", "weather"]

// 剩余运算符
let arrS = [1, 2, 3, 4, 5, 6, , 7];
const [firS, secS, ...rest1] = arrS;
console.log(firS, secS, rest1);
