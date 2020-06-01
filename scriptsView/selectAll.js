// 全选和全不选

function choose(val) {
  var listAll = document.getElementsByName("kc");
  var len = listAll.length;
  for (var i = 0; i < len; i++) {
    listAll[i].checked = val;
  }
}
