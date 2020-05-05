// Array ES5数组遍历

//  1.for
const arr = [1, 2, 3, 4, 5];
for (let index = 0; index < arr.length; index++) {
  console.log(arr[index]);
}

// 2.forEach 不支持break continue
arr.forEach(function (item, index) {
  console.log(item, "item");
});

// 3.every
arr.every(function (item, index) {
  if (item === 2) {
  } else {
    console.log(item);
  }

  return true // 如果没有return true 返回1
})

// 4.for in遍历对象，遍历数组有问题， 可以continue
// for in 问题
arr.a = 8 // a 8 索引有问题
for (let key in arr) {
  console.log(key, arr[key])
}
// 0 1
// 1 2
// 2 3
// 3 4
// 4 5
// a 8

// ES6 for--of 重点 遍历新型数据结构
for (let item of arr) {
  console.log(item)
}

// 案例 找出每个最小值
const Pr = {
  A: [1, 2, 3],
  B: [4, 5, 6],
  C: [7, 8, 9]
}

for (let index in Pr) {
  console.log(index, Pr[index])
}
// A (3)[1, 2, 3]
// B (3)[4, 5, 6]
// C (3)[7, 8, 9]
