// import { name, mod, list } from "./lesson2-18mod";

// console.log(name, mod, list, "name");

// import say, { say1, speak, run, running } from "./lesson2-18mod";
// import obj from "./lesson2-18mod";

// say("hello function ");

// say1("hello say1");

// speak();

// run();

// running();

// let { data, error } = obj;

// console.log(data, error);

// 默认倒出
// import Test from "./lesson2-18mod";

// let test = new Test();

// console.log(test.id, "number");

// 用* as mod 接收

import * as mod from "./lesson2-18mod";

let father = new mod.Father();
console.log(father, "fahter");

let son = new mod.Son();

console.log(son.name, "son");
