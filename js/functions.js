$(document).ready(function() {

    function queryString (name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    $("iframe").attr("src", queryString("site"));

    $(".url-to-load").on("keyup", function (e) {
        if (e.keyCode !== 13) { return; }
        var url = $(this).val().replace(/^\W+/, "");

        /*
         * Append protocol to domain if it wasn't provided
         * Use HTTP protocol by default. It will switch to HTTPS if web server will redirect to it
         */
        if (!/^http/i.test(url) && !/^file:/i.test(url)) {
            $(this).val(url = "http://" + url);
        }

        $("iframe").attr("src", url);
    });
});
