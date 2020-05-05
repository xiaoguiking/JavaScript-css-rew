//  创建一个新数组

// ES5生成一个新数组
let arr = Array(5);
console.log(arr, "arr");

let arr1 = ["", ""];
console.log(arr1);

// ES6 Array.prototype.of, 用于将一组值，转换为数组。
let arrEs = Array.of(1, 2, 4, 4, 6);
console.log(arrEs);

// Array.fill(value, start, end)fill方法使用给定值，填充一个数组,只能用一个值填充
let arrES6 = Array(3).fill(1);
console.log(arrES6);
