let id = 1;
 
function cycleForward() {

    if(id < 8){
        $(`#pol${id}`).css('display', 'none');
        $(`#pol${id+1}`).css('display', 'block');
        id++;
    }
    if(id === 8){
        $('.next').css('display', 'none');
        $('.start').css('display', 'none');
        $('.confetti').css('display', 'inline-block');
    }
    disableAtLastPos();
}

function cycleBack() {
    if(id === 8) {
        $('.confetti').css('display', 'none');
        $('.next').css('display', 'inline-block');
    }
    if(id > 1) {
        $(`#pol${id}`).css('display', 'none');
        $(`#pol${id-1}`).css('display', 'block');
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