require(['gitbook', 'jquery'],function( gitbook, $){

    function resetContainerHeight(){
        var gH = $(window).height();
        var hH = $('.header-inner').outerHeight();
        var $bookBody = $('.body-wrapper .book');
        $bookBody.css( 'height', gH - hH );
    }

    gitbook.events.on('page.change',function(){
        resetContainerHeight();
    })

    $(window).on('resize',function(){
        resetContainerHeight();
    })
})
