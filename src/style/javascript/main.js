window.addEventListener('load', function () {
	var element = document.getElementById('swipe');
	var hammertime = Hammer(element).on("swipeleft swiperight", function (event) {
		$('#swipe').toggleClass('blue');
		console.log(event.type);
	});
});

$(document).ready(function() {
	if ($('.overlay').is(":visible")) {
		$('.navbar').hide();
	};
	$('.button-text').click(function() {
		$('.overlay').fadeOut('slow');
		$('.navbar').show();
	})
});