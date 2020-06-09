/**
 * ES8 async await
 *
 * await必须和async连用
 */

async function firstAsync() {
  return 27;
  // return Promise.resolve(27)  通过async转换成了 promise
}
// console.log(firstAsync()); //Promise {<resolved>: 27}
// 判断是否是promise实例
/**
 * console.log(firstAsync() instanceof Promise); // true 是
firstAsync().then((value) => {
  console.log(value); // 27
});

 */

//
async function SecAsync() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("now done");
    }, 1000);
  });

  //   promise.then(
  //     (value) => {
  //       console.log(value);
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  let res = await promise;
  console.log(res);
  console.log(await 30);
  console.log(await Promise.resolve(40));
  console.log(2);
  return 3;
}
// 执行结果 2 3 now done -----  promise.then
// 执行结果 now done 同步执行  2 3  await promise
// 执行结果 now done 30 40  2 3
SecAsync().then((value) => {
  console.log(value);
});
