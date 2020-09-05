// 字符串补白， 数字补0

// 第一种补0 方式
for (var i = 1; i <= 30; i++) {
  if (i < 10) {
    console.log(`0${i}`);
  } else {
    console.log(i);
  }
}

console.log(
  "---------------------------------------------------------------------->"
);
// 第二种补0 方式

for (let index = 1; index < 340; index += 10) {
  console.log(index.toString().padStart(3, "0"));
}

console.log(
  "---------------------------------------------------------------------->"
);
// 第三种 小数点
for (let j = 1; j < 10; j++) {
  console.log(j.toString().padEnd(3, "#*"));
}
