window.addEventListener('load', function () {
    var element = document.getElementById('swipe');
    var hammertime = Hammer(element).on("swipeleft swiperight", function (event) {
        /*
        console.log(event.type);
        console.log(event.direction);
        */
        if (event.direction == 4) {
            console.log('nu kör vi höger');
            if ($('#swipe').hasClass('turquoise')) {
                $('#swipe').removeClass('turquoise');
                $('.left').removeClass('left-animation');
            }
            $('#swipe').addClass('orange');
        }
        if (event.direction == 2) {
            console.log('nu kör vi vänster');
            if ($('#swipe').hasClass('orange')) {
                $('#swipe').removeClass('orange');
                $('.left').addClass('left-animation');
            }
            $('#swipe').addClass('turquoise');
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
$('.middle').on('click', function () {
    $('.animatemeplease').addClass('mymove');
});