window.addEventListener('load', function () {
  var element = document.getElementById('swipe');
  var hammertime = Hammer(element).on("swipeleft swiperight", function (event) {
    console.log(event.type);
  });
});