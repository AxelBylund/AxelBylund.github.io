window.addEventListener('load', function () {
  var element = document.getElementById('swipe');
  var hammertime = Hammer(element).on("swipeleft swiperight", function (event) {
    if ("vibrate" in navigator) {
		// vibration API supported 
		navigator.vibrate(1000);
	}
    $('#swipe').toggleClass('blue');
    console.log(event.type);
  });
});