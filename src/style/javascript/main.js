window.addEventListener('load', function () {
  var element = document.getElementById('swipe');
  var hammertime = Hammer(element).on("swipeleft swiperight", function (event) {
    $('#swipe').toggleClass('yellow');
    console.log(event.type);
  });
});