/**
 * 创建表格
 */

function createTable() {
  var table = document.createElement(<table></table>);
  // 设置元素为文本框
  txt.type = "text";
  txt.value = "文本框";
  // 将文本框添加到dom中
  var div = document.getElementById("id1");
  div.appendChild(txt);
}
