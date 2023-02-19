$toc = $("#TableOfContents");

$toc.find("li").each( (id, el) => {
    var $el = $(el);
    var $a = $el.find("> a");
    var text = $el.text();
    if ($a.length > 1) {
        $el.html("");
        $el.append($a.eq(0).text(text));
    }
});


$anchor = $toc.find("a");
$widgets = $(".widgets");
$heading = $(".content").children("h2, h3, h4");

onClick = false;

scrollParentToChild = (parent, child) => {
    if (!parent || !child)
        return;
    var parentRect = parent.getBoundingClientRect();
    var childRect = child.getBoundingClientRect();
    var isViewable = (childRect.top >= parentRect.top) && (childRect.bottom <= parentRect.top + parent.clientHeight);
    if (!isViewable) {
        const scrollTop = childRect.top - parentRect.top;
        const scrollBot = childRect.bottom - parentRect.bottom;
        parent.scrollTop += (scrollTop + scrollBot) / 2;
    }
}

currentAnchor = () => {
    var heading = $heading.withinviewport();
    return heading.length && $(`[href=\"${heading[0].id}\"]`);
}

setActiveAnchor = ($cntAnchor) => {
    if (!$cntAnchor)
        return;
    $anchor.removeClass("active");
    $cntAnchor.addClass("active");
    scrollParentToChild($widgets[0], $cntAnchor[0]);
}

$(window).scroll( () => {
    onClick ? onClick = false : setActiveAnchor(currentAnchor());
});

setActiveAnchor(currentAnchor());

$anchor.each( (id, el) => {
    $(el).click( () => {
        onClick = true;
        setActiveAnchor($(el));
        var heading = $heading.filter(`[id=\"${$(el).attr("href")}\"]`);
        heading.css({ color: "#f53900" })
            .animate({ opacity: 1 }, 100)
            .animate({ color: "#000000" }, "swing");
    });
});