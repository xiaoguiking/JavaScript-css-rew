//ES9异步操作中的集合如何遍历

// 第一版

function Gen(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
}

// function test() {
//   // 希望的效果是按照顺序执行 2000 ------ 100 ------- 3000
//   let arr = [Gen(2000), Gen(100), Gen(3000)];
//   for (let item of arr) {
//     console.log(Date.now(), item.then(console.log));
//   }
// }

// test();
/**
 *1599362917568 Promise {<pending>}
1599362917569 Promise {<pending>}
1599362917569 Promise {<pending>}
100
2000
3000
 */

console.log(
  "-------------------------------------------------------------> test"
);

async function Test1() {
  let arr = [Gen(2000), Gen(100), Gen(3000)];
  for await (let item of arr) {
    console.log(Date.now(), item);
  }
}

// Test1();

// 自定义数据结构
const obj = {
  count: 0,
  Gen1(time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ done: false, value: time });
      }, time);
    });
  },
  // 对象属性是变量时候[]
  [Symbol.asyncIterator]() {
    let self = this;
    return {
      next() {
        self.count++;
        if (self.count < 4) {
          return self.Gen1(Math.random() * 1000);
        } else {
          return Promise.resolve({
            done: true,
            value: "",
          });
        }
      },
    };
  },
};

async function Test12() {
  for await (let item of obj) {
    console.log(Date.now(), item);
  }
}

Test12();
