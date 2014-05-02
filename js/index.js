$(document).ready(function () {

    function queryString (name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    // on change
    $("select.language").on("change", function () {
        // set the new language
        $.setLanguage({
            attribute: "data-lang"
          , lang: $(this).val()
        });
    }).val(
        queryString ("lang") ||
        (window.navigator.userLanguage || window.navigator.language).split("-")[0]
    ).change();

    // full page configuration
    $.fn.fullpage({
        "verticalCentered": false
      , "css3": true
      , "slidesColor": [
            "#123252"
          , "#fff"
          , "#2980b9"
        ]
      , "navigation": true
      , "navigationPosition": "right"
      , "fixedElements": "#demosMenu"
      , 'afterLoad': function(anchorLink, index){
            var map = {
                "2": {
                    image: "#mobile"
                  , addClass: "fadeInLeft animated"
                }
              , "3": {
                    image: "#laptop"
                  , addClass: "fadeInUp animated"
                }
            };

            if (!map[index]) return;

            $(map[index].image).show().addClass(map[index].addClass);
        }
      , afterRender: function(){
            $("html").fadeIn(1000);
        }
    });
});
