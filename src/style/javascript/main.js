window.addEventListener('load', function () {
    var element = document.getElementById('swipe');
    var hammertime = Hammer(element).on("swipeleft swiperight", function (event) {
        $('#swipe').toggleClass('orange');
        /*
        console.log(event.type);
        console.log(event.direction);
        */
        if (event.direction == 2) {
            console.log('nu kör vi vänster');
            $(this).switchClass('orange', 'turquoise', 1000, "easeInOutQuad");
        }
        else if (event.direction == 4) {
            console.log('nu kör vi höger');
        }
    });
});
$(document).ready(function () {
    if ($('.overlay').is(":visible")) {
        $('.navbar').hide();
    };
    $('.button-text').on('click', function () {
        $('.overlay').fadeOut('slow');
        $('.navbar').show();
        $('.left').hide().fadeIn(2000);
        $('.right').hide().fadeIn(5000);
    });
});