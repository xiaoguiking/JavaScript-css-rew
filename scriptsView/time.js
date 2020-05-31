// Date 学习
function disDate() {
  var now = new Date();
  // 年 月 日 时 分 秒 星期数
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var date = now.getDate();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  var ms = now.getMilliseconds();
  var day = now.getDay();
  var strDay = "";
  switch (day) {
    case 1:
      strDay = "星期一";
      break;
    case 2:
      strDay = "星期二";
      break;
    case 3:
      strDay = "星期三";
      break;
    case 4:
      strDay = "星期四";
      break;
    case 5:
      strDay = "星期五";
      break;
    case 6:
      strDay = "星期六";
      break;
    case 0:
      strDay = "星期日";
      break;
  }
  var nowStr =
    `${year}` +
    "年" +
    `${month}` +
    `月` +
    `${date}` +
    `日` +
    `${hour}` +
    `时` +
    `${minute}` +
    `分` +
    `${second}` +
    `秒` +
    `${ms}` +
    `毫秒` +
    `${strDay}`;
  // 年份 +1
  now.setFullYear(year + 1);
  var nextStr = now.toLocaleDateString();
  alert(`当前时间是${nowStr}` + `一年后的今天${nextStr}`);
}
