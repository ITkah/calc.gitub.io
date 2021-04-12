$('.accordeon .acc-head').on('click', f_acc);

function f_acc() {
    $('.accordeon .acc-body').not($(this).next()).slideUp(200);
    $(this).next().slideToggle(200);
}

var btn = $('.hide_btn_wrap');
$(window).scroll(function() {
    if ($(window).scrollTop() > 500) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});