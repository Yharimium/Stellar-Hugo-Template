$(function () {
    IsPC = function () {
        var userAgentInfo = navigator.userAgent;
        var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
        for (var v = 0; v < Agents.length; v ++)
            if (userAgentInfo.indexOf(Agents[v]) > 0)
                return false;
        return true;
    }
    detectZoom = function () {
        var ratio = 0,
            screen = window.screen,
            ua = navigator.userAgent.toLowerCase();
        if (window.devicePixelRatio !== undefined) {
            ratio = window.devicePixelRatio;
        }
        else if (~ ua.indexOf('msie')) {
            if (screen.deviceXDPI && screen.logicalXDPI) {
                ratio = screen.deviceXDPI / screen.logicalXDPI;
            }
        }
        else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
            ratio = window.outerWidth / window.innerWidth;
        }
        if (ratio) {
            ratio = Math.round(ratio * 100);
        }
        return ratio;
    }
    if (IsPC()) {
        $('.markdown').find(".md_img").each(function (id, el, arr) {
            if (Array('P', 'DIV', 'CENTER').includes(el.parentElement.tagName)) {
                if (el.style.zoom)
                    el.style.zoom = parseFloat(el.style.zoom) / detectZoom();
                else
                    el.style.zoom = 100 / detectZoom();
            }
        });
    }
});