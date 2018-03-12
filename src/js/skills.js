


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