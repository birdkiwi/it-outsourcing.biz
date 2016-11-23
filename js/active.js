(function ($) {
    'use strict';

    // 1.0 Full Screen Code
    // 2.0 Welcome Slide Active code
    // 3.0 testimonials active code
    // 4.0 Single Portfolio slider active code
    // 5.0 scrollUp active code
    // 6.0 Language and Currency Data Active Code
    // 7.0 meanmenu active code
    // 9.0 wow active code
    // 10.0 counterup active code

    // 1.0 Full Screen Code

    $(window).on('resizeEnd', function () {
        $(".cooming_soon_area").height($(window).height());
    });

    $(window).on('resize', function () {
        if (this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function () {
            $(this).trigger('resizeEnd');
        }, 300);
    }).trigger("resize");

    // 2.0 Welcome Slide Active code
    
    if ($.fn.owlCarousel) {
        $(".welcome_slides").owlCarousel({
            items: 1,
            margin: 30,
            loop: true,
            nav: true,
            navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
            dots: false,
            autoplay: true,
            smartSpeed: 800,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn'
        });
    }

    var owl = $('.welcome_slides');
    owl.owlCarousel();
    owl.on('translate.owl.carousel', function (event) {
        $('.owl-item .single_slide .slide_text h2').removeClass('animated').hide();
        $('.owl-item .single_slide .slide_text h3').removeClass('animated').hide();
        $('.owl-item .single_slide .slide_text .btn.btn-1').removeClass('animated').hide();
        $('.owl-item .single_slide .slide_text .welcome_slide_thumb').removeClass('animated').hide();
    });

    owl.on('translated.owl.carousel', function (event) {
        $('.owl-item.active .single_slide .slide_text h2').addClass('animated custom_slideInUp').show();
        $('.owl-item.active .single_slide .slide_text h3').addClass('animated custom_slideInUp_2').show();
        $('.owl-item.active .single_slide .slide_text .btn.btn-1').addClass('animated custom_slideInUp_btn_1').show();
        $('.owl-item.active .single_slide .slide_text .welcome_slide_thumb').addClass('animated custom_slideInUp_btn_2').show();
    });
        
    // 3.0 testimonials active code

    if ($.fn.owlCarousel) {
        $(".single_advisor_profile").owlCarousel({
            items: 1,
            margin: 30,
            loop: true,
            nav: true,
            navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
            dots: false,
            autoplay: false,
            smartSpeed: 800,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn'
        });
    }

    // 4.0 Single Portfolio slider active code

    if ($.fn.owlCarousel) {
        $(".partners_thumbs.slide").owlCarousel({
            items: 6,
            margin: 30,
            loop: true,
            nav: false,
            dots: false,
            autoplay: true,
            smartSpeed: 500,
            responsive: {
                0: {
                    items: 2
                },
                480: {
                    items: 3
                },
                768: {
                    items: 4
                },
                992: {
                    items: 6
                }
            }
        });
    }

    // 5.0 Testimonial active code

    if ($.fn.owlCarousel) {
        $(".testimonials").owlCarousel({
            items: 1,
            margin: 30,
            loop: true,
            nav: false,
            dots: true,
            autoplay: true,
            smartSpeed: 500
        });
    }

    // 6.0 scrollUp active code

    $.scrollUp({
        scrollName: 'scrollUp',
        scrollDistance: 450,
        scrollFrom: 'top',
        scrollSpeed: 500,
        easingType: 'linear',
        animation: 'fade',
        animationSpeed: 200,
        scrollTrigger: false,
        scrollTarget: false,
        scrollText: '<i class="fa fa-angle-up"></i>',
        scrollTitle: false,
        scrollImg: false,
        activeOverlay: false,
        zIndex: 2147483647
    });

    // 8.0 meanmenu active code

    $('.main_header_area #navbar').meanmenu();

    // 10.0 wow active code
    
    new WOW().init();

    // 11.0 counterup active code

    $('.counter').counterUp({
        delay: 5,
        time: 500
    });
})(jQuery);

