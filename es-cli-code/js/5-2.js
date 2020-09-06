// ES9中Promise如何兜底操作
const Gen = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (time < 500) {
        reject(time);
      } else {
        resolve(time);
      }
    }, time);
  });
};

Gen(Math.floor(Math.random() * 1000))
  .then((val) => console.log(val, "resolve"))
  .catch((err) => console.log(err, "reject"))
  .finally(() => console.log("finish"));

// 解释： 成功失败的逻辑都会提示弹框------ 使用finally
