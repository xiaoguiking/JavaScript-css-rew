//Object的 Rest和Spread
const input = {
  a: 1,
  b: 2,
};

const output = {
  ...input,
  c: 7,
};

console.log(input, output);
// res: {a: 1, b: 2} {a: 1, b: 2, c: 7}

input.a = "change";

console.log(input, output, "output实现浅拷贝");

const code = {
  x: 23,
  y: 345,
  z: 234,
  choose: "必选项",
  unchoose: "非必选",
};

const { x, y, ...rest } = code;
console.log(x, y, rest, "剩余运算");
