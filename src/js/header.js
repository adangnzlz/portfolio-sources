
$(document).ready(function () {


    $.get('./templates/popover-jobs.html', function (data) {
        var popoverTemplate = data;
        $('#p1').popover({
            template: popoverTemplate,
            animation: true,
            trigger: 'manual'
        });
    });
    $.get('./templates/popover-cookies.html', function (data) {
        var popoverTemplate = data;
        $('#p2').popover({
            template: popoverTemplate,
            animation: true,
            trigger: 'manual'
        });
    });
    $.get('./templates/popover-cookies-accepted.html', function (data) {
        var popoverTemplate = data;
        $('#p3').popover({
            template: popoverTemplate,
            animation: true,
            trigger: 'manual'
        });
    });
    $.get('./templates/popover-profile.html', function (data) {
        var popoverTemplate = data;
        $('#p4').popover({
            template: popoverTemplate,
            animation: true,
            trigger: 'manual'
        });
    });
    if (getCookie('aceptarCookies')) {
        $('#p2').addClass('hide');
    } else {
        $('#p3').addClass('hide');
    }
});
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


var getCookie = function (cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
};


var contactar = function () {
    window.location.href = 'mailto:adan.gonzalez.lopez@gmail.com?subject=Contacto desde Portfolio';
};