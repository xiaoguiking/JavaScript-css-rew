// promise 重点
/**
 * promise为了解决回调地狱问题（A回调B，B回调C，依次类推）
 */

//  ES5  回调地狱

function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = () => {
    callback(src);
  };
  document.head.append(script);
}

function test(name) {
  console.log("test执行", name); // name: ./1.js
}

// 题意： 当load执行成功后执行test

// 不能实现效果
// loadScript("./1.js");
// test();
// 通过callback 实现
loadScript("./1.js", function (script) {
  console.log(script);
  loadScript("./2.js", function (script) {
    console.log(script);
    loadScript("./3.js", function (script) {
      console.log(script);
    });
  });
});

// 执行1后执行2，然后在执行3
