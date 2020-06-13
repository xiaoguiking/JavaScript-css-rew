/**
 * cookie
 */
document.cookie = "cookieName = value";
document.cookie = "name = age";

// 设定一个 cookie 在在是三个月后过期
var expires = new Date();
expires.setTime(expires.getTime() + 3 * 30 * 24 * 60 * 60 * 1000);
document.cookie = "name1 = 123; expires= " + expires.toGMTString();

// cookie封装
function getCookie(cookieName) {
  var cookString = document.cookie;
  var start = cookString.indexOf(cookieName + "=");
  // 加上 = 原因是避免某些和cookie值里有与cookieName一样的字符串
  if (start == -1) {
    return null;
  }
  start += cookieName.length + 1;
  var end = cookString.indexOf(";", start);
  if (end == -1) {
    return unescape(cookString.substring(start));
  }
  return unescape(cookString.substring(start, end));
}
