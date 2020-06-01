//  查询元素

// getElementById()  指定id
function queryById() {
  // 通过id查询元素
  var txt = document.getElementById("inputId");
  alert(txt.value); // 显示文本输入内容
}

// getElementByName  同一个name名字集合

function queryByName() {
  var listInput = document.getElementsByName("inter");
  //   alert(listInput.value);
  // 通过查询数组的length属性 取得查询元素个数
  var len = listInput.length;
  console.log(len);
  var str = "";
  for (var i = 0; i < len; i++) {
    console.log(listInput[i]);
    str = str + listInput[i].value + ",";
  }
  alert(`查询得到元素个数` + len + `元素内容` + str);
}

// getElementsByTagName()
function queryByTagName() {
  var list = document.getElementsByTagName("li");
  var lenList = list.length;
  console.log(lenList, "list");
  var listStr = "";
  for (var j = 0; j < lenList; j++) {
    listStr = listStr + list[j].innerText + ",";
  }
  alert(`查询元素个数：` + lenList + `元素内容：` + listStr);
}
