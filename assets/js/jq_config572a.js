$(document).ready(function () {
    var home = document.location.hash;
    home = home.replace(/^.*#/, '');
    
//     closepopup();
//     var cookiename = "openpopup";
//
//     var mycook = readCookie(cookiename);
//     if(mycook == null || mycook == "")
//       openpopup(cookiename, false);
//     else
//       openpopup(cookiename, true);

    if(home=='home'){
        $("#page").css({"display":"block"});
        $("#intro_table").css({"display":"none"});
        $("#topmenu.displ").css({"display":"block"});
        $('body').css({'overflow': 'auto'});
    }
    
    (function(jQuery) {
	
      $.ajax({
        url: '/briefcase/count/',
        success: function(data) {
          $('#number span').html(data);                
        }
      });
  
    	// Stills Rollover
    	$('.still').on('mouseenter', function(e) {
    		c = $(this).attr('class').split(' ');
    		targetClass=c[1];
    		$('.still').each(function(){
    			d = $(this).attr('class').split(' ');	
    			this_class=d[1];
    			if(this_class==targetClass){ $(this).children('.overlay, .text').css({'display':'block'}); }
    		});
    	});
    	$('.still').on('mouseleave', function(e) {
    		$('.still').children('.overlay, .text').css({'display':'none'});
    	});
        
        $('.article').on('mouseenter', function(e) {
			$(this).children('.overlay').css({'display':'block'});
			$(this).children('.text').css({'display':'block'});
			//jQuery(this).children('.perma').css({'display':'block'});
    	});
    	$('.article').on('mouseleave', function(e) {
    			$(this).children('.overlay').css({'display':'none'});
    			$(this).children('.text').css({'display':'none'});
    			//jQuery(this).children('.perma').css({'display':'none'});
    	 });
        
        
    })(jQuery);
    
    $("#deleteall, .deleteall").click(function(){
      $.ajax({
        url: '/briefcase/delete/',
        success: function(data) {
          $('#briefcase_content').html(data);
          $('#number span').html(0);          
        }
      });
    });

    $("#saveorder").click(function(){
      $.ajax({
        url: '/briefcase/saveorder/',
        success: function(data) {         
        }
      });
    });
        
    $('body').on('click', '#slideshow', function(event) {
    //jQuery('#slideshow').live('click', function() {
		if(!my_slideshowActive){
			jQuery('#pagination').startSlideShow();
			 jQuery(this).removeClass('play');
			 jQuery(this).addClass('pause');
			my_slideshowActive=true;
		}else{
			jQuery('#pagination').stopSlideShow();
			 jQuery(this).removeClass('pause');
			 jQuery(this).addClass('play');
			my_slideshowActive=false;
		}
		return false;
	});

	$('body').on('click', '.addtobriefcase', function(event) {
      $.ajax({
        url: '/briefcase/add/' + $('#topmenu #top_white #top_white_ctn #pagination .activeslide').attr('id') + '/',
        success: function(data) {
          $('#briefcase_content').html(data);
          if($('#sortable').html())          
            $('#sortable').sortable();
            $.ajax({
              url: '/briefcase/count/',
              success: function(data) {
                $('#number span').html(data);                
              }
            });          
        }
      });      
    });
	
	$('body').on('click', '.deletefrombriefcase', function(event) {	
      $.ajax({
        url: '/briefcase/deleteone/' + this.id,
        success: function(data) {
          $('#briefcase_content').html(data);   
          if($('#sortable').html())   		          
            $('#sortable').sortable();
            $.ajax({
              url: '/briefcase/count/',
              success: function(data) {
                $('#number span').html(data);                
              }
            });          
        }
      }); 
	});
    
    $("#logo_normal").mouseover(function () {
        $("#logo_normal").fadeOut("slow");
        $("#logo_hover").fadeIn("slow");
    });
    
    $("#logo_hover").mouseout(function () {
        $("#logo_hover").fadeOut("slow");
        $("#logo_normal").fadeIn("slow");
    });
    
    $("#introclick").click(function () {
        $("#page").fadeIn();
        $("#intro_table").fadeOut();
        $("#topmenu.displ").css({"display":"block"});
        $('body').css({'overflow': 'auto'});
        
        return false;
    });
    $(".burningMan-link.stay-here").click(function () {
        $("#intro_table_burning_man").css({"display":"none"});
        $("#page").fadeIn();
        $("#intro_table").fadeOut();
        $("#topmenu.displ").css({"display":"block"});
        $('body').css({'overflow': 'auto'});
        return false;
    });
    
    $('#topmenu').css('opacity', 0.50); 
    $('#topmenu') 
        .hover(function() { 
            $(this).stop().animate({ opacity: 1.0 }, 500); 
        }, 
        function() { 
            $(this).stop().animate({ opacity: 0.50 }, 500); 
        });
    
    if($("#toptopmenu #more").length) {
      $('#toptopmenu li#more').hover(function () {
        clearTimeout($.data(this, 'timer'));
        $('ul#submenu', this).stop(true, true).slideDown(500);
      }, function () {
        $.data(this, 'timer', setTimeout($.proxy(function() {
        $('ul#submenu', this).stop(true, true).slideUp(500);
        }, this), 1500));
      });
      
      $('#toptopmenu li#more a.sub-link').click(function (event) {
        event.preventDefault();
        $('ul#submenu', this).stop(true, true).slideDown(500);
      });
    }
    
    var $minheight = 680;
    var $minpagewidth = 1000; //sirka menu + stranky pro text, musime se od ni pak odrazit a vypocitat pozici menu, aby se pro ruzne sekce nepohybovalo
    var $widthmenu = 360; //sirka menu
    var $winheight = $(window).height();
    var $winwidth = $(window).width();
    $winwidth = $winwidth - 20;
    var $maxShineHeight = 800;
    var $widthlogo = 121;
    var $marginrightmenu = 20;
    
    
    if($winheight <= $minheight)
        $winheight = $minheight;
    if($winwidth <= $minpagewidth)
        $winwidth = $minpagewidth;
    
    var $res = ($winwidth - $minpagewidth) / 2;
    
    $("#pagetext").css({
       'min-height': $winheight - parseInt($("#pagetext").css("padding-top"))
    });
    
    var $w = 0;
    var w1 = 0;
    var w2 = 0;
    var w3 = 0;
    var w4 = 0;
    
    w2 = $widthmenu + $res - $widthlogo - $marginrightmenu; //121px velikost loga, 20 margin-right od menu
    //alert(w2 + ' - ' + $widthmenu + ' - ' + $res);  
    $("#topmenu #logo").css({
       'left': w2
    });
    
    w4 = $widthmenu + $res;
    $("#toptopmenu").css({
       'left': w4
    });
    
    //w3 = $minpagewidth + $res + 50;
    w3 = parseInt($("#toptopmenu").css("left"));
    w3 = w3 + 440 + 50;
    $("#topmenu #baggage").css({
       'left': w3
    });
    //alert($res);
    
    if($("#pagephoto").length) {
            
        $w = $minpagewidth;
        if($minpagewidth < $winwidth)
            $w = $minpagewidth + $res;
        
        w1 = $w - $widthmenu;
        
        //alert(w1 + " - " + $w + " - " + $widthmenu + " - " + $minpagewidth + " - " + $res);
        
        $("#page").css({
           'left': $res,
           'width': $w
        });
        
        $("#photocontent").css({
           'width': w1
        });
    }
    else
    {
        $("#page").css({
           'left': $res
        });
    }
    
    //alert($res + ' ' + $winwidth + ' ' + $w);
    
    if($("#shine").length)
    {
        //alert($winheight + ' ' + $maxShineHeight + ' ' + $('#page').height());
        if($winheight < $('#page').height())
        {
            
        }
    }
    
    $(window).bind("resize", function(){
        
        $winheight = $(window).height();
        $winwidth = $(window).width();
        
        if($winheight <= $minheight)
            $winheight = $minheight;
        if($winwidth <= $minpagewidth)
            $winwidth = $minpagewidth;
        
        $res = ($winwidth - $minpagewidth) / 2;
        
        $("#pagetext").css({
           'min-height': $winheight - parseInt($("#pagetext").css("padding-top"))
        });
        
        w2 = $widthmenu + $res - $widthlogo - $marginrightmenu; //121px velikost loga, 20 margin-right od menu
        $("#topmenu #logo").css({
           'left': w2
        });
        
        w4 = $widthmenu + $res;
        $("#toptopmenu").css({
           'left': w4
        });
        
        //w3 = $minpagewidth + $res + 50;
        w3 = parseInt($("#toptopmenu").css("left"));
        w3 = w3 + 440 + 50;
        $("#topmenu #baggage").css({
           'left': w3
        });
        
        if($("#pagephoto").length) {
            $w = $minpagewidth;
            if($minpagewidth < $winwidth)
                $w = $minpagewidth + $res;
            
            w1 = $w - $widthmenu;
            
            $("#page").css({
               'left': $res,
               'width': $w
            });
            
            //$("#photocontent").css({
//               'width': w1
//            });
        }
        else
        {
            $("#page").css({
               'left': $res
            });
        }
    
    });
});

function closepopup() {
  $( ".close-popup" ).click(function(event) {
    event.preventDefault();
    $( ".popupBurningMan" ).fadeOut( 800, function() {
      createCookie(cookiename, 1, 1);
    });
  });
}

function openpopup(cookiename, isOpenBefore) {
    var mytime = 5000;

    if(isOpenBefore)
      mytime = 40000;

    setTimeout(function(){
       $( ".popupBurningMan" ).fadeIn( 800, function() {});
       createCookie(cookiename, 1, 1)
    }, mytime);
}

//cookie
function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else var expires = "";
    document.cookie = escape(name) + "=" + escape(value) + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = escape(name) + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return unescape(c.substring(nameEQ.length, c.length));
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}