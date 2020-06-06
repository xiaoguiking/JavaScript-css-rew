// Object.prototype

let x = 1,
  y = 2,
  z = 3;

let obj = {
  x: x,
  y,
  [z]: 6,
  hello() {
    console.log("hello");
  },
};

console.log(obj);
obj.hello();

// Set 结构 写读找改删

let unique = Array.from(new Set([1, 23, 4, 56, 7, 23, 1, 3, 5, 4]));
console.log("去重", unique);

let s = new Set();
// 加入
s.add("hello").add("world");
// 删除
// s.delete("hello");
// 判断s中是否有hello  true 有 false 没有
console.log(s.has("hello"), "判断是否存在");
// 判断有多少条数据, 属性
console.log(s.size, "有多少条数据");
console.log(s);

// keys() SetIterator {"hello", "world"}
console.log(s.keys(), "keys");

// values() SetIterator {"hello", "world"}
console.log(s.values(), "values");

// 返回键值对 entries()
console.log(s.entries(), "键值对");

// 遍历 读出
s.forEach((item) => {
  console.log(item);
});

