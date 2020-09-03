// export const name = "我是";
// export let mod = "模块";
// export let list = [1, 2, 4];

/**
 * 整体倒出
 */

// const name = "我是";
// let mod = "模块";
// const list = Array.from(Array(10).keys());

// export { name, mod, list };

/**
 * 函数倒出
 */

// export default function say(word) {
//   console.log(word);
// }
// export function say1(word) {
//   console.log(word);
// }

// export function speak() {
//   console.log("this is speaking");
// }

// const run = () => {
//   console.log("this is run");
// };

// const running = () => {
//   console.log("this is running");
// };

// export { run, running };

/**
 * 默认倒出obj
 */
// const data = {
//   code: 1,
//   message: "成功",
// };

// const error = {
//   code: 0,
//   messsage: "失败",
// };

// export default { data, error };

// 默认倒出
// export default class Test {
//   constructor() {
//     this.id = 4;
//   }
// }

// 用* as mod接收
export class Father {
  constructor() {
    this.id = 4;
  }
}

export class Son {
  constructor() {
    this.name = "lintian ";
  }
}
