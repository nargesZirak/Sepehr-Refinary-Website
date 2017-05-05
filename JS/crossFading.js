$(function() {
var bgImageArray = ["1.png", "2.png", "3.png", "4.png"];

secs = 2;
bgImageArray.forEach(function(img){
    new Image().src = img; 
    // caches images, avoiding white flash between background replacements
});

function backgroundSequence() {
    console.log("HIIIII!!!");
    console.log(bgImageArray.length);
	window.clearTimeout();
	var k = 0;
	for (i = 0; i < bgImageArray.length; i++) {
        console.log("YOU "+i);
		setTimeout(function(){ 
            console.log("url(" +bgImageArray[k] + ") ");
		    $("main-page-container").css("background", "url(" +bgImageArray[k] + ")");
			console.log("I "+i+"  K "+k);
            if ((k + 1) === bgImageArray.length) { setTimeout(function() { backgroundSequence() }, (secs * 1000))}
            else { k++; }			
            }, (secs * 1000) * i)	
	}
}
backgroundSequence();

});