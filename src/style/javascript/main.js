window.addEventListener('load', function () {
  var element = document.getElementById('swipe');
  var hammertime = Hammer(element).on("swipeleft swiperight", function (event) {
    $('#swipe').toggleClass('blue');
    console.log(event.type);
  });
});