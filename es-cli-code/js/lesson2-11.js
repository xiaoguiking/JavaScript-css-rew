/*
 * @Author: your name
 * @Date: 2020-06-06 21:49:32
 * @LastEditTime: 2020-06-06 22:20:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /antdBicycle/Users/mac/Desktop/JS/JavaScript-CSS3-Rew/es-cli-code/js/lesson2-11.js
 */

// 对象拷贝
let target = {};
let source = { x: 1, y: 2 };
target = JSON.parse(JSON.stringify(source));
console.log(target); // 身拷贝

//ES6 浅拷贝 不能拷贝， 只是换下引用类型的地址
console.log(Object.assign(target, source));
