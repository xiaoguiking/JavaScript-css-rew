// Map 数据结构  增删改查

// 实例化
let s = new Map([
  [1, 2], // key, value 形式
  [3, 4],
]);
console.log(s, "Map结构"); //Map(2) {1 => 2, 3 => 4} "Map结构"

// 添加
s.set(5, 6);
console.log(s, "添加"); //Map(3) {1 => 2, 3 => 4, 5 => 6} "添加"

// 删除 指定的可以
// s.delete(1);
// s.clear();全部删除
console.log(s, "删除");

// 统计有多少条数据
s.size;
console.log(s.size, "统计数据");

// 取到索引key数据
console.log(s.get(5)); // 6
// 取到所有索引 key
console.log(s.keys()); //MapIterator {1, 3, 5}

// 取到所有values
console.log(s.values()); //MapIterator {2, 4, 6}

// 可遍历对象 forEach for of
// 注意是先value， 然后key
s.forEach((value, key) => {
  console.log(value, key);
});
