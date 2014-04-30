function queryString (name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

$("iframe").attr("src", queryString("site"));

$(".url-to-load").on("keyup", function (e) {
    if (e.keyCode === 13) {
        $("iframe").attr("src", $(this).val());
    }
});


$(document).ready(function() {

    $.fn.fullpage({
        "verticalCentered": false
      , "css3": true
      , "slidesColor": [
            "#123252"
          , "#fff"
          , "#fff"
          , "#fff"
        ]
      , "navigation": true
      , "navigationPosition": "right"
      , "navigationTooltips": [
            "Welcome"
          , "What is «IsRespo?»"
          , "Simple and Beautiful"
          , "Test it"
        ]
      , "fixedElements": "#demosMenu"
      , afterRender: function(){
            $("html").fadeIn(1000);
        }
    });
});
