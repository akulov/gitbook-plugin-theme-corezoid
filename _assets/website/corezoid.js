require(['gitbook', 'jquery'], function (gitbook, $) {

    function setBookBodyHeight() {
        var gH = $(window).height();
        var hH = $('.header-inner').outerHeight();
        var $bookBody = $('.body-wrapper .book');

        $bookBody.css('height', gH - hH);
    }

    function setLangsUrl() {
        var pageUrl = window.location.pathname.slice(3);
        var $langsLinks = $('.langs li a');

        $langsLinks.each(function () {
            var $lang = $(this).data('lang');

            $(this).attr('href', '/' + $lang + pageUrl);
        });
    }

    gitbook.events.on('page.change', function () {
        setBookBodyHeight();
        setLangsUrl();
    });

    $(window).on('resize', function () {
        setBookBodyHeight();
    })
});
