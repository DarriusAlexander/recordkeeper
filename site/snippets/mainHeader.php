<head>
<?php echo css('assets/css/main.css') ?>
  <?php echo css('assets/css/booking-manager.css') ?>
  <?php echo css('assets/css/default.css') ?>
  <?php echo css('assets/css/default.date.css') ?>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">

  <title><?php echo $site->title()->html() ?> | <?php echo $page->title()->html() ?></title>
  <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <meta http-equiv="content-language" content="cs" />
    <meta name="keywords" content="" />
    <meta name="description" content="" />
    <meta name="author" content="Online Factory" />
    <meta name="robots" content="all" />
    
    <meta property="og:image" content="assets/images/logo_fb.jpg" />
    <meta property="og:title" content="" />
    <meta property="og:description" content="" />
    <meta property="og:url" content="index.html" />
    <meta property="og:type" content="website" />
	
	
    <link rel="shortcut icon" href="assets/images/favicon.ico" />
    <link href="assets/css/main572a.css?ver=3_91" media="screen" rel="stylesheet" type="text/css" />
    <link href="assets/css/normalize.css?ver=3_91" media="screen" rel="stylesheet" type="text/css" />

    <script src="assets/code.jquery.com/jquery-1.8.3.min572a.js?ver=3_91" type="text/javascript"></script>
    <script src="assets/js/jquery.preloader-1.0.0572a.js?ver=3_91" type="text/javascript"></script>
    <script src="assets/js/jq_config572a.js?ver=3_91" type="text/javascript"></script>
    
    <script src="assets/js/jquery.effects.core.min572a.js?ver=3_91" type="text/javascript"></script>
    <script src="assets/js/jquery.effects.slide.min572a.js?ver=3_91" type="text/javascript"></script>
    <script src="assets/js/jquery.effects.blind.min572a.js?ver=3_91" type="text/javascript"></script>
    <script src="assets/js/jquery.superbgimage.min572a.js?ver=3_91" type="text/javascript"></script>
    
	    		<script src="assets/js/menu572a.js?ver=3_91" type="text/javascript"></script>
		<script src="assets/js/parallax572a.js?ver=3_91" type="text/javascript"></script>
		<script src="assets/js/jquery.easing.1.3572a.js?ver=3_91" type="text/javascript"></script>
		<script src="assets/js/jquery.vgrid.min572a.js?ver=3_91" type="text/javascript"></script>
	   
    
    
    
        <script type="text/javascript">

jQuery(function() {
	// Options for SuperBGImage
	jQuery.fn.superbgimage.options = {
		id: 'superbgimage', // id for the containter
		z_index: 0, // z-index for the container
		inlineMode: 0, // 0-resize to browser size, 1-do not resize to browser-size
		showimage: 1, // number of first image to display
		vertical_center: 1, // 0-align top, 1-center vertical
		transition: 1, // 0-none, 1-fade, 2-slide down, 3-slide left, 4-slide top, 5-slide right, 6-blind horizontal, 7-blind vertical, 90-slide right/left, 91-slide top/down
		transitionout: 1, // 0-no transition for previous image, 1-transition for previous image
		randomtransition: 0, // 0-none, 1-use random transition (0-7)
		slideshow: 1, // 0-none, 1-autostart slideshow
		slide_interval: 8000, // interval for the slideshow
		randomimage: 1, // 0-none, 1-random image
		speed: 1500, // animation speed
		preload:1,
        zoomEfect: 1,
        zoomEfect_interval: 12000
	};
	
	my_slideshowActive = true;
	
	// initialize SuperBGImage
	jQuery('#rotator').superbgimage().hide();
	
});
    </script>
    
<style>
.slideshow{position: absolute;width: 100vw;height: 100vh;overflow: hidden}.slideshow-image{position: absolute;width: 100%;height: 100%;background: no-repeat 50% 50%;background-size: cover;animation-name: kenburns;animation-timing-function: linear;animation-iteration-count: infinite;animation-duration: 40s;opacity: 1;transform: scale(1.2)}.slideshow-image:nth-child(1){animation-name: kenburns-1;z-index: 3}.slideshow-image:nth-child(2){animation-name: kenburns-2;z-index: 2}.slideshow-image:nth-child(3){animation-name: kenburns-3;z-index: 1}.slideshow-image:nth-child(4){animation-name: kenburns-4;z-index: 0}@keyframes kenburns-1{0%{opacity: 1;transform: scale(1.2)}0.625%{opacity: 1}24.375%{opacity: 1}25.625%{opacity: 0;transform: scale(1)}100%{opacity: 0;transform: scale(1.2)}99.375%{opacity: 0;transform: scale(1.20488)}100%{opacity: 1}}@keyframes kenburns-2{24.375%{opacity: 1;transform: scale(1.2)}25.625%{opacity: 1}49.375%{opacity: 1}50.625%{opacity: 0;transform: scale(1)}100%{opacity: 0;transform: scale(1.2)}}@keyframes kenburns-3{49.375%{opacity: 1;transform: scale(1.2)}50.625%{opacity: 1}74.375%{opacity: 1}75.625%{opacity: 0;transform: scale(1)}100%{opacity: 0;transform: scale(1.2)}}@keyframes kenburns-4{74.375%{opacity: 1;transform: scale(1.2)}75.625%{opacity: 1}99.375%{opacity: 1}100%{opacity: 0;transform: scale(1)}}h1{position: absolute;top: 50%;left: 50%;transform: translate3d(-50%, -50%, 0);z-index: 99;text-align: center;font-family: Raleway, sans-serif;font-weight: 300;text-transform: uppercase;background-color: rgba(255, 255, 255, .75);box-shadow: 0 1em 2em -1em rgba(0, 0, 0, .5);padding: 1em 2em;line-height: 1.5}h1 small{display: block;text-transform: lowercase;font-size: 0.7em}h1 small:first-child{border-bottom: 1px solid rgba(0, 0, 0, .25);padding-bottom: 0.5em}h1 small:last-child{border-top: 1px solid rgba(0, 0, 0, .25);padding-top: 0.5em}
 

 
 
  </style>
  
  
  	<link href="assets/css/hp572a.css?ver=3_91" media="screen" rel="stylesheet" type="text/css" />
	    		<script src="assets/js/intro572a.js?ver=3_91" type="text/javascript"></script>
		<script src="assets/js/menu572a.js?ver=3_91" type="text/javascript"></script>
		<script src="assets/js/parallax572a.js?ver=3_91" type="text/javascript"></script>
	        
    


</head>