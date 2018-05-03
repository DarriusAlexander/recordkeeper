$(document).ready(function () {
    var $winheight = $(window).height(); 
    var $winwidth = $(window).width();
    
    var $max_width = 1676;
    var $max_height = 1039;
    var $width_right = 0;
    var $height_top = 0;
    
    var $bg_logo1_width = 770;
    var $bg_logo1_height = 243; //vyska loga
    var $bg_logo2_width = 663;
    var $bg_logo2_height = 745; //vyska loga
    var $bg_logo3_width = 416;
    var $bg_logo3_height = 123; //vyska loga
    
    var $width_left = 250;
    var $height_bott = 100;
    var $pom = 0;
    var $img1 = 0;
    var $img2 = 0;
    var $img3 = 0;
    var $left2 = 0;
    var $left3 = 0;
    var $mytopwidth = 0;
    var $mytopheight = 0;
    var $mytopbottom = 0;
    var $mytopbottom2 = 0;
    var $mytopbottom3 = 0;
    var $height_topbox = 0;
    var $height_tabletop = 0;
    var $pomer1 = 0;
    var $pomer2 = 0;
    var $pomer3 = 0;
    
    var $mywidth = $bg_logo1_width + $bg_logo2_width + $width_left; //secteme sirku loga
    
    if($winwidth > $mywidth)
    {
        $pomer1 = $bg_logo1_height / $bg_logo1_width;
        $pomer2 = $bg_logo2_height / $bg_logo2_width;
        $pomer3 = $bg_logo3_height / $bg_logo3_width;
        $pom = $winwidth - $mywidth;
        $pom = Math.floor($pom / 2);
        //$pom = $pom / 2;
        //alert($pom);
        $img1 = $bg_logo1_width + $pom + 1;
        $img2 = $bg_logo2_width + $pom - 1;
        $img3 = $bg_logo3_width + $pom + 1;
        $pomer1 = Math.floor($pomer1 * $img1);
        $pomer2 = Math.floor($pomer2 * $img2);
        $pomer3 = Math.floor($pomer3 * $img3);
        
        $mytopbottom = Math.floor($height_bott + $pomer1 + $pomer3) - 1;
        $mytopbottom3 = Math.floor($height_bott + $pomer1);
        $mytopbottom2 = Math.floor($height_bott + $pomer2);
        $height_topbox = Math.floor($winheight - $mytopbottom2);
        $left2 = Math.floor($width_left + $img1);
        $mytopwidth = Math.floor($img1 + $width_left) + 1;
        $height_tabletop = Math.floor($winheight - $mytopbottom) + 1;
        
        $pomer1 = $pomer1 + 1;
        
        $('#table_r1').css({'height': $pomer1});
        $('#table_r2 img').css({'width': $img1});
        $('#table_r3 img').css({'width': $img2});
        $('#table_r3').css({'left': $left2});
        $('#table_r4').css({'bottom': $mytopbottom3, 'height': $pomer3});
        $('#table_r5').css({'bottom': $mytopbottom3});
        $('#table_r5 img').css({'width': $img3});
        $('#table_r5_1').css({'width': $img3, 'bottom': $mytopbottom3, 'height': $pomer3});
        $('#table_top').css({'width': $mytopwidth, 'bottom': $mytopbottom, 'height': $height_tabletop});
        
        if($height_topbox < 0)
            $height_topbox = 0;
        
        $('#top_box').css({'width': $img2, 'bottom': $mytopbottom2, 'height': $height_topbox});
    }
    else
    {
        $pom = $winwidth - $width_left;
        if($pom > 0)
        {
            //spocitame jednotlivy pomer obrazku
            //$pom = ($bg_logo1_width / $bg_logo2_width) * ;
            
            //sirka obrazku
            $img1 = Math.floor(($bg_logo1_width / ($bg_logo1_width + $bg_logo2_width)) * $pom);
            $img2 = Math.floor(($bg_logo2_width / ($bg_logo1_width + $bg_logo2_width)) * $pom);
            $img3 = Math.floor(($bg_logo3_width / ($bg_logo1_width + $bg_logo2_width)) * $pom);
            
            //vyska obrazku
            $pomer1 = Math.floor(($bg_logo1_height / $bg_logo1_width) * $img1);
            $pomer2 = Math.floor(($bg_logo2_height / $bg_logo2_width) * $img2);
            $pomer3 = Math.floor(($bg_logo3_height / $bg_logo3_width) * $img3);
            
            $mytopbottom3 = $height_bott + $pomer1;
            $mytopbottom2 = $height_bott + $pomer2;
            $mytopbottom = $mytopbottom3 + $pomer3;
            $height_topbox = $winheight - $mytopbottom2;
            if($height_topbox < 0)
                $height_topbox = 0;
            
            $left2 = $width_left + $img1;
            $left3 = $left2 - $img3;
            
            $height_tabletop = $winheight - $mytopbottom;
            //alert($img1);
            //$img1 = $img1 + 1;
            $pomer1 = $pomer1 + 2;
            
            
            $('#table_r1').css({'height': $pomer1});
            $('#table_r2 img').css({'width': $img1});
            $('#table_r3 img').css({'width': $img2});
            $('#table_r3').css({'left': $left2});
            
            $('#table_r5').css({'bottom': $mytopbottom3, 'left': $left3});
            
            $img3 = $img3 + 1;
            $('#table_r5 img').css({'width': $img3});
            $('#table_r5_1').css({'width': $img3, 'bottom': $mytopbottom3, 'height': $pomer3, 'left': $left3});
            
            $mytopbottom3 = $mytopbottom3 - 1;
            $pomer3 = $pomer3 + 2;
            $('#table_r4').css({'bottom': $mytopbottom3, 'height': $pomer3, 'width': $left3});
            
            $left2 = $left2 + 2;
            
            $('#table_top').css({'width': $left2, 'bottom': $mytopbottom, 'height': $height_tabletop});
            
            $('#top_box').css({'width': $img2, 'bottom': $mytopbottom2, 'height': $height_topbox});
            
            $img2 = $img2 + 1;
            $('#table_r3 img').css({'width': $img2});
        }
    }
    
    var home = document.location.hash;
    home = home.replace(/^.*#/, '');
    
    if(home=='home'){
        //$("#bg_black").css({'display': 'none'});
    }
    else
    {
        $('body').css({'overflow': 'hidden'});
        $('#table_r5_1').css({'background-color': '#ffffff', 'z-index': 1});
        
        $('#table_r5_1').delay(1000)
          .queue( function(next){ 
            $('#table_r5_1').fadeOut(400);
            next(); 
          });
        
        //$('#bg_black').delay(3000)
//          .queue( function(next){ 
//            $(this).fadeOut(400);
//            next(); 
//          });
//        
//        $("#bg_black").css({
//            'width': $winwidth,
//            'height': $winheight,
//            'background-color': '#000'
//        });
        
        $("#introclick").click(function () {
            //$("#bg_black").css({'display': 'none'});
            return false;
        });
    }
    
    $(window).bind("resize", function(){
        $winheight = $(window).height();
        $winwidth = $(window).width();
        
        if($('#intro_table').css('display') != 'none')
        {
            if($winwidth > $mywidth)
            {
                $pomer1 = $bg_logo1_height / $bg_logo1_width;
                $pomer2 = $bg_logo2_height / $bg_logo2_width;
                $pomer3 = $bg_logo3_height / $bg_logo3_width;
                $pom = $winwidth - $mywidth;
                $pom = Math.floor($pom / 2);
                //$pom = $pom / 2;
                //alert($pom);
                $img1 = $bg_logo1_width + $pom + 1;
                $img2 = $bg_logo2_width + $pom - 1;
                $img3 = $bg_logo3_width + $pom + 1;
                $pomer1 = Math.floor($pomer1 * $img1);
                $pomer2 = Math.floor($pomer2 * $img2);
                $pomer3 = Math.floor($pomer3 * $img3);
                
                $mytopbottom = Math.floor($height_bott + $pomer1 + $pomer3) - 1;
                $mytopbottom3 = Math.floor($height_bott + $pomer1);
                $mytopbottom2 = Math.floor($height_bott + $pomer2);
                $height_topbox = Math.floor($winheight - $mytopbottom2);
                $left2 = Math.floor($width_left + $img1);
                $mytopwidth = Math.floor($img1 + $width_left) + 3;
                $height_tabletop = Math.floor($winheight - $mytopbottom) + 1;
                
                $pomer1 = $pomer1 + 1;
                
                $('#table_r1').css({'height': $pomer1});
                $('#table_r2 img').css({'width': $img1});
                $('#table_r3 img').css({'width': $img2});
                $('#table_r3').css({'left': $left2});
                $('#table_r4').css({'bottom': $mytopbottom3, 'height': $pomer3});
                $('#table_r5').css({'bottom': $mytopbottom3});
                $('#table_r5 img').css({'width': $img3});
                $('#table_r5_1').css({'width': $img3, 'bottom': $mytopbottom3, 'height': $pomer3});
                $('#table_top').css({'width': $mytopwidth, 'bottom': $mytopbottom, 'height': $height_tabletop});
                
                if($height_topbox < 0)
                    $height_topbox = 0;
                
                $('#top_box').css({'width': $img2, 'bottom': $mytopbottom2, 'height': $height_topbox});
            }
            else
            {
                $pom = $winwidth - $width_left;
                if($pom > 0)
                {
                    //spocitame jednotlivy pomer obrazku
                    //$pom = ($bg_logo1_width / $bg_logo2_width) * ;
                    
                    $img1 = Math.floor(($bg_logo1_width / ($bg_logo1_width + $bg_logo2_width)) * $pom);
                    $img2 = Math.floor(($bg_logo2_width / ($bg_logo1_width + $bg_logo2_width)) * $pom);
                    $img3 = Math.floor(($bg_logo3_width / ($bg_logo1_width + $bg_logo2_width)) * $pom);
                    
                    $pomer1 = Math.floor(($bg_logo1_height / $bg_logo1_width) * $img1);
                    $pomer2 = Math.floor(($bg_logo2_height / $bg_logo2_width) * $img2);
                    $pomer3 = Math.floor(($bg_logo3_height / $bg_logo3_width) * $img3);
                    
                    
                    $mytopbottom3 = $height_bott + $pomer1;
                    $mytopbottom2 = $height_bott + $pomer2;
                    $mytopbottom = $mytopbottom3 + $pomer3 - 1;
                    $height_topbox = $winheight - $mytopbottom2;
                    if($height_topbox < 0)
                        $height_topbox = 0;
                    
                    $left2 = $width_left + $img1;
                    $left3 = $left2 - $img3;
                    
                    $height_tabletop = $winheight - $mytopbottom;
                    //alert($img1);
                    //$img1 = $img1 + 1;
                    $pomer1 = $pomer1 + 2;
                    
                    
                    $('#table_r1').css({'height': $pomer1});
                    $('#table_r2 img').css({'width': $img1});
                    
                    $('#table_r3').css({'left': $left2});
                    
                    $('#table_r5').css({'bottom': $mytopbottom3, 'left': $left3});
                    
                    $img3 = $img3 + 1;
                    $('#table_r5 img').css({'width': $img3});
                    $('#table_r5_1').css({'width': $img3, 'bottom': $mytopbottom3, 'height': $pomer3, 'left': $left3});
                    
                    $mytopbottom3 = $mytopbottom3 - 1;
                    $pomer3 = $pomer3 + 2;
                    $('#table_r4').css({'bottom': $mytopbottom3, 'height': $pomer3, 'width': $left3});
                    
                    $left2 = $left2 + 2;
                    
                    $('#table_top').css({'width': $left2, 'bottom': $mytopbottom, 'height': $height_tabletop});
                    
                    $('#top_box').css({'width': $img2, 'bottom': $mytopbottom2, 'height': $height_topbox});
                    
                    $img2 = $img2 + 1;
                    $('#table_r3 img').css({'width': $img2});
                }
            }
        
        }
    });
});