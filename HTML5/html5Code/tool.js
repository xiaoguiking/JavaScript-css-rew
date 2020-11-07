// 工具函数
var initToolModuls = (function() {
    function getTarget(ev) {
        var e = ev || window.event;
        return e.target || e.srcElement;
    }
    return {
        getTarget: getTarget
    }
})();