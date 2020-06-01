// 删除元素
function delEle() {
  // 得到父级元素
  var div2 = document.getElementById("id2");
  // 得到子元素
  var childList = div2.childNodes;
  // 如果层级有子元素，就删除第一个子元素
  if (childList !== null && childList.length > 0) {
    div2.removeChild(childList[0]);
  } else {
    alert("没有可以被删除的元素");
  }
}
