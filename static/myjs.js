$(function () {
    $("#slide-home").on("click", function () {
        $("html body").animate({
            scrollTop: $("#firstbg").offset().top
        }, 400);
    });
    $("#slide-idea").on("click", function () {
        $("html body").animate({
            scrollTop: $("#secondbg").offset().top
        }, 400);
    });
    $("#slide-team").on("click", function () {
        $("html body").animate({
            scrollTop: $("#thirdbg").offset().top
        }, 400);
    });

});