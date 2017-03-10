$(window).on({
    
    'load':function(){
        if ($(window).width() < 800) {
            $(".related-info-page-wrapper").show();
            $(".related-info-page-container").hide();
        }
        if ($(window).width()>= 800) {
            $(".related-info-page-wrapper").hide();
            $(".related-info-page-container").show();
        }
    },
    'resize':function(){
        if ($(window).width() < 800) {
            $(".related-info-page-wrapper").show();
            $(".related-info-page-container").hide();
        }
        if ($(window).width()>= 800) {
            $(".related-info-page-wrapper").hide();
            $(".related-info-page-container").show();
        }
    }
});
