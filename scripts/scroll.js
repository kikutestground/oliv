function scrollBottom() {
    window.scrollTo(0,document.body.scrollHeight);
    // bottomPage.style.display = 'none';
    // topPage.style.display = '';

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
        // $('.confetti').css('display', 'none');
    }
}

setInterval('checkScrollPos()', 100);