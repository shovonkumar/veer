$(document).ready(function(){
    $(window).on('scroll', function(){
        var scroll = $(this).scrollTop();
        if(scroll > 400) {
            $('.back_to_top').fadeIn()
            $('.navbar').addClass('nav_bg_sticky')
        }
        else {
            $('.back_to_top').fadeOut()
            $('.navbar').removeClass('nav_bg_sticky')
        }
    });

    $('.back_to_top').click(function(){
        $('html, body').animate({scrollTop:0});
    });

    // mixitup activation code
	var mixer = mixitup('.myfilter');
});



// Venobox Activation

new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});

// Wow JS Activation

new WOW().init();

