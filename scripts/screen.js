function detectDevice() {
    if (window.innerWidth < 1450) {
        $('header').css('display', 'none');
        $('main').css('display', 'none');
        $('footer').css('display', 'none');
        $('center').css('display', 'block');
    }
    else {
        $('center').css('display', 'none');
        $('header').css('display', '');
        $('main').css('display', '');
        $('footer').css('display', '');
    }
}

window.onload = detectDevice;
window.onresize = detectDevice;