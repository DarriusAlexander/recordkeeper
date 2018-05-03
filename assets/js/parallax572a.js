$(document).ready(function() {
	
	//redrawDotNav();
	
	/* Scroll event handler */
    $(window).bind('scroll',function(e){
    	parallaxScroll();
		//redrawDotNav();
    });
});

/* Scroll the background layers */
function parallaxScroll(){
	var scrolled = $(window).scrollTop();
    console.log(scrolled);
	$('#shine').css('top',(0-(scrolled*.15))+'px');
}