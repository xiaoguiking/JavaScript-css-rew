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

// 使用Arrya.fill 替换执行的数组值
let array = Array.of(1, 2, 3, 4, 5, 6, 7, 8);
let arrayFix = array.fill(8, 2, 4); // 不包含结束位置 [1, 2, 8, 8, 5, 6, 7, 8]
console.log("arrayFix :>> ", arrayFix);
