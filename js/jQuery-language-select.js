/*
 *  jQuery language select
 *
 *  Show/hide elements in the page using one jQuery call.
 *
 *  Example
 *
 *    $.setLanguage({lang: "ro"});
 * */
(function ($) {

    $.setLanguage = function (options) {

        // merge options
        var settings = $.extend({
            attribute: "data-lang",
            lang: "en"
        }, options);

        // hide all elements with this attirbute
        $("[" + settings.attribute + "]").hide();

        // show the elements with this language
        $("[" + settings.attribute + "='" + settings.lang + "']").show();
    }
})($)
