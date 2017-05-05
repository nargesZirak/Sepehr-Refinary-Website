

$(window).on({
    'load':function(){
        var backgroundImageContainerHeight= ($(window).width())*1;
        if ($(window).width() < 800) {
            $(".item").height(backgroundImageContainerHeight); 
            
        }
        if ($(window).width()>= 800) {
            $(".item").height(600); 
        }
    },
    'resize':function(){
        var backgroundImageContainerHeight= ($(window).width())*1;
        if ($(window).width() < 800) {
            $(".item").height(backgroundImageContainerHeight); 
           
        }
        if ($(window).width()>= 800) {
            $(".item").height(600); 
        }
    }
});


