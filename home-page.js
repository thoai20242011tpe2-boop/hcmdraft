$(document).ready(function () {    //Đợi DOM tải xong rồi chạy js

    /* MENU ACTIVE */
    $("#navigation a").click(function () {        //thao tác lick chuột vào thanh menu
        $("#navigation a").removeClass("on");    //Xóa class on khỏi các link menu
        $(this).addClass("on");                  //Thêm class on vào link đang được menu
    });

    /* SCROLL */
    $("#navigation a").click(function (e) {    //Xử lý hiệu ứng cuộn lên chuyển đổi giao diện khi click menu
        let target = $(this).attr("href");    //Lấy giá trị href của link
        if (target.startsWith("#")) {        //kiểm tra nếu là liên kết trang bắt đầu bằng #
            e.preventDefault();             //Ngăn mặc định của thẻ a 
            $("html, body").animate({scrollTop: $(target).offset().top - 60}, 600);//Cuộn lên, vị trí cuộn cách đầu trang 60px, tgian 600ms
        }
    });

    /* CLICK IMAGE → MODAL */
    $(".content-row img").click(function () {                //thao tác click vào ảnh trong content-row
        $("#modal-img").attr("src", $(this).attr("src"));    //Gán src của ảnh được click vào
        $("#modal").fadeIn();                                //Hiệu ứng hiển thị hiện lên
    });

    $("#modal, #close").click(function () {     //click vào nền hoặc nút X để đóng hiển thị
        $("#modal").fadeOut();                   //Hiệu ứng hiển thị mất đi
    });

    /* SCROLL EFFECT */
    $(window).on("scroll", function () {    
        $(".content-row").each(function () {    //Xét từng khối content-row
            let elementTop = $(this).offset().top;    //Vị trí bắt đầu cuộn so với đầu trang
            let windowBottom = $(window).scrollTop() + $(window).height() - 100;        //Vị trí cuối cùng cuộn đến
            if (windowBottom > elementTop) {    //
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

