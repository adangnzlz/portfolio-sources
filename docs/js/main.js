


$(document).ready(function () {
    if ($('#about').length > 0) {
        $('#about .intro-message ').addClass('in');

        setTimeout(function () {
            new Typed('#typing', {
                strings: ['#Front-End Architect', '#Web', '#App', '#Front-End Engineer'],
                typeSpeed: 70,
                backSpeed: 40,
                loop: false,
                showCursor: false,
                backDelay: 600,
            });
        }, 600);

    }
});

var nextAbout = function(){
    goToByScroll('punto-fuerte', 1000);
};

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



$(document).ready(function () {
    if ($('#about').length > 0) {
        var $window = $(window);		//Window object

        var scrollTime = 1.2;			//Scroll time
        var scrollDistance = 170;		//Distance. Use smaller value for shorter scroll and greater value for longer scroll

        $window.on("mousewheel DOMMouseScroll", function (event) {

            event.preventDefault();

            var delta = event.originalEvent.wheelDelta / 200 || -event.originalEvent.detail / 3;
            var scrollTop = $window.scrollTop();
            var finalScroll = scrollTop - parseInt(delta * scrollDistance);

            TweenMax.to($window, scrollTime, {
                scrollTo: { y: finalScroll, autoKill: true },
                ease: Power1.easeOut,	//For more easing functions see https://api.greensock.com/js/com/greensock/easing/package-detail.html
                autoKill: true,
                overwrite: 5
            });

        });
        window.addEventListener("scroll", function () {
            if (isScrolledIntoView('#punto-fuerte .text-block > p')) {
                if (!$('#about > section.punto-fuerte').hasClass('move')) {
                    $('#about > section.punto-fuerte').addClass('move');
                    activeTyping();
                }
            }
            if (isScrolledIntoView('#analisis .text-block > p')) {
                if (!$('#about > section.analisis').hasClass('move')) {
                    setTimeout(function () {
                        $('#about > section.analisis').addClass('move');
                    }, 200);
                }
            }
            if (isScrolledIntoView('#tecnologies .text-block  p')) {
                if (!$('#about > section.tecnologies').hasClass('move')) {
                    setTimeout(function () {
                        $('#about > section.tecnologies').addClass('move');
                    }, 200);
                }
            }
        });

    }

});

var isScrolledIntoView = function (elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
};

var goNext = function () {
    goToByScroll('analisis', 1000);
};

var activeTyping = function () {
    var speed = 25;
    setTimeout(function () {
        new Typed('#html1', {
            strings: ['&lt;html&gt;'],
            typeSpeed: speed,
            loop: false,
            showCursor: false,
        });
    }, 1000);
    setTimeout(function () {
        new Typed('#head', {
            strings: ['&lt;head&gt;&lt;/head&gt'],
            typeSpeed: speed,
            loop: false,
            showCursor: false,
        });
    }, 1250);
    setTimeout(function () {
        new Typed('#bdy', {
            strings: ['&lt;body&gt;'],
            typeSpeed: speed,
            loop: false,
            showCursor: false,
        });
    }, 2000);
    setTimeout(function () {
        new Typed('#content', {
            strings: ['&lt;h1&gt; Hello World! &lt;/h1&gt;', '&lt;a href="/next" &gt; Go next! &lt;/a&gt;'],
            typeSpeed: speed,
            loop: false,
            showCursor: false,
            backDelay: 900,
        });
    }, 2250);
    setTimeout(function () {
        new Typed('#ebdy', {
            strings: ['&lt;/body&gt;'],
            typeSpeed: speed,
            loop: false,
            showCursor: false,
        });
    }, 3000);
    setTimeout(function () {
        new Typed('#html2', {
            strings: ['&lt;/html&gt;'],
            typeSpeed: speed,
            loop: false,
            showCursor: false,
        });
    }, 3250);
    setTimeout(function () {
        $('#about > section.punto-fuerte').addClass('move finish');
    }, 4150);
};