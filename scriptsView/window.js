// window 对象属性
window.status = "显示window对象常用属性"; // 状态栏中的内容
// 得到window属性

var c = window.closed;
var na = window.name;
var sA = window.status;
var h = window.innerHeight;
var w = window.innerWidth;
var sl = window.screenLeft;
var sT = window.screenTop;
// 输出window对象属性
document.write(`closed` + c + `<hr/>`);
document.write(`name` + na + `<hr/>`);
document.write(`status` + sA + `<hr/>`);
document.write(`innerHeight` + h + `<hr/>`);
document.write(`innerWidth` + w + `<hr/>`);
document.write(`screenLeft` + sl + `<hr/>`);
document.write(`screenTop` + sT + `<hr/>`);
