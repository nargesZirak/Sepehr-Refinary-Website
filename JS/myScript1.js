
$(window).on({
    
    'load':function(){
        var backgroundImageContainerHeight= ($(window).width())*0.6;
        if ($(window).width() < 800) {
            $('.related-info-col').height(350);
        }
        if ($(window).width()>= 800) {
            var maxHeight = 0;
            $('.related-info-col').each(function(){
                maxHeight = Math.max( maxHeight, $(this).height() );
            });
            $('.related-info-col').height(maxHeight);
        }
    },
    'resize':function(){
        var backgroundImageContainerHeight= ($(window).width())*0.6;
        if ($(window).width() < 800) {
            $('.related-info-col').height(350); 
        }
        if ($(window).width()>= 800) {
            var maxHeight = 0;
            $('.related-info-col').each(function(){
                maxHeight = Math.max( maxHeight, $(this).height() );
            });
            $('.related-info-col').height(maxHeight);
        }
    }
});
   
    


