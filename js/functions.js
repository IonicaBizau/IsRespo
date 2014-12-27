$(document).ready(function() {

    function queryString (name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)")
          , results = regex.exec(location.search)
          ;
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    var $iframe = $("iframe")
      , src = queryString("site") || "demo.html"
      , url = null
      ;

    // Default url to load
    $iframe.attr("src", src);

    // Write the url
    $(".url-to-load").on("keyup", function (e) {
        if (e.keyCode !== 13) { return; }
        url = $(this).val().replace(/^\W+/, "");
        if (!/^http/i.test(url) && !/^file:/i.test(url)) {
            $(this).val(url = "http://" + url);
        }

        // Check if we can load it into an iframe
        $.ajax({
            url: "http://urlreq.appspot.com/req?method=GET&url=" + encodeURIComponent(url) + "&debugMode=1"
          , success: function (res) {
                if (!/x-frame-options: (sameorigin|deny)/i.test(res)) {
                    return;
                }
                $iframe.attr("src", "not-allowed.html");
            }
        });

        $iframe.attr("src", url);
    });

});
