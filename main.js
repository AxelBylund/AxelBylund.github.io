$(function () {
  var googleUrl = "http://google.com/search?";

  function fetchAndInsertResults(inputText) {
    $.ajax({
      url: googleUrl + inputText,
      success: function (data) {
        $('#result').html(data);
      }
    });
  }

  $('#searchbutton').bind('submit', function () {
    this.preventDefault();
    var inputText = $('#searchForm').serialize();
    fetchAndInsertResults(inputText);
  });
});

$(function () {
  var availableTags = [
    "christina grimmie",
    "comviq",
    "comhem",
    "clas holson",
    "classroom",
    "clarion sign",
    "clearingnummer",
    "cloud nine",
    "clock",
    "cloetta",
    "cloverfield lane",
    "cloud 9",
    "cloudberry",
    "cloud gold club",
    "cloud atlast",
    "cloud nine lunch",
    "cloud nine kygo",
    "cloud nine meaning"
  ];
  $("#searchbox").autocomplete({
    source: function (request, response) {
      var results = $.ui.autocomplete.filter(availableTags, request.term);

      response(results.slice(0, 4));
    }
  });
});