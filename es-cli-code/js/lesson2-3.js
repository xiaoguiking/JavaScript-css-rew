// 类数组到数组转换

// ES5数组转换
let args = [].slice.call(arguments); // collection
let img = [].slice.call(document.querySelectorAll("img")); // nodelist

// Es6 伪数组到数组转换Array.prototype.from
let arg_es = Array.from(arguments);
let img_es = Array.from(document.querySelectorAll("img"));

// Array.from(arrayLike, mapFn, thisArg) 实现一个数组长度为5并且每个值为1

let array = Array(5);
for (let index = 0; index < array.length; index++) {
  array[index] = 1;
}
console.log(array, "array");

// es6
let arr = Array.from({ length: 5 }, function () {
  return 1;
});
console.log(arr, "arr");
