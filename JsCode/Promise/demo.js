function doSth(t, cb) {
  return function () {
    if (--t == 0) {
      cb();
    }
  };
}

function logSth() {
  console.log("------打印啦--->");
}
// let fn = doSth(4, logSth());
// fn();

// TODO
/**
 *  promise 特征  -------->  解决流程化的一种手段
 * pending 等待中
 * resolved 解决问题
 * rejected 拒绝
 */

let promise = new Promise((resolve, reject) => {
  resolve("---success--->");
  //   reject("-----reject---->");
});

promise
  .then(
    (res) => {
      console.log(res);
      return new Promise((resolve, reject) => {
        resolve("第二次成功");
      });
    },
    (err) => {
      console.log(err, "reject");
    }
  )
  .then((res) => {
    console.log(res, "获取第二次成功");
  });

console.log("优先执行测试");
