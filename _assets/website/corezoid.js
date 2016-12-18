require(['gitbook', 'jquery'], function(gitbook, $) {

    function setLangs() {
        var pageUrl = window.location.pathname.slice(3);
        var $langsLinks = $('.langs li a');

        $langsLinks.each(function() {
            var $lang = $(this).html();
            var currentLang = gitbook.state.innerLanguage;

            $(this).attr('href', '/' + $lang + pageUrl);
            if ($lang === currentLang) {
                $(this).addClass('active');
            }
        });
    }

    function toggleSearchFocus() {
        var $search = $('#book-search-input');

        $search.on('focus blur', 'input', function() {
            $search.toggleClass('focus');
        });
    }

    gitbook.events.on('start', function() {
        toggleSearchFocus();
    });

    gitbook.events.on('page.change', function() {
        setLangs();
    });
});
