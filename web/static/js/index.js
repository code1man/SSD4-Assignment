$(document).ready(function () {

    let isHover = false;

    $('.more').hover(
        function () {
            isHover = true;
            $('.hover-card').slideDown(200);
        },
        function () {
            isHover = false;
            setTimeout(()=>{
                if (!isHover)
                    $('.hover-card').slideUp(200);
            },300);
        }
    );

    $('.hover-card').hover(
        function () {
            isHover = true;
        },
        function () {
            isHover = false;
            setTimeout(() => {
                if (!isHover)
                    $('.hover-card').slideUp(200);
            }, 300);
        }
    )

    // 顶部导航的点击效果
    $('.top-nav li a').on('click', function () {
        $('.top-nav li').removeClass('active');
        $(this).parent().addClass('active');
        alert($(this).text());
    });
});
