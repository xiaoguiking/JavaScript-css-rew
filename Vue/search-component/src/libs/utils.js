/**
 * 节流 throttle
 */
function throttle(fn, delay) {
  var t = null,
    begin = new Date().getTime();

  return function() {
    var _self = this;
    var args = arguments;
    var cur = new Date().getTime();
    clearTimeout(t);
    if (cur - begin >= delay) {
      fn.apply(_self, args);
      begin = cur;
    } else {
      setTimeout(function() {
        fn.apply(_self, args);
      }, delay);
    }
  };
}

export { throttle };
