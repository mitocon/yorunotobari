window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(anchor.hash);
            const targetOffsetTop = window.scrollY + target.getBoundingClientRect().top;

            window.scrollTo({
                top: targetOffsetTop,
                behavior: 'smooth',
            });
        });
    });
});

$(function () {
    var btn = $('#to_page_top');
    btn.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            btn.fadeIn();
        } else {
            btn.fadeOut();
        }
    });
    btn.click(function () {
        $("html, body").animate({ scrollTop: 0 }, 400);
        $("html, body").animate({ scrollLeft: 0 }, 400);
    });
});