

$(window).on({
    'load':function(){
        var backgroundImageContainerHeight= ($(window).width())*0.6;
        if ($(window).width() < 800) {
            $(".main-page-container").height(backgroundImageContainerHeight); 
            console.log("height is"+ backgroundImageContainerHeight);
        }
        if ($(window).width()>= 800) {
            $(".main-page-container").height(500); 
        }
    },
    'resize':function(){
        var backgroundImageContainerHeight= ($(window).width())*0.6;
        if ($(window).width() < 800) {
            $(".main-page-container").height(backgroundImageContainerHeight); 
        }
        if ($(window).width()>= 800) {
            $(".main-page-container").height(500); 
        }
    }
});


