/**
 *  async await
 */

const fetch = require("node-fetch");

function getData() {
  return fetch("https://mock.yonyoucloud.com/mock/7866/table/list")
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      //   console.log(json);
      return json;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
}

// TODO Promise

// getData().then((res) => {
//   console.log(res);
// });

// TODO async await
// await 操作符  等待Promise对象产出结果的操作手段
// 功能是暂停async 函数的执行， 等待Promise的结果
// 假如Promise的处理的结果是rejected， 会抛出异常
// async 函数是通过一个隐式的Promise返回的pending 状态

//  async 函数是当前这个异步函数与同一个作用域的程序是异步关系
async function logData() {
  const data = await getData();
  console.log(data, "=========data==============>");
}
logData();

console.log(logData()); // async 函数是通过一个隐式的Promise返回的pending 状态

// 形式

async function log1() {
  const data1 = getData();
  const data2 = getData(data1);
  const data3 = getData(data2);
}
