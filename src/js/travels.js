



$(document).ready(function () {
    if ($('#about').length > 0) {

        window.addEventListener("scroll", function () {
            isActiveScrollSection('travels');
        });
    }
});


var showTravels = function () {
    $('.hide-section').addClass('show');
    goToByScroll('pasion', 1000);
};