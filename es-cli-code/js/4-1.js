function async() {
  return 27;
}
console.log(async());

//async
async function firstAsync() {
  return 70;
}
console.log(firstAsync(), "first");

firstAsync().then((value) => {
  console.log(value, "value");
});

async function FooAsync() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(resolve("now is done"));
    });
  });
  let res = await promise;
  console.log(res, "res");
  console.log(await Promise.resolve(50), "com");
  console.log(await 50, "com");
  console.log(2);
  return Promise.resolve(3);
}

FooAsync().then((val) => {
  console.log(val, "val");
});
