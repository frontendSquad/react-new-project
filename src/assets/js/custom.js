
// jQuery('.preloader').fadeIn();

jQuery(function() {
  var $loader = jQuery(".preloader");
  setInterval(function() {
    $loader.fadeOut();
  }, 2000);
});

jQuery(function() {
  var $blinkText = jQuery(".dit1");
  setInterval(function() {
    $blinkText.toggleClass("blink");
  }, 100);
});
jQuery(function() {
  var $blinkText = jQuery(".dit2");
  setInterval(function() {
    $blinkText.toggleClass("blink");
  }, 200);
});
jQuery(function() {
  var $blinkText = jQuery(".dit3");
  setInterval(function() {
    $blinkText.toggleClass("blink");
  }, 300);
});



jQuery('.toggle_btn').click(function(){
    jQuery('.responsive').slideToggle();
});

var a = jQuery('.mobile').html();
var nav_l = jQuery('.2nd_nav_left').html();
var nav_r = jQuery('.2nd_nav_right').html();
jQuery('.responsive').html(a);
jQuery('.responsive').append(nav_l,nav_r);

var x = jQuery("header .logo a").html();
if(x == ""){
    jQuery("header .logo a").html("<h3>MUTA'AL</h3>");
} else{
    jQuery("header .logo a").html();
}

$('.RH_slider').owlCarousel({
    loop:true,
    margin:50,
    nav:false,
    dots: true,
    autoplay:true,
    stagePadding:130,
    center:true,
  speed: 300,
  adaptiveHeight: true,
    responsive:{
        0:{
            items:1,
            stagePadding:0,
            center:false,
            margin:10,
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
});

$('.MA_slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    autoplay:true,
  speed: 300,
  adaptiveHeight: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
$('.2_box_slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: true,
    autoplay:true,
  speed: 300,
  adaptiveHeight: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
});
$('.T_slide').owlCarousel({
    loop:true,
    margin:25,
    nav:false,
    dots: true,
    autoplay:true,
  speed: 300,
  adaptiveHeight: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
});
$('.tranding_slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: true,
    autoplay:true,
  speed: 300,
  adaptiveHeight: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});
$('.5_box_slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: true,
    autoplay:true,
  speed: 300,
  adaptiveHeight: true,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        800:{
            items:3
        },
        1000:{
            items:5
        }
    }
});








jQuery(document).ready(function(){
    jQuery('div#Our-Gallery .inner .hover-wrap .hover-wrap-inner').prepend('<div class="click-to-view"><div class="zoom-iicon"><i class="fa fa-eye" aria-hidden="true"></i></div>');
    jQuery('div#Our-Gallery .click-to-view').click(function(){
        var a = jQuery(this).next().find('div#Our-Gallery .skip-lazy').attr("src");
        jQuery('.custom-gallery img').attr('src', a);
        jQuery('.custom-gallery').addClass('eneble');
    }); 
    jQuery('.custom-gallery').click(function(){
        jQuery('.custom-gallery').removeClass('eneble');
    });
}); 
