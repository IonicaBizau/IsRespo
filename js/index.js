$(document).ready(function () {
    // on change
    $("select.language").on("change", function () {
        // set the new language
        $.setLanguage({
            attribute: "data-lang"
          , lang: $(this).val()
        });
    }).change();

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
      , "navigationTooltips": [
            "Welcome"
          , "What is «IsRespo?»"
          , "Simple and Beautiful"
          , "Test it"
        ]
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
