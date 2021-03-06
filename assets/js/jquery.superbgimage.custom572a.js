/**
 * --------------------------------------------------------------------
 * jQuery-Plugin SuperBGimage - Scaling Fullscreen Backgrounds and Slideshow using jQuery
 * Version: 1.0, 29.08.2009
 *
 * by Andreas Eberhard, andreas.eberhard@gmail.com
 *                      http://dev.andreaseberhard.de/projects/superbgimage/
 *
 * Copyright (c) 2009 Andreas Eberhard
 * licensed under a Creative Commons Attribution 3.0
 *
 *  Inspired by 
 *	  Supersized - Fullscreen Slideshow jQuery Plugin
 *    http://buildinternet.com/project/supersized/
 *	  By Sam Dunn (www.buildinternet.com // www.onemightyroar.com)
 * --------------------------------------------------------------------
 * License:
 * http://creativecommons.org/licenses/by/3.0/
 * http://creativecommons.org/licenses/by/3.0/deed.de
 *
 * You are free:
 *       * to Share - to copy, distribute and transmit the work
 *       * to Remix - to adapt the work
 *
 * Under the following conditions:
 *       * Attribution. You must attribute the work in the manner specified
 *         by the author or licensor (but not in any way that suggests that
 *         they endorse you or your use of the work).
 * --------------------------------------------------------------------
 * Changelog:
 *    29.08.2009 initial Version 1.0
 * --------------------------------------------------------------------
 */
(function (jQuery) {
    jQuery.fn.superbgimage = function (loadingoptions) {
        var options = jQuery.extend(jQuery.fn.superbgimage.defaults, jQuery.fn.superbgimage.options, loadingoptions);
        jQuery.superbg_inAnimation = false;
        jQuery.superbg_slideshowActive = false;
        jQuery.superbg_imgIndex = 1;
        jQuery.superbg_imgActual = 1;
        jQuery.superbg_imgLast = -1;
        jQuery.superbg_imgSlide = 0;
        jQuery.superbg_interval = 0;
        jQuery.superbg_preload = 0;
        jQuery.superbg_direction = 0;
        jQuery.superbg_max_randomtrans = 7;
        jQuery.superbg_lasttrans = -1;
        jQuery.superbg_isIE6 = false;
        jQuery.superbg_firstLoaded = false;
        jQuery.superbg_saveId = jQuery(this).attr('id');
        if (jQuery('#' + options.id).length === 0) {
            jQuery('body').prepend('<div id="' + options.id + '" style="display:none;"></div>');
        } else {
            jQuery('body').prepend(jQuery('#' + options.id));
        }
        jQuery('#' + options.id).css('display', 'none').css('overflow', 'hidden').css('z-index', options.z_index);
        if (options.inlineMode === 0) {
            jQuery('#' + options.id).css('position', 'fixed').css('width', '100%').css('height', '100%').css('top', 0).css('left', 0);
        }
        if (options.reload) {
            jQuery('#' + options.id + ' img').remove();
        }
        jQuery('#' + options.id + ' img').hide().css('position', 'absolute');
        jQuery('#' + options.id).children('img').each(function () {
            jQuery(this).attr('rel', jQuery.superbg_imgIndex++);
            if (!options.showtitle) {
                jQuery(this).attr('title', '');
            }
        });
        jQuery(this).children('a').each(function () {
            jQuery(this).attr('rel', jQuery.superbg_imgIndex++).click(function () {
				window.location.hash=jQuery(this).attr('rel');																
                jQuery(this).superbgShowImage();
                return false;
            }).addClass('preload');
        });
        jQuery.superbg_imgIndex--;
        jQuery(window).bind('load', function () {
            jQuery(this).superbgLoad();
        });
        jQuery(window).bind('resize', function () {
            jQuery(this).superbgResize();
        });
        jQuery.superbg_isIE6 = /msie|MSIE 6/.test(navigator.userAgent);
        if (jQuery.superbg_isIE6 && (options.inlineMode === 0)) {
            jQuery('#' + options.id).css('position', 'absolute').width(jQuery(window).width()).height(jQuery(window).height());
            jQuery(window).bind('scroll', function () {
                jQuery(this).superbgScrollIE6();
            });
        }
        if (options.reload) {
            jQuery(this).superbgLoad();
        }
        return this;
    };
    jQuery.fn.superbgScrollIE6 = function () {
        var options = jQuery.extend(jQuery.fn.superbgimage.defaults, jQuery.fn.superbgimage.options);
        jQuery('#' + options.id).css('top', document.documentElement.scrollTop + 'px');
    };
    jQuery.fn.superbgLoad = function () {
        var options = jQuery.extend(jQuery.fn.superbgimage.defaults, jQuery.fn.superbgimage.options);
        if ((jQuery('#' + options.id).children('img').length > 0) || (jQuery('#' + jQuery.superbg_saveId).children('a').length > 0)) {
            jQuery('#' + options.id).show();
        }
        if ((typeof options.showimage != 'undefined') && (options.showimage >= 0)) {
            jQuery.superbg_imgActual = options.showimage;
        }
        if (options.randomimage === 1) {
            jQuery.superbg_imgActual = (1 + parseInt(Math.random() * (jQuery.superbg_imgIndex - 1 + 1), 10));
        }
        jQuery(this).superbgShowImage(jQuery.superbg_imgActual);
    };
    jQuery.fn.superbgimagePreload = function () {
        var options = jQuery.extend(jQuery.fn.superbgimage.defaults, jQuery.fn.superbgimage.options);
        clearInterval(jQuery.superbg_preload);
        if (!jQuery.superbg_firstLoaded && (jQuery('#' + jQuery.superbg_saveId).children('a').length > 0)) {
            jQuery.superbg_preload = setInterval("jQuery(this).superbgimagePreload()", 111);
            return;
        }
        jQuery('#' + jQuery.superbg_saveId).children('a.preload:first').each(function () {
            var imgrel = jQuery(this).attr('rel');
            var imgtitle = jQuery(this).attr('title');
            var img = new Image();
            jQuery(img).load(function () {
                jQuery(this).css('position', 'absolute').hide();
                if (jQuery('#' + options.id).children('img' + "[rel='" + imgrel + "']").length === 0) {
                    jQuery(this).attr('rel', imgrel);
                    if (options.showtitle === 1) {
                        jQuery(this).attr('title', imgtitle);
                    }
                    jQuery('#' + options.id).prepend(this);
                }
                img.onload = function () {};
            }).error(function () {
                img.onerror = function () {};
            }).attr('src', jQuery(this).attr('href'));
            jQuery.superbg_preload = setInterval("jQuery(this).superbgimagePreload()", 111);
        }).removeClass('preload');
    };
    jQuery.fn.startSlideShow = function () {
        var options = jQuery.extend(jQuery.fn.superbgimage.defaults, jQuery.fn.superbgimage.options);
        jQuery.superbg_imgSlide = jQuery.superbg_imgActual;
        if (jQuery.superbg_interval !== 0) {
            clearInterval(jQuery.superbg_interval);
        }
        jQuery.superbg_interval = setInterval("jQuery(this).nextSlide()", options.slide_interval);
        jQuery.superbg_slideshowActive = true;
        return false;
    };
    jQuery.fn.stopSlideShow = function () {
        var options = jQuery.extend(jQuery.fn.superbgimage.defaults, jQuery.fn.superbgimage.options);
        clearInterval(jQuery.superbg_interval);
        jQuery.superbg_slideshowActive = false;
        return false;
    };
    jQuery.fn.nextSlide = function () {
		
        
        var options = jQuery.extend(jQuery.fn.superbgimage.defaults, jQuery.fn.superbgimage.options);
		if (jQuery.superbg_inAnimation) return false;
		if (jQuery.superbg_slideshowActive) {
			clearInterval(jQuery.superbg_preload);
		}
		
		jQuery.superbg_direction = 0;
        jQuery.superbg_imgSlide++;
  
    //console.log(jQuery.superbg_imgSlide + ' ' + jQuery.superbg_imgIndex + ' ' + window.location.pathname);
		if (jQuery.superbg_imgSlide > jQuery.superbg_imgIndex) {
            window.location.href = window.my_data.url.next;
		        return false; 
            
            //if(window.location.pathname!='/')
//            {
//              window.location.hash=jQuery.superbg_imgSlide;
//              //jQuery.superbg_imgSlide = 1;
//              jQuery.superbg_imgActual = jQuery.superbg_imgSlide;
//    		      return jQuery(this).superbgShowImage(jQuery.superbg_imgActual);
//            }
//            else
//            {
//              
//            }
			   
		}else{
			//alert(window.location.pathname);
			if(window.location.pathname!='/'){window.location.hash=jQuery.superbg_imgSlide;}
			jQuery.superbg_imgActual = jQuery.superbg_imgSlide;
			return jQuery(this).superbgShowImage(jQuery.superbg_imgActual);
		}
        if (options.randomimage === 1) {
            jQuery.superbg_imgSlide = (1 + parseInt(Math.random() * (jQuery.superbg_imgIndex - 1 + 1), 10));
            while (jQuery.superbg_imgSlide === jQuery.superbg_imgLast) {
                jQuery.superbg_imgSlide = (1 + parseInt(Math.random() * (jQuery.superbg_imgIndex - 1 + 1), 10));
            }
        }
    };
    jQuery.fn.prevSlide = function () {
       
        var options = jQuery.extend(jQuery.fn.superbgimage.defaults, jQuery.fn.superbgimage.options);
        if (jQuery.superbg_inAnimation) return false;
			
		jQuery.superbg_direction = 1;
        jQuery.superbg_imgSlide--;
        var url = document.location.hash;
        url = url.replace(/^.*#/, '');
        //console.log(jQuery.superbg_imgSlide + ' ' + window.my_data.url.prev + ' ' + window.location.pathname + ' ' + url);
        
        
		if (jQuery.superbg_imgSlide < 1) {
			 //redirect to new page
            
             
			 window.location.href = window.my_data.url.prev;
             return false;
             
             //if(window.location.pathname=='/'){
//				jQuery.superbg_imgSlide = 1;
//				jQuery.superbg_imgActual = jQuery.superbg_imgSlide;
//				return jQuery(this).superbgShowImage(jQuery.superbg_imgActual); 
//			 }else{
//				 
//			 }
		}else{
			//alert(window.location.pathname);
			if(window.location.pathname!='/'){window.location.hash=jQuery.superbg_imgSlide;}
			window.location.hash=jQuery.superbg_imgSlide;
			jQuery.superbg_imgActual = jQuery.superbg_imgSlide;
			return jQuery(this).superbgShowImage(jQuery.superbg_imgActual);
		}
        if (options.randomimage === 1) {
            jQuery.superbg_imgSlide = (1 + parseInt(Math.random() * (jQuery.superbg_imgIndex - 1 + 1), 10));
            while (jQuery.superbg_imgSlide === jQuery.superbg_imgLast) {
                jQuery.superbg_imgSlide = (1 + parseInt(Math.random() * (jQuery.superbg_imgIndex - 1 + 1), 10));
            }
        }
        
        
        //var options = jQuery.extend(jQuery.fn.superbgimage.defaults, jQuery.fn.superbgimage.options);
//        if (jQuery.superbg_inAnimation) return false;
//			
//		jQuery.superbg_direction = 1;
//        jQuery.superbg_imgSlide--;
//		if (jQuery.superbg_imgSlide < 1) {
//            //redirect to new page
//            //jQuery.superbg_imgSlide = jQuery.superbg_imgIndex;
////            if(window.location.pathname!='/'){window.location.hash=jQuery.superbg_imgSlide;}
////            window.location.hash=jQuery.superbg_imgSlide;
////            jQuery.superbg_imgActual = jQuery.superbg_imgSlide;
////            return jQuery(this).superbgShowImage(jQuery.superbg_imgActual);
//        window.location.href = window.my_data.url.prev;
//				return false; 
//		}else{
//			//alert(window.location.pathname);
//			if(window.location.pathname!='/'){window.location.hash=jQuery.superbg_imgSlide;}
//			window.location.hash=jQuery.superbg_imgSlide;
//			jQuery.superbg_imgActual = jQuery.superbg_imgSlide;
//			return jQuery(this).superbgShowImage(jQuery.superbg_imgActual);
//		}
//        if (options.randomimage === 1) {
//            jQuery.superbg_imgSlide = (1 + parseInt(Math.random() * (jQuery.superbg_imgIndex - 1 + 1), 10));
//            while (jQuery.superbg_imgSlide === jQuery.superbg_imgLast) {
//                jQuery.superbg_imgSlide = (1 + parseInt(Math.random() * (jQuery.superbg_imgIndex - 1 + 1), 10));
//            }
//        }
    };
    jQuery.fn.superbgResize = function () {
        var options = jQuery.extend(jQuery.fn.superbgimage.defaults, jQuery.fn.superbgimage.options);
        var thisimg = jQuery('#' + options.id + ' img.activeslide');
        var dimensions = jQuery(this).superbgCalcSize(jQuery(thisimg).width(), jQuery(thisimg).height());
        var newwidth = dimensions[0];
        var newheight = dimensions[1];
        var newleft = dimensions[2];
        var newtop = dimensions[3];
        jQuery(thisimg).css('width', newwidth + 'px');
        jQuery(thisimg).css('height', newheight + 'px');
        if (jQuery.superbg_isIE6 && (options.inlineMode === 0)) {
            jQuery('#' + options.id).width(newwidth).height(newheight);
            jQuery(thisimg).width(newwidth);
            jQuery(thisimg).height(newheight);
        }
        jQuery(thisimg).css('left', newleft + 'px');
        if (options.vertical_center === 1) {
            jQuery(thisimg).css('top', newtop + 'px');
        } else {
            jQuery(thisimg).css('top', '0px');
        }
    };
    jQuery.fn.superbgCalcSize = function (imgw, imgh) {
        var options = jQuery.extend(jQuery.fn.superbgimage.defaults, jQuery.fn.superbgimage.options);
        var browserwidth = jQuery(window).width();
        var browserheight = jQuery(window).height();
        if (options.inlineMode === 1) {
            browserwidth = jQuery('#' + options.id).width();
            browserheight = jQuery('#' + options.id).height();
        }
        var ratio = imgh / imgw;
        var newheight = 0;
        var newwidth = 0;
        if ((browserheight / browserwidth) > ratio) {
            newheight = browserheight;
            newwidth = Math.round(browserheight / ratio);
        } else {
            newheight = Math.round(browserwidth * ratio);
            newwidth = browserwidth;
        }
        var newleft = Math.round((browserwidth - newwidth) / 2);
        var newtop = Math.round((browserheight - newheight) / 2);
        var rcarr = [newwidth, newheight, newleft, newtop];
        return rcarr;
    };
    jQuery.fn.superbgShowImage = function (img) {
        var options = jQuery.extend(jQuery.fn.superbgimage.defaults, jQuery.fn.superbgimage.options);
        jQuery.superbg_imgActual = jQuery(this).attr('rel');
        if (typeof img !== 'undefined') {
            jQuery.superbg_imgActual = img;
        }
        if (jQuery('#' + options.id + ' img.activeslide').attr('rel') === jQuery.superbg_imgActual) {
            return false;
        }
        if (jQuery.superbg_inAnimation) {
            return false;
        } else {
            jQuery.superbg_inAnimation = true;
        }
        var imgsrc = '';
        var imgtitle = '';
        if (jQuery('#' + options.id).children('img' + "[rel='" + jQuery.superbg_imgActual + "']").length === 0) {
            imgsrc = jQuery('#' + jQuery.superbg_saveId + ' a' + "[rel='" + jQuery.superbg_imgActual + "']").attr('href');
            imgtitle = jQuery('#' + jQuery.superbg_saveId + ' a' + "[rel='" + jQuery.superbg_imgActual + "']").attr('title');
        } else {
            imgsrc = jQuery('#' + options.id).children('img' + "[rel='" + jQuery.superbg_imgActual + "']").attr('src');
        }
        if ((typeof options.onHide === 'function') && (options.onHide !== null) && (jQuery.superbg_imgLast >= 0)) {
            options.onHide(jQuery.superbg_imgLast);
        }
        jQuery('#' + options.id + ' img.activeslide').superbgLoadImage(imgsrc, imgtitle);
        jQuery('#' + jQuery.superbg_saveId + ' a').removeClass('activeslide');
        jQuery('#' + jQuery.superbg_saveId).children('a' + "[rel='" + jQuery.superbg_imgActual + "']").addClass('activeslide');
        jQuery.superbg_imgSlide = jQuery.superbg_imgActual;
        jQuery.superbg_imgLast = jQuery.superbg_imgActual;
        return false;
    };
    jQuery.fn.superbgLoadImage = function (imgsrc, imgtitle) {
        var options = jQuery.extend(jQuery.fn.superbgimage.defaults, jQuery.fn.superbgimage.options);
        if (jQuery('#' + options.id).children('img' + "[rel='" + jQuery.superbg_imgActual + "']").length === 0) {
            var img = new Image();
            jQuery(img).load(function () {
                jQuery(this).css('position', 'absolute').hide();
                if (jQuery('#' + options.id).children('img' + "[rel='" + jQuery.superbg_imgActual + "']").length === 0) {
                    jQuery(this).attr('rel', jQuery.superbg_imgActual);
                    if (options.showtitle === 1) {
                        jQuery(this).attr('title', imgtitle);
                    }
                    jQuery('#' + options.id).prepend(this);
                }
                var thisimg = jQuery('#' + options.id).children('img' + "[rel='" + jQuery.superbg_imgActual + "']");
                var dimensions = jQuery(this).superbgCalcSize(img.width, img.height);
                jQuery(this).superbgTransition(thisimg, dimensions);
                if (!jQuery.superbg_firstLoaded) {
                    if (options.slideshow === 1) {
                        jQuery(this).startSlideShow();
                    }
                    if ((options.preload === 1) && (jQuery('#' + jQuery.superbg_saveId).children('a').length > 0)) {
                        jQuery.superbg_preload = setInterval("jQuery(this).superbgimagePreload()", 250);
                    }
                }
                jQuery.superbg_firstLoaded = true;
                img.onload = function () {};
            }).error(function () {
                jQuery.superbg_inAnimation = false;
                img.onerror = function () {};
            }).attr('src', imgsrc);
           // alert(imgsrc);
           // jQuery('meta[name=fb_img]').attr("content", imgsrc);
            if(imgtitle) {
           	 //jQuery('title').text('Sam Robison - ' + imgtitle);
            }
        } else {
            var thisimg = jQuery('#' + options.id).children('img' + "[rel='" + jQuery.superbg_imgActual + "']");
            var dimensions = jQuery(this).superbgCalcSize(jQuery(thisimg).width(), jQuery(thisimg).height());
            jQuery(this).superbgTransition(thisimg, dimensions);
            if (!jQuery.superbg_firstLoaded) {
                if (options.slideshow === 1) {
                    jQuery(this).startSlideShow();
                }
                if ((options.preload === 1) && (jQuery('#' + jQuery.superbg_saveId).children('a').length > 0)) {
                    jQuery.superbg_preload = setInterval("jQuery(this).superbgimagePreload()", 250);
                }
                jQuery.superbg_firstLoaded = true;
            }
            
           // alert(imgtitle);
            //jQuery('meta[name=fb_img]').attr("content", imgsrc);
            if(imgtitle) {
           	 //jQuery('title').text('Sam Robison - ' + imgtitle);
            }
        }
    };
    jQuery.fn.superbgTransition = function (thisimg, dimensions) {
        var options = jQuery.extend(jQuery.fn.superbgimage.defaults, jQuery.fn.superbgimage.options);
        var newwidth = dimensions[0];
        var newheight = dimensions[1];
        var newleft = dimensions[2];
        var newtop = dimensions[3];
        jQuery(thisimg).css('width', newwidth + 'px').css('height', newheight + 'px').css('left', newleft + 'px');
        if ((typeof options.onClick === 'function') && (options.onClick !== null)) {
            jQuery(thisimg).unbind('click').click(function () {
                options.onClick(jQuery.superbg_imgActual);
            });
        }
        if ((typeof options.onMouseenter === 'function') && (options.onMouseenter !== null)) {
            jQuery(thisimg).unbind('mouseenter').mouseenter(function () {
                options.onMouseenter(jQuery.superbg_imgActual);
            });
        }
        if ((typeof options.onMouseleave === 'function') && (options.onMouseleave !== null)) {
            jQuery(thisimg).unbind('mouseleave').mouseleave(function () {
                options.onMouseleave(jQuery.superbg_imgActual);
            });
        }
        if ((typeof options.onMousemove === 'function') && (options.onMousemove !== null)) {
            jQuery(thisimg).unbind('mousemove').mousemove(function (e) {
                options.onMousemove(jQuery.superbg_imgActual, e);
            });
        }
        if (options.randomtransition === 1) {
            var randomtrans = (0 + parseInt(Math.random() * (jQuery.superbg_max_randomtrans - 0 + 1), 10));
            while (randomtrans === jQuery.superbg_lasttrans) {
                randomtrans = (0 + parseInt(Math.random() * (jQuery.superbg_max_randomtrans - 0 + 1), 10));
            }
            options.transition = randomtrans;
        }
        if (options.vertical_center === 1) {
            jQuery(thisimg).css('top', newtop + 'px');
        } else {
            jQuery(thisimg).css('top', '0px');
        }
        var akt_transitionout = options.transitionout;
        if ((options.transition === 6) || (options.transition === 7)) {
            akt_transitionout = 0;
        }
        if (akt_transitionout === 1) {
            jQuery('#' + options.id + ' img.activeslide').removeClass('activeslide').addClass('lastslide').css('z-index', 0);
        } else {
            jQuery('#' + options.id + ' img.activeslide').removeClass('activeslide').addClass('lastslideno').css('z-index', 0);
        }
        jQuery(thisimg).css('z-index', 1);
        options.transition = parseInt(options.transition, 10);
        jQuery.superbg_lasttrans = options.transition;
        var theEffect = '';
        var theDir = '';
        if (options.transition === 0) {
            jQuery(thisimg).show(1, function () {
                if ((typeof options.onShow === 'function') && (options.onShow !== null)) options.onShow(jQuery.superbg_imgActual);
                jQuery.superbg_inAnimation = false;
                if (jQuery.superbg_slideshowActive) {
                    jQuery('#' + options.id).startSlideShow();
                }
            }).addClass('activeslide');
        } else if (options.transition === 1) {
            jQuery(thisimg).fadeIn(options.speed, function () {
                if ((typeof options.onShow === 'function') && (options.onShow !== null)) options.onShow(jQuery.superbg_imgActual);
                jQuery('#' + options.id + ' img.lastslideno').hide(1, null).removeClass('lastslideno');
                jQuery.superbg_inAnimation = false;
                if (jQuery.superbg_slideshowActive) {
                    jQuery('#' + options.id).startSlideShow();
                }
            }).addClass('activeslide');
        } else {
            if (options.transition === 2) {
                theEffect = 'slide';
                theDir = 'up';
            }
            if (options.transition === 3) {
                theEffect = 'slide';
                theDir = 'right';
            }
            if (options.transition === 4) {
                theEffect = 'slide';
                theDir = 'down';
            }
            if (options.transition === 5) {
                theEffect = 'slide';
                theDir = 'left';
            }
            if (options.transition === 6) {
                theEffect = 'blind';
                theDir = 'horizontal';
            }
            if (options.transition === 7) {
                theEffect = 'blind';
                theDir = 'vertical';
            }
            if (options.transition === 90) {
                theEffect = 'slide';
                theDir = 'left';
                if (jQuery.superbg_direction === 1) {
                    theDir = 'right';
                }
            }
            if (options.transition === 91) {
                theEffect = 'slide';
                theDir = 'down';
                if (jQuery.superbg_direction === 1) {
                    theDir = 'up';
                }
            }
            jQuery(thisimg).show(theEffect, {
                direction: theDir
            }, options.speed, function () {
                if ((typeof options.onShow === 'function') && (options.onShow !== null)) options.onShow(jQuery.superbg_imgActual);
                jQuery('#' + options.id + ' img.lastslideno').hide(1, null).removeClass('lastslideno');
                jQuery.superbg_inAnimation = false;
                if (jQuery.superbg_slideshowActive) {
                    jQuery('#' + options.id).startSlideShow();
                }
            }).addClass('activeslide');
        }
        if (akt_transitionout === 1) {
            var outspeed = options.speed;
            if (options.speed == 'slow') {
                outspeed = 600 + 200;
            } else if (options.speed == 'normal') {
                outspeed = 400 + 200;
            } else if (options.speed == 'fast') {
                outspeed = 400 + 200;
            } else {
                outspeed = options.speed + 200;
            }
            if (options.transition === 0) {
                jQuery('#' + options.id + ' img.lastslide').hide(1, null).removeClass('lastslide');
            } else if (options.transition == 1) {
                jQuery('#' + options.id + ' img.lastslide').hide(1, null).removeClass('lastslide');
            } else {
                if (options.transition === 2) {
                    theEffect = 'slide';
                    theDir = 'down';
                }
                if (options.transition === 3) {
                    theEffect = 'slide';
                    theDir = 'left';
                }
                if (options.transition === 4) {
                    theEffect = 'slide';
                    theDir = 'up';
                }
                if (options.transition === 5) {
                    theEffect = 'slide';
                    theDir = 'right';
                }
                if (options.transition === 6) {
                    theEffect = '';
                    theDir = '';
                }
                if (options.transition === 7) {
                    theEffect = '';
                    theDir = '';
                }
                if (options.transition === 90) {
                    theEffect = 'slide';
                    theDir = 'right';
                    if (jQuery.superbg_direction === 1) {
                        theDir = 'left';
                    }
                }
                if (options.transition === 91) {
                    theEffect = 'slide';
                    theDir = 'up';
                    if (jQuery.superbg_direction === 1) {
                        theDir = 'down';
                    }
                }
                jQuery('#' + options.id + ' img.lastslide').hide(theEffect, {
                    direction: theDir
                }, outspeed).removeClass('lastslide');
            }
        } else {
            jQuery('#' + options.id + ' img.lastslide').hide(1, null).removeClass('lastslide');
        }
    };
    jQuery.fn.superbgimage.defaults = {
        id: 'superbgimage',
        z_index: 0,
        inlineMode: 0,
        showimage: 1,
        vertical_center: 1,
        transition: 0,
        transitionout: 1,
        randomtransition: 0,
        showtitle: 0,
        slideshow: 0,
        slide_interval: 5000,
        randomimage: 0,
        speed: 'slow',
        preload: 1,
        onShow: null,
        onClick: null,
        onHide: null,
        onMouseenter: null,
        onMouseleave: null,
        onMousemove: null
    };
})(jQuery);