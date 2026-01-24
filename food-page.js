$(document).ready(function() {
    $('.read-more-btn').click(function() {
        // Tìm phần văn bản đứng ngay trước nút vừa bấm
        var content = $(this).prev('.content-text');
        
        // Thêm/Xóa class 'expanded' để kích hoạt CSS Transition
        content.toggleClass('expanded');
        
        // Đổi tên nút tương ứng với trạng thái
        if (content.hasClass('expanded')) {
            $(this).text('Thu gọn');
        } else {
            $(this).text('Xem thêm...');
        }
    });
    // 1. Hiệu ứng FadeIn cho phần tiêu đề Banner khi vừa tải trang
    $('.hero-content').hide().fadeIn(2000);

    // 2. Thêm class cho các hình ảnh để áp dụng hiệu ứng (vì HTML gốc chưa có class)
    $('.image-wrapper img').addClass('market-image');

    // 3. Hiệu ứng phóng to hình ảnh khi di chuột vào (Hover)
    $('.market-image').hover(
        function() {
            $(this).css({
                "transform": "scale(1.03)",
                "transition": "all 0.3s ease",
                "cursor": "pointer"
            });
        },
        function() {
            $(this).css("transform", "scale(1)");
        }
    );

    // 4. Tạo nút "Lên đầu trang" (Back to Top) bằng jQuery
    $('body').append('<div id="backToTop" style="position:fixed; bottom:30px; right:30px; background:#b30000; color:#fff; padding:10px 15px; border-radius:5px; display:none; cursor:pointer; z-index:1000;">↑ Lên trên</div>');

    // Hiển thị nút khi cuộn chuột xuống quá 300px
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('#backToTop').fadeIn();
        } else {
            $('#backToTop').fadeOut();
        }
    });

    // Xử lý sự kiện click để cuộn lên đầu trang
    $('#backToTop').click(function() {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

    // 5. Hiệu ứng làm nổi bật đoạn văn khi người dùng click vào tiêu đề h1
    $('h1').click(function() {
        $(this).find('.market-description').slideToggle('slow');
    });
    // Tính năng tìm kiếm nội dung
$("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    
    // Tìm trong các thẻ h1 (hoặc các section địa danh)
    $("h1").filter(function() {
        // Nếu tiêu đề chứa từ khóa thì hiển thị, không thì ẩn đi
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
});
});
