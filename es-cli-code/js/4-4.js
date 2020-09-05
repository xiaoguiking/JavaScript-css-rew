// es8 中如何获取Object 数据中的描述符

// 有某个人被开除，所以可以获取数据但是不在展示

const data = {
  PortLand: "343/34",
  DuLin: "45/213",
  kaiChu: "65/45",
};

// api
Object.defineProperty(data, "kaiChu", {
  // 不可枚举
  enumerable: false,
});

console.log(Object.keys(data), "show");

// 查看数据中是否被限制

// 关注所有
console.log(Object.getOwnPropertyDescriptors(data), "admin");

// 关注具体某个
console.log(Object.getOwnPropertyDescriptor(data, "kaiChu"), "admin");
