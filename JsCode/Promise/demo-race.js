/**
 * Promise.race 特征
 * 谁先完成就先返回那个promise结果，无论是fullfilled还是rejected
 */

const fs = require("fs");

function readFile(path, isSetError) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", function (err, data) {
      if (err || isSetError) {
        reject("承诺石沉大海");
      }
      const resData = JSON.parse(data);
      resolve(resData);
    });
  });
}

Promise.race([
  readFile("./data/user.json"),
  readFile("./data/userCourse.json", true),
  readFile("./data/course.json", true),
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// TODO 测试资源或者接口的响应速度
