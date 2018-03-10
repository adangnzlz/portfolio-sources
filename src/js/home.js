


$(document).ready(function () {
    var input = document.getElementById("buscar");
    if (input){
        input.addEventListener("keyup", function (event) {
            onEnter();
        });
    }
    goToByScroll('body', 0);
});
var showSectionHome = function () {
    $('body').removeClass('no-overflow');
    $('#aboutme').addClass('show');
    goToByScroll('aboutme', 1000);
};


var onEnter = function () {
    event.preventDefault();
    if (event.keyCode === 13) {
        showSectionHome();
    }
}

function goToByScroll(id, time) {
    id = id.replace("link", "");
    $('html,body').animate({ scrollTop: $("#" + id).offset().top }, time);
}

