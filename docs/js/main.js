
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
var nextAbout = function () {
    goToByScroll('punto-fuerte', 1000);
};

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

$(document).ready(function () {
    if ($('#home').length > 0) {
        window.scrollTo(0, 0);
        var input = document.getElementById("buscar");
        if (input) {
            input.addEventListener("keyup", function (event) {
                onEnter();
            });
        }
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



$(document).ready(function () {
    if ($('#about').length > 0) {
        suavizarScroll();
        activarAnimaciones();
        crearNubeTags();
    }
});

var crearNubeTags = function () {
    var words = [
        { text: "SEO", weight: 20, color: "#06ceb1" },
        { text: "TAGS", weight: 15, color: "#fafafa" },
        { text: "META", weight: 15, color: "#fafafa" },
        { text: "ASSETS", weight: 10, color: "#fafafa" },
        { text: "ANALYTICS", weight: 15, color: "#fafafa" },
        { text: "URLS", weight: 15, color: "#fafafa" },
        { text: "GOOGLE", weight: 15, color: "#06ceb1" },
        { text: "OPTIMIZATION", weight: 10, color: "#fafafa" },
        { text: "DESCRIPTION", weight: 8, color: "#fafafa" },
        { text: "ALT", weight: 8, color: "#fafafa" },
        { text: "TITLE", weight: 8, color: "#06ceb1" },
        { text: "SEMANTIC", weight: 5, color: "#06ceb1" },
        { text: "LINK", weight: 5, color: "#fafafa" },
        { text: "RANKING", weight: 5, color: "#fafafa" },
        { text: "WEB", weight: 5, color: "#06ceb1" }
    ];
    $('#seo-tags').jQCloud(words, {
        autoResize: true
    });
};


var goNext = function () {
    goToByScroll('analisis', 1000);
};

var activeTyping = function () {

    activeTyped('#html1', ['&lt;html&gt;'], 1000);
    activeTyped('#head', ['&lt;head&gt;&lt;/head&gt'], 1250);
    activeTyped('#bdy', ['&lt;body&gt;'], 2000);
    activeTyped('#content', ['&lt;h1&gt; Hello World! &lt;/h1&gt;', '&lt;a href="/next" &gt; Go next! &lt;/a&gt;'], 2250);
    activeTyped('#ebdy', ['&lt;/body&gt;'], 3000);
    activeTyped('#html2', ['&lt;/html&gt;'], 3250);
    setTimeout(function () {
        $('#about > section.punto-fuerte').addClass('move finish');
    }, 4150);
};


var activeTyped = function (id, strings, timeout) {
    var speed = 25;
    setTimeout(function () {
        new Typed(id, {
            strings: strings,
            typeSpeed: speed,
            loop: false,
            showCursor: false,
        });
    }, timeout);
};


var isActiveScrollSection = function (id, callback) {
    if (isScrolledIntoView('#' + id + ' .text-block > p')) {
        if (!$('#about > section.' + id).hasClass('move')) {
            $('#about > section.' + id).addClass('move');
            if (callback) {
                callback();
            }
        }
    }
};

var activarAnimaciones = function () {
    window.addEventListener("scroll", function () {
        isActiveScrollSection('punto-fuerte', activeTyping);
        isActiveScrollSection('analisis');
        isActiveScrollSection('tecnologies');
        isActiveScrollSection('seo');
    });

};

var suavizarScroll = function () {
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
};
var isScrolledIntoView = function (elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
};


window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

function goToByScroll(id, time) {
    id = id.replace("link", "");
    $('html,body').animate({ scrollTop: $("#" + id).offset().top }, time);
}


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