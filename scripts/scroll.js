function scrollBottom() {
    window.scrollTo(0,document.body.scrollHeight);
    // bottomPage.style.display = 'none';
    // topPage.style.display = '';
    $('.scroll_up').removeClass('disable_btn');
    hideStart();
    // setInterval('hideStart()', 500);
}

function hideStart() {
    $('.start').css('display', 'none');
    // $('.confetti').css('display', 'none');
    $('.next').css('display', 'inline-block');
}

function checkScrollPos() {
    if(window.scrollY === 0 || document.documentElement.scrollTop === 0) {
        $(`#pol${id}`).css('display', 'none');
        $(`#par${id}`).css('display', 'none');
        id = 1;
        disableAtLastPos();
        $(`#pol${id}`).css('display', 'block');
        $(`#par${id}`).css('display', 'block');

        $('.start').css('display', 'inline-block');
        $('.next').css('display', 'none');
        $('.scroll_up').addClass('disable_btn');
        // $('.confetti').css('display', 'none');
    }
}

setInterval('checkScrollPos()', 100);

function scrollToTop() {
    if($(window).scrollTop != 0) {
        $(window).scrollTop(0);
        $('.scroll_up').addClass('disable_btn');
    }
}