function superbgimage_show(img) {
	$('#superbgimage').css('background', 'none');
	$('#image_name').html($('#pagination a' + "[rel='" + img + "']").attr('title'));
	$('#image_name, #set_name, #add_to_lightbox').fadeIn('slow');
    var my = $('#pagination a' + "[rel='" + img + "']" + ' img').attr('class');
    if(my == "height-less")
    {
        $('#key-icon').attr('class', 'black');
        $('#add_to_lightbox').attr('class', 'black');
        $('#arrow-left').attr('class', 'black');
        $('#arrow-right').attr('class', 'black');
    }
    else
    {
        $('#key-icon').removeAttr('class');
        $('#add_to_lightbox').removeAttr('class');
        $('#arrow-left').removeAttr('class');
        $('#arrow-right').removeAttr('class');
    }
}

// function callback on hiding image
function superbgimage_hide(img) {
	jQuery('#image_name, #set_name, #add_to_lightbox').hide();
}

jQuery(function() {
	// Options for SuperBGImage
	image=1;
    
    var url = document.location.hash;
    url = url.replace(/^.*#/, '');
    
    if(url!='' && url !=undefined){
       image=url;
    }
    
	jQuery.fn.superbgimage.options = {
		id: 'superbgimage', // id for the containter
		z_index: 0, // z-index for the container
		inlineMode: 0, // 0-resize to browser size, 1-do not resize to browser-size
		showimage: image, // number of first image to display
		vertical_center: 1, // 0-align top, 1-center vertical
		transition: 1, // 0-none, 1-fade, 2-slide down, 3-slide left, 4-slide top, 5-slide right, 6-blind horizontal, 7-blind vertical, 90-slide right/left, 91-slide top/down
		transitionout: 1, // 0-no transition for previous image, 1-transition for previous image
		randomtransition: 0, // 0-none, 1-use random transition (0-7)
		slide_interval: 1500, // interval for the slideshow
		speed: 700, // animation speed
		preload:1,
		onShow: superbgimage_show,
		onHide: superbgimage_hide
	};
	
	my_slideshowActive = false;
	
	
	// initialize SuperBGImage
	jQuery('#pagination').superbgimage();
	   jQuery('#grid-icon').show();
	   jQuery('#key-icon').delay(1000).fadeIn();
       //.delay(2000).fadeOut(function() {
	   //});
	
	// prev slide
	jQuery('a#prev').click(function(e) {
		e.preventDefault();
		return jQuery('#pagination').prevSlide();
	});
	
	// next slide
	jQuery('a#next').click(function(e) {
		e.preventDefault();
		return jQuery('#pagination').nextSlide();
	});
		
	 
	//if number of slides is greater than 1 then show arrows
	//if(jQuery.superbg_imgIndex>1){
		
		// fade in arrow-left
		jQuery('#arrow-left').show();
		// fade in arrow-left
		jQuery('#arrow-right').show();
		
	//}
	
		minSWidth = 63;	
	maxSWidth = 0+minSWidth;
	jQuery('a.sub').each(function(){
			maxSWidth= maxSWidth + jQuery(this).outerWidth() + 12;
	});
	jQuery('ul#main-nav li#stills div').animate({width: maxSWidth+"px"}, { queue:false, duration:0});
		
});
	
//add keys pagination
jQuery(document).keydown(function(e) {
	switch(e.keyCode) {
	// User pressed “right” arrow
	case 39:
		return jQuery("#pagination").nextSlide();
	break;
	// User pressed “LEFT” arrow
	case 37:
		return jQuery("#pagination").prevSlide();
	break;
	}
});