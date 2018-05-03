$(document).ready(function () {
    var $winheight = $(window).height(); 
    var $winwidth = $(window).width();
    
    var $menu_minheight = 580; //minimalni vyska menu
    var $topmenu_height = 39; //vyska vrchniho menu
    var $minpositiontop_menu = 16; //posun menu od vrchniho menu
    
    //maximalni velikost i s hornim menu
    var $full = $menu_minheight + (($topmenu_height + $minpositiontop_menu) * 2);
    var $top_pos = 0;
    
    var leftmenu = parseInt($('#page').css('left'));
    var $pagewidth = parseInt($('#page').css('width'));
    //alert(leftmenu);
    
    //console.log($winheight + ' ' + $full);
    
    $('#menu').css({'left': leftmenu});
    
    if($winheight > $full)
    {
        //$top_pos = (($winheight  / 2) - (($menu_minheight + $minpositiontop_menu) / 2));
        $top_pos = (($winheight  / 2) - ($menu_minheight / 2));
        $('#menu').css({'top': $top_pos, 'left': leftmenu});
    }
    else
    {
        $top_pos = $topmenu_height + $minpositiontop_menu;
        $('#menu').css({'top': $top_pos, 'left': leftmenu});
    }
    
    //hover na menu
    $('#all a.noactive').hover(
        function () {
           $('#all a.noactive img.black').css({"display":"none"});
           $('#all a.noactive img.white').css({"display":"block"});
         }, 
         function () {
           $('#all a.noactive img.black').css({"display":"block"});
           $('#all a.noactive img.white').css({"display":"none"});
         }
    );
    
    $('#lifestyle a.noactive').hover(
        function () {
           $('#lifestyle a.noactive img.black').css({"display":"none"});
           $('#lifestyle a.noactive img.white').css({"display":"block"});
         }, 
         function () {
           $('#lifestyle a.noactive img.black').css({"display":"block"});
           $('#lifestyle a.noactive img.white').css({"display":"none"});
         }
    );
    
    $('#fashion a.noactive').hover(
        function () {
           $('#fashion a.noactive img.black').css({"display":"none"});
           $('#fashion a.noactive img.white').css({"display":"block"});
         }, 
         function () {
           $('#fashion a.noactive img.black').css({"display":"block"});
           $('#fashion a.noactive img.white').css({"display":"none"});
         }
    );
    
    $('#people a.noactive').hover(
        function () {
           $('#people a.noactive img.black').css({"display":"none"});
           $('#people a.noactive img.white').css({"display":"block"});
         }, 
         function () {
           $('#people a.noactive img.black').css({"display":"block"});
           $('#people a.noactive img.white').css({"display":"none"});
         }
    );
    
    $('#project a.noactive').hover(
        function () {
           $('#project a.noactive img.black').css({"display":"none"});
           $('#project a.noactive img.white').css({"display":"block"});
         }, 
         function () {
           $('#project a.noactive img.black').css({"display":"block"});
           $('#project a.noactive img.white').css({"display":"none"});
         }
    );
    
    $('#underwater a.noactive').hover(
        function () {
           $('#underwater a.noactive img.black').css({"display":"none"});
           $('#underwater a.noactive img.white').css({"display":"block"});
         }, 
         function () {
           $('#underwater a.noactive img.black').css({"display":"block"});
           $('#underwater a.noactive img.white').css({"display":"none"});
         }
    );
    
    $('#commercial a.noactive').hover(
        function () {
           $('#commercial a.noactive img.black').css({"display":"none"});
           $('#commercial a.noactive img.white').css({"display":"block"});
         }, 
         function () {
           $('#commercial a.noactive img.black').css({"display":"block"});
           $('#commercial a.noactive img.white').css({"display":"none"});
         }
    );
    
    $('#briefcase a.noactive').hover(
        function () {
           $('#briefcase a.noactive img.black').css({"display":"none"});
           $('#briefcase a.noactive img.white').css({"display":"block"});
         }, 
         function () {
           $('#briefcase a.noactive img.black').css({"display":"block"});
           $('#briefcase a.noactive img.white').css({"display":"none"});
         }
    );
    
    $('#scrapbook a.noactive').hover(
        function () {
           $('#scrapbook a.noactive img.black').css({"display":"none"});
           $('#scrapbook a.noactive img.white').css({"display":"block"});
         }, 
         function () {
           $('#scrapbook a.noactive img.black').css({"display":"block"});
           $('#scrapbook a.noactive img.white').css({"display":"none"});
         }
    );
    
    $('#blog a.noactive').hover(
        function () {
           $('#blog a.noactive img.black').css({"display":"none"});
           $('#blog a.noactive img.white').css({"display":"block"});
         }, 
         function () {
           $('#blog a.noactive img.black').css({"display":"block"});
           $('#blog a.noactive img.white').css({"display":"none"});
         }
    );
    
    $('#info a.noactive').hover(
        function () {
           $('#info a.noactive img.black').css({"display":"none"});
           $('#info a.noactive img.white').css({"display":"block"});
         }, 
         function () {
           $('#info a.noactive img.black').css({"display":"block"});
           $('#info a.noactive img.white').css({"display":"none"});
         }
    );
    
    //zakladni velikosti menu
    var $all_w = 93;
    var $all_h = 61;
    var $lifestyle_w = 250;
    var $lifestyle_h = 61;
    var $fashion_w = 205;
    var $fashion_h = 63;
    var $people_w = 184;
    var $people_h = 61;
    var $project_w = 341;
    var $project_h = 62;
    var $underwater_w = 332;
    var $underwater_h = 62;
    var $commercial_w = 321;
    var $commercial_h = 63;
    var $briefcase_w = 329;
    var $briefcase_h = 63;
    var $scrapbook_w = 298;
    var $scrapbook_h = 62;
    var $blog_w = 125;
    var $blog_h = 63;
    var $info_w = 109;
    var $info_h = 62;
    
    var $all_new_w = 0;
    var $all_new_h = 0;
    var $lifestyle_new_w = 0;
    var $lifestyle_new_h = 0;
    var $fashion_new_w = 0;
    var $fashion_new_h = 0;
    var $people_new_w = 0;
    var $people_new_h = 0;
    var $underwater_new_w = 0;
    var $underwater_new_h = 0;
    var $project_new_w = 0;
    var $project_new_h = 0;
    var $commercial_new_w = 0;
    var $commercial_new_h = 0;
    var $briefcase_new_w = 0;
    var $briefcase_new_h = 0;
    var $scrapbook_new_w = 0;
    var $scrapbook_new_h = 0;
    var $blog_new_w = 0;
    var $blog_new_h = 0;
    var $info_new_w = 0;
    var $info_new_h = 0;
    
    var $all_p = 0;
    var $lifestyle_p = 0;
    var $fashion_p = 0;
    var $people_p = 0;
    var $project_p = 0;
    var $underwater_p = 0;
    var $commercial_p = 0;
    var $briefcase_p = 0;
    var $scrapbook_p = 0;
    var $blog_p = 0;
    var $info_p = 0;
    
    var $max_h_resize = 800; //maximalni vyska rozliseni od ktere se zmensuje menu
    var $max_w_resize = 1400; //maximalni sirka rozliseni od ktere se zmensuje menu
    var $min_h_resize = 500; //minimalni vyska rozliseni do ktere se zmensuje menu
    var $min_w_resize = 1000; //minimalni sirka rozliseni do ktere se zmensuje menu
    
    var $p_height = 0;
    var $p_width = 0;
    var $p_main = 0;
    var $menu_width_default = 341;
    var $menu_width = $menu_width_default;
    var $menu_height = $menu_minheight;
    var $margin_menu = 30;
    var $only_menu_width = $menu_width - $margin_menu;
    var $left_m = 0;
    var $menuitem_count = 9; //polozek menu
    var $margin_menuitem = 2; //margin mezi polozkami menu
    var $widthlogo = 121;
    var $marginrightmenu = 20;
    var $w1 = 0;
    var $w2 = 0;
    var $w3 = 0;
    var $w4 = 0;
    
    
    if(($winheight < $max_h_resize) || ($winwidth < $max_w_resize))
    {
        
        if($winheight < $max_h_resize)
        {
            if($winheight < $min_h_resize)
            {
                $p_height = $min_h_resize / $max_h_resize;
            }
            else
            {
                $p_height = $winheight / $max_h_resize;
            }
        }
        else
        {
            $p_height = 1;
        }
        
        if($winwidth < $max_w_resize)
        {
            if($winwidth < $min_w_resize)
            {
                $p_width = $min_w_resize / $max_w_resize;
            }
            else
            {
                $p_width = $winwidth / $max_w_resize;
            }
        }
        else
        {
            $p_width = 1;
        }
        
        if($p_width < $p_height)
            $p_main = $p_width;
        else
            $p_main = $p_height;
        
        //alert($p_main + ' ' + $p_width + ' | ' + $max_w_resize + ' | ' + $winwidth + ' ' + $p_height);
        
        // all
        $all_new_w = $all_w * $p_main;
        $all_new_h = $all_h * $p_main;
        
        $menu_width = $all_new_w;
        $menu_height = $all_new_h;
        
        // lifestyle
        $lifestyle_new_w = $lifestyle_w * $p_main;
        $lifestyle_new_h = $lifestyle_h * $p_main;
        
        if($menu_width < $lifestyle_new_w)
            $menu_width = $lifestyle_new_w;
        
        $menu_height += $lifestyle_new_h;
        
        // fashion
        $fashion_new_w = $fashion_w * $p_main;
        $fashion_new_h = $fashion_h * $p_main;
        
        if($menu_width < $fashion_new_w)
            $menu_width = $fashion_new_w;
        
        $menu_height += $fashion_new_h;
        
        // people
        $people_new_w = $people_w * $p_main;
        $people_new_h = $people_h * $p_main;
        
        if($menu_width < $people_new_w)
            $menu_width = $people_new_w;
        
        $menu_height += $people_new_h;
        
        // project
        $project_new_w = $project_w * $p_main;
        $project_new_h = $project_h * $p_main;
        
        if($menu_width < $project_new_w)
            $menu_width = $project_new_w;
        
        $menu_height += $project_new_h;
        
        // underwater
        $underwater_new_w = $underwater_w * $p_main;
        $underwater_new_h = $underwater_h * $p_main;
        
        if($menu_width < $underwater_new_w)
            $menu_width = $underwater_new_w;
        
        $menu_height += $underwater_new_h;
        
        // commercial
        $commercial_new_w = $commercial_w * $p_main;
        $commercial_new_h = $commercial_h * $p_main;
        
        if($menu_width < $commercial_new_w)
            $menu_width = $commercial_new_w;
        
        $menu_height += $commercial_new_h;
        
        // briefcase
        $briefcase_new_w = $briefcase_w * $p_main;
        $briefcase_new_h = $briefcase_h * $p_main;
        
        if($menu_width < $briefcase_new_w)
            $menu_width = $briefcase_new_w;
        
        $menu_height += $briefcase_new_h;
        
        // scrapbook
        $scrapbook_new_w = $scrapbook_w * $p_main;
        $scrapbook_new_h = $scrapbook_h * $p_main;
        
        if($menu_width < $scrapbook_new_w)
            $menu_width = $scrapbook_new_w;
        
        $menu_height += $scrapbook_new_h;
        
        // blog
        $blog_new_w = $blog_w * $p_main;
        $blog_new_h = $blog_h * $p_main;
        
        if($menu_width < $blog_new_w)
            $menu_width = $blog_new_w;
        
        $menu_height += $blog_new_h;
        
        // info
        $info_new_w = $info_w * $p_main;
        $info_new_h = $info_h * $p_main;
        
        if($menu_width < $info_new_w)
            $menu_width = $info_new_w;
        
        $menu_height += $info_new_h;
        
        $menu_height = $menu_height + ($menuitem_count * $margin_menuitem); //+ margin 2px u 9ti polozek menu 
        $only_menu_width = $menu_width - $margin_menu;
        
        $('#menu').css({
            'width': $menu_width,
            'min-height': $menu_height
        });
        $('#menu1').css({
            'width': $menu_width,
            'min-height': $menu_height
        });
        
        //all
        $left_m = $menu_width - $all_new_w;
        $('#all a img').css({
            'width': $all_new_w,
            'height': $all_new_h
        });
        $('#all a').css({
            'width': $all_new_w,
            'height': $all_new_h,
            'left': $left_m
        });
        
        // lifestyle
        $left_m = $menu_width - $lifestyle_new_w;
        $('#lifestyle a img').css({
            'width': $lifestyle_new_w,
            'height': $lifestyle_new_h
        });
        $('#lifestyle a').css({
            'width': $lifestyle_new_w,
            'height': $lifestyle_new_h,
            'left': $left_m
        });
        
        // fashion
        $left_m = $menu_width - $fashion_new_w;
        $('#fashion a img').css({
            'width': $fashion_new_w,
            'height': $fashion_new_h
        });
        $('#fashion a').css({
            'width': $fashion_new_w,
            'height': $fashion_new_h,
            'left': $left_m
        });
        
        // people
        $left_m = $menu_width - $people_new_w;
        $('#people a img').css({
            'width': $people_new_w,
            'height': $people_new_h
        });
        $('#people a').css({
            'width': $people_new_w,
            'height': $people_new_h,
            'left': $left_m
        });
        
        // project
        $left_m = $menu_width - $project_new_w;
        $('#project a img').css({
            'width': $project_new_w,
            'height': $project_new_h
        });
        $('#project a').css({
            'width': $project_new_w,
            'height': $project_new_h,
            'left': $left_m
        });
        
        // underwater
        $left_m = $menu_width - $underwater_new_w;
        $('#underwater a img').css({
            'width': $underwater_new_w,
            'height': $underwater_new_h
        });
        $('#underwater a').css({
            'width': $underwater_new_w,
            'height': $underwater_new_h,
            'left': $left_m
        });
        
        // commercial
        $left_m = $menu_width - $commercial_new_w;
        $('#commercial a img').css({
            'width': $commercial_new_w,
            'height': $commercial_new_h
        });
        $('#commercial a').css({
            'width': $commercial_new_w,
            'height': $commercial_new_h,
            'left': $left_m
        });
        
        // briefcase
        $left_m = $menu_width - $briefcase_new_w;
        $('#briefcase a img').css({
            'width': $briefcase_new_w,
            'height': $briefcase_new_h
        });
        $('#briefcase a').css({
            'width': $briefcase_new_w,
            'height': $briefcase_new_h,
            'left': $left_m
        });
        
        // scrapbook
        $left_m = $menu_width - $scrapbook_new_w;
        $('#scrapbook a img').css({
            'width': $scrapbook_new_w,
            'height': $scrapbook_new_h
        });
        $('#scrapbook a').css({
            'width': $scrapbook_new_w,
            'height': $scrapbook_new_h,
            'left': $left_m
        });
        
        // blog
        $left_m = $menu_width - $blog_new_w;
        $('#blog a img').css({
            'width': $blog_new_w,
            'height': $blog_new_h
        });
        $('#blog a').css({
            'width': $blog_new_w,
            'height': $blog_new_h,
            'left': $left_m
        });
        
        // info
        $left_m = $menu_width - $info_new_w;
        $('#info a img').css({
            'width': $info_new_w,
            'height': $info_new_h
        });
        $('#info a').css({
            'width': $info_new_w,
            'height': $info_new_h,
            'left': $left_m
        });
        
        $full = $menu_height + (($topmenu_height + $minpositiontop_menu) * 2);
        
        if($winheight > $full)
        {
            $top_pos = (($winheight  / 2) - ($menu_height / 2));
            $('#menu').css({'top': $top_pos, 'left': leftmenu});
            $('#menu1').css({'top': $top_pos});
        }
        else
        {
            $top_pos = $topmenu_height + $minpositiontop_menu;
            $('#menu').css({'top': $top_pos, 'left': leftmenu});
        }
        
        $w2 = leftmenu + $menu_width + $margin_menu - $widthlogo - $marginrightmenu; //121px velikost loga, 20 margin-right od menu  
        $("#topmenu #logo").css({
           'left': $w2
        });
        
        $w4 = leftmenu + $menu_width + $margin_menu;
        $("#toptopmenu").css({
           'left': $w4
        });
        
        //$w3 = leftmenu + $min_w_resize + 50;
//        $("#topmenu #baggage").css({
//           'left': $w3
//        });
        $w3 = parseInt($("#toptopmenu").css("left"));
        $w3 = $w3 + 440 + 50;
        $("#topmenu #baggage").css({
           'left': $w3
        });
        
        $w1 = $pagewidth - $menu_width - $margin_menu - 1;
        $("#photocontent").css({
           'width': $w1
        });
    }
    
    
    
    $(window).bind("resize", function(){
        $winheight = $(window).height();
        $winwidth = $(window).width();
        
        leftmenu = parseInt($('#page').css('left'));
        $pagewidth = parseInt($('#page').css('width'));
        $('#menu').css({'left': leftmenu});
        
        if($winheight > $full)
        {
            //$top_pos = (($winheight / 2) - (($menu_minheight + $minpositiontop_menu) / 2));
            $top_pos = (($winheight  / 2) - ($menu_minheight / 2));
            $('#menu').css({'top': $top_pos});
        }
        else
        {
            $top_pos = $topmenu_height + $minpositiontop_menu;
            $('#menu').css({'top': $top_pos, 'left': leftmenu});
        }
        
        if(($winheight < $max_h_resize) || ($winwidth < $max_w_resize))
        {
            
            if($winheight < $max_h_resize)
            {
                if($winheight < $min_h_resize)
                {
                    $p_height = $min_h_resize / $max_h_resize;
                }
                else
                {
                    $p_height = $winheight / $max_h_resize;
                }
            }
            else
            {
                $p_height = 1;
            }
            
            if($winwidth < $max_w_resize)
            {
                if($winwidth < $min_w_resize)
                {
                    $p_width = $min_w_resize / $max_w_resize;
                }
                else
                {
                    $p_width = $winwidth / $max_w_resize;
                }
            }
            else
            {
                $p_width = 1;
            }
            
            if($p_width < $p_height)
                $p_main = $p_width;
            else
                $p_main = $p_height;
            
            //alert($p_main + ' ' + $p_width + ' | ' + $max_w_resize + ' | ' + $winwidth + ' ' + $p_height);
            
            // all
            $all_new_w = $all_w * $p_main;
            $all_new_h = $all_h * $p_main;
            
            $menu_width = $all_new_w;
            $menu_height = $all_new_h;
            
            // lifestyle
            $lifestyle_new_w = $lifestyle_w * $p_main;
            $lifestyle_new_h = $lifestyle_h * $p_main;
            
            if($menu_width < $lifestyle_new_w)
                $menu_width = $lifestyle_new_w;
            
            $menu_height += $lifestyle_new_h;
            
            // fashion
            $fashion_new_w = $fashion_w * $p_main;
            $fashion_new_h = $fashion_h * $p_main;
            
            if($menu_width < $fashion_new_w)
                $menu_width = $fashion_new_w;
            
            $menu_height += $fashion_new_h;
            
            // people
            $people_new_w = $people_w * $p_main;
            $people_new_h = $people_h * $p_main;
            
            if($menu_width < $people_new_w)
                $menu_width = $people_new_w;
            
            $menu_height += $people_new_h;
            
            // project
            $project_new_w = $project_w * $p_main;
            $project_new_h = $project_h * $p_main;
            
            if($menu_width < $project_new_w)
                $menu_width = $project_new_w;
            
            $menu_height += $project_new_h;
            
            // underwater
            $underwater_new_w = $underwater_w * $p_main;
            $underwater_new_h = $underwater_h * $p_main;
            
            if($menu_width < $underwater_new_w)
                $menu_width = $underwater_new_w;
            
            $menu_height += $underwater_new_h;
            
            // commercial
            $commercial_new_w = $commercial_w * $p_main;
            $commercial_new_h = $commercial_h * $p_main;
            
            if($menu_width < $commercial_new_w)
                $menu_width = $commercial_new_w;
            
            $menu_height += $commercial_new_h;
            
            // briefcase
            $briefcase_new_w = $briefcase_w * $p_main;
            $briefcase_new_h = $briefcase_h * $p_main;
            
            if($menu_width < $briefcase_new_w)
                $menu_width = $briefcase_new_w;
            
            $menu_height += $briefcase_new_h;
            
            // scrapbook
            $scrapbook_new_w = $scrapbook_w * $p_main;
            $scrapbook_new_h = $scrapbook_h * $p_main;
            
            if($menu_width < $scrapbook_new_w)
                $menu_width = $scrapbook_new_w;
            
            $menu_height += $scrapbook_new_h;
            
            // blog
            $blog_new_w = $blog_w * $p_main;
            $blog_new_h = $blog_h * $p_main;
            
            if($menu_width < $blog_new_w)
                $menu_width = $blog_new_w;
            
            $menu_height += $blog_new_h;
            
            // info
            $info_new_w = $info_w * $p_main;
            $info_new_h = $info_h * $p_main;
            
            if($menu_width < $info_new_w)
                $menu_width = $info_new_w;
            
            $menu_height += $info_new_h;
            
            $menu_height = $menu_height + ($menuitem_count * $margin_menuitem); //+ margin 2px u 9ti polozek menu
            $only_menu_width = $menu_width - $margin_menu;
            
            $('#menu').css({
                'width': $menu_width,
                'min-height': $menu_height
            });
            
            $('#menu1').css({
                'width': $menu_width,
                'min-height': $menu_height
            });
            
            //all
            $left_m = $menu_width - $all_new_w;
            $('#all a img').css({
                'width': $all_new_w,
                'height': $all_new_h
            });
            $('#all a').css({
                'width': $all_new_w,
                'height': $all_new_h,
                'left': $left_m
            });
            
            // lifestyle
            $left_m = $menu_width - $lifestyle_new_w;
            $('#lifestyle a img').css({
                'width': $lifestyle_new_w,
                'height': $lifestyle_new_h
            });
            $('#lifestyle a').css({
                'width': $lifestyle_new_w,
                'height': $lifestyle_new_h,
                'left': $left_m
            });
            
            // fashion
            $left_m = $menu_width - $fashion_new_w;
            $('#fashion a img').css({
                'width': $fashion_new_w,
                'height': $fashion_new_h
            });
            $('#fashion a').css({
                'width': $fashion_new_w,
                'height': $fashion_new_h,
                'left': $left_m
            });
            
            // people
            $left_m = $menu_width - $people_new_w;
            $('#people a img').css({
                'width': $people_new_w,
                'height': $people_new_h
            });
            $('#people a').css({
                'width': $people_new_w,
                'height': $people_new_h,
                'left': $left_m
            });
            
            // project
            $left_m = $menu_width - $project_new_w;
            $('#project a img').css({
                'width': $project_new_w,
                'height': $project_new_h
            });
            $('#project a').css({
                'width': $project_new_w,
                'height': $project_new_h,
                'left': $left_m
            });
            
            // underwater
            $left_m = $menu_width - $underwater_new_w;
            $('#underwater a img').css({
                'width': $underwater_new_w,
                'height': $underwater_new_h
            });
            $('#project a').css({
                'width': $underwater_new_w,
                'height': $underwater_new_h,
                'left': $left_m
            });
            
            // commercial
            $left_m = $menu_width - $commercial_new_w;
            $('#commercial a img').css({
                'width': $commercial_new_w,
                'height': $commercial_new_h
            });
            $('#commercial a').css({
                'width': $commercial_new_w,
                'height': $commercial_new_h,
                'left': $left_m
            });
            
            // briefcase
            $left_m = $menu_width - $briefcase_new_w;
            $('#briefcase a img').css({
                'width': $briefcase_new_w,
                'height': $briefcase_new_h
            });
            $('#briefcase a').css({
                'width': $briefcase_new_w,
                'height': $briefcase_new_h,
                'left': $left_m
            });
            
            // scrapbook
            $left_m = $menu_width - $scrapbook_new_w;
            $('#scrapbook a img').css({
                'width': $scrapbook_new_w,
                'height': $scrapbook_new_h
            });
            $('#scrapbook a').css({
                'width': $scrapbook_new_w,
                'height': $scrapbook_new_h,
                'left': $left_m
            });
            
            // blog
            $left_m = $menu_width - $blog_new_w;
            $('#blog a img').css({
                'width': $blog_new_w,
                'height': $blog_new_h
            });
            $('#blog a').css({
                'width': $blog_new_w,
                'height': $blog_new_h,
                'left': $left_m
            });
            
            // info
            $left_m = $menu_width - $info_new_w;
            $('#info a img').css({
                'width': $info_new_w,
                'height': $info_new_h
            });
            $('#info a').css({
                'width': $info_new_w,
                'height': $info_new_h,
                'left': $left_m
            });
            
            $full = $menu_height + (($topmenu_height + $minpositiontop_menu) * 2);
            
            if($winheight > $full)
            {
                $top_pos = (($winheight  / 2) - ($menu_height / 2));
                $('#menu').css({'top': $top_pos, 'left': leftmenu});
                $('#menu1').css({'top': $top_pos});
            }
            else
            {
                $top_pos = $topmenu_height + $minpositiontop_menu;
                $('#menu').css({'top': $top_pos, 'left': leftmenu});
            }
            //console.log(leftmenu);
            $w2 = leftmenu + $menu_width + $margin_menu - $widthlogo - $marginrightmenu; //121px velikost loga, 20 margin-right od menu
            //console.log(leftmenu + ' + ' + $menu_width + ' + ' + $margin_menu + ' + ' + $widthlogo + ' + ' + $marginrightmenu + ' + ' + $w2);  
            $("#topmenu #logo").css({
               'left': $w2
            });
            
            $w4 = leftmenu + $menu_width + $margin_menu;
            $("#toptopmenu").css({
               'left': $w4
            });
            
            //$w3 = leftmenu + $min_w_resize + 50;
            $w3 = parseInt($("#toptopmenu").css("left"));
            $w3 = $w3 + 440 + 50;
            
            $("#topmenu #baggage").css({
               'left': $w3
            });
            
            $w1 = $pagewidth - $menu_width - $margin_menu - 1;
            //console.log($w1 + " - " + $pagewidth + " - " + $menu_width + " - " + $margin_menu);
            $("#photocontent").css({
               'width': $w1
            });
        }
        else
        {
            $('#menu').css({
                'width': $menu_width_default,
                'min-height': $menu_minheight
            });
            
            $('#menu1').css({
                'width': $menu_width_default,
                'min-height': $menu_minheight
            });
            
            //all
            $left_m = $menu_width_default - $all_w;
            $('#all a img').css({
                'width': $all_w,
                'height': $all_h
            });
            $('#all a').css({
                'width': $all_w,
                'height': $all_h,
                'left': $left_m
            });
            
            // lifestyle
            $left_m = $menu_width_default - $lifestyle_w;
            $('#lifestyle a img').css({
                'width': $lifestyle_w,
                'height': $lifestyle_h
            });
            $('#lifestyle a').css({
                'width': $lifestyle_w,
                'height': $lifestyle_h,
                'left': $left_m
            });
            
            // fashion
            $left_m = $menu_width_default - $fashion_w;
            $('#fashion a img').css({
                'width': $fashion_w,
                'height': $fashion_h
            });
            $('#fashion a').css({
                'width': $fashion_w,
                'height': $fashion_h,
                'left': $left_m
            });
            
            // people
            $left_m = $menu_width_default - $people_w;
            $('#people a img').css({
                'width': $people_w,
                'height': $people_h
            });
            $('#people a').css({
                'width': $people_w,
                'height': $people_h,
                'left': $left_m
            });
            
            // project
            $left_m = $menu_width_default - $project_w;
            $('#project a img').css({
                'width': $project_w,
                'height': $project_h
            });
            $('#project a').css({
                'width': $project_w,
                'height': $project_h,
                'left': $left_m
            });
            
            // project
            $left_m = $menu_width_default - $underwater_w;
            $('#underwater a img').css({
                'width': $underwater_w,
                'height': $underwater_h
            });
            $('#underwater a').css({
                'width': $underwater_w,
                'height': $underwater_h,
                'left': $left_m
            });
            
            // commercial
            $left_m = $menu_width_default - $commercial_w;
            $('#commercial a img').css({
                'width': $commercial_w,
                'height': $commercial_h
            });
            $('#commercial a').css({
                'width': $commercial_w,
                'height': $commercial_h,
                'left': $left_m
            });
            
            // briefcase
            $left_m = $menu_width_default - $briefcase_w;
            $('#briefcase a img').css({
                'width': $briefcase_w,
                'height': $briefcase_h
            });
            $('#briefcase a').css({
                'width': $briefcase_w,
                'height': $briefcase_h,
                'left': $left_m
            });
            
            // scrapbook
            $left_m = $menu_width_default - $scrapbook_w;
            $('#scrapbook a img').css({
                'width': $scrapbook_w,
                'height': $scrapbook_h
            });
            $('#scrapbook a').css({
                'width': $scrapbook_w,
                'height': $scrapbook_h,
                'left': $left_m
            });
            
            // blog
            $left_m = $menu_width_default - $blog_w;
            $('#blog a img').css({
                'width': $blog_w,
                'height': $blog_h
            });
            $('#blog a').css({
                'width': $blog_w,
                'height': $blog_h,
                'left': $left_m
            });
            
            // info
            $left_m = $menu_width_default - $info_w;
            $('#info a img').css({
                'width': $info_w,
                'height': $info_h
            });
            $('#info a').css({
                'width': $info_w,
                'height': $info_h,
                'left': $left_m
            });
        }
        //TODO: nastavit vse na puvodni hodnoty
    });
});