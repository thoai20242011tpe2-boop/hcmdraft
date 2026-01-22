$(document).ready(function () {

    /* MENU ACTIVE */
    $("#navigation a").click(function () {
        $("#navigation a").removeClass("on");
        $(this).addClass("on");
    });

    /* SMOOTH SCROLL */
    $("#navigation a").click(function (e) {
        let target = $(this).attr("href");
        if (target.startsWith("#")) {
            e.preventDefault();
            $("html, body").animate({
                scrollTop: $(target).offset().top - 60
            }, 600);
        }
    });

    /* CLICK IMAGE → MODAL */
    $(".content-row img").click(function () {
        $("#modal-img").attr("src", $(this).attr("src"));
        $("#modal").fadeIn();
    });

    $("#modal, #close").click(function () {
        $("#modal").fadeOut();
    });

    /* SCROLL EFFECT */
    $(window).on("scroll", function () {
        $(".content-row").each(function () {
            let elementTop = $(this).offset().top;
            let windowBottom = $(window).scrollTop() + $(window).height() - 100;
            if (windowBottom > elementTop) {
                $(this).addClass("show");
            }
        });
    });

    /* BACK TO TOP */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $("#backToTop").fadeIn();
        } else {
            $("#backToTop").fadeOut();
        }
    });

    $("#backToTop").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
    });

    $(window).on("load", function () {
    $(".content-row").addClass("show");
});
});
