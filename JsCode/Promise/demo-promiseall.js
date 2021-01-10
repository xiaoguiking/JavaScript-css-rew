/**
 * promise.all()
 */

const fs = require("fs");

let num = 0;
function readFile(path, isSetError) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", function (err, data) {
      if (err || isSetError) {
        reject("承诺石沉大海" + num++);
      }
      const resData = JSON.parse(data);
      resolve(resData);
    });
  });
}

/**
 *  需求： 合并三个文件内部的内容为一个数组，并且按照顺序排列，如果一个读取失败，整体返回rejected
 */
// fs.readFile("./data/user.json", "utf8", function (err, data) {});
// fs.readFile("./data/userCourse.json", "utf8", function (err, data) {});
// fs.readFile("./data/course.json", "utf8", function (err, data) {});

/**
 *  Promise.all()
 * interable 类型的数据 可迭代数据 Array Set Map
 */

Promise.all([
  readFile("./data/user.json"),
  readFile("./data/userCourse.json", true),
  readFile("./data/course.json", true),
])
  .then((res) => {
    // console.log(res);
  })
  .catch((err) => {
    // console.log(err);
  });

// 用多个异步任务并发运行，他的结果创建承诺之后使用。等待所有结果任务的完成
// iterable内部元素传递的是promise对象结合，如果不是promise，直接resolve,  Promise.resolve(0 || 12 || true);
// iterable 内部没有元素， 返回空数组
// 有一个是promise 是rejected， 则返回rejected

readFile("./data/user.json")
  .then((res) => {
    console.log(res);
    // 再返回一个状态
    // return Promise.resolve("成功~~");
    // return Promise.reject("失败哦");
    // 等同 return new Promise((resolve, reject) => {resolve("成功噻");});
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("reject" + err);
  });
