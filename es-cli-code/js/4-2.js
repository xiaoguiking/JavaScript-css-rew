let obj = {
  lintian: 544,
  jiaoyue: 2323,
};

// es5

let res = [];
for (let key in obj) {
  res.push(key);
}
console.log(res, "es5"); //  ["lintian", "jiaoyue"] "es5"

// es6
console.log(Object.keys(obj), "es6"); //  ["lintian", "jiaoyue"] "es6"
console.log(Object.values(obj), "es6value");

let result = [];
let result1 = [];
for (let [key, value] of Object.entries(obj)) {
  result.push(key);
  result1.push(value);
}
console.log(result, result1, "for of");

console.log(Object.values(obj).filter((item) => item > 653));
