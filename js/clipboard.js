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

$(".clipboard").each((id, el) => {
    var $el = $(el)
    $el.click(() => {
        if ($el.hasClass("active"))
            return;

        SelectText($el.parent().filter("pre")[0]);
        SelectText($el.parent().find("pre")[0]);

        document.execCommand("copy");
        $el.addClass("active");
        setTimeout( () => {
            $el.removeClass("active")
        }, 1000);
    })
})