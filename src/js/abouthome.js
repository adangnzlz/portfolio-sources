


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