SelectText = (el) => {
    if (! el)
        return;
    var doc = window.document, sel, range;
    if (window.getSelection && doc.createRange) {
        sel = window.getSelection();
        range = doc.createRange();
        range.selectNodeContents(el);
        sel.removeAllRanges();
        sel.addRange(range);
    } else if (doc.body.createTextRange) {
        range = doc.body.createTextRange();
        range.moveToElementText(el);
        range.select();
    }
}

$(".highlight > .board > .clipboard").each((id, el) => {
    var $el = $(el)
    $el.click(() => {
        if ($el.hasClass("active"))
            return;

        SelectText($el.parent().parent().filter("pre")[0]);
        SelectText($el.parent().parent().find("pre")[1]);

        document.execCommand("copy");
        $el.addClass("active");
        setTimeout( () => {
            $el.removeClass("active")
        }, 1000);
    })
})

$(".highlight > .board > .edit").each((id, el) => {
    var $el = $(el);
    var $pre = $el.parent().parent().find("pre").eq(1);
    $el.click(() => {
        if (! $el.hasClass("active")) {
            $el.addClass("active");
            $el.parent().addClass("active");
            $pre.attr("contenteditable", "true")
                .attr("style", "background: white !important")
                .focus();
        }
        else {
            $el.removeClass("active");
            $el.parent().removeClass("active");
            $pre.attr("contenteditable", "false")
                .attr("style", "");
        }
    })
})