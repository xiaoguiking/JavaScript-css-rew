// 模板语法

// es5
const a = 1;
const b = 2;
const c = "This is js";
console.log("sum:", a + b, c);

// ES6
console.log(`SUM1:, ${a + b} `);

// 案例
const retailPrice = 20; // 零售价
const wholeSalePrice = 15; // 批发价

const type = "retail";

let showTxt = "";

if (type === "retail") {
  showTxt = `您此次的购买单价是${retailPrice}`;
} else {
  showTxt = `您此次的批发价是${wholeSalePrice}`;
}

console.log(showTxt, "showTxt");

// 案例修改
function Price(strings, type) {
  let s1 = strings[0];
  const retailPrice = 20; // 零售价
  const wholeSalePrice = 15; // 批发价

  let showTxt1 = "";
  if (type === "retail") {
    showTxt1 = `购买单价是${retailPrice}`;
  } else {
    showTxt1 = `批发价是${wholeSalePrice}`;
  }
  return `${s1}${showTxt1}`;
}

let showTxt1 = Price`您此次的${"retail"}`;

console.log(showTxt1, "showTxt1");

// 换行

// es5

let word = "我是第一行" + "第二行";

let word1 = `我是第一行
我是第二行`;
console.log(word, word1);
