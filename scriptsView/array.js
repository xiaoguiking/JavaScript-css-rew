// 数组方法
var arr = [12, "数组"];
var arr1 = [34];
document.write(arr.concat(arr1) + `<hr/>`);

var arr2 = [1, 2, 3, 4, 5, 6, , 7, , 8];
document.write(arr2.join() + `<hr/>`); // 数组变成默认逗号间隔的字符串

var arr3 = [12, 34, 56];
document.write(arr3.pop() + "返回该元素");
document.write(arr3 + `<hr/>`);

var arr4 = [12, 334, 234, 123, "123", "123"];
document.write(arr4.push("添加新元素") + `返回的是length`); // 7
document.write(arr4 + `：改变的结果<hr/>`);

var arr5 = [12, 456, 1212, 3, 32, 234, 23];
document.write(arr5.sort() + `<hr/>`);

var arr6 = arr5;
arr6.sort((x, y) => x - y);
document.write(`整型排序结果` + arr6 + "<hr/>");

var arr7 = ["卫庄", "赤练", "白凤"];
document.write("shift删除后返回该元素：" + arr7.shift());
document.write("删除后的结果：" + arr7 + "<hr/>");

document.write(arr7.unshift("添加元素绝望"));
document.write("结果：" + arr7 + "<hr/>");

var arr8 = ["a", "b", "c", "d", "e", "f", "g"];
document.write(arr8.slice(1, 2) + "<hr/>"); //
console.log(arr8.slice(1, 2)); //["b"]
console.log(arr8.slice(5)); //["f", "g"]

var arr9 = ["a", "b", "c", "d", "e", "f", "g"];
document.write("返回被删除的元素:" + arr9.splice(3, 1));
document.write("结果:" + arr9 + "<hr/>");
document.write("添加元素:" + arr9.splice(6, 0, "添加元素"));
document.write("结果:" + arr9 + "<hr/>");

var a = [3, 5, 6, 7, 8, 9, [12, 34, "12"]];
document.write(a.toString() + "<hr/>"); //3,5,6,7,8,9,12,34,12

var b = new Date();
document.write(b.toString() + "<br/>"); // 输出当前时间
document.write(b.toLocaleString() + "<br/>");
document.write(b.toLocaleDateString() + "<br/>");
