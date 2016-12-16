require(['gitbook', 'jquery'], function (gitbook, $) {

    function setLangs() {
        var pageUrl = window.location.pathname.slice(3);
        var $langsLinks = $('.langs li a');

        $langsLinks.each(function () {
            var $lang = $(this).html();
            var currentLang = gitbook.state.innerLanguage;

            $(this).attr('href', '/' + $lang + pageUrl);
            if ($lang === currentLang) {
                $(this).addClass('active');
            }
        });
    }

    gitbook.events.on('page.change', function () {
        setLangs();
    });
});
