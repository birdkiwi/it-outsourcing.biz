(function ($) {
    'use strict';

    // 1.0 Full Screen Code
    // 2.0 Welcome Slide Active code
    // 3.0 testimonials active code
    // 4.0 Single Portfolio slider active code
    // 5.0 scrollUp active code
    // 6.0 Language and Currency Data Active Code
    // 7.0 meanmenu active code
    // 8.0 prevent default a click code
    // 9.0 wow active code
    // 10.0 counterup active code
    // 11.0 countdown clock active code
    // 12.0 Preloader active code

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

    // 7.0 Language and Currency Data Active Code

    var langopt = $('.language_option li'),
        langtxt = $('.lang_view .lang_code');
    langopt.on('click', function () {
        var langcode = $(this).attr('data-code');
        langtxt.text(langcode);
    });

    var curopt = $('.currency_option li'),
        curtxt = $('.cur_view .cur_code');
    curopt.on('click', function () {
        var curcode = $(this).attr('data-code');
        curtxt.text(curcode);
    });

    // 8.0 meanmenu active code

    $('.main_header_area #navbar').meanmenu();

    // 9.0 prevent default a click code

    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    // 10.0 wow active code
    
    new WOW().init();

    // 11.0 counterup active code

    $('.counter').counterUp({
        delay: 5,
        time: 500
    });

    // 12.0 countdown clock active code

    if ($.fn.countdown) {
        $('#clock').countdown('2017/10/10', function (event) {
            var $this = $(this).html(event.strftime('' + '<span>%w</span> weeks ' + '<span>%d</span> days ' + '<span>%H</span> hr ' + '<span>%M</span> min ' + '<span>%S</span> sec'));
        });
    }

    // 13.0 Preloader active code

    $(window).load(function () {
        $('body').css('overflow-y', 'visible');
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    /* Calculation Forms */

    // if($('.calc-form').hasClass('form-var-1')){
        // $('.valid-var-2').removeClass('valid');
    // }
    // if($('.calc-form').hasClass('form-var-2')){
        // $('.valid-var-2').addClass('valid');
    // }

    $('.range-slider').each(function(){
        var t = $(this),
            min = t.data('min'),
            max = t.data('max'),
            input = t.closest('.calc-block').find('.calc-input');
        t.slider({
            min: min,
            max: max,
            range: 'min',
            value: input.val(),
            slide:function( event,ui ) {
                var t = $(this);
                if(t.hasClass('departure-slider')){
                    $('.departure-input').val(0);
                    input.val(ui.value);
                    calc(true, ui.value);
                    return;
                }
                input.val(ui.value);
                calc();
            }
        })
    });

    function delchar(inp){
        var value = inp.val();
        var rep = /[\D]/;
        if(rep.test(value)){
            value = value.replace(rep,'');
            inp.val(value);
        }
        inp.val(value);
    }

    var VAL;

    function focusInp(inp){
        VAL = inp.val();
        inp.val('');
    }

    function blurInp(inp){
        if(inp.val() == '') inp.val(VAL);
    }

    function strRep(str){
        var strNew = str.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        strNew = strNew.replace('.',',');
        return strNew;
    }

    $('.calc-input').on({
        keyup: function(){
            var t = $(this),
                value = +t.val(),
                max = +t.closest('.calc-block').find('.range-slider').data('max');
            t.closest('.calc-block').find('.range-slider').slider('value',value);
            if(value > max) t.val(max);
            delchar(t);
            calc();
        },
        focus: function(){
            focusInp($(this));
        },
        blur: function(){
            blurInp($(this));
        }
    });

    // var sum = 0;

    var isFirstCalc = true;

    function calc(ind, depart){
        var computer = +$('#computer').val(),
            server = +$('#server').val(),
            equipment = +$('#equipment').val(),
            tel = +$('#tel').val(),
            departure = $('#departure'),
            sum = 0,
            dep = 0,
            depRange = 0,
            depRangeMin = 0;
        sum = computer * 850 + server * 2500 + equipment * 500 + tel * 250;
        dep = Math.floor(sum/6000);
        if(dep > 8) dep = 8;

        var slider = departure.closest('.calc-block').find('.range-slider');
        if (sum > 0 && isFirstCalc == true)
        {
            //yaCounter24175795.reachGoal('calc');
            isFirstCalc = false;
        }

        if(!ind){
            slider.slider('value',dep);
            departure.val(slider.slider('value'));
        }
        if(ind){
            if(depart < dep){
                depRangeMin = dep - depart;
            }else{
                depRange = depart - dep;
            }
            departure.val(depart);
        }

        sum += depRange * 3000 - depRangeMin * 2000;

        $('#result').text(strRep(sum));
        $('[name="message"]').val('\nКомпьютеры: ' + computer + ';\nСерверы: ' + server + ';\nОргтехника: ' + equipment + ';\nТелефоны: ' + tel + ';\nВыездов в месяц: ' + departure.val() + ';\nИтого: ' + sum);
    }

    calc();

    $('.range-slider_asvdc').each(function(){
        var t = $(this),
            min = t.data('min'),
            max = t.data('max'),
            value = t.data('value'),
            input = t.closest('.calc-block').find('.calc-input-asvdc');
        t.slider({
            min: min,
            max: max,
            range: 'min',
            value: value,
            slide:function( event,ui ) {
                var t = $(this);
                var values = t.data('values');
                if(values) values = values.split(',');
                var v = Number(ui.value);
                if(values){
                    input.val(values[--v]);
                }else{
                    input.val(ui.value);
                }
                calcasvdc();
            }
        })
    });

    function calcasvdc(){
        if(!$('#input-cpu').length) return;
        var cpu = $('#input-cpu').val(),
            ram = $('#input-ram').val(),
            hdd = $('#input-hdd').val(),
            //os = $('#input-os').val(),
            mo = $('#input-mo').val(),
            c = $('#input-1c').val(),
            //kav = $('#input-kav').val(),
            //sql = $('#input-sql').val(),
            //ts = $('#input-ts').val(),
            cpuCost = 1000,
            ramCost = 300,
            hddCost = 100,
            //osCost = 0,
            moCost = 400,
            cFix = 500,
            cCost = 200,
            //kavCost = 0,
            //sqlCost = 5750/2,
            //tsCost = 0,
            sum = 0;

        cpuCost *= +cpu;
        ramCost *= +ram;
        hddCost *= +hdd/100;
        /* if(os === 'Windows'){
         osCost = 500;
         } */
        moCost *= +mo;
        cCost = (+c * cCost) + cFix;
        /* if(kav === 'Р”Р°'){
         kavCost = 600;
         }
         sqlCost *= +sql;
         if(ts !== '0'){
         if(ts === '8/5'){
         if(os === 'Windows'){
         tsCost = 4000;
         }else{
         tsCost = 6000;
         }
         }
         if(ts === '24/7'){
         if(os === 'Windows'){
         tsCost = 7000;
         }else{
         tsCost = 10000;
         }
         }
         } */
        sum = cpuCost + ramCost + hddCost + moCost + cCost;
        var str = 'Процессор: ' + cpu + '; ';
        str += 'Память: ' + ram + '; ';
        str += 'Гигабайт: ' + hdd + '; ';
        //str += 'Операционная система: ' + os + '; '
        str += 'Офис‚ Microsoft Office: ' + mo + '; ';
        str += '1C: Бухгалтерия: ' + c + '; ';
        //str += 'Kaspersky Anti-Virus: ' + kav + ';';
        //str += 'Microsoft SQL Server Standard: ' + sql + '; ';
        //str += 'Техническая поддержка: ' + ts + '; ';
        str += 'Итого: ' + strRep(sum) + ';';
        $('[name="message"]').val(str);
        $('#result_asvdc').text(strRep(sum))
    }

    calcasvdc();

})(jQuery);

