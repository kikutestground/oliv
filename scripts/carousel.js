let id = 1;
 
function cycleForward() {

    if(id === 1) {
        $('.scroll_up').css('display', 'none');
        $('.prev').css('display', 'inline-block');
    }
    if(id < 8){
        $(`#pol${id}`).css('display', 'none');
        $(`#pol${id}`).css('display', 'none');
        
        $(`#pol${id+1}`).css('display', 'block');

        $(`#par${id}`).css('display', 'none');
        $(`#par${id+1}`).css('display', 'block');

        id++;
    }
    if(id === 8){
        // $('.next').css('display', 'none');
        $('.start').css('display', 'none');
        $('.confetti').css('display', 'inline-block');
    }
    disableAtLastPos();
}

function cycleBack() {
    if(id === 2) {
        $('.prev').css('display', 'none');
        $('.scroll_up').css('display', 'inline-block');
    }

    if(id === 8) {
        // $('.confetti').css('display', 'none');
        $('.next').css('display', 'inline-block');
    }
    if(id > 1) {
        $(`#pol${id}`).css('display', 'none');
        $(`#pol${id-1}`).css('display', 'block');

        $(`#par${id}`).css('display', 'none');
        $(`#par${id-1}`).css('display', 'block');
        id--;
    }
    disableAtLastPos();
}

function disableAtLastPos() {
    if(id === 8) {
        $('.next').addClass("disable_btn");
    }
    else {
        $('.next').removeClass("disable_btn");
    }
    if(id === 1) {
        $('.prev').addClass("disable_btn");
    }
    else {
        $('.prev').removeClass("disable_btn");
    }
}

disableAtLastPos();