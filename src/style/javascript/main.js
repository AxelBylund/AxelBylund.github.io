window.addEventListener('load', function () {
  var element = document.getElementById('swipe');
  var hammertime = Hammer(element).on("swipeleft swiperight", function (event) {
    navigator.vibrate([1000, 500, 1000]);
    $('#swipe').toggleClass('blue');
    console.log(event.type);
  });
});