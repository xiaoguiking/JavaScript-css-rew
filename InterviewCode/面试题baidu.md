#### 1.用 flex 布局实现骰子的（6 星）布局

阮一峰 http://www.ruanyifeng.com/blog/2015/07/flex-examples.html?bsh_bid=683103006

#### 2.写出下面代码的打印结果

```js
var a = {s：1};
var b = a;
a.s = 2;
console.log(b.s);   //2

b.s = 4;
console.log(a.s, 'a'); // 4
值传递



var a = {s: 1};
var b = a;
a = null;
console.log(b.s);  // 1
```

3.写出下面代码运行结果

```js
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// 5 5 5 5 5

setTimeout是异步执行的，1000毫秒后向任务队列里添加一个任务，只有主线上的全部执行完才会执行任务队列里的任务，所以当主线程for循环执行完之后 i 的值为5，这个时候再去任务队列中执行任务，i全部为5；

每次for循环的时候setTimeout都会执行，但是里面的function则不会执行被放入任务队列，因此放了5次；for循环的5次执行完之后不到1000毫秒；

1000毫秒后全部执行任务队列中的函数 输出五个5啦


for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

把var换成let，那么输出结果为0,1,2,3,4；

因为let  i  的是区块变量，每个i只能存活到大括号结束，并不会把后面的for循环的  i  值赋给前面的setTimeout中的i；而var i  则是局部变量，这个 i 的生命周期不受for循环的大括号限制；

```

#### 4.

```js'
(
    function test() {
        setTimeout(function () {
            console.log(4);
        }, 0);

        new Promise(function executor(resolve){
            console.log(1);
            for(var i = 0; i< 10000; i++){
                i === 999 && resolve();
            }
            console.log(2);
        }).then(function(){
            console.log(5);
        });
        console.log(3);
    })()


    log： 1 2 3 5 4
```

### 5.将一个字符串反转输出

```js
var a = "absdfsg";

var b = a.split("").reverse();

console.log(b);
```

### 6.实现一个对象 copy

```
var obj = {
foo: 'bar',
arr: [1,2]
}
```

### 7.对象数组按照 age 升序排序

```js
var arr = [
  {name: 'a1', age: 18},
  {name: 'a2', age: 12},
  {name: 'a3', age: 23}
]



function compare(key){
      return function(value1,value2){
          var val1=value1[key];
         var val2=value2[key];
         return val1-val2;
     }
 }
 arr.sort(compare('age'));
 console.log(arr);


****具有普遍意义的方法****

var data = [
	{name: "Bruce", age: 23, id: 16, score: 80},
	{name: "Alice", age: 24, id: 12, score: 90},
	{name: "David", age: 21, id: 11, score: 70},
	{name: "Cindy", age: 22, id: 10, score: 100},
];
console.log(data.sort(compareUp("score")));
// data.sort(compareDown("age"));

function compareUp(propertyName) { // 升序排序
    if ((typeof data[0][propertyName]) != "number") { // 属性值为非数字
		return function(object1, object2) {
			var value1 = object1[propertyName];
			var value2 = object2[propertyName];
			return value1.localeCompare(value2);
		}
	}
	else {
		return function(object1, object2) { // 属性值为数字
			var value1 = object1[propertyName];
			var value2 = object2[propertyName];
			return value1 - value2;
		}
	}
}
function compareDown(propertyName) { // 降序排序
    if ((typeof data[0][propertyName]) != "number") { // 属性值为非数字
		return function(object1, object2) {
			var value1 = object1[propertyName];
			var value2 = object2[propertyName];
			return value2.localeCompare(value1);
		}
	}
	else {
		return function(object1, object2) { // 属性值为数字
			var value1 = object1[propertyName];
			var value2 = object2[propertyName];
			return value2 - value1;
		}
	}
}

```

### 8.熟悉的 linux 以及 git 常用命令列举

### 9.实现一种排序算法

### 10. 假设有个池塘，里面有无穷多的水，现有 2 个空水壶，容积分别为 5 升和 6 升，问如何只用 2 个水壶从池塘里面取出 3 升的水？

1.  5L 装满倒入 6L 的空瓶中，此时 6L 瓶中有 5L 水，
2.  5L 装满倒入 6L（此时水有 5L）瓶中， 结果：5L(实际有 4L)， 6L(6L 满)
3.  6L 瓶中水倒出，5L 瓶（4L 水）倒入到 6L 瓶中， 结果 5L(0),6L(4L);
4.  5L 瓶装满倒入 6L 瓶（4L+ 倒入 2L）， 5L 瓶中剩下 3L 水 （done）
