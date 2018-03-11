
$(document).ready(function () {

    crearPopups();
    if (getCookie('aceptarCookies')) {
        $('#p2').addClass('hide');
    } else {
        $('#p3').addClass('hide');
    }
});

var crearPopups = function () {
    crearPopup('#p1', 'popover-jobs.html');
    crearPopup('#p2', 'popover-cookies.html');
    crearPopup('#p3', 'popover-cookies-accepted.html');
    crearPopup('#p4', 'popover-profile.html');
};

var crearPopup = function (id, urltemplate) {
    $.get('./templates/' + urltemplate, function (data) {
        var popoverTemplate = data;
        $(id).popover({
            template: popoverTemplate,
            animation: true,
            trigger: 'manual'
        });
    });
};

var aceptarCookies = function () {
    document.cookie = "aceptarCookies=true";
    console.log(document.cookie.aceptarCookies);
    $('#p2').popover('hide');
};

var openCookiePopup = function () {
    if (getCookie('aceptarCookies')) {
        $('#p3').popover('toggle');
    } else {
        $('#p2').popover('toggle');
    }
};

var contactar = function () {
    window.location.href = 'mailto:adan.gonzalez.lopez@gmail.com?subject=Contacto desde Portfolio';
};