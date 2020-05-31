// alert("hello, js");
// document.write("12312");

var a = true;

if (a) {
  console.log("true");
} else {
  console.log("false");
}

a ? console.log("true") : console.log("false");

var msg = '我说： "我错了"';
alert(msg);

var txt = "hello world";
document.write(`计算字符串长度` + txt);
console.log(txt.length);

document.write(txt.toUpperCase() + `大写`);

var char = "index表示返回的字符位置";
charString = char.charAt(2);
document.write(`输出结果` + charString);

var string = "hello";
stringIndex = string.indexOf("c");
document.write(`indexOf返回` + stringIndex);

// var str = "substring字符串截取";
// str1 = str.substring(12);
// document.write(str1 + `字符串截取`);
var str = "字符串对象截取";
str1 = str.substring(5, 6);
console.log(str1);

zifu = "this is anchor";
anc = zifu.anchor("anc");
document.write("anc");
