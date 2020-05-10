// 如何查找一个元素
let arr = Array.of(1, 2, 3, 4, 5, 6);
// ES5如何查找一个元素
let arrFilter = arr.filter((item) => {
  return item === 2;
});
console.log("arrFilter :>> ", arrFilter);
// ES6如何查找一个元素 find 值 findIndex 返回位置
let arrFind = arr.find((item) => {
  return item === 4;
});
let arrFindIndex = arr.findIndex((i) => {
  return i === 5;
});
console.log("arrFind :>> ", arrFind, arrFindIndex);
 