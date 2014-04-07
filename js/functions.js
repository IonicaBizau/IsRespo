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
