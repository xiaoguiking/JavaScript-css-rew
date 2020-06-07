// let块级作用域
// {
//   let a = 1
//   console.log(a) // 1
// }
// // console.log(a) // a is not defined

// var b = 3
// let c = 4
// console.log(b, c) // 3, 4

// console.log(window.b, window.c) // 3, undefined

// // var可以重新赋值 let, let 不会变量提升
// var b = 4
// console.log(b) // 

// let 可以重新赋值
let a = 1;
let a = 2;
console.log(a); // 2

// 1.const 不能重复赋值
// const a = 3
// a = 4
// console.log(a) //A ssignment to constant variable 报错

// 2.const不允许先声明在赋值
// const x
// x = 3
console.log(a) // Cannot access 'a' before initialization
let a = 1
