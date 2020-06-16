/**
 * 11 对象拷贝
 */
// 对象拷贝
let target = {};
let source = { x: 1, y: 2 };
target = JSON.parse(JSON.stringify(source));
console.log(target); // 身拷贝

//ES6 浅拷贝 不能拷贝， 只是换下引用类型的地址
console.log(Object.assign(target, source));
