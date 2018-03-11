


$(document).ready(function () {
    window.scrollTo(0, 0);
    var input = document.getElementById("buscar");
    if (input){
        input.addEventListener("keyup", function (event) {
            onEnter();
        });
    }
   
});
var showSectionHome = function () {
    $('body').removeClass('no-overflow');
    $('#aboutme').addClass('show');
    goToByScroll('aboutme', 500);
};


var onEnter = function () {
    event.preventDefault();
    if (event.keyCode === 13) {
        showSectionHome();
    }
};

function goToByScroll(id, time) {
    id = id.replace("link", "");
    $('html,body').animate({ scrollTop: $("#" + id).offset().top }, time);
}


window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};