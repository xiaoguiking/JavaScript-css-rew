// 声明类
// ES5
let Animal = function (type) {
  this.type = type;
  //   this.eat = function eat() {console.log('eat');};
};
// 继承 公有属性应该放在prototype上
Animal.prototype.eat = function () {
  console.log("原型链继承");
};

let dog = new Animal("dog");
let pig = new Animal("pig");

pig.eat = function () {
  console.log("pig eat");
};
dog.eat();
pig.eat();
console.log(dog, pig);

// ES6
class Fruit {
  constructor(type) {
    this.type = type;
  }
  // 公有属性 prototype
  buy() {
    console.log("水果 :>> ");
  }
  // 只读属性写入
  get age() {
    return 4;
  }
  set age(val) {
    this.relAge = val;
  }
}
let apple = new Fruit("apple");
let banana = new Fruit("banana");
console.log(apple, banana);
apple.buy();
banana.buy();
apple.age = 5; // 无法改变 单个get时候
console.log("age :>> ", apple.age, apple.relAge);
//  私有属性private
