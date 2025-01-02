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

    // 点击外围关闭弹窗
    const modal = document.querySelector('.modal');

    $(".content-item").on("click", function () {
        $('#modal').fadeIn();
    });
    $('#index-login-button').on('click', function () {
        $('#overlay').fadeIn();
    })
    $(".modal").on("click", function (e) {
        if (e.target === modal) {
            $(this).fadeOut();
        }
    });

    const overlay = document.getElementById("overlay");
    // 模拟关闭弹框的逻辑
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
            $("#overlay").fadeOut();
        }
    });
});
