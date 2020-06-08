//  ES6 promise 学习
function loadScript(src) {
  // pending // undefined
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve(src); //  fulfilled, result
    script.onerror = (err) => reject(err); // rejected, error
    document.head.append(script);
  });
}

loadScript("./1.js").then(loadScript("./2.js")).then(loadScript("./3.js"));
